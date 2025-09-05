
<<<<<<< HEAD
import { useState } from 'react',
import { Resume } from '@/types/resume',
import { useFetchResume } from './useFetchResume',
import { useResumeActions } from './useResumeActions',
import { useWorkExperience } from './useWorkExperience',
import { useEducation } from './useEducation',
import { useSkills } from './useSkills',
import { useCertifications } from './useCertifications',
import { useResumeList } from './useResumeList',
export function useResume() {
  const [resume, setResume] = useState<Resume | null>(null),
  
  const fetchResumeOperations = useFetchResume(),
  const resumeActions = useResumeActions(),
  const workOperations = useWorkExperience(),
  const educationOperations = useEducation(),
  const skillsOperations = useSkills(),
  const certOperations = useCertifications(),
  const resumeListOperations = useResumeList(),
=======

export function useResume() {_const [resume, _setResume] = useState<Resume | null>(null);
  
  const _fetchResumeOperations = useFetchResume();
  const _resumeActions = useResumeActions();
  const _workOperations = useWorkExperience();
  const _educationOperations = useEducation();
  const _skillsOperations = useSkills();
  const _certOperations = useCertifications();
  const _resumeListOperations = useResumeList();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Determine overall loading state
  const _isLoading = 
    fetchResumeOperations.isLoading || 
    resumeActions.isLoading || 
    workOperations.isLoading || 
    educationOperations.isLoading || 
    skillsOperations.isLoading || 
    certOperations.isLoading ||
    resumeListOperations.isLoading,
  
  // Determine overall error state (use first non-null error)
  const _error = 
    fetchResumeOperations.error || 
    resumeActions.error || 
    workOperations.error || 
    educationOperations.error || 
    skillsOperations.isLoading || 
    certOperations.error ||
    resumeListOperations.error,
  
  // Override the fetch resume function to update local state
<<<<<<< HEAD
  const fetchResume = async (resumeId?: string) => {
    const result = await fetchResumeOperations.fetchResume(resumeId),
    if (result) {
      setResume(result)
    }
    return result
  },
  
  return {
    // State
    isLoading,
    error,
    resume: resume || fetchResumeOperations.resume,
    resumes: resumeListOperations.resumes,
    
    // Basic resume operations
    fetchResume,
    createResume: resumeActions.createResume,
    updateBasicInfo: resumeActions.updateBasicInfo,
    setActiveResume: resumeActions.setActiveResume,
    
    // Work experience operations
    addWorkExperience: workOperations.addWorkExperience,
    updateWorkExperience: workOperations.updateWorkExperience,
    deleteWorkExperience: workOperations.deleteWorkExperience,
    
    // Education operations
    addEducation: educationOperations.addEducation,
    updateEducation: educationOperations.updateEducation,
    deleteEducation: educationOperations.deleteEducation,
    
    // Skills operations
    addSkill: skillsOperations.addSkill,
    deleteSkill: skillsOperations.deleteSkill,
    
    // Certifications operations
    addCertification: certOperations.addCertification,
    updateCertification: certOperations.updateCertification,
    deleteCertification: certOperations.deleteCertification
  }
=======
  const _fetchResume = async (_resumeId?: string) => {
    const _result = await fetchResumeOperations.fetchResume(resumeId);
    if (result) {
      setResume(result);}
    return result;
  };
  
  return {_// State
    isLoading, _error, _resume: resume || fetchResumeOperations.resume, _resumes: resumeListOperations.resumes, _// Basic resume operations
    fetchResume, _createResume: resumeActions.createResume, _updateBasicInfo: resumeActions.updateBasicInfo, _setActiveResume: resumeActions.setActiveResume, _// Work experience operations
    addWorkExperience: workOperations.addWorkExperience, _updateWorkExperience: workOperations.updateWorkExperience, _deleteWorkExperience: workOperations.deleteWorkExperience, _// Education operations
    addEducation: educationOperations.addEducation, _updateEducation: educationOperations.updateEducation, _deleteEducation: educationOperations.deleteEducation, _// Skills operations
    addSkill: skillsOperations.addSkill, _deleteSkill: skillsOperations.deleteSkill, _// Certifications operations
    addCertification: certOperations.addCertification, _updateCertification: certOperations.updateCertification, _deleteCertification: certOperations.deleteCertification};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
