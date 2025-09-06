<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeBasic.ts

<<<<<<< HEAD

=======

import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {

import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    updateBasicInfo: resumeActions.updateBasicInfo

    updateBasicInfo: resumeActions.updateBasicInfo,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    setActiveResume: resumeActions.setActiveResume}
}
=======
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;
========
<<<<<<< HEAD
isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/resume/useResumeBasic.ts
    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
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
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    setActiveResume: resumeActions.setActiveResume}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
