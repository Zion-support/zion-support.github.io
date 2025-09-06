

;
    setError(null),;
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills,;
        'skill-categorization';
      ),;
      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON.parse(enhancedContent),;
          // Add the categorized skills;
          for (const [category, skillsList] of Object.entries(categorizedSkills)) {;
            if (Array.isArray(skillsList)) {;
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;
                  proficiency: 3});
              }
            }
          }
;
          // Reset the form and bulk input;
          setBulkSkills(''),;
          // Refresh the skills;
          await onSuccess();
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {
      setError(err.message |'Failed to categorize skills')
    }
  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
            value = {bulkSkills,}
            onChange = {(e,) => setBulkSkills(e.target.value),}
          />
        </div>
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />;
        </div>;
        <Button;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
          className="gap-2"
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Categorize with AI
        </Button>
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>);
}

            onChange = {(e,) => setBulkSkills(e && e.target.value),}
          />;
        </div>;

        <Button
          onClick = {handleCategorizeSkills,}
          disabled = {isEnhancing || !bulkSkills && bulkSkills.trim(),}
          className="gap-2">;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;

        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;

        
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

'"

'";
  )
},
