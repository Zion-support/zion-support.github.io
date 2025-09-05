
<<<<<<< HEAD
import { useFetchResume } from './useFetchResume',
import { useResumeActions } from './useResumeActions',
export function useResumeBasic() {
  const fetchResumeOperations = useFetchResume(),
  const resumeActions = useResumeActions(),
  
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
=======

export function useResumeBasic() {_const _fetchResumeOperations = useFetchResume();
  const _resumeActions = useResumeActions();
  
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations.isLoading || resumeActions.isLoading, _error: fetchResumeOperations.error || resumeActions.error, _resume: fetchResumeOperations.resume, _fetchResume: fetchResumeOperations.fetchResume, _// From useResumeActions
    createResume: resumeActions.createResume, _updateBasicInfo: resumeActions.updateBasicInfo, _setActiveResume: resumeActions.setActiveResume};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
