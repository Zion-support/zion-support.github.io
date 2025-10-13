import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface EnhancedFuturisticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  icon?: React.ReactNode;
  animated?: boolean;
  glowEffect?: boolean;
  disabled?: boolean;
}

const EnhancedFuturisticButton: React.FC<EnhancedFuturisticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  animated = true,
  glowEffect = true,
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-purple-600 
      hover:from-cyan-600 hover:to-purple-700
      text-white font-semibold
      shadow-lg hover:shadow-cyan-500/25
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-600 
      hover:from-purple-600 hover:to-pink-700
      text-white font-semibold
      shadow-lg hover:shadow-purple-500/25
    `,
    outline: `
      border-2 border-cyan-400 
      hover:bg-cyan-400 hover:text-slate-900
      text-cyan-400 font-semibold
      hover:shadow-cyan-400/25
    `,
    ghost: `
      hover:bg-white/10 
      text-gray-300 hover:text-white
      font-medium
    `
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    rounded-lg transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900
    disabled:opacity-50 disabled:cursor-not-allowed
    group overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const buttonContent = (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={animated ? { 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={animated ? { 
        scale: disabled ? 1 : 0.95,
        transition: { duration: 0.1 }
      } : {}}
      animate={{
        boxShadow: isHovered && glowEffect ? [
          '0 0 0 0 rgba(34, 211, 238, 0.4)',
          '0 0 0 10px rgba(34, 211, 238, 0)',
          '0 0 0 0 rgba(34, 211, 238, 0)'
        ] : '0 0 0 0 rgba(34, 211, 238, 0)'
      }}
      transition={{
        boxShadow: { duration: 0.6, repeat: isHovered ? Infinity : 0 }
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scanning line effect */}
      {isHovered && animated && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      )}

      {/* Animated particles */}
      {isHovered && animated && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center space-x-2">
        {icon && (
          <motion.div
            animate={isHovered ? { 
              rotate: icon === <ArrowRight className="w-4 h-4" /> ? 360 : 0,
              scale: 1.1
            } : { 
              rotate: 0,
              scale: 1
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        <span>{children}</span>
        {variant === 'primary' && !icon && (
          <motion.div
            animate={isHovered ? { 
              x: 5,
              opacity: 1
            } : { 
              x: 0,
              opacity: 0.7
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        )}
      </div>

      {/* Glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute inset-0 rounded-lg blur-md bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-30"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
            opacity: isHovered ? [0, 0.3, 0] : 0
          }}
          transition={{
            duration: 0.6,
            repeat: isHovered ? Infinity : 0
          }}
        />
      )}

      {/* Press effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="inline-block"
        whileHover={animated ? { scale: 1.02 } : {}}
        whileTap={animated ? { scale: 0.98 } : {}}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return buttonContent;
};

export default EnhancedFuturisticButton;