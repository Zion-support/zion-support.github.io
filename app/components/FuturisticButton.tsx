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
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow' | 'red';
  delay?: number;
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
  glowColor = 'cyan',
  delay = 0
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 transform overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
    group
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
      hover:from-cyan-600 hover:to-purple-700
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-600 text-white
      hover:from-purple-600 hover:to-pink-700
      shadow-lg hover:shadow-xl
    `,
    outline: `
      border-2 border-cyan-400 text-cyan-400 bg-transparent
      hover:bg-cyan-400 hover:text-white
      hover:shadow-lg hover:shadow-cyan-500/25
    `,
    ghost: `
      text-white bg-white/10 backdrop-blur-sm
      hover:bg-white/20 hover:text-cyan-400
      border border-white/20 hover:border-cyan-400/50
    `
  };

  const glowColors = {
    cyan: 'hover:shadow-cyan-500/50',
    purple: 'hover:shadow-purple-500/50',
    pink: 'hover:shadow-pink-500/50',
    green: 'hover:shadow-green-500/50',
    blue: 'hover:shadow-blue-500/50',
    yellow: 'hover:shadow-yellow-500/50',
    red: 'hover:shadow-red-500/50'
  };

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${glowColors[glowColor]}
    ${className}
  `;

  const ButtonContent = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center space-x-2"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-lg"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {icon && (
          <span className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-400/50 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pink-400/50 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      <ButtonContent />
    </button>
  );
};

export default FuturisticButton;