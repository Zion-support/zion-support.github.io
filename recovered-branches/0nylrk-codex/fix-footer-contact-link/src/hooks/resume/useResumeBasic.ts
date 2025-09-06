<<<<<<< HEAD
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
    setActiveResume: resumeActions.setActiveResume,
  };
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
