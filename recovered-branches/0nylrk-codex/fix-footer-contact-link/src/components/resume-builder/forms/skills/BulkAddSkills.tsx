

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
import {use_resume} from '@/hooks / use_resume';
import {BulkAddSkillsProps} from './types';
<<<<<<< HEAD
<<<<<<< HEAD
  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;
      setError('Please enter some skills to categorize');
      return;
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;

      setError('Please enter some skills to categorize');
      return;
    }



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setError(null);
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills;
        'skill-categorization';
      );
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Reset the form and bulk input
          setBulkSkills('');
          // Refresh the skills
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          // Reset the form and bulk input;
          setBulkSkills ('');
;
          // Refresh the skills;
          await on_success ();
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
          // Refresh the skills;
          await on_success ();

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        } catch (err) {
          set_error ('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON && JSON.parse(enhancedContent);
<<<<<<< HEAD
<<<<<<< HEAD
          // Add the categorized skills;
          for (const [category, skillsList] of Object && Object.entries(categorizedSkills)) {;
            if (Array && Array.isArray(skillsList)) {;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          // Add the categorized skills;
          for (const [category, skillsList] of Object && Object.entries(categorizedSkills)) {;
            if (Array && Array.isArray(skillsList)) {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;
                  proficiency: 3});
              }
            }
          }
<<<<<<< HEAD
<<<<<<< HEAD
;
          // Reset the form and bulk input;
          setBulkSkills(''),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          // Reset the form and bulk input;
          setBulkSkills('');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          // Refresh the skills;
          await onSuccess();
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.');
<<<<<<< HEAD
<<<<<<< HEAD
        }
      }
    } catch (err: any) {
      setError(err.message |'Failed to categorize skills')
    }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  };
  },
<<<<<<< HEAD

=======
  },
=======
  };
  },


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>


  },
  };
  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  return (

  }
  return (

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
    <div className="bg-muted/40 p-6 rounded-lg">;
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;

          <Textarea 

            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
        <Button
        <Button 
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        <Button 

          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

            onChange={(e) => setBulkSkills(e && e.target.value)}
          />;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills && bulkSkills.trim()}
          className="gap-2">;
          {isEnhancing ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;

<<<<<<< HEAD
},


};
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
}

},
};
},
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
