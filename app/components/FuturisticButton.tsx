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
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500',';
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50',';
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';
  }
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',';
    md: 'px-6 py-3 text-base',';
    lg: 'px-8 py-4 text-lg'';
  }  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
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
