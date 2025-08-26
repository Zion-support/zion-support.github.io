import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    default: "bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light focus:ring-zion-cyan",
    outline: "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white focus:ring-zion-cyan",
    ghost: "text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 focus:ring-zion-cyan",
    link: "text-zion-cyan hover:text-zion-cyan-light underline-offset-4 hover:underline focus:ring-zion-cyan"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}