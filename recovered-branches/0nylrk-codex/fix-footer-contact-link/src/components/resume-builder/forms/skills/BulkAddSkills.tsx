

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


  },  return (
=======
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
          // Reset the form and bulk input;
          setBulkSkills ('');
;
          // Refresh the skills;
          await on_success ();

        } catch (err) {
          set_error ('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {


      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON && JSON.parse(enhancedContent);

          // Add the categorized skills;
          for (const [category, skillsList] of Object && Object.entries(categorizedSkills)) {;
            if (Array && Array.isArray(skillsList)) {;
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;
                  proficiency: 3});
              }
            }
          }

          // Reset the form and bulk input;
          setBulkSkills('');

          // Refresh the skills;
          await onSuccess();
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.');

        }
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
    }


  },
  };
  },



  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
import {use_resume} from '@/hooks / use_resume';
=======



import {useState} from 'react';'
import {Button} from '@/components / ui / button';'
import {Loader2, Sparkles} from 'lucide-react';'
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';'
import {use_resume} from '@/hooks / use_resume';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {BulkAddSkillsProps} from './types';



    setError(null);
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills;'
        'skill-categorization';
      );
'
import {Alert, AlertDescription} from '@/components / ui / alert';'
import {Textarea} from '@/components / ui / textarea';
export const BulkAddSkills = ({ resume_id, on_success }: BulkAddSkillsProps) =>: any {';
  const [bulk_skills, setBulkSkills] = useState ('');
  const [error, set_error] = useState < string | null>(null);
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const { add_skill } = use_resume ();
;
  const handleCategorizeSkills = async () => {}
    // Check condition;
if (.length === 0) {) {}
  $2;
}'
      set_error ('Please enter some skills to categorize');
      return;
    }
    set_error (null);
    try {}
      const enhanced_content = await enhance_content (
        bulk_skills;'
        'skill - categorization');
;
      // Check condition;
if ( {) {}
  $2;
}
        try {}
          // Parse the JSON response;
          const categorized_skills = JSON.parse (enhanced_content);
;
          // Add the categorized skills;
          for (const [category, skills_list] of Object.entries (categorized_skills)) {}
            if () {) {}
  $2;
}
              for (const skill_name of skills_list as string[]) {}
                await add_skill (resume_id, {}
                  name: skill_name,
                  category: category,
                  proficiency: 3});
              }
            }
          }

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
          // Reset the form and bulk input
          setBulkSkills('');
          // Refresh the skills
          await onSuccess()
        } catch (err) {
          setError('Failed to parse categorized skills. Please try again.')
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          // Reset the form and bulk input;
=======
          // Reset the form and bulk input;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          setBulkSkills ('');
;
          // Refresh the skills;
          await on_success ();



        } catch (err) {'
          set_error ('Failed to parse categorized skills. Please try again.');
        }
      }
    } catch (err: any) {}
      if (enhancedContent) {;
        try {;
          // Parse the JSON response;
          const categorizedSkills = JSON && JSON.parse(enhancedContent);

              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;
                  proficiency: 3});
              }
            }
          }

          // Refresh the skills;
          await onSuccess();
        } catch (err) {;'
          setError('Failed to parse categorized skills. Please try again.');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  },  return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        }
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
<<<<<<< HEAD
  }
  },
  };
  },

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  return (

<<<<<<< HEAD
=======
=======
  },  return (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
      }
    } catch (err: any) {'
      setError(err.message |'Failed to categorize skills')
    }
  }
  },
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };
  },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="bg-muted/40 p-6 rounded-lg">"
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>"
      <div className="space-y-4">"
        <div className="space-y-2">"
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>
<<<<<<< HEAD
          <Textarea
          <Textarea 
            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>

  },
  };
  },

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

          <Textarea 

            className="min-h-24"
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            onChange={(e) => setBulkSkills(e.target.value)}
          />
        </div>
        <Button
        <Button 
=======

<Button
        <Button 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Textarea;
          <Textarea;
          <Textarea;
"
            className="min-h-24""
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


        <Button;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          className="gap-2"
        >
          {isEnhancing ? ("
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : ("
            <Sparkles className="h-4 w-4" />
          )}
          Categorize with AI;
        </Button>"
        <p className="text-xs text-muted-foreground mt-1">
          AI will identify skills and categorize them automatically. This may take a moment to process.
        </p>"
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>
    </div>
  )
}

},
};
},

            onChange={(e) => setBulkSkills(e && e.target.value)}
          />;
        </div>;

        <Button;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing || !bulkSkills && bulkSkills.trim()}"
          className="gap-2">;
          {isEnhancing ? (;"
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Sparkles className="h-4 w-4" />;
          )}
          Categorize with AI;
        </Button>;
