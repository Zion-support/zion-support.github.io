import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  size = 'md',
  className = '',
  onClick
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const baseClasses = `inline-flex items-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${sizeClasses[size]}`;
  
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default FuturisticButton;