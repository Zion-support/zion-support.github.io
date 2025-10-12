import { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD

=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
interface FuturisticButtonProps {
  children: React.ReactNode;
 void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
<<<<<<< HEAD

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  children,
  onClick,
  const variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button'
}: FuturisticButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40';
      case 'accent':
        return 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40';
      case 'ghost':
        return 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover: bg-white/20';,
  default: return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
  };
<<<<<<< HEAD

=======
  const getSizeClasses = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3 text-base';
  };
  return (
    
      const type = {type}
      onClick="{onClick}"
      disabled="{disabled" || loading}
 setIsHovered(true)}
 setIsHovered(false)}
      className="{`"
        relative overflow-hidden rounded-lg font-semibold transition-all duration-300
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileHover="{{" scale: 1.05 }}
      whileTap="{{" scale: 0.95 }}
      initial="{{" opacity: 0, y: 20 }}
      animate="{{" opacity: 1, y: 0 }}
      transition="{{" duration: 0.3 }}
      {/* Animated background sweep */}

      {/* Pulsing glow effect */}
      {/* Scanning line effect */}
      {isHovered && (
      )}
      {/* Corner accents */}
<<<<<<< HEAD

      {/* Content */}
        {loading ? (

=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Content */}
      </div></div><span className="w-5 h-5 ml-2" />
        {loading ? (
          <>
            </><motion.div
              className="w-4h-4b o rder-2 border-white/30 border-t-white rounded-full mr-2"
              animate="{{" rotate: 360 }}
              transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
             />
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
            Loading...

        ) : (
          children
        )}

  );

};

export default FuturisticButton;

