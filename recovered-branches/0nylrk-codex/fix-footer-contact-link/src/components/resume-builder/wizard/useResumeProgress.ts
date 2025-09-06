<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts


<<<<<<< HEAD
<<<<<<< HEAD
=======
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
import {useState, useEffect} from 'react';
import {Resume} from '@/types/resume';
export const useResumeProgress = (resume: Resume | null) => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress(0);
      return;
    }
<<<<<<< HEAD
    let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)
<<<<<<< HEAD
<<<<<<< HEAD
    if (resume.work_experience && resume.work_experience.length > 0) {

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
import { useState, useEffect  } from './react';
import { Resume  } from '@/types / resume';
export const useResumeProgress = (resume: Resume | null) =>: any {
  const [progress, set_progress] = useState (0);
;
  useEffect (() => {
=======
    if (resume.work_experience && resume.work_experience.length > 0) {

      completed += 1

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
=======
let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      completed += 1;
    }
<<<<<<< HEAD
=======

    let completed = 0;

    // Basic info is always considered (1 point)
    completed += 1;

    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1;
    }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

=======
    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
    }
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
  return progress
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    const progressPercentage = (completed / 5) * 100,;
    setProgress(progressPercentage);
=======
    // Work experience (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
    // Education (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
      completed += 1;
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
      completed += 1;
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
      completed += 1;
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }, [resume]);
;
  return progress;
<<<<<<< HEAD
<<<<<<< HEAD

};

=======
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts

=======


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/useResumeProgress.ts
=======
  return progress;

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
