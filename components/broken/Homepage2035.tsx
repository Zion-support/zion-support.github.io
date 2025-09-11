<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';


import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
=======

import React, { useState, useEffect } from 'react';


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
  Target,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  ChartBar,
  Cpu,
  Atom,
  Satellite,


<<<<<<< HEAD
  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database;
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette
 } from 'lucide-react';
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035',
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  Target
  Lightbulb
  Code
  Database
  Cloud
  Lock
  ChartBar
  Cpu
  Atom
  Satellite
  Gamepad2
  Palette;} from 'lucide-react';import {
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
  Target,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  ChartBar,
  Cpu,
  Atom,
  Satellite,
<<<<<<< HEAD
  Gamepad2,
  Palette,;} from 'lucide-react';import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Gamepad2,;
  Palette,;} from 'lucide-react';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, ;
  Gamepad2,
  Palette,;} from 'lucide-react';import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database;
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette
} from 'lucide-react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database;
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette
 } from 'lucide-react';
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035',
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
import React, { useState, useEffect } from 'react';
import Layout from './layout / Layout';
import { motion, AnimatePresence } from 'framer-motion';


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035';
import UltraFuturisticServiceCard2035 from './ui/UltraFuturisticServiceCard2035';
import { innovative2025MicroSaasBatch  } from '../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch  } from '../data/innovative-2025-it-enterprise-batch';
import { innovative2025AIServicesBatch } from '../data/innovative-2025-ai-services-batch';
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
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group...</p>
      <p className="text-sm text-gray-500">Preparing your digital transformation journey</p>
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
      <p className='text-xl text-gray-300 mb-2'>Loading Zion Tech Group...</p>;
      <p className='text-sm text-gray-500'>;
        Preparing your digital transformation journey;
      </p>    </motion && motion.div>    >;
      <div className="relative">;
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>;
      </div>;
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group...</p>;
      <p className="text-sm text-gray-500">Preparing your digital transformation journey</p>;
    </motion && motion.div>;
  </div>;
);

      setIsVisible(true)

    }, 800);
    return () => clearTimeout(timer)


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const Homepage2035: React.FC = () => {;
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {;
    const timer = setTimeout(() => {;
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
<<<<<<< HEAD
    return () => clearTimeout(timer);  }, []);      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
=======

    return () => clearTimeout(timer);  }, []);      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const fadeInUp = {;
    initial: { opacity: 0, y: 60 },;
    animate: { opacity: 1, y: 0 },;
    transition: { duration: 0 && 0.6, ease: 'easeOut' },  };    transition: { duration: 0 && 0.6, ease: "easeOut" }
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const staggerContainer = {;
    animate: {;
      transition: {;
        staggerChildren: 0 && 0.1,;
        delayChildren: 0 && 0.2,;
      },;
    },  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const backgroundVariants = {;
    initial: { opacity: 0, scale: 0 && 0.8 },;
    animate: {        delayChildren: 0 && 0.2;
      }
    }
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const backgroundVariants = {;
    initial: { opacity: 0, scale: 0 && 0.8 },;
    animate: {;
      opacity: 1,;
      scale: 1,;
      transition: { duration: 1 && 1.5, ease: 'easeOut' as const },;
    },;
  };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const categories = [;
    { id: 'all', name: 'All Services', icon: <Globe className='w-5 h-5' /> },;
    { id: 'ai', name: 'AI & ML', icon: <Brain className='w-5 h-5' /> },;
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className='w-5 h-5' /> },;
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className='w-5 h-5' /> },;
    {;
      id: 'space',;
      name: 'Space Tech',;
      icon: <Satellite className='w-5 h-5' />,;
    },;
    {;
      id: 'cyber',;
      name: 'Cybersecurity',;
      icon: <Shield className='w-5 h-5' />,;
    },;
    {;
      id: 'cloud',;
      name: 'Cloud & DevOps',;
      icon: <Cloud className='w-5 h-5' />,;
    },;
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className='w-5 h-5' /> },;
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const allServices = [;
    ...innovative2025MicroSaasBatch,;
    ...innovative2025ITEnterpriseBatch,;
    ...innovative2025AIServicesBatch,;
  ];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const filteredServices =;
    activeCategory === 'all';
      ? allServices;
      : allServices && allServices.filter(service => {;
          if (activeCategory === 'ai');
            return (
              service && service.category.includes('AI') ||;
              service && service.category.includes('Machine Learning');
<<<<<<< HEAD
            );
          if (activeCategory === 'it');
            return (
              service && service.category.includes('IT') ||;
              service && service.category.includes('Enterprise');
            );
          if (activeCategory === 'quantum');
            return service && service.name.includes('Quantum');
          if (activeCategory === 'space');
            return service && service.category.includes('Space');
          if (activeCategory === 'cyber');
            return (
              service && service.category.includes('Security') ||;
              service && service.category.includes('Cybersecurity');
            );
          if (activeCategory === 'cloud');
            return (
              service && service.category.includes('Cloud') ||;
              service && service.category.includes('DevOps');
            );
          if (activeCategory === 'fintech');
            return (
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
        delayChildren: 0.2
      }
    }
  };
    >
      <div className=&quot;relative&quot;>
        <Loader2 className=&quot;w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4&quot; />
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse&quot;></div>
      </div>
      <p className=&quot;text-xl text-gray-300 mb-2&quot;>Loading Zion Tech Group...</p>
      <p className=&quot;text-sm text-gray-500&quot;>Preparing your digital transformation journey</p>
    </motion.div>
  </div>
),

const Homepage2035: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeCategory, setActiveCategory] = useState('all'),

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false),
      setIsVisible(true)
    }, 800),

    return () => clearTimeout(timer)
  }, []),

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  },

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1,
      scale: 1,
