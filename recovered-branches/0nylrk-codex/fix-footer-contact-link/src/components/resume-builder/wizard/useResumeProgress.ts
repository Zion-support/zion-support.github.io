
<<<<<<< HEAD
=======
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';

>>>>>>> origin/cursor/delete-old-data-records-6bba

import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;

  const [progress, setProgress] = useState(0);

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [progress, setProgress] = useState(0);

  useEffect(() => {}
    // Calculate progress based on completed sections;
    if (!resume) {}
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
}
if ( {) {
  $2
}
      set_progress (0);
      return;
    }
    let completed = 0;
<<<<<<< HEAD

      completed += 1;




;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage);
    // Work experience (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
=======
    }

;
    // Basic info is always considered (1 point);

    completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
      }
      completed += 1;      completed += 1;
    }

      completed += 1;

    }

    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {}
      completed += 1;
    }

    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
    }

    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }

  return progress
;
    const progressPercentage = (completed / 5) * 100,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }
    // Education (1 point if at least one entry);

    // Check condition
if ( {) {
  $2
}
      completed += 1;


    if (resume && resume.education && resume && resume.education.length > 0) {
      }
      completed += 1
    }
    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1

<<<<<<< HEAD

=======
    }

      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      }
      completed += 1
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      }
      completed += 1
    };
import { useState, useEffect } from 'react',;'
import { Resume } from '@/types/resume',;'
;
export const useResumeProgress = ('resume':Resume | null) => {;
  }
  const [progress, setProgress] = useState(0),;
    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;


  return progress;

  return progress;

};

import { useState, useEffect } from 'react',;'
<<<<<<< HEAD




=======
import { Resume } from '@/types/resume',;
;
export const useResumeProgress = (resume:Resume | null) => {;
  const [progress, setProgress] = useState(0),;

  ;
  useEffect(() => {;
    // Calculate progress based on completed sections;
    }
    if (!resume) {;
      }
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
      }
      completed += 1,;
    }
    ;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
      }
      completed += 1,;
    }
    ;
    // Skills (1 point if at least one entry);
    if (resume.skills && resume.skills.length > 0) {;
      }
      completed += 1,;
    }
    ;
    // Certifications (1 point if at least one entry);
    if (resume.certifications && resume.certifications.length > 0) {;
      }
      completed += 1,;
    }
    ;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage),;
  }, [resume]),;
;
  return progress,;

},; useEffect ( () => {}
  // Calculate progress based on completed sections if (!resume) {}
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress;
};
return progress;
};
};
    setProgress(progressPercentage);
  }, [resume]);

  return progress;

};


};
>>>>>>> origin/cursor/delete-old-data-records-6bba
