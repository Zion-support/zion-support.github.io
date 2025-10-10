'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {
<<<<<<< HEAD
    size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string
  }
=======
  size?: 'sm' | 'md' | 'lg'
}
  text?: string;
  className?: string};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const sizeClasses = {
};
};
};
}
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
<<<<<<< HEAD
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`} role="status" aria-label="Loading">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      <p className="text-gray-300 text-sm animate-pulse">{text}</p>
    </div>
  );
}
export default LoadingSpinner;
  </LoadingSpinnerProps>
=======
  className = ''}) => {
return (
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`} role="status" aria-label="Loading">
);
};
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      <p className="text-gray-300 text-sm animate-pulse">{text}</p>
    </div>
  )};
export default LoadingSpinner;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
