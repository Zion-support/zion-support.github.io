import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'neon' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = '',
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const rippleIdRef = useRef(0);

  const createRipple = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: rippleIdRef.current++,
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105',
    ghost: 'text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:scale-105',
    neon: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-cyan-400/50',
    glow: 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/50 text-cyan-400 hover:from-cyan-500/30 hover:to-purple-600/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-cyan-400/40'
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const content = (
    <>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            background: 'rgba(6, 182, 212, 0.6)',
            borderRadius: '50%',
            transform: 'scale(0)',
            animation: 'ripple 0.6s linear'
          }}
        />
      ))}
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>}
        {children}
        {variant === 'primary' && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />}
      </span>
      
      {/* Neon glow effect for neon variant */}
      {variant === 'neon' && (
        <div className="absolute inset-0 rounded-lg bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      )}
    </>
  );

  // Add CSS for ripple animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  
  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          createRipple(e);
          onClick?.();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={(e) => {
          createRipple(e as any);
          onClick?.();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    );
  }
  
  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={classes}
      onClick={(e) => {
        createRipple(e);
        onClick?.();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FuturisticButton;