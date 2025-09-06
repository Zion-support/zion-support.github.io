<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  className?: string;
}

const UltraFuturisticBackground: React.FC<UltraFuturisticBackgroundProps> = ({
  children,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  className = ''
}) => {
  const getBackgroundClasses = () => {
    const baseClasses = 'relative overflow-hidden';
    
    switch (variant) {
      case 'quantum':
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
      case 'neon':
        return `${baseClasses} bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900`;
      case 'cyber':
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      default:
        return `${baseClasses} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`;
    }
  };

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
