<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import {;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Globe,;
  Brain,;
  Rocket,;
  CheckCircle,;
} from 'lucide-react';
interface EnhancedHero2026Props {;
  contactInfo: {;
import React from 'react';

import { motion } from 'framer-motion';
import {

import {
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Globe
  Brain
  Rocket
  CheckCircle;
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


} from 'lucide-react';

interface EnhancedHero2026Props {;
  contactInfo: {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Brain,
<<<<<<< HEAD
<<<<<<< HEAD
  Rocket,;
  CheckCircle,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Rocket,;
  CheckCircle,;


} from 'lucide-react';
interface EnhancedHero2026Props {
  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  serviceStats: {;
=======
  Rocket,;
  CheckCircle,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';

interface EnhancedHero2026Props {
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string;
<<<<<<< HEAD
<<<<<<< HEAD
  }

  serviceStats: {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  };
  serviceStats: {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    totalServices: number;
    aiServices: number;
    emergingTech: number;
    itSolutions: number;
    microSaas: number;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        stagger_children: 0.2,
      },
    },  }        stagger_children: 0.2;

<<<<<<< HEAD
<<<<<<< HEAD
        stagger_children: 0.2,
      },
    },  }        stagger_children: 0.2;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }
  }
;
  const item_variants = {
    hidden: { coordinate_y: 30, opacity: 0 },
    visible: {
      coordinate_y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
<<<<<<< HEAD
        ease: 'ease_out' as const,
      },
    },  }        ease: "ease_out" as const;
=======

        ease: 'ease_out' as const,
      },
    },  }        ease: "ease_out" as const;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      }
    }
  }
        staggerChildren: 0.2,
      },
    },  }        ease: "ease_out" as const;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
  }
;
  const stats_variants = {
    hidden: { scale: 0.8, opacity: 0 },
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    revolutionaryServices: number;
  }
export default function EnhancedHero2026({
  contactInfo
  serviceStats
}: EnhancedHero2026Props) {  const containerVariants = {export default function EnhancedHero2026({ contactInfo, serviceStats }: EnhancedHero2026Props) {
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.2
      }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        staggerChildren: 0.2,
      },;
    },  };        staggerChildren: 0.2
      }
    }
  }
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        staggerChildren: 0.2,
      },
    },  };

  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function EnhancedHero2026(): any ({;
  contactInfo,;
  serviceStats,;
}: EnhancedHero2026Props) {  const containerVariants = {export default function EnhancedHero2026(): any ({ contactInfo, serviceStats }: EnhancedHero2026Props) {;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.2,;
      },;
    },  };        staggerChildren: 0 && 0.2;
      }
    }
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {;
    hidden: { y: 30, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.8,;
        ease: 'easeOut' as const,;
      },;
    },  };        ease: "easeOut" as const;
      }
    }
  };
  const statsVariants = {;
    hidden: { scale: 0 && 0.8, opacity: 0 },;
    visible: {;
      scale: 1,;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut' as const,;
      },;
    },;
  };
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
      {/* Enhanced Background Elements */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Elements */}
      <div className='absolute inset-0 pointer-events-none'>;
        {Array && Array.from({ length: 20 }).map((_, i) => (;
          <motion&& motion.div
        duration: 0.6,
        ease: 'ease_out' as const,
      },
    },
  }
