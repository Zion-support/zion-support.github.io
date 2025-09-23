
import { useState } from 'react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
Loader2Sparkles
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
import { useResume } from '@/hooks/useResume';
import { BulkAddSkillsProps } from './types';
import { AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

export const BulkAddSkills = ({ resumeIdonSuccess }: BulkAddSkillsProps) => {
  const [bulkSkillsetBulkSkills] = useState('');
  const [errorsetError] = useState<string | null>(null);
  const { enhanceContentisEnhancing } = useResumeEnhancer();
=======
import { Loader2, Sparkles } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer';
import { useResume } from '@/hooks/useResume';
import { BulkAddSkillsProps } from './types';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';

export const BulkAddSkills = ({ resumeId, onSuccess }: BulkAddSkillsProps) => {
  const [bulkSkills, setBulkSkills] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
>>>>>>> origin/auto/autonomy-17186719616
  const { addSkill } = useResume();

  const handleCategorizeSkills = async () => {
    if (!bulkSkills || bulkSkills.trim().length === 0) {
      setError('Please enter some skills to categorize');
      return;
    }
    
    setError(null);
    try {
      const enhancedContent = await enhanceContent(
        bulkSkills,
        'skill-categorization'
      );
      
      if (enhancedContent) {
        try {
          // Parse the JSON response
          const categorizedSkills = JSON.parse(enhancedContent);
          
          // Add the categorized skills
<<<<<<< HEAD
          for (const [categoryskillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
                await addSkill(resumeId{
                  name: skillName,
                  category: category,
                  proficiency: 3});
=======
          for (const [category, skillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
                await addSkill(resumeId, {
                  name: skillName,
                  category: category,
                  proficiency: 3,
                });
>>>>>>> origin/auto/autonomy-17186719616
              }
            }
          }
          
          // Reset the form and bulk input
          setBulkSkills('');
          
          // Refresh the skills
          await onSuccess();
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Failed to categorize skills');
    }
  };

  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
          <Textarea 
            className="min-h-24"
<<<<<<< HEAD
            placeholder="PythonReactTypeScriptProject ManagementCommunication..."
=======
            placeholder="Python, React, TypeScript, Project Management, Communication..."
>>>>>>> origin/auto/autonomy-17186719616
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>

        <Button 
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
          className="gap-2"
        >
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Categorize with AI
        </Button>
        
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>
    </div>
  );
};
