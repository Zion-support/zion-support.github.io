
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress based on completed sections
import { useState, useEffect } from "react";""
import { Resume } from "@/types/resume";"
export const useResumeProgress = (resume: Resume | null) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress based on completed sections;
pr-12325
    if (!resume) {

      setProgress(0);
      return;
    }
import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
export const useResumeProgress = (resume: Resume | null) => {;
  const [progress, setProgress] = useState(0),;
  useEffect(() => {;

    // Calculate progress based on completed sections;
    // Check condition
if ( {) {
  $2
      return;) => {
  return $3;}
}
    }

    completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
      completed += 1;      completed += 1;

    let completed = 0;

    // Basic info is always considered (1 point)
    completed += 1;

    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {}
      completed += 1;}
    }


    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {}
      completed += 1;}
    }



    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {}
      completed += 1;}
    }



    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {}
      completed += 1;}
    }

    let completed = 0;

    // Basic info is always considered (1 point)
    completed += 1;

    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {

    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {

    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {

    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
pr-12325

    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);

    // Check condition
if ( {) {
  $2
}
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }
      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
    }
      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
    }};

  return progress;
};
"
pr-12325
import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
  return progress;
};

  return progress;
  return progress;
};
"
import { useState, useEffect } from 'react',;''
import { Resume } from '@/types/resume',;'
;
export const useResumeProgress = (resume:Resume | null) => {;
  const [progress, setProgress] = useState(0),;
  ;
pr-12325
  useEffect(() => {;
    // Calculate progress based on completed sections;
    if (!resume) {;
      setProgress(0),;
      return,;
    }
    ;
    let completed = 0,;
    ;
    // Basic info is always considered (1 point);
    completed += 1,;
    ;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
      completed += 1,;
    }
    ;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
      completed += 1,;
    }
    ;
    // Skills (1 point if at least one entry);
    if (resume.skills && resume.skills.length > 0) {;
      completed += 1,;
    }
    ;
    // Certifications (1 point if at least one entry);
    if (resume.certifications && resume.certifications.length > 0) {;
      completed += 1,;
    }
    ;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage),;
  }, [resume]),;
;
    let completed = 0,;
    // Basic info is always considered (1 point);
    completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
    // Skills (1 point if at least one entry);
    if (resume.skills && resume.skills.length > 0) {;
    // Certifications (1 point if at least one entry);
    if (resume.certifications && resume.certifications.length > 0) {;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage),;
  }, [resume]),;
pr-12325
  return progress,;
},; useEffect ( () => {
  // Calculate progress based on completed sections if (!resume) {
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress 
};
  return progress
};

};
// Work experience (1 point if at least one entry) return progress;


pr-12325
};
'