<<<<<<< HEAD
=======

"
        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;
"
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  );



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        <p className="text-xs text-muted-foreground mt-1">;
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;

        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>;
  );

},

};
    }
  }
  return (
          <Textarea"
            className="min-h-24""
            placeholder="Python, React, TypeScript, Project Management, Communication..."
            value={bulkSkills}'
      set_error (err.message || 'Failed to categorize skills');
    }
  }
;
<<<<<<< HEAD
  return (
    <div className="bg - muted / 40 p - 6 rounded-lg">;
      <h3 className="text - md font - medium mb-4">Bulk Add & AI Categorization</h3>;
      <div className="space-y-4">;
        <div className="space-y-2">;
          <label className="text - sm font-medium">Enter multiple skills (comma separated)</label>;
          <Textarea;
<<<<<<< HEAD
<<<<<<< HEAD
            className="min-h-24";
=======
  return ("
    <div className="bg - muted / 40 p - 6 rounded - lg">;"
      <h3 className="text - md font - medium mb - 4">Bulk Add & AI Categorization</h3>;"
      <div className="space - y-4">;"
        <div className="space - y-2">;"
          <label className="text - sm font - medium">Enter multiple skills (comma separated)</label>;
          <Textarea;"
            className="min - h-24";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="min - h-24";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            className="min-h-24";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            placeholder="Python, React, TypeScript, Project Management, Communication...";
            value={bulk_skills}
            on_change={(e) => setBulkSkills (e.target.value)}
          />;
        </div>;
        <Button;
          on_click={handleCategorizeSkills}
<<<<<<< HEAD
          disabled={is_enhancing || !bulk_skills.trim ()}
          className="gap-2";
        >;
          {is_enhancing ? (
            <Loader2 className="h - 4 w - 4 animate-spin" />) : (
            <Sparkles className="h - 4 w-4" />)}
          Categorize with AI;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
        <p className="text - xs text - muted - foreground mt-1">;
=======
          disabled={is_enhancing || !bulk_skills.trim ()}"
          className="gap - 2";
        >;
          {is_enhancing ? ("
            <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
            <Sparkles className="h - 4 w - 4" />)}
          Categorize with AI;
        </Button>;"
        <p className="text - xs text - muted - foreground mt - 1">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <p className="text - xs text - muted - foreground mt - 1">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        <p className="text - xs text - muted - foreground mt-1">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          AI will identify skills and categorize them automatically. This may take a moment to process.;
        </p>;"
        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      </div>;
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {Loader2, Sparkles} from 'lucide-react';
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';
import {use_resume} from '@/hooks / use_resume';
import {BulkAddSkillsProps} from './types';

import {useState} from 'react';''
import {Button} from '@/components / ui / button';''
import {Loader2, Sparkles} from 'lucide-react';''
import {useResumeEnhancer} from '@/hooks / useResumeEnhancer';''
import {use_resume} from '@/hooks / use_resume';''
import {BulkAddSkillsProps} from './types';'
  const handleCategorizeSkills = async () => {;
    if (!bulkSkills || bulkSkills && bulkSkills.trim().length === 0) {;

      setError('Please enter some skills to categorize');
      return;
    }



    setError(null);
    try {;
      const enhancedContent = await enhanceContent(;
        bulkSkills;
        'skill-categorization';')
      );

import {Alert, AlertDescription} from '@/components / ui / alert';
import {Textarea} from '@/components / ui / textarea';
export const BulkAddSkills = ({ resume_id, on_success }: BulkAddSkillsProps) =>: any {
  // TODO: Implement
  const [bulk_skills, setBulkSkills] = useState ();
  const [error, set_error] = useState < string | null>(null);
  const { enhance_content, is_enhancing } = useResumeEnhancer ();
  const { add_skill } = use_resume ();
;
  const handleCategorizeSkills = async () => {
    // Check condition;
if (.length === 0) {) {
  $2;
      set_error ('Please enter some skills to categorize');
    set_error (null);
    try {
  // TODO: Implement
      const enhanced_content = await enhance_content (
        bulk_skills;)
        'skill - categorization');
      // Check condition;
if ( {) {
  // TODO: Implement
          // Parse the JSON response;
          const categorized_skills = JSON.parse (enhanced_content);
          // Add the categorized skills;
          for (const [category, skills_list] of Object.entries (categorized_skills)) {
            if () {) {
              for (const skill_name of skills_list as string[]) {
                await add_skill (resume_id, {
                  name: skill_name,
                  category: category,)
                  proficiency: 3});
          // Reset the form and bulk input;
          setBulkSkills ();
          // Refresh the skills;
          await on_success ();

        } catch (err) {
          set_error ('Failed to parse categorized skills. Please try again.');
    } catch (err: any) {


      if (enhancedContent) {;
          // Parse the JSON response;
          const categorizedSkills = JSON && JSON.parse(enhancedContent);

          // Add the categorized skills;
          for (const [category, skillsList] of Object && Object.entries(categorizedSkills)) {;
            if (Array && Array.isArray(skillsList)) {;
              for (const skillName of skillsList as string[]) {;
                await addSkill(resumeId, {;
                  name: skillName,;
                  category: category,;)

          // Reset the form and bulk input;
          setBulkSkills();
          // Refresh the skills;
          await onSuccess();
        } catch (err) {;
          setError('Failed to parse categorized skills. Please try again.');
    } catch (err: any) {;
      setError(err && err.message || 'Failed to categorize skills');


  },
  };



  return (

      })
      setError(err.message |'Failed to categorize skills')
    } catch (err: any) {'
      setError(err.message |'Failed to categorize skills')'

    }
  }
  },
  };
  },

  return ('
    <div className="bg-muted/40 p-6 rounded-lg">"
</div>"
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>""
      <div className="space-y-4">"
        <div className="space-y-2">"
</div>)"
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>"
          <Textarea;
          <Textarea;"
            className="min-h-24"""
            placeholder="Python, React, TypeScript, Project Management, Communication...""
            value={bulkSkills}
            onChange={(e) => setBulkSkills(e.target.value)}

        </div>
  const [error, setError] = useState<string | null>(null),;
</string>"
    <div className="bg-muted/40 p-6 rounded-lg">;"
      <h3 className="text-md font-medium mb-4">Bulk Add & AI Categorization</h3>;""
      <div className="space-y-4">;"
        <div className="space-y-2">;"
          <label className="text-sm font-medium">Enter multiple skills (comma separated)</label>;"




        <Button;
          onClick={handleCategorizeSkills}
          disabled={isEnhancing |!bulkSkills.trim()}
          disabled={isEnhancing || !bulkSkills.trim()}

"
          className="gap-2""
        >
            <Loader2 className="h-4 w-4 animate-spin" />"
</Loader2>"
            <Sparkles className="h-4 w-4" />"

        <p className="text-xs text-muted-foreground mt-1">"
</p>
        </p>"
        {error && <Alert variant="destructive"><AlertDescription>{error}}"
        </div>;
          disabled={isEnhancing || !bulkSkills && bulkSkills.trim()}"
          className="gap-2">;"
            <Loader2 className="h-4 w-4 animate-spin" />;"
            <Sparkles className="h-4 w-4" />;"

        ;"
        <p className="text-xs text-muted-foreground mt-1">;"
        </p>;"
            value={bulkSkills}"
      set_error (err.message || 'Failed to categorize skills');
    <div className="bg - muted / 40 p - 6 rounded - lg">;"
      <h3 className="text - md font - medium mb - 4">Bulk Add & AI Categorization</h3>;""
      <div className="space - y-4">;"
        <div className="space - y-2">;"
          <label className="text - sm font - medium">Enter multiple skills (comma separated)</label>;"
            className="min - h-24";""
            placeholder="Python, React, TypeScript, Project Management, Communication...";"
            value={bulk_skills}
            on_change={(e) => setBulkSkills (e.target.value)}

          on_click={handleCategorizeSkills}
          disabled={is_enhancing || !bulk_skills.trim ()}"
          className="gap - 2";"
        >;
            <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
            <Sparkles className="h - 4 w - 4" />)}"

        <p className="text - xs text - muted - foreground mt - 1">;"
    </div>);"
    </div>;"
//Refresh the skills return (<div className="bg-muted/40 p-6 rounded-lg" > <h3 className="text-md font-medium mb-4" >Bulk Add & AI Categorization</h3> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Enter multiple skills (comma separated) </label> <Textarea /> </div> <Button) : (<Sparkles className="h-4 w-4" />)""
}Categorize with AI  <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>)""
pr-12325
}Categorize with AI </Button> <p className="text-xs text-muted-foreground mt-1" > AI will identify skills and categorize them automatically. This may take a moment to process. </p> </div> </div>)""


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
