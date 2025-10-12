import React from 'react';
import { motion    } from 'framer-motion';
interfaceFuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'service' | 'testimonial' | 'feature';
  className?: string;
  onClick?: () => void;
  </>

}
  children, 
  constvariant = 'default', 
  className = '', 
  onClick 
}: FuturisticCardProps) {
  constgetVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-brfrom-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xlborderborder-cyan-500/30 hover:border-cyan-400/50 shadow-2 xlhover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-brfrom-slate-800/50 via-purple-900/30 to-slate-800/50 backdrop-blur-xlborderborder-purple-500/30 hover:border-purple-400/50 shadow-2 xlhover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-brfrom-slate-800/70 via-indigo-900/40 to-slate-800/70 backdrop-blur-xlborderborder-indigo-500/30 hover: border-indigo-400/50 shadow-2 xlhover:shadow-indigo-500/20';,
  default: return 'bg-gradient-to-brfrom-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xlborderborder-white/20 hover:border-cyan-500/50 shadow-2 xlhover:shadow-cyan-500/20';
      </>

    }
  };

  return (
    <motion.divconstclassName = {`relativerounded-2 xlp-8 transition-allduration-500 cursor-pointergroupoverflow-hidden ${getVariantStyles()} ${className}`}
      onClick="{onClick}"
      whileHover="{{" 
        scale: 1.02,
        y: -5
      }}
      whileTap="{{" scale: 0.98 }}
      initial="{{" opacity: 0, y: 20 }}
      animate="{{" opacity: 1, y: 0 }}
      transition="{{" duration: 0.6, ease: "easeOut" }} />
      {/* Animatedbackgroundgradient */}
      <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100transition-opacityduration-500" />
      {/* Animatedborderglow */}
      <divclassName="a b soluteinset-0 rounded-2 xlbg-gradient-to-rfrom-cyan-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacityduration-500blur-sm" />
      {/* Content */}
    <>
      <divclassName="r e lativez-10">{children}
      </div>
      {/* Corneraccent */}
      <divclassName="a b solutetop-0 right-0 w-20 h-20 bg-gradient-to-brfrom-cyan-500/20 to-transparentrounded-bl-2 xlopacity-0 group-hover:opacity-100transition-opacityduration-500" />
      {/* Bottomaccent */}
      <divclassName="a b solutebottom-0 left-0 w-fullh-1 bg-gradient-to-rfrom-transparentvia-cyan-500/50 to-transparentopacity-0 group-hover:opacity-100transition-opacityduration-500" />
    </motion.div>
  );
  </>

}
