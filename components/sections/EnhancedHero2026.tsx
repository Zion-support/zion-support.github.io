<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
import React from 'react';

import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
import React from 'react';

import { motion } from 'framer-motion';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

} from 'lucide-react';

interface EnhancedHero2026Props {;
  contactInfo: {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Brain,
<<<<<<< HEAD

  Rocket,;
  CheckCircle,;


=======
<<<<<<< HEAD
  Rocket,
  CheckCircle,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
} from 'lucide-react';

interface EnhancedHero2026Props {
  contactInfo: {
    mobile: string;
    email: string;
    address: string;

    website: string;
<<<<<<< HEAD

  };
  serviceStats: {;

=======
  }

  serviceStats: {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    totalServices: number;
    aiServices: number;
    emergingTech: number;
    itSolutions: number;
    microSaas: number;
<<<<<<< HEAD



=======
<<<<<<< HEAD
import { ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Rocket, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
interface EnhancedHero2026Props {
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
},
    serviceStats: {
    totalServices: number,
    aiServices: number,
    emergingTech: number,
    itSolutions: number,
    microSaas: number,
    revolutionaryServices: number
  }
}
export default function EnhancedHero2026({ contactInfo, serviceStats }: EnhancedHero2026Props) {
  const containerVariants = {
  }
  service_stats: {
    total_services: number;
    ai_services: number;
    emerging_tech: number;
    it_solutions: number;
    micro_saas: number;
    revolutionary_services: number;
  }
;
export default /**
 * EnhancedHero2026 - Function description
 */
function EnhancedHero2026() {  const container_variants = {export default /**
 * EnhancedHero2026 - Function description
 */
function EnhancedHero2026() {
  const container_variants = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD

<<<<<<< HEAD
    },  };        staggerChildren: 0.2
      }
    }
  }

        staggerChildren: 0.2,
=======
        stagger_children: 0.2,
      },
    },  }        stagger_children: 0.2;

=======
        stagger_children: 0.2,
      },
    },  }        stagger_children: 0.2;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      },
    },  }        ease: "ease_out" as const;

<<<<<<< HEAD
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }
=======
=======
        ease: 'ease_out' as const,
      },
    },  }        ease: "ease_out" as const;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
  }
