import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FuturisticButtonEnhancedProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'yellow' | 'red';
  neon?: boolean;
  animated?: boolean;
  className?: string;
  disabled?: boolean;
}

const FuturisticButtonEnhanced: React.FC<FuturisticButtonEnhancedProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  glowColor = 'cyan',
  neon = true,
  animated = true,
  className = '',
  disabled = false,
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500",
    outline: "border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 focus:ring-cyan-500",
    ghost: "text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500",
  };

  const glowColors = {
    cyan: "shadow-cyan-500/25 hover:shadow-cyan-500/50",
    purple: "shadow-purple-500/25 hover:shadow-purple-500/50",
    pink: "shadow-pink-500/25 hover:shadow-pink-500/50",
    blue: "shadow-blue-500/25 hover:shadow-blue-500/50",
    green: "shadow-green-500/25 hover:shadow-green-500/50",
    yellow: "shadow-yellow-500/25 hover:shadow-yellow-500/50",
    red: "shadow-red-500/25 hover:shadow-red-500/50",
  };

  const neonGlow = neon ? "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-cyan-500/20 before:to-purple-500/20 before:blur-lg before:-z-10" : "";

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${glowColors[glowColor]} ${neonGlow} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2" />
      )}
      
      {/* Animated Border */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${buttonClasses}`}
        whileHover={animated ? { scale: 1.05 } : {}}
        whileTap={animated ? { scale: 0.95 } : {}}
        initial={animated ? { opacity: 0, y: 10 } : {}}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={animated ? { duration: 0.3 } : {}}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`group ${buttonClasses}`}
      whileHover={animated ? { scale: 1.05 } : {}}
      whileTap={animated ? { scale: 0.95 } : {}}
      initial={animated ? { opacity: 0, y: 10 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={animated ? { duration: 0.3 } : {}}
    >
      {content}
    </motion.button>
  );
};

export default FuturisticButtonEnhanced;