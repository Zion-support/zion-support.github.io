<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from 'react';


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

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
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

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
import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket

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
  Target,;
  Sparkles,;
} from 'lucide-react';
import Link from 'next/link';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, ;
=======


import React, { useState, useEffect } from 'react';


import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {

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
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles;
} from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
=======

// Import our new innovative services
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { innovative2040FuturisticServices  } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices  } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices  } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';



// Import our new innovative services
import { innovative2040FuturisticServices  } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices  } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices  } from '../data/revolutionary-2043-advanced-services';
=======

// Import our new innovative services
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
<<<<<<< HEAD
<<<<<<< HEAD
// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2045...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Loading fallback component;
const LoadingFallback = () => (;
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>    <motion&& motion.div
      initial={{ opacity: 0, scale: 0 && 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0 && 0.5 }}
      className='text-center'// Loading fallback component
<<<<<<< HEAD
<<<<<<< HEAD
      setIsVisible(true)
    }, 800);
    return () => clearTimeout(timer)
  }, []);
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='text-center'
    >
      <div className='relative'>
        <Loader2 className='w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4' />
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse'></div>
      </div>
      <p className='text-xl text-gray-300 mb-2'>
        Loading Zion Tech Group 2045...
      </p>
      <p className='text-sm text-gray-500'>
        Preparing your futuristic digital transformation journey
      </p>    </motion.div>    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2045...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
);
const Homepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);  }, []);      setIsVisible(true)
    }, 800);
    return () => clearTimeout(timer)
=======
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
<<<<<<< HEAD
=======


const Homepage2045: React.FC = () => {;
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {;
    // Simulate content loading with better timing;
    const timer = setTimeout(() => {;
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);  }, []);      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  // Intersection Observer for better performance;
  useEffect(() => {;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {;
      const observer = new (window as any).IntersectionObserver(;
        (entries: any[]) => {;
          entries && entries.forEach(entry => {;
            if (entry && entry.isIntersecting) {;
              setActiveSection(entry && entry.target.id);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }
          });
        },        { threshold: 0 && 0.3, rootMargin: '-100px' }
      );
<<<<<<< HEAD
          entries.forEach((entry) => {
    >
      <div className=&quot;relative&quot;>
        <Loader2 className=&quot;w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4&quot; />
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse&quot;></div>
      </div>
      <p className=&quot;text-xl text-gray-300 mb-2&quot;>Loading Zion Tech Group 2045...</p>
      <p className=&quot;text-sm text-gray-500&quot;>Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
),

const Homepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeSection, setActiveSection] = useState('hero'),

  useEffect__(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false),
      setIsVisible(true)
    }, 800),

    return () => clearTimeout(timer)
  }, []),

  // Intersection Observer for better performance
  useEffect__(() => {_if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const _observer = new (window as any).IntersectionObserver(_(entries: unknown[]) => {
          entries.forEach(_(entry) => {

=======

          entries.forEach((entry) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
<<<<<<< HEAD
};
        { threshold: 0.3, rootMargin: '-100px' }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect()
    }
  }, []);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },        { threshold: 0.3, rootMargin: '-100px' }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();    }            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        }
        { threshold: 0.3, rootMargin: '-100px' }
      );
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();      sections.forEach((section) => observer.observe(section));
=======
        };

        { threshold: 0.3, rootMargin: '-100px' }
      );
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => observer.observe(section));


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return () => observer.disconnect()
    }
  }, []);
  const fadeInUp = {

    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

<<<<<<< HEAD

  const fadeInUp = {
    initial: { opacity: 0, y: 60 }
    animate: { opacity: 1, y: 0 }
    transition: { duration: 0.6, ease: 'easeOut' },  };    transition: { duration: 0.6, ease: "easeOut" }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,

<<<<<<< HEAD
        staggerChildren: 0.1
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        delayChildren: 0.2
      }
    },  };        delayChildren: 0.2
      }
    }
