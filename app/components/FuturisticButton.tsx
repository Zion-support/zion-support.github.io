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
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800 
      text-white 
      rounded-lg 
      border border-white/20
      shadow-lg hover:shadow-white/10 hover:shadow-2xl
      hover:border-white/40
    `,
    outline: `
      border-2 border-cyan-400 
      text-cyan-400 
      rounded-lg 
      hover:bg-cyan-400 hover:text-white
      shadow-lg hover:shadow-cyan-400/25 hover:shadow-2xl
    `,
    ghost: `
      text-white/80 
      rounded-lg 
      hover:bg-white/10 hover:text-white
      backdrop-blur-sm
    `
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
  `;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      )}
      
      {/* Animated background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
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