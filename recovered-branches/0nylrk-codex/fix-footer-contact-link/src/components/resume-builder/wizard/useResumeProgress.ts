import { useState, useEffect  } from './react';
import { Resume  } from '@/types / resume';
export const useResumeProgress = (resume: Resume | null) =>: any {
  const [progress, set_progress] = useState (0);
;
  useEffect (() => {
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
    completed += 1;
;
    // Work experience (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    }
    // Education (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    }
    // Skills (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    }
    // Certifications (1 point if at least one entry);
    // Check condition
if ( {) {
  $2
}
      completed += 1;
    }
    const progress_percentage = (completed / 5) * 100;
    set_progress (progress_percentage);
  }, [resume]);
;
  return progress;
}
;