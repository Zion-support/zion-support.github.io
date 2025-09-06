
<<<<<<< HEAD

import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;


=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
=======
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD

import { useState, useEffect  } from './react';
import { Resume  } from '@/types / resume';
export const useResumeProgress = (resume: Resume | null) =>: any {
  const [progress, set_progress] = useState (0);
;
  useEffect (() => {
=======
    if (resume.work_experience && resume.work_experience.length > 0) {
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    if (resume.work_experience && resume.work_experience.length > 0) {

      completed += 1
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
=======
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

    // Education (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
=======
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
=======
    }
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {
      completed += 1;
    }
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}

<<<<<<< HEAD
=======
  return progress
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}

      completed += 1;
=======
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
  return progress;
<<<<<<< HEAD
}
;

=======


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
