import React from 'react';
import { motion } from 'framer-motion';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
  onClick?: () => void;
}

const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = 'from-blue-500/10 to-purple-500/10',
  onClick,
}) => {
  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6
        ${gradient ? `bg-gradient-to-br ${gradient}` : ''}
        ${hover ? 'hover:bg-white/10 hover:border-white/20' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -2 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ModernCard;
