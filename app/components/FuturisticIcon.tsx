import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticIconProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  glow?: boolean;
  animate?: boolean;
  className?: string;
}

const FuturisticIcon: React.FC<FuturisticIconProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  glow = false,
  animate = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const variantClasses = {
    primary: "text-cyan-400",
    secondary: "text-purple-400",
    accent: "text-pink-400",
    success: "text-green-400",
    warning: "text-yellow-400",
    error: "text-red-400"
  };

  const glowClasses = glow ? "drop-shadow-[0_0_10px_currentColor]" : "";

  const iconClasses = `${sizeClasses[size]} ${variantClasses[variant]} ${glowClasses} ${className}`;

  const iconElement = (
    <div className={iconClasses}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {iconElement}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {iconElement}
    </motion.div>
  );
};

export default FuturisticIcon;