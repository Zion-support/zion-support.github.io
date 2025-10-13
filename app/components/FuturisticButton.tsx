import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'sparkles' | 'none';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  className = '',
  onClick,
  href,
  disabled = false
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105",
    secondary: "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105",
    ghost: "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 hover:scale-105"
  };

  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  const iconMargin = size === 'sm' ? 'ml-1' : size === 'lg' ? 'ml-3' : 'ml-2';

  const renderIcon = () => {
    if (icon === 'arrow') {
      return <ArrowRight className={`${iconSize} ${iconMargin} group-hover:translate-x-1 transition-transform`} />;
    }
    if (icon === 'sparkles') {
      return <Sparkles className={`${iconSize} ${iconMargin} group-hover:rotate-12 transition-transform`} />;
    }
    return null;
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const buttonContent = (
    <>
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
        {renderIcon()}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;