<<<<<<< HEAD
<<<<<<< HEAD

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
import React from 'react';

import { motion } from 'framer-motion';


} from 'lucide-react';
export default /**
 * UltraFuturisticHero2029 - Function description
 */
function UltraFuturisticHero2029() {
  const features = [;
    {
=======
import React from 'react';
import { motion } from 'framer-motion';
import React from 'react';

import { motion } from 'framer-motion';
import {
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ArrowRight
  Star
  TrendingUp
  Zap
  Brain
  Atom
  Rocket
  Target
  Shield
  Cpu
  Globe
  Sparkles;
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Rocket,
  Target,
  Shield,
  Cpu,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
  Globe,;
  Sparkles,;
} from 'lucide-react';
export default /**
 * UltraFuturisticHero2029 - Function description
 */
function UltraFuturisticHero2029() {
  const features = [;
    {
      icon: Cpu
      text: 'Autonomous IT Operations'
      color: 'from-cyan-500 to-teal-600'
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' }
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' }
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' }
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' }
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      icon: Cpu,
      text: 'Autonomous IT Operations',
      color: 'from-cyan-500 to-teal-600',;
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }


import {;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Zap,;
  Brain,;
  Atom,;
  Rocket,;
  Target,;
  Shield,;
  Cpu,;
  Globe,;
  Sparkles,;
} from 'lucide-react';

export default function UltraFuturisticHero2029() {;
  const features = [;
    {;
      icon: Brain,;
      text: 'AI Consciousness Evolution',;
      color: 'from-violet-500 to-purple-600',;
    },;
    {;
      icon: Atom,;
      text: 'Quantum Computing Solutions',;
      color: 'from-blue-500 to-cyan-600',;
    },;
    {;
      icon: Rocket,;
      text: 'Space Technology Innovation',;
      color: 'from-emerald-500 to-teal-600',;
    },;
    {;
      icon: Target,;
      text: 'Micro SAAS Excellence',;
      color: 'from-orange-500 to-red-600',;
    },;
    {;
      icon: Shield,;
      text: 'Enterprise Security',;
      color: 'from-indigo-500 to-blue-600',;
    },;
    {;
      icon: Cpu,;
      text: 'Autonomous IT Operations',;
      color: 'from-cyan-500 to-teal-600',;
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },;
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },;
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },;
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },;
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },;
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }

  const stats = [;
    { number: '500+', label: 'Innovative Services', icon: Sparkles },;
    { number: '$2 && 2.5B+', label: 'Market Opportunity', icon: TrendingUp },;
    { number: '99 && 99.9%', label: 'Success Rate', icon: Star },;
    { number: '24/7', label: 'AI Operations', icon: Zap },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ];
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>;
        {/* Floating Particles */}
        <div className='absolute inset-0 overflow-hidden'>;
          {[...Array(50)].map((_, i) => (;
            <motion&& motion.div
              key={i}
              className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20'
              animate={{
              }}
              style={{
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                x: [0, Math && Math.random() * 1000],
                y: [0, Math && Math.random() * 1000],
                opacity: [0 && 0.2, 0 && 0.8, 0 && 0.2],
              }}
              transition={{
                duration: Math && Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: Math && Math.random() * 100 + '%',
                top: Math && Math.random() * 100 + '%',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }}            />  ];
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { ArrowRight, Star, TrendingUp, Zap, Brain, Atom, Rocket, Target, Shield, Cpu, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
export default function UltraFuturisticHero2029() {
  const features = [
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },
<<<<<<< HEAD
=======
  Globe,;
  Sparkles,;
} from 'lucide-react';
export default function UltraFuturisticHero2029() {
  const features = [
    {
      icon: Brain
      text: 'AI Consciousness Evolution'
      color: 'from-violet-500 to-purple-600'
    }
    {
      icon: Atom
      text: 'Quantum Computing Solutions'
      color: 'from-blue-500 to-cyan-600'
    }
    {
      icon: Rocket
      text: 'Space Technology Innovation'
      color: 'from-emerald-500 to-teal-600'
    }
    {
      icon: Target
      text: 'Micro SAAS Excellence'
      color: 'from-orange-500 to-red-600'
    }
    {
      icon: Shield
      text: 'Enterprise Security'
      color: 'from-indigo-500 to-blue-600'
    }
    {
      icon: Cpu
      text: 'Autonomous IT Operations'
      color: 'from-cyan-500 to-teal-600'
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' }
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' }
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' }
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' }
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' }
      icon: Cpu,
      text: 'Autonomous IT Operations',
      color: 'from-cyan-500 to-teal-600',;
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-violet-500 to-purple-600' },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from-blue-500 to-cyan-600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from-emerald-500 to-teal-600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from-orange-500 to-red-600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-indigo-500 to-blue-600' },
<<<<<<< HEAD
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  ];

=======
];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles },
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: Star },
    { number: '24/7', label: 'AI Operations', icon: Zap }
<<<<<<< HEAD
  ];


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">;
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">;
          {[...Array(50)].map((_, i) => (;
            <motion&& motion.div
=======
      icon: Brain,
      text: 'AI Consciousness Evolution',
      color: 'from - violet - 500 to - purple - 600',
    },
    {
      icon: Atom,
      text: 'Quantum Computing Solutions',
      color: 'from - blue - 500 to - cyan - 600',
    },
    {
      icon: Rocket,
      text: 'Space Technology Innovation',
      color: 'from - emerald - 500 to - teal - 600',
    },
    {
      icon: Target,
      text: 'Micro SAAS Excellence',
      color: 'from - orange - 500 to - red - 600',
    },
    {
      icon: Shield,
      text: 'Enterprise Security',
      color: 'from - indigo - 500 to - blue - 600',
    },
    {
      icon: Cpu,
      text: 'Autonomous IT Operations',
      color: 'from - cyan - 500 to - teal - 600',
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from - violet - 500 to - purple - 600' },
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from - blue - 500 to - cyan - 600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from - emerald - 500 to - teal - 600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from - orange - 500 to - red - 600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from - indigo - 500 to - blue - 600' },
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from - cyan - 500 to - teal - 600' }
  const stats = [;
    { number: '500+', label: 'Innovative Services', icon: Sparkles },
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: Star },
    { number: '24 / 7', label: 'AI Operations', icon: Zap },
  ];
;
  return (
    <section className='relative min - h-screen flex items - center justify - center overflow - hidden'>;
      {/* Animated Background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - black via - gray - 900 to - black'>;
        {/* Floating Particles */}
        <div className='absolute inset - 0 overflow - hidden'>;
          {[...Array (50)].map ((_, i) => (
            <motion.div;
              key={i}
              className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 20';
              animate={{
                coordinate_x: [0, Math.random () * 1000],
                coordinate_y: [0, Math.random () * 1000],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%',
              }}            />  ];
;
  return (
    <section className="relative min - h-screen flex items - center justify - center overflow - hidden">;
      {/* Animated Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - gray - 900 to - black">;
        {/* Floating Particles */}
        <div className="absolute inset - 0 overflow - hidden">;
          {[...Array (50)].map ((_, i) => (
            <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              key={i}
              className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 20";
              animate={{
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                duration: Math && Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
<<<<<<< HEAD

          ))}
        </div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


          ))}
        </div>


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Grid Pattern */}



        </div>
        {/* Gradient Orbs */}

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}        </div>
<<<<<<< HEAD
=======
=======
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%'}}
/>
          ))}
        </div>;
        {/* Grid Pattern */}
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0 && 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />;
        </div>;
        </div>
        {/* Gradient Orbs */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`;
            backgroundSize: '50px 50px'
          }} />
        </div>
<<<<<<< HEAD


=======
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        {/* Floating Particles */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20'
              animate={{
                x: [0, Math.random() * 1000]
                y: [0, Math.random() * 1000]
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10
                repeat: Infinity
                ease: 'linear'
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'
              }}            />  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 1000];
                y: [0, Math.random() * 1000];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: Math.random() * 10 + 10
                repeat: Infinity
                ease: "linear"
              }}
              style={{
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'}}
            />
          ))}
        </div>


          ))}
        </div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`
              backgroundSize: '50px 50px'
            }}
          />
        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`
              backgroundSize: '50px 50px'
            }}
          />

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`
              backgroundSize: '50px 50px'
            }}
          />

          ))}
        </div>;

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>;
          <div
            className='absolute inset-0'
            style={{

        </div>
        {/* Gradient Orbs */}
<<<<<<< HEAD
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>
      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }
  ];
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />;
      </div>;

      {/* Content */}

