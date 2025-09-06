
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import {useState} from 'react';
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


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);


  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


  };



=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      return success
    } catch (err: any) {
      setError(err.message |'An error occurred')
      return false
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
      return success;
    } catch (err: any) {;
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      }

    } catch (err: any) {;
      setError(err && err.message || 'Failed to refresh skills');

    }
<<<<<<< HEAD


  },

=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  };
=======
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  return (

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export /**
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
;



