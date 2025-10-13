<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
import React from 'react';
=======
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-61d5

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

interface EnhancedLoadingSpinnerProps {
=======
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
  className?: string;
  fullScreen?: boolean;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function EnhancedLoadingSpinner({ className = '', children }: EnhancedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function EnhancedLoadingSpinner({ className = '', children, ...props }: EnhancedLoadingSpinnerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      {text && (
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {spinner}
        </div>
      </div>
    );
  }
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

  return spinner;
};

<<<<<<< HEAD
export default LoadingSpinner;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
  className?: string;
}

export default function EnhancedLoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2fa5
=======
  className?: string;
}

export default function EnhancedLoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b707
=======
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

export default function EnhancedLoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cf2
=======
export default function Enhancedloadingspinner({ className = '', children, ...props }: EnhancedloadingspinnerProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

export default function EnhancedLoadingSpinner({ 
  size = 'md', 
  text, 
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`} />
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-61d5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
