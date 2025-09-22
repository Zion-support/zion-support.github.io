
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  return {
<<<<<<< HEAD
    // From useFetchResume
<<<<<<< HEAD
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;
    error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions
    createResume: resumeActions.createResume;
<<<<<<< HEAD

  // TODO: Implement
}
    // From useFetchResume;
    isLoading: fetchResumeOperations.isLoading |resumeActions.isLoading;,
  error: fetchResumeOperations.error |resumeActions.error;
    resume: fetchResumeOperations.resume;,
  fetchResume: fetchResumeOperations.fetchResume;
    // From useResumeActions;
    createResume: resumeActions.createResume;,
  updateBasicInfo: resumeActions.updateBasicInfo;
    updateBasicInfo: resumeActions.updateBasicInfo,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    updateBasicInfo: resumeActions.updateBasicInfo

    updateBasicInfo: resumeActions.updateBasicInfo,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
createResume: resumeActions.createResume;
    updateBasicInfo: resumeActions.updateBasicInfo;
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    setActiveResume: resumeActions.setActiveResume}
}
    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;

    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
=======
    // From useFetchResume    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // From useFetchResume    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    setActiveResume: resumeActions.setActiveResume}
}
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;
    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    resume: fetchResumeOperations && fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations && fetchResumeOperations.fetchResume;

    // From useResumeActions;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo,
    setActiveResume: resumeActions && resumeActions.setActiveResume}
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export /**;
 * useResumeBasic - Function description;
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
    create_resume: resume_actions.create_resume;
    updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}
}

import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
  // TODO: Implement
}
    // From useFetchResume;
    is_loading: fetchResumeOperations.is_loading || resume_actions.is_loading;,
  error: fetchResumeOperations.error || resume_actions.error;
    resume: fetchResumeOperations.resume;,
  fetch_resume: fetchResumeOperations.fetch_resume;
;
    // From useResumeActions;

    create_resume: resume_actions.create_resume;,
  updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}
}
'
import { useFetchResume } from './useFetchResume',;''
import { useResumeActions } from './useResumeActions',;'

;
export function useResumeBasic() {;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  ;
  return {;
  // TODO: Implement
    // From useFetchResume;
    is_loading: fetchResumeOperations.is_loading || resume_actions.is_loading;,
  error: fetchResumeOperations.error || resume_actions.error;
  fetch_resume: fetchResumeOperations.fetch_resume;
    // From useResumeActions;
    create_resume: resume_actions.create_resume;,
  updateBasicInfo: resume_actions.updateBasicInfo,
    setActiveResume: resume_actions.setActiveResume}

pr-12325
    // From useFetchResume;
    isLoading:fetchResumeOperations.isLoading || resumeActions.isLoading,;
    error:fetchResumeOperations.error || resumeActions.error,;
    resume:fetchResumeOperations.resume,;
    fetchResume:fetchResumeOperations.fetchResume,;
    ;
pr-12325
    // From useResumeActions;
    createResume:resumeActions.createResume,;}
    updateBasicInfo:resumeActions.updateBasicInfo,;}
    setActiveResume:resumeActions.setActiveResume},;
} 
}
    setActiveResume: resumeActions.setActiveResume}

}
