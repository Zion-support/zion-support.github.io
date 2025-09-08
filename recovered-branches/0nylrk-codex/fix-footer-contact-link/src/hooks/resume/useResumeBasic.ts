import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;
    error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    createResume: resumeActions.createResume;

  // TODO: Implement
}
<<<<<<< HEAD
=======
export /**
 * useResumeBasic - Function description
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  return {;
    // From useFetchResume;
    isLoading: fetchResumeOperations.isLoading || resumeActions.isLoading,;
    error: fetchResumeOperations.error || resumeActions.error,;
    resume: fetchResumeOperations.resume,;
    fetchResume: fetchResumeOperations.fetchResume,;
    // From useResumeActions;
>>>>>>> origin/cursor/delete-old-data-records-6bba


    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;

<<<<<<< HEAD

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



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
