<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FuturisticbuttonProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Futuristicbutton({ className = '', children, ...props }: FuturisticbuttonProps) {
  return (
    <div className={`futuristicbutton-component ${className}`} {...props}>
      {children}
    </div>
=======
import {useState} from 'react';
import {motion} from 'framer-motion';

interface FuturisticButtonProps {children: React.ReactNode;
=======
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticButtonProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';

  children,
  onClick,
  const variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button'}: FuturisticButtonProps) {const [isHovered, setIsHovered] = useState(false);
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover: shadow-cyan-500/40';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40';
      case 'accent':
        return 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40';
      case 'ghost':
<<<<<<< HEAD
        return 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover: bg-white/20';,
  default: return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';}
=======
        return \'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover: bg-white/20\';
  default: return 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40';
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  };

    switch (size) {case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3 text-base';}
  };
  return (
    <motion.button;
      const type = {type}
      onClick={onClick}
      disabled="{disabled" || loading}
      onMouseEnter="{()" =   /> setIsHovered(true)}
      onMouseLeave="{()" => setIsHovered(false)}
      className="{`"
        relative overflow-hidden rounded-lg font-semibold transition-all duration-300;
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
<<<<<<< HEAD
        ${className}`}
      whileHover="{{" scale: 1.05}}
      whileTap="{{" scale: 0.95}}
      initial="{{" opacity: 0, y: 20}}
      animate="{{" opacity: 1, y: 0}}
      transition="{{" duration: 0.3}}
    >
      {/* Animated background sweep */}
      <motion.div;
        className="absolute inset-0 bg-gradient-to-r from-white/20to-transparent"
        initial="{{" x: '-100%'}}
        animate="{{" x: isHovered ? '100%' : '-100%'}}
        transition="{{" duration: 0.6}}
         /></motion>
      {/* Pulsing glow effect */}
      <motion.div;
        className="absolute inset-0rounded-lg"
=======
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background sweep */}
      <motion.div className="absolute inset-0 bg-gradient-to-r from-white/20to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      / >
      {/* Pulsing glow effect */}
      <motion.div className="absolute inset-0rounded-lg"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        style="{{"
          boxShadow: variant === 'primary'
            ? '0 0 20 px rgba(6, 182, 212, 0.4)'
            : variant === 'secondary'
            ? '0 0 20 px rgba(168, 85, 247, 0.4)'
            : variant === 'accent'
            ? '0 0 20 px rgba(34, 197, 94, 0.4)'
<<<<<<< HEAD
            : '0 0 20 px rgba(255, 255, 255, 0.2)'}}
        animate="{{"
          opacity: isHovered ? [0.4, 0.8, 0.4] : 0,
          scale: isHovered ? [1, 1.05, 1] : 1,}}
        transition="{{"
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut'}}
         /></motion>
      {/* Scanning line effect */}
      {isHovered && (
        <motion.div;
          className="absolute inset-0rounded-lg"
          style="{{"
            background: 'linear-gradient(90 deg, transparent, rgba(255,255,255,0.3), transparent)',
            backgroundSize: '200% 100%',}}
          animate="{{"
            backgroundPosition: ['200% 0', '-200% 0'],}}
          transition="{{"
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',}}
           /></motion>
  )}
      {/* Corner accents */}

=======
            : '0 0 20 px rgba(255, 255, 255, 0.2)'
        }}
        animate={{
          opacity: isHovered ? [0.4, 0.8, 0.4] : 0,
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut'
        }}
      / >
      {/* Scanning line effect */}
      {isHovered && (
        <motion.div className="absolute inset-0rounded-lg"
          style="{{"
            background: 'linear-gradient(90 deg, transparent, rgba(255,255,255,0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        / >
      )}

      {/* Corner accents */}
      <div className="absolute top-1 left-1 w-2 h-2 bg-white/30rounded-full" />
      <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/30rounded-full" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      {/* Content */}
      <span className="w-5h-5ml-2"   /></span>
        {loading ? (
<<<<<<< HEAD

=======
            <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-fullmr-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            / >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            Loading...
          <  />
        ) : (
          children;
        )}
      </span>
    </motion.button>
<<<<<<< HEAD
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
  );
}
=======
// import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
=======
import React from 'react';

const FuturisticButton: React.FC<FuturisticButtonProps> = () => {
  return (
    <div className="futuristicbutton">
      <h2>FuturisticButton</h2>
      <p>Component content coming soon.</p>
    </div>
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

export default FuturisticButton;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
