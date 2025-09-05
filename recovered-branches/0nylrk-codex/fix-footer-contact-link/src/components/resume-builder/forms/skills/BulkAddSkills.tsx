
<<<<<<< HEAD
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { Loader2, Sparkles } from 'lucide-react',
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',
import { useResume } from '@/hooks/useResume',
import { BulkAddSkillsProps } from './types',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { Textarea } from '@/components/ui/textarea',
export const BulkAddSkills = ({ resumeId, onSuccess }: BulkAddSkillsProps) => {
  const [bulkSkills, setBulkSkills] = useState(''),
  const [error, setError] = useState<string | null>(null),
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),
  const { addSkill } = useResume(),

  const handleCategorizeSkills = async () => {
    if (!bulkSkills || bulkSkills.trim().length === 0) {
      setError('Please enter some skills to categorize'),
      return
    }
    
    setError(null),
    try {
      const enhancedContent = await enhanceContent(
        bulkSkills,
        'skill-categorization'
      ),
=======

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (enhancedContent) {
        try {
          // Parse the JSON response
<<<<<<< HEAD
          const categorizedSkills = JSON.parse(enhancedContent),
=======
          const _categorizedSkills = JSON.parse(enhancedContent);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          // Add the categorized skills
          for (const [category, _skillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
<<<<<<< HEAD
                await addSkill(resumeId, {
                  name: skillName,
                  category: category,
                  proficiency: 3})
=======
                await addSkill(resumeId, _{
                  name: skillName, _category: category, _proficiency: 3});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }
            }
          }
          
          // Reset the form and bulk input
          setBulkSkills(''),
          
          // Refresh the skills
<<<<<<< HEAD
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')
        }
      }
    } catch (err: any) {
      setError(err.message || 'Failed to categorize skills')
    }
  },
=======
          await onSuccess();
        } catch (err) {_setError('Failed to parse categorized skills. Please try again.');}
      }
    } catch (err: unknown) {_setError(err.message || 'Failed to categorize skills');}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
      <h3 className=&quot;text-md font-medium mb-4&quot;>Bulk Add & AI Categorization</h3>
      <div className=&quot;space-y-4&quot;>
        <div className=&quot;space-y-2&quot;>
          <label className=&quot;text-sm font-medium&quot;>Enter multiple skills (comma separated)</label>
          <Textarea 
<<<<<<< HEAD
            className=&quot;min-h-24&quot;
            placeholder=&quot;Python, React, TypeScript, Project Management, Communication...&quot;
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
=======
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={_bulkSkills}
            onChange={_(_e) => setBulkSkills(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>

        <Button 
<<<<<<< HEAD
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
          className=&quot;gap-2&quot;
        >
          {isEnhancing ? (
            <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
=======
          onClick={_handleCategorizeSkills}
          disabled={_isEnhancing || !bulkSkills.trim()}
          className="gap-2"
        >
          {_isEnhancing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <Sparkles className=&quot;h-4 w-4&quot; />
          )}
          Categorize with AI
        </Button>
        
        <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
<<<<<<< HEAD
        {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}
=======
        {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
},
