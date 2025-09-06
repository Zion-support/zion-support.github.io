    try {
      const { data, error } = await supabase;
        .from ("job_talent_matches");
        .select (`;
          *;
          talent_profile: talent_id (
            id;
            user_id;
            full_name;
            professional_title;
            profile_picture_url;
            hourly_rate;
            bio;
            years_experience;
    } finally {
      setIsLoading (false);
    }
  }
  const triggerAIMatching = async () => {
    setIsProcessing (true);
    try {
      // Refresh the matches list
      await fetchMatches()
    } catch (error) {
      console && console.error("Error triggering AI matching:", error);
      toast({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later."
        variant: "destructive"})
=======
      const response = await supabase.functions.invoke ('job - talent - matcher', {
        body: { job_id }});
;
      if (throw new Error (response.error.message)) {
  $2
}
      toast ({
        title: "AI Matching Complete",
        description: `Found ${response.data.matches || 0} potential talent matches for this job.`});
;
      // Refresh the matches list;
      await fetch_matches ();
    } catch (error) {
      console.error ("Error triggering AI matching:", error);
      toast ({
        title: "Matching Failed";
        description: "Could not process talent matching. Please try again later.",
        variant: "destructive"});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsProcessing (false);
    }
  }
  }
}