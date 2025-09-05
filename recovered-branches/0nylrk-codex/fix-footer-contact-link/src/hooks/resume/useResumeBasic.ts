

export function useResumeBasic() {_const _fetchResumeOperations = useFetchResume();
  const _resumeActions = useResumeActions();
  
  return {
    // From useFetchResume
    isLoading: fetchResumeOperations.isLoading || resumeActions.isLoading, _error: fetchResumeOperations.error || resumeActions.error, _resume: fetchResumeOperations.resume, _fetchResume: fetchResumeOperations.fetchResume, _// From useResumeActions
    createResume: resumeActions.createResume, _updateBasicInfo: resumeActions.updateBasicInfo, _setActiveResume: resumeActions.setActiveResume};
}
