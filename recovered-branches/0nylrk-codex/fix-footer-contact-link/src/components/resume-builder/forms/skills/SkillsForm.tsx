
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
=======
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';import { useState  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';import { useState  } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';

import { useState  } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import { useState  } from 'react';
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Skill  } from '@/types/resume';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { useResume  } from '@/hooks/useResume';
import { SkillsFormProps  } from './types';
import { SkillsList  } from './SkillsList';
import { AddSkillForm  } from './AddSkillForm';
import { BulkAddSkills } from './BulkAddSkills';
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useState} from 'react';
import {Skill} from '@/types/resume';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {useResume} from '@/hooks/useResume';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'
import { useState  } from 'react';'
import { Skill  } from '@/types/resume';'
import { Button  } from '@/components/ui/button';'
import { Alert, AlertDescription  } from '@/components/ui/alert';'
import { useResume  } from '@/hooks/useResume';'
import { SkillsFormProps  } from './types';'
import { SkillsList  } from './SkillsList';'
import { AddSkillForm  } from './AddSkillForm';'
import { BulkAddSkills } from './BulkAddSkills';
export function SkillsForm() { return null; }
import {useState} from 'react';
'
import {SkillsFormProps} from './types';'
import {SkillsList} from './SkillsList';'
import {AddSkillForm} from './AddSkillForm';'
import {BulkAddSkills} from './BulkAddSkills';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
// Refresh the skills list;
        await refreshSkills();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
      return success;
    } catch (err: any) {'
      setError(err.message |'An error occurred')
      return false;
    }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      }

  };

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
=======

'
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {'
    if (confirm('Are you sure you want to delete this skill?')) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const success = await deleteSkill(id)
      if (success) {}
        // Update local state;
        setLocalSkills(localSkills.filter(skill => skill.id !== id))
      }
    }
  }
