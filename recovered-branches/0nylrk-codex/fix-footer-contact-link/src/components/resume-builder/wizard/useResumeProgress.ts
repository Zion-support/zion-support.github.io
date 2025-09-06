

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
    if (!resume) {;
      setProgress(0),;
      return;
    }
;
    let completed = 0,;
    // Basic info is always considered (1 point);
    completed += 1,;
    // Work experience (1 point if at least one entry);
    if (resume.work_experience && resume.work_experience.length > 0) {;
      completed += 1;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
;
    // Education (1 point if at least one entry);
    if (resume.education && resume.education.length > 0) {;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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


};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
