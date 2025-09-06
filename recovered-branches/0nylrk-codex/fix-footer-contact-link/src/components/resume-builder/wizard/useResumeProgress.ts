





import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress(0);
      return;
    }
    let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)


    if (resume.work_experience && resume.work_experience.length > 0) {


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






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
    // Education (1 point if at least one entry);

    if (resume.education && resume.education.length > 0) {;

      completed += 1;
    }
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {
      completed += 1;
    }
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
    }

    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}


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


    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;

    }

    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;

    }

    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
  return progress;
}
;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


};

