
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { useFetchResume  } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
export function useResumeBasic() {

<<<<<<< HEAD
=======
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
export function useResumeBasic() {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
    updateBasicInfo: resumeActions.updateBasicInfo

=======
    updateBasicInfo: resumeActions.updateBasicInfo,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    updateBasicInfo: resumeActions.updateBasicInfo

    updateBasicInfo: resumeActions.updateBasicInfo,
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    setActiveResume: resumeActions.setActiveResume}
}
=======
    isLoading: fetchResumeOperations && fetchResumeOperations.isLoading || resumeActions && resumeActions.isLoading;
    error: fetchResumeOperations && fetchResumeOperations.error || resumeActions && resumeActions.error;
    resume: fetchResumeOperations && fetchResumeOperations.resume;
    fetchResume: fetchResumeOperations && fetchResumeOperations.fetchResume;
    
    // From useResumeActions
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo,
    setActiveResume: resumeActions && resumeActions.setActiveResume}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
