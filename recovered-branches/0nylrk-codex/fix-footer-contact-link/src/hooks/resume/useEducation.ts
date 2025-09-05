

export function useEducation() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addEducation = async (resumeId: string, education: Education): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add education');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('education')
        .insert({_resume_id: resumeId, _institution: education.institution, _degree: education.degree, _field_of_study: education.field_of_study, _start_date: formatDateForDB(education.start_date), _end_date: education.is_current ? null : formatDateForDB(education.end_date), _is_current: education.is_current, _description: education.description, _institution_logo_url: education.institution_logo_url, _location: education.location});
      
      if (error) throw error;
      
      return showSuccessToast("Education added", "Your education has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add education');} finally {_setIsLoading(false);}
  };
  
  const _updateEducation = async (eduId: string, education: Education): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update education');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('education')
        .update({_institution: education.institution, _degree: education.degree, _field_of_study: education.field_of_study, _start_date: formatDateForDB(education.start_date), _end_date: education.is_current ? null : formatDateForDB(education.end_date), _is_current: education.is_current, _description: education.description, _institution_logo_url: education.institution_logo_url, _location: education.location})
        .eq('id', eduId);
      
      if (error) throw error;
      
      return showSuccessToast("Education updated", "Your education has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update education');} finally {_setIsLoading(false);}
  };
  
  const _deleteEducation = async (eduId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete education');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('education')
        .delete()
        .eq('id', eduId);
      
      if (error) throw error;
      
      return showSuccessToast("Education deleted", "Your education has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete education');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addEducation, _updateEducation, _deleteEducation};
}
