
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { Resume } from '@/types/resume',
export const useResumeProgress = (resume: Resume | null) => {
  const [progress, setProgress] = useState(0),
=======

export const _useResumeProgress = (_resume: Resume | null) => {_const [progress, _setProgress] = useState(0);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  useEffect__(() => {
    // Calculate progress based on completed sections
    if (!resume) {
<<<<<<< HEAD
      setProgress(0),
      return
    }
    
    let completed = 0,
=======
      setProgress(0);
      return;}
    
    let _completed = 0;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Basic info is always considered (1 point)
    completed += 1,
    
    // Work experience (1 point if at least one entry)
<<<<<<< HEAD
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
    
    const progressPercentage = (completed / 5) * 100,
    setProgress(progressPercentage)
  }, [resume]),
=======
    if (resume.work_experience && resume.work_experience.length > 0) {_completed += 1;}
    
    // Education (1 point if at least one entry)
    if (resume.education && resume.education.length > 0) {_completed += 1;}
    
    // Skills (1 point if at least one entry)
    if (resume.skills && resume.skills.length > 0) {_completed += 1;}
    
    // Certifications (1 point if at least one entry)
    if (resume.certifications && resume.certifications.length > 0) {_completed += 1;}
    
    const _progressPercentage = (completed / 5) * 100;
    setProgress(progressPercentage);
  }, [resume]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return progress
},
