import React from 'react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function FuturisticButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  icon,
  size = 'md'
}: FuturisticButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}