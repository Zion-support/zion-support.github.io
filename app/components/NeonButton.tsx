'use client';

import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function NeonButton({ 
  to, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: NeonButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 group overflow-hidden";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
    secondary: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/40",
    accent: "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
  };
  
  return (
    <Link
      to={to}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Neon glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Animated border */}
      <div className="absolute inset-0 border border-cyan-400/50 rounded-lg group-hover:border-cyan-400 transition-colors duration-300"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
    </Link>
  );
}