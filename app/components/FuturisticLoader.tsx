<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FuturisticLoader() {
  return (
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
=======
import React from 'react';

import {motion} from 'framer-motion';
'use client';

interface FuturisticLoaderProps {size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;}

  const size = 'md',
  color = 'cyan',
  text = 'Loading...'
}: FuturisticLoaderProps) {const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';}
  };

  const getColorClasses = () => {switch (color) {
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';}
  };

export default function FuturisticLoader() {return (

        {/* Outer rotating ring */}
        <motion.div;
          className="{`"
            ${getSizeClasses()}
            border-4 border-transparent;
            border-t-4 ${getColorClasses().split(' ')[1]}
            rounded-full;`}
          animate="{{" rotate: 360}}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear'}}
           /></motion>
        {/* Inner pulsing ring */}
        <motion.div;
          className="{`"
            absolute inset-2;
            border-2 border-transparent;
            border-r-2 ${getColorClasses().split(' ')[1]}
            rounded-full;`}
          animate="{{" rotate: -360}}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear'}}
           /></motion>
        {/* Center pulsing dot */}
        <motion.div;
          className="{`"
            absolute top-1/2 left-1/2 w-2 h-2;
            ${getColorClasses().split(' ')[1]}
            rounded-full;
            transform -translate-x-1/2 -translate-y-1/2;`}
          animate="{{"
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]}}
          transition="{{"
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut'}}
           /></motion>
        {/* Glow effect */}
        <motion.div;
          className="{`"
            absolute inset-0;
            ${getColorClasses().split(' ')[1]}
            rounded-full;
            blur-md;
            opacity-30;`}
          animate="{{"
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition="{{"
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'}}
           /></motion>
      </div>
      {text && (
        <motion.p;
          className="{`text-sm" ${getColorClasses().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5]}}
          transition="{{"
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'}}   /></motion>
          {text}
        </motion.p>
  )}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const FuturisticLoader: React.FC<FuturisticLoaderProps> = () => {
  return (
    <div className="futuristicloader">
      <h2>FuturisticLoader</h2>
      <p>Component content coming soon.</p>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  );
};

export default FuturisticLoader;