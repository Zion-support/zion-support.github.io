import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green';
  animated?: boolean;
  className?: string;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  intensity = 'medium',
  color = 'cyan',
  animated = true,
  className = ''
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-2xl';
      case 'high':
        return 'shadow-3xl';
      default:
        return 'shadow-2xl';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'cyan':
        return 'shadow-cyan-500/25 hover:shadow-cyan-500/40';
      case 'purple':
        return 'shadow-purple-500/25 hover:shadow-purple-500/40';
      case 'pink':
        return 'shadow-pink-500/25 hover:shadow-pink-500/40';
      case 'blue':
        return 'shadow-blue-500/25 hover:shadow-blue-500/40';
      case 'green':
        return 'shadow-green-500/25 hover:shadow-green-500/40';
      default:
        return 'shadow-cyan-500/25 hover:shadow-cyan-500/40';
    }
  };

  const getGlowColor = () => {
    switch (color) {
      case 'cyan':
        return 'rgba(6, 182, 212, 0.4)';
      case 'purple':
        return 'rgba(168, 85, 247, 0.4)';
      case 'pink':
        return 'rgba(236, 72, 153, 0.4)';
      case 'blue':
        return 'rgba(59, 130, 246, 0.4)';
      case 'green':
        return 'rgba(34, 197, 94, 0.4)';
      default:
        return 'rgba(6, 182, 212, 0.4)';
    }
  };

  return (
    <motion.div
      className={`relative ${getIntensityClasses()} ${getColorClasses()} transition-all duration-300 ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated glow effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: `0 0 20px ${getGlowColor()}`,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Scanning line effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: `linear-gradient(90deg, transparent, ${getGlowColor()}, transparent)`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticGlow;