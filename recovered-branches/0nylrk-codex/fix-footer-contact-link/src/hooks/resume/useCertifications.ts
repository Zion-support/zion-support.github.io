

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addCertification = async (resumeId: string, cert: Certification): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add certifications')
      return false

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('certifications')
        .insert({

      return showSuccessToast("Certification added", "Your certification has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add certification')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('certifications')
        .update({

      return showSuccessToast("Certification updated", "Your certification has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update certification')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('certifications')
        .delete()

      return showSuccessToast("Certification deleted", "Your certification has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete certification')
    } finally {
      setIsLoading(false)

  }
}
;