;
  return (
    <section className='relative min - h-screen flex items - center justify - center overflow - hidden'>;
      {/* Enhanced Background Elements */}
      <div className='absolute inset - 0 bg - gradient - to - br from - slate - 900 via - purple - 900 / 20 to - slate - 900' />;
      <div className='absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (120, 119, 198, 0.4), transparent_50%)]' />;
      <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (120, 119, 198, 0.4), transparent_50%)]' />;
      {/* Floating Elements */}
      <div className='absolute inset - 0 pointer - events - none'>;
        {Array.from ({ length: 20 }).map ((_, i) => (
          <motion.div;
            key={i}
<<<<<<< HEAD
            className='absolute w - 2 h - 2 bg - cyan - 400 / 30 rounded - full';
            style={{

<<<<<<< HEAD
=======

              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,


=======
            className='absolute w-2 h-2 bg-cyan-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0.3, 0.8, 0.3]
              scale: [1, 1.5, 1],            }}
            transition={{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],
              scale: [1, 1 && 1.5, 1],            }}
            transition={{
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math && Math.random() * 2,            }}  }
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      {/* Enhanced Background Elements */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">;
        {Array && Array.from({ length: 20 }).map((_, i) => (;
          <motion&& motion.div
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random () * 2,            }}  }
;
  return (
    <section className="relative min - h-screen flex items - center justify - center overflow - hidden">;
      {/* Enhanced Background Elements */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 900 via - purple - 900 / 20 to - slate - 900" />;
      <div className="absolute inset - 0 bg-[radial - gradient (circle_at_20%_80%, rgba (120, 119, 198, 0.4), transparent_50%)]" />;
      <div className="absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (120, 119, 198, 0.4), transparent_50%)]" />;
      {/* Floating Elements */}
      <div className="absolute inset - 0 pointer - events - none">;
        {Array.from ({ length: 20 }).map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 2 h - 2 bg - cyan - 400 / 30 rounded - full";
            style={{
<<<<<<< HEAD
<<<<<<< HEAD
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`}}
            animate={{
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math && Math.random() * 2,              ease: "easeInOut",
              delay: Math && Math.random() * 2
              y: [0, -30, 0];
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`}}
            animate={{
              coordinate_y: [0, -30, 0];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`}}

            animate={{


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.5, 1];

=======
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.5, 1];
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,            }}  };


<<<<<<< HEAD
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
<<<<<<< HEAD
      </div>;
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              ease: 'easeInOut'
              delay: Math.random() * 2,              ease: "easeInOut"
              delay: Math.random() * 2
            }}
              duration: 3 + Math.random() * 2,
              repeat: Infinity,

=======
=======
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
=======

            }}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          />

        ))}

      </div>;
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          variants={containerVariants}
          initial='hidden';
          animate='visible';
          className='space-y-8';
        >;
          {/* Main Headline */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion && motion.div variants={itemVariants} className='space-y-6'>;
            <div className='inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6'>;
              <Star className='w-5 h-5 text-yellow-400' />;
              <span className='text-cyan-400 font-semibold'>;
                2026 Innovation Leader;
              </span>;
              <TrendingUp className='w-5 h-5 text-green-400' />;
            </div>;
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight'>;
              <span className='bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                Future-Ready;
              </span>;
              <br />;
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>;
                Solutions;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
              Transform your business with our revolutionary AI, Quantum, and IT;
              infrastructure services.;
              <span className='text-cyan-400 font-semibold'>;

                {' '}
                1000+ cutting-edge solutions;
              </span>{' '}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              ease: 'easeInOut',
              delay: Math.random () * 2,              ease: "easeInOut",
              delay: Math.random () * 2;
            }}
          />))}
      </div>;
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          variants={container_variants}
          initial='hidden';
          animate='visible';
          className='space - y-8';
        >;
          {/* Main Headline */}
          <motion.div variants={item_variants} className='space - y-6'>;
            <div className='inline - flex items - center space - x-3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded - full px - 6 py - 3 mb - 6'>;
              <Star className='w - 5 h - 5 text - yellow - 400' />;
              <span className='text - cyan - 400 font - semibold'>;
                2026 Innovation Leader;
              </span>;
              <TrendingUp className='w - 5 h - 5 text - green - 400' />;
            </div>;
            <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold leading - tight'>;
              <span className='bg - gradient - to - r from - white via - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Future - Ready;
              </span>;
              <br />;
              <span className='bg - gradient - to - r from - purple - 400 via - pink - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                Solutions;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl lg:text - 3xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
              Transform your business with our revolutionary AI, Quantum, and IT;
              infrastructure services.;
              <span className='text - cyan - 400 font - semibold'>;
                {' '}
                1000+ cutting - edge solutions;
              </span>{' '}
              delivering unprecedented ROI.            </p>;
          </motion.div>;
          {/* Enhanced Stats Grid */}
          <motion.div;
            <p className="text - xl md:text - 2xl lg:text - 3xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services.;
              <span className="text - cyan - 400 font - semibold"> 1000+ cutting - edge solutions</span> delivering unprecedented ROI.;
          </motion.div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Enhanced Stats Grid */}
          <motion.div;
            className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 md:gap - 6 max - w-5xl mx - auto';
          >;
            {[;
              {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              delivering unprecedented ROI.            </p>;
          </motion && motion.div>;
          {/* Enhanced Stats Grid */}
          <motion&& motion.div            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. ;
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.;
          </motion && motion.div>;
          {/* Enhanced Stats Grid */}
          <motion&& motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto'>;
            {[;
              {;
                label: 'Total Services',;
                value: serviceStats && serviceStats.totalServices,;
                icon: Rocket,;
                color: 'from-blue-500 to-cyan-500',;
              },;
              {;
                label: 'AI Solutions',;
                value: serviceStats && serviceStats.aiServices,;
                icon: Brain,;
                color: 'from-purple-500 to-pink-500',;
              },;
              {;
                label: 'Emerging Tech',;
                value: serviceStats && serviceStats.emergingTech,;
                icon: TrendingUp,;
                color: 'from-green-500 to-emerald-500',;
              },;
              {;
                label: 'IT Infrastructure',;
                value: serviceStats && serviceStats.itSolutions,;
                icon: Globe,;
                color: 'from-orange-500 to-red-500',;
              },;
              {;
                label: 'Micro SaaS',;
                value: serviceStats && serviceStats.microSaas,;
                icon: Zap,;
                color: 'from-yellow-500 to-orange-500',;
              },;
              {;
                label: 'Revolutionary',;
                value: serviceStats && serviceStats.revolutionaryServices,;
                icon: Star,;
                color: 'from-pink-500 to-purple-500',;
              },            ].map((stat, index) => (              { label: 'Total Services', value: serviceStats && serviceStats.totalServices, icon: Rocket, color: 'from-blue-500 to-cyan-500' },;
              { label: 'AI Solutions', value: serviceStats && serviceStats.aiServices, icon: Brain, color: 'from-purple-500 to-pink-500' },;
              { label: 'Emerging Tech', value: serviceStats && serviceStats.emergingTech, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },;
              { label: 'IT Infrastructure', value: serviceStats && serviceStats.itSolutions, icon: Globe, color: 'from-orange-500 to-red-500' },;
              { label: 'Micro SaaS', value: serviceStats && serviceStats.microSaas, icon: Zap, color: 'from-yellow-500 to-orange-500' },;
              { label: 'Revolutionary', value: serviceStats && serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
              <motion&& motion.div
                key={stat && stat.label}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                variants={statsVariants}
                whileHover={{ scale: 1 && 1.05, y: -5 }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat && stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>;
                  <stat && stat.icon className='w-6 h-6 text-white' />;
                </div>;
                <div className='text-2xl md:text-3xl font-bold text-white mb-1'>;
                  {stat && stat.value.toLocaleString()}+;
                </div>;
                <div className='text-xs text-gray-400 leading-tight'>                  {stat && stat.label}              >;
                <div className={`w-12 h-12 bg-gradient-to-r ${stat && stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>;
                  <stat && stat.icon className="w-6 h-6 text-white" />;
                </div>;
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">;
                  {stat && stat.value.toLocaleString()}+;
                </div>;
                <div className="text-xs text-gray-400 leading-tight">;
                  {stat && stat.label}
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
          </motion && motion.div>;
          {/* Enhanced CTA Section */}
          <motion && motion.div variants={itemVariants} className='space-y-6'>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <Button
                href='/services'
                variant='primary'
                size='xl'
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-cyan-400 font-semibold">2026 Innovation Leader</span>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. 
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
            </p>
          </motion.div>
          {/* Enhanced Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { label: 'Total Services', value: serviceStats.totalServices, icon: Rocket, color: 'from-blue-500 to-cyan-500' },
              { label: 'AI Solutions', value: serviceStats.aiServices, icon: Brain, color: 'from-purple-500 to-pink-500' },
              { label: 'Emerging Tech', value: serviceStats.emergingTech, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
              { label: 'IT Infrastructure', value: serviceStats.itSolutions, icon: Globe, color: 'from-orange-500 to-red-500' },
              { label: 'Micro SaaS', value: serviceStats.microSaas, icon: Zap, color: 'from-yellow-500 to-orange-500' },
              { label: 'Revolutionary', value: serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
            ].map((stat, index) => (
}

export default function EnhancedHero2026(_{_contactInfo, _serviceStats}: EnhancedHero2026Props) {_const _containerVariants = {
    hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.2}
    }
  },

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  return (
    <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
      {/* Enhanced Background Elements */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900&quot; />
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]&quot; />
      <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)]&quot; />
      
      {/* Floating Elements */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-2 h-2 bg-cyan-400/30 rounded-full&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;,
        duration: 0.8
        ease: 'easeOut' as const
      }
    },  };        ease: "easeOut" as const
      }
    }
  }
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 }
    visible: {
      scale: 1
      opacity: 1
      transition: {
        duration: 0.6
        ease: 'easeOut' as const
      }
    }
  }
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)]' />
      {/* Floating Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-cyan-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0.3, 0.8, 0.3]
              scale: [1, 1.5, 1],            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              ease: 'easeInOut'
              delay: Math.random() * 2,            }}  }
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,            }}  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`}}
            animate={{
              y: [0, -30, 0];
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              ease: 'easeInOut'
              delay: Math.random() * 2,              ease: "easeInOut"
              delay: Math.random() * 2
            }}
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,            }}

            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,

            }}

              ease: 'easeInOut',
              delay: Math.random() * 2,              ease: "easeInOut",
              delay: Math.random() * 2
            }}

            }}

          />
        ))}
      </div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='space-y-8'
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6'>
              <Star className='w-5 h-5 text-yellow-400' />
              <span className='text-cyan-400 font-semibold'>
                2026 Innovation Leader
              </span>
              <TrendingUp className='w-5 h-5 text-green-400' />
            </div>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                Future-Ready
              </span>
              <br />
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>
                Solutions
              </span>
            </h1>
            <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              Transform your business with our revolutionary AI, Quantum, and IT
              infrastructure services.
              <span className='text-cyan-400 font-semibold'>
                {' '}
                1000+ cutting-edge solutions
              </span>{' '}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              delivering unprecedented ROI.            </p>
          </motion.div>
          {/* Enhanced Stats Grid */}
          <motion.div
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services.
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
          </motion.div>
          {/* Enhanced Stats Grid */}
          <motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto'
          >
            {[
              {
                label: 'Total Services'
                value: serviceStats.totalServices
                icon: Rocket
                color: 'from-blue-500 to-cyan-500'
              }
              {
                label: 'AI Solutions'
                value: serviceStats.aiServices
                icon: Brain
                color: 'from-purple-500 to-pink-500'
              }
              {
                label: 'Emerging Tech'
                value: serviceStats.emergingTech
                icon: TrendingUp
                color: 'from-green-500 to-emerald-500'
              }
              {
                label: 'IT Infrastructure'
                value: serviceStats.itSolutions
                icon: Globe
                color: 'from-orange-500 to-red-500'
              }
              {
                label: 'Micro SaaS'
                value: serviceStats.microSaas
                icon: Zap
                color: 'from-yellow-500 to-orange-500'
              }
              {
                label: 'Revolutionary'
                value: serviceStats.revolutionaryServices
                icon: Star
                color: 'from-pink-500 to-purple-500'
              },            ].map((stat, index) => (              { label: 'Total Services', value: serviceStats.totalServices, icon: Rocket, color: 'from-blue-500 to-cyan-500' }
              { label: 'AI Solutions', value: serviceStats.aiServices, icon: Brain, color: 'from-purple-500 to-pink-500' }
              { label: 'Emerging Tech', value: serviceStats.emergingTech, icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
              { label: 'IT Infrastructure', value: serviceStats.itSolutions, icon: Globe, color: 'from-orange-500 to-red-500' }
              { label: 'Micro SaaS', value: serviceStats.microSaas, icon: Zap, color: 'from-yellow-500 to-orange-500' }

<<<<<<< HEAD
              { label: 'Revolutionary', value: serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
              <motion.div
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
                <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                  {stat.value.toLocaleString()}+
                </div>
                <div className='text-xs text-gray-400 leading-tight'>                  {stat.label}              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {stat.label}

          {/* Enhanced Stats Grid */}

                  {stat.label}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              ease: 'easeInOut',
              delay: Math.random () * 2,              ease: "easeInOut",
              delay: Math.random () * 2;
            }}
          />))}
      </div>;
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
          variants={container_variants}
          initial='hidden';
          animate='visible';
          className='space - y-8';
        >;
          {/* Main Headline */}
          <motion.div variants={item_variants} className='space - y-6'>;
            <div className='inline - flex items - center space - x-3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded - full px - 6 py - 3 mb - 6'>;
              <Star className='w - 5 h - 5 text - yellow - 400' />;
              <span className='text - cyan - 400 font - semibold'>;
                2026 Innovation Leader;
              </span>;
              <TrendingUp className='w - 5 h - 5 text - green - 400' />;
            </div>;
            <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold leading - tight'>;
              <span className='bg - gradient - to - r from - white via - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Future - Ready;
              </span>;
              <br />;
              <span className='bg - gradient - to - r from - purple - 400 via - pink - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                Solutions;
              </span>;
            </h1>;
            <p className='text - xl md:text - 2xl lg:text - 3xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
              Transform your business with our revolutionary AI, Quantum, and IT;
              infrastructure services.;
              <span className='text - cyan - 400 font - semibold'>;
                {' '}
                1000+ cutting - edge solutions;
              </span>{' '}
              delivering unprecedented ROI.            </p>;
          </motion.div>;
          {/* Enhanced Stats Grid */}
          <motion.div;
            <p className="text - xl md:text - 2xl lg:text - 3xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services.;
              <span className="text - cyan - 400 font - semibold"> 1000+ cutting - edge solutions</span> delivering unprecedented ROI.;
          </motion.div>;

          {/* Enhanced Stats Grid */}
          <motion.div;
            className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 md:gap - 6 max - w-5xl mx - auto';
          >;
            {[;
              {

              delivering unprecedented ROI.            </p>;
          </motion && motion.div>;
          {/* Enhanced Stats Grid */}
          <motion&& motion.div            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. ;
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.;
          </motion && motion.div>;
          {/* Enhanced Stats Grid */}
          <motion&& motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto'>;
            {[;
              {;
                label: 'Total Services',;
                value: serviceStats && serviceStats.totalServices,;
                icon: Rocket,;
                color: 'from-blue-500 to-cyan-500',;
              },;
              {;
                label: 'AI Solutions',;
                value: serviceStats && serviceStats.aiServices,;
                icon: Brain,;
                color: 'from-purple-500 to-pink-500',;
              },;
              {;
                label: 'Emerging Tech',;
                value: serviceStats && serviceStats.emergingTech,;
                icon: TrendingUp,;
                color: 'from-green-500 to-emerald-500',;
              },;
              {;
                label: 'IT Infrastructure',;
                value: serviceStats && serviceStats.itSolutions,;
                icon: Globe,;
                color: 'from-orange-500 to-red-500',;
              },;
              {;
                label: 'Micro SaaS',;
                value: serviceStats && serviceStats.microSaas,;
                icon: Zap,;
                color: 'from-yellow-500 to-orange-500',;
              },;
              {;
                label: 'Revolutionary',;
                value: serviceStats && serviceStats.revolutionaryServices,;
                icon: Star,;
                color: 'from-pink-500 to-purple-500',;
              },            ].map((stat, index) => (              { label: 'Total Services', value: serviceStats && serviceStats.totalServices, icon: Rocket, color: 'from-blue-500 to-cyan-500' },;
              { label: 'AI Solutions', value: serviceStats && serviceStats.aiServices, icon: Brain, color: 'from-purple-500 to-pink-500' },;
              { label: 'Emerging Tech', value: serviceStats && serviceStats.emergingTech, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },;
              { label: 'IT Infrastructure', value: serviceStats && serviceStats.itSolutions, icon: Globe, color: 'from-orange-500 to-red-500' },;
              { label: 'Micro SaaS', value: serviceStats && serviceStats.microSaas, icon: Zap, color: 'from-yellow-500 to-orange-500' },;
              { label: 'Revolutionary', value: serviceStats && serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
              <motion&& motion.div
                key={stat && stat.label}

                variants={statsVariants}
                whileHover={{ scale: 1 && 1.05, y: -5 }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat && stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>;
                  <stat && stat.icon className='w-6 h-6 text-white' />;
                </div>;
                <div className='text-2xl md:text-3xl font-bold text-white mb-1'>;
                  {stat && stat.value.toLocaleString()}+;
                </div>;
                <div className='text-xs text-gray-400 leading-tight'>                  {stat && stat.label}              >;
                <div className={`w-12 h-12 bg-gradient-to-r ${stat && stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>;
                  <stat && stat.icon className="w-6 h-6 text-white" />;
                </div>;
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">;
                  {stat && stat.value.toLocaleString()}+;
                </div>;
                <div className="text-xs text-gray-400 leading-tight">;
                  {stat && stat.label}
                </div>;
              </motion && motion.div>;
            ))}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                href='/services'
                variant='primary'
                size='xl'
                className='text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/30 border-0 group'
              >              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 transition-transform" />
                  Explore All Services
                </span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Enhanced CTA Section */}

              
              <Button 
                href="/contact" 

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <Button 
                href="/contact" 

<<<<<<< HEAD
<<<<<<< HEAD
              <Button 
                href="/contact" 
              <Button
                href="/contact"
              <Button 
                href="/contact" 
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl"
              >
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/30 border-0 group'>              >;
                <span className="flex items-center">;
                  <Rocket className="mr-3 w-7 h-7 group-hover:rotate-12 transition-transform" />;
                  Explore All Services;
                </span>;
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />;
              </Button>;
              <Button
                href="/contact" 
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl">;
                <span className='flex items-center'>;
                  <Rocket className='mr-3 w-7 h-7 group-hover:rotate-12 transition-transform' />;
                  Explore All Services;
                </span>;
                <ArrowRight className='ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform' />;
              </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                href='/contact'
                variant='secondary'
                size='xl'
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="flex items-center">
=======

                <span className="flex items-center">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                <span className="flex items-center">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Shield className="mr-3 w-7 h-7" />
                  Get Expert Consultation
                </span>
              </Button>
            </div>
            {/* Trust Indicators */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>5000+ Happy Customers</span>
              </div>                <span>5000+ Happy Customers</span>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5000+ Happy Customers</span>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>

                className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'>;
<<<<<<< HEAD
<<<<<<< HEAD
className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span className='flex items-center'>;
                  <Shield className='mr-3 w-7 h-7' />                  Get Expert Consultation                <span className="flex items-center">;
                  <Shield className="mr-3 w-7 h-7" />;
                  Get Expert Consultation;
                </span>;
              </Button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Trust Indicators */}
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400'>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />;
                <span>5000+ Happy Customers</span>;
              </div>                <span>5000+ Happy Customers</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <CheckCircle className="w-5 h-5 text-green-400" />;
                <span>99 && 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />;
                <span>99 && 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>24/7 Expert Support</span>              <div className="flex items-center space-x-2">;
                <CheckCircle className="w-5 h-5 text-green-400" />;
                <span>24/7 Expert Support</span>;
              </div>;
            </div>;
          </motion && motion.div>;


<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Contact Information */}

          <motion.div 
            variants={itemVariants}

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'
          >
            <div className='text-center mb-4'>
              <h3 className='text-lg font-semibold text-white mb-2'>
                Ready to Get Started?
              </h3>
              <p className='text-gray-300 text-sm'>
                Contact our team of experts today
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm'>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Phone</div>
                <div className='text-white'>{contactInfo.mobile}</div>
              </div>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Email</div>
                <div className='text-white'>{contactInfo.email}</div>
              </div>
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Website</div>
                <div className='text-white'>{contactInfo.website}</div>              </div>            variants={itemVariants}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-gray-300 text-sm">Contact our team of experts today</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Phone</div>
                <div className="text-white">{contactInfo.mobile}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Email</div>
                <div className="text-white">{contactInfo.email}</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Website</div>
                <div className="text-white">{contactInfo.website}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'>;
=======

            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'>;
            <div className='text-center mb-4'>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                Ready to Get Started?;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Contact our team of experts today;
              </p>;
            </div>;
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm'>;
              <div className='text-center'>;
                <div className='text-cyan-400 font-medium'>Phone</div>;
                <div className='text-white'>{contactInfo && contactInfo.mobile}</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-cyan-400 font-medium'>Email</div>;
                <div className='text-white'>{contactInfo && contactInfo.email}</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-cyan-400 font-medium'>Website</div>;
                <div className='text-white'>{contactInfo && contactInfo.website}</div>              </div>            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto";
          >;
            <div className="text-center mb-4">;
              <h3 className="text-lg font-semibold text-white mb-2">Ready to Get Started?</h3>;
              <p className="text-gray-300 text-sm">Contact our team of experts today</p>;
            </div>;
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">;
              <div className="text-center">;
                <div className="text-cyan-400 font-medium">Phone</div>;
                <div className="text-white">{contactInfo && contactInfo.mobile}</div>;
              </div>;
              <div className="text-center">;
                <div className="text-cyan-400 font-medium">Email</div>;
                <div className="text-white">{contactInfo && contactInfo.email}</div>;
              </div>;
              <div className="text-center">;
                <div className="text-cyan-400 font-medium">Website</div>;
                <div className="text-white">{contactInfo && contactInfo.website}</div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );  );
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
);  )
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
}
          <motion.div variants={item_variants} className='space - y-6'>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Button;
                href='/services';
                variant='primary';
                size='xl';
                className='text - xl px - 12 py - 6 bg - gradient - to - r from - cyan - 500 to - purple - 600 hover:from - cyan - 600 hover:to - purple - 700 shadow - 2xl hover:shadow - purple - 500 / 30 border - 0 group';
              >              >;
                <span className="flex items - center">;
                  <Rocket className="mr - 3 w - 7 h - 7 group - hover:rotate - 12 transition - transform" />;
                  Explore All Services;
                </span>;
                <ArrowRight className="ml - 3 w - 6 h - 6 group - hover:translate - x-1 transition - transform" />;
              </Button>;
              <Button;
                href="/contact";
                variant="secondary";
                size="xl";
                className="text - xl px - 12 py - 6 bg - gradient - to - r from - slate - 800 to - slate - 700 hover:from - slate - 700 hover:to - slate - 600 border - slate - 600 hover:border - slate - 500 shadow - 2xl";
              >;
                <span className='flex items - center'>;
                  <Rocket className='mr - 3 w - 7 h - 7 group - hover:rotate - 12 transition - transform' />;
                  Explore All Services;
                </span>;
                <ArrowRight className='ml - 3 w - 6 h - 6 group - hover:translate - x-1 transition - transform' />;
              </Button>;
              <Button;
                href='/contact';
                variant='secondary';
                size='xl';
                className='text - xl px - 12 py - 6 bg - gradient - to - r from - slate - 800 to - slate - 700 hover:from - slate - 700 hover:to - slate - 600 border - slate - 600 hover:border - slate - 500 shadow - 2xl';
              >;
                <span className='flex items - center'>;
                  <Shield className='mr - 3 w - 7 h - 7' />                  Get Expert Consultation                <span className="flex items - center">;
                  <Shield className="mr - 3 w - 7 h - 7" />;
                  Get Expert Consultation;
                </span>;
              </Button>;
            </div>;
            {/* Trust Indicators */}
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-8 text - sm text - gray - 400'>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                <span > 5000+ Happy Customers</span>;
              </div>                <span > 5000+ Happy Customers</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                <span > 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                <span > 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > 24 / 7 Expert Support</span>              <div className="flex items - center space - x-2">;
                <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                <span > 24 / 7 Expert Support</span>;
              </div>;
            </div>;
          </motion.div>;
          {/* Contact Information */}
          <motion.div;
            variants={item_variants}
            className='bg - gradient - to - r from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 6 max - w-2xl mx - auto';
          >;
            <div className='text - center mb - 4'>;
              <h3 className='text - lg font - semibold text - white mb - 2'>;
                Ready to Get Started?;
              </h3>;
              <p className='text - gray - 300 text - sm'>;
                Contact our team of experts today;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 sm:grid - cols - 3 gap - 4 text - sm'>;
              <div className='text - center'>;
                <div className='text - cyan - 400 font - medium'>Phone</div>;
                <div className='text - white'>{contact_info.mobile}</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - cyan - 400 font - medium'>Email</div>;
                <div className='text - white'>{contact_info.email}</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - cyan - 400 font - medium'>Website</div>;
                <div className='text - white'>{contact_info.website}</div>              </div>            variants={item_variants}
            className="bg - gradient - to - r from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 6 max - w-2xl mx - auto";
          >;
            <div className="text - center mb - 4">;
              <h3 className="text - lg font - semibold text - white mb - 2">Ready to Get Started?</h3>;
              <p className="text - gray - 300 text - sm">Contact our team of experts today</p>;
            </div>;
            <div className="grid grid - cols - 1 sm:grid - cols - 3 gap - 4 text - sm">;
              <div className="text - center">;
                <div className="text - cyan - 400 font - medium">Phone</div>;
                <div className="text - white">{contact_info.mobile}</div>;
              </div>;
              <div className="text - center">;
                <div className="text - cyan - 400 font - medium">Email</div>;
                <div className="text - white">{contact_info.email}</div>;
              </div>;
              <div className="text - center">;
                <div className="text - cyan - 400 font - medium">Website</div>;
                <div className="text - white">{contact_info.website}</div>;
              </div>;
            </div>;
          </motion.div>;
        </motion.div>;
      </div>;
    </section>));
}
<<<<<<< HEAD
<<<<<<< HEAD

  );

);  )
}
  );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
