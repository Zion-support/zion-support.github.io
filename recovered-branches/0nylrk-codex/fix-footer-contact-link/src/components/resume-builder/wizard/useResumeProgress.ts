
import { useState, useEffect } from 'react';
import { Resume } from '@/types/resume';

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
