case "Low Match":;
        return "bg-orange-100 text-orange-800",;
      default:;
        return "bg-gray-100 text-gray-800";


    }
  },;
;
  // Trigger the scoring process;
  const handleScore = async () => {;
    try {;
      setIsScoring(true),;
      ;
      // Call the trigger_resume_scoring function;
      const { error } = await supabase.rpc(;
        'trigger_resume_scoring',;
        { application_id:application.id }
      ),;
      ;
      if (error) throw error,;
      ;
      toast.success("Resume scoring has been initiated"),;
      ;
      // Poll for results every 3 seconds for up to 30 seconds;
      let attempts = 0,;
      const maxAttempts = 10,;
      ;
      const checkScore = async () => {;
        attempts++,;
        ;
        const { data, error } = await supabase;
          .from("job_applications");
          .select("*");
          .eq("id", application.id);
          .single(),;
          ;
        if (error) {;
          setIsScoring(false),;
          return toast.error("Failed to check scoring status"),;
        }
        ;
        if (data.scored_at) {;
          setIsScoring(false),;
          toast.success("Resume scoring completed"),;
          if (onScoreUpdated) onScoreUpdated(data as JobApplication),;
          return,;
        }
        ;
        if (attempts < maxAttempts) {;
          setTimeout(checkScore, 3000),;
        } else {;
          setIsScoring(false),;
          toast.info("Scoring is taking longer than expected. Check back later."),;
        }
      },;
      ;
      setTimeout(checkScore, 3000),;
      ;
    } catch (error:any) {;
      setIsScoring(false),;
      toast.error(`Failed to score resume:${error.message}`),;
    }
  },;
;
  // Render the score result or button to score;
  return (;

    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg font-medium flex items-center justify-between">;
          Resume Match Score;

      <CardContent>;
        {hasScore ? (;
          <div>;
            {/* Score */}
            <div className="flex items-center mb-4">;
              <div className="p-2 bg-primary/10 rounded-full mr-3">;
                <Star className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Match Score</div>;

                <BarChart2 className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Summary</div>;

                <Lightbulb className="h-5 w-5 text-primary" />;
              </div>;
              <div>;
                <div className="text-sm text-muted-foreground">Suggestion</div>;

                </Badge>;
                {scoredDate && (;
                  <div className="text-xs text-muted-foreground mt-1">;
                    Scored on {scoredDate}

}