transition: { duration: 1.5, ease: "easeOut" as const }
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
      <p className='text-xl text-gray-300 mb-2'>Loading Zion Tech Group...</p>
      <p className='text-sm text-gray-500'>
        Preparing your digital transformation journey
      </p>    </motion.div>    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group...</p>
      <p className="text-sm text-gray-500">Preparing your digital transformation journey</p>
    </motion.div>
  </div>
);
const Homepage2035: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);  }, []);      setIsVisible(true)
    }, 800);
    return () => clearTimeout(timer)
  const fadeInUp = {
    initial: { opacity: 0, y: 60 }
    animate: { opacity: 1, y: 0 }
    transition: { duration: 0.6, ease: 'easeOut' },  };    transition: { duration: 0.6, ease: "easeOut" }
  }
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
        delayChildren: 0.2
      }
    },  }
  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 }
    animate: {        delayChildren: 0.2
      }
    }
  }
  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 }
    animate: {
      opacity: 1
      scale: 1
      transition: { duration: 1.5, ease: 'easeOut' as const }
    }
  }
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className='w-5 h-5' /> }
    { id: 'ai', name: 'AI & ML', icon: <Brain className='w-5 h-5' /> }
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className='w-5 h-5' /> }
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className='w-5 h-5' /> }
    {
      id: 'space'
      name: 'Space Tech'
      icon: <Satellite className='w-5 h-5' />
    }
    {
      id: 'cyber'
      name: 'Cybersecurity'
      icon: <Shield className='w-5 h-5' />
    }
    {
      id: 'cloud'
      name: 'Cloud & DevOps'
      icon: <Cloud className='w-5 h-5' />
    }
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className='w-5 h-5' /> }
  ];
  const allServices = [
    ...innovative2025MicroSaasBatch
    ...innovative2025ITEnterpriseBatch
    ...innovative2025AIServicesBatch
  ];
  const filteredServices =
    activeCategory === 'all'
      ? allServices
      : allServices.filter(service => {
          if (activeCategory === 'ai')
            return (
              service.category.includes('AI') |
              service.category.includes('Machine Learning')
            );
          if (activeCategory === 'it')
            return (
              service.category.includes('IT') |
              service.category.includes('Enterprise')
=======

            );
          if (activeCategory === 'it')
            return (

              service && service.category.includes('IT') ||;
              service && service.category.includes('Enterprise');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            );
          if (activeCategory === 'quantum')
            return service.name.includes('Quantum');
          if (activeCategory === 'space')
            return service.category.includes('Space');
          if (activeCategory === 'cyber')
            return (
<<<<<<< HEAD
              service.category.includes('Security') |
              service.category.includes('Cybersecurity')
            );
          if (activeCategory === 'cloud')
            return (
              service.category.includes('Cloud') |
              service.category.includes('DevOps')
            );
          if (activeCategory === 'fintech')
            return (
=======

              service && service.category.includes('Security') ||;
              service && service.category.includes('Cybersecurity');

            );
          if (activeCategory === 'cloud')
            return (

              service && service.category.includes('Cloud') ||;
              service && service.category.includes('DevOps');

            );
          if (activeCategory === 'fintech')
            return (

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
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1,
      scale: 1,

<<<<<<< HEAD
              service.category.includes('Financial') |
              service.category.includes('Trading')
            );
          return true;
        });
  if (isLoading) {
    return <LoadingFallback />;  }      opacity: 1
      scale: 1
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  }
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> }
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> }
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className="w-5 h-5" /> }
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" /> }
    { id: 'space', name: 'Space Tech', icon: <Satellite className="w-5 h-5" /> }
    { id: 'cyber', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> }
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> }
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className="w-5 h-5" /> }
  ];
  const allServices = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              service && service.category.includes('Financial') ||;
              service && service.category.includes('Trading');
            );
          return true;
        });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (isLoading) {;
    return <LoadingFallback />;  }      opacity: 1,;
      scale: 1,;
      transition: { duration: 1 && 1.5, ease: "easeOut" as const }
    }
  };
  const categories = [;
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" /> },;
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w-5 h-5" /> },;
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className="w-5 h-5" /> },;
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" /> },;
    { id: 'space', name: 'Space Tech', icon: <Satellite className="w-5 h-5" /> },;
    { id: 'cyber', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },;
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },;
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className="w-5 h-5" /> }
  ];
  const allServices = [;
import {
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
  Target,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  ChartBar,
  Cpu,
  Atom,
  Satellite,
  Gamepad2,
  Palette,} from 'lucide-react';import {
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database;
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette;
import UltraFuturisticBackground2035 from './ui / UltraFuturisticBackground2035';
import UltraFuturisticServiceCard2035 from './ui / UltraFuturisticServiceCard2035';
import { innovative2025MicroSaasBatch } from '../data / innovative - 2025 - micro - saas - batch';
import { innovative2025ITEnterpriseBatch } from '../data / innovative - 2025 - it - enterprise - batch';
import { innovative2025AIServicesBatch } from '../data / innovative - 2025 - ai - services - batch';
// Loading fallback component;
const LoadingFallback = () =>: any (
  <div className='min - h-screen flex items - center justify - center bg - gray - 900'>    <motion.div;
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
      <p className='text - xl text - gray - 300 mb - 2'>Loading Zion Tech Group...</p>;
      <p className='text - sm text - gray - 500'>;
        Preparing your digital transformation journey;
      </p>    </motion.div>    >;
      <div className="relative">;
        <Loader2 className="w - 16 h - 16 text - cyan - 400 animate - spin mx - auto mb - 4" />;
        <div className="absolute inset - 0 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - full blur - xl opacity - 20 animate - pulse"></div>;
      </div>;
      <p className="text - xl text - gray - 300 mb - 2">Loading Zion Tech Group...</p>;
      <p className="text - sm text - gray - 500">Preparing your digital transformation journey</p>;
    </motion.div>;
  </div>);
;
const Homepage2035: React.FC = () => {
  const [is_loading, setIsLoading] = useState (true);
  const [is_visible, setIsVisible] = useState (false);
  const [active_category, setActiveCategory] = useState ('all');
;
  useEffect (() => {
    const timer = set_timeout (() => {
      setIsLoading (false);
      setIsVisible (true);
    }, 800);
;
    return () => clear_timeout (timer);  }, []);      setIsVisible (true);
    }, 800);
;
    return () => clear_timeout (timer);
  const fadeInUp = {
    initial: { opacity: 0, coordinate_y: 60 },
    animate: { opacity: 1, coordinate_y: 0 },
    transition: { duration: 0.6, ease: 'ease_out' },  }    transition: { duration: 0.6, ease: "ease_out" }
  }
