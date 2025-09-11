

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
    let completed = 0;
    // Basic info is always considered (1 point)
    completed += 1;
    // Work experience (1 point if at least one entry)
    if (resume.work_experience && resume.work_experience.length > 0) {

      completed += 1

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



    }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
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
}
;

=======


};
