
export function useFetchResume() {_const { user} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resume, setResume] = useState<Resume | null>(null);
  
  const _fetchResume = async (_resumeId?: string) => {_if (!user) {
      setError('You must be logged in to access resumes');
      return null;}
    
    setIsLoading(true);
    setError(null);
    
    try {_// If resumeId is provided, _fetch that specific resume
      // Otherwise, _fetch the user's active resume or most recent resume
      let _resumeQuery = supabase.from('talent_resumes').select('*');
      
      if (resumeId) {
        resumeQuery = resumeQuery.eq('id', _resumeId);} else {_resumeQuery = resumeQuery
          .eq('user_id', _user.id)
          .order('is_active', _{ ascending: false})
          .order('created_at', {_ascending: false})
          .limit(1);
      }
      
      const {_data: resumeData, _error: resumeError} = await resumeQuery.single();
      
      if (resumeError) {_if (resumeError.code === 'PGRST116') {
          // No resume found, _this is not a critical error for a new user
          setResume(null);
          setIsLoading(false);
          return null;}
        throw resumeError;
      }
      
      // Fetch work experience
      const {_data: workData, _error: workError} = await supabase
        .from('work_history')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', {_ascending: false})
        .order('start_date', {_ascending: false});
        
      if (workError) throw workError;
      
      // Fetch education
      const {_data: educationData, _error: educationError} = await supabase
        .from('education')
        .select('*')
        .eq('resume_id', resumeData.id)
        .order('is_current', {_ascending: false})
        .order('start_date', {_ascending: false});
        
      if (educationError) throw educationError;
      
      // Fetch skills
      const {_data: skillsData, _error: skillsError} = await supabase
        .from('resume_skills')
        .select('*')
        .eq('resume_id', resumeData.id);
        
      if (skillsError) throw skillsError;
      
      // Fetch certifications
      const {_data: certData, _error: certError} = await supabase
        .from('certifications')
        .select('*')
        .eq('resume_id', resumeData.id);
        
      if (certError) throw certError;
      
      const fullResume: Resume = {_id: resumeData.id, _user_id: resumeData.user_id, _basic_info: {
          id: resumeData.id, _title: resumeData.title, _headline: resumeData.headline, _summary: resumeData.summary},
        work_experience: workData || [],
        education: educationData || [],
        skills: skillsData || [],
        certifications: certData || [],
        is_active: resumeData.is_active
      };
      
      setResume(fullResume);
      return fullResume;
    } catch (e: unknown) {_setError(e.message);
      return null;} finally {_setIsLoading(false);}
  };

  return {_isLoading, _error, _resume, _fetchResume};
}
