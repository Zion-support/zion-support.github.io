import React from 'react';
import FuturisticCard from "../components/FuturisticCard";
import { motion } from 'framer-motion';
interface FuturisticCardEnhancedProps 
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;

  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true,
  neon = true
      transition: { duration: 0.1 }



;
  return (
        ${borderColor}
        ${hoverEffect ? 'hover:bg-white/20' : ''}
        ${glowEffect ? `hover:shadow-2xl hover:${glowEffect}` : ''}
        ${className}

      variants="{animated" ? cardVariants : undefined}
      initial="initial"
      whileHover="{hoverEffect" ? "hover" : undefined}
      whileTap="tap"
      {/* Content */}
      <div className="relative z-10"></div>
        {children}
      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000" />
//     </motion.div>
  );
;
export default FuturisticCardEnhanced;
</FuturisticCardEnhancedProps>