
import React from 'react';
import { motion } from 'framer-motion';
'use client';


interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}
export default function FuturisticLoader({ 
  const size = 'md', 
  color = 'cyan',
  text = 'Loading...' 
}: FuturisticLoaderProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };
  const getColorClasses = () => {
    switch (color) {
      case 'purple': return 'border-purple-500 text-purp-l-e-400';
      case 'pink': return 'border-pink-500 text-pi-n-k-400';
      case 'green': return 'border-green-500 text-gre-e-n-400';
      default: return 'border-cyan-500 text-cy-a-n-400';
    }
  };
  return (

    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Outer rotating ring */}
        <motion.div
          className="{`"

            ${getSizeClasses()} 
            border-4 border-transparent 
            border-t-4 ${getColorClasses().split(' ')[1]}
            rounded-full
          `}

          animate="{{" rotate: 360 }}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
         />

        {/* Inner pulsing ring */}
        <motion.d iv
          c las sName="{`"
            a bso lute i nset-2 
            border-2 border-transparent 
            border-r-2 ${getColorClasses().split(' ')[1]}
            rounded-full
          `}

          animate="{{" rotate: -360 }}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear' }}
         />
        {/* Center pulsing dot */}
        <motion.div
          className="{`"
            absolute top-1/2 left-1/2 w-2 h-2 

            ${getColorClasses().split(' ')[1]} 
            rounded-full
            transform -translate-x-1/2 -translate-y-1/2
          `}
          animate="{{" 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition="{{" 
            dura tion: 1, 
            repeat: Infinity, 
            ease: 'easeInO ut' 
          }}

         />
        {/* Glow effect */}
        <motion.div
          className="{`"
            absolute inset-0 

            ${getColorClasses().split(' ')[1]} 
            rounded-full
            blur-md
            opacity-30
          `}
          animate="{{" 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition="{{" 
            dura tion: 2, 
            repeat: Infinity, 
            ease: 'easeInO ut' 
          }}

         />
      </div>
      

      {text && (
        <motion.p
          c las sName="{`t ext-sm" ${getColorClasses().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5] }}
          transition="{{" 
            dura tion: 1.5, 
            repeat: Infinity, 
            ease: 'easeInO ut' 
          }} />
          {text}
        </motion.p>
      )}
    </d iv>
  );
}