import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FuturisticButtonProps {
  href: string;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25",
    outline: "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900",
    secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <a href={href} className={classes}>
      {children}
      {icon && <span className="ml-2 group-hover:translate-x-1 transition-transform">{icon}</span>}
    </a>
  );
};

export default FuturisticButton;