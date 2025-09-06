
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
    updateBasicInfo: resumeActions.updateBasicInfo

    updateBasicInfo: resumeActions.updateBasicInfo,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
export function useResumeBasic() {;
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
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    setActiveResume: resumeActions.setActiveResume}
}
=======
=======
=======
import { useFetchResume  } from './useFetchResume';'
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {}
';
import {useFetchResume} from './useFetchResume';'
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() { return null; }
  return {}
    // From useFetchResume;
'
import { useFetchResume } from './useFetchResume',;'
import { useResumeActions } from './useResumeActions',;
export function useResumeBasic() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    resume: fetchResumeOperations && fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations && fetchResumeOperations.fetchResume;
    
    // From useResumeActions;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo,
    setActiveResume: resumeActions && resumeActions.setActiveResume}
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useFetchResume} from './useFetchResume';
=======
}'
import {useFetchResume} from './useFetchResume';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
;
export function useResumeBasic() {;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  ;
  return {;
    // From useFetchResume;
    isLoading:fetchResumeOperations.isLoading || resumeActions.isLoading,;
    error:fetchResumeOperations.error || resumeActions.error,;
    resume:fetchResumeOperations.resume,;
    fetchResume:fetchResumeOperations.fetchResume,;
    ;
    // From useResumeActions;
    createResume:resumeActions.createResume,;
    updateBasicInfo:resumeActions.updateBasicInfo,;
    setActiveResume:resumeActions.setActiveResume},;
} 
}
    setActiveResume: resumeActions.setActiveResume}
}
=======


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
