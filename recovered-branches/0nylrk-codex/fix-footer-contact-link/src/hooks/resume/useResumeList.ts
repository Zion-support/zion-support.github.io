

export function useResumeList() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumes, setResumes] = useState<Resume[]>([]);
  
  const _fetchResumes = async () => {_if (!user) {
      setError('You must be logged in to access resumes');
      return [];}
    
    setIsLoading(true);
    setError(null);
    
    try {_// Fetch resume list with basic info for the current user
      const { data: resumeData, _error: resumeError} = await supabase
        .from('talent_resumes')
        .select('*')
        .eq('user_id', user.id)
        .order('is_active', {_ascending: false})
        .order('created_at', {_ascending: false});
      
      if (resumeError) throw resumeError;
      
      if (!resumeData || resumeData.length === 0) {_setResumes([]);
        return [];}
      
      // Transform data to match Resume type
      const transformedResumes: Resume[] = resumeData.map(resume => ({_id: resume.id, _user_id: resume.user_id, _basic_info: {
          id: resume.id, _title: resume.title, _headline: resume.headline, _summary: resume.summary},
        work_experience: [],
        education: [],
        skills: [],
        certifications: [],
        is_active: resume.is_active
      }));
      
      setResumes(transformedResumes);
      return transformedResumes;
    } catch (e: unknown) {_setError(e.message);
      return [];} finally {_setIsLoading(false);}
  };
  
  // Fetch resumes when the component mounts
  useEffect__(() => {_if (user) {
      fetchResumes();}
  }, [user]);
  
  return {_isLoading, _error, _resumes, _fetchResumes};
}
