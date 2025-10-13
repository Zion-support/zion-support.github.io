import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  onClick,
  disabled = false,
  glowColor = 'cyan'
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    let animationId: number;

    const animate = () => {
      const time = Date.now() * 0.002;
      const glowIntensity = Math.sin(time * 3) * 0.1 + 0.2;
      
      if (button) {
        button.style.setProperty('--glow-intensity', glowIntensity.toString());
      }
      
      animationId = requestAnimationFrame(animate);
    };

    if (variant === 'primary') {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: clsx(
      'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold',
      'hover:from-cyan-600 hover:to-purple-700',
      'shadow-lg hover:shadow-2xl',
      'border border-cyan-400/30',
      'relative overflow-hidden'
    ),
    outline: clsx(
      'border border-cyan-400 text-cyan-400 font-semibold',
      'hover:bg-cyan-400 hover:text-slate-900',
      'backdrop-blur-sm bg-white/5',
      'hover:shadow-lg hover:shadow-cyan-500/25'
    ),
    ghost: clsx(
      'text-gray-300 font-medium',
      'hover:text-cyan-400',
      'hover:bg-white/5',
      'backdrop-blur-sm'
    )
  };

  const glowColors = {
    cyan: 'shadow-cyan-500/25',
    purple: 'shadow-purple-500/25',
    pink: 'shadow-pink-500/25',
    green: 'shadow-green-500/25',
    blue: 'shadow-blue-500/25'
  };

  const glowGradients = {
    cyan: 'from-cyan-500/20 to-transparent',
    purple: 'from-purple-500/20 to-transparent',
    pink: 'from-pink-500/20 to-transparent',
    green: 'from-green-500/20 to-transparent',
    blue: 'from-blue-500/20 to-transparent'
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center rounded-lg',
    'transition-all duration-300 transform',
    'hover:scale-105 active:scale-95',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    sizeClasses[size],
    variantClasses[variant],
    glowColors[glowColor],
    className
  );

  const buttonContent = (
    <>
      {/* Animated background for primary variant */}
      {variant === 'primary' && (
        <div 
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, transparent, var(--glow-color, rgba(0, 255, 255, 0.1)), transparent)`,
            opacity: 'var(--glow-intensity)'
          }}
        />
      )}
      
      {/* Ripple effect overlay */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
      
      {/* Corner accents for primary variant */}
      {variant === 'primary' && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-300/50 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-300/50 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-300/50 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-300/50 rounded-br-lg" />
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        to={href}
        className={clsx(baseClasses, 'group')}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className={clsx(baseClasses, 'group')}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;