<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function EnhancedLoading({ className = '', children }: EnhancedLoadingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function EnhancedLoading({ className = '', children, ...props }: EnhancedLoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface EnhancedLoadingProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = "Loading...",
  showProgress = false,
  progress = 0
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-spin"></div>
            <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          {message}
        </h2>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto">
          Preparing your experience with cutting-edge technology...
        </p>
      </div>
    </div>
  );
};
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
export default EnhancedLoading;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Enhancedloading({ className = '', children, ...props }: EnhancedloadingProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
