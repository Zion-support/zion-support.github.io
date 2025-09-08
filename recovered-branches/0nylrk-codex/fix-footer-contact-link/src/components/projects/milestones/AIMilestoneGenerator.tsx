













  return (

    <div className="space-y-4">;
      <div className="flex items-center justify-between">;
        <h3 className="text-lg font-medium flex items-center">;
          <Sparkles className="w-5 h-5 mr-2 text-primary" />;
          AI Milestone Generator;
        </h3>;

        <Button
          variant="outline"
          onClick={handleGenerateMilestones}

          disabled={isGenerating || !scope || !startDate || !projectType}>;

          {isGenerating ? (;
            <>;
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
              Generating...;
            </>;

          ) : (;

            <>;
              <Sparkles className="mr-2 h-4 w-4" />;
              Generate Milestones;
            </>;
          )}
        </Button>;
      </div>;


      {generatedMilestones && generatedMilestones.length > 0 && (;

        <Card>;

          <CardContent className="pt-6">;
            <div className="flex justify-between items-center mb-4">;
              <p className="text-sm text-muted-foreground">;


                      <input
                        type="checkbox"

