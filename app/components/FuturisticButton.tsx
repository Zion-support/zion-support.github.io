import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false
}) => {
  const baseClasses = `
    relative group inline-flex items-center justify-center font-semibold
    transition-all duration-300 ease-out transform
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
    ${className}
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-500 
      text-white 
      rounded-lg 
      shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
      after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-cyan-500 after:to-purple-500 after:blur-sm after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-50 hover:after:-z-10
      border border-cyan-400/30 hover:border-cyan-400/60
      hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800 
      text-white 
      rounded-lg 
      border border-white/20 hover:border-white/40
      shadow-lg hover:shadow-white/10 hover:shadow-2xl
      hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-white/5 before:to-white/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    outline: `
      border-2 border-cyan-400 
      text-cyan-400 
      rounded-lg 
      hover:bg-cyan-400 hover:text-white
      shadow-lg hover:shadow-cyan-400/25 hover:shadow-2xl
      hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
      before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-400/10 before:to-purple-400/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    ghost: `
      text-white/80 
      rounded-lg 
      hover:bg-white/10 hover:text-white
      backdrop-blur-sm
      hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
      border border-transparent hover:border-white/20
    `
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
  `;

  const content = (
    <>
      {icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      )}
      
      {/* Enhanced animated background with neon glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
      
      {/* Pulsing neon border */}
      <div className="absolute inset-0 rounded-lg border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-ping delay-1000"></div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;