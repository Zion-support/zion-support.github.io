
import { useState  } from 'react';
import { Resume  } from '@/types/resume';
import { useFetchResume  } from './useFetchResume';
import { useResumeActions  } from './useResumeActions';
import { useWorkExperience  } from './useWorkExperience';
import { useEducation  } from './useEducation';
import { useSkills  } from './useSkills';
import { useCertifications  } from './useCertifications';
import { useResumeList  } from './useResumeList';
export function useResume() {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======


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
export * from './useFetchResume';
export * from './useResumeActions';
export * from './useWorkExperience';
export * from './use_education';
export * from './use_skills';
export * from './use_certifications';
export * from './useResumeList';
export * from './useResumeUtils';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useState } from 'react',;
import { Resume } from '@/types/resume',;
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
import { useWorkExperience } from './useWorkExperience',;
import { useEducation } from './useEducation',;
import { useSkills } from './useSkills',;
import { useCertifications } from './useCertifications',;
import { useResumeList } from './useResumeList',;
export function useResume() {;
  const [resume, setResume] = useState<Resume | null>(null),;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  const workOperations = useWorkExperience(),;
  const educationOperations = useEducation(),;
  const skillsOperations = useSkills(),;
  const certOperations = useCertifications(),;
  const resumeListOperations = useResumeList(),;
  // Determine overall loading state;
  const isLoading =;
    fetchResumeOperations.isLoading ||;
    resumeActions.isLoading ||;
    workOperations.isLoading ||;
    educationOperations.isLoading ||;
    skillsOperations.isLoading ||;
    certOperations.isLoading ||;
    resumeListOperations.isLoading,;
  // Determine overall error state (use first non-null error);
  const error =;
    fetchResumeOperations.error ||;
    resumeActions.error ||;
    workOperations.error ||;
    educationOperations.error ||;
    skillsOperations.isLoading ||;
    certOperations.error ||;
    resumeListOperations.error,;
  // Override the fetch resume function to update local state;
  const fetchResume = async (resumeId?: string) => {;
    const result = await fetchResumeOperations.fetchResume(resumeId),;
    if (result) {;
      setResume(result);
    }
    return result;
  },;
  return {;
    // State;
    isLoading,;
    error,;
    resume: resume || fetchResumeOperations.resume,;
    resumes: resumeListOperations.resumes,;
    // Basic resume operations;
    fetchResume,;
    createResume: resumeActions.createResume,;
    updateBasicInfo: resumeActions.updateBasicInfo,;
    setActiveResume: resumeActions.setActiveResume,;
    // Work experience operations;
    addWorkExperience: workOperations.addWorkExperience,;
    updateWorkExperience: workOperations.updateWorkExperience,;
    deleteWorkExperience: workOperations.deleteWorkExperience,;
    // Education operations;
    addEducation: educationOperations.addEducation,;
    updateEducation: educationOperations.updateEducation,;
    deleteEducation: educationOperations.deleteEducation,;
    // Skills operations;
    addSkill: skillsOperations.addSkill,;
    deleteSkill: skillsOperations.deleteSkill,;
    // Certifications operations;
    addCertification: certOperations.addCertification,;
    updateCertification: certOperations.updateCertification,;
    deleteCertification: certOperations.deleteCertification;
  }
}
;
// Export all hooks;
export * from './useFetchResume',;
export * from './useResumeActions',;
export * from './useWorkExperience',;
export * from './useEducation',;
export * from './useSkills',;
export * from './useCertifications',;
export * from './useResumeList';
export * from './useResumeUtils';
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
