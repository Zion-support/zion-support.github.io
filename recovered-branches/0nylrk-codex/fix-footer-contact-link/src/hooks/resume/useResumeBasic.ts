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
    createResume: resumeActions.createResume;
    updateBasicInfo: resumeActions.updateBasicInfo;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;

<<<<<<< HEAD
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
=======
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
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
