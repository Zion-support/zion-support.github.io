
import { useFetchResume } from './useFetchResume';
import { useResumeActions } from './useResumeActions';

export function useResumeBasic() {
  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations.isLoading || resumeActions.isLoading,
    error: fetchResumeOperations.error || resumeActions.error,
    resume: fetchResumeOperations.resume,
    fetchResume: fetchResumeOperations.fetchResume,
    
    // From useResumeActions
    createResume: resumeActions.createResume,
    updateBasicInfo: resumeActions.updateBasicInfo,
<<<<<<< HEAD
=======
    setActiveResume: resumeActions.setActiveResume};
}

>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