;
  const stagger_container = {
    animate: {
      transition: {
        stagger_children: 0.1,
        delay_children: 0.2,
      },
    },  }
;
  const background_variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {        delay_children: 0.2;
      }
    }
  }
;
  const background_variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'ease_out' as const },
    },
  }
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: <Globe className='w - 5 h - 5' /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className='w - 5 h - 5' /> },
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className='w - 5 h - 5' /> },
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className='w - 5 h - 5' /> },
    {
      id: 'space',
      name: 'Space Tech',
      icon: <Satellite className='w - 5 h - 5' />,
    },
    {
      id: 'cyber',
      name: 'Cybersecurity',
      icon: <Shield className='w - 5 h - 5' />,
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: <Cloud className='w - 5 h - 5' />,
    },
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className='w - 5 h - 5' /> },
  ];
;
  const all_services = [;
    ...innovative2025MicroSaasBatch,
    ...innovative2025ITEnterpriseBatch,
    ...innovative2025AIServicesBatch,
  ];
;
  const filtered_services =;
    active_category === 'all';
      ? all_services;
      : all_services.filter (service => {
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('AI') ||;
              service.category.includes ('Machine Learning'));
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('IT') ||;
              service.category.includes ('Enterprise'));
          if (
            return service.name.includes ('Quantum')) {
  $2
}
          if (
            return service.category.includes ('Space')) {
  $2
}
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('Security') ||;
              service.category.includes ('Cybersecurity'));
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('Cloud') ||;
              service.category.includes ('DevOps'));
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('Financial') ||;
              service.category.includes ('Trading'));
          return true;
        });
;
  // Check condition
if ( {) {
  $2
}
    return <LoadingFallback />;  }      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "ease_out" as const }
    }
  }
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: <Globe className="w - 5 h - 5" /> },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="w - 5 h - 5" /> },
    { id: 'it', name: 'IT Enterprise', icon: <Cpu className="w - 5 h - 5" /> },
    { id: 'quantum', name: 'Quantum Tech', icon: <Atom className="w - 5 h - 5" /> },
    { id: 'space', name: 'Space Tech', icon: <Satellite className="w - 5 h - 5" /> },
    { id: 'cyber', name: 'Cybersecurity', icon: <Shield className="w - 5 h - 5" /> },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="w - 5 h - 5" /> },
    { id: 'fintech', name: 'FinTech', icon: <ChartBar className="w - 5 h - 5" /> }
  ];
;
  const all_services = [;
    ...innovative2025MicroSaasBatch;
    ...innovative2025ITEnterpriseBatch;
    ...innovative2025AIServicesBatch;
  ];


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const filteredServices = activeCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => {;
        if (activeCategory === 'ai') return service && service.category.includes('AI') || service && service.category.includes('Machine Learning');
        if (activeCategory === 'it') return service && service.category.includes('IT') || service && service.category.includes('Enterprise');
        if (activeCategory === 'quantum') return service && service.name.includes('Quantum');
        if (activeCategory === 'space') return service && service.category.includes('Space');
        if (activeCategory === 'cyber') return service && service.category.includes('Security') || service && service.category.includes('Cybersecurity');
        if (activeCategory === 'cloud') return service && service.category.includes('Cloud') || service && service.category.includes('DevOps');
        if (activeCategory === 'fintech') return service && service.category.includes('Financial') || service && service.category.includes('Trading');
        return true;
      });
  if (isLoading) {;
    return <LoadingFallback />;
<<<<<<< HEAD
<<<<<<< HEAD
;
  const filtered_services = active_category === 'all';
    ? all_services;
    : all_services.filter (service => {
        if (return service.category.includes ('AI') || service.category.includes ('Machine Learning')) {
  $2
}
        if (return service.category.includes ('IT') || service.category.includes ('Enterprise')) {
  $2
}
        if (return service.name.includes ('Quantum')) {
  $2
}
        if (return service.category.includes ('Space')) {
  $2
}
        if (return service.category.includes ('Security') || service.category.includes ('Cybersecurity')) {
  $2
}
        if (return service.category.includes ('Cloud') || service.category.includes ('DevOps')) {
  $2
}
        if (return service.category.includes ('Financial') || service.category.includes ('Trading')) {
  $2
}
        return true;
      });
;
  // Check condition
if ( {) {
  $2
}
    return <LoadingFallback />;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }



  }

