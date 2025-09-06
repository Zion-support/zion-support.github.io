
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Loader2, Sparkles } from 'lucide-react';
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer',;
import { useResume } from '@/hooks/useResume',;
import { BulkAddSkillsProps } from './types',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { Textarea } from '@/components/ui/textarea',;
export const BulkAddSkills = ({ resumeId, onSuccess }: BulkAddSkillsProps) => {;
  const [bulkSkills, setBulkSkills] = useState(''),;
  const [error, setError] = useState<string | null>(null),;
  const { enhanceContent, isEnhancing } = useResumeEnhancer(),;
  const { addSkill } = useResume(),;
  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills.trim().length === 0) {;
      setError('Please enter some skills to categorize'),;
      return;
    }
<<<<<<< HEAD
  }
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
    } catch (err: any) {
      setError(err.message |'Failed to categorize skills')
    }
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
<<<<<<< HEAD
          <label className="text-sm font-medium" htmlFor="input-Enter multiple skills (comma separated)">Enter multiple skills (comma separated)</label>
          <Textarea
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
<<<<<<< HEAD
<<<<<<< HEAD
            value = {bulkSkills,}
            onChange = {(e,) => setBulkSkills(e.target.value),}
          />
        </div>
        <Button
          onClick = {handleCategorizeSkills,}
          disabled = {isEnhancing |!bulkSkills.trim(),}
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
          <Textarea 
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
        <Button 
          onClick = {handleCategorizeSkills,}
          disabled = {isEnhancing || !bulkSkills.trim(),}
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />;
        </div>;
        <Button;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills.trim()}
=======
            value = {bulkSkills,}




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          className="gap-2"
        >
          {isEnhancing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          Categorize with AI
        </Button>
<<<<<<< HEAD
<<<<<<< HEAD
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
=======

      set_error (err.message || 'Failed to categorize skills');
    }
  }
  return (
    <div className="bg - muted / 40 p - 6 rounded - lg">;
      <h3 className="text - md font - medium mb - 4">Bulk Add & AI Categorization</h3>;
      <div className="space - y-4">;
        <div className="space - y-2">;
          <label className="text - sm font - medium" html_for="input - Enter multiple skills (comma separated)">Enter multiple skills (comma separated)</label>;
          <Textarea;
            className="min - h-24";
            placeholder="Python, React, TypeScript, Project Management, Communication...";
            value = {bulk_skills, }
            on_change = {(e, ) => setBulkSkills (e.target.value), }
          />;
        </div>;
        <Button;
          on_click = {handleCategorizeSkills, }
          disabled = {is_enhancing || !bulk_skills.trim (), }
          className="gap - 2";
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 animate - spin" />) : (
            <Sparkles className="h - 4 w - 4" />)}
          Categorize with AI;
        </Button>;
        <p className="text - xs text - muted - foreground mt - 1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

=======
=======
        
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>
        
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
  );
};
<<<<<<< HEAD
=======
      </div>;
    </div>;
  );
};
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

'"

'";
=======
  )
=======
},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
