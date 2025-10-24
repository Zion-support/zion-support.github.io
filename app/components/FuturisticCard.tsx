'use client';
import React from 'react';
import { motion } from 'framer-motion';
interface FuturisticCardProps {
  children: React.ReactNode,
  variant?: 'default' | 'service' | 'testimonial' | 'feature'
  className?: string;
  onClick?: () => void
<<<<<<< HEAD
const FuturisticCard: React.FC<FuturisticCardProps> = ({
=======
}
const FuturisticCard: React.FC<FuturisticCardProps> = ({,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  children
  variant = 'default'
  className = ''
  onClick
}) => {
<<<<<<< HEAD
  const getVariantStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 hover: border-cyan-400/50 shadow-2xl hover:shadow-cyan-500/20';
      case 'testimonial':
        return 'bg-gradient-to-br from-purple-900/40 via-slate-800/30 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 hover: border-purple-400/50 shadow-2xl hover:shadow-purple-500/20';
      case 'feature':
        return 'bg-gradient-to-br from-emerald-900/40 via-slate-800/30 to-emerald-900/40 backdrop-blur-xl border border-emerald-500/30 hover: border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/20';,
    default: return 'bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-white/10'}
=======
  const getVariantStyles = ($2) => {
$3
};
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  const baseClasses = `
    relative overflow-hidden rounded-2xl p-6 transition-all duration-300
    hover: scale-105 hover:-translate-y-1,
    ${getVariantStyles()}
    ${className}
  `.trim()
  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
<<<<<<< HEAD
      whileHover={{ scale: 1.05, y: -4}
      whileTap={{ scale: 0.95}
      initial={{ opacity: 0, y: 20}
      animate={{ opacity: 1, y: 0}
      transition={{ duration: 0.5}
    >
      {/* Animated background gradient */}
      <motion.div
=======
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >{/* Animated background gradient */}
      </motion><motion.div
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"
        animate={{
          background: [,
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
            'linear-gradient(45deg, rgba(147, 51, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)']}
        transition={{
          duration: 3,
<<<<<<< HEAD
    repeat: Infinity
          ease: 'easeInOut'}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
=======
    repeat: Infinity,
          ease: 'easeInOut'}}
      />{/* Content */}
      </motion><div className="relative z-10">{children}
      </div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          transform: 'translateX(-100%)'}
        whileHover={{
          transform: 'translateX(100%)'}
        transition={{
          duration: 0.6,
<<<<<<< HEAD
    ease: 'easeInOut'}
      />
    </motion.div>
=======
    ease: 'easeInOut'}}
      /> </motion></motion.div>
  )
}

>>>>>>> cursor/fix-errors-and-merge-to-main-998c
export default FuturisticCard