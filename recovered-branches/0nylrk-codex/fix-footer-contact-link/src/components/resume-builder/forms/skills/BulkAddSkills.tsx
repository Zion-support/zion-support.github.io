
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
import {use_resume} from '@/hooks / use_resume';
import {BulkAddSkillsProps} from './types';
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx


  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;

      setError('Please enter some skills to categorize');
      return;
    }



========
  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;
      setError('Please enter some skills to categorize');
      return;
    }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
    setError(null);
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills;
        'skill-categorization';
      );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks/useResumeEnhancer';
import {useResume} from '@/hooks/useResume';
import {BulkAddSkillsProps} from './types';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Textarea} from '@/components/ui/textarea';
export const BulkAddSkills = ({ resumeId, onSuccess }: BulkAddSkillsProps) => {;
  const [bulkSkills, setBulkSkills] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
  const { addSkill } = useResume();
  const handleCategorizeSkills = async () => {
    if (!bulkSkills |bulkSkills.trim().length === 0) {
      setError('Please enter some skills to categorize');
      return
    }
    setError(null);
    try {
      const enhancedContent = await enhanceContent(
        bulkSkills;
        'skill-categorization'
      );
      if (enhancedContent) {
        try {
          // Parse the JSON response
          const categorizedSkills = JSON.parse(enhancedContent);
          // Add the categorized skills
          for (const [category, skillsList] of Object.entries(categorizedSkills)) {
            if (Array.isArray(skillsList)) {
              for (const skillName of skillsList as string[]) {
                await addSkill(resumeId, {
                  name: skillName
                  category: category
                  proficiency: 3})
              }
            }
          }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          // Reset the form and bulk input
          setBulkSkills('');
          // Refresh the skills
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { Loader2, Sparkles } from 'lucide-react',;
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
=======
          // Reset the form and bulk input;
          setBulkSkills ('');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
          // Refresh the skills;
          await on_success ();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
        } catch (err) {
          set_error ('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON && JSON.parse(enhancedContent);
          // Add the categorized skills;
          for (const [category, skillsList] of Object && Object.entries(categorizedSkills)) {;
            if (Array && Array.isArray(skillsList)) {;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;
                  proficiency: 3});
              }
            }
          }
<<<<<<< HEAD
          // Reset the form and bulk input;
          setBulkSkills('');
=======
;
          // Reset the form and bulk input;
          setBulkSkills(''),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          // Refresh the skills;
          await onSuccess();
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.');
<<<<<<< HEAD
<<<<<<< HEAD

        }
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      }
    } catch (err: any) {
      setError(err.message |'Failed to categorize skills')
    }
  }
  },
  };
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="bg-muted/40 p-6 rounded-lg">
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Textarea
          <Textarea 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

          onClick={handleCategorizeSkills}

=======


  },
=======
  };
=======
  },



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

========
  }
  return (
=======

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
          setError('Failed to parse categorized skills. Please try again.'),;        }
      }
    } catch (err:any) {;
      setError(err.message || 'Failed to categorize skills');
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
    <div className="bg-muted/40 p-6 rounded-lg">;
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
          <Textarea
=======

          <Textarea 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx


        <Button 

          onClick={handleCategorizeSkills}

          disabled={isEnhancing || !bulkSkills.trim()}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button
        <Button 
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

};

},

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
            onChange={(e) => setBulkSkills(e && e.target.value)}
          />;
        </div>;
        <Button
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills && bulkSkills.trim()}
          className="gap-2">;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;
<<<<<<< HEAD
        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  );
=======

},

=======

};
      set_error (err.message || 'Failed to categorize skills');
    }
  }
;
  return (
    <div className="bg - muted / 40 p - 6 rounded - lg">;
      <h3 className="text - md font - medium mb - 4">Bulk Add & AI Categorization</h3>;
      <div className="space - y-4">;
        <div className="space - y-2">;
          <label className="text - sm font - medium">Enter multiple skills (comma separated)</label>;
          <Textarea;
            className="min - h-24";
            placeholder="Python, React, TypeScript, Project Management, Communication...";
            value={bulk_skills}
            on_change={(e) => setBulkSkills (e.target.value)}
          />;
        </div>;
        <Button;
          on_click={handleCategorizeSkills}
          disabled={is_enhancing || !bulk_skills.trim ()}
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
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
        ;
        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;
        ;
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  ),;
},; if (enhancedContent) {
  try {
  //Parse the JSON response //Add the categorized skills for (const [category, skillsList] of Object.entries (categorizedSkills) ) {
  if (Array.isArray (skillsList) ) {
  for (const skillName of skillsList as string[]) {
  
}
}
}//Reset the form and bulk input setBulkSkills ('');
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />) 
}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/BulkAddSkills.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

},
};
},
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
