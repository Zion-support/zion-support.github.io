<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface FuturisticCardProps {
=======
interface FuturisticcardProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface FuturisticCardProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface FuturisticCardProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
  variant?: 'default' | 'glass' | 'neon' | 'hologram';
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticCard({ className = '', children }: FuturisticCardProps) {
=======
export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function FuturisticCard({ children, className = '', ...props }: FuturisticCardProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function FuturisticCard({ className = '', children, ...props }: FuturisticCardProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = "rounded-xl p-6 transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
    glass: "bg-white/5 backdrop-blur-md border border-cyan-500/30 hover:bg-white/10",
    neon: "bg-slate-800/50 border border-cyan-400/50 hover:border-cyan-400 shadow-lg shadow-cyan-500/10",
    hologram: "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 hover:from-cyan-500/20 hover:to-purple-500/20"
  };

=======

import React from 'react';

interface FuturisticcardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    </div>
  );
};

export default FuturisticCard;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className={`futuristiccard-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
