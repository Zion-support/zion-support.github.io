

export function useSkills() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add skills');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('resume_skills')
        .insert({_resume_id: resumeId, _name: skill.name, _proficiency: skill.proficiency, _category: skill.category, _years_experience: skill.years_experience});
      
      if (error) throw error;
      
      return showSuccessToast("Skill added", "Your skill has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add skill');} finally {_setIsLoading(false);}
  };
  
  const _deleteSkill = async (skillId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete skills');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('resume_skills')
        .delete()
        .eq('id', skillId);
      
      if (error) throw error;
      
      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete skill');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addSkill, _deleteSkill};
}
