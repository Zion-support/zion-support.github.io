

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



    fetchResume;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo;
    setActiveResume: resumeActions && resumeActions.setActiveResume;

    

    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;

    

    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;

    
    // Skills operations;
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
    

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


export * from './useResumeActions';

export * from './useWorkExperience';
export * from './use_education';
export * from './use_skills';
export * from './use_certifications';
export * from './useResumeList';
export * from './useResumeUtils';

'
export * from './useResumeActions';'

export * from './useWorkExperience';'
export * from './use_education';'
export * from './use_skills';'
export * from './use_certifications';'
export * from './useResumeList';'
export * from './useResumeUtils';


;


import { useState } from 'react',;
import { Resume } from '@/types/resume',;
import { useFetchResume } from './useFetchResume',;
import { useResumeActions } from './useResumeActions',;
import { useWorkExperience } from './useWorkExperience',;
import { useEducation } from './useEducation',;
import { useSkills } from './useSkills',;
import { useCertifications } from './useCertifications',;

import { useResumeList } from './useResumeList',;
export function useResume() { return null; }
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

export * from './useResumeUtils';






