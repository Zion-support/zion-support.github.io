

export const _BulkAddSkills = (_{_resumeId, _onSuccess}: BulkAddSkillsProps) => {_const [bulkSkills, _setBulkSkills] = useState('');
  const [error, _setError] = useState<string | null>(null);
  const { enhanceContent, _isEnhancing} = useResumeEnhancer();
  const {_addSkill} = useResume();

  const _handleCategorizeSkills = async () => {_if (!bulkSkills || bulkSkills.trim().length === 0) {
      setError('Please enter some skills to categorize');
      return;}
    
    setError(null);
    try {_const _enhancedContent = await enhanceContent(
        bulkSkills, _'skill-categorization'
      );
      
      if (enhancedContent) {
        try {
          // Parse the JSON response
          const _categorizedSkills = JSON.parse(enhancedContent);
          
          // Add the categorized skills
          for (const [category, _skillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
                await addSkill(resumeId, _{
                  name: skillName, _category: category, _proficiency: 3});
              }
            }
          }
          
          // Reset the form and bulk input
          setBulkSkills('');
          
          // Refresh the skills
          await onSuccess();
        } catch (err) {_setError('Failed to parse categorized skills. Please try again.');}
      }
    } catch (err: unknown) {_setError(err.message || 'Failed to categorize skills');}
  };

  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
          <Textarea 
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={_bulkSkills}
            onChange={_(_e) => setBulkSkills(e.target.value)}
          />
        </div>

        <Button 
          onClick={_handleCategorizeSkills}
          disabled={_isEnhancing || !bulkSkills.trim()}
          className="gap-2"
        >
          {_isEnhancing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Categorize with AI
        </Button>
        
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
        {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>
    </div>
  );
};