<<<<<<< HEAD
=======


      const sections = document && document.querySelectorAll('section[id]');
      sections && sections.forEach(section => observer && observer.observe(section));
      return () => observer && observer.disconnect();    }            if (entry && entry.isIntersecting) {;
              setActiveSection(entry && entry.target.id);
            }
          });
        };
        { threshold: 0 && 0.3, rootMargin: '-100px' }
      );
      const sections = document && document.querySelectorAll('section[id]');
      sections && sections.forEach(section => observer && observer.observe(section));
      return () => observer && observer.disconnect();      sections && sections.forEach((section) => observer && observer.observe(section));
      return () => observer && observer.disconnect();
    }
  }, []);
  const fadeInUp = {;
    initial: { opacity: 0, y: 60 },;
    animate: { opacity: 1, y: 0 },;
    transition: { duration: 0 && 0.6, ease: 'easeOut' },  };    transition: { duration: 0 && 0.6, ease: "easeOut" }
  };
  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  };
  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length]

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    return colors[index % colors && colors.length];
  };
  if (isLoading) {;
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4'></div>;
          <p className='text-cyan-400 text-xl'>Loading Zion Tech Group...</p>      <div className="min-h-screen bg-black flex items-center justify-center">;
        <div className="text-center">;
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>;
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>;
      </div>;
    );
  }
  return (
    <Layout>;
      <div className='min-h-screen bg-black text-white relative overflow-x-hidden'>;
        {/* Hero Section */}
        <section
          id='hero'
          className='relative min-h-screen flex items-center justify-center overflow-hidden'>;
          {/* Animated Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>;
            <motion&& motion.div
              className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
              animate={{
                rotate: [0, 360],
                scale: [1, 1 && 1.1, 1],
                opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],
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
            />
            <motion.div
              className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full'
              animate={{
                rotate: [360, 0]
                scale: [1, 1.2, 1]
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 6
                repeat: Infinity
                ease: 'easeInOut'
              }}
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles;
} from 'lucide-react';
import Link from 'next / link';
import { innovative2040FuturisticServices } from '../data / innovative - 2040 - futuristic - services';
import { innovative2040ITServices } from '../data / innovative - 2040 - it - services';
import { revolutionary2043AdvancedServices } from '../data / revolutionary - 2043 - advanced - services';
import { revolutionary2044FuturisticServices } from '../data / revolutionary - 2044 - futuristic - services';
// Loading fallback component;
const LoadingFallback = () =>: any (
  <div className='min - h-screen flex items - center justify - center bg - gray - 900'>    <motion.div;
=======


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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
 } from 'lucide-react';
import Link from 'next/link';

<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Import our new innovative services


import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services';

import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
// Loading fallback component

const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-900'>    <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fadeInUp = {
    initial: { opacity: 0, coordinate_y: 60 },
    animate: { opacity: 1, coordinate_y: 0 },
    transition: { duration: 0.6, ease: 'ease_out' },  }    transition: { duration: 0.6, ease: "ease_out" }
  }
;
  const stagger_container = {
    animate: {
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
        stagger_children: 0.1,
        delay_children: 0.2,
      },
    },  }        delay_children: 0.2;
      }
    }
  }
;
  const background_variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: 'ease_out' },  }
;
  const getColorClasses = (index: number) =>: any {
    const colors = [    transition: { duration: 1.2, ease: "ease_out" }
  }
;
  const getColorClasses = (index: number) =>: any {
    const colors = [;
      'from - cyan - 400 to - blue - 500',
      'from - purple - 400 to - pink - 500',
      'from - emerald - 400 to - teal - 500',
      'from - orange - 400 to - red - 500',
      'from - indigo - 400 to - purple - 500',
      'from - yellow - 400 to - orange - 500',
    ];
    return colors[index % colors.length];  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - black flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 32 w - 32 border - b-2 border - cyan - 400 mx - auto mb - 4'></div>;
          <p className='text - cyan - 400 text - xl'>Loading Zion Tech Group...</p>        </div>      'from - cyan - 400 to - blue - 500from - purple - 400 to - pink - 500from - emerald - 400 to - teal - 500from - orange - 400 to - red - 500from - indigo - 400 to - purple - 500from - yellow - 400 to - orange - 500';
    ];
    return colors[index % colors.length];
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - black flex items - center justify - center'>;
        <div className='text - center'>;
          <div className='animate - spin rounded - full h - 32 w - 32 border - b-2 border - cyan - 400 mx - auto mb - 4'></div>;
          <p className='text - cyan - 400 text - xl'>Loading Zion Tech Group...</p>      <div className="min - h-screen bg - black flex items - center justify - center">;
        <div className="text - center">;
          <div className="animate - spin rounded - full h - 32 w - 32 border - b-2 border - cyan - 400 mx - auto mb - 4"></div>;
          <p className="text - cyan - 400 text - xl">Loading Zion Tech Group...</p>;
      </div>);
  }
  return (
    <Layout>;
      <div className='min - h-screen bg - black text - white relative overflow - x-hidden'>;
        {/* Hero Section */}
        <section;
          id='hero';
          className='relative min - h-screen flex items - center justify - center overflow - hidden';
        >;
          {/* Animated Background Elements */}
          <div className='absolute inset - 0 pointer - events - none'>;
            <motion.div;
              className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg';
              animate={{
                rotate: [0, 360];
                scale: [1, 1.1, 1];

      return () => observer.disconnect()
    }
  }, []),

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  },
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
              }}
              transition={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                ease: 'easeInOut',              }}
            />;
            <motion.div;
              className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full';
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],

              }}
