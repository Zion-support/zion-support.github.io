class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
'use client';

'use client';


'use client';
'use client';
;
import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {ArrowRight, Play, Star, Users, Award, Zap} from 'lucide-react';
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900'>;

;
'use client';
'use client';import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';
    { icon: Users, value: '500+', label: 'Happy Clients' },{ icon: Award, value: '50+', label: 'Awards Won' },{ icon: Star, value: '99%', label: 'Client Satisfaction' },{ icon: Zap, value: '24/7', label: 'Support Available' },];return (<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900'>;
'use client',

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';
const HeroSection: React.FC = () => {
  const stats = [
  ];
  ];
  return (
      {/* Animated Background Elements */}
      <div className='absolute inset - 0'    />
        {/* Floating Orbs */}
        <motion.div
          className='absolute top - 20 left - 20 w - 72 h - 72 bg - blue - 500 / 20 rounded - full blur - 3xl'
          animate={{}
          }}
          transition={{
            duration: 8
repeat: Infinity;}
ease: 'easeInOut'}
          }}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]}}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size: 50px_50px]" />
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0'>;
        {/* Floating Orbs */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl'
  const stats = [;
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Zap, value: '24 / 7', label: 'Support Available' },
  ];
;
  return (
    <section className='relative min - h-screen flex items - center justify - center overflow - hidden bg - gradient - to - br from - black via - gray - 900 to - blue - 900'>;
      {/* Animated Background Elements */}
      <div className='absolute inset - 0'>;
        {/* Floating Orbs */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 72 h - 72 bg - blue - 500 / 20 rounded - full blur - 3xl';
          animate={{

          className='absolute top - 20 left - 20 w - 72 h - 72 bg - blue - 500 / 20 rounded - full blur - 3xl';'

          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />;

        <motion.div;
          className='absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl';

          animate={{

            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6],

          }}
          transition={{

        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>

        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>
];

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0 && 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0 && 0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />;
      </div>;

      <div className='relative container mx-auto px-4 text-center z-10'>        {/* Main Content */}  ];
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900'    />;

      {/* Animated Background Elements */}
      <div className='absolute inset-0'    />;
        {/* Floating Orbs */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 bg-[linear - gradient (rgba (255, 255, 255, 0.02)_1px, transparent_1px), linear - gradient (90deg, rgba (255, 255, 255, 0.02)_1px, transparent_1px)] bg-[size:50px_50px]' />;
      </div>;
      <div className='relative container mx - auto px - 4 text - center z - 10'>        {/* Main Content */}  ];
;
  return (
    <section className="relative min - h-screen flex items - center justify - center overflow - hidden bg - gradient - to - br from - black via - gray - 900 to-blue-900">;
      {/* Animated Background Elements */}
      <div className="absolute inset-0">;
        {/* Floating Orbs */}
        <motion.div;

            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',

          }}
          transition={{}
            duration: 8;
            repeat: Infinity'
            ease: 'easeInOut'
          }}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]}}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          transition={{
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>

            duration: 8,
            repeat: Infinity,
            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 20 w - 96 h - 96 bg - purple - 500 / 20 rounded - full blur - 3xl";

          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2]
            opacity: [0 && 0.6, 0 && 0.3, 0 && 0.6]}}
          transition={{

        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]}}
        <div className="absolute inset - 0 bg-[linear-gradient (rgba (255, 255, 255, 0.02)_1px, transparent_1px), linear-gradient (90deg, rgba (255, 255, 255, 0.02)_1px, transparent_1px)] bg-[size:50px_50px]" />;
      </div>;
      <div className="relative container mx - auto px - 4 text-center z-10">;
        {/* Main Content */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}





          {/* Badge */}
          transition={{ duration: 0.8 }}
          className='max-w-6xl mx-auto'        >          className="max-w-6xl mx-auto"
        >



            initial={{ opacity: 0, scale: 0 && 0.8 }
}
            duration: 10,repeat: Infinity,ease: \'easeInOut\';
          }}
           />;
        {/* Grid Pattern */}"
        <div className=\"absolute inset - 0 bg-[linear - gradient (rgba (255, 255, 255, 0.02)_1px, transparent_1px), linear - gradient (90deg, rgba (255, 255, 255, 0.02)_1px, transparent_1px)] bg-[size:50px_50px]\"    />;
      </div>;"
      <div className=\"relative container mx - auto px - 4 text - center z - 10\"    />;
        {/* Main Content */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }
}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
className='max-w-6xl mx-auto'    />

          {/* Badge *}
}
          <motion.div;


            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>
            transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
            className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>;
            Transform Your Business with;
            <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>              Cutting-Edge Technology            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight";
          >;
            Transform Your Business with;
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
            </span>;
          </motion && motion.h1>;

          {/* Subtitle */}
          <motion&& motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}




            in the modern technology landscape.          </motion.p>


            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From AI development to cloud architecture, we help companies revolutionize their digital presence
            and achieve sustainable growth in the modern technology landscape.
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            From AI development to cloud architecture, we help companies;
            revolutionize their digital presence and achieve sustainable growth;
            in the modern technology landscape.          </motion && motion.p>            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed";
          >;
            From AI development to cloud architecture, we help companies revolutionize their digital presence ;
            and achieve sustainable growth in the modern technology landscape.;
          </motion.p>
          {/* CTA Buttons */}
          <motion.div;
            initial={{ opacity: 0, y: 30 }
}
            animate={{ opacity: 1, y: 0 }
}
            className='w - 1 h - 3 bg - white / 60 rounded - full mt - 2'          />;
        </motion.div>;
      </motion.div>;
    </section>);
}
;
export default HeroSection;        className="absolute bottom - 8 left-1/2 transform -translate-x-1 / 2";
      >;
        <motion.div;
          animate={{ coordinate_y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w - 6 h - 10 border - 2 border - white / 30 rounded - full flex justify - center'          className="w - 6 h - 10 border - 2 border - white / 30 rounded-full flex justify-center";
    </section>
    </section>
