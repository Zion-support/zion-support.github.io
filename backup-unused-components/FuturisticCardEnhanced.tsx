import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

interface FuturisticCardEnhancedProps {
=======
import { motion } from 'framer-motion';
interface FuturisticCardEnhancedProps;
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticCardEnhanced({ className = '', children }: FuturisticCardEnhancedProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
=======
import FuturisticCard from "../components/FuturisticCard";
import { motion } from 'framer-motion';
interface FuturisticCardEnhancedProps 
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'orange';
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = (
  children,
=======
const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({
//   children,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true,
<<<<<<< HEAD
  neon = true;
=======
  neon = true
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
) => 
  const glowColors = 
    cyan: 'shadow-cyan-500/25',
    purple: 'shadow-purple-500/25',
    pink: 'shadow-pink-500/25',
    green: 'shadow-green-500/25',
    blue: 'shadow-blue-500/25',
    orange: 'shadow-orange-500/25'
;
  const neonColors = 
    cyan: 'border-cyan-500/50',
    purple: 'border-purple-500/50',
    pink: 'border-pink-500/50',
    green: 'border-green-500/50',
    blue: 'border-blue-500/50',
    orange: 'border-orange-500/50'
;
  const glowEffect = neon ? glowColors[glowColor] : '';
  const borderColor = neon ? neonColors[glowColor] : 'border-white/20';
  const cardVariants = 
    initial: 
      scale: 1,
      boxShadow: '0 0 0 rgba(6, 182, 212, 0)'
,
    hover: 
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)',
      transition: { duration: 0.3 }
,
    tap: 
      scale: 0.98,
=======
}) => {
  const glowColors = {
//     cyan: 'shadow-cyan-500/25',
//     purple: 'shadow-purple-500/25',
//     pink: 'shadow-pink-500/25',
//     green: 'shadow-green-500/25',
//     blue: 'shadow-blue-500/25',
//     orange: 'shadow-orange-500/25'
  };

  const neonColors = {
//     cyan: 'border-cyan-500/50',
//     purple: 'border-purple-500/50',
//     pink: 'border-pink-500/50',
//     green: 'border-green-500/50',
//     blue: 'border-blue-500/50',
//     orange: 'border-orange-500/50'
  };

  const glowEffect = neon ? glowColors[glowColor] : '';
  const borderColor = neon ? neonColors[glowColor] : 'border-white/20';

  const cardVariants = {
    initial: { 
//       scale: 1,
      boxShadow: '0 0 0 rgba(6, 182, 212, 0)'
    },
    hover: { 
//       scale: 1.02,
      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { 
//       scale: 0.98,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      transition: { duration: 0.1 }

<<<<<<< HEAD
;
  const pulseVariants = 
    pulse: 
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
=======
  const pulseVariants = {
    pulse: {
//       scale: [1, 1.05, 1],
//       opacity: [0.5, 0.8, 0.5],
      transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
      }
    }
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

;
  return (
<<<<<<< HEAD
    <motion.div;
      className=
        relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300;
=======
<<<<<<< HEAD
    <motion.div
      className=
        relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300
=======
//     <motion.div
      className={`
//         relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        ${borderColor}
        ${hoverEffect ? 'hover:bg-white/20' : ''}
        ${glowEffect ? `hover:shadow-2xl hover:${glowEffect}` : ''}
        ${className}

      variants="{animated" ? cardVariants : undefined}
      initial="initial"
      whileHover="{hoverEffect" ? "hover" : undefined}
      whileTap="tap"
<<<<<<< HEAD
      animate="{animated" ? "pulse" : undefined}
    >
      {/* Neon border effect */}
      
        <div className=
          absolute inset-0 rounded-xl pointer-events-none;
          bg-gradient-to-r from-transparent via-${glowColor}-500/20 to-transparent;
          opacity-0 group-hover:opacity-100 transition-opacity duration-300;
 />
      {/* Animated background pattern */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"></div>
        <div className=
          absolute -top-1/2 -left-1/2 w-full h-full;
          bg-gradient-to-br from-${glowColor}-500/5 via-transparent to-${glowColor}-500/5;
          animate-spin;
 style="{}" animationDuration: '20s' {} />
<<<<<<< HEAD
  </div>
      {/* Content */}
      <div className="relative z-10"></div>
        {children}
  </div>
=======
      </div>
=======
      animate={animated ? "pulse" : undefined}
//     >
      {/* Neon border effect */}
      {neon && (
        <div className={`
//           absolute inset-0 rounded-xl pointer-events-none
          bg-gradient-to-r from-transparent via-${glowColor}-500/20 to-transparent
//           opacity-0 group-hover:opacity-100 transition-opacity duration-300
        `} />
      )}
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div className={`
//           absolute -top-1/2 -left-1/2 w-full h-full
          bg-gradient-to-br from-${glowColor}-500/5 via-transparent to-${glowColor}-500/5
//           animate-spin
        `} style={{ animationDuration: '20s' }} />
</div>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      {/* Content */}
      <div className="relative z-10"></div>
        {children}
<<<<<<< HEAD
      </div>
=======
</div>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      {/* Corner accents */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000" />
//     </motion.div>
  );
;
export default FuturisticCardEnhanced;
</FuturisticCardEnhancedProps>
  </div>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
