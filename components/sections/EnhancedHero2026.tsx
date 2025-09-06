<<<<<<< HEAD

=======
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
import {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Globe
  Brain
  Rocket
  CheckCircle;
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
} from 'lucide-react';

interface EnhancedHero2026Props {;
  contactInfo: {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Brain,

<<<<<<< HEAD
<<<<<<< HEAD
=======
  Rocket,;
  CheckCircle,;
} from 'lucide-react';
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
} from 'lucide-react';
interface EnhancedHero2026Props {
  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website: string
};
  serviceStats: {;
  Rocket,;
  CheckCircle,;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'lucide-react';

    mobile: string;
    email: string;
    address: string;

    website: string;
<<<<<<< HEAD

  serviceStats: {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    totalServices: number;
    aiServices: number;
    emergingTech: number;
    itSolutions: number;
    microSaas: number;
<<<<<<< HEAD
=======



    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
        staggerChildren: 0.2,
      },;
    },  };        staggerChildren: 0.2
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }
    }
  }

        staggerChildren: 0.2,
      },
    },  }        ease: "ease_out" as const;

      }
    }
  }
;
  const stats_variants = {
    hidden: { scale: 0.8, opacity: 0 },
<<<<<<< HEAD
=======
    },  };        staggerChildren: 0.2
      }
    }
  }
=======
        staggerChildren: 0.2,
      },
    },  };

  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    visible: {
      y: 0
      opacity: 1
      transition: {
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
    },
};
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
      {/* Enhanced Background Elements */}
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
      {/* Enhanced Background Elements */}
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
    <section className="relative min - h-screen flex items - center justify-center overflow-hidden">;
      {/* Enhanced Background Elements */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 900 via - purple - 900 / 20 to-slate-900" />;
      <div className="absolute inset-0 bg-[radial-gradient (circle_at_20%_80%, rgba (120, 119, 198, 0.4), transparent_50%)]" />;
      <div className="absolute inset-0 bg-[radial-gradient (circle_at_80%_20%, rgba (120, 119, 198, 0.4), transparent_50%)]" />;
      {/* Floating Elements */}
      <div className="absolute inset - 0 pointer-events-none">;
        {Array.from ({ length: 20 }).map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 2 h - 2 bg - cyan-400 / 30 rounded-full";
            style={{

<<<<<<< HEAD
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`}}

            animate={{


              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.5, 1];
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

              ease: 'easeInOut',
              delay: Math.random() * 2,              ease: "easeInOut",
              delay: Math.random() * 2
            }}

            }}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          />

            }}
          />;
        ))}
          variants={containerVariants}
          initial='hidden';
          animate='visible';
          className='space-y-8';
        >;
          {/* Main Headline */}
          {/* Enhanced Stats Grid */}
          <motion.div;
            className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 4 md:gap - 6 max - w-5xl mx - auto';
          >;
            {[;
              {
                variants={statsVariants}
                whileHover={{ scale: 1 && 1.05, y: -5 }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                <div
<<<<<<< HEAD
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


                  {stat.label}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                </div>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
=======
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

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {/* Enhanced CTA Section */}

              
              <Button 
                href="/contact" 

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Button 
                href="/contact" 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                variant="secondary"
                size="xl"
                className="text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl"
              >
<<<<<<< HEAD

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


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Button
                href='/contact'
                variant='secondary'
                size='xl'
                  <Shield className="mr-3 w-7 h-7" />
                  Get Expert Consultation
                </span>
              </Button>
            </div>
<<<<<<< HEAD

              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />

=======
            {/* Trust Indicators */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          {/* Contact Information */}

          <motion.div 
            variants={itemVariants}
            className='bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto'
=======
                className='text-xl px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border-slate-600 hover:border-slate-500 shadow-2xl'>;
                <span className='flex items-center'>;
                  <Shield className='mr-3 w-7 h-7' />                  Get Expert Consultation                <span className="flex items-center">;
                  <Shield className="mr-3 w-7 h-7" />;
                  Get Expert Consultation;
                </span>;
              </Button>;
            </div>;

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
          {/* Contact Information */}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-2xl mx-auto"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
              <div className='text-center'>
                <div className='text-cyan-400 font-medium'>Website</div>
                <div className='text-white'>{contactInfo.website}</div>              </div>            variants={itemVariants}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

  );
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              <div className="text-center">
                <div className="text-cyan-400 font-medium">Website</div>
                <div className="text-white">{contactInfo.website}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
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
                <span className="flex items-center">;
                  <Rocket className="mr - 3 w - 7 h - 7 group - hover:rotate-12 transition-transform" />;
                  Explore All Services;
                </span>;
                <ArrowRight className="ml - 3 w - 6 h - 6 group - hover:translate-x-1 transition-transform" />;
              </Button>;
              <Button;
                href="/contact";
                variant="secondary";
                size="xl";
                className="text - xl px - 12 py - 6 bg - gradient - to - r from - slate - 800 to - slate - 700 hover:from - slate - 700 hover:to - slate - 600 border - slate - 600 hover:border - slate-500 shadow-2xl";
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
                  <Shield className='mr - 3 w - 7 h - 7' />                  Get Expert Consultation                <span className="flex items-center">;
                  <Shield className="mr - 3 w-7 h-7" />;
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
              <div className="flex items-center space-x-2">;
                <CheckCircle className="w - 5 h - 5 text-green-400" />;
                <span > 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                <span > 99.9% Uptime Guarantee</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > 24 / 7 Expert Support</span>              <div className="flex items-center space-x-2">;
                <CheckCircle className="w - 5 h - 5 text-green-400" />;
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
            className="bg - gradient - to - r from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - slate - 700 / 50 rounded - 2xl p - 6 max-w-2xl mx-auto";
          >;
            <div className="text-center mb-4">;
              <h3 className="text - lg font - semibold text-white mb-2">Ready to Get Started?</h3>;
              <p className="text - gray-300 text-sm">Contact our team of experts today</p>;
            </div>;
            <div className="grid grid - cols - 1 sm:grid - cols - 3 gap-4 text-sm">;
              <div className="text-center">;
                <div className="text - cyan-400 font-medium">Phone</div>;
                <div className="text-white">{contact_info.mobile}</div>;
              </div>;
              <div className="text-center">;
                <div className="text - cyan-400 font-medium">Email</div>;
                <div className="text-white">{contact_info.email}</div>;
              </div>;
              <div className="text-center">;
                <div className="text - cyan-400 font-medium">Website</div>;
                <div className="text-white">{contact_info.website}</div>;
              </div>;
            </div>;
          </motion.div>;
        </motion.div>;
      </div>;
    </section>));
}

  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
