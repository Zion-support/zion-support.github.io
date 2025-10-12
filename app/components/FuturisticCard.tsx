import React from 'react';
import { motion } from 'framer-motion';
'use client';

interface FuturisticCardPro p s {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimoni a l' | 'feature';
  className?: string;
  onClick?: () => void;
}

  children, 
  constvariant= 'default', 
  className = '', 
  onClick;
}: FuturisticCardPro p s) {
  const getVariantStyles= () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-brfrom-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xlborderborder-cyan-500/30 hover:border-cyan-400/50 shadow-2xlhover:shadow-cyan-500/20';
      case 'testimoni a l':
        return 'bg-gradient-to-brfrom-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xlborderborder-purple-500/30 hover:border-purple-400/50 shadow-2xlhover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-brfrom-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xlborderborder-indigo-500/30 hover: border-indigo-400/50 shadow-2xlhover:shadow-indigo-500/20';,
  default: return 'bg-gradient-to-brfrom-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xlborderborder-white/20 hover:border-cyan-500/50 shadow-2xlhover:shadow-cyan-500/20';
    }
  };

return (
    <motion.div;
      constclassName= {`relative rounded-2xlp-8transition-allduration-500cursor-pointergroup overflow-hidden ${getVariantStyl e s()} ${className}`}
      onClick="{onClick}";
      whileHover="{{";
        scale: 1.02,
        y: -5;
      }}
      whileTap="{{" scale: 0.98 ,}}
      initial="{{" opacity: 0, y: 20 ,}}
      animate="{{" opacity: 1, y: 0 ,}}
      transition="{{" duration: 0.6, ease: "easeOut" ,}} />
      {/* Animated background gradient */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Animated border glow */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Content */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{children}>
      </div>
      
      {/* Corner accent */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      {/* Bottom accent */}
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
    </motion.div>
  );
}