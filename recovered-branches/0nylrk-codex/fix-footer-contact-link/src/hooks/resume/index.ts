
import { useState } from 'react';
import { Resume } from '@/types/resume';
import { useFetchResume } from './useFetchResume';
import { useResumeActions } from './useResumeActions';
import { useWorkExperience } from './useWorkExperience';
import { useEducation } from './useEducation';
import { useSkills } from './useSkills';
import { useCertifications } from './useCertifications';
import { useResumeList } from './useResumeList';
export function useResume() {
  const [resume, setResume] = useState<Resume | null>(null),
  
  const fetchResumeOperations = useFetchResume($2);
  const resumeActions = useResumeActions($2);
  const workOperations = useWorkExperience($2);
  const educationOperations = useEducation($2);
  const skillsOperations = useSkills($2);
  const certOperations = useCertifications($2);
  const resumeListOperations = useResumeList($2);
  // Determine overall loading state
  const isLoading = $2;
  // Determine overall error state (use first non-null error)
  const error = $2;
  // Override the fetch resume function to update local state
  const fetchResume = async (resumeId?: string) => {
    const result = await fetchResumeOperations.fetchResume($2);
    if (result) {
      setResume(result)
    }
    return result
  },
  
  return {
    // State
    isLoading;
    error;
    resume: resume |fetchResumeOperations.resume;
    resumes: resumeListOperations.resumes;
    // Basic resume operations
    fetchResume;
    createResume: resumeActions.createResume;
    updateBasicInfo: resumeActions.updateBasicInfo;
    setActiveResume: resumeActions.setActiveResume;
    // Work experience operations
    addWorkExperience: workOperations.addWorkExperience;
    updateWorkExperience: workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations.deleteWorkExperience;
    // Education operations
    addEducation: educationOperations.addEducation;
    updateEducation: educationOperations.updateEducation;
    deleteEducation: educationOperations.deleteEducation;
    // Skills operations
    addSkill: skillsOperations.addSkill;
    deleteSkill: skillsOperations.deleteSkill;
    // Certifications operations
    addCertification: certOperations.addCertification;
    updateCertification: certOperations.updateCertification
    deleteCertification: certOperations.deleteCertification
  }
}
// Export all hooks
export * from './useFetchResume',
export * from './useResumeActions',
export * from './useWorkExperience',
export * from './useEducation',
export * from './useSkills',
export * from './useCertifications',
export * from './useResumeList',
export * from './useResumeUtils',
