import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {

    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;
    error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions
    createResume: resumeActions.createResume;

  // TODO: Implement
}
<<<<<<< HEAD
export /**
 * useResumeBasic - Function description
=======
    // From useFetchResume;
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;,
  error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;,
  fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions;
    createResume: resumeActions.createResume;,
  updateBasicInfo: resumeActions.updateBasicInfo;
    updateBasicInfo: resumeActions.updateBasicInfo,

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

    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;

    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;

    setActiveResume: resumeActions.setActiveResume}

import {useResumeActions} from './useResumeActions';
export /**;
 * useResumeBasic - Function description;

>>>>>>> origin/chore/fix-lint-and-merge
 */
function useResumeBasic() {}
  const fetchResumeOperations = useFetchResume ();
  const resume_actions = useResumeActions ();
;
  return {}
    // From useFetchResume;
    is_loading: fetchResumeOperations.is_loading || resume_actions.is_loading;
    error: fetchResumeOperations.error || resume_actions.error;
    resume: fetchResumeOperations.resume;
    fetch_resume: fetchResumeOperations.fetch_resume;
;
    // From useResumeActions;
<<<<<<< HEAD
    "create_resume": resume_actions.create_resume;
    "updateBasicInfo": resume_actions.updateBasicInfo,
    "setActiveResume": resume_actions.setActiveResume}
}
import { useFetchResume } from './useFetchResume';'
;
export function useResumeBasic() {;
  }
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  ;
  return {;
    // From useFetchResume;
    }
    "isLoading":fetchResumeOperations.isLoading || resumeActions.isLoading,;
    "error":fetchResumeOperations.error || resumeActions.error,;
    "resume":fetchResumeOperations.resume,;
    "fetchResume":fetchResumeOperations.fetchResume,;
    ;
    // From useResumeActions;
    "createResume":resumeActions.createResume,;
    "updateBasicInfo":resumeActions.updateBasicInfo,;
    "setActiveResume":resumeActions.setActiveResume},;
} 
}
    "setActiveResume": resumeActions.setActiveResume}
=======
    create_resume: resume_actions.create_resume;
    updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}
>>>>>>> origin/chore/fix-lint-and-merge
}