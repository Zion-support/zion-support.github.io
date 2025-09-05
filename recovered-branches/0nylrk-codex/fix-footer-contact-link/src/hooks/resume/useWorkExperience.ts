

export function useWorkExperience() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addWorkExperience = async (resumeId: string, work: WorkExperience): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update work experience');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('work_history')
        .insert({_resume_id: resumeId, _company_name: work.company_name, _role_title: work.role_title, _start_date: formatDateForDB(work.start_date), _end_date: work.is_current ? null : formatDateForDB(work.end_date), _is_current: work.is_current, _description: work.description, _company_logo_url: work.company_logo_url, _location: work.location});
      
      if (error) throw error;
      
      return showSuccessToast("Work experience added", "Your work experience has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add work experience');} finally {_setIsLoading(false);}
  };
  
  const _updateWorkExperience = async (workId: string, work: WorkExperience): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update work experience');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('work_history')
        .update({_company_name: work.company_name, _role_title: work.role_title, _start_date: formatDateForDB(work.start_date), _end_date: work.is_current ? null : formatDateForDB(work.end_date), _is_current: work.is_current, _description: work.description, _company_logo_url: work.company_logo_url, _location: work.location})
        .eq('id', workId);
      
      if (error) throw error;
      
      return showSuccessToast("Work experience updated", "Your work experience has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update work experience');} finally {_setIsLoading(false);}
  };
  
  const _deleteWorkExperience = async (workId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete work experience');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('work_history')
        .delete()
        .eq('id', workId);
      
      if (error) throw error;
      
      return showSuccessToast("Work experience deleted", "Your work experience has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete work experience');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addWorkExperience, _updateWorkExperience, _deleteWorkExperience};
}
