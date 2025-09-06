import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export /**
 * useResumeBasic - Function description
 */
function useResumeBasic() {
  const fetchResumeOperations = useFetchResume ();
  const resume_actions = useResumeActions ();
;
  return {
    // From useFetchResume;
    is_loading: fetchResumeOperations.is_loading || resume_actions.is_loading;
    error: fetchResumeOperations.error || resume_actions.error;
    resume: fetchResumeOperations.resume;
    fetch_resume: fetchResumeOperations.fetch_resume;
;
    // From useResumeActions;
    create_resume: resume_actions.create_resume;
    updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}
}