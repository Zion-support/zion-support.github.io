<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;

import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;
const [progress, setProgress] = useState(0);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const [progress, setProgress] = useState(0);
=======

import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;  const [progress, setProgress] = useState(0);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export const useResumeProgress = (resume: Resume | null) => {;  const [progress, setProgress] = useState(0);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
  const [progress, setProgress] = useState(0);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
if ( {) {
  $2
}
      set_progress (0);
      return;
    }
    let completed = 0;
;
    // Basic info is always considered (1 point);

<<<<<<< HEAD
    // Basic info is always considered (1 point)
    completed += 1;

    // Work experience (1 point if at least one entry)
<<<<<<< HEAD
    if (resume.work_experience && resume.work_experience.length > 0) {
<<<<<<< HEAD
      completed += 1
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from 'react',;
import { Resume } from '@/types/resume',;
export const useResumeProgress = (resume: Resume | null) => {;
  const [progress, setProgress] = useState(0),;
  useEffect(() => {;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

    let completed = 0;

completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
completed += 1;

    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
// Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
      completed += 1;
    }
      completed += 1;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
      completed += 1;
>>>>>>> main
=======
      completed += 1;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
      completed += 1;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      completed += 1;      completed += 1;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {}
      completed += 1;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return progress
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }

    // Education (1 point if at least one entry);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
      completed += 1;
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }
// Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
      completed += 1;
      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
  return progress;

  return progress;

};
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);

  return progress;
};
  return progress;
  return progress;
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { useState, useEffect } from 'react',;'
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
},; useEffect ( () => {}
  // Calculate progress based on completed sections if (!resume) {}
  // Basic info is always considered (1 point) completed += 1;
// Work experience (1 point if at least one entry) return progress;
};
  return progress;

};

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
