import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'default', 
  size = 'md', 
  className = '', 
  children, 
  ...rest 
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-zion-cyan text-white hover:bg-zion-cyan/90 focus:ring-zion-cyan',
    outline: 'border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white',
    ghost: 'text-zion-cyan hover:bg-zion-cyan/10',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg'
  };
  
  return (
    <button 
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...rest}
    >
      {children}
    </button>
  );
}