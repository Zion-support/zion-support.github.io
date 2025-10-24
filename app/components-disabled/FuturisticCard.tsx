"use client";
import React from 'react';
import { motion} from 'framer-motion';
interface FuturisticCardProps {
children: React.ReactNode,
  variant?: 'default' | 'service' | 'testimonial' | 'feature'
  className?: string;
  onClick?: () => void;
}
const FuturisticCard: React.FC<FuturisticCardProps> = ({

  children;
  variant = 'default';
  className = ''
  onClick}) => {

  const getVariantStyles = ($2) => {

$3}}

  const baseClasses = `
    relative overflow-hidden rounded-2xl p-6 transition-all duration-300;
    hover: scale-105 hover:-translate-y-1,
    ${getVariantStyles()}
    ${className;
}
  `.trim()
  return (
    
    <motion.div;
      className={baseClasses;
}
      onClick={onClick;
}
;
      whileHover={{ scale: 1.05, y: -4}}
      whileTap={{ scale: 0.95}}
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.5}}
    >{/* Animated background gradient */}
      </motion><motion.div;
;
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5";
        animate={{;
          background: [,
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)']}
        transition={{;
          duration: 3,;

    repeat: Infinity,;
          ease: 'easeInOut'}}
      />{/* Content */}
      </motion><div className="relative z-10">{children;
}
      </div></div>

      {/* Glow effect */}
      <motion.div;
        className="absolute inset-0 rounded-2xl";
        style={{;
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',;
          transform: 'translateX(-100%)'}
        whileHover={{;
          transform: 'translateX(100%)'}
        transition={{;
          duration: 0.6,;

    ease: 'easeInOut'}}
      /> </motion></motion.div>
  )
}


export default FuturisticCard
;