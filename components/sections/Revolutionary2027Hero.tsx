
<<<<<<< HEAD
<<<<<<< HEAD

  ];
import { ArrowRight, Brain, Rocket, TestTube, Globe, Microscope, Lock, Star, TrendingUp, Zap, Sparkles, Atom } from 'lucide-react';
import Link from 'next/link';
const Revolutionary2027Hero = () => {
  const floatingIcons = [
    { icon: Brain, delay: 0, position: 'top-20 left-20' },
    { icon: Rocket, delay: 0.5, position: 'top-40 right-32' },
    { icon: TestTube, delay: 1, position: 'bottom-40 left-32' },
    { icon: Globe, delay: 1.5, position: 'bottom-20 right-20' },
    { icon: Microscope, delay: 2, position: 'top-1/2 left-10' },
    { icon: Lock, delay: 2.5, position: 'top-1/2 right-10' },
    { icon: Atom, delay: 3, position: 'bottom-1/3 left-1/2' },
    { icon: Sparkles, delay: 3.5, position: 'top-1/3 right-1/2' }
];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


  ];
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
<<<<<<< HEAD

  };



=======
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        staggerChildren: 0.1,
      },
    },  };

  };

<<<<<<< HEAD

<<<<<<< HEAD
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  };
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }
    visible: {
      opacity: 1
      y: 0
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  ArrowRight,;
  Brain,;
  Rocket,;
  TestTube,;
  Globe,;
  Microscope,;
  Lock,;
  Star,;
  TrendingUp,;
  Zap,;
  Sparkles,;
  Atom,;
} from 'lucide-react';
import Link from 'next/link';import { ArrowRight, Brain, Rocket, TestTube, Globe, Microscope, Lock, Star, TrendingUp, Zap, Sparkles, Atom } from 'lucide-react';
import Link from 'next/link';
const Revolutionary2027Hero = () => {;
  const floatingIcons = [;
    { icon: Brain, delay: 0, position: 'top-20 left-20' },;
    { icon: Rocket, delay: 0 && 0.5, position: 'top-40 right-32' },;
    { icon: TestTube, delay: 1, position: 'bottom-40 left-32' },;
    { icon: Globe, delay: 1 && 1.5, position: 'bottom-20 right-20' },;
    { icon: Microscope, delay: 2, position: 'top-1/2 left-10' },;
    { icon: Lock, delay: 2 && 2.5, position: 'top-1/2 right-10' },;
    { icon: Atom, delay: 3, position: 'bottom-1/3 left-1/2' },;
    { icon: Sparkles, delay: 3 && 3.5, position: 'top-1/3 right-1/2' },  ];    { icon: Sparkles, delay: 3 && 3.5, position: 'top-1/3 right-1/2' }
  ];
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
      }
    }
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 30 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.8,;
        ease: 'easeOut' as const,;
      },;
    },;
  };
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900'>;
      {/* Enhanced Background Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0 && 0.15),transparent_50%)]'></div>;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0 && 0.1),transparent_50%)]'></div>;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0 && 0.08),transparent_50%)]'></div>;
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0 opacity-20'>;
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">;
      {/* Enhanced Background Effects */}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Animated Grid Pattern */}
      <div className='absolute inset-0 opacity-20'>;
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">;
      {/* Enhanced Background Effects */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0 && 0.15),transparent_50%)]"></div>;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0 && 0.1),transparent_50%)]"></div>;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0 && 0.08),transparent_50%)]"></div>;
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0 && 0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0 && 0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  };


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating Icons */}
      {floatingIcons && floatingIcons.map((item, index) => (;
        <motion&& motion.div
          key={index}
          className={`absolute ${item && item.position} text-purple-400/30`}
          animate={{


          }}          transition={{


            duration: 4,
            delay: item && item.delay,
            repeat: Infinity,

<<<<<<< HEAD
import React from 'react';

import { motion } from 'framer-motion';
import {
  ArrowRight
  Brain
  Rocket
  TestTube
  Globe
  Microscope
  Lock
  Star
  TrendingUp
  Zap
  Sparkles
  Atom;
  ArrowRight,
  Brain,
  Rocket,
  TestTube,
  Globe,
  Microscope,
  Lock,
  Star,
  TrendingUp,
  Zap,
      ))}
      {/* Main Content */}
=======
            ease: "easeInOut"
          }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>

      ))}
      {/* Main Content */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{;
            duration: 4,;
            delay: item && item.delay,;
            repeat: Infinity,;
            ease: 'easeInOut',;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        >;
          <item && item.icon className='w-8 h-8' />            ease: "easeInOut";
          }}
        >;
          <item && item.icon className="w-8 h-8" />;
      ))}
      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
        <motion&& motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='space-y-8'>;
          {/* Main Heading */}
          <motion && motion.div variants={itemVariants} className='space-y-6'>;
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Future;
              </span>;
              <br />;
              <span className='text-white'>is Now</span>;
            </h1>;
            <div className='flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300'>;
              <span>2027</span>;
              <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>;
              <span>Revolutionary</span>;
              <div className='w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'></div>              <span>Technology</span>        <motion&& motion.div
