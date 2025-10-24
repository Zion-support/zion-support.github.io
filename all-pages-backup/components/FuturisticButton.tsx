<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
const FuturisticButton: React.FC<FuturisticButtonProps> = ({;
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'}
  };

  const getSizeClasses = () => {;
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
      default:
        return 'px-6 py-3 text-base'}
  };

  const baseClasses = `;
    relative overflow-hidden rounded-lg font-semibold transition-all duration-300
    transform hover:scale-105 active:scale-95,
  focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900,
  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
          background: background,
  transform: 'translateX(-100%)'
<<<<<<< HEAD:all-pages-backup/components/FuturisticButton.tsx
          duration: 0.6,
  ease: 'easeInOut'
        }}
      />
    </motion.button>
  )};

export default FuturisticButton
=======
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  variant = 'primary'
  size = 'md'
  className = ''
  type = 'button'
      case 'primary'
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 "hover": shadow-cyan-500/40',
      case 'secondary'
        return 'bg-white/10 text-white border border-white/20 "hover": bg-white/20 backdrop-blur-sm',
      case 'accent'
        return 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25 "hover": shadow-orange-500/40',
      case 'ghost'
        return 'text-cyan-400 "hover": text-cyan-300 hover:bg-cyan-500/10',
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 "hover": shadow-cyan-500/40',
      case 'sm'
        return 'px-4 py-2 text-sm'
      case 'md'
        return 'px-6 py-3 text-base'
      case 'lg'
        return 'px-8 py-4 text-lg';
        return 'px-6 py-3 text-base'
>>>>>>> origin/main
