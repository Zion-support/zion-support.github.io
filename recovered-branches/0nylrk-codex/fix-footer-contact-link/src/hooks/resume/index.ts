

=======
import {useState} from 'react';
import {Resume} from '@/types/resume';
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
import {useWorkExperience} from './useWorkExperience';
import {useEducation} from './useEducation';
import {useSkills} from './useSkills';
import {useCertifications} from './useCertifications';
import {useResumeList} from './useResumeList';
export function useResume() {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [resume, setResume] = useState<Resume | null>(null);

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  const workOperations = useWorkExperience();
  const educationOperations = useEducation();
  const skillsOperations = useSkills();
  const certOperations = useCertifications();
  const resumeListOperations = useResumeList();
  // Determine overall loading state

  const isLoading = 
    fetchResumeOperations && fetchResumeOperations.isLoading || 
    resumeActions && resumeActions.isLoading || 
    workOperations && workOperations.isLoading || 
    educationOperations && educationOperations.isLoading || 
    skillsOperations && skillsOperations.isLoading || 
    certOperations && certOperations.isLoading ||
    resumeListOperations && resumeListOperations.isLoading;
  
  // Determine overall error state (use first non-null error)
  const error = 
    fetchResumeOperations && fetchResumeOperations.error || 
    resumeActions && resumeActions.error || 
    workOperations && workOperations.error || 
    educationOperations && educationOperations.error || 
    skillsOperations && skillsOperations.isLoading || 
    certOperations && certOperations.error ||
    resumeListOperations && resumeListOperations.error;
  

  // Override the fetch resume function to update local state
  const fetchResume = async (resumeId?: string) => {
    const result = await fetchResumeOperations && fetchResumeOperations.fetchResume(resumeId);
    if (result) {
      setResume(result)
    }
    return result
  }
  return {
    // State;
    is_loading;
    error;

    resume: resume || fetchResumeOperations && fetchResumeOperations.resume;
    resumes: resumeListOperations && resumeListOperations.resumes;
    
    // Basic resume operations
    fetchResume;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo;
    setActiveResume: resumeActions && resumeActions.setActiveResume;
    
    // Work experience operations
    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;
    
    // Education operations
    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;
    
    // Skills operations
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
    
    // Certifications operations
    addCertification: certOperations && certOperations.addCertification;
    updateCertification: certOperations && certOperations.updateCertification,
    deleteCertification: certOperations && certOperations.deleteCertification

  }
}
// Export all hooks
=======
;
    // Basic resume operations;
    fetch_resume;
    create_resume: resume_actions.create_resume;
    updateBasicInfo: resume_actions.updateBasicInfo;
    setActiveResume: resume_actions.setActiveResume;
;
    // Work experience operations;
    addWorkExperience: work_operations.addWorkExperience;
    updateWorkExperience: work_operations.updateWorkExperience;
    deleteWorkExperience: work_operations.deleteWorkExperience;
;
    // Education operations;
    add_education: education_operations.add_education;
    update_education: education_operations.update_education;
    delete_education: education_operations.delete_education;
;
    // Skills operations;
    add_skill: skills_operations.add_skill;
    delete_skill: skills_operations.delete_skill;
;
    // Certifications operations;
    add_certification: cert_operations.add_certification;
    update_certification: cert_operations.update_certification,
    delete_certification: cert_operations.delete_certification;
  }
}
// Export all hooks;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export * from './useFetchResume';
export * from './useResumeActions';
export * from './useWorkExperience';
export * from './use_education';
export * from './use_skills';
export * from './use_certifications';
export * from './useResumeList';
export * from './useResumeUtils';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
