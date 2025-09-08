
<<<<<<< HEAD
=======
import { useState  } from 'react';
import { Resume  } from '@/types/resume';
import { useFetchResume  } from './useFetchResume';
import { useResumeActions  } from './useResumeActions';
import { useWorkExperience  } from './useWorkExperience';
import { useEducation  } from './useEducation';
import { useSkills  } from './useSkills';
import { useCertifications  } from './useCertifications';
import { useResumeList  } from './useResumeList';

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


=======
  const [resume, setResume] = useState<Resume | null>(null);

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

  const [resume, setResume] = useState<Resume | null>(null);

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
  const fetchResumeOperations = useFetchResume();
  const resumeActions = useResumeActions();
  const workOperations = useWorkExperience();
  const educationOperations = useEducation();
  const skillsOperations = useSkills();
  const certOperations = useCertifications();
  const resumeListOperations = useResumeList();
  // Determine overall loading state  // Override the fetch resume function to update local state,
const fetchResume = async (resumeId?: string) => {
    }
    const result = await fetchResumeOperations && fetchResumeOperations.fetchResume(resumeId);  // Override the fetch resume function to update local state,
const fetchResume = async (resumeId?: string) => {
    }
    const result = await fetchResumeOperations && fetchResumeOperations.fetchResume(resumeId);
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
      }
      setResume(result)
    }
return result;
  }export * from './useResumeActions';'

    // Basic resume operations;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    fetchResume;
    createResume: resumeActions && resumeActions.createResume;
    updateBasicInfo: resumeActions && resumeActions.updateBasicInfo;
    setActiveResume: resumeActions && resumeActions.setActiveResume;
<<<<<<< HEAD

    

    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;

    

    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;

=======
    
    // Work experience operations;
    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;
    
    // Education operations;
    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;
    // Work experience operations
    // Work experience operations;
    addWorkExperience: workOperations && workOperations.addWorkExperience;
    updateWorkExperience: workOperations && workOperations.updateWorkExperience;
    deleteWorkExperience: workOperations && workOperations.deleteWorkExperience;
    // Education operations
    // Education operations;
    addEducation: educationOperations && educationOperations.addEducation;
    updateEducation: educationOperations && educationOperations.updateEducation;
    deleteEducation: educationOperations && educationOperations.deleteEducation;
    // Skills operations
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    
    // Skills operations;
    addSkill: skillsOperations && skillsOperations.addSkill;
    deleteSkill: skillsOperations && skillsOperations.deleteSkill;
    
<<<<<<< HEAD

=======

    // Certifications operations;
    addCertification: certOperations && certOperations.addCertification;
    updateCertification: certOperations && certOperations.updateCertification,
    deleteCertification: certOperations && certOperations.deleteCertification;
  }
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
// Export all hooks;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
export * from './useResumeActions';

export * from './useWorkExperience';
export * from './use_education';
export * from './use_skills';
export * from './use_certifications';
export * from './useResumeList';
export * from './useResumeUtils';

'
export * from './useResumeActions';'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export * from './useWorkExperience';'
export * from './use_education';'
export * from './use_skills';'
export * from './use_certifications';'
export * from './useResumeList';'
export * from './useResumeUtils';

<<<<<<< HEAD

;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    }
    isLoading,;
    error,;
    'resume': resume || fetchResumeOperations.resume,;
    'resumes': resumeListOperations.resumes,;
    // Basic resume operations;
    fetchResume,;
    'createResume': resumeActions.createResume,;
    'updateBasicInfo': resumeActions.updateBasicInfo,;
    'setActiveResume': resumeActions.setActiveResume,;
    // Work experience operations;
    'addWorkExperience': workOperations.addWorkExperience,;
    'updateWorkExperience': workOperations.updateWorkExperience,;
    'deleteWorkExperience': workOperations.deleteWorkExperience,;
    // Education operations;
    'addEducation': educationOperations.addEducation,;
    'updateEducation': educationOperations.updateEducation,;
    'deleteEducation': educationOperations.deleteEducation,;
    // Skills operations;
    'addSkill': skillsOperations.addSkill,;
    'deleteSkill': skillsOperations.deleteSkill,;
    // Certifications operations;
    'addCertification': certOperations.addCertification,;
    'updateCertification': certOperations.updateCertification,;
    'deleteCertification': certOperations.deleteCertification;
  }
}
;
// Export all hooks;
export * from './useFetchResume',;'
export * from './useResumeActions',;'
export * from './useWorkExperience',;'
export * from './useEducation',;'
export * from './useSkills',;'
export * from './useCertifications',;'
export * from './useResumeList';'
export * from './useResumeUtils';
<<<<<<< HEAD






=======
export * from './useResumeUtils';

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
