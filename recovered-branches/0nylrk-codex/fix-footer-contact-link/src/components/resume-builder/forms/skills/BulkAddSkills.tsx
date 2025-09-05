
<<<<<<< HEAD
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Loader2, Sparkles } from 'lucide-react',;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
import { useResume } from '@/hooks/useResume',;
import { BulkAddSkillsProps } from './types',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Textarea } from '@/components/ui/textarea',;
;
export const BulkAddSkills = ({ resumeId, onSuccess } BulkAddSkillsProps) => {;
  const [bulkSkills, setBulkSkills] = useState(''),;
  const [error, setError] = useState<string | null>(null),;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const { addSkill } = useResume(),;
;
  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills.trim().length === 0) {;
      setError('Please enter some skills to categorize'),;
      return,;
    }
    ;
    setError(null),;
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills,;
        'skill-categorization';
      ),;
      ;
      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON.parse(enhancedContent),;
          ;
          // Add the categorized skills;
          for (const [category, skillsList] of Object.entries(categorizedSkills)) {;
            if (Array.isArray(skillsList)) {;
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name:skillName,;
                  category:category,;
                  proficiency:3}),;
              }
            }
          }
          ;
          // Reset the form and bulk input;
          setBulkSkills(''),;
          ;
          // Refresh the skills;
          await onSuccess(),;
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.'),;
=======
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
      if (enhancedContent) {
        try {
          // Parse the JSON response
          const categorizedSkills = JSON.parse(enhancedContent),          
          // Add the categorized skills
          for (const [category, _skillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
                await addSkill(resumeId, {
                  name: skillName,
                  category: category,
                  proficiency: 3})              }
            }
          }
          
          // Reset the form and bulk input
          setBulkSkills(''),
          
          // Refresh the skills
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        }
      }
    } catch (err:any) {;
      setError(err.message || 'Failed to categorize skills');
    }
<<<<<<< HEAD
  },;
;
  return (;
    <div className="bg-muted/40 p-6 rounded-lg">;
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;
          <Textarea ;
            className="min-h-24";
            placeholder="Python, React, TypeScript, Project Management, Communication...";
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />;
        </div>;
;
        <Button ;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
          className="gap-2";
        >;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) :(;
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;
        ;
        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;
        ;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  ),;
},;
=======
  },
  return (
    <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
      <h3 className=&quot;text-md font-medium mb-4&quot;>Bulk Add & AI Categorization</h3>
      <div className=&quot;space-y-4&quot;>
        <div className=&quot;space-y-2&quot;>
          <label className=&quot;text-sm font-medium&quot;>Enter multiple skills (comma separated)</label>
          <Textarea 
            className=&quot;min-h-24&quot;
            placeholder=&quot;Python, React, TypeScript, Project Management, Communication...&quot;
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}          />
        </div>

        <Button 
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
          className=&quot;gap-2&quot;
        >
          {isEnhancing ? (
            <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />          ) : (
            <Sparkles className=&quot;h-4 w-4&quot; />
          )}
          Categorize with AI
        </Button>
        
        <p className=&quot;text-xs text-muted-foreground mt-1&quot;>
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
        {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}      </div>
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
