
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() {
  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;
    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
    resume: fetchResumeOperations && fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations && fetchResumeOperations.fetchResume;
    
    // From useResumeActions
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo,
    setActiveResume: resumeActions && resumeActions.setActiveResume}
}
