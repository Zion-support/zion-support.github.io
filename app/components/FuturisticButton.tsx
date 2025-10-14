import React from 'react'
interface FuturisticButtonProps {
<<<<<<< HEAD
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  className = '','
  variant = 'primary','
  size = 'md','
  icon,
  onClick,
  type = 'button''}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500',';
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50',';
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';
  }
=======
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function FuturisticButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '', 
  onClick,
  type = 'button'
}: FuturisticButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',';
    md: 'px-6 py-3 text-base',';
    lg: 'px-8 py-4 text-lg'';
  }
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500','
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50','
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm','
    md: 'px-6 py-3 text-base','
    lg: 'px-8 py-4 text-lg''}
  children: React.ReactNode;
  className?: string;'
  variant?: 'primary' | 'secondary' | 'outline';'
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;'
  type?: 'button' | 'submit' | 'reset';}
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, '
  className = '',';'
  variant = 'primary',';'
  size = 'md',';
  icon,
  onClick,'
  type = 'button'';}
}) => {'
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {'
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500',';'
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50',';'
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';}
  };
  const sizeClasses = {'
    sm: 'px-4 py-2 text-sm',';'
    md: 'px-6 py-3 text-base',';'
    lg: 'px-8 py-4 text-lg'';}
  };
<<<<<<< HEAD
=======
  
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
<<<<<<< HEAD
}
export default FuturisticButton;
    >{icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )}
export default FuturisticButton
};
export default FuturisticButton;'
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ac1
