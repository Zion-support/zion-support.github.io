

export function useCertifications() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to add certifications');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('certifications')
        .insert({_resume_id: resumeId, _name: cert.name, _issuing_organization: cert.issuing_organization, _issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null, _expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null, _credential_id: cert.credential_id, _credential_url: cert.credential_url});
      
      if (error) throw error;
      
      return showSuccessToast("Certification added", "Your certification has been added to your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not add certification');} finally {_setIsLoading(false);}
  };
  
  const _updateCertification = async (certId: string, cert: Certification): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to update certifications');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('certifications')
        .update({_name: cert.name, _issuing_organization: cert.issuing_organization, _issue_date: cert.issue_date ? formatDateForDB(cert.issue_date) : null, _expiration_date: cert.expiration_date ? formatDateForDB(cert.expiration_date) : null, _credential_id: cert.credential_id, _credential_url: cert.credential_url})
        .eq('id', certId);
      
      if (error) throw error;
      
      return showSuccessToast("Certification updated", "Your certification has been updated");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not update certification');} finally {_setIsLoading(false);}
  };
  
  const _deleteCertification = async (certId: string): Promise<boolean> => {_if (!user) {
      setError('You must be logged in to delete certifications');
      return false;}
    
    setIsLoading(true);
    setError(null);
    
    try {_const { error} = await supabase
        .from('certifications')
        .delete()
        .eq('id', certId);
      
      if (error) throw error;
      
      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume");
    } catch (e: unknown) {_return handleResumeError(e, _'Could not delete certification');} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _addCertification, _updateCertification, _deleteCertification};
}
