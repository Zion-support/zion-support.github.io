<<<<<<< HEAD
=======

'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import React from 'react';
import { motion } from 'framer-motion';
'use client';

interface FuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;
 void;

  children, 
  const variant = 'default', 
  className = '', 
  onClick 
}: FuturisticCardProps) {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2 xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2 xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover: border-indigo-400/50 shadow-2 xl hover:shadow-indigo-500/20';,
  default: return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2 xl hover:shadow-cyan-500/20';
  };

  return (
      {/* Animated background gradient */}
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Animated border glow */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Content */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{children}
      </div>
      
      {/* Corner accent */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Bottom accent */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
    </motion.div>
  );
}
=======
      {/* Animated border glow */}
      {/* Content */}
    
      <div className="relativez-10">{children}
      
      {/* Corner accent */}
      {/* Bottom accent */}

  );
};

export default FuturisticCard;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