<<<<<<< HEAD
              transition={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
              }}
=======
              }}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
<<<<<<< HEAD
<<<<<<< HEAD
            />;
            <motion.div;
              className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45';
              animate={{
                rotate: [45, 405];
                scale: [1, 1.15, 1];
                opacity: [0.3, 0.5, 0.3]}}
              transition={{
                duration: 10,
                repeat: Infinity,
/>;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />
          </div>

            />;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Hero Content */}
          <div className='relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

<<<<<<< HEAD

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
=======
=======

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              transition={{ duration: 0.8 }}

              className='mb-8'            >



<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}
              className='mb-8'>          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='mb-8'              className="mb-8">;
              <motion&& motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
                className='text-5xl md:text-7xl font-bold mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>                  Future of Technology                className="text-5xl md:text-7xl font-bold mb-6";
              >;
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">;
                  Future of Technology;
                </span>;
              </motion && motion.h1>;
              <motion&& motion.p
          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

            />
          </div>
          {/* Hero Content */}
          <div className='relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.8 }}
              className='mb-8'            >          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              className='mb-8'            >

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='mb-8'              className="mb-8"
=======
              className="mb-8"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className="mb-8"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-5xl md:text-7xl font-bold mb-6'
              >
                <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>                  Future of Technology                className="text-5xl md:text-7xl font-bold mb-6"
=======
                className="text-5xl md:text-7xl font-bold mb-6"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                className="text-5xl md:text-7xl font-bold mb-6"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future of Technology
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'
              >
                Transform your business with Zion Tech Group's revolutionary AI
                services, quantum computing, and cutting-edge emerging
                technologies. Leading the future of technology innovation.              </motion.p>                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
=======

                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.
              </motion.p>
            </motion.div>


                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
                className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
                Transform your business with Zion Tech Group's revolutionary AI;
                services, quantum computing, and cutting-edge emerging;
                technologies. Leading the future of technology innovation.              </motion && motion.p>                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto";
              >;
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting-edge emerging technologies. Leading the future of technology innovation.;
              </motion && motion.p>;
            </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* CTA Buttons */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                href="/services"
=======
                href='/services'
                className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'                href="/services"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>


<<<<<<< HEAD





              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Stats */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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

=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Featured Services Section */}
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD






=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD


<<<<<<< HEAD
              className="text-center mb-16"
            >
              className='text-center mb-16'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className='text-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />;
          </div>;
          {/* Hero Content */}
          <div className='relative z - 10 text - center max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb - 8'            >          <div className="relative z - 10 text - center max - w-6xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb - 8'              className="mb - 8";
            >;
              <motion.h1;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text - 5xl md:text - 7xl font - bold mb - 6';
              >;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>                  Future of Technology                className="text - 5xl md:text - 7xl font - bold mb - 6";
              >;
                <span className="bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent">;
                  Future of Technology;
                </span>;
              </motion.h1>;
              <motion.p;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto';
              >;
                Transform your business with Zion Tech Group's revolutionary AI;
                services, quantum computing, and cutting - edge emerging;
                technologies. Leading the future of technology innovation.              </motion.p>                className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto";
              >;
                Transform your business with Zion Tech Group's revolutionary AI services, quantum computing, and cutting - edge emerging technologies. Leading the future of technology innovation.;
              </motion.p>;
            </motion.div>;
            {/* CTA Buttons */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex - col sm:flex - row gap - 4 justify - center items - center';
            >;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105'              >;
                Get Started;
              </Link>;
              <Link;
                href='/services';
                className='px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105'              >              className="flex flex - col sm:flex - row gap - 4 justify - center items - center";
            >;
              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105";
              >;
                Get Started;
              </Link>;
              <Link;
                href='/services';
                className='px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105'                href="/services";
                className="px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105";
              >;
                Explore Services;
              </Link>;
            </motion.div>;
            {/* Stats */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mt - 16 grid grid - cols - 1 md:grid - cols - 3 gap - 8';
            >;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - cyan - 400 mb - 2'>;
                  500+;
                </div>;
                <div className='text - gray - 400'>Innovative Services</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - purple - 400 mb - 2'>;
                  4.9 / 5;
                </div>;
                <div className='text - gray - 400'>Customer Rating</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl md:text - 4xl font - bold text - pink - 400 mb - 2'>;
                  1000+;
                </div>;
                <div className='text - gray - 400'>Happy Clients</div>              </div>            >;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - cyan - 400 mb - 2">500+</div>;
                <div className="text - gray - 400">Innovative Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - purple - 400 mb - 2">4.9 / 5</div>;
                <div className="text - gray - 400">Customer Rating</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl md:text - 4xl font - bold text - pink - 400 mb - 2">1000+</div>;
                <div className="text - gray - 400">Happy Clients</div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured Services Section */}
        <section id='featured - services' className='py - 20 relative'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section id="featured - services" className="py - 20 relative">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
<<<<<<< HEAD
=======

            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />,
                  title: "AI & Consciousness",
                  description: "Revolutionary AI platforms with emotional intelligence and autonomous operations",
                  color: "from-cyan-400 to-blue-500",
                  href: "/ai-services"
                };
                {
                  icon: <Atom className="w-12 h-12" />,
                  title: "Quantum Technology",
                  description: "Breakthrough quantum computing solutions for next-generation applications",
                  color: "from-purple-400 to-pink-500",
                  href: "/quantum-services"
                };
                {
                  icon: <Rocket className="w-12 h-12" />,
                  title: "Space Technology",
                  description: "Advanced space exploration and resource management platforms",
                  color: "from-emerald-400 to-teal-500",
                  href: "/space-technology"
                };
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Enterprise Solutions",
                  description: "Advanced infrastructure and security solutions for modern enterprises",
                  color: "from-orange-400 to-red-500",
                  href: "/enterprise-solutions"
                };
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Micro SAAS",
                  description: "Innovative business solutions that drive growth and efficiency",
                  color: "from-indigo-400 to-purple-500",
                  href: "/micro-saas"
                };
                {
                  icon: <Sparkles className="w-12 h-12" />,
                  icon: <Brain className='w - 12 h - 12' />,
                  title: 'AI & Consciousness',
                  description:;
                    'Revolutionary AI platforms with emotional intelligence and autonomous operations',
                  color: 'from - cyan - 400 to - blue - 500',
                  href: '/ai - services',
                },
                {
                  icon: <Atom className='w - 12 h - 12' />,
                  title: 'Quantum Technology',
                  description:;
                    'Breakthrough quantum computing solutions for next - generation applications',
                  color: 'from - purple - 400 to - pink - 500',
                  href: '/quantum - services',
                },
                {
                  icon: <Rocket className='w - 12 h - 12' />,
                  title: 'Space Technology',
                  description:;
                    'Advanced space exploration and resource management platforms',
                  color: 'from - emerald - 400 to - teal - 500',
                  href: '/space - technology',
                },
                {
                  icon: <Shield className='w - 12 h - 12' />,
                  title: 'Enterprise Solutions',
                  description:;
                    'Advanced infrastructure and security solutions for modern enterprises',
                  color: 'from - orange - 400 to - red - 500',
                  href: '/enterprise - solutions',
                },
                {
                  icon: <Target className='w - 12 h - 12' />,
                  title: 'Micro SAAS',
                  description:;
                    'Innovative business solutions that drive growth and efficiency',
                  color: 'from - indigo - 400 to - purple - 500',
                  href: '/micro - saas',
                },
                {
                  icon: <Sparkles className='w - 12 h - 12' />,
                  title: 'Emerging Tech',
                  description:;
                    'Cutting - edge technologies that define the future of innovation',
                  color: 'from - yellow - 400 to - orange - 500',
                  href: '/emerging - tech',
                },              ].map ((service, index) => (                  icon: <Sparkles className="w - 12 h - 12" />,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  title: "Emerging Tech",
                  description: "Cutting - edge technologies that define the future of innovation",
                  color: "from - yellow - 400 to - orange - 500",
                  href: "/emerging - tech";
                }
<<<<<<< HEAD


<<<<<<< HEAD
            <motion.div


=======
                {
                  icon: <Atom className='w-12 h-12' />
                  title: 'Quantum Technology'
                  description:
                    'Breakthrough quantum computing solutions for next-generation applications'
                  color: 'from-purple-400 to-pink-500'
                  href: '/quantum-services'
                }
                {
                  icon: <Rocket className='w-12 h-12' />
                  title: 'Space Technology'
                  description:
                    'Advanced space exploration and resource management platforms'
                  color: 'from-emerald-400 to-teal-500'
                  href: '/space-technology'
                }
                {
                  icon: <Shield className='w-12 h-12' />
                  title: 'Enterprise Solutions'
                  description:
                    'Advanced infrastructure and security solutions for modern enterprises'
                  color: 'from-orange-400 to-red-500'
                  href: '/enterprise-solutions'
                }
                {
                  icon: <Target className='w-12 h-12' />
                  title: 'Micro SAAS'
                  description:
                    'Innovative business solutions that drive growth and efficiency'
                  color: 'from-indigo-400 to-purple-500'
                  href: '/micro-saas'
                }
                {
                  icon: <Sparkles className='w-12 h-12' />
                  title: 'Emerging Tech'
                  description:
                    'Cutting-edge technologies that define the future of innovation'
                  color: 'from-yellow-400 to-orange-500'
                  href: '/emerging-tech'
                },              ].map((service, index) => (                  icon: <Sparkles className="w-12 h-12" />
                  title: "Emerging Tech"
                  description: "Cutting-edge technologies that define the future of innovation"
                  color: "from-yellow-400 to-orange-500"
                  href: "/emerging-tech"
                }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group'
                  <Link href={service.href}>
                    <div className='relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25'>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        {service.title}
                      </h3>
                      <p className='text-gray-400 mb-6'>
                        {service.description}
                      </p>
                      <div className='flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors'>
                        <span className='mr-2'>Learn More</span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />                      </div>                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
<<<<<<< HEAD
                      </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Latest Innovations Section */}
