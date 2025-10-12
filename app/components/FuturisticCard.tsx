import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;
  onClick?: () => void;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover:border-indigo-400/50 shadow-2xl hover:shadow-indigo-500/20';
      default:
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/20';
    }
  };

  return (
    <motion.div
      className={`relative rounded-2xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${getVariantStyles()} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FuturisticCard;