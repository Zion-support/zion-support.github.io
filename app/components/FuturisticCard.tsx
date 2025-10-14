<<<<<<< HEAD
import React from 'react';
variant?: 'default' | 'glow' | 'gradient' }
;
const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '','')
  variant = 'default''}) => {';
const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm'';
const variantClasses = {

    default: "bg-white/10",';"
    glow: "bg-white/10 shadow-lg shadow-blue-500/20",';
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';
  }

=======
const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '',''
  variant = 'default''}) => {'
  const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm''
  const variantClasses = {
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
  children: React.ReactNode;
  className?: string';
  variant?: 'default' | 'glow' | 'gradient';}'
}
<<<<<<< HEAD
;
const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, '
  className = '',';'
  variant = 'default''; })
}) => {';
const baseClasses = 'rounded-xl p-6 border border-white/20 backdrop-blur-sm';
  const variantClasses = {'"
    default: "bg-white/10",';'"
    glow: "bg-white/10 shadow-lg shadow-blue-500/20",';'
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'';}
  };
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>
      { children }
    </div>)
  );
}
export default FuturisticCard;"
    default: "bg-white/10",'"
    glow: "bg-white/10 shadow-lg shadow-blue-500/20",'
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20''}
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>{ children }

    </div>)
  );
=======
    </div>
  )
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
export default FuturisticCard;
    default: 'bg-white/10',''
    glow: 'bg-white/10 shadow-lg shadow-blue-500/20',''
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20''}'
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}></div>{children}`
    </div>)
  );
export default FuturisticCard
<<<<<<< HEAD

};
export default FuturisticCard;'
"
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
