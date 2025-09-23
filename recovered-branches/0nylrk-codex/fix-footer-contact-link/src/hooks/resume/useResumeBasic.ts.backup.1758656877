
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
    setActiveResume: resumeActions.setActiveResume,
  };
}
=======
    setActiveResume: resumeActions.setActiveResume};
}

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
