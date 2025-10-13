<<<<<<< HEAD
import React from 'react';

interface FuturisticBackgroundEnhancedProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticBackgroundEnhanced({ className = '', children }: FuturisticBackgroundEnhancedProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function FuturisticBackgroundEnhanced({ className = '', children, ...props }: FuturisticBackgroundEnhancedProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface FuturisticBackgroundEnhancedProps {
  children: React.ReactNode;
}

const FuturisticBackgroundEnhanced: React.FC<FuturisticBackgroundEnhancedProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FuturisticBackgroundEnhanced;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
