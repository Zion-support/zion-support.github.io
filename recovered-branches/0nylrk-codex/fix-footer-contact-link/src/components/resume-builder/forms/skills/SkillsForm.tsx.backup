
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';

import {use_resume} from '@/hooks / use_resume';

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

import {useState} from 'react';
import {Skill} from '@/types/resume';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {useResume} from '@/hooks/useResume';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<< HEAD



        // Refresh the skills list;
        await refreshSkills();




=======
        // Refresh the skills list;
        await refreshSkills();

>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      return success;
    } catch (err: any) {'
      setError(err.message |'An error occurred')
      return false;
    }

      }

  };

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill(id)
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill => skill.id !== id))
      }
    }
  }

<<<<<<< HEAD
  const refreshSkills = async () => {
    try {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<< HEAD




=======
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);

<<<<<<< HEAD
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;

    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;



      }
=======
      }
      const resumeData = await fetchResume(resumeId);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
      }
    }

  },


<<<<<<< HEAD


  return (



    <div className="space-y-6">;
=======
  };
  },

  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div>;
        <h2 className='text-xl font-semibold mb-2'>Skills</h2>;
        <p className='text-muted-foreground'>;
          Add your technical and professional skills.;
        </p>;
      </div>;

<<<<<<< HEAD


          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;

=======
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;
      <div className='space-y-6'>;
        <div className='bg-muted/40 p-6 rounded-lg'>;
          <h3 className='text-md font-medium mb-4'>Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

  };
  },


<<<<<<< HEAD
=======
  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
export /**
}export /**
 * SkillsForm - Function description

 */
function SkillsForm() {}
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);

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

<<<<<<< HEAD
=======
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}  },

  };
  },

  const { addSkill, deleteSkill, fetchResume } = useResume($2);
  const [error, setError] = useState<string | null>(null),
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills),
  
  const handleAddSkill = async (data: Skill) => {
    try {
      setError($2);
      const success = await addSkill($2);
      if (success) {
        // Refresh the skills list
        await refreshSkills()
      }
      return success
    } catch (err: any) {
      setError($2);
      return false
    }
  },

  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill($2);
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill = $2;
  const refreshSkills = async () => {
    try {
      const resumeData = await fetchResume($2);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)
      }
    } catch (err: any) {
      setError(err.message || 'Failed to refresh skills')
    }
  },

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>Skills</h2>
        <p className='text-muted-foreground'>
          Add your technical and professional skills.
        </p>
      </div>
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />
      <div className='space-y-6'>
        <div className='bg-muted/40 p-6 rounded-lg'>
          <h3 className='text-md font-medium mb-4'>Add Skills One by One</h3>
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />
        </div>
        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />
      </div>
      {error && <Alert variant='destructive'><AlertDescription>{error}</AlertDescription></Alert>}
      <div className='flex justify-between'>
        <Button variant='outline' onClick={onBack}>
          Back
        </Button>
        <Button onClick={onComplete} disabled={localSkills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
}export /**
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
<<<<<<< HEAD

=======
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
