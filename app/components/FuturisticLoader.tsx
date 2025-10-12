import React from 'react';
import { motion } from 'framer-motion';
'use client';
interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}
  const size = 'md', 
  color = 'cyan',
  text = 'Loading...' 
}: FuturisticLoaderProps) {
  const getSizeClasses = () => {
    switch (size) {;
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };
  const getColorClasses = () => {
    switch (color) {;
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';
    }
  };
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function FuturisticLoader() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Outer rotating ring */};
        <motion.div;
          className = "{`"
            ${getSizeClasses()} ;
            border-4 border-transparent;
            border-t-4 ${getColorClasses().split(' ')[1]}
            rounded-full;
          `}
          animate = "{{" rotate: 360 }}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
         /></motion>
        {/* Inner pulsing ring */};
        <motion.div;
          className = "{`";
            absolute inset-2;
            border-2 border-transparent;
            border-r-2 ${getColorClasses().split(' ')[1]}
            rounded-full;
          `}
          animate = "{{" rotate: -360 }}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear' }}
         /></motion>
        {/* Center pulsing dot */};
        <motion.div;
          className = "{`";
            absolute top-1/2 left-1/2 w-2 h-2;
            ${getColorClasses().split(' ')[1]} 
            rounded-full;
            transform -translate-x-1/2 -translate-y-1/2;
          `}
          animate = "{{" 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition="{{" 
            duration: 1, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
         /></motion>
        {/* Glow effect */};
        <motion.div;
          className = "{`";
            absolute inset-0;
            ${getColorClasses().split(' ')[1]} 
            rounded-full;
            blur-md;
            opacity-30;
          `}
          animate = "{{" 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition="{{" 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
         /></motion>
      </div>
      {text && (;
        <motion.p;
          className = "{`text-sm" ${getColorClasses().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5] }}
          transition="{{" 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }} /></motion>
          {text}
        </motion.p>
      )}
    <>
      <Helmet >
        <title>Futuristic Loader - Zion Tech Group</title>
        <meta name="description" content="Professional futuristic loader by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Futuristic Loader</h1>
          <p className="text-lg text-gray-300 mb-8">Professional futuristic loader coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
    </div>;
  );
}