=======

  }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Layout>;
      <UltraFuturisticBackground2035>;
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
  }
    ...innovative2025MicroSaasBatch;
    ...innovative2025ITEnterpriseBatch;
    ...innovative2025AIServicesBatch
  ];
  const filteredServices = activeCategory === 'all'
    ? allServices

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (activeCategory === 'ai') return service.category.includes('AI') |service.category.includes('Machine Learning');
        if (activeCategory === 'it') return service.category.includes('IT') |service.category.includes('Enterprise');
        if (activeCategory === 'quantum') return service.name.includes('Quantum');
        if (activeCategory === 'space') return service.category.includes('Space');
        if (activeCategory === 'cyber') return service.category.includes('Security') |service.category.includes('Cybersecurity');
        if (activeCategory === 'cloud') return service.category.includes('Cloud') |service.category.includes('DevOps');
        if (activeCategory === 'fintech') return service.category.includes('Financial') |service.category.includes('Trading');
        return true
      });
  if (isLoading) {
    return <LoadingFallback />
  }
    initial: { opacity: 0, scale: 0.8 },
    animate: {

  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }

  return (
    <Layout>
      <UltraFuturisticBackground2035>
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb-8'        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
              className='mb-8'

=======
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              className='mb-8'
            >
              <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </span>
              </h1>
              <p className='text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
                Pioneering the future with cutting-edge AI, Quantum Computing
                and Space Technology solutions
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'
                >
                  <span>Explore Services</span>
                  <ArrowRight className='w-5 h-5' />                </motion.button>                <motion.button
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future with cutting-edge AI, Quantum Computing, and Space Technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'
                >
                  <Play className='w-5 h-5' />                  <span>Watch Demo</span>                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'
                >
                  <Play className='w-5 h-5' />                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"
=======

                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>

              transition={{ duration: 0 && 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
transition={{ duration: 0 && 0.8 }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='mb-8'>;
              <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </span>;
              </h1>;
              <p className='text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
                Pioneering the future with cutting-edge AI, Quantum Computing,;
                and Space Technology solutions;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'>;
                  <span>Explore Services</span>;
                  <ArrowRight className='w-5 h-5' />                </motion && motion.button>                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'>;
                  <Play className='w-5 h-5' />                  <span>Watch Demo</span>                  <span>Explore Services</span>;
                  <ArrowRight className="w-5 h-5" />;
                </motion && motion.button>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'>;
                  <Play className='w-5 h-5' />                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2";
                >;
                  <Play className="w-5 h-5" />;
                  <span>Watch Demo</span>;
                </motion && motion.button>;
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
            {/* Stats */}
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}


<<<<<<< HEAD
<<<<<<< HEAD
            {/* Stats */}
            <motion&& motion.div

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
        <section className='relative min - h-screen flex items - center justify - center px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb - 8'        <section className="relative min - h-screen flex items - center justify - center px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='mb - 8';
            >;
              <h1 className='text - 4xl sm:text - 5xl lg:text - 7xl font - bold text - white mb - 6 leading - tight'>;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  Zion Tech Group;
                </span>;
              </h1>;
              <p className='text - xl sm:text - 2xl lg:text - 3xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;
                Pioneering the future with cutting - edge AI, Quantum Computing,
                and Space Technology solutions;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 400 hover:to - blue - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2';
                >;
                  <span > Explore Services</span>;
                  <ArrowRight className='w - 5 h - 5' />                </motion.button>                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='border border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2';
                >;
                  <Play className='w - 5 h - 5' />                  <span > Watch Demo</span>                  <span > Explore Services</span>;
                  <ArrowRight className="w - 5 h - 5" />;
                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='border border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2';
                >;
                  <Play className='w - 5 h - 5' />                  className="border border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2";
                >;
                  <Play className="w - 5 h - 5" />;
                  <span > Watch Demo</span>;
                </motion.button>;
              </div>;
            </motion.div>;
            {/* Stats */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  className='text-center'>;
                  <div className='text-cyan-400 mb-2 flex justify-center'>;
                    {stat && stat.icon}
                  </div>;
                  <div className='text-3xl font-bold text-white mb-1'>;
                    {stat && stat.value}
                  </div>;
                  <div className='text-gray-400 text-sm'>{stat && stat.label}</div>                </motion && motion.div>                  className="text-center";
                >;
                  <div className="text-cyan-400 mb-2 flex justify-center">{stat && stat.icon}</div>;
                  <div className="text-3xl font-bold text-white mb-1">{stat && stat.value}</div>;
                  <div className="text-gray-400 text-sm">{stat && stat.label}</div>;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: <Users className="w-8 h-8" />, value: '50K+', label: 'Happy Clients' },
                { icon: <Star className="w-8 h-8" />, value: '4.9', label: 'Average Rating' },
                { icon: <Award className="w-8 h-8" />, value: '200+', label: 'Services' },
                { icon: <TrendingUp className="w-8 h-8" />, value: '99.9%', label: 'Uptime' }
              ].map((stat, index) => (
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'
            >
              {[
                {
                  icon: <Users className='w-8 h-8' />
                  value: '50K+'
                  label: 'Happy Clients'
                }
                {
                  icon: <Star className='w-8 h-8' />
                  value: '4.9'
                  label: 'Average Rating'
                }
                {
                  icon: <Award className='w-8 h-8' />
                  value: '200+'
                  label: 'Services'
                }
                {
                  icon: <TrendingUp className='w-8 h-8' />
                  value: '99.9%'
                  label: 'Uptime'
                },              ].map((stat, index) => (                { icon: <Users className="w-8 h-8" />, value: '50K+', label: 'Happy Clients' }
                { icon: <Star className="w-8 h-8" />, value: '4.9', label: 'Average Rating' }
                { icon: <Award className="w-8 h-8" />, value: '200+', label: 'Services' }
                { icon: <TrendingUp className="w-8 h-8" />, value: '99.9%', label: 'Uptime' }
                <motion.div
                  icon: <Users className='w - 8 h - 8' />,
                  value: '50K+',
                  label: 'Happy Clients',
                },
                {
                  icon: <Star className='w - 8 h - 8' />,
                  value: '4.9',
                  label: 'Average Rating',
                },
                {
                  icon: <Award className='w - 8 h - 8' />,
                  value: '200+',
                  label: 'Services',
                },
                {
                  icon: <TrendingUp className='w - 8 h - 8' />,
                  value: '99.9%',
                  label: 'Uptime',
                },              ].map ((stat, index) => (                { icon: <Users className="w - 8 h - 8" />, value: '50K+', label: 'Happy Clients' },
                { icon: <Star className="w - 8 h - 8" />, value: '4.9', label: 'Average Rating' },
                { icon: <Award className="w - 8 h - 8" />, value: '200+', label: 'Services' },
                { icon: <TrendingUp className="w - 8 h - 8" />, value: '99.9%', label: 'Uptime' }
                <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='text-center'
                >
                  <div className='text-cyan-400 mb-2 flex justify-center'>
                    {stat.icon}
                  </div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='text-gray-400 text-sm'>{stat.label}</div>                </motion.div>                  className="text-center"
                >
                  <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className='text-gray-400 text-sm'>{stat.label}</div>                </motion.div>

                </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
              ))}
            </motion.div>
          </div>
        </section>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}
<<<<<<< HEAD
=======
            </motion.div>
          </div>
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </motion && motion.div>;
          </div>;
        </section>;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Services Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>            <motion && motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div

<<<<<<< HEAD

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div




<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div

=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
                Revolutionary Technology Solutions
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover our comprehensive portfolio of cutting-edge services
                designed to transform your business              </p>            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business
              </p>
            </motion.div>


              className='text-center mb-16'>;
              <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>;
                Revolutionary Technology Solutions;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover our comprehensive portfolio of cutting-edge services;
                designed to transform your business              </p>            >;
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">;
                Revolutionary Technology Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Discover our comprehensive portfolio of cutting-edge services designed to transform your business;
              </p>;
            </motion && motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD


            {/* Category Filter */}
            <motion&& motion.div
            {/* Category Filter */}
            <motion&& motion.div

            {/* Category Filter */}
            <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Category Filter */}
            <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Category Filter */}
            <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD


              className="flex flex-wrap justify-center gap-4 mb-12"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='flex flex-wrap justify-center gap-4 mb-12'
            >
              {categories.map(category => (                <motion.button              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }`}
                >;
                  {category && category.icon}
                  <span>{category && category.name}</span>;
                </motion && motion.button>;
              ))}
<<<<<<< HEAD

            </motion && motion.div>;
            </motion.div>
<<<<<<< HEAD




=======
<<<<<<< HEAD
=======
=======
            </motion.div>

            </motion && motion.div>;
=======
            </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Services Grid */}
            <motion&& motion.div
              variants={staggerContainer}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              initial="initial";
              whileInView="animate";
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  variants={fadeInUp}
                  className='w-full'>                  className="w-full";
                >;
                  <UltraFuturisticServiceCard2035 service={service} />;
                </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
            </motion.div>

            </motion.div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
            </motion.div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Services Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="w-full"
                >
                  <UltraFuturisticServiceCard2035 service={service} />
                </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
            </motion && motion.div>;





            {/* View All Services Button */}
            <motion&& motion.div
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}

=======
              ))}
            </motion.div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </motion && motion.div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* View All Services Button */}
            <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* View All Services Button */}
            <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-center mt-16"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='text-center mt-16'            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto'
              >
                <span>View All Services</span>
<<<<<<< HEAD


                <ArrowRight className='w-5 h-5' />              </motion.button>              className="text-center mt-16"
                <ArrowRight className='w-5 h-5' />              </motion.button>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <ArrowRight className='w-5 h-5' />              </motion.button>              className="text-center mt-16"
                <ArrowRight className='w-5 h-5' />              </motion.button>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              className='text-center mt-16'>;
              <motion&& motion.button
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto'>;
                <span>View All Services</span>;
                <ArrowRight className='w-5 h-5' />              </motion && motion.button>              className="text-center mt-16";
            >;
              <motion&& motion.button
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto'>;
                <span>View All Services</span>;
                <ArrowRight className='w-5 h-5' />                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto";
              >;
                <span>View All Services</span>;
                <ArrowRight className="w-5 h-5" />;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50'>;
          <div className='max-w-7xl mx-auto'>            <motion && motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
{/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto'
              >
                <span>View All Services</span>
                <ArrowRight className='w-5 h-5' />                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD




        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto'>            <motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div

=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
              <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                We combine innovation, expertise, and cutting-edge technology to
                deliver exceptional results
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <Brain className='w-12 h-12' />
                  title: 'AI-Powered Solutions'
                  description:
<<<<<<< HEAD

<<<<<<< HEAD
                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights',
                },
                {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights'
                }
                {
                  icon: <Shield className='w-12 h-12' />
                  title: 'Enterprise Security'
                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights',
                },
                {
<<<<<<< HEAD
=======

                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights',
                },
                {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  icon: <Shield className='w-12 h-12' />,
                  title: 'Enterprise Security',
                  description:
                    'Military-grade security protocols and compliance standards to protect your business',
                },
                {
                  icon: <Rocket className='w-12 h-12' />,
                  title: 'Space Technology',
                  description:
                    'Pioneering space tech solutions for the next generation of innovation',
                },
                {
                  icon: <Atom className='w-12 h-12' />,
                  title: 'Quantum Computing',
                  description:
                    'Access to quantum computing power for complex problem-solving',
                },
                {
                  icon: <Cloud className='w-12 h-12' />,
                  title: 'Cloud-Native',
                  description:
                    'Built for the cloud with scalability, reliability, and performance in mind',
                },
                {
                  icon: <Target className='w-12 h-12' />,
                  title: 'Results-Driven',
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  description:
                    'Military-grade security protocols and compliance standards to protect your business'
                }
                {
                  icon: <Rocket className='w-12 h-12' />
                  title: 'Space Technology'
                  description:
                    'Pioneering space tech solutions for the next generation of innovation'
                }
                {
                  icon: <Atom className='w-12 h-12' />
                  title: 'Quantum Computing'
                  description:
                    'Access to quantum computing power for complex problem-solving'
                }
                {
                  icon: <Cloud className='w-12 h-12' />
                  title: 'Cloud-Native'
                  description:
                    'Built for the cloud with scalability, reliability, and performance in mind'
                }
                {
                  icon: <Target className='w-12 h-12' />
                  title: 'Results-Driven'
                  description:
                    'Focused on delivering measurable business outcomes and ROI'
                },              ].map((feature, index) => (            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine innovation, expertise, and cutting-edge technology to deliver exceptional results
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12" />
                  title: 'AI-Powered Solutions'
                  description: 'Leverage the latest AI and machine learning technologies for intelligent automation and insights'
                }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              className='text-center mb-16'>;
              <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                We combine innovation, expertise, and cutting-edge technology to;
                deliver exceptional results;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {[;
                {;
                  icon: <Brain className='w-12 h-12' />,;
                  title: 'AI-Powered Solutions',;
                  description:;
                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights',;
                },;
                {;
                  icon: <Shield className='w-12 h-12' />,;
                  title: 'Enterprise Security',;
                  description:;
                    'Military-grade security protocols and compliance standards to protect your business',;
                },;
                {;
                  icon: <Rocket className='w-12 h-12' />,;
                  title: 'Space Technology',;
                  description:;
                    'Pioneering space tech solutions for the next generation of innovation',;
                },;
                {;
                  icon: <Atom className='w-12 h-12' />,;
                  title: 'Quantum Computing',;
                  description:;
                    'Access to quantum computing power for complex problem-solving',;
                },;
                {;
                  icon: <Cloud className='w-12 h-12' />,;
                  title: 'Cloud-Native',;
                  description:;
                    'Built for the cloud with scalability, reliability, and performance in mind',;
                },;
                {;
                  icon: <Target className='w-12 h-12' />,;
                  title: 'Results-Driven',;
                  description:;
                    'Focused on delivering measurable business outcomes and ROI',;
                },              ].map((feature, index) => (            >;
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We combine innovation, expertise, and cutting-edge technology to deliver exceptional results;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">;
              {[;
                {;
                  icon: <Brain className="w-12 h-12" />,;
                  title: 'AI-Powered Solutions',;
                  description: 'Leverage the latest AI and machine learning technologies for intelligent automation and insights';
                };
                {;
                  icon: <Shield className="w-12 h-12" />,;
                  title: 'Enterprise Security',;
                  description: 'Military-grade security protocols and compliance standards to protect your business';
                };
                {;
                  icon: <Rocket className="w-12 h-12" />,;
                  title: 'Space Technology',;
                  description: 'Pioneering space tech solutions for the next generation of innovation';
                };
                {;
                  icon: <Atom className="w-12 h-12" />,;
                  title: 'Quantum Computing',;
                  description: 'Access to quantum computing power for complex problem-solving';
                };
                {;
                  icon: <Cloud className="w-12 h-12" />,;
                  title: 'Cloud-Native',;
                  description: 'Built for the cloud with scalability, reliability, and performance in mind';
                };
                {;
                  icon: <Target className="w-12 h-12" />,;
                  title: 'Results-Driven',;
                  description: 'Focused on delivering measurable business outcomes and ROI';
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {
                  icon: <Shield className="w-12 h-12" />
                  title: 'Enterprise Security'
                  description: 'Military-grade security protocols and compliance standards to protect your business'
                }
                {
                  icon: <Rocket className="w-12 h-12" />
                  title: 'Space Technology'
                  description: 'Pioneering space tech solutions for the next generation of innovation'
                }
                {
                  icon: <Atom className="w-12 h-12" />
                  title: 'Quantum Computing'
                  description: 'Access to quantum computing power for complex problem-solving'
                }
                {
                  icon: <Cloud className="w-12 h-12" />
                  title: 'Cloud-Native'
                  description: 'Built for the cloud with scalability, reliability, and performance in mind'
                }
                {
                  icon: <Target className="w-12 h-12" />
                  title: 'Results-Driven'
                  description: 'Focused on delivering measurable business outcomes and ROI'
                }
              ].map((feature, index) => (;
                <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
              ].map((feature, index) => (
                <motion.div

              ].map((feature, index) => (
                <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
              ].map((feature, index) => (
                <motion.div

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group'



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >
                  <div className='text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3'>
                    {feature.title}
                  </h3>

                  <p className='text-gray-300'>{feature.description}</p>                </motion.div>

                </motion.div>


<<<<<<< HEAD
              ))}

            </div>;
          </div>;
        </section>;


                  className="text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  className='text-center p-6 rounded-2xl bg-gray-800/50 border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 group'

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <div className='text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300'>{feature.description}</p>                </motion.div>                >
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
                  <p className='text-gray-300'>{feature.description}</p>                </motion.div>

                </motion.div>

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              ))}



<<<<<<< HEAD
            </div>
          </div>
        </section>
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}
            </div>
          </div>
        </section>

            </div>;
          </div>;
        </section>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion && motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* CTA Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join thousands of companies already leveraging our cutting-edge;
                technology solutions;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2'>;
                  <span>Get Started Today</span>;
                  <ArrowRight className='w-5 h-5' />                </motion && motion.button>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'>                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of companies already leveraging our cutting-edge technology solutions;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2">;
                  <span>Get Started Today</span>;
                  <ArrowRight className="w-5 h-5" />;
                </motion && motion.button>;
                <motion&& motion.button
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'                  className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">;
                  Schedule a Demo;
                </motion && motion.button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </UltraFuturisticBackground2035>;
    </Layout>;
  );


};

<<<<<<< HEAD
  animate: {

};


  animate: {


}
animate: {
};

  animate: {
};

animate: {
  animate: {
=======
animate: {
  animate: {

=======
};


  animate: {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  transition: {
  staggerChildren: 0.1, delayChildren: 0.2
}
}
];
...innovative2025ITEnterpriseBatch;
...innovative2025AIServicesBatch ];
const filteredServices = activeCategory === 'all' ? allServices return (<Layout> <UltraFuturisticBackground2035> > <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </span> </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Explore Services</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button > <Play className="w-5 h-5" /> <span>Watch Demo</span> </motion.button> </div> </motion.div> {
  /* Stats */
}<motion.div </motion.div>) )
}</motion.div> </div> </section> > <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Revolutionary Technology Solutions </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of cutting-edge services designed to transform your business </p> </motion.div> {
  /* Category Filter */
}<motion.div > {
  categories.map ( (category) => (<motion.button key= {
  category.id
}whileHover= {
  {
  scale: 1.05
}whileTap= {
  {
  scale: 0.95
}onClick= {
  () => setActiveCategory (category.id)
}className= {
  `flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 $ {
  activeCategory === category.id ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
}`
}> {
  category.icon
}<span> {
  category.name
}</span> </motion.button>) )
}</motion.div> {
  /* Services Grid */
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id
}> <UltraFuturisticServiceCard2035 service= {
  service
}/> </motion.div>) )
}</motion.div> {
  /* View All Services Button */
}<motion.div > <span>View All Services</span> <ArrowRight className="w-5 h-5" /> </motion.button> </motion.div> </div> </section> > <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > We combine innovation, expertise, and cutting-edge technology to deliver exceptional results </p> </motion.div> </motion.div>) )
}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
  animate: {;
  transition: {;
  staggerChildren: 0 && 0.1, delayChildren: 0 && 0.2 ;
};
};
];
...innovative2025ITEnterpriseBatch;
...innovative2025AIServicesBatch ];
const filteredServices = activeCategory === 'all' ? allServices return (<Layout> <UltraFuturisticBackground2035> > <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Zion Tech Group </span> </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion && motion.button > <span>Explore Services</span> <ArrowRight className="w-5 h-5" /> </motion && motion.button> <motion && motion.button > <Play className="w-5 h-5" /> <span>Watch Demo</span> </motion && motion.button> </div> </motion && motion.div> {;
  /* Stats */ ;
}<motion && motion.div </motion && motion.div>) ) ;
}</motion && motion.div> </div> </section> > <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Revolutionary Technology Solutions </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of cutting-edge services designed to transform your business </p> </motion && motion.div> {;
  /* Category Filter */ ;
}<motion && motion.div > {;
  categories && categories.map ( (category) => (<motion&& motion.button key= {
  category && category.id 
}whileHover= {
  {
  scale: 1 && 1.05 
}whileTap= {
  {
  scale: 0 && 0.95 
}onClick= {
  () => setActiveCategory (category && category.id) ;
}className= {;
  `flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 $ {;
  activeCategory === category && category.id ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400' ;
}` ;
}> {;
  category && category.icon ;
}<span> {;
  category && category.name ;
}</span> </motion && motion.button>) ) ;
}</motion && motion.div> {;
  /* Services Grid */ ;
}<motion && motion.div > {;
  filteredServices && filteredServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 
}> <UltraFuturisticServiceCard2035service= {
  service 
}/> </motion && motion.div>) ) ;
}</motion && motion.div> {;
  /* View All Services Button */ ;
}<motion && motion.div > <span>View All Services</span> <ArrowRight className="w-5 h-5" /> </motion && motion.button> </motion && motion.div> </div> </section> > <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > We combine innovation, expertise, and cutting-edge technology to deliver exceptional results </p> </motion && motion.div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
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
  duration: 0 && 0.8 
}viewport= {
  {


  once: true 
}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion && motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion && motion.button> <motion && motion.button ;
};

=======

  duration: 0 && 0.8 
}viewport= {
  {
  once: true
}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button
}
export default Homepage2035;  )
}
export default Homepage2035;

  once: true 
}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button 
};

}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion && motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion && motion.button> <motion && motion.button ;
};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already leveraging our cutting-edge technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'                  className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
=======
                  className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraFuturisticBackground2035>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  )

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Homepage2035;


=======
                  className='text - center';
                >;
                  <div className='text - cyan - 400 mb - 2 flex justify - center'>;
                    {stat.icon}
                  </div>;
                  <div className='text - 3xl font - bold text - white mb - 1'>;
                    {stat.value}
                  </div>;
                  <div className='text - gray - 400 text - sm'>{stat.label}</div>                </motion.div>                  className="text - center";
                >;
                  <div className="text - cyan - 400 mb - 2 flex justify - center">{stat.icon}</div>;
                  <div className="text - 3xl font - bold text - white mb - 1">{stat.value}</div>;
                  <div className="text - gray - 400 text - sm">{stat.label}</div>))}
            </motion.div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl sm:text - 5xl font - bold text - white mb - 6'>;
                Revolutionary Technology Solutions;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Discover our comprehensive portfolio of cutting - edge services;
                designed to transform your business              </p>            >;
              <h2 className="text - 4xl sm:text - 5xl font - bold text - white mb - 6">;
                Revolutionary Technology Solutions;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Discover our comprehensive portfolio of cutting - edge services designed to transform your business;
              </p>;
            </motion.div>;
            {/* Category Filter */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex flex - wrap justify - center gap - 4 mb - 12';
            >;
              {categories.map (category => (                <motion.button              className="flex flex - wrap justify - center gap - 4 mb - 12";
            >;
              {categories.map ((category) => (
                <motion.button;
                  key={category.id}
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  on_click={() => setActiveCategory (category.id)}
                  className={`flex items - center space - x-2 px - 6 py - 3 rounded - full border transition - all duration - 300 ${
                    active_category === category.id;
                      ? 'border - cyan - 400 bg - cyan - 400 / 10 text - cyan - 400';
                      : 'border - gray - 600 text - gray - 300 hover:border - cyan - 400 hover:text - cyan - 400';
                  }`}
                >;
                  {category.icon}
                  <span>{category.name}</span>;
                </motion.button>))}
            </motion.div>;
            {/* Services Grid */}
            <motion.div;
              variants={stagger_container}
              initial='initial';
              whileInView='animate';
              viewport={{ once: true }}
              className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'            >              initial="initial";
              whileInView="animate";
              viewport={{ once: true }}
              className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={fadeInUp}
                  className='w - full'                >                  className="w - full";
                >;
                  <UltraFuturisticServiceCard2035 service={service} />;
                </motion.div>))}
            </motion.div>;
            {/* View All Services Button */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='text - center mt - 16'            >;
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 hover:from - purple - 400 hover:to - pink - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2 mx - auto';
              >;
                <span > View All Services</span>;
                <ArrowRight className='w - 5 h - 5' />              </motion.button>              className="text - center mt - 16";
            >;
              <motion.button;
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                className='bg - gradient - to - r from - purple - 500 to - pink - 500 hover:from - purple - 400 hover:to - pink - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2 mx - auto';
              >;
                <span > View All Services</span>;
                <ArrowRight className='w - 5 h - 5' />                className="bg - gradient - to - r from - purple - 500 to - pink - 500 hover:from - purple - 400 hover:to - pink - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2 mx - auto";
              >;
                <span > View All Services</span>;
                <ArrowRight className="w - 5 h - 5" />;
            </motion.div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 900 / 50'>;
          <div className='max - w-7xl mx - auto'>            <motion.div        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 900 / 50">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl sm:text - 5xl font - bold text - white mb - 6'>;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                We combine innovation, expertise, and cutting - edge technology to;
                deliver exceptional results;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              {[;
                {
                  icon: <Brain className='w - 12 h - 12' />,
                  title: 'AI - Powered Solutions',
                  description:;
                    'Leverage the latest AI and machine learning technologies for intelligent automation and insights',
                },
                {
                  icon: <Shield className='w - 12 h - 12' />,
                  title: 'Enterprise Security',
                  description:;
                    'Military - grade security protocols and compliance standards to protect your business',
                },
                {
                  icon: <Rocket className='w - 12 h - 12' />,
                  title: 'Space Technology',
                  description:;
                    'Pioneering space tech solutions for the next generation of innovation',
                },
                {
                  icon: <Atom className='w - 12 h - 12' />,
                  title: 'Quantum Computing',
                  description:;
                    'Access to quantum computing power for complex problem - solving',
                },
                {
                  icon: <Cloud className='w - 12 h - 12' />,
                  title: 'Cloud - Native',
                  description:;
                    'Built for the cloud with scalability, reliability, and performance in mind',
                },
                {
                  icon: <Target className='w - 12 h - 12' />,
                  title: 'Results - Driven',
                  description:;
                    'Focused on delivering measurable business outcomes and ROI',
                },              ].map ((feature, index) => (            >;
              <h2 className="text - 4xl sm:text - 5xl font - bold text - white mb - 6">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                We combine innovation, expertise, and cutting - edge technology to deliver exceptional results;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {[;
                {
                  icon: <Brain className="w - 12 h - 12" />,
                  title: 'AI - Powered Solutions',
                  description: 'Leverage the latest AI and machine learning technologies for intelligent automation and insights';
                }
                {
                  icon: <Shield className="w - 12 h - 12" />,
                  title: 'Enterprise Security',
                  description: 'Military - grade security protocols and compliance standards to protect your business';
                }
                {
                  icon: <Rocket className="w - 12 h - 12" />,
                  title: 'Space Technology',
                  description: 'Pioneering space tech solutions for the next generation of innovation';
                }
                {
                  icon: <Atom className="w - 12 h - 12" />,
                  title: 'Quantum Computing',
                  description: 'Access to quantum computing power for complex problem - solving';
                }
                {
                  icon: <Cloud className="w - 12 h - 12" />,
                  title: 'Cloud - Native',
                  description: 'Built for the cloud with scalability, reliability, and performance in mind';
                }
                {
                  icon: <Target className="w - 12 h - 12" />,
                  title: 'Results - Driven',
                  description: 'Focused on delivering measurable business outcomes and ROI';
                }
              ].map ((feature, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text - center p - 6 rounded - 2xl bg - gray - 800 / 50 border border - gray - 700 / 30 hover:border - cyan - 400 / 50 transition - all duration - 300 group';
                >;
                  <div className='text - cyan - 400 mb - 4 flex justify - center group - hover:scale - 110 transition - transform duration - 300'>;
                    {feature.icon}
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 3'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 300'>{feature.description}</p>                </motion.div>                >;
                  <div className="text - cyan - 400 mb - 4 flex justify - center group - hover:scale - 110 transition - transform duration - 300">;
                    {feature.icon}
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3">{feature.title}</h3>;
                  <p className="text - gray - 300">{feature.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl sm:text - 5xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join thousands of companies already leveraging our cutting - edge;
                technology solutions;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 400 hover:to - blue - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2';
                >;
                  <span > Get Started Today</span>;
                  <ArrowRight className='w - 5 h - 5' />                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='border border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                >                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join thousands of companies already leveraging our cutting - edge technology solutions;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 400 hover:to - blue - 400 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 flex items - center space - x-2";
                >;
                  <span > Get Started Today</span>;
                  <ArrowRight className="w - 5 h - 5" />;
                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='border border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                  className="border border - cyan - 400 text - cyan - 400 hover: bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300";
                >;
                  Schedule a Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </UltraFuturisticBackground2035>;
    </Layout>);
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
};

  animate: {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

  animate: {
  transition: {
  stagger_children: 0.1, delay_children: 0.2;
}
;
}
];
...innovative2025ITEnterpriseBatch;
...innovative2025AIServicesBatch ];
const filtered_services = active_category === 'all' ? all_services return (<Layout> <UltraFuturisticBackground2035> > <h1 className="text - 4xl sm:text - 5xl lg:text - 7xl font - bold text - white mb - 6 leading - tight" > <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent" > Zion Tech Group </span> </h1> </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center" > <motion.button > <span > Explore Services</span> <ArrowRight className="w - 5 h - 5" /> </motion.button> <motion.button > <Play className="w - 5 h - 5" /> <span > Watch Demo</span> </motion.button> </div> </motion.div> {
  /* Stats */;
}<motion.div </motion.div>) );
}</motion.div> </div> </section> > <h2 className="text - 4xl sm:text - 5xl font - bold text - white mb - 6" > Revolutionary Technology Solutions </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Discover our comprehensive portfolio of cutting - edge services designed to transform your business </p> </motion.div> {
  /* Category Filter */;
}<motion.div > {
  categories.map ( (category) => (<motion.button key= {
  category.id;
}while_hover= {
  {
  scale: 1.05;
}while_tap= {
  {
  scale: 0.95;
}on_click= {
  () => setActiveCategory (category.id);
}className= {
  `flex items - center space - x-2 px - 6 py - 3 rounded - full border transition - all duration - 300 $ {
  active_category === category.id ? 'border - cyan - 400 bg - cyan - 400 / 10 text - cyan - 400' : 'border - gray - 600 text - gray - 300 hover:border - cyan - 400 hover:text - cyan - 400';
}`;
}> {
  category.icon;
}<span> {
  category.name;
}</span> </motion.button>) );
}</motion.div> {
  /* Services Grid */;
}<motion.div > {
  filtered_services.map ( (service, index) => (<motion.div key= {
  service.id;
}> <UltraFuturisticServiceCard2035 service= {
  service;
}/> </motion.div>) );
}</motion.div> {
  /* View All Services Button */;
}<motion.div > <span > View All Services</span> <ArrowRight className="w - 5 h - 5" /> </motion.button> </motion.div> </div> </section> > <h2 className="text - 4xl sm:text - 5xl font - bold text - white mb - 6" > Why Choose Zion Tech Group? </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > We combine innovation, expertise, and cutting - edge technology to deliver exceptional results </p> </motion.div> </motion.div>) );
}</div> </div> </section> <motion.div initial= {
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
  once: true
}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button
}
export default Homepage2035);
}
;
export default Homepage2035;
<<<<<<< HEAD


  once: true 

}> <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies already leveraging our cutting-edge technology solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <motion.button > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </motion.button> <motion.button 
};
export default Homepage2035;
export default Homepage2035;  )
};

export default Homepage2035;
export default Homepage2035;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
