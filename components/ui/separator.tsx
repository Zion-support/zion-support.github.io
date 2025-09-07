<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> origin/chore/fix-lint-and-merge

interface SeparatorProps {
  className?: string;
<<<<<<< HEAD

=======
  orientation?: 'horizontal' | 'vertical';}
}
>>>>>>> origin/chore/fix-lint-and-merge
}
export function Separator() {const baseClasses = 'bg-slate-600';}
}
<<<<<<< HEAD
const orientationClasses  = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';return (
    <div className={`${baseClasses} ${orientationClasses} ${className}`} />;
  )}
=======
<<<<<<< HEAD
export function Separator() {const baseClasses = 'bg-slate-600';}
}
const orientationClasses  = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';return (<div className={`${baseClasses} ${orientationClasses} ${className}`} />;
  )}
=======
const orientationClasses  = orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px';return (<div className={`${baseClasses} ${orientationClasses} ${className}`}    />;
  )}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