<<<<<<< HEAD
        <section
          id='latest-innovations'
          className='py-20 relative bg-gray-900/30'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div        <section id="latest-innovations" className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div

            <motion.div

=======
              ))}

            </div>;
          </div>;
        </section>;


        {/* Latest Innovations Section */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======


            <motion.div

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className='text-center mb-16'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>;
                <span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>;
                  Latest Innovations;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Explore our newest revolutionary services that are setting new;
                standards in technology innovation.              </p>;
            </motion && motion.div>;
            {/* Featured New Services */}            >;
              <h2 className="text-4xl md:text-5xl font-bold mb-6">;
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">;
                  Latest Innovations;
                </span>;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Explore our newest revolutionary services that are setting new standards in technology innovation.;
              </p>;
            </motion && motion.div>;
            {/* Featured New Services */}

                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group';
                  <Link href={service.href}>;
                    <div className='relative p - 8 bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl hover:border - cyan - 400 / 50 transition - all duration - 300 hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 25'>;
                      <div;
                        className={`w - 16 h - 16 bg - gradient - to - r ${service.color} rounded - 2xl flex items - center justify - center text - white mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                      >;
                        {service.icon}
                      </div>;
                      <h3 className='text - 2xl font - bold text - white mb - 4'>;
                        {service.title}
                      </h3>;
                      <p className='text - gray - 400 mb - 6'>;
                        {service.description}
                      </p>;
                      <div className='flex items - center text - cyan - 400 group - hover:text - cyan - 300 transition - colors'>;
                        <span className='mr - 2'>Learn More</span>;
                        <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />                      </div>                      <h3 className="text - 2xl font - bold text - white mb - 4">{service.title}</h3>;
                      <p className="text - gray - 400 mb - 6">{service.description}</p>;
                      <div className="flex items - center text - cyan - 400 group - hover:text - cyan - 300 transition - colors">;
                        <span className="mr - 2">Learn More</span>;
                        <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
                    </div>;
                  </Link>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Latest Innovations Section */}
        <section;
          id='latest - innovations';
          className='py - 20 relative bg - gray - 900 / 30';
        >;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section id="latest - innovations" className="py - 20 relative bg - gray - 900 / 30">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6'>;
                <span className='bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent'>;
                  Latest Innovations;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Explore our newest revolutionary services that are setting new;
                standards in technology innovation.              </p>;
            </motion.div>;
            {/* Featured New Services */}            >;
              <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">;
                <span className="bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent">;
                  Latest Innovations;
                </span>;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Explore our newest revolutionary services that are setting new standards in technology innovation.;
              </p>;
            </motion.div>;
            {/* Featured New Services */}
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
              {revolutionary2043AdvancedServices;
                .slice (0, 4);
                .map ((service, index) => (
                  <motion.div;
<<<<<<< HEAD
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {revolutionary2043AdvancedServices
                .slice(0, 4)
                .map((service, index) => (
                  <motion.div
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          </div>;
                        </div>;
                      </div>;
                    </Link>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            {/* View All Services CTA */}
            <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            {/* View All Services CTA */}
            <motion&& motion.div
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact CTA Section */}
        <section id='contact-cta' className='py-20 relative'>;
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion && motion.div        <section id="contact-cta" className="py-20 relative">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Ready to Transform?;
                </span>;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Let's discuss how our revolutionary technology solutions can;
                drive your business into the future.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'>;
                  Get Started;
                </Link>;
                <a
                  href='tel:+1 302 464 0950'
                  className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'>                  Ready to Transform?;
                </span>;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Let's discuss how our revolutionary technology solutions can drive your business into the future.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105">;
                  Get Started;
                </Link>;
                <a
                  href='tel:+1 302 464 0950'
                  className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'                  href="tel:+1 302 464 0950"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105">;
                  Call Now;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              <Link
                href="/services"
<<<<<<< HEAD


=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </Link>



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  duration: 0 && 0.8 
}viewport= {
  {
  once: true 
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion && motion.div> </div> </section> </div> </Layout>) ;
<<<<<<< HEAD
<<<<<<< HEAD
};export default Homepage2045;export default Homepage2045;
        {/* Contact CTA Section */}
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className='text-center mt-12'
            >
              <Link
                href='/services'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'
              >
                View All Services
                <ArrowRight className='ml-2 w-5 h-5' />              </Link>            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};export default Homepage2045;export default Homepage2045;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </Link>

            </motion.div>
          </div>
        </section>
        {/* Contact CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section id='contact-cta' className='py-20 relative'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div




<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Ready to Transform?
                </span>
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Let's discuss how our revolutionary technology solutions can
                drive your business into the future.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105'                >
                  Get Started
                </Link>
                <a
                  href='tel:+1 302 464 0950'
                  className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'                >                  Ready to Transform?
                </span>
              </h2>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-4xl md: text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform?
                </span>
              </h2>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                  href='tel:+1 302 464 0950'
                  className='px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105'                  href="tel:+1 302 464 0950"
=======
                  href="tel:+1 302 464 0950"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  href="tel:+1 302 464 0950"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD


  staggerChildren: 0.1, delayChildren: 0.2 


};
  /* CTA Buttons */ 

  stagger_children: 0.1, delay_children: 0.2;
}
  /* CTA Buttons */;
}<motion.div > <Link href="/contact" className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105" > Get Started </a> <Link href="/services" className="px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105" > Explore Services </a> </motion.div> {
  /* Stats */;
}<motion.div > <div className="text - center" > <div className="text - 3xl md:text - 4xl font - bold text - cyan - 400 mb - 2" >500+</div> <div className="text - gray - 400" >Innovative Services</div> </div> <div className="text - center" > <div className="text - 3xl md:text - 4xl font - bold text - purple - 400 mb - 2" >4.9 / 5</div> <div className="text - gray - 400" >Customer Rating</div> </div> <div className="text - center" > <div className="text - 3xl md:text - 4xl font - bold text - pink - 400 mb - 2" >1000+</div> <div className="text - gray - 400" >Happy Clients</div> </div> </motion.div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold mb - 6" > <span className="bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent" > Revolutionary Services </span> </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Discover our cutting - edge solutions that are transforming industries and pushing the boundaries of what's possible with technology. </p> </motion.div> </div> </div> </a> </motion.div>) );
}</div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold mb - 6" > <span className="bg - gradient - to - r from - purple - 400 to - pink - 500 bg - clip - text text - transparent" > Latest Innovations </span> </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Explore our newest revolutionary services that are setting new standards in technology innovation. </p> </motion.div> New </span>);
}</div> </div> <div className="flex items - center text - cyan - 400 group - hover:text - cyan - 300 transition - colors" > <span className="mr - 2 text - sm" >Learn More</span> <ArrowRight className="w - 4 h - 4 group - hover:translate - x-1 transition - transform" /> </div> </div> </div> </a> </motion.div>) );
  );
  animate: {
  transition: {
  staggerChildren: 0.1, delayChildren: 0.2
}
  /* CTA Buttons */
  staggerChildren: 0.1, delayChildren: 0.2 

};
};
};
  /* CTA Buttons */ 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
};
export default Homepage2045;
                  </motion.div>))}            </div>                    </div>;
                  </Link>;
                </motion.div>))}
            {/* View All Services CTA */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text - center mt - 12';
            >;
              <Link;
                href='/services';
                className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105';
              >;
                View All Services;
                <ArrowRight className='ml - 2 w - 5 h - 5' />              </Link>            >;
              <Link;
                href="/services";
                className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105";
              >;
                View All Services;
                <ArrowRight className="ml - 2 w - 5 h - 5" />;
              </Link>;
            </motion.div>;
          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section id='contact - cta' className='py - 20 relative'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>            <motion.div        <section id="contact - cta" className="py - 20 relative">;
          <div className="max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>;
                  Ready to Transform?;
                </span>;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Let's discuss how our revolutionary technology solutions can;
                drive your business into the future.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
                <Link;
                  href='/contact';
                  className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105'                >;
                  Get Started;
                </Link>;
                <a;
                  href='tel:+1 302 464 0950';
                  className='px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105'                >                  Ready to Transform?;
                </span>;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Let's discuss how our revolutionary technology solutions can drive your business into the future.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105";
                >;
                  Get Started;
                </Link>;
                <a;
                  href='tel:+1 302 464 0950';
                  className='px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105'                  href="tel:+1 302 464 0950";
                  className="px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Call Now;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
  animate: {
  transition: {
<<<<<<< HEAD


=======
  staggerChildren: 0.1, delayChildren: 0.2
}
  /* CTA Buttons */
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  staggerChildren: 0.1, delayChildren: 0.2 


};
  /* CTA Buttons */ 
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}<motion.div > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <Link href="/services" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Explore Services </a> </motion.div> {
  /* Stats */
}<motion.div > <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2" >500+</div> <div className="text-gray-400" >Innovative Services</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" >4.9/5</div> <div className="text-gray-400" >Customer Rating</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" >1000+</div> <div className="text-gray-400" >Happy Clients</div> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Revolutionary Services </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology. </p> </motion.div> </div> </div> </a> </motion.div>) )
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6" > <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent" > Latest Innovations </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our newest revolutionary services that are setting new standards in technology innovation. </p> </motion.div> New </span>)
}</div> </div> <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors" > <span className="mr-2 text-sm" >Learn More</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </div> </div> </div> </a> </motion.div>) )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
<<<<<<< HEAD
  once: true;
}> Ready to Transform? </span> </h2> <p className="text - xl text - gray - 300 mb - 8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center" > <Link href="/contact" className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - purple - 600 transition - all duration - 300 shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 30 transform hover:scale - 105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px - 8 py - 4 border border - cyan - 400 / 50 text - cyan - 400 rounded - lg font - semibold text - lg hover:bg - cyan - 400 / 10 transition - all duration - 300 transform hover:scale - 105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>);
}export default Homepage2045;export default Homepage2045;
;
  once: true
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>)
};export default Homepage2045;export default Homepage2045;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;

export default Homepage2045;
<<<<<<< HEAD
<<<<<<< HEAD
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
=======

=======
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 

};export default Homepage2045;

export default Homepage2045;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;

export default Homepage2045;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 
};export default Homepage2045;export default Homepage2045;
};export default Homepage2045;

<<<<<<< HEAD
export default Homepage2045;
=======

=======
  once: true 

}> Ready to Transform? </span> </h2> <p className="text-xl text-gray-300 mb-8" > Let's discuss how our revolutionary technology solutions can drive your business into the future. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105" > Get Started </a> <a href="tel:+1 302 464 0950" className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105" > Call Now </a> </div> </motion.div> </div> </section> </div> </Layout>) 

};export default Homepage2045;

export default Homepage2045;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
