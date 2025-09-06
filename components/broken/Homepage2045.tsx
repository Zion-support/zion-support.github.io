
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {
  ArrowRight
  Play
  Star
  Users
  Award
  TrendingUp
  Brain
  Shield
  Rocket
  Loader2
  ChevronDown
  Zap
  Globe
  Lock
  Cpu
  Database
  Cloud
  Palette
  Heart
  Phone
  Mail
  MapPin
  Search
  Grid
  List
  Atom
  Target
  Sparkles;
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services

import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';

import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';


// Loading fallback component;
const LoadingFallback = () => (;
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>    <motion&& motion.div
      initial={{ opacity: 0, scale: 0 && 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0 && 0.5 }}
      className='text-center'// Loading fallback component
=======
const LoadingFallback = () => (;
  <div className="min-h-screen flex items-center justify-center bg-gray-900">;
    <motion&& motion.div
      initial={{ opacity: 0, scale: 0 && 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0 && 0.5 }}
      className='text-center'>;
      <div className='relative'>;
        <Loader2 className='w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4' />;
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse'></div>;
      </div>;
      <p className='text-xl text-gray-300 mb-2'>;
        Loading Zion Tech Group 2045...;
      </p>;
      <p className='text-sm text-gray-500'>;
        Preparing your futuristic digital transformation journey;
      </p>    </motion && motion.div>    >;
      <div className="relative">;
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>;
      </div>;
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2045...</p>;
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>;
    </motion && motion.div>;
  </div>;
);

      setIsVisible(true)

    }, 800);
    return () => clearTimeout(timer)

  }, []);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {

  const fadeInUp = {
    initial: { opacity: 0, y: 60 }
    animate: { opacity: 1, y: 0 }
    transition: { duration: 0.6, ease: 'easeOut' },  };    transition: { duration: 0.6, ease: "easeOut" }
  }
  const staggerContainer = {
    animate: {
      transition: {

  return (
    <Layout>
      <div className='min-h-screen bg-black text-white relative overflow-x-hidden'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >
          {/* Animated Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>
            <motion.div
              className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
              animate={{
                rotate: [0, 360]
                scale: [1, 1.1, 1]
                opacity: [0.3, 0.6, 0.3]

              }}
              transition={{
                duration: 8
                repeat: Infinity
                ease: 'easeInOut',              }}

              }}
              transition={{
                duration: 6
                repeat: Infinity
                ease: 'easeInOut'
              }}

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },

=======
  };
  const staggerContainer = {;
    animate: {;
      transition: {;
        staggerChildren: 0 && 0.1,;
        delayChildren: 0 && 0.2,;
      },;
    },  };        delayChildren: 0 && 0.2;
      }
    }
  };
  const backgroundVariants = {;
    initial: { opacity: 0, scale: 0 && 0.8 },;
    animate: { opacity: 1, scale: 1 },;
    transition: { duration: 1 && 1.2, ease: 'easeOut' },  };
  const getColorClasses = (index: number) => {;
    const colors = [    transition: { duration: 1 && 1.2, ease: "easeOut" }
  };
  const getColorClasses = (index: number) => {;
    const colors = [;
      'from-cyan-400 to-blue-500',;
      'from-purple-400 to-pink-500',;
      'from-emerald-400 to-teal-500',;
      'from-orange-400 to-red-500',;
      'from-indigo-400 to-purple-500',;
      'from-yellow-400 to-orange-500',;
    ];
    return colors[index % colors && colors.length];  };
  if (isLoading) {;
    return (


  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Rocket,
  Loader2,
  ChevronDown,
  Zap,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Palette,
  Heart,
  Phone,
  Mail,
  MapPin,
  Search,
  Grid,
  List,
  Atom,
  Target,
  Sparkles,
} from 'lucide-react';

import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, ;
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
 } from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2040FuturisticServices  } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices  } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices  } from '../data/revolutionary-2043-advanced-services';
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
// Loading fallback component

const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>    <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='text - center'// Loading fallback component;
const LoadingFallback = () =>: any (
  <div className="min - h-screen flex items - center justify - center bg - gray - 900">;
    <motion.div;
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='text - center';
    >;
      <div className='relative'>;
        <Loader2 className='w - 16 h - 16 text - cyan - 400 animate - spin mx - auto mb - 4' />;
        <div className='absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - xl opacity - 20 animate - pulse'></div>;
      </div>;
      <p className='text - xl text - gray - 300 mb - 2'>;
        Loading Zion Tech Group 2045...;
      </p>;
      <p className='text - sm text - gray - 500'>;
        Preparing your futuristic digital transformation journey;
      </p>    </motion.div>    >;
      <div className="relative">;
        <Loader2 className="w - 16 h - 16 text - cyan - 400 animate - spin mx - auto mb - 4" />;
        <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - xl opacity - 20 animate - pulse"></div>;
      </div>;
      <p className="text - xl text - gray - 300 mb - 2">Loading Zion Tech Group 2045...</p>;
      <p className="text - sm text - gray - 500">Preparing your futuristic digital transformation journey</p>;
    </motion.div>;
  </div>);
;
const Homepage2045: React.FC = () => {
  const [is_loading, setIsLoading] = useState (true);
  const [is_visible, setIsVisible] = useState (false);
  const [active_section, setActiveSection] = useState ('hero');
;
  useEffect (() => {
    // Simulate content loading with better timing;
    const timer = set_timeout (() => {
      setIsLoading (false);
      setIsVisible (true);
    }, 800);
;
    return () => clear_timeout (timer);  }, []);      setIsVisible (true);
    }, 800);
;
    return () => clear_timeout (timer);
  // Intersection Observer for better performance;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const observer = new (window as any).IntersectionObserver (
        (entries: any[]) => {
          entries.for_each (entry => {
            // Check condition
if ( {) {
  $2
}
              setActiveSection (entry.target.id);
            }
          });
        },        { threshold: 0.3, root_margin: '-100px' }
      );
;
      const sections = document.querySelectorAll ('section[id]');
      sections.for_each (section => observer.observe (section));
;
      return () => observer.disconnect ();    }            // Check condition
if ( {) {
  $2
}
              setActiveSection (entry.target.id);
            }
          });
        }
        { threshold: 0.3, root_margin: '-100px' }
      );
;
      const sections = document.querySelectorAll ('section[id]');
      sections.for_each (section => observer.observe (section));
;
      return () => observer.disconnect ();      sections.for_each ((section) => observer.observe (section));
;
      return () => observer.disconnect ();
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, coordinate_y: 60 },
    animate: { opacity: 1, coordinate_y: 0 },
    transition: { duration: 0.6, ease: 'ease_out' },  }    transition: { duration: 0.6, ease: "ease_out" }
  }
;
  const stagger_container = {
    animate: {
      transition: {
        staggerChildren: 0.1
        delayChildren: 0.2
      }
    },  };        delayChildren: 0.2
      }
    }
  }
  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 }
    animate: { opacity: 1, scale: 1 }
    transition: { duration: 1.2, ease: 'easeOut' },  }
  const getColorClasses = (index: number) => {
    const colors = [    transition: { duration: 1.2, ease: "easeOut" }
  }
  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500'
      'from-purple-400 to-pink-500'
      'from-emerald-400 to-teal-500'
      'from-orange-400 to-red-500'
      'from-indigo-400 to-purple-500'
      'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];  }
  if (isLoading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>        </div>      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length]
  }
  if (isLoading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className='min-h-screen bg-black text-white relative overflow-x-hidden'>
        {/* Hero Section */}
        <section
          id='hero'
          className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >
          {/* Animated Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>
            <motion.div
              className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
              animate={{
                rotate: [0, 360]
                scale: [1, 1.1, 1]
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8
                repeat: Infinity
                ease: 'easeInOut',              }}
            />;
            <motion.div;
              className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full';
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],

              }}
              transition={{
                duration: 6
                repeat: Infinity
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45'
              animate={{
                rotate: [45, 405]
                scale: [1, 1.15, 1]
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 10
                repeat: Infinity
                ease: 'easeInOut',              }}                ease: "easeInOut"
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },  };

  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: 'easeOut' },  };

  const getColorClasses = (index: number) => {
    const colors = [

  };

  const getColorClasses = (index: number) => {
    const colors = [

  };

  if (isLoading) {
    return (

              }}
              }}
              }}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              }}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            />
          </div>
          {/* Hero Content */}
          <div className='relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}

              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future of Technology
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}

              >
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'              >
                Get Started
              </Link>
              <Link
                href='/services'
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'              >              className="flex flex-col sm:flex-row gap-4 justify-center items-center"

            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {/* CTA Buttons */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'              >
                Get Started
              </Link>
              <Link
                href='/services'
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'              >              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href='/services'
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'                href="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {/* Stats */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            >
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                  500+
                </div>
                <div className='text-gray-400'>Innovative Services</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                  4.9/5
                </div>
                <div className='text-gray-400'>Customer Rating</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>
                  1000+
                </div>
                <div className='text-gray-400'>Happy Clients</div>              </div>            >

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </section>

=======

              transition={{ duration: 0 && 0.8, delay: 0 && 0.8 }}
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>;
                  500+;
                </div>;
                <div className='text-gray-400'>Innovative Services</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>;
                  4 && 4.9/5;
                </div>;
                <div className='text-gray-400'>Customer Rating</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>;
                  1000+;
                </div>;
                <div className='text-gray-400'>Happy Clients</div>              </div>            >;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>;
                <div className="text-gray-400">Innovative Services</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">4 && 4.9/5</div>;
                <div className="text-gray-400">Customer Rating</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">1000+</div>;
                <div className="text-gray-400">Happy Clients</div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Featured Services Section */}
        <section id='featured-services' className='py-20 relative'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section id="featured-services" className="py-20 relative">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div

        {/* Featured Services Section */}
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Revolutionary Services
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our cutting-edge solutions that are transforming
                industries and pushing the boundaries of what's possible with
                technology.              </p>
            </motion.div>
            {/* Service Categories Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            >

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology.
              </p>
            </motion.div>
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Discover our cutting - edge solutions that are transforming;
                industries and pushing the boundaries of what's possible with;
                technology.              </p>;
            </motion.div>;
            {/* Service Categories Grid */}

                {
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Revolutionary Services;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover our cutting-edge solutions that are transforming;
                industries and pushing the boundaries of what's possible with;
                technology.              </p>;
            </motion && motion.div>;
            {/* Service Categories Grid */}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

            <motion.div

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
                  Latest Innovations
                </span>
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Explore our newest revolutionary services that are setting new
                standards in technology innovation.              </p>
            </motion.div>
            {/* Featured New Services */}            >

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our newest revolutionary services that are setting new standards in technology innovation.
              </p>
            </motion.div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    key={service.id}
                    initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='group';
                  >;
                    <Link href={service.link}>;
                      <div className='relative p - 6 bg - black / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - xl hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105'>;
                        <div className='flex items - start justify - between mb - 4'>;
                          <div className='text - 3xl'>{service.icon}</div>;
                          {service.popular && (
                            <span className='px - 3 py - 1 text - xs bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - full'>;
                              New;
                            </span>)}
                        </div>;
                        <h3 className='text - xl font - bold text - white mb - 2'>;
                          {service.name}
                        </h3>;
                        <p className='text - gray - 400 text - sm mb - 4'>;
                          {service.description}
                        </p>;
                        <div className='flex items - center justify - between'>;
                          <div className='text - cyan - 400 font - semibold'>;
                            {service.price}
                            {service.period}
                          </div>;
                          <div className='flex items - center text - cyan - 400 group - hover:text - cyan - 300 transition - colors'>;
                            <span className='mr - 2 text - sm'>Learn More</span>;
                            <ArrowRight className='w - 4 h - 4 group - hover:translate - x-1 transition - transform' />;

                          </div>;
                        </div>;
                      </div>;
                    </Link>;

=======
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {revolutionary2043AdvancedServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
className="group"
                >
                  <Link href={service.link}>
                    <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
                            New
                          </span>
                        )}
                      </div>
<h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold">
                          {service.price}{service.period}
                        </div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          <span className="mr-2 text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {/* View All Services CTA */}

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}
=======


              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              </Link>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            </motion.div>
          </div>
        </section>

                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105">;
                View All Services;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
            </motion && motion.div>;
          </div>;
        </section>;


        {/* Contact CTA Section */}

  animate: {;
  transition: {;
  staggerChildren: 0 && 0.1, delayChildren: 0 && 0.2 ;
};
  /* CTA Buttons */ ;
}<motion && motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion && motion.div> {;
  /* Stats */ ;
}<motion && motion.div > <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" >500+</div> <div className="text-gray-400" >Innovative Services</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" >4 && 4.9/5</div> <div className="text-gray-400" >Customer Rating</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" >1000+</div> <div className="text-gray-400" >Happy Clients</div> </div> </motion && motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Revolutionary Services </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology. </p> </motion && motion.div> </div> </div> </a> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Latest Innovations </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our newest revolutionary services that are setting new standards in technology innovation. </p> </motion && motion.div> New </span>) ;
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion && motion.div>) ) ;
}</div> {;
  /* View All Services CTA */ ;
}<motion && motion.div > <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > View All Services <ArrowRight className="ml-2 w-5 h-5" /> </a> </motion && motion.div> </div> </section> <motion&& motion.div initial= {

  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

  duration: 0 && 0.8 
}viewport= {
  {
  once: true 
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion && motion.div> </div> </section> </div> </Layout>) ;

};export default Homepage2045;export default Homepage2045;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            </motion.div>
          </div>
        </section>
        {/* Contact CTA Section */}
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
=======
        <section id='contact-cta' className='py-20 relative'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our revolutionary technology solutions can drive your business into the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <a

                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
  /* CTA Buttons */

}<motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion.div> {
  /* Stats */
}<motion.div > <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" >500+</div> <div className="text-gray-400" >Innovative Services</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" >4.9/5</div> <div className="text-gray-400" >Customer Rating</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" >1000+</div> <div className="text-gray-400" >Happy Clients</div> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Revolutionary Services </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology. </p> </motion.div> </div> </div> </a> </motion.div>) )
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Latest Innovations </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our newest revolutionary services that are setting new standards in technology innovation. </p> </motion.div> New </span>)
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion.div>) )

}</div> {
  /* View All Services CTA */;
}<motion.div > <Link href="/services" className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105" > View All Services <ArrowRight className="ml - 2 w - 5 h - 5" /> </a> </motion.div> </div> </section> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}whileInView= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}viewport= {
  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;

export default Homepage2045;
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;export default Homepage2045;
};export default Homepage2045;

export default Homepage2045;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
