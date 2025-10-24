'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
interface FuturisticButtonProps {
  children: React.ReactNode,
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset'
}
const FuturisticButton: React.FC<FuturisticButtonProps> = ({,
  children
  onClick
  variant = 'primary'
  size = 'md'
  disabled = false
  loading = false
  className = ''
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const getVariantClasses = ($2) => {
$3
};
  }
  const getSizeClasses = ($2) => {
$3
};
  }
  const baseClasses = `
    relative overflow-hidden rounded-lg font-semibold transition-all duration-300
    transform hover: scale-105 active:scale-95,
    focus: outline-none focus: ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900,
    disabled: opacity-50 disabled:cursor-not-allowed disabled:transform-none,
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${className}
  `.trim()
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />{/* Loading spinner */}
      {loading && (
        </motion><motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > </motion><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> </div></motion.div>
      )}
      {/* Button content */}
      <motion.span
        className="relative z-10 flex items-center justify-center"
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >{children}
      </motion></motion.span>
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          transform: 'translateX(-100%)'}}
        animate={{
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'}}
        transition={{
          duration: 0.6,
    ease: 'easeInOut'}}
      /> </motion></motion.button>
  )
}

export default FuturisticButton