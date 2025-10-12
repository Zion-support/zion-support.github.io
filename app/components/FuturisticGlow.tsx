import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

interface FuturisticGlowProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green';
  className?: string;
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  intensity = 'medium',
  color = 'cyan',
  className = ''
}) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'shadow-cyan-500/20';
      case 'medium':
        return 'shadow-cyan-500/40';
      case 'high':
        return 'shadow-cyan-500/60';
      default:
        return 'shadow-cyan-500/40';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'cyan':
        return 'shadow-cyan-500/40';
      case 'purple':
        return 'shadow-purple-500/40';
      case 'pink':
        return 'shadow-pink-500/40';
      case 'blue':
        return 'shadow-blue-500/40';
      case 'green':
        return 'shadow-green-500/40';
      default:
        return 'shadow-cyan-500/40';
    }
  };

  return (
    <>
      <Helmet>
        <title>Futuristic Glow Effect - Zion Tech Group</title>
      </Helmet>
      
      <motion.div
        className={`
          relative overflow-hidden rounded-lg
          ${getIntensityClasses()}
          ${getColorClasses()}
          ${className}
        `}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default FuturisticGlow;