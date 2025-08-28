import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  BarChart3,
  Target,
  Lightbulb,
  Database,
  Network,
  Eye,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Atom,
  Car,
  Scale,
  Leaf,
  Factory,
  Building,
  Clock as ClockIcon,
  Phone,
  Mail,
  TrendingUp
} from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple' | 'futuristic' | 'zion';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'zionslate' | 'zioncyan' | 'zionpurple';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  showIcon?: boolean;
  iconType?: 'tech' | 'business' | 'ai' | 'random';
  animated?: boolean;
  className?: string;
  ariaLabel?: string;
}

const iconMap = {
  tech: [Cpu, Server, Database, Network, Monitor, Smartphone, Globe, Zap],
  business: [Users, DollarSign, BarChart3, Target, TrendingUp, Building, ShoppingCart, BookOpen],
  ai: [Brain, Atom, Eye, Lightbulb, Rocket, Shield, Lock, Heart],
  random: [Cpu, Brain, Users, Zap, Target, Shield, Globe, Rocket]
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  color = 'primary',
  text,
  showProgress = false,
  progress = 0,
  showIcon = false,
  iconType = 'tech',
  animated = true,
  className = '',
  ariaLabel = 'Loading...'
}) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Icon rotation effect
  useEffect(() => {
    if (showIcon && animated && iconType !== 'random') {
      const interval = setInterval(() => {
        setCurrentIconIndex(prev => (prev + 1) % iconMap[iconType].length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showIcon, animated, iconType]);

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Color classes
  const colorClasses = {
    primary: 'text-zion-cyan',
    secondary: 'text-zion-purple',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    zionslate: 'text-zion-slate',
    zioncyan: 'text-zion-cyan',
    zionpurple: 'text-zion-purple'
  };

  // Get current icon
  const CurrentIcon = iconMap[iconType][currentIconIndex];

  // Variant-specific renderers
  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}>
            <div className="w-full h-full rounded-full bg-current opacity-75" />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 ${colorClasses[color]} bg-current rounded-full`}
                style={{ height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '24px' : '32px' }}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 ${colorClasses[color]} border-2 border-current rounded-full`}
                animate={{
                  scale: [0, 1],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6
                }}
              />
            ))}
          </div>
        );

      case 'futuristic':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className={`w-full h-full ${colorClasses[color]} border-2 border-current rounded-full`}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute inset-1 border-2 border-transparent border-t-current rounded-full"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      case 'zion':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Outer ring */}
            <motion.div
              className={`absolute inset-0 ${colorClasses.zioncyan} border-2 border-current rounded-full`}
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Middle ring */}
            <motion.div
              className={`absolute inset-2 ${colorClasses.zionpurple} border-2 border-current rounded-full`}
              animate={{
                rotate: -360,
                scale: [1, 0.95, 1]
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Inner core */}
            <motion.div
              className={`absolute inset-4 ${colorClasses.zioncyan} bg-current rounded-full`}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]}`}
            animate={animated ? { rotate: 360 } : {}}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Loader2 className="w-full h-full" />
          </motion.div>
        );
    }
  };

  // Progress bar
  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="w-full max-w-xs bg-zion-slate/30 rounded-full h-2 mt-4">
        <motion.div
          className={`h-full ${colorClasses[color]} bg-current rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="text-center mt-2">
          <span className={`text-sm ${colorClasses[color]}`}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    );
  };

  // Icon display
  const renderIcon = () => {
    if (!showIcon) return null;

    return (
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} mb-4`}
        key={currentIconIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <CurrentIcon className="w-full h-full" />
      </motion.div>
    );
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {renderIcon()}
            {renderSpinner()}
            
            {text && (
              <motion.p
                className={`mt-4 text-center ${colorClasses[color]} font-medium`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {text}
              </motion.p>
            )}
            
            {renderProgress()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Specialized loading spinners for different contexts
export const TechLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'iconType'>> = (props) => (
  <LoadingSpinner {...props} iconType="tech" />
);

export const BusinessLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'iconType'>> = (props) => (
  <LoadingSpinner {...props} iconType="business" />
);

export const AILoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'iconType'>> = (props) => (
  <LoadingSpinner {...props} iconType="ai" />
);

export const ZionLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'variant' | 'iconType'>> = (props) => (
  <LoadingSpinner {...props} variant="zion" iconType="ai" />
);

// Full-screen loading overlay
export const LoadingOverlay: React.FC<LoadingSpinnerProps & { overlay?: boolean }> = ({ 
  overlay = true, 
  ...props 
}) => {
  if (!overlay) {
    return <LoadingSpinner {...props} />;
  }

  return (
    <div className="fixed inset-0 bg-zion-slate/95 backdrop-blur-xl z-50 flex items-center justify-center">
      <LoadingSpinner {...props} size="xl" />
    </div>
  );
};

// Inline loading indicator
export const InlineLoader: React.FC<LoadingSpinnerProps> = (props) => (
  <LoadingSpinner {...props} size="sm" className="inline-flex" />
);

// Button loading state
export const ButtonLoader: React.FC<LoadingSpinnerProps> = (props) => (
  <LoadingSpinner {...props} size="sm" className="inline-flex mr-2" />
);
