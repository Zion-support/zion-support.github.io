<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-c97f
=======


>>>>>>> cursor/analyze-improve-and-deploy-application-3b5b
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
=======
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
<div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
<<<<<<< HEAD
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-ce7d
};

export default LoadingSpinner;