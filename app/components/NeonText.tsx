import React from 'react';
import { motion } from 'framer-motion';

interface NeonTextProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  animate?: boolean;
  className?: string;
}

const NeonText: React.FC<NeonTextProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  animate = true,
  className = ''
}) => {
  const variantClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const glowClasses = {
    cyan: 'drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    purple: 'drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] drop-shadow-[0_0_10px_rgba(168,85,247,0.3)] drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    pink: 'drop-shadow-[0_0_5px_rgba(255,0,128,0.5)] drop-shadow-[0_0_10px_rgba(255,0,128,0.3)] drop-shadow-[0_0_15px_rgba(255,0,128,0.2)]',
    green: 'drop-shadow-[0_0_5px_rgba(0,255,136,0.5)] drop-shadow-[0_0_10px_rgba(0,255,136,0.3)] drop-shadow-[0_0_15px_rgba(0,255,136,0.2)]',
    blue: 'drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    orange: 'drop-shadow-[0_0_5px_rgba(255,107,53,0.5)] drop-shadow-[0_0_10px_rgba(255,107,53,0.3)] drop-shadow-[0_0_15px_rgba(255,107,53,0.2)]'
  };

  const textClasses = `${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses[variant]} font-bold ${className}`;

  if (animate) {
    return (
      <motion.span
        className={textClasses}
        animate={{
          textShadow: [
            `0 0 5px ${variant === 'cyan' ? '#06b6d4' : variant === 'purple' ? '#a855f7' : variant === 'pink' ? '#ff0080' : variant === 'green' ? '#00ff88' : variant === 'blue' ? '#3b82f6' : '#ff6b35'}`,
            `0 0 20px ${variant === 'cyan' ? '#06b6d4' : variant === 'purple' ? '#a855f7' : variant === 'pink' ? '#ff0080' : variant === 'green' ? '#00ff88' : variant === 'blue' ? '#3b82f6' : '#ff6b35'}`,
            `0 0 5px ${variant === 'cyan' ? '#06b6d4' : variant === 'purple' ? '#a855f7' : variant === 'pink' ? '#ff0080' : variant === 'green' ? '#00ff88' : variant === 'blue' ? '#3b82f6' : '#ff6b35'}`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={textClasses}>
      {children}
    </span>
  );
};

export default NeonText;