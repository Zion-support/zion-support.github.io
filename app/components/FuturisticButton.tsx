import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: &apos;button&apos; | &apos;submit&apos; | &apos;reset&apos;;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type = 'button'
}) => {
  const baseClasses = &apos;inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2&apos;;
  
  const variantClasses = {
    primary: &apos;bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-blue-500&apos;,
    secondary: &apos;bg-white/10 text-white border border-white/20 hover:bg-white/20 focus:ring-white/50&apos;,
    outline: &apos;border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500&apos;
  };

  const sizeClasses = {
    sm: &apos;px-4 py-2 text-sm&apos;,
    md: &apos;px-6 py-3 text-base&apos;,
    lg: &apos;px-8 py-4 text-lg&apos;
  };

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
};

export default FuturisticButton;