

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
    }
  };
  
  const _refreshSkills = async () => {_try {
      const _resumeData = await fetchResume(resumeId);
      if (resumeData && resumeData.skills) {
        setLocalSkills(resumeData.skills);}
    } catch (err: unknown) {_setError(err.message || 'Failed to refresh skills');}
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p className="text-muted-foreground">
          Add your technical and professional skills.
        </p>
      </div>

      {_/* Display skills by category */}
      <SkillsList skills={_localSkills} onDeleteSkill={_handleDeleteSkill} />

      <div className="space-y-6">
        <div className="bg-muted/40 p-6 rounded-lg">
          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>
          <AddSkillForm resumeId={_resumeId} onAddSkill={_handleAddSkill} />
        </div>

        <BulkAddSkills resumeId={_resumeId} onSuccess={_refreshSkills} />
      </div>

      {_error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

      <div className="flex justify-between">
        <Button variant="outline" onClick={_onBack}>
          Back
        </Button>
        <Button onClick={_onComplete} disabled={_localSkills.length === 0}>
          Next
        </Button>
      </div>
    </div>
  );
}
