<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
interface FuturisticcardProps {
=======
import React  from 'react';
import { motion } from 'framer-motion';
interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}
export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
=======
  variant?: 'default' | 'glow' | 'border';
  glowColor?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  glowColor,
  hoverEffect = true,
  animated = false,
  neon = false
}) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60'
=======
'use client';
interface FuturisticCardProps {children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;

 void;

  children,
  const variant = 'default',
  className = '',
  onClick;}: FuturisticCardProps) {const getVariantStyles = () => {
    switch (variant) {
      case 'service':
<<<<<<< HEAD
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover: border-cyan-400/50 shadow-2 xl hover:shadow-cyan-500/20';
=======
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2xll hover:shadow-cyan-500/20';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2xll hover:shadow-purple-500/20';
      case 'feature':
<<<<<<< HEAD
        return 'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover: border-indigo-400/50 shadow-2 xl hover:shadow-indigo-500/20';,
  default: return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2 xl hover:shadow-cyan-500/20';}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
        return \'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover:border-indigo-400/50 shadow-2xll hover:shadow-indigo-500/20\';
  default: return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2xll hover:shadow-cyan-500/20';
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children}
    </div>
=======
    <motion.div;
      const className = {`relative rounded-2 xl p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${getVariantStyles()} ${className}`}
      onClick="{onClick}"
      whileHover="{{"
        scale: 1.02,
        y: -5;}}
      whileTap="{{" scale: 0.98}}
      initial="{{" opacity: 0, y: 20}}
      animate="{{" opacity: 1, y: 0}}
      transition="{{" duration: 0.6, ease: "easeOut"}}   /></motion>
      {/* Animated background gradient */}

      {/* Animated border glow */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{children}
=======
    <motion.div className={`relative rounded-2xll p-8 transition-all duration-500 cursor-pointer group overflow-hidden ${getVariantStyles()} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100transition-opacity duration-500" >
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xll bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500blur-sm" />
      {/* Content */}
      <div className="relativez-10">{children}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
      {/* Corner accent */}
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Bottom accent */}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======

const FuturisticCard: React.FC<FuturisticCardProps> = () => {
  return (
    <div className="futuristiccard">
      <h2>FuturisticCard</h2>
      <p>Component content coming soon.</p>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  );
};

export default FuturisticCard;
=======
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2 xl opacity-0 group-hover:opacity-100transition-opacity duration-500" />
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100transition-opacity duration-500" />
    </motion.div>
  );
};

export default FuturisticCard;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
