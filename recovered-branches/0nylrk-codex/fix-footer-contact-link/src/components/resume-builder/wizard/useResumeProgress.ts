

export const _useResumeProgress = (_resume: Resume | null) => {_const [progress, _setProgress] = useState(0);
  
  useEffect__(() => {
    // Calculate progress based on completed sections
    if (!resume) {
      setProgress(0);
      return;}
    
    let _completed = 0;
    
    // Basic info is always considered (1 point)
    completed += 1;
    
    // Work experience (1 point if at least one entry)
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

  return progress;
};
