<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';

<<<<<<< HEAD
interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function LoadingStates({ className = '', children }: LoadingStatesProps) {
=======
export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`${className}`}>
=======
export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
  return (
    <div className={`loading-states-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function LoadingStates({ className = '', children, ...props }: LoadingStatesProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
