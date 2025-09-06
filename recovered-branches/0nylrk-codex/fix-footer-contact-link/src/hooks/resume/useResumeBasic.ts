
import { useFetchResume } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
  const fetchResumeOperations = useFetchResume($2);
  const resumeActions = useResumeActions($2);
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations.isLoading || resumeActions.isLoading,
    error: fetchResumeOperations.error || resumeActions.error,
    resume: fetchResumeOperations.resume,
    fetchResume: fetchResumeOperations.fetchResume,
    
    // From useResumeActions
    createResume: resumeActions.createResume,
    updateBasicInfo: resumeActions.updateBasicInfo,
    setActiveResume: resumeActions.setActiveResume}
}
