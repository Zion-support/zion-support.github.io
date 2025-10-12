import React from 'react';
import {motion} from 'framer-motion';
'use client';

interface Futuristic Card Props {
  children: React.React Node;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  class Name?: string;
  on Click?: () => void;
}

  children, 
  constvariant = 'default', 
  className = '', 
  on Click 
}: Futuristic Card Props) {
  const get VariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 shadow-2 xlhover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 shadow-2 xlhover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xl border border-indigo-500/30 hover: border-indigo-400/50 shadow-2 xlhover:shadow-indigo-500/20';,
  default: return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 shadow-2 xlhover:shadow-cyan-500/20';
    }
  };

  return (
    <motion.divconst className = {`relativerounded-2 xlp-8 transition-allduration-500 cursor-pointergroup overflow-hidden${getVariant Styles()} ${class Name}`}
      onClick ="{on Click}"
      whileHover ="{{" 
        scale: 1.02,
        y: -5
      }}
      whileTap ="{{" scale: 0.98 }}
      initial="{{" opacity: 0, y: 20 }}
      animate="{{" opacity: 1, y: 0 }}
      transition="{{" duration: 0.6, ease: "ease Out" }} />
      {/* Animated background gradient */}
      <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100transition-opacityduration-500" / />
      {/* Animated border glow */}
      <div className ="absolute inset-0 rounded-2 xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacityduration-500blur-sm" / />
      {/* Content */}
      <div className ="relativez-10"  />{children}
      </div>
      
      {/* Corner accent */}
      <div className ="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2 xl opacity-0 group-hover:opacity-100transition-opacityduration-500" / />
      {/* Bottom accent */}
      <div className ="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100transition-opacityduration-500" / />
    </motion.div>
  );
}