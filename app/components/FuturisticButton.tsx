import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  children 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105",
    outline: "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Link
      to={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};

export default FuturisticButton;