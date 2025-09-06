<<<<<<< HEAD
=======
import { useFetchResume } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
<<<<<<< HEAD
  const fetchResumeOperations = null;
=======
  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;
    error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions
    createResume: resumeActions.createResume;
    updateBasicInfo: resumeActions.updateBasicInfo
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    setActiveResume: resumeActions.setActiveResume}
}