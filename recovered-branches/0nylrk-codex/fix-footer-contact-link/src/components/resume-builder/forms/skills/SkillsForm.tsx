
<<<<<<< HEAD
import {useState} from 'react';
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';



import { useState  } from 'react';
=======
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';import { useState  } from 'react';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
import {Skill} from '@/types / resume';
import {Button} from '@/components / ui / button';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {use_resume} from '@/hooks / use_resume';
import {SkillsFormProps} from './types';
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
<<<<<<< HEAD


  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);


  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<< HEAD
      if (success) {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        // Refresh the skills list;
        await refreshSkills();
      }
      return success
    } catch (err: any) {
      setError(err.message |'An error occurred')
      return false
    }

<<<<<<< HEAD



      }


  };



=======
      }

  };

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      return success;
=======
      const resumeData = await fetchResume(resumeId);      return success;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  },;
  const refreshSkills = async () => {;
    try {;
      const resumeData = await fetchResume(resumeId);
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      }
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
      }
    }

<<<<<<< HEAD

  },

  };
  },


  return (


  return (

      }
    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');
    }
  }
  return (
    <div className="space-y-6">;
=======
  },

  }

  },
  };
  },

  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;
        <p className="text-muted-foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;

      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <div className="space-y-6">;
        <div className="bg-muted/40 p-6 rounded-lg">;
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;

        <BulkAddSkills resumeId={resumeId} onSuccess={refreshSkills} />;
      </div>;

<<<<<<< HEAD
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
  },
=======
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}  },
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  };
  },

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

}
export /**
=======
}export /**
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
<<<<<<< HEAD
;
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
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
