<<<<<<< HEAD
import React from 'react'
interface FuturisticButtonProps { children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline''
  size?: 'sm' | 'md' | 'lg''
  icon?: React.ReactNode
  onClick?: () => void
<<<<<<< HEAD
  type?: 'button' | 'submit' | 'reset'}'
=======
  type?: 'button' | 'submit' | 'reset' }
>>>>>>> origin/main
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  className = '',''
  variant = 'primary',''
  size = 'md',''
  icon,
  onClick,
  type = 'button''}) => {'
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2''
  const variantClasses = {
<<<<<<< HEAD
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500","
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50","
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''"}"
  const sizeClasses = {sm: 'px-4 py-2 text-sm","
    md: 'px-6 py-3 text-base","
    lg: 'px-8 py-4 text-lg''"}"
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500',''
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50',''
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}'
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',''
    md: 'px-6 py-3 text-base',''
    lg: 'px-8 py-4 text-lg''}'
  children: React.ReactNode;
  className?: string';
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | "lg"
  icon?: React.ReactNode;
  onClick?: () => void';
  type?: 'button' | 'submit' | 'reset';}'
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({children, ''
  className = '','
  variant = 'primary','
  size = 'md","
  icon,
  onClick,''
  type = 'button''}'
}) => {''
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantClasses = {''
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500','
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50','
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}'
  }
  const sizeClasses = {''
    sm: 'px-4 py-2 text-sm','
    md: 'px-6 py-3 text-base','
    lg: 'px-8 py-4 text-lg''}'
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}`
    >
      {icon && <span className="mr-2">{icon}</span>}"
      {children}
=======
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",';
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",';
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';
  }
  const sizeClasses = { sm: "px-4 py-2 text-sm",';
    md: "px-6 py-3 text-base",';
    lg: 'px-8 py-4 text-lg''; }
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",'
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",'
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500''}
  const sizeClasses = { sm: "px-4 py-2 text-sm",'
    md: "px-6 py-3 text-base",'
    lg: 'px-8 py-4 text-lg'' }
  children: React.ReactNode;
  className?: string;'
  variant?: 'primary' | 'secondary' | 'outline';'
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;'
  type?: 'button' | 'submit' | 'reset';}
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ children, '
  className = '',';'
  variant = 'primary',';'
  size = 'md',';
  icon,
  onClick,'
  type = 'button''; }
}) => {'
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {'
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500",';'
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50",';'
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'';}
  };
  const sizeClasses = { '
    sm: "px-4 py-2 text-sm",';'
    md: "px-6 py-3 text-base",';'
    lg: 'px-8 py-4 text-lg''; }
  };
  return (
    <button
      type={ type }
      onClick={ onClick }
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      { children }
>>>>>>> origin/main
    </button>
  )
export default FuturisticButton;
<<<<<<< HEAD
    >{icon && <span className="mr-2">{icon}</span>}"
      {children}
=======
    >{icon && <span className="mr-2">{icon}</span>}
      { children }
>>>>>>> origin/main
    </button>
  )
export default FuturisticButton
<<<<<<< HEAD
}
export default FuturisticButton';
=======
};
export default FuturisticButton;'
=======
<<<<<<< HEAD
import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500',
    outline: 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      )}
    </button>
=======
import React from "react";

const FuturisticButton = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">FuturisticButton</h2>
      <p>This component is under construction.</p>
    </div>
>>>>>>> origin/main
  );
};

export default FuturisticButton;
>>>>>>> origin/main
>>>>>>> origin/main
