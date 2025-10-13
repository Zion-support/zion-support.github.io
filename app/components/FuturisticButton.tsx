import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  className = '',
  onClick 
}) => {
  const baseClasses = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105';
  const variantClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
    : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
  
  const sizeClasses = size === 'sm' ? 'px-4 py-2 text-sm' : size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3';

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default FuturisticButton;