
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;


  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress(0);
      return;
    }

      completed += 1

import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
export const useResumeProgress = (resume: Resume | null) => {;
  const [progress, setProgress] = useState(0),;
  useEffect(() => {;

    // Calculate progress based on completed sections;
    // Check condition
if ( {) {
  $2
}
      set_progress (0);
      return;
    }
    let completed = 0;
;
    // Basic info is always considered (1 point);

    completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
      completed += 1;



    }
;
      completed += 1;
    
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}

  return progress
;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage);
  }, [resume]);
;
  return progress;
    // Check condition
if ( {) {
  $2
}

      completed += 1;
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }

    // Education (1 point if at least one entry);
    }

    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
    }

    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
    }
};
