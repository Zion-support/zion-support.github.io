<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD



>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
import {useState} from 'react';
import {Skill} from '@/types/resume';
import {Button} from '@/components/ui/button';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {useResume} from '@/hooks/useResume';
=======
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {SkillsFormProps} from './types';
import {SkillsList} from './SkillsList';
import {AddSkillForm} from './AddSkillForm';
import {BulkAddSkills} from './BulkAddSkills';
<<<<<<< HEAD
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;
=======

export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {;

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { addSkill, deleteSkill, fetchResume } = useResume();

  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;

<<<<<<< HEAD
  const handleAddSkill = async (data: Skill) => {;
    try {;
      setError(null),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const success = await addSkill(resumeId, data);
      if (success) {;
        // Refresh the skills list;
        await refreshSkills();
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

        // Refresh the skills list;
        await refreshSkills();

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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


<<<<<<< HEAD
  }
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {

      const success = await deleteSkill(id)
      if (success) {}
        // Update local state;
        setLocalSkills(localSkills.filter(skill => skill.id !== id))
      }
    }
  }
<<<<<<< HEAD

=======
  const refreshSkills = async () => {
    try {
<<<<<<< HEAD
      }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return success;
    } catch (err: any) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setError(err && err.message || 'An error occurred'),;
      return false;
    }
  };
<<<<<<< HEAD
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)
  },;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;
    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;
<<<<<<< HEAD
        setLocalSkills(localSkills.filter(skill => skill.id !== id));
      }
    }
  },;
  const refreshSkills = async () => {;
    try {;
=======
        setLocalSkills(localSkills && localSkills.filter(skill => skill && skill.id !== id));
      }
    }
  };

  const refreshSkills = async () => {;
    try {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);

  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;

    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;

<<<<<<< HEAD
      const resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      if (resumeData && resumeData.skills) {;
        setLocalSkills(resumeData.skills);
      }
    }

  },

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Skills</h2>;

        <p className="text-muted-foreground">;
          Add your technical and professional skills.;
        </p>;
      </div>;
<<<<<<< HEAD
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;
=======

<<<<<<< HEAD
=======
      {/* Display skills by category */}
      <SkillsList skills={localSkills} onDeleteSkill={handleDeleteSkill} />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="space-y-6">;
        <div className="bg-muted/40 p-6 rounded-lg">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;
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
=======

  };
  },

<<<<<<< HEAD
  return (
=======
      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

      {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}  },

  };
  },

>>>>>>> merged-prs-20250907-203621
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

    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill($2);
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill = $2;
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
=======
}export /**
 * SkillsForm - Function description
 */
function SkillsForm() {
  const { add_skill, delete_skill, fetch_resume } = use_resume ();
  const [error, set_error] = useState < string | null>(null);
  const [local_skills, setLocalSkills] = useState < Skill[]>(skills);
=======
>>>>>>> origin/chore/fix-lint-and-merge
;
<<<<<<< HEAD
=======
  const handleAddSkill = async (data: Skill) => {
    try {
      set_error (null),
      const success = await add_skill (resume_id, data);
      // Check condition
if ( {) {
  $2
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
;
=======
;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
