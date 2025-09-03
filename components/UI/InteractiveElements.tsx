import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface InteractiveButtonProps {
  children: React.ReactNode;
<<<<<<< HEAD
  onClick?: () => void;
=======
>>>>>>> main
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
<<<<<<< HEAD
  icon?: React.ReactNode;
=======
  onClick?: () => void;
>>>>>>> main
  className?: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
<<<<<<< HEAD

  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
=======
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      case 'secondary':
        return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';
      case 'ghost':
        return 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
>>>>>>> main
  };

  return (
    <motion.button
<<<<<<< HEAD
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      <motion.div
        animate={{ opacity: loading ? 0 : 1 }}
        className="flex items-center"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </motion.div>

      {variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6 }}
        />
=======
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg font-medium transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      animate={{
        boxShadow: isHovered && !disabled ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        children
>>>>>>> main
      )}
    </motion.button>
  );
};
<<<<<<< HEAD

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
=======

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
>>>>>>> main
  children,
  className = '',
  onClick
}) => {
<<<<<<< HEAD
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
=======
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        transition-all duration-300 cursor-pointer
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      animate={{
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.1)' 
          : '0 4px 6px rgba(0,0,0,0.1)'
      }}
>>>>>>> main
    >
      {children}
    </motion.div>
  );
};
<<<<<<< HEAD

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-t-transparent rounded-full ${colorClasses[color]}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
=======

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
    </span>
>>>>>>> main
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

<<<<<<< HEAD
export const ProgressBar: React.FC<ProgressBarProps> = ({
=======
const ProgressBar: React.FC<ProgressBarProps> = ({
>>>>>>> main
  progress,
  className = '',
  showPercentage = true
}) => {
<<<<<<< HEAD
=======
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

>>>>>>> main
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        {showPercentage && (
<<<<<<< HEAD
          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
=======
          <span className="text-sm font-medium text-gray-700">
            {Math.round(animatedProgress)}%
          </span>
>>>>>>> main
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
<<<<<<< HEAD
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg ${positionClasses[position]}`}
      >
        {content}
        <div className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
          position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' :
          position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' :
          position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-1' :
          'right-full top-1/2 -translate-y-1/2 -mr-1'
        }`} />
      </motion.div>
    </div>
  );
=======
          className="bg-blue-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${animatedProgress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${checked ? 'bg-blue-600' : 'bg-gray-200'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      <motion.span
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
        animate={{ x: checked ? 20 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

export {
  InteractiveButton,
  InteractiveCard,
  AnimatedCounter,
  ProgressBar,
  ToggleSwitch
>>>>>>> main
};