=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Main Heading */}
        <motion&& motion.div

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}

        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2029
            </span>
            <br />
            <span className="text-white">
              Future Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
        </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
              2029;
            </span>;
            <br />;
            <span className='text-white'>Future Technology</span>;
            <br />;
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>;
              Revolution;
            </span>;
          </h1>;

          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, we're building tomorrow's solutions today.          </p>          ;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. ;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* CTA Buttons */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

        >
          <Link
            href='/services'
<<<<<<< HEAD

            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'>;
            <span>Explore Services</span>;
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
          </Link>;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'>;
            <span>Get Started</span>;
            <Zap className='w-5 h-5' />          </Link>        >;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          <Link
            href="/services"

=======
          <Link
            href="/services"

          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2">;
            <span>Explore Services</span>;
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
          </Link>;

          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2">;
            <span>Get Started</span>;
            <Zap className="w-5 h-5" />;
          </Link>;
        </motion && motion.div>;
<<<<<<< HEAD


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <Link
            href="/services"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Features Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

<<<<<<< HEAD

<<<<<<< HEAD
=======
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >
          {features.map((feature, index) => (
            <motion.div
=======
                coordinate_x: [0, Math.random () * 1000];
                coordinate_y: [0, Math.random () * 1000];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: "linear";
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%'}}
            />))}
        </div>;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 opacity - 10'>;
          <div;
            className='absolute inset - 0';
            style={{
              background_image: `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,
              background_size: '50px 50px',
            }}
          />;
        </div>;
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000' />;
      </div>;
      {/* Content */}
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>        {/* Main Heading */}        </div>;
        {/* Gradient Orbs */}
        <div className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse" />;
        <div className="absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000" />;
      </div>;
      {/* Content */}
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb - 8';
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
              2029;
            </span>;
            <br />;
            <span className='text - white'>Future Technology</span>;
            <br />;
            <span className='bg - gradient - to - r from - emerald - 400 via - teal - 500 to - cyan - 500 bg - clip - text text - transparent'>;
              Revolution;
            </span>;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, we're building tomorrow's solutions today.          </p>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion.div>;
        {/* CTA Buttons */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex - col sm:flex - row gap - 4 justify - center mb - 16';
        >;
<<<<<<< HEAD
          <Link;
            href='/services';
            className='group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - lg font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl hover:shadow - cyan - 500 / 25 flex items - center justify - center space - x-2';
          >;
            <span > Explore Services</span>;
            <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
          </Link>;
          <Link;
            href='/contact';
            className='px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 text - lg font - semibold rounded - xl hover:bg - cyan - 500 / 10 hover:border - cyan - 400 transition - all duration - 300 flex items - center justify - center space - x-2';
          >;
            <span > Get Started</span>;
            <Zap className='w - 5 h - 5' />          </Link>        >;
          <Link;
            href="/services";
            className="group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - lg font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - 2xl hover:shadow - cyan - 500 / 25 flex items - center justify - center space - x-2";
          >;
            <span > Explore Services</span>;
            <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
          </Link>;
          <Link;
            href="/contact";
            className="px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 text - lg font - semibold rounded - xl hover:bg - cyan - 500 / 10 hover:border - cyan - 400 transition - all duration - 300 flex items - center justify - center space - x-2";
          >;
            <span > Get Started</span>;
            <Zap className="w - 5 h - 5" />;
          </Link>;
        </motion.div>;
        {/* Features Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 mb - 16'        >          className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 mb - 16";
        >;
          {features.map ((feature, index) => (
            <motion.div;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute inset-0&quot; style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot; />
      </div>

      {/* Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Main Heading */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}

        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
          className='mb-8'

        >
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
        </motion.div>
<<<<<<< HEAD

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-16'

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >
          <Link
            href='/services'
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'
          >
            <span>Explore Services</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'
          >
            <span>Get Started</span>
            <Zap className='w-5 h-5' />          </Link>        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'        >          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'        >

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >
          {features.map((feature, index) => (
            <motion.div

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className='group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50'




<<<<<<< HEAD
<<<<<<< HEAD
=======
</motion && motion.div>;
        {/* Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
              className='group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50'

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}
              >
                <feature.icon className='w-6 h-6 text-white' />
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              <p className='text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight'>                {feature.text}

                {feature.text}


              </p>
            </motion.div>
              </div>
              <p className='text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight'>                {feature.text}            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                {feature.text}
              <p className='text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight'>                {feature.text}

                {feature.text}

=======
              </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </p>
            </motion.div>
          ))}
        </motion.div>

          ))}
        {/* Stats */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

<<<<<<< HEAD

<<<<<<< HEAD
=======

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-8'        >          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          className='grid grid-cols-2 md:grid-cols-4 gap-8'        >

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >
          {stats.map((stat, index) => (
            <motion.div
=======
              className='group p - 4 rounded - xl bg - gray - 800 / 30 backdrop - blur - sm border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:bg - gray - 800 / 50';
            >;
              <div;
                className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}
              >;
                <feature.icon className='w - 6 h - 6 text - white' />;
              </div>;
              <p className='text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight'>                {feature.text}            >;
              <div className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}>;
                <feature.icon className="w - 6 h - 6 text - white" />;
              </div>;
              <p className="text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight">;
                {feature.text}
              </p>;
            </motion.div>))}
        </motion.div>;
        {/* Stats */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'        >          className="grid grid - cols - 2 md:grid - cols - 4 gap - 8";
        >;
<<<<<<< HEAD
          {stats.map ((stat, index) => (
            <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className='text - center group';
<<<<<<< HEAD
<<<<<<< HEAD
=======
className='text - center group';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >;
              <div className='w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform'>;
                <stat.icon className='w - 8 h - 8 text - cyan - 400' />;
              </div>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {stat.number}
              </div>;
              <div className='text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors'>                {stat.label}            >;
              <div className="w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform">;
                <stat.icon className="w - 8 h - 8 text - cyan - 400" />;
              </div>;
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {stat.number}
              </div>;
              <div className="text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors">;
                {stat.label}
<<<<<<< HEAD
<<<<<<< HEAD

              className='text-center group'



=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'>
                <stat.icon className='w-8 h-8 text-cyan-400' />
              </div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                {stat.number}
              </div>
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}

                {stat.label}


              </div>
            </motion.div>
          ))}

        </motion && motion.div>;





<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        </motion && motion.div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {/* Scroll Indicator */}
        <motion&& motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
<<<<<<< HEAD
=======
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              className='text-center group'

            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'>
                <stat.icon className='w-8 h-8 text-cyan-400' />
              </div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                {stat.number}
              </div>
              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}

                {stat.label}

              </div>
            </motion.div>
          ))}
        </motion.div>

          ))}
        {/* Scroll Indicator */}
        <motion&& motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'            />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
<<<<<<< HEAD
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
=======
            className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
              className='w-1 h-3 bg-cyan-400 rounded-full mt-2'              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />
          </motion.div>
        </motion.div>
      </div>


<<<<<<< HEAD
            />;
<<<<<<< HEAD
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
/>;
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;





>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Floating Elements */}
      <motion&& motion.div
=======
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Scroll Indicator */}
        <motion.div;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2'        >;
          <motion.div;
            animate={{ coordinate_y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'          >;
            <motion.div;
              animate={{ coordinate_y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'            />          className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2";
        >;
          <motion.div;
            animate={{ coordinate_y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'            className="w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center";
          >;
            <motion.div;
              animate={{ coordinate_y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'              className="w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2";
            />;
          </motion.div>;
        </motion.div>;
      </div>;
      {/* Floating Elements */}
      <motion.div;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        animate={{ rotate: 360 }}


<<<<<<< HEAD
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"

<<<<<<< HEAD
=======
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
    </section>;
  );


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full'
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className='absolute top - 20 right - 20 w - 32 h - 32 border border - cyan - 500 / 20 rounded - full';
      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full';
      />;
    </section>);      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full";
      />;
    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className='absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full'

      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full'
      />
    </section>
  );      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
      />
    </section>
  )
}
  );

}
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

}
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
