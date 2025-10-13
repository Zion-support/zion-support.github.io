import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'yellow';
  hoverEffect?: boolean;
  animated?: boolean;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = true,
  animated = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const glowColors = {
    cyan: 'from-cyan-400/20 to-cyan-600/20',
    purple: 'from-purple-400/20 to-purple-600/20',
    pink: 'from-pink-400/20 to-pink-600/20',
    green: 'from-green-400/20 to-green-600/20',
    blue: 'from-blue-400/20 to-blue-600/20',
    yellow: 'from-yellow-400/20 to-yellow-600/20'
  };

  const borderColors = {
    cyan: 'border-cyan-400/30',
    purple: 'border-purple-400/30',
    pink: 'border-pink-400/30',
    green: 'border-green-400/30',
    blue: 'border-blue-400/30',
    yellow: 'border-yellow-400/30'
  };

  const shadowColors = {
    cyan: 'shadow-cyan-500/25',
    purple: 'shadow-purple-500/25',
    pink: 'shadow-pink-500/25',
    green: 'shadow-green-500/25',
    blue: 'shadow-blue-500/25',
    yellow: 'shadow-yellow-500/25'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative group overflow-hidden rounded-xl
        bg-white/5 backdrop-blur-xl
        border ${borderColors[glowColor]}
        transition-all duration-500 ease-out
        ${hoverEffect ? 'hover:bg-white/10' : ''}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={animated ? { opacity: 0, y: 20 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={hoverEffect ? { 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      } : {}}
    >
      {/* Animated background gradient */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-br ${glowColors[glowColor]}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            ${glowColor === 'cyan' ? 'rgba(34, 211, 238, 0.1)' : 
             glowColor === 'purple' ? 'rgba(168, 85, 247, 0.1)' :
             glowColor === 'pink' ? 'rgba(236, 72, 153, 0.1)' :
             glowColor === 'green' ? 'rgba(34, 197, 94, 0.1)' :
             glowColor === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
             'rgba(251, 191, 36, 0.1)'} 0%, transparent 50%)`
        }}
      />

      {/* Animated border glow */}
      <div 
        className={`
          absolute inset-0 rounded-xl
          bg-gradient-to-r ${glowColors[glowColor]}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          blur-sm -z-10
        `}
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Animated particles */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`
                absolute w-1 h-1 rounded-full
                ${glowColor === 'cyan' ? 'bg-cyan-400' :
                  glowColor === 'purple' ? 'bg-purple-400' :
                  glowColor === 'pink' ? 'bg-pink-400' :
                  glowColor === 'green' ? 'bg-green-400' :
                  glowColor === 'blue' ? 'bg-blue-400' :
                  'bg-yellow-400'}
                opacity-0 group-hover:opacity-100
              `}
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
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hover shadow */}
      {hoverEffect && (
        <div 
          className={`
            absolute inset-0 rounded-xl
            shadow-2xl ${shadowColors[glowColor]}
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
            -z-20
          `}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease-out'
          }}
        />
      )}

      {/* Scanning line effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`
              absolute w-full h-0.5 bg-gradient-to-r
              ${glowColor === 'cyan' ? 'from-transparent via-cyan-400 to-transparent' :
                glowColor === 'purple' ? 'from-transparent via-purple-400 to-transparent' :
                glowColor === 'pink' ? 'from-transparent via-pink-400 to-transparent' :
                glowColor === 'green' ? 'from-transparent via-green-400 to-transparent' :
                glowColor === 'blue' ? 'from-transparent via-blue-400 to-transparent' :
                'from-transparent via-yellow-400 to-transparent'}
            `}
            animate={{
              y: [0, 300, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnhancedFuturisticCard;