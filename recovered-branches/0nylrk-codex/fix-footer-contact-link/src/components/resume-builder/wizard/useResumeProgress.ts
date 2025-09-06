
import { useState, useEffect } from "react";
import { Resume } from "@/types/resume";
export const useResumeProgress = (resume: Resume | null) => {
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
    if (resume.work_experience && resume.work_experience.length > 0) {
      completed += 1;
=======
    if (resume && resume.work_experience && resume && resume.work_experience.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Education (1 point if at least one entry)
<<<<<<< HEAD
    if (resume.education && resume.education.length > 0) {
      completed += 1;
=======
    if (resume && resume.education && resume && resume.education.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Skills (1 point if at least one entry)
<<<<<<< HEAD
    if (resume.skills && resume.skills.length > 0) {
      completed += 1;
=======
    if (resume && resume.skills && resume && resume.skills.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // Certifications (1 point if at least one entry)
<<<<<<< HEAD
    if (resume.certifications && resume.certifications.length > 0) {
      completed += 1;
=======
    if (resume && resume.certifications && resume && resume.certifications.length > 0) {
      completed += 1
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    const progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
  return progress;
}

