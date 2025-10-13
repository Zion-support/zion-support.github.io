import React from 'react'
interface FuturisticCardProps {
<<<<<<< HEAD
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glow' | 'gradient'}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '','
  variant = 'default''}) => {
  const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm'
  const variantClasses = {
<<<<<<< HEAD
    default: 'bg-white/10',';
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20',';
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';
  }
=======
  children: React.ReactNode;
  className?: string;'
  variant?: 'default' | 'glow' | 'gradient';}
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, '
  className = '',';'
  variant = 'default'';}
}) => {'
  const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm';
  const variantClasses = {'
    default: 'bg-white/10',';'
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20',';'
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';}
  };

>>>>>>> cursor/analyze-improve-and-deploy-application-4227
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
export default FuturisticCard;
=======
    default: 'bg-white/10','
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20','
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20''}
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}
    </div>
  )}
export default FuturisticCard
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
};

export default FuturisticCard;'
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
