
<<<<<<< HEAD
import { useState } from 'react',
import { Skill } from '@/types/resume',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription } from '@/components/ui/alert',
import { useResume } from '@/hooks/useResume',
import { SkillsFormProps } from './types',
import { SkillsList } from './SkillsList',
import { AddSkillForm } from './AddSkillForm',
import { BulkAddSkills } from './BulkAddSkills',
export function SkillsForm({ resumeId, skills, onComplete, onBack }: SkillsFormProps) {
  const { addSkill, deleteSkill, fetchResume } = useResume(),
  const [error, setError] = useState<string | null>(null),
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills),
  
  const handleAddSkill = async (data: Skill) => {
    try {
      setError(null),
      const success = await addSkill(resumeId, data),
      if (success) {
        // Refresh the skills list
        await refreshSkills()
      }
      return success
    } catch (err: any) {
      setError(err.message || 'An error occurred'),
      return false
    }
  },

  const handleDeleteSkill = async (id: string, category: string = 'Other') => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const success = await deleteSkill(id),
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill => skill.id !== id))
      }
=======

export function SkillsForm(_{_resumeId, _skills, _onComplete, _onBack}: SkillsFormProps) {_const { addSkill, _deleteSkill, _fetchResume} = useResume();
  const [error, setError] = useState<string | null>(null);
  const [localSkills, setLocalSkills] = useState<Skill[]>(skills);
  
  const _handleAddSkill = async (_data: Skill) => {_try {
      setError(null);
      const _success = await addSkill(resumeId, _data);
      if (success) {
        // Refresh the skills list
        await refreshSkills();}
      return success;
    } catch (err: unknown) {_setError(err.message || 'An error occurred');
      return false;}
  };

  const _handleDeleteSkill = async (_id: string, _category: string = 'Other') => {_if (confirm('Are you sure you want to delete this skill?')) {
      const _success = await deleteSkill(id);
      if (success) {
        // Update local state
        setLocalSkills(localSkills.filter(skill => skill.id !== id));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },
  
<<<<<<< HEAD
  const refreshSkills = async () => {
    try {
      const resumeData = await fetchResume(resumeId),
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills)
      }
    } catch (err: any) {
      setError(err.message || 'Failed to refresh skills')
    }
  },
=======
  const _refreshSkills = async () => {_try {
      const _resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills);}
    } catch (err: unknown) {_setError(err.message || 'Failed to refresh skills');}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>Skills</h2>
        <p className=&quot;text-muted-foreground&quot;>
          Add your technical and professional skills.
        </p>
      </div>

      {_/* Display skills by category */}
      <SkillsList skills={_localSkills} onDeleteSkill={_handleDeleteSkill} />

<<<<<<< HEAD
      <div className=&quot;space-y-6&quot;>
        <div className=&quot;bg-muted/40 p-6 rounded-lg&quot;>
          <h3 className=&quot;text-md font-medium mb-4&quot;>Add Skills One by One</h3>
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />
=======
      <div className="space-y-6">
        <div className="bg-muted/40 p-6 rounded-lg">
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>
          <AddSkillForm resumeId={_resumeId} onAddSkill={_handleAddSkill} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <BulkAddSkills resumeId={_resumeId} onSuccess={_refreshSkills} />
      </div>

<<<<<<< HEAD
      {error && <Alert variant=&quot;destructive&quot;><AlertDescription>{error}</AlertDescription></Alert>}

      <div className=&quot;flex justify-between&quot;>
        <Button variant=&quot;outline&quot; onClick={onBack}>
=======
      {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

      <div className="flex justify-between">
        <Button variant="outline" onClick={_onBack}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Back
        </Button>
        <Button onClick={_onComplete} disabled={_localSkills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
}
