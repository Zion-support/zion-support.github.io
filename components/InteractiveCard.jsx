import React, { useState } from 'react',
import { motion } from 'framer-motion',
,
const InteractiveCard = ({,
  children,;
  className = '',;
  hoverScale = 1.05,;
  hoverShadow = 'lg',;
  onClick,;
  disabled = false,
}) => {,
  const [isHovered, setIsHovered] = useState(false),
,
  return (,
    <motion.div,
      className={`,
        relative overflow-hidden rounded-lg transition-all duration-300,
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${className}
      `}
      whileHover={!disabled ? {,
        scale: hoverScale,;
        transition: { duration: 0.2 ,}
      } : {}}
      whileTap={!disabled ? {,
        scale: 0.98,;
        transition: { duration: 0.1 ,}
      } : {}}
      onHoverStart={() => !disabled && setIsHovered(true)}
      onHoverEnd={() => !disabled && setIsHovered(false)}
      onClick={!disabled ? onClick : undefined}
      initial={{ opacity: 0, y: 20 ,}}
      animate={{ opacity: 1, y: 0 ,}}
      transition={{ duration: 0.5 ,}}
    >,
      {/* Hover effect overlay */}
      <motion.div,
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0",
        animate={{,
          opacity: isHovered ? 1 : 0,
        ,}}
        transition={{ duration: 0.3 ,}}
      />,
      {/* Content */}
      <div className="relative z-10">,
        {children}
      </div>,
      {/* Animated border */}
      <motion.div,
        className="absolute inset-0 rounded-lg border-2 border-transparent",
        animate={{,
          borderColor: isHovered ? '#3b82f6' : 'transparent',
        ,}}
        transition={{ duration: 0.3 ,}}
      />,
    </motion.div>,
  ),
};
,
export default InteractiveCard,