import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  glow?: boolean;
  neon?: boolean;
  gradient?: string;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled = false,
  glow = true,
  neon = true,
  gradient
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    group overflow-hidden
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-600 text-white
      hover:from-cyan-400 hover:to-purple-500
      shadow-lg hover:shadow-xl
      ${glow ? 'hover:shadow-cyan-500/25' : ''}
      ${neon ? 'hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]' : ''}
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800 text-white
      hover:from-slate-600 hover:to-slate-700
      border border-slate-600 hover:border-slate-500
      shadow-lg hover:shadow-xl
    `,
    outline: `
      border-2 border-cyan-400 text-cyan-400
      hover:bg-cyan-400 hover:text-slate-900
      backdrop-blur-sm
      ${glow ? 'hover:shadow-cyan-400/25' : ''}
    `,
    ghost: `
      text-gray-300 hover:text-white
      hover:bg-white/10 backdrop-blur-sm
      border border-transparent hover:border-white/20
    `
  };

  const gradientOverlay = gradient || 'from-cyan-500/20 via-purple-500/20 to-pink-500/20';

  const buttonContent = (
    <motion.div
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={disabled ? undefined : onClick}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        {icon && <span className="mr-2 group-hover:rotate-12 transition-transform duration-300">{icon}</span>}
        {children}
      </div>

      {/* Glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
      )}

      {/* Neon effect */}
      {neon && (
        <div className="absolute inset-0 rounded-lg shadow-[0_0_0_0_rgba(0,255,255,0.4)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300"></div>
      )}
    </motion.div>
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

export default FuturisticButton;