
import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {
    // From useFetchResume    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
    resume: fetchResumeOperations && fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations && fetchResumeOperations.fetchResume;
    
    // From useResumeActions
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo,
    setActiveResume: resumeActions && resumeActions.setActiveResume}
}
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

import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
;
export function useResumeBasic() {;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  ;
  return {;
=======

    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;

    setActiveResume: resumeActions.setActiveResume}

import {useResumeActions} from './useResumeActions';
export /**;
 * useResumeBasic - Function description;

 */
function useResumeBasic() {}
  const fetchResumeOperations = useFetchResume ();
  const resume_actions = useResumeActions ();
;
  return {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // From useFetchResume;
    isLoading:fetchResumeOperations.isLoading || resumeActions.isLoading,;
    error:fetchResumeOperations.error || resumeActions.error,;
    resume:fetchResumeOperations.resume,;
    fetchResume:fetchResumeOperations.fetchResume,;
    ;
    // From useResumeActions;

<<<<<<< HEAD
    create_resume: resume_actions.create_resume;
    updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}

}
    setActiveResume: resumeActions.setActiveResume}
}
