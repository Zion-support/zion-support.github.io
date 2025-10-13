import React from 'react';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  href: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  neon?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  neon = true
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-500 group relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-cyan-400/25 hover:shadow-lg',
    ghost: 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-cyan-400/10 hover:shadow-lg'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const neonEffects = neon ? {
    primary: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:border-cyan-400/50',
    outline: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-300/70',
    ghost: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
  } : {};

  return (
    <Link
      to={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${neonEffects[variant] || ''} ${className}`}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 -z-10"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{icon}</span>}
        {children}
      </span>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
    </Link>
  );
};

export default FuturisticButton;