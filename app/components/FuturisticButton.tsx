<<<<<<< HEAD
import React from 'react';

interface FuturisticButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function FuturisticButton({ children, className = '', onClick }: FuturisticButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
=======
interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function FuturisticButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}: FuturisticButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
    : "bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:border-white/40";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-234b
