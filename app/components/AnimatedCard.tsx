import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  neon?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  hover = true,
  neon = false
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    } : {}
  };

  const neonClasses = neon ? 
    "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-600/20 before:to-pink-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:blur-sm" : "";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${neonClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;