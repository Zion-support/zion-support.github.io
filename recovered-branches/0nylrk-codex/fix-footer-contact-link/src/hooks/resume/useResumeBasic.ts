import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const fetchResumeOperations = useFetchResume($2);
  const resumeActions = useResumeActions($2);
  return {
    // From useFetchResume
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;
    error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions
<<<<<<< HEAD
    createResume: resumeActions.createResume;

  // TODO: Implement
}
=======
<<<<<<< HEAD
    createResume: resumeActions.createResume,
    updateBasicInfo: resumeActions.updateBasicInfo,
    setActiveResume: resumeActions.setActiveResume}
}
=======
    createResume: resumeActions.createResume;

  // TODO: Implement
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {

import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() {;
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

    updateBasicInfo: resumeActions.updateBasicInfo,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    createResume: resumeActions.createResume;
    updateBasicInfo: resumeActions.updateBasicInfo;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    // From useFetchResume;
    is_loading: fetchResumeOperations.is_loading || resume_actions.is_loading;
    error: fetchResumeOperations.error || resume_actions.error;
    resume: fetchResumeOperations.resume;
    fetch_resume: fetchResumeOperations.fetch_resume;
=======
=======
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export function useResumeBasic() {;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  ;
  return {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // From useFetchResume;
    isLoading:fetchResumeOperations.isLoading || resumeActions.isLoading,;
    error:fetchResumeOperations.error || resumeActions.error,;
    resume:fetchResumeOperations.resume,;
    fetchResume:fetchResumeOperations.fetchResume,;
    ;
    // From useResumeActions;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
=======
}
=======
    createResume:resumeActions.createResume,;
    updateBasicInfo:resumeActions.updateBasicInfo,;
    setActiveResume:resumeActions.setActiveResume},;
} 
}
    setActiveResume: resumeActions.setActiveResume}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