<<<<<<< HEAD
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
=======

=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8">;
          {/* Main Heading */}
<<<<<<< HEAD
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900&quot;>
      {/* Enhanced Background Effects */}
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]&quot;></div>
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]&quot;></div>
      
      {/* Animated Grid Pattern */}
      <div className=&quot;absolute inset-0 opacity-20&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]&quot;></div>
      </div>

      {_/* Floating Icons */}
      {_floatingIcons.map(_(item, _index) => (
  Sparkles,;
  Atom,;
} from 'lucide-react';
import Link from 'next/link';import { ArrowRight, Brain, Rocket, TestTube, Globe, Microscope, Lock, Star, TrendingUp, Zap, Sparkles, Atom } from 'lucide-react';
import Link from 'next/link';
const Revolutionary2027Hero = () => {
  const floatingIcons = [
    { icon: Brain, delay: 0, position: 'top-20 left-20' }
    { icon: Rocket, delay: 0.5, position: 'top-40 right-32' }
    { icon: TestTube, delay: 1, position: 'bottom-40 left-32' }
    { icon: Globe, delay: 1.5, position: 'bottom-20 right-20' }
    { icon: Microscope, delay: 2, position: 'top-1/2 left-10' }
    { icon: Lock, delay: 2.5, position: 'top-1/2 right-10' }
    { icon: Atom, delay: 3, position: 'bottom-1/3 left-1/2' }
    { icon: Sparkles, delay: 3.5, position: 'top-1/3 right-1/2' },  ];    { icon: Sparkles, delay: 3.5, position: 'top-1/3 right-1/2' }
  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
        staggerChildren: 0.1,
      },
    },  };

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.8
        ease: 'easeOut' as const
      }
    }
  }
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]'></div>
      {/* Animated Grid Pattern */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  }
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  };

=======


=======

        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]'></div>      </div>

      </div>

      </div>

