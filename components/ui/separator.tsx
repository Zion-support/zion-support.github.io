<<<<<<< HEAD
import React from 'react'
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';}
}
}

<<<<<<< HEAD
export function Separator({ className = '', orientation = 'horizontal' }: SeparatorProps) {
  const baseClasses = 'bg-slate-600';
  const orientationClasses = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';
  
  return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />
  );
}
=======
  orientation?: any'
export function Separator({ className = '', orientation = 'horizontal'';
  const baseClasses = 'bg-slate-600';'
  const orientationClasses = orientation = = 'horizontal' ? 'w-full h-px' : any'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export function Separator() {const baseClasses = 'bg-slate-600';}
}
const orientationClasses  = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';return (<div className={`${baseClasses} ${orientationClasses} ${className}`} />;
  )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
