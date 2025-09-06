

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const addSkill = async (resumeId: string, skill: Skill): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to add skills')
      return false

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('resume_skills')
        .insert({

      return showSuccessToast("Skill added", "Your skill has been added to your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not add skill')
    } finally {
      setIsLoading(false)

    }

    setIsLoading(true),
    setError(null),

    try {
      const { error } = await supabase
        .from('resume_skills')
        .delete()

      return showSuccessToast("Skill deleted", "Your skill has been removed from your resume")
    } catch (e: any) {
      return handleResumeError(e, 'Could not delete skill')
    } finally {
      setIsLoading(false)

  }
}
;