const refreshSkills = async () => {
    try {
      return success;
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;
=======
'
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;
setLocalSkills(localSkills && localSkills.filter(skill => skill && skill.id !== id));
      }
    }
  };

  const refreshSkills = async () => {;
    try {;

      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
  };
  },

  },

  };
  },

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (

  return (

      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');
    }
  }
  return (
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;
=======

  };
  },

    <div className="space-y-6">;
      <div>;"
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-muted-foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;
{/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;

      <div className="space-y-6">;
        <div className="bg-muted/40 p-6 rounded-lg">;
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;

<BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;

{error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}  },

  };
  },

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
<div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p className="text-muted-foreground">
          Add your technical and professional skills.
        </p>
      </div>
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />
      <div className="space-y-6">
        <div className="bg-muted/40 p-6 rounded-lg">
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />
        </div>
        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />
      </div>
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onComplete} disabled={localSkills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      <div className="flex justify-between">;
        <Button variant="outline" onClick={onBack}>;
          Back;
        </Button>;
        <Button onClick={onComplete} disabled={localSkills && localSkills.length === 0}>;
          Next;
        </Button>;
      </div>;
    </div>;
  );

}
export /**
}export /**
 * SkillsForm - Function description
=======

export /**;
 * SkillsForm - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function SkillsForm() {}
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
<<<<<<< HEAD
;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;

  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
</string>
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);

    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;""
        <p className="text-muted-foreground">;"
</p>
        </p>;
      </div>;
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;

"
        <div className="bg-muted/40 p-6 rounded-lg">;"
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;"
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;

      </div>;"
      {error && <Alert variant="destructive"><AlertDescription>{error}}""
    <div className="space-y-6">"
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>""
        <p className="text-muted-foreground">"
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />
        <div className="bg-muted/40 p-6 rounded-lg">"
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>"
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />

      <div className="flex justify-between">"
        <Button variant="outline" onClick={onBack}>"

        <Button onClick={onComplete} disabled={localSkills.length === 0}>

      <div className="flex justify-between">;"
        <Button variant="outline" onClick={onBack}>;"

        ;
        <Button onClick={onComplete} disabled={localSkills && localSkills.length === 0}>;

  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
  const handleAddSkill = async (data: Skill) => {
    try {
  // TODO: Implement
}
      set_error (null),
      const success = await add_skill (resume_id, data);
      // Check condition;
if ( {) {
  $2;
        // Refresh the skills list;
        await refresh_skills ();
      return success;
    } catch (err: any) {"
      set_error (err.message || 'An error occurred'),
      return false;
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if () {) {
      const success = await delete_skill (id),
      // Check condition;
        // Update local state;
        setLocalSkills (local_skills.filter (skill => skill.id !== id));
  const refresh_skills = async () => {
  // TODO: Implement
      const resume_data = await fetch_resume (resume_id);
      // Check condition;
        setLocalSkills (resume_data.skills);
    } catch (err: any) {
      set_error (err.message || 'Failed to refresh skills');
  return (
    <div className="space - y-6">;"
        <h2 className="text - xl font - semibold mb - 2">Skills</h2>;""
        <p className="text - muted - foreground">;"
      <SkillsList skills={local_skills} onDeleteSkill={handleDeleteSkill} />;
        <div className="bg - muted / 40 p - 6 rounded - lg">;"
          <h3 className="text - md font - medium mb - 4">Add Skills One by One</h3>;"
          <AddSkillForm resume_id={resume_id} onAddSkill={handleAddSkill} />;

        <BulkAddSkills resume_id={resume_id} on_success={refresh_skills} />;

      <div className="flex justify - between">;"
        <Button variant="outline" on_click={on_back}>;"

        <Button on_click={on_complete} disabled={local_skills.length === 0}>;
          Next;
        </Button>;
      </div>;
</div>);

import { useState } from 'react',;
import { Skill } from '@/types/resume',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { useResume } from '@/hooks/useResume',;
import { SkillsFormProps } from './types',;
import { SkillsList } from './SkillsList',;
import { AddSkillForm } from './AddSkillForm',;
import { BulkAddSkills } from './BulkAddSkills',;
;
export function SkillsForm({ resumeId, skills, onComplete, onBack } SkillsFormProps) {;
  const { addSkill, deleteSkill, fetchResume } = useResume(),;
  const [error, setError] = useState<string | null>(null),;
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills),;
  ;
  const handleAddSkill = async (data:Skill) => {;
    try {;
      setError(null),;
      const success = await addSkill(resumeId, data),;
      if (success) {;
        // Refresh the skills list;
        await refreshSkills(),;
      }
      return success,;
    } catch (err:any) {;
      setError(err.message || 'An error occurred'),;
      return false;
    }
  },;
;
  const handleDeleteSkill = async (id:string, category:string = 'Other') => {;
    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  },;
  ;
  const refreshSkills = async () => {;
    try {;
      const resumeData = await fetchResume(resumeId),;
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills),;      }
    } catch (err:any) {;
      setError(err.message || 'Failed to refresh skills');
    }
  },;
;
  return (;
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;
        <p className="text-muted-foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;
;
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;
;
      <div className="space-y-6">;
        <div className="bg-muted/40 p-6 rounded-lg">;
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;
;
        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;
;
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
;
      <div className="flex justify-between">;
        <Button variant="outline" onClick={onBack}>;
          Back;
        </Button>;
        <Button onClick={onComplete} disabled={localSkills.length === 0}>;
          Next;
        </Button>;
      </div>;
    </div>;
  ),; 
}
};
return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Skills</h2> <p className="text-muted-foreground" > Add your technical and professional skills. </p> </div> {
  /* Display skills by category */ 
}<SkillsList skills= {
  localSkills 
}onDeleteSkill= {
  handleDeleteSkill 
}/> </div> <BulkAddSkills resumeId= {
  resumeId 
}onSuccess= {
  refreshSkills 
}/> </div> Back </Button> <Button onClick= {
  onComplete 
}disabled= {
  localSkills.length === 0 
}> Next </Button> </div> </div>) 
}
}
}
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
