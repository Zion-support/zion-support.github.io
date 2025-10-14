import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';  icon?: LucideIcon;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';cursor/analyze-improve-and-deploy-application-30da
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  className = '','
  variant = 'primary','
  size = 'md','
  icon,
  onClick,
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-cyan-500',
    secondary: 'bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 focus:ring-slate-500',
    outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white'  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  cursor/analyze-improve-and-deploy-application-30da
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
    </button>
  );
};

    </button>)
  );
export default FuturisticButton;
"""
    >{icon && <span className="mr-2">{icon}</span>}""
      { children }

    </button>
  )
}
export default FuturisticButton;
    >{icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
)}
export default FuturisticButton
}
export default FuturisticButton;
