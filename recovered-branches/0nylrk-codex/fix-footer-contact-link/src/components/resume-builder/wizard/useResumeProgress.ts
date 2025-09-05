
<<<<<<< HEAD
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
},;
=======
import { useState, useEffect } from 'react',
import { Resume } from '@/types/resume',
export const useResumeProgress = (resume: Resume | null) => {
  const [progress, setProgress] = useState(0),  
  useEffect_(() => {
    // Calculate progress based on completed sections,
if (!resume) {
      setProgress(0),
      return
    }
    
    let completed = 0,    
    // Basic info is always considered (1 point)
    completed += 1,
    
    // Work experience (1 point if at least one entry)
    if (resume.workexperience && resume.workexperience.length > 0) {
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
  return progress
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
