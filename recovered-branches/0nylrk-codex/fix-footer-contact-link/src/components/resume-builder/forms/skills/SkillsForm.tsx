
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
import {useState} from 'react';
import {Skill} from '@/types/resume';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {useResume} from '@/hooks/useResume';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';
<<<<<<< HEAD
<<<<<<< HEAD
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAddSkill = async (data: Skill) => {
    try {
      setError(null)
      const success = await addSkill(resumeId, data);
      if (success) {
        // Refresh the skills list
        await refreshSkills()
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

<<<<<<< HEAD
<<<<<<< HEAD
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<< HEAD
<<<<<<< HEAD
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;
      const success = await addSkill(resumeId, data),;
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
      }
      return success
    } catch (err: any) {
      setError(err.message |'An error occurred')
      return false
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }


  };



<<<<<<< HEAD
<<<<<<< HEAD
  }
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return success;
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)
  },;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;
    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;
<<<<<<< HEAD
<<<<<<< HEAD
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  },;
  const refreshSkills = async () => {;
    try {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setLocalSkills(localSkills && localSkills.filter(skill => skill && skill.id !== id));
      }
    }
  };

  const refreshSkills = async () => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);



<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }

    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');

    }


  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  },

<<<<<<< HEAD

  return (

      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');
    }
  }
  return (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
  };
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;
        <p className="text-muted-foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="space-y-6">;
        <div className="bg-muted/40 p-6 rounded-lg">;
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
      }
    } catch (err: any) {
      setError(err.message |'Failed to refresh skills')
    }
  }
  },
  };
  },

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
=======

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;

      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export /**
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
;
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
