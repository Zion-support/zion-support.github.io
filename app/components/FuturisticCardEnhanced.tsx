<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface FuturisticCardEnhancedProps {
=======
interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticCardEnhanced({ className = '', children }: FuturisticCardEnhancedProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function FuturisticCardEnhanced({ className = '', children, ...props }: FuturisticCardEnhancedProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = "relative rounded-xl overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40",
    gradient: "bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-cyan-500/20 hover:border-cyan-500/40",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
export default FuturisticCardEnhanced;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Futuristiccardenhanced({ className = '', children, ...props }: FuturisticcardenhancedProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
