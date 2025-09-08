










        // Refresh the skills list;
        await refreshSkills();








  const refreshSkills = async () => {
    try {




  const handleDeleteSkill = async (id: string, category: string = 'Other') => {;

    if (confirm('Are you sure you want to delete this skill?')) {;
      const success = await deleteSkill(id),;
      if (success) {;
        // Update local state;



      }


  return (



    <div className="space-y-6">;


          <h3 className="text-md font-medium mb-4">Add Skills One by One</h3>;
          <AddSkillForm resumeId={resumeId} onAddSkill={handleAddSkill} />;
        </div>;




