import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500",
    secondary: "bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-purple-500",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-500",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 focus:ring-green-500",
    warning: "bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 focus:ring-yellow-500",
    danger: "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 focus:ring-red-500"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed transform-none hover:scale-100" : "hover:scale-105 active:scale-95";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
        {children}
      </span>
      
      {/* Animated Background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-400/50 transition-colors duration-300"></div>
      
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute w-2 h-2 bg-white rounded-full animate-ping opacity-75"
          style={{
            left: ripple.x - 4,
            top: ripple.y - 4,
            animationDuration: '0.6s'
          }}
        />
      ))}
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
      </div>
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled && !loading) {
      createRipple(e);
      onClick?.();
    }
  };

  if (to) {
    return (
      <Link 
        to={to} 
        className={`${classes} group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={`${classes} group`} 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={handleClick} 
      className={`${classes} group`}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

export default NeonButton;