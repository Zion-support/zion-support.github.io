<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;
<<<<<<< HEAD
<<<<<<< HEAD


  const [progress, setProgress] = useState(0);
=======
=======
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
>>>>>>> main
  const [progress, setProgress] = useState(0);

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const [progress, setProgress] = useState(0);

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress(0);
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
=======

    let completed = 0;

    // Basic info is always considered (1 point)
    completed += 1;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Work experience (1 point if at least one entry)

import { useState, useEffect  } from './react';
import { Resume  } from '@/types / resume';
export const useResumeProgress = (resume: Resume | null) =>: any {
  const [progress, set_progress] = useState (0);
;
  useEffect (() => {
=======
    if (resume.work_experience && resume.work_experience.length > 0) {
<<<<<<< HEAD
      completed += 1

    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD



    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
    // Work experience (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      completed += 1;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
      completed += 1;
>>>>>>> main
=======
      completed += 1;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);

<<<<<<< HEAD
<<<<<<< HEAD
  return progress
=======
;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
      completed += 1;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Education (1 point if at least one entry);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      completed += 1;
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
  return progress;
<<<<<<< HEAD
}
;

=======


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  return progress;
>>>>>>> main
=======
  return progress;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};

import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
;
export const useResumeProgress = (resume:Resume | null) => {;
  const [progress, setProgress] = useState(0),;
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
},; useEffect ( () => {
  // Calculate progress based on completed sections if (!resume) {
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress 
};
  return progress;

};

};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