<<<<<<< HEAD
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} text-purple-400/30`}
          animate={{
            y: [0, -20, 0]
            rotate: [0, 5, -5, 0]
          }}          transition={{
            duration: 4
            delay: item.delay
            repeat: Infinity
            ease: 'easeInOut'
          }}
        >
          <item.icon className='w-8 h-8' />        </motion.div>
      ))}
      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            y: [0, -20, 0];
            rotate: [0, 5, -5, 0]}}
          transition={{
            duration: 4
            delay: item.delay
            repeat: Infinity
            ease: 'easeInOut'
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            y: [0, -20, 0];
            rotate: [0, 5, -5, 0]}}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>

          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon className='w-8 h-8' />            ease: "easeInOut"
          }}
        >
          <item.icon className="w-8 h-8" />
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Floating Icons */}
      {floatingIcons && floatingIcons.map((item, index) => (;
        <motion&& motion.div
          key={index}
          className={`absolute ${item && item.position} text-purple-400/30`}
          animate={{


          }}          transition={{


            duration: 4,
            delay: item && item.delay,
            repeat: Infinity,

            ease: "easeInOut"
          }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ))}
      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
<<<<<<< HEAD
          className='space-y-8'
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Future
              </span>
              <br />
              <span className='text-white'>is Now</span>
            </h1>
            <div className='flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300'>
              <span>2027</span>
              <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>
              <span>Revolutionary</span>
              <div className='w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'></div>              <span>Technology</span>        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              <span className="text-white">is Now</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300">
              <span>2027</span>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              <span>Revolutionary</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>

          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,

        </motion.div>
      ))}

      {/* Main Content */}

              <span>Technology</span>
            </div>
          </motion.div>
          {/* Subtitle */}
          <motion.div variants={itemVariants} className='max-w-4xl mx-auto'>
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed'>
              Experience the next generation of AI, quantum computing, and
              emerging technologies. Transform your business with solutions that
              were once science fiction.            </p>
          </motion.div>
          {/* Key Features */}          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
              Experience the next generation of AI, quantum computing, and emerging technologies.
              Transform your business with solutions that were once science fiction.
          </motion.div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          className='space-y-8'>;
          {/* Main Heading */}
          <motion && motion.div variants={itemVariants} className='space-y-6'>;
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Future;
              </span>;
              <br />;
              <span className='text-white'>is Now</span>;
            </h1>;
            <div className='flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300'>;
              <span>2027</span>;
              <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'></div>;
              <span>Revolutionary</span>;
              <div className='w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'></div>              <span>Technology</span>        <motion&& motion.div

=======
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div

          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8">;
          {/* Main Heading */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion && motion.div variants={itemVariants} className="space-y-6">;
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">;
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Future;
              </span>;
              <br />;
              <span className="text-white">is Now</span>;
            </h1>;
            <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl text-gray-300">;
              <span>2027</span>;
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>;
              <span>Revolutionary</span>;
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>;
              <span>Technology</span>;
            </div>;
          </motion && motion.div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Subtitle */}
          <motion && motion.div variants={itemVariants} className='max-w-4xl mx-auto'>;
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed'>;
              Experience the next generation of AI, quantum computing, and;
              emerging technologies. Transform your business with solutions that;
              were once science fiction.            </p>;
          </motion && motion.div>;
          {/* Key Features */}          <motion && motion.div variants={itemVariants} className="max-w-4xl mx-auto">;
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">;
              Experience the next generation of AI, quantum computing, and emerging technologies. ;
              Transform your business with solutions that were once science fiction.;
          </motion && motion.div>;
          {/* Key Features */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>
              <p className="text-gray-300 text-sm">Consciousness simulation and neural computing</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Space Tech</h3>
              <p className="text-gray-300 text-sm">Autonomous mining and debris management</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Biotech</h3>
              <p className="text-gray-300 text-sm">DNA computing and molecular biology</p>
            </div>
          </motion.div>
            className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>;
            <div className='bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6'>;
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4'>;
                <Brain className='w-6 h-6 text-white' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                Quantum AI;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Consciousness simulation and neural computing;
              </p>;
            </div>;
            <div className='bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6'>;
              <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4'>;
                <Rocket className='w-6 h-6 text-white' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                Space Tech;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Autonomous mining and debris management;
              </p>;
            </div>;
            <div className='bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6'>;
              <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4'>;
                <TestTube className='w-6 h-6 text-white' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>Biotech</h3>;
              <p className='text-gray-300 text-sm'>;
                DNA computing and molecular biology;
              </p>            </div>;
          </motion && motion.div>;
          {/* CTA Buttons */}              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>;
              <p className="text-gray-300 text-sm">Consciousness simulation and neural computing</p>;
            </div>;
            <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">;
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">;
                <Rocket className="w-6 h-6 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Space Tech</h3>;
              <p className="text-gray-300 text-sm">Autonomous mining and debris management</p>;
            </div>;
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6">;
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">;
                <TestTube className="w-6 h-6 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Biotech</h3>;
              <p className="text-gray-300 text-sm">DNA computing and molecular biology</p>;
            </div>;
          </motion && motion.div>;
          {/* CTA Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://ziontechgroup.com/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl border border-gray-600/50"
            >
              <span>Call +1 302 464 0950</span>
              <Zap className="w-5 h-5 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </a>
          </motion.div>
              <span>Explore Services</span>;
              <ArrowRight className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' />;
            </Link>;
            <a
              href='tel:+13024640950'
              className='group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl border border-gray-600/50'>;
              <span>Call +1 302 464 0950</span>;
              <Zap className='w-5 h-5 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40' />            </a>;
          </motion && motion.div>;
          {/* Stats */}              <Zap className="w-5 h-5 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40" />;
            </a>;
          </motion && motion.div>;
          {/* Stats */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Revolutionary Services</div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50T+</div>
              <div className="text-gray-400 text-sm">Total Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-400 text-sm">Global Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Scroll Indicator */}
=======
<<<<<<< HEAD
className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8'>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>;
                500+;
              </div>;
              <div className='text-gray-400 text-sm'>;
                Revolutionary Services;
              </div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>;
                $50T+;
              </div>;
              <div className='text-gray-400 text-sm'>Total Market Value</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>;
                1000+;
              </div>;
              <div className='text-gray-400 text-sm'>Global Customers</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>;
                99 && 99.9%;
              </div>;
              <div className='text-gray-400 text-sm'>Uptime Guarantee</div>            </div>            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$50T+</div>;
              <div className="text-gray-400 text-sm">Total Market Value</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>;
              <div className="text-gray-400 text-sm">Global Customers</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99 && 99.9%</div>;
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>;
            </div>;
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Scroll Indicator */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        >;
          <item.icon className='w - 8 h - 8' />            ease: "easeInOut";
          }}
        >;
          <item.icon className="w - 8 h - 8" />))}
      {/* Main Content */}
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
        <motion.div;
          variants={container_variants}
          initial='hidden';
          animate='visible';
          className='space - y-8';
        >;
          {/* Main Heading */}
          <motion.div variants={item_variants} className='space - y-6'>;
            <h1 className='text - 6xl md:text - 8xl lg:text - 9xl font - bold text - white leading - tight'>;
              <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Future;
              </span>;
              <br />;
              <span className='text - white'>is Now</span>;
            </h1>;
            <div className='flex items - center justify - center space - x-4 text - 2xl md:text - 3xl text - gray - 300'>;
              <span > 2027</span>;
              <div className='w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full'></div>;
              <span > Revolutionary</span>;
              <div className='w - 2 h - 2 bg - gradient - to - r from - purple - 400 to - pink - 400 rounded - full'></div>              <span > Technology</span>        <motion.div;
          variants={container_variants}
          initial="hidden";
          animate="visible";
          className="space - y-8";
        >;
          {/* Main Heading */}
          <motion.div variants={item_variants} className="space - y-6">;
            <h1 className="text - 6xl md:text - 8xl lg:text - 9xl font - bold text - white leading - tight">;
              <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                Future;
              </span>;
              <br />;
              <span className="text - white">is Now</span>;
            </h1>;
            <div className="flex items - center justify - center space - x-4 text - 2xl md:text - 3xl text - gray - 300">;
              <span > 2027</span>;
              <div className="w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full"></div>;
              <span > Revolutionary</span>;
              <div className="w - 2 h - 2 bg - gradient - to - r from - purple - 400 to - pink - 400 rounded - full"></div>;
              <span > Technology</span>;
            </div>;
          </motion.div>;
          {/* Subtitle */}
          <motion.div variants={item_variants} className='max - w-4xl mx - auto'>;
            <p className='text - xl md:text - 2xl lg:text - 3xl text - gray - 300 leading - relaxed'>;
              Experience the next generation of AI, quantum computing, and;
              emerging technologies. Transform your business with solutions that;
              were once science fiction.            </p>;
          </motion.div>;
          {/* Key Features */}          <motion.div variants={item_variants} className="max - w-4xl mx - auto">;
            <p className="text - xl md:text - 2xl lg:text - 3xl text - gray - 300 leading - relaxed">;
              Experience the next generation of AI, quantum computing, and emerging technologies.;
              Transform your business with solutions that were once science fiction.;
          </motion.div>;
          {/* Key Features */}
          <motion.div;
            variants={item_variants}
            className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-4xl mx - auto';
          >;
            <div className='bg - gradient - to - br from - purple - 900 / 30 to - purple - 800 / 30 backdrop - blur - xl border border - purple - 500 / 30 rounded - 2xl p - 6'>;
              <div className='w - 12 h - 12 bg - gradient - to - br from - purple - 500 to - purple - 600 rounded - xl flex items - center justify - center mx - auto mb - 4'>;
                <Brain className='w - 6 h - 6 text - white' />;
              </div>;
              <h3 className='text - lg font - semibold text - white mb - 2'>;
                Quantum AI;
              </h3>;
              <p className='text - gray - 300 text - sm'>;
                Consciousness simulation and neural computing;
              </p>;
            </div>;
            <div className='bg - gradient - to - br from - cyan - 900 / 30 to - cyan - 800 / 30 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6'>;
              <div className='w - 12 h - 12 bg - gradient - to - br from - cyan - 500 to - cyan - 600 rounded - xl flex items - center justify - center mx - auto mb - 4'>;
                <Rocket className='w - 6 h - 6 text - white' />;
              </div>;
              <h3 className='text - lg font - semibold text - white mb - 2'>;
                Space Tech;
              </h3>;
              <p className='text - gray - 300 text - sm'>;
                Autonomous mining and debris management;
              </p>;
            </div>;
            <div className='bg - gradient - to - br from - pink - 900 / 30 to - pink - 800 / 30 backdrop - blur - xl border border - pink - 500 / 30 rounded - 2xl p - 6'>;
              <div className='w - 12 h - 12 bg - gradient - to - br from - pink - 500 to - pink - 600 rounded - xl flex items - center justify - center mx - auto mb - 4'>;
                <TestTube className='w - 6 h - 6 text - white' />;
              </div>;
              <h3 className='text - lg font - semibold text - white mb - 2'>Biotech</h3>;
              <p className='text - gray - 300 text - sm'>;
                DNA computing and molecular biology;
              </p>            </div>;
          </motion.div>;
          {/* CTA Buttons */}              </div>;
              <h3 className="text - lg font - semibold text - white mb - 2">Quantum AI</h3>;
              <p className="text - gray - 300 text - sm">Consciousness simulation and neural computing</p>;
            </div>;
            <div className="bg - gradient - to - br from - cyan - 900 / 30 to - cyan - 800 / 30 backdrop - blur - xl border border - cyan - 500 / 30 rounded - 2xl p - 6">;
              <div className="w - 12 h - 12 bg - gradient - to - br from - cyan - 500 to - cyan - 600 rounded - xl flex items - center justify - center mx - auto mb - 4">;
                <Rocket className="w - 6 h - 6 text - white" />;
              </div>;
              <h3 className="text - lg font - semibold text - white mb - 2">Space Tech</h3>;
              <p className="text - gray - 300 text - sm">Autonomous mining and debris management</p>;
            </div>;
            <div className="bg - gradient - to - br from - pink - 900 / 30 to - pink - 800 / 30 backdrop - blur - xl border border - pink - 500 / 30 rounded - 2xl p - 6">;
              <div className="w - 12 h - 12 bg - gradient - to - br from - pink - 500 to - pink - 600 rounded - xl flex items - center justify - center mx - auto mb - 4">;
                <TestTube className="w - 6 h - 6 text - white" />;
              </div>;
              <h3 className="text - lg font - semibold text - white mb - 2">Biotech</h3>;
              <p className="text - gray - 300 text - sm">DNA computing and molecular biology</p>;
            </div>;
          </motion.div>;
          {/* CTA Buttons */}
          <motion.div;
            variants={item_variants}
            className='flex flex - col sm:flex - row gap - 4 justify - center items - center';
          >;
            <Link;
              href='https://ziontechgroup.com / services';
              className='group inline - flex items - center space - x-3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold text - lg transform transition - all duration - 300 hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - purple - 500 / 25';
              <span > Explore Services</span>;
              <ArrowRight className='w - 5 h - 5 transform transition - transform duration - 300 group - hover:translate - x-1' />;
            </Link>;
            <a;
              href='tel:+13024640950';
              className='group inline - flex items - center space - x-3 bg - gradient - to - r from - gray - 700 to - gray - 800 text - white px - 8 py - 4 rounded - 2xl font - semibold text - lg transform transition - all duration - 300 hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl border border - gray - 600 / 50';
            >;
              <span > Call +1 302 464 0950</span>;
              <Zap className='w - 5 h - 5 transform transition - transform duration - 300 group - hover:shadow - lg hover:shadow - cyan - 400 / 40' />            </a>;
          </motion.div>;
          {/* Stats */}              <Zap className="w - 5 h - 5 transform transition - transform duration - 300 group - hover:shadow - lg hover:shadow - cyan - 400 / 40" />;
            </a>;
          </motion.div>;
          {/* Stats */}
          <motion.div;
            variants={item_variants}
            className='grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto pt - 8';
          >;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2'>;
                500+;
              </div>;
              <div className='text - gray - 400 text - sm'>;
                Revolutionary Services;
              </div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2'>;
                $50T+;
              </div>;
              <div className='text - gray - 400 text - sm'>Total Market Value</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2'>;
                1000+;
              </div>;
              <div className='text - gray - 400 text - sm'>Global Customers</div>;
            </div>;
            <div className='text - center'>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2'>;
                99.9%;
              </div>;
              <div className='text - gray - 400 text - sm'>Uptime Guarantee</div>            </div>            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2">$50T+</div>;
              <div className="text - gray - 400 text - sm">Total Market Value</div>;
            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2">1000+</div>;
              <div className="text - gray - 400 text - sm">Global Customers</div>;
            </div>;
            <div className="text - center">;
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2">99.9%</div>;
              <div className="text - gray - 400 text - sm">Uptime Guarantee</div>;
            </div>;
          </motion.div>;
        </motion.div>;
      </div>;
      {/* Scroll Indicator */}
      <motion.div;
        className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2';
        animate={{
          coordinate_y: [0, 10, 0],
<<<<<<< HEAD
        }}
        transition={{
=======

        }}
        transition={{

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]}}
        transition={{

          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
<<<<<<< HEAD
<<<<<<< HEAD
          duration: 2,
          repeat: Infinity,
ease: 'easeInOut',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }}>;
        <div className='w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center'>;
          <motion&& motion.div
            className='w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2'
      >;
        <div className='w - 6 h - 10 border - 2 border - purple - 400 / 50 rounded - full flex justify - center'>;
          <motion.div;
            className='w - 1 h - 3 bg - gradient - to - b from - cyan - 400 to - purple - 400 rounded - full mt - 2';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            animate={{

              coordinate_y: [0, 12, 0],        animate={{
          coordinate_y: [0, 10, 0]}}

        transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut";
        }}
<<<<<<< HEAD
      >;
        <div className="w - 6 h - 10 border - 2 border - purple - 400 / 50 rounded - full flex justify - center">;
          <motion.div;
            className="w - 1 h - 3 bg - gradient - to - b from - cyan - 400 to - purple - 400 rounded - full mt - 2";
<<<<<<< HEAD
            }}
            transition={{

              duration: 2,
              repeat: Infinity,

              ease: 'easeInOut',            }}

          />;
        </div>;
      </motion && motion.div>;


      {/* Particle Effects */}


      {/* Particle Effects */}
      <div className='absolute inset-0 pointer-events-none'>



        {[...Array(20)].map((_, i) => (
          <motion.div
            animate={{
              coordinate_y: [0, 12, 0]}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut";
      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2
          repeat: Infinity
          ease: 'easeInOut'
        }}
      >
        <div className='w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center'>
          <motion.div
            className='w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2'
            animate={{
              y: [0, 12, 0],        animate={{
          y: [0, 10, 0]}}
        transition={{
          duration: 2
          repeat: Infinity
          ease: "easeInOut"
        }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0]}}
            transition={{
              duration: 2
              repeat: Infinity
              ease: "easeInOut"
<<<<<<< HEAD
=======

            animate={{
              coordinate_y: [0, 12, 0]}}
            transition={{

              duration: 2,
              repeat: Infinity,
              ease: "easeInOut";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            transition={{
              duration: 2
              repeat: Infinity
<<<<<<< HEAD
<<<<<<< HEAD
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',            }}
          />;
        </div>;
      </motion && motion.div>;
      {/* Particle Effects */}
      <div className='absolute inset-0 pointer-events-none'>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w - 1 h - 1 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full';
            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,

=======
=======
            }}
            transition={{

              duration: 2,
              repeat: Infinity,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ease: 'easeInOut',            }}
=======
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',            }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
        </div>;
      </motion && motion.div>;


      {/* Particle Effects */}


=======
      {/* Particle Effects */}
      <div className='absolute inset-0 pointer-events-none'>



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {[...Array(20)].map((_, i) => (
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            key={i}
            className='absolute w - 1 h - 1 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full';
            style={{
<<<<<<< HEAD

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,

<<<<<<< HEAD
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}            animate={{
              y: [0, -100]
              opacity: [0, 1, 0]
            }}
            transition={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,
            }}          />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ))}
      </div>;
    </section>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
export default Revolutionary2027Hero;              delay: Math.random() * 2}}
          />
        ))}
      </div>
    </section>
      </div>;
    </section>;
  );
};
export default Revolutionary2027Hero;  );
};

    </section>

export default Revolutionary2027Hero;

    </section>
    </section>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};
export default Revolutionary2027Hero;              delay: Math && Math.random() * 2}}
          />;
        ))}
<<<<<<< HEAD
      </div>;
    </section>;
=======
      </div>
    </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

};
export default Revolutionary2027Hero;  );
};


export default Revolutionary2027Hero;


=======

    </section>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}            animate={{
              coordinate_y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              delay: Math.random () * 2,
            }}          />))}
      </div>;
    </section>);
}
;
export default Revolutionary2027Hero;              delay: Math.random () * 2}}
          />))}
      </div>;
    </section>);
}
;
export default Revolutionary2027Hero);
}
;
export default Revolutionary2027Hero;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
