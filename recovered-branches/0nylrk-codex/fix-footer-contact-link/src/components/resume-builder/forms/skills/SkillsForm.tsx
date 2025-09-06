<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx

<<<<<<< HEAD
=======
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Skill  } from '@/types/resume';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { useResume  } from '@/hooks/useResume';
import { SkillsFormProps  } from './types';
import { SkillsList  } from './SkillsList';
import { AddSkillForm  } from './AddSkillForm';
import { BulkAddSkills } from './BulkAddSkills';
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {
=======
import {useState} from 'react';
import {Skill} from '@/types/resume';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {useResume} from '@/hooks/useResume';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleAddSkill = async (data: Skill) => {
    try {
      setError(null)
      const success = await addSkill(resumeId, data);
      if (success) {
        // Refresh the skills list
        await refreshSkills()
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from 'react',;
import { Skill } from '@/types/resume',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
import { useResume } from '@/hooks/useResume',;
import { SkillsFormProps } from './types',;
import { SkillsList } from './SkillsList',;
import { AddSkillForm } from './AddSkillForm',;
import { BulkAddSkills } from './BulkAddSkills',;
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
  const { addSkill, deleteSkill, fetchResume } = useResume(),;
  const [error, setError] = useState<string | null>(null),;
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills),;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

========
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx

<<<<<<< HEAD
=======
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;
      const success = await addSkill(resumeId, data),;
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      return success
    } catch (err: any) {
      setError(err.message |'An error occurred')
      return false
    }
<<<<<<< HEAD

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill(id)
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill => skill.id !== id))
      }
    }
  }
  const refreshSkills = async () => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)

  },;
=======
=======
========
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
      return success;
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
=======
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)
=======
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;
    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;
<<<<<<< HEAD
        setLocalSkills(localSkills && localSkills.filter(skill => skill && skill.id !== id));
      }
    }
  };
=======
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const refreshSkills = async () => {;
    try {;
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }

    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');

    }

<<<<<<< HEAD
  };

  },
=======

  },

=======
  };
=======
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

========
      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');
    }
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;
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
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch (err: any) {
      setError(err.message |'Failed to refresh skills')
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  };
=======
  },
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
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
=======


}
export /**
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
  const handleAddSkill = async (data: Skill) => {
    try {
      set_error (null),
      const success = await add_skill (resume_id, data);
      // Check condition
if ( {) {
  $2
}
        // Refresh the skills list;
        await refresh_skills ();
      }
      return success;
    } catch (err: any) {
      set_error (err.message || 'An error occurred'),
      return false;
    }
  }
;
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if () {) {
  $2
}
      const success = await delete_skill (id),
      // Check condition
if ( {) {
  $2
}
        // Update local state;
        setLocalSkills (local_skills.filter (skill => skill.id !== id));
      }
    }
  }
;
  const refresh_skills = async () => {
    try {
      const resume_data = await fetch_resume (resume_id);
      // Check condition
if ( {) {
  $2
}
        setLocalSkills (resume_data.skills);
      }
    } catch (err: any) {
      set_error (err.message || 'Failed to refresh skills');
    }
  }
;
  return (
    <div className="space - y-6">;
      <div>;
        <h2 className="text - xl font - semibold mb - 2">Skills</h2>;
        <p className="text - muted - foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;
      {/* Display skills by category */}
      <SkillsList skills={local_skills} onDeleteSkill={handleDeleteSkill} />;
      <div className="space - y-6">;
        <div className="bg - muted / 40 p - 6 rounded - lg">;
          <h3 className="text - md font - medium mb - 4">Add Skills One by One</h3>;
          <AddSkillForm resume_id={resume_id} onAddSkill={handleAddSkill} />;
        </div>;
        <BulkAddSkills resume_id={resume_id} on_success={refresh_skills} />;
      </div>;
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      <div className="flex justify - between">;
        <Button variant="outline" on_click={on_back}>;
          Back;
        </Button>;
        <Button on_click={on_complete} disabled={local_skills.length === 0}>;
          Next;
        </Button>;
      </div>;
    </div>);
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/forms/skills/SkillsForm.tsx
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
