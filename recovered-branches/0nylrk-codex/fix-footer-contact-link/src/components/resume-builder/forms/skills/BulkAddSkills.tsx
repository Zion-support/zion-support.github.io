

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
import {use_resume} from '@/hooks / use_resume';
import {BulkAddSkillsProps} from './types';


  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;

      setError('Please enter some skills to categorize');
      return;
    }



    setError(null);
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills;
        'skill-categorization';
      );

import {Alert, AlertDescription} from '@/components / ui / alert';
import {Textarea} from '@/components / ui / textarea';
export const BulkAddSkills = ({ resume_id, on_success }: BulkAddSkillsProps) =>: any {
  const [bulk_skills, setBulkSkills] = useState ('');
  const [error, set_error] = useState < string | null>(null);
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const { add_skill } = use_resume ();
;
  const handleCategorizeSkills = async () => {
    // Check condition
if (.length === 0) {) {
  $2
}
      set_error ('Please enter some skills to categorize');
      return;
    }
    set_error (null);
    try {
      const enhanced_content = await enhance_content (
        bulk_skills;
        'skill - categorization');
;
      // Check condition
if ( {) {
  $2
}
        try {
          // Parse the JSON response;
          const categorized_skills = JSON.parse (enhanced_content);
;
          // Add the categorized skills;
          for (const [category, skills_list] of Object.entries (categorized_skills)) {
            if () {) {
  $2
}
              for (const skill_name of skills_list as string[]) {
                await add_skill (resume_id, {
                  name: skill_name,
                  category: category,
                  proficiency: 3});
              }
            }
          }
          // Reset the form and bulk input
          setBulkSkills('');
          // Refresh the skills
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  },
  };
  },

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
          <Textarea
          <Textarea 
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>
        <Button
        <Button 
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
