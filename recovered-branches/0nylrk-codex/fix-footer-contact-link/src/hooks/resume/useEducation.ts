

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addEducation = async (resumeId: string, education: Education): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add education')
      return false

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('education')
        .insert({

      return showSuccessToast("Education added", "Your education has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add education')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('education')
        .update({

      return showSuccessToast("Education updated", "Your education has been updated")
    } catch (e: any) {
      return handleResumeError(e, 'Could not update education')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('education')
        .delete()

      return showSuccessToast("Education deleted", "Your education has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete education')
    } finally {
      setIsLoading(false)

  }
}
;