;
  const stats_variants = {
    hidden: { scale: 0.8, opacity: 0 },
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

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
        staggerChildren: 0.2
      }
        staggerChildren: 0.2,
      },;
    },  };        staggerChildren: 0.2
      }
    }
  }
        staggerChildren: 0.2,
      },
    },  };

  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    visible: {
      y: 0
      opacity: 1
      transition: {
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;


=======
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]' />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Floating Elements */}
<<<<<<< HEAD
      <div className='absolute inset-0 pointer-events-none'>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-cyan-400/30 rounded-full'
            style={{

=======
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
            className='absolute w - 2 h - 2 bg - cyan - 400 / 30 rounded - full';
            style={{
<<<<<<< HEAD


              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0.3, 0.8, 0.3]
              scale: [1, 1.5, 1],            }}
            transition={{
<<<<<<< HEAD

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
              duration: 3 + Math.random() * 2,
              repeat: Infinity,

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      {/* Enhanced Background Elements */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0 && 0.4),transparent_50%)]" />;


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`}}

            animate={{


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.5, 1];
=======

              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,            }}  };


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          />

        ))}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          variants={containerVariants}
          initial='hidden';
          animate='visible';
          className='space-y-8';
        >;
          {/* Main Headline */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

                {' '}
                1000+ cutting-edge solutions;
              </span>{' '}
<<<<<<< HEAD
              delivering unprecedented ROI.            </p>
          </motion.div>
          {/* Enhanced Stats Grid */}
          <motion.div
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services.
              <span className="text-cyan-400 font-semibold"> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
          </motion.div>

=======

=======
                {' '}
                1000+ cutting-edge solutions;
              </span>{' '}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Enhanced Stats Grid */}
          <motion.div;
            className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 md:gap - 6 max - w-5xl mx - auto';
          >;
            {[;
              {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </div>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD

          {/* Enhanced CTA Section */}
=======
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD

      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        <motion.div
          variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
          className=&quot;space-y-8&quot;
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className=&quot;space-y-6&quot;>
            <div className=&quot;inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6&quot;>
              <Star className=&quot;w-5 h-5 text-yellow-400&quot; />
              <span className=&quot;text-cyan-400 font-semibold&quot;>2026 Innovation Leader</span>
              <TrendingUp className=&quot;w-5 h-5 text-green-400&quot; />
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl lg:text-8xl font-bold leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Future-Ready
              </span>
              <br />
              <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                Solutions
              </span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
              Transform your business with our revolutionary AI, Quantum, and IT infrastructure services. 
              <span className=&quot;text-cyan-400 font-semibold&quot;> 1000+ cutting-edge solutions</span> delivering unprecedented ROI.
            </p>
          </motion.div>

          {_/* Enhanced Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto&quot;
          >
            {_[
              { label: 'Total Services', _value: serviceStats.totalServices, _icon: Rocket, _color: 'from-blue-500 to-cyan-500'},
              {_label: 'AI Solutions', _value: serviceStats.aiServices, _icon: Brain, _color: 'from-purple-500 to-pink-500'},
              {_label: 'Emerging Tech', _value: serviceStats.emergingTech, _icon: TrendingUp, _color: 'from-green-500 to-emerald-500'},
              {_label: 'IT Infrastructure', _value: serviceStats.itSolutions, _icon: Globe, _color: 'from-orange-500 to-red-500'},
              {_label: 'Micro SaaS', _value: serviceStats.microSaas, _icon: Zap, _color: 'from-yellow-500 to-orange-500'},
              {_label: 'Revolutionary', _value: serviceStats.revolutionaryServices, _icon: Star, _color: 'from-pink-500 to-purple-500'}
            ].map(_(stat, _index) => (

=======
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

              { label: 'Revolutionary', value: serviceStats.revolutionaryServices, icon: Star, color: 'from-pink-500 to-purple-500' }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
<<<<<<< HEAD
className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-xs text-gray-400 leading-tight">
<<<<<<< HEAD
                label: 'Total Services',
                value: service_stats.total_services,
                icon: Rocket,
                color: 'from - blue - 500 to - cyan - 500',
              },
              {
                label: 'AI Solutions',
                value: service_stats.ai_services,
                icon: Brain,
                color: 'from - purple - 500 to - pink - 500',
              },
              {
                label: 'Emerging Tech',
                value: service_stats.emerging_tech,
                icon: TrendingUp,
                color: 'from - green - 500 to - emerald - 500',
              },
              {
                label: 'IT Infrastructure',
                value: service_stats.it_solutions,
                icon: Globe,
                color: 'from - orange - 500 to - red - 500',
              },
              {
                label: 'Micro SaaS',
                value: service_stats.micro_saas,
                icon: Zap,
                color: 'from - yellow - 500 to - orange - 500',
              },
              {
                label: 'Revolutionary',
                value: service_stats.revolutionary_services,
                icon: Star,
                color: 'from - pink - 500 to - purple - 500',
              },            ].map ((stat, index) => (              { label: 'Total Services', value: service_stats.total_services, icon: Rocket, color: 'from - blue - 500 to - cyan - 500' },
              { label: 'AI Solutions', value: service_stats.ai_services, icon: Brain, color: 'from - purple - 500 to - pink - 500' },
              { label: 'Emerging Tech', value: service_stats.emerging_tech, icon: TrendingUp, color: 'from - green - 500 to - emerald - 500' },
              { label: 'IT Infrastructure', value: service_stats.it_solutions, icon: Globe, color: 'from - orange - 500 to - red - 500' },
              { label: 'Micro SaaS', value: service_stats.micro_saas, icon: Zap, color: 'from - yellow - 500 to - orange - 500' },
              { label: 'Revolutionary', value: service_stats.revolutionary_services, icon: Star, color: 'from - pink - 500 to - purple - 500' }
              <motion.div;
                key={stat.label}
                variants={stats_variants}
                while_hover={{ scale: 1.05, coordinate_y: -5 }}
                className='group bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 4 hover:border - slate - 600 / 50 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                <div;
                  className={`w - 12 h - 12 bg - gradient - to - r ${stat.color} rounded - xl flex items - center justify - center mx - auto mb - 3 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <stat.icon className='w - 6 h - 6 text - white' />;
                </div>;
                <div className='text - 2xl md:text - 3xl font - bold text - white mb - 1'>;
                  {stat.value.toLocaleString ()}+;
                </div>;
                <div className='text - xs text - gray - 400 leading - tight'>                  {stat.label}              >;
                <div className={`w - 12 h - 12 bg - gradient - to - r ${stat.color} rounded - xl flex items - center justify - center mx - auto mb - 3 group - hover:scale - 110 transition - transform duration - 300`}>;
                  <stat.icon className="w - 6 h - 6 text - white" />;
                </div>;
                <div className="text - 2xl md:text - 3xl font - bold text - white mb - 1">;
                  {stat.value.toLocaleString ()}+;
                </div>;
                <div className="text - xs text - gray - 400 leading - tight">;
                  {stat.label}
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* Enhanced CTA Section */}
              <Button 
                href="/contact" 
=======
                  {stat.label}

          {/* Enhanced Stats Grid */}

                  {stat.label}

                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
<<<<<<< HEAD



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Enhanced CTA Section */}

              
              <Button 
                href="/contact" 

=======

              <Button 
                href="/contact" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <Button 
                href="/contact" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
              <Button
                href="/contact"
              <Button 
                href="/contact" 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl"
              >
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                href='/contact'
                variant='secondary'
                size='xl'
<<<<<<< HEAD

                <span className="flex items-center">

=======
                <span className="flex items-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Shield className="mr-3 w-7 h-7" />
                  Get Expert Consultation
                </span>
              </Button>
            </div>
<<<<<<< HEAD
            {/* Trust Indicators */}

=======
<<<<<<< HEAD
{/* Trust Indicators */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>5000+ Happy Customers</span>
<<<<<<< HEAD
=======
=======
            {/* Trust Indicators */}
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>5000+ Happy Customers</span>
              </div>                <span>5000+ Happy Customers</span>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

                className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'>;
=======
className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span className='flex items-center'>;
                  <Shield className='mr-3 w-7 h-7' />                  Get Expert Consultation                <span className="flex items-center">;
                  <Shield className="mr-3 w-7 h-7" />;
                  Get Expert Consultation;
                </span>;
              </Button>;
            </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Contact Information */}

          <motion.div 
            variants={itemVariants}

=======
          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'>;
=======
<<<<<<< HEAD
className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);  )
}
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
