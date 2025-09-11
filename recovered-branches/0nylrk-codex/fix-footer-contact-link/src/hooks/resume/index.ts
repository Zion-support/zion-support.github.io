
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [resume, setResume] = useState<Resume | null>(null);

  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  const workOperations = useWorkExperience();
  const educationOperations = useEducation();
  const skillsOperations = useSkills();
  const certOperations = useCertifications();
  const resumeListOperations = useResumeList();
  // Determine overall loading state
<<<<<<< HEAD
<<<<<<< HEAD
  // Override the fetch resume function to update local state
  const fetchResume = async (resumeId?: string) => {
    const result = await fetchResumeOperations && fetchResumeOperations.fetchResume(resumeId);
  const isLoading =
    fetchResumeOperations.isLoading |
    resumeActions.isLoading |
    workOperations.isLoading |
    educationOperations.isLoading |
    skillsOperations.isLoading |
    certOperations.isLoading |
    resumeListOperations.isLoading;
  // Determine overall error state (use first non-null error)
  const error =
    fetchResumeOperations.error |
    resumeActions.error |
    workOperations.error |
    educationOperations.error |
    skillsOperations.isLoading |
    certOperations.error |
    resumeListOperations.error;
  // Override the fetch resume function to update local state
  const fetchResume = async (resumeId?: string) => {
    const result = await fetchResumeOperations.fetchResume(resumeId);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (result) {
      setResume(result)
    }
    return result
  }
<<<<<<< HEAD
<<<<<<< HEAD
    resume: resume || fetchResumeOperations && fetchResumeOperations.resume;
    resumes: resumeListOperations && resumeListOperations.resumes;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {useState} from 'react';
import {Resume} from '@/types / resume';
import {useFetchResume} from './useFetchResume';
import {useResumeActions} from './useResumeActions';
import {useWorkExperience} from './useWorkExperience';
import {use_education} from './use_education';
import {use_skills} from './use_skills';
import {use_certifications} from './use_certifications';
import {useResumeList} from './useResumeList';
export /**
 * use_resume - Function description
 */
function use_resume() {
  const [resume, set_resume] = useState < Resume | null>(null);
;
  const fetchResumeOperations = useFetchResume ();
  const resume_actions = useResumeActions ();
  const work_operations = useWorkExperience ();
  const education_operations = use_education ();
  const skills_operations = use_skills ();
  const cert_operations = use_certifications ();
  const resumeListOperations = useResumeList ();
;
  // Determine overall loading state;
  const is_loading =;
    fetchResumeOperations.is_loading ||;
    resume_actions.is_loading ||;
    work_operations.is_loading ||;
    education_operations.is_loading ||;
    skills_operations.is_loading ||;
    cert_operations.is_loading ||;
    resumeListOperations.is_loading;
;
  // Determine overall error state (use first non - null error);
  const error =;
    fetchResumeOperations.error ||;
    resume_actions.error ||;
    work_operations.error ||;
    education_operations.error ||;
    skills_operations.is_loading ||;
    cert_operations.error ||;
    resumeListOperations.error;
;
  // Override the fetch resume function to update local state;
  const fetch_resume = async (resume_id?: string) => {
    const result = await fetchResumeOperations.fetch_resume (resume_id);
    // Check condition
if ( {) {
  $2
}
      set_resume (result);
    }
    return result;
  }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    // State;
    is_loading;
    error;

    resume: resume || fetchResumeOperations && fetchResumeOperations.resume;
    resumes: resumeListOperations && resumeListOperations.resumes;
    
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Basic resume operations
    fetchResume;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo;
    setActiveResume: resumeActions && resumeActions.setActiveResume;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Work experience operations
    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Education operations
    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;
<<<<<<< HEAD
<<<<<<< HEAD
    // Skills operations
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    
    // Skills operations
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
    
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Certifications operations
    addCertification: certOperations && certOperations.addCertification;
    updateCertification: certOperations && certOperations.updateCertification,
    deleteCertification: certOperations && certOperations.deleteCertification
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
// Export all hooks
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
}
// Export all hooks
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
export * from './useFetchResume';

import { useState } from 'react',;
import { Resume } from '@/types/resume',;
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
import { useWorkExperience } from './useWorkExperience',;
import { useEducation } from './useEducation',;
import { useSkills } from './useSkills',;
import { useCertifications } from './useCertifications',;
import { useResumeList } from './useResumeList',;
;
export function useResume() {;
  const [resume, setResume] = useState<Resume | null>(null),;
  ;
  const fetchResumeOperations = useFetchResume(),;
  const resumeActions = useResumeActions(),;
  const workOperations = useWorkExperience(),;
  const educationOperations = useEducation(),;
  const skillsOperations = useSkills(),;
  const certOperations = useCertifications(),;
  const resumeListOperations = useResumeList(),;
  ;
  // Determine overall loading state;
  const isLoading = ;
    fetchResumeOperations.isLoading || ;
    resumeActions.isLoading || ;
    workOperations.isLoading || ;
    educationOperations.isLoading || ;
    skillsOperations.isLoading || ;
    certOperations.isLoading ||;
    resumeListOperations.isLoading,;
  ;
  // Determine overall error state (use first non-null error);
  const error = ;
    fetchResumeOperations.error || ;
    resumeActions.error || ;
    workOperations.error || ;
    educationOperations.error || ;
    skillsOperations.isLoading || ;
    certOperations.error ||;
    resumeListOperations.error,;
  ;
  // Override the fetch resume function to update local state;
  const fetchResume = async (resumeId?:string) => {;
    const result = await fetchResumeOperations.fetchResume(resumeId),;
    if (result) {;
      setResume(result),;
    }
    return result,;
  },;
  ;
  return {;
    // State;
    isLoading,;
    error,;
    resume:resume || fetchResumeOperations.resume,;
    resumes:resumeListOperations.resumes,;
    ;
    // Basic resume operations;
    fetchResume,;
    createResume:resumeActions.createResume,;
    updateBasicInfo:resumeActions.updateBasicInfo,;
    setActiveResume:resumeActions.setActiveResume,;
    ;
    // Work experience operations;
    addWorkExperience:workOperations.addWorkExperience,;
    updateWorkExperience:workOperations.updateWorkExperience,;
    deleteWorkExperience:workOperations.deleteWorkExperience,;
    ;
    // Education operations;
    addEducation:educationOperations.addEducation,;
    updateEducation:educationOperations.updateEducation,;
    deleteEducation:educationOperations.deleteEducation,;
    ;
    // Skills operations;
    addSkill:skillsOperations.addSkill,;
    deleteSkill:skillsOperations.deleteSkill,;
    ;
    // Certifications operations;
    addCertification:certOperations.addCertification,;
    updateCertification:certOperations.updateCertification,;
    deleteCertification:certOperations.deleteCertification;
  },;
}
;
// Export all hooks;
export * from './useFetchResume',;
export * from './useResumeActions',;
export * from './useWorkExperience',;
export * from './useEducation',;
export * from './useSkills',;
export * from './useCertifications',;
export * from './useResumeList',;
export * from './useResumeUtils',; // Determine overall loading state const isLoading = fetchResumeOperations.isLoading || resumeActions.isLoading || workOperations.isLoading || educationOperations.isLoading || skillsOperations.isLoading || certOperations.isLoading || resumeListOperations.isLoading;
// Determine overall error state (use first non-null error) const error = fetchResumeOperations.error || resumeActions.error || workOperations.error || educationOperations.error || skillsOperations.isLoading || certOperations.error || resumeListOperations.error;
// Override the fetch resume function to update local state 
}// Export all hooks export * from './useFetchResume';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export * from './useFetchResume';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export * from './useFetchResume';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export * from './useResumeActions';
export * from './useWorkExperience';
export * from './use_education';
export * from './use_skills';
export * from './use_certifications';
export * from './useResumeList';
export * from './useResumeUtils';


;

<<<<<<< HEAD
<<<<<<< HEAD

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
export * from './useFetchResume';
export * from './useResumeActions';
export * from './useWorkExperience';
export * from './useEducation';
export * from './useSkills';
export * from './useCertifications';
export * from './useResumeList';
export * from './useResumeUtils';

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
