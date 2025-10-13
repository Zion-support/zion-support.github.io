import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface EnhancedFuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  animationType?: 'glow' | 'pulse' | 'scan' | 'ripple' | 'neon';
  glowColor?: string;
}

const EnhancedFuturisticButton: React.FC<EnhancedFuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false,
  loading = false,
  animationType = 'glow',
  glowColor = 'cyan'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0',
    secondary: 'bg-gradient-to-r from-slate-700 to-slate-800 text-white border border-slate-600',
    outline: 'bg-transparent text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    ghost: 'bg-transparent text-gray-300 border-0 hover:bg-white/10',
    danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white border-0'
  };

  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/50 hover:shadow-2xl',
    purple: 'hover:shadow-purple-500/50 hover:shadow-2xl',
    pink: 'hover:shadow-pink-500/50 hover:shadow-2xl',
    blue: 'hover:shadow-blue-500/50 hover:shadow-2xl',
    green: 'hover:shadow-green-500/50 hover:shadow-2xl',
    orange: 'hover:shadow-orange-500/50 hover:shadow-2xl',
    red: 'hover:shadow-red-500/50 hover:shadow-2xl',
    yellow: 'hover:shadow-yellow-500/50 hover:shadow-2xl'
  };

  const animationClasses = {
    glow: 'animate-glow',
    pulse: 'animate-pulse',
    scan: 'animate-scan',
    ripple: '',
    neon: 'animate-neon'
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    
    createRipple(e);
    onClick?.();
  };

  useEffect(() => {
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
        50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); }
      }
      
      @keyframes scan {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes neon {
        0%, 100% { 
          text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
        }
        50% { 
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .animate-scan {
        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), transparent);
        background-size: 200% 100%;
        animation: scan 2s linear infinite;
      }
      
      .animate-neon {
        animation: neon 1.5s ease-in-out infinite;
      }
      
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const buttonContent = (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden
        font-semibold rounded-lg
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glowClasses[glowColor as keyof typeof glowClasses]}
        ${animationClasses[animationType]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${loading ? 'cursor-wait' : ''}
        ${className}
      `}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20
          }}
        />
      ))}
      
      {/* Scanning line effect */}
      {isHovered && animationType === 'scan' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan"></div>
      )}
      
      {/* Glow effect */}
      {isHovered && animationType === 'glow' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {loading ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
          </>
        )}
      </div>
      
      {/* Holographic effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-50"></div>
      )}
    </button>
  );

  if (href) {
    return (
      <Link to={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default EnhancedFuturisticButton;