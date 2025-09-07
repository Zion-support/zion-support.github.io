<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState, useEffect } from 'react';
import { Resume } from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {
  const [progress, setProgress] = useState($2);
  useEffect(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress($2);
      return
    }
    
    let completed = $2;
    // Basic info is always considered (1 point)
    completed += 1,
    
    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1
    }
    
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {
      completed += 1
    }
    
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1
    }
    
    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1
    }
    
    const progressPercentage = $2;
    setProgress(progressPercentage)
  }, [resume]),

  return progress
},
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;

  const [progress, setProgress] = useState(0);

<<<<<<< HEAD
=======
<<<<<<< HEAD

import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [progress, setProgress] = useState(0);

  useEffect(() => {}
    // Calculate progress based on completed sections;
    if (!resume) {}
      setProgress(0);
      return;
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)

import { useState, useEffect  } from './react';
import { Resume  } from '@/types / resume';
export const useResumeProgress = (resume: Resume | null) =>: any {
  const [progress, set_progress] = useState (0);
;
  useEffect (() => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (resume.work_experience && resume.work_experience.length > 0) {

      completed += 1

<<<<<<< HEAD
    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
export const useResumeProgress = (resume: Resume | null) => {;
  const [progress, setProgress] = useState(0),;
  useEffect(() => {;

    let completed = 0;

      completed += 1;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

;

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
<<<<<<< HEAD
    setProgress(progressPercentage);
  }, [resume]);
;
  return progress;

    }

    // Education (1 point if at least one entry);

=======
    setProgress(progressPercentage);
  }, [resume]);
;
  return progress;

=======

<<<<<<< HEAD
    }
;
let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {

    }
;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
      completed += 1;
    }

    let completed = 0;

    // Basic info is always considered (1 point)
    completed += 1;

    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {
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
// Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }

    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }
    
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}

  return progress
=======

    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage);
    // Work experience (1 point if at least one entry);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

      completed += 1;

    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }

=======
      completed += 1;
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    // Education (1 point if at least one entry);

    // Check condition
if ( {) {
  $2
}
      completed += 1;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1

    }

=======
      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
    }
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export const useResumeProgress = ("resume":Resume | null) => {;
  }
=======

  return progress;

  return progress;

};

import { useState, useEffect } from 'react',;'
<<<<<<< HEAD
=======
=======
  return progress;
}
;


};
<<<<<<< HEAD

import { useState, useEffect } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Resume } from '@/types/resume',;
;
export const useResumeProgress = (resume:Resume | null) => {;
  const [progress, setProgress] = useState(0),;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ;
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
  return progress,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
},; useEffect ( () => {}
  // Calculate progress based on completed sections if (!resume) {}
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress;
};
<<<<<<< HEAD
return progress;
};
};
    setProgress(progressPercentage);
  }, [resume]);
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
},; useEffect ( () => {
  // Calculate progress based on completed sections if (!resume) {
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress 
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return progress;

};

<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
};
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
