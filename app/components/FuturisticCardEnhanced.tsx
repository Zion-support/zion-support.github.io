import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'yellow' | 'red';
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
  children,
  className = "",
  glowColor = "cyan",
  hoverEffect = true,
  animated = true,
  neon = true,
}) => {
  const glowColors = {
    cyan: "shadow-cyan-500/20 group-hover:shadow-cyan-500/40",
    purple: "shadow-purple-500/20 group-hover:shadow-purple-500/40",
    pink: "shadow-pink-500/20 group-hover:shadow-pink-500/40",
    blue: "shadow-blue-500/20 group-hover:shadow-blue-500/40",
    green: "shadow-green-500/20 group-hover:shadow-green-500/40",
    yellow: "shadow-yellow-500/20 group-hover:shadow-yellow-500/40",
    red: "shadow-red-500/20 group-hover:shadow-red-500/40",
  };

  const borderColors = {
    cyan: "border-cyan-500/30 group-hover:border-cyan-500/60",
    purple: "border-purple-500/30 group-hover:border-purple-500/60",
    pink: "border-pink-500/30 group-hover:border-pink-500/60",
    blue: "border-blue-500/30 group-hover:border-blue-500/60",
    green: "border-green-500/30 group-hover:border-green-500/60",
    yellow: "border-yellow-500/30 group-hover:border-yellow-500/60",
    red: "border-red-500/30 group-hover:border-red-500/60",
  };

  const neonGlow = neon ? "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-cyan-500/20 before:to-purple-500/20 before:blur-xl before:-z-10" : "";

  return (
    <motion.div
      className={`group relative bg-white/5 backdrop-blur-sm rounded-xl border ${borderColors[glowColor]} ${glowColors[glowColor]} ${neonGlow} ${className}`}
      initial={animated ? { opacity: 0, y: 20 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={animated ? { duration: 0.6, ease: "easeOut" } : {}}
      whileHover={hoverEffect ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
    >
      {/* Animated Border */}
      {animated && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCardEnhanced;