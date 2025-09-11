
<<<<<<< HEAD
<<<<<<< HEAD

import { 
  innovativeRealMicroSaasServices2025 
} from '../data/2025-innovative-real-micro-saas-services';
import {
  innovativeAIServicesEnhanced2025
} from '../data/2025-innovative-ai-services-enhanced';
import {
  innovativeITServicesEnhanced2025
} from '../data/2025-innovative-it-services-enhanced';
import {
  emergingTechServicesEnhanced2025
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
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import { ;
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import {

=======
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  innovativeRealMicroSaasServices2025 ;
} from '../data/2025-innovative-real-micro-saas-services';
import { ;
  innovativeAIServicesEnhanced2025 ;
} from '../data/2025-innovative-ai-services-enhanced';
import { ;
  innovativeITServicesEnhanced2025 ;
} from '../data/2025-innovative-it-services-enhanced';
import { ;
  emergingTechServicesEnhanced2025 ;
<<<<<<< HEAD
<<<<<<< HEAD
} from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



} from '../data/2025-emerging-tech-services-enhanced';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
<<<<<<< HEAD


import {;
  ArrowRight,;
  Star,;
  Brain,;
  Atom,;
  Shield,;
  Zap,;
  Users,;
  Globe,;
  TrendingUp,;
  Rocket,;
  Cpu,;
  Lock,;
  BarChart3,;
  Cloud,;
=======
import {
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Rocket,
  Cpu,
  Lock,
  BarChart3,;
  Cloud,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react';
interface Homepage2025Props {;
  showInternalNav?: boolean;
const Homepage2025: React.FC<Homepage2025Props> = ({;
  showInternalNav = true,;
}) => {  const [activeSection, setActiveSection] = useState('hero');} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
  ArrowRight, Star, Brain, Atom, Shield, Zap;
  Users, Globe, TrendingUp, Rocket, Cpu, Lock;
  BarChart3, Cloud
} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
interface Homepage2025Props { showInternalNav?: boolean }
const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


interface Homepage2025Props { showInternalNav?: boolean }


const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  useEffect(() => {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setIsVisible(true);
    const interval = setInterval(() => {;
      setCurrentServiceIndex(;
        prev => (prev + 1) % innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.length;
      );
    }, 5000);
    return () => clearInterval(interval);  }, []);      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const scrollToSection = (sectionId: string) => {;
    const element = document && document.getElementById(sectionId),;
    if (element) {;
      element && element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);    }
  };
  const allServices = [      element && element.scrollIntoView({ behavior: 'smooth' }),;
<<<<<<< HEAD
<<<<<<< HEAD
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  const allServices = [;
    ...innovativeRealMicroSaasServices2025,;
    ...innovativeAIServicesEnhanced2025,;
    ...innovativeITServicesEnhanced2025,;
    ...emergingTechServicesEnhanced2025,;
    ...advancedAIAutomationServices,;
    ...quantumCybersecurityServices,;
    ...innovativeMicroSaasServices2026,;
    ...specializedITSolutions2026,;
    ...emergingTechServices2026,;
  ];
  const featuredServices = allServices;
    .filter(service => service && service.popular);

    .slice(0, 12);
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length)
import { innovativeRealMicroSaasServices2025 } from '../data / 2025 - innovative - real - micro - saas - services';
import { innovativeAIServicesEnhanced2025 } from '../data / 2025 - innovative - ai - services - enhanced';
import { innovativeITServicesEnhanced2025 } from '../data / 2025 - innovative - it - services - enhanced';
import { emergingTechServicesEnhanced2025 } from '../data / 2025 - emerging - tech - services - enhanced';import { advancedAIAutomationServices } from '../data / 2026 - advanced - ai - automation - services';import {
  innovativeRealMicroSaasServices2025;
} from '../data / 2025 - innovative - real - micro - saas - services';
import {
  innovativeAIServicesEnhanced2025;
} from '../data / 2025 - innovative - ai - services - enhanced';
import {
  innovativeITServicesEnhanced2025;
} from '../data / 2025 - innovative - it - services - enhanced';
import {
  emergingTechServicesEnhanced2025;
} from '../data / 2025 - emerging - tech - services - enhanced';
import { quantumCybersecurityServices } from '../data / 2026 - quantum - cybersecurity - services';
import { innovativeMicroSaasServices2026 } from '../data / 2026 - innovative - micro - saas - expansion';
import { specializedITSolutions2026 } from '../data / 2026 - specialized - it - solutions';
import { emergingTechServices2026 } from '../data / 2026 - emerging - tech - services';
import UltraFuturisticBackground2026 from './backgrounds / UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui / UltraFuturisticServiceCard2026';
import Link from 'next / link';
import {
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Rocket,
  Cpu,
  Lock,
  BarChart3,
  Cloud,
} from 'lucide-react';
;
interface Homepage2025Props {
  showInternalNav?: boolean;
;
const Homepage2025: React.FC < Homepage2025Props> = ({
  showInternalNav = true,
}) => {  const [active_section, setActiveSection] = useState ('hero');} from 'lucide-react';
;
interface Homepage2025Props { showInternalNav?: boolean }
const Homepage2025: React.FC < Homepage2025Props> = ({ showInternalNav = true }) => {
  const [active_section, setActiveSection] = useState ('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState (0);
  const [is_visible, setIsVisible] = useState (false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
;
  useEffect (() => {
    setIsVisible (true);
    const interval = set_interval (() => {
      setCurrentServiceIndex (
        prev => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clear_interval (interval);  }, []);      setCurrentServiceIndex ((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
<<<<<<< HEAD
<<<<<<< HEAD
    }, 5000);
    return () => clear_interval (interval);
  }, []);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }, 5000);
    return () => clear_interval (interval);
  }, []);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const scrollToSection = (section_id: string) =>: any {
    const element = document.getElementById (section_id),
    // Check condition
if ( {) {
  $2
}
      element.scrollIntoView ({ behavior: 'smooth' });
      setActiveSection (section_id);
      setIsMobileMenuOpen (false);    }
  }
;
  const all_services = [      element.scrollIntoView ({ behavior: 'smooth' }),
      setActiveSection (section_id);
      setIsMobileMenuOpen (false);
    }
  }
;
  const all_services = [;
<<<<<<< HEAD
<<<<<<< HEAD

interface Homepage2025Props {_showInternalNav?: boolean}

const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {
  const [activeSection, setActiveSection] = useState('hero'),
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [isVisible, setIsVisible] = useState(false),
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),

  useEffect(() => {
    setIsVisible(true),
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length)
    }, 5000),
    return () => clearInterval(interval)
  }, []),
    }
  },

  const _allServices = [

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices,
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
<<<<<<< HEAD
<<<<<<< HEAD
...emergingTechServices2026,
=======
    ...emergingTechServices2026,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    ...emergingTechServices2026,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
;
  const featured_services = all_services;
    .filter (service => service.popular);
    .slice (0, 12);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ...innovativeRealMicroSaasServices2025;
    ...innovativeAIServicesEnhanced2025;
    ...innovativeITServicesEnhanced2025;
    ...emergingTechServicesEnhanced2025;
    ...advancedAIAutomationServices;
    ...quantumCybersecurityServices;
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;
    ...emergingTechServices2026;
  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);

  const navigationSections = [
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  const featured_services = all_services.filter (service => service.popular).slice (0, 12);
  const navigation_sections = [;

<<<<<<< HEAD
<<<<<<< HEAD
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);
  const navigationSections = [
;
  const featured_services = all_services.filter (service => service.popular).slice (0, 12);
  const navigation_sections = [;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
<<<<<<< HEAD
<<<<<<< HEAD
title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth",

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: Brain
    }
    {
      title: 'Quantum Computing'
      description:
        'Next-generation quantum solutions for complex problem-solving and advanced cryptography'
      icon: Atom
    }
    {
      title: 'Cybersecurity Excellence'
      description:
        'Enterprise-grade security solutions with AI-powered threat detection and response'
      icon: Shield
    }
    {
      title: 'Process Automation'
      description:
        'Intelligent automation that streamlines operations and enhances productivity'
      icon: Zap
    },  ];      title: "Process Automation"
      description: "Intelligent automation that streamlines operations and enhances productivity"
      icon: Zap
    }
<<<<<<< HEAD
<<<<<<< HEAD
  ];
=======

  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
  };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const staggerContainer = {
    initial: {}
    animate: {
      transition: {
<<<<<<< HEAD


=======
        staggerChildren: 0.1
      }
    }
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        staggerChildren: 0.1,
      },
    },


<<<<<<< HEAD
<<<<<<< HEAD
        staggerChildren: 0.1
      }
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const featuredServices = allServices && allServices.filter(service => service && service.popular).slice(0, 12);
  const navigationSections = [;
    { id: 'hero', label: 'Home', icon: '🏠' },;
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },;
    { id: 'ai', label: 'AI Services', icon: '🧠' },;
    { id: 'automation', label: 'AI Automation', icon: '⚡' },;
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },;
    { id: 'it', label: 'IT Solutions', icon: '💻' },;
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },;
    { id: 'contact', label: 'Contact', icon: '📞' },  ];
  const features = [;
    {    { id: 'contact', label: 'Contact', icon: '📞' }
  ];
  const features = [;
    {;
      title: 'AI-Powered Innovation',;
      description:;
        'Cutting-edge artificial intelligence solutions that transform business operations and drive growth',;
      icon: Brain,;
    },;
    {;
      title: 'Quantum Computing',;
      description:;
        'Next-generation quantum solutions for complex problem-solving and advanced cryptography',;
      icon: Atom,;
    },;
    {;
      title: 'Cybersecurity Excellence',;
      description:;
        'Enterprise-grade security solutions with AI-powered threat detection and response',;
      icon: Shield,;
    },;
    {;
      title: 'Process Automation',;
      description:;
        'Intelligent automation that streamlines operations and enhances productivity',;
      icon: Zap,;
    },  ];      title: "Process Automation",;
      description: "Intelligent automation that streamlines operations and enhances productivity",;
      icon: Zap;
    }
  const itemVariants = {;
    initial: { opacity: 0, y: 20 },;
    animate: { opacity: 1, y: 0 },;
    transition: { duration: 0 && 0.6 },  };    transition: { duration: 0 && 0.6 }
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const staggerContainer = {;
    initial: {},;
    animate: {;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },;
  };
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraFuturisticBackground2026 intensity='medium' theme='quantum'>;
      {showInternalNav && (;
        <>;
          {/* Navigation */}
          <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10'>;
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
              <div className='flex justify-between items-center h-16'>;
                <motion&& motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD

                  className='flex items-center space-x-2'>;
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg'></div>;
                  <span className='text-white font-bold text-xl'>;
                    ZionTech Group;
                  </span>;
                </motion && motion.div>;
  };
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Desktop Navigation */}
                <div className='hidden lg:flex space-x-8'>;
                  {navigationSections && navigationSections.map(section => (                    <button}
  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">;
      {showInternalNav && (;
        <>;
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">;
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
              <div className="flex justify-between items-center h-16">;
                <motion&& motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className="flex items-center space-x-2">;
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>;
                  <span className="text-white font-bold text-xl">ZionTech Group</span>;
                </motion && motion.div>;
    { id: 'contact', label: 'Contact', icon: '📞' },  ];
;
  const features = [;
    {    { id: 'contact', label: 'Contact', icon: '📞' }
  ];
;
  const features = [;
    {
      title: 'AI - Powered Innovation',
      description:;
        'Cutting - edge artificial intelligence solutions that transform business operations and drive growth',
      icon: Brain,
    },
    {
      title: 'Quantum Computing',
      description:;
        'Next - generation quantum solutions for complex problem - solving and advanced cryptography',
      icon: Atom,
    },
    {
      title: 'Cybersecurity Excellence',
      description:;
        'Enterprise - grade security solutions with AI - powered threat detection and response',
      icon: Shield,
    },
    {
      title: 'Process Automation',
      description:;
        'Intelligent automation that streamlines operations and enhances productivity',
      icon: Zap,
    },  ];      title: "Process Automation",
      description: "Intelligent automation that streamlines operations and enhances productivity",
      icon: Zap;
    }
  const item_variants = {
    initial: { opacity: 0, coordinate_y: 20 },
    animate: { opacity: 1, coordinate_y: 0 },
    transition: { duration: 0.6 },  }    transition: { duration: 0.6 }
  }
;
  const stagger_container = {
    initial: {},
    animate: {
      transition: {
        stagger_children: 0.1,
      },
    },
  }
;
  return (
    <UltraFuturisticBackground2026 intensity='medium' theme='quantum'>;
      {showInternalNav && (
        <>;
          {/* Navigation */}
          <nav className='fixed top - 0 left - 0 right - 0 z - 50 bg - black / 20 backdrop - blur - xl border - b border - white / 10'>;
            <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
              <div className='flex justify - between items - center h - 16'>;
                <motion.div;
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  className='flex items - center space - x-2';
                >;
                  <div className='w - 8 h - 8 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - lg'></div>;
                  <span className='text - white font - bold text - xl'>;
                    ZionTech Group;
                  </span>;
                </motion.div>;
                {/* Desktop Navigation */}
                <div className='hidden lg:flex space - x-8'>;
                  {navigation_sections.map (section => (                    <button  }
;
  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">;
      {showInternalNav && (
        <>;
          {/* Navigation */}
          <nav className="fixed top - 0 left - 0 right - 0 z - 50 bg - black / 20 backdrop - blur - xl border - b border - white / 10">;
            <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
              <div className="flex justify - between items - center h - 16">;
                <motion.div;
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  className="flex items - center space - x-2";
                >;
                  <div className="w - 8 h - 8 bg - gradient - to - r from - cyan - 400 to - blue - 500 rounded - lg"></div>;
                  <span className="text - white font - bold text - xl">ZionTech Group</span>;
                </motion.div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Desktop Navigation */}
                <div className="hidden lg:flex space - x-8">;
                  {navigation_sections.map ((section) => (
                    <button;

                  {navigationSections.map(section => (                    <button  };


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      key={section.id}
                      on_click={() => scrollToSection (section.id)}
                      className={`flex items - center space - x-2 text - sm font - medium transition - all duration - 300 ${
                        active_section === section.id;
                          ? 'text - cyan - 400 border - b-2 border - cyan - 400';
                          : 'text - gray - 300 hover:text - cyan - 400';
                      }`}
<<<<<<< HEAD
<<<<<<< HEAD
                </div>;
                {/* Contact Info */}
                <motion&& motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden md:flex items-center space-x-4"
                >
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"

  const _staggerContainer = {_initial: {}
    animate: {_transition: {
        staggerChildren: 0.1}
    }
  },

  return (
    <UltraFuturisticBackground2026 intensity=&quot;medium&quot; theme=&quot;quantum&quot;>
      {showInternalNav && (
        <>
          {/* Navigation */}
          <nav className=&quot;fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10&quot;>
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
              <div className=&quot;flex justify-between items-center h-16&quot;>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className=&quot;flex items-center space-x-2&quot;
                >
                  <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg&quot;></div>
                  <span className=&quot;text-white font-bold text-xl&quot;>ZionTech Group</span>
                </motion.div>
                
                {/* Desktop Navigation */}
                <div className=&quot;hidden lg:flex space-x-8&quot;>
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={_() => scrollToSection(section.id)}
                      className={_`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? 'text-cyan-400 border-b-2 border-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'}`}
                    >
                      <span>{_section.icon}</span>
                      <span>{_section.label}</span>
                    </button>
                  ))}
                </div>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                </div>;


<<<<<<< HEAD



                {_/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className=&quot;hidden md:flex items-center space-x-4&quot;
                >
                  <a
                    href=&quot;tel:+13024640950&quot;
                    className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors text-sm&quot;

import React, { useState, useEffect, Suspense } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import {
  innovativeRealMicroSaasServices2025
} from '../data/2025-innovative-real-micro-saas-services';
import {
  innovativeAIServicesEnhanced2025
} from '../data/2025-innovative-ai-services-enhanced';
import {
  innovativeITServicesEnhanced2025
} from '../data/2025-innovative-it-services-enhanced';
import {
  emergingTechServicesEnhanced2025
  innovativeRealMicroSaasServices2025 ;
} from '../data/2025-innovative-real-micro-saas-services';
import { 
  innovativeAIServicesEnhanced2025 ;
} from '../data/2025-innovative-ai-services-enhanced';
import { 
  innovativeITServicesEnhanced2025 ;
} from '../data/2025-innovative-it-services-enhanced';
import { 
  emergingTechServicesEnhanced2025 ;
} from '../data/2025-emerging-tech-services-enhanced';
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import {
  ArrowRight
  Star
  Brain
  Atom
  Shield
  Zap
  Users
  Globe
  TrendingUp
  Rocket
  Cpu
  Lock
  BarChart3
  Cloud;
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  Users,
  Globe,
  TrendingUp,
  Rocket,
  Cpu,
  Lock,
  BarChart3,;
  Cloud,;
} from 'lucide-react';
interface Homepage2025Props {
  showInternalNav?: boolean;
const Homepage2025: React.FC<Homepage2025Props> = ({
  showInternalNav = true
}) => {  const [activeSection, setActiveSection] = useState('hero');} from 'lucide-react';
interface Homepage2025Props { showInternalNav?: boolean }
const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex(
        prev => (prev + 1) % innovativeRealMicroSaasServices2025.length
      );
    }, 5000);
    return () => clearInterval(interval);  }, []);      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length)
    }, 5000);
    return () => clearInterval(interval)
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);    }
  }
  const allServices = [      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false)
    }
  }
  const allServices = [
    ...innovativeRealMicroSaasServices2025
    ...innovativeAIServicesEnhanced2025
    ...innovativeITServicesEnhanced2025
    ...emergingTechServicesEnhanced2025
    ...advancedAIAutomationServices
    ...quantumCybersecurityServices
    ...innovativeMicroSaasServices2026
    ...specializedITSolutions2026
    ...emergingTechServices2026
  ];
  const featuredServices = allServices
    .filter(service => service.popular)
    .slice(0, 12);
    ...innovativeRealMicroSaasServices2025;
    ...innovativeAIServicesEnhanced2025;
    ...innovativeITServicesEnhanced2025;
    ...emergingTechServicesEnhanced2025;
    ...advancedAIAutomationServices;
    ...quantumCybersecurityServices;
    ...innovativeMicroSaasServices2026;
    ...specializedITSolutions2026;
    ...emergingTechServices2026
  ];
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);
  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' }
    { id: 'services', label: 'Micro SAAS', icon: '🚀' }
    { id: 'ai', label: 'AI Services', icon: '🧠' }
    { id: 'automation', label: 'AI Automation', icon: '⚡' }
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' }
    { id: 'it', label: 'IT Solutions', icon: '💻' }
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' }
    { id: 'contact', label: 'Contact', icon: '📞' },  ];
  const features = [
    {    { id: 'contact', label: 'Contact', icon: '📞' }
  ];
  const features = [
    {
      title: 'AI-Powered Innovation'
      description:
        'Cutting-edge artificial intelligence solutions that transform business operations and drive growth'
      icon: Brain
    }
    {
      title: 'Quantum Computing'
      description:
        'Next-generation quantum solutions for complex problem-solving and advanced cryptography'
      icon: Atom
    }
    {
      title: 'Cybersecurity Excellence'
      description:
        'Enterprise-grade security solutions with AI-powered threat detection and response'
      icon: Shield
    }
    {
      title: 'Process Automation'
      description:
        'Intelligent automation that streamlines operations and enhances productivity'
      icon: Zap
    },  ];      title: "Process Automation"
      description: "Intelligent automation that streamlines operations and enhances productivity"
      icon: Zap
    }
  const itemVariants = {
    initial: { opacity: 0, y: 20 }
    animate: { opacity: 1, y: 0 }
    transition: { duration: 0.6 },  };    transition: { duration: 0.6 }
  }
  const staggerContainer = {
    initial: {}
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
        staggerChildren: 0.1,
      },
    },

  };

  return (
    <UltraFuturisticBackground2026 intensity='medium' theme='quantum'>
      {showInternalNav && (
        <>
          {/* Navigation */}
          <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex justify-between items-center h-16'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className='flex items-center space-x-2'
                >
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg'></div>
                  <span className='text-white font-bold text-xl'>
                    ZionTech Group
                  </span>
                </motion.div>
                {/* Desktop Navigation */}
                <div className='hidden lg:flex space-x-8'>
                  {navigationSections.map(section => (                    <button  }
                  {navigationSections.map(section => (                    <button  };

  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">
      {showInternalNav && (
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
                  <span className="text-white font-bold text-xl">ZionTech Group</span>
                </motion.div>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-8">
                  {navigationSections.map((section) => (
                    <button
                  {navigationSections.map(section => (                    <button

                    <button

                    <button

                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? 'text-cyan-400 border-b-2 border-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>

<<<<<<< HEAD
=======
=======
                </div>;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}

<<<<<<< HEAD
<<<<<<< HEAD
                  className='hidden md:flex items-center space-x-4'
                >
                  <a
                    href='tel:+13024640950'
                    className='text-cyan-400 hover:text-cyan-300 transition-colors text-sm'                  >
                    +1 302 464 0950
                  </a>
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm'                  >                  className="hidden md:flex items-center space-x-4"
                >
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    +1 302 464 0950
                  </a>
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm'                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </motion.div>



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {/* Mobile Menu Button */}
                <button

                  className="lg:hidden text-white p-2"

                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

                  </svg>

                </button>
              </div>

                >;
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />;
                </button>;
              </div>;


=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Mobile Navigation Menu */}
              <AnimatePresence>;
                {isMobileMenuOpen && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD


<<<<<<< HEAD
                    className="lg:hidden border-t border-white/10"
                  >
                    <div className="py-4 space-y-2">
                      {navigationSections.map((section) => (
                        <button
                {/* Mobile Menu Button */}
                <button
                  className='lg:hidden text-white p-2'
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />                  </svg>                  className="lg:hidden text-white p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='lg:hidden border-t border-white/10'
                  >
                    <div className='py-4 space-y-2'>
                      {navigationSections.map(section => (                        <button                    className="lg:hidden border-t border-white/10"
                  >
                    <div className="py-4 space-y-2">
                      {navigationSections.map((section) => (
                      {navigationSections.map(section => (                        <button

<<<<<<< HEAD
                        <button

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-white/10'
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
                          <span>{section && section.icon}</span>;
                          <span>{section && section.label}</span>;
                        </button>;
                      ))}
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="pt-4 border-t border-white/10">
=======
                      <div className='pt-4 border-t border-white/10'>
                        <a
                          href='tel:+13024640950'
                          className='flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300'                        >                      <div className="pt-4 border-t border-white/10">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <a
                          href="tel:+13024640950"
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                          <span>📱</span>
                          <span>+1 302 464 0950</span>
                        </a>
                        <a
                          href='mailto:kleber@ziontechgroup.com'
                          className='flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300'                        >                          href="mailto:kleber@ziontechgroup.com"
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                        >
                          <span>✉️</span>
                          <span>kleber@ziontechgroup.com</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                )}
</AnimatePresence>;
            </div>;
          </nav>;
        </>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======

      {/* Hero Section */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section
        id='hero'
        className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16'>;
        <div className='text-center z-10 max-w-6xl mx-auto'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-center max-w-6xl mx-auto relative z-10'>;
            <motion&& motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >



          <motion.div
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='text-center max-w-6xl mx-auto relative z-10'            className="text-center max-w-6xl mx-auto relative z-10">;
            <motion&& motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">;
              <motion&& motion.div
                initial={{ opacity: 0, scale: 0 && 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                    >;
                      <span>{section.icon}</span>;
                      <span>{section.label}</span>;
                    </button>))}
                </div>;
                {/* Contact Info */}
                <motion.div;
                  initial={{ opacity: 0, coordinate_x: 20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  className='hidden md:flex items - center space - x-4';
                >;
                  <a;
                    href='tel:+13024640950';
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm'                  >;
                    +1 302 464 0950;
                  </a>;
                  <a;
                    href='mailto:kleber@ziontechgroup.com';
                    className='bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 4 py - 2 rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 text - sm'                  >                  className="hidden md:flex items - center space - x-4";
                >;
                  <a;
                    href="tel:+13024640950";
                    className="text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm";
                  >;
                    +1 302 464 0950;
                  </a>;
                  <a;
                    href='mailto:kleber@ziontechgroup.com';
                    className='bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 4 py - 2 rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 text - sm'                    href="mailto:kleber@ziontechgroup.com";
                    className="bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 4 py - 2 rounded - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300 text - sm";
                  >;
                    Contact Us;
                  </a>;
                </motion.div>;
                {/* Mobile Menu Button */}
                <button;
                  className='lg:hidden text - white p - 2';
                  on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
                >;
                  <svg;
                    className='w - 6 h - 6';
                    fill='none';
                    stroke='current_color';
                    view_box='0 0 24 24';
                  >;
                    <path;
                      stroke_linecap='round';
                      stroke_linejoin='round';
                      stroke_width={2}
                      d='M4 6h16M4 12h16M4 18h16';
                    />                  </svg>                  className="lg:hidden text - white p - 2";
                  on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
                >;
                  <svg className="w - 6 h - 6" fill="none" stroke="current_color" view_box="0 0 24 24">;
                    <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4 6h16M4 12h16M4 18h16" />;
                </button>;
              </div>;
              {/* Mobile Navigation Menu */}
              <AnimatePresence>;
                {isMobileMenuOpen && (
                  <motion.div;
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className='lg:hidden border - t border - white / 10';
                  >;
                    <div className='py - 4 space - y-2'>;
                      {navigation_sections.map (section => (                        <button                    className="lg:hidden border - t border - white / 10";
                  >;
                    <div className="py - 4 space - y-2">;
                      {navigation_sections.map ((section) => (
                          key={section.id}
                          on_click={() => scrollToSection (section.id)}
                          className={`flex items - center space - x-3 w - full text - left px - 4 py - 2 rounded - lg transition - all duration - 300 ${
                            active_section === section.id;
                              ? 'bg - cyan - 400 / 20 text - cyan - 400';
                              : 'text - gray - 300 hover:bg - white / 10';
                          }`}
                        >;
                          <span>{section.icon}</span>;
                          <span>{section.label}</span>;
                        </button>))}
                      <div className='pt - 4 border - t border - white / 10'>;
                        <a;
                          href='tel:+13024640950';
                          className='flex items - center space - x-3 px - 4 py - 2 text - cyan - 400 hover:bg - white / 10 rounded - lg transition - all duration - 300'                        >                      <div className="pt - 4 border - t border - white / 10">;
                        <a;
                          href="tel:+13024640950";
                          className="flex items - center space - x-3 px - 4 py - 2 text - cyan - 400 hover:bg - white / 10 rounded - lg transition - all duration - 300";
                          <span>📱</span>;
                          <span>+1 302 464 0950</span>;
                        </a>;
                        <a;
                          href='mailto:kleber@ziontechgroup.com';
                          className='flex items - center space - x-3 px - 4 py - 2 text - cyan - 400 hover:bg - white / 10 rounded - lg transition - all duration - 300'                        >                          href="mailto:kleber@ziontechgroup.com";
                          className="flex items - center space - x-3 px - 4 py - 2 text - cyan - 400 hover:bg - white / 10 rounded - lg transition - all duration - 300";
                        >;
                          <span>✉️</span>;
                          <span > kleber@ziontechgroup.com</span>;
                        </a>;
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
          </nav>;
        </>)}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* Hero Section */}
      <section;
        id='hero';
        className='relative min - h-screen flex items - center justify - center px - 4 sm:px - 6 lg:px - 8 pt - 16';
      >;
        <div className='text - center z - 10 max - w-6xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center max - w-6xl mx - auto relative z - 10'          >;
            <motion.div;
              animate={{ coordinate_y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'            >      <section id="hero" className="relative min - h-screen flex items - center justify - center px - 4 sm:px - 6 lg:px - 8 pt - 16">;
        <div className="text - center z - 10 max - w-6xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center max - w-6xl mx - auto relative z - 10'            className="text - center max - w-6xl mx - auto relative z - 10";
          >;
            <motion.div;
              animate={{ coordinate_y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'              className="w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center";
            >;
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm'>;
                <Star className='w-5 h-5' />;
                <span>Innovation Leader 2025-2026</span>;
              </motion && motion.div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <h1 className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </h1>;
              <p className='text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>;
                Pioneering the future of technology with innovative solutions;
                that drive business transformation;
              </p>;


<<<<<<< HEAD

=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Enhanced CTA Section */}
              <motion&& motion.div
                variants={itemVariants}

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
<<<<<<< HEAD
              {/* Enhanced CTA Section */}
              <motion&& motion.div
                variants={itemVariants}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center max-w-6xl mx-auto relative z-10'            className="text-center max-w-6xl mx-auto relative z-10"
=======
            className="text-center max-w-6xl mx-auto relative z-10"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className="text-center max-w-6xl mx-auto relative z-10"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
=======
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm'
=======
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <Star className='w-5 h-5' />
                <span>Innovation Leader 2025-2026</span>
              </motion.div>
              <h1 className='text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Zion Tech Group
              </h1>
              <p className='text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed'>
                Pioneering the future of technology with innovative solutions
                that drive business transformation
              </p>

<<<<<<< HEAD
              {/* Enhanced CTA Section */}
              <motion.div
                variants={itemVariants}
                className='flex flex-col sm:flex-row gap-4 justify-center mb-8'
              >
                <Link href='/comprehensive-services-showcase-2026'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>
                    <span className='flex items-center gap-2'>
                      Explore 2026 Services
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </button>
                </Link>
                <Link href='/comprehensive-services-showcase-2025'>
                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
                    2025 Services Showcase
                  </button>
                </Link>
                <Link href='/get-started'>
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                    Get Started
                  </button>
                </Link>
              </motion.div>              >
=======
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
              >
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Star className="w-5 h-5" />
                <span>Innovation Leader 2025-2026</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              {/* Enhanced CTA Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link href="/comprehensive-services-showcase-2026">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Explore 2026 Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/comprehensive-services-showcase-2025">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Services Showcase
                  </button>
                </Link>
                <Link href="/get-started">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </motion.div>

                className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>;
                <Link href='/comprehensive-services-showcase-2026'>;
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>;
                    <span className='flex items-center gap-2'>;
                      Explore 2026 Services;
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
                    </span>;
                  </button>;
                </Link>;
                <Link href='/comprehensive-services-showcase-2025'>;
                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105'>;
                    2025 Services Showcase;
                  </button>;
                </Link>;
                <Link href='/get-started'>;
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                    Get Started;
                  </button>;
                </Link>;
              </motion && motion.div>              >;
                <Star className="w-5 h-5" />;
                <span>Innovation Leader 2025-2026</span>;
              </motion && motion.div>;
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                Zion Tech Group;
              </h1>;
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">;
                Pioneering the future of technology with innovative solutions that drive business transformation;
              </p>;
              {/* Enhanced CTA Section */}
              <motion&& motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
                <Link href="/comprehensive-services-showcase-2026">;
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;
                    <span className="flex items-center gap-2">;
                      Explore 2026 Services;
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                    </span>;
                  </button>;
                </Link>;
                <Link href="/comprehensive-services-showcase-2025">;
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">;
                    2025 Services Showcase;
                  </button>;
                </Link>;
                <Link href="/get-started">;
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">;
                    Get Started;
                  </button>;
                </Link>;
              </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Trust Indicators */}
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex items-center justify-center space-x-6 text-sm text-gray-400'
              >              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {/* Features Section */}
      <section className='py-20 px-4 relative'>;
        <div className='max-w-7xl mx-auto'>          <motion && motion.div      <section className="py-20 px-4 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion&& motion.div

=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-20"
          >
            className='text-center mb-20'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className='text-center mb-20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Comprehensive Technology Solutions
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From AI-powered automation to quantum computing, we provide the
              tools you need to stay ahead of the competition.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD

            className="text-center mb-20"
          >

<<<<<<< HEAD
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}          >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}          >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-20'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Comprehensive Technology Solutions;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              From AI-powered automation to quantum computing, we provide the;
              tools you need to stay ahead of the competition.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>;
            {features && features.map((feature, index) => (;
              <motion&& motion.div
                key={index}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}>;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Comprehensive Technology Solutions;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
            {features && features.map((feature, index) => (;
              <motion&& motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}


<<<<<<< HEAD
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}

                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

          </div>;
        </div>;
      </section>;


                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative'>
                  <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6'>
                    <feature.icon className='w-full h-full text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    {feature.description}
                  </p>                </div>                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



<<<<<<< HEAD
              </motion.div>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </section>;


      {/* Enhanced Services Preview */}
      <section className='py-20 px-4'>;
        <div className='max-w-6xl mx-auto'>;
          <motion&& motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}      <section className="py-20 px-4">;
        <div className="max-w-6xl mx-auto">;
          <motion&& motion.div
            className="text-center mb-16"
<<<<<<< HEAD
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Enhanced Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Enhanced Services Preview */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}

            initial={{ opacity: 0, y: 40 }}

<<<<<<< HEAD
<<<<<<< HEAD
            whileInView={{ opacity: 1, y: 0 }}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            whileInView={{ opacity: 1, y: 0 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            whileInView={{ opacity: 1, y: 0 }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='inline - flex items - center space - x-2 px - 6 py - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 400 / 30 rounded - full text - cyan - 400 text - lg font - medium backdrop - blur - sm';
              >;
                <Star className='w - 5 h - 5' />;
                <span > Innovation Leader 2025 - 2026</span>;
              </motion.div>;
              <h1 className='text - 6xl md:text - 8xl font - bold mb - 8 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent'>;
                Zion Tech Group;
              </h1>;
              <p className='text - 2xl md:text - 3xl text - gray - 300 mb - 10 max - w-3xl mx - auto leading - relaxed'>;
                Pioneering the future of technology with innovative solutions;
                that drive business transformation;
              </p>;
              {/* Enhanced CTA Section */}
              <motion.div;
                variants={item_variants}
                className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8';
              >;
                <Link href='/comprehensive - services - showcase - 2026'>;
                  <button className='group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25'>;
                    <span className='flex items - center gap - 2'>;
                      Explore 2026 Services;
                      <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                    </span>;
                  </button>;
                </Link>;
                <Link href='/comprehensive - services - showcase - 2025'>;
                  <button className='px - 8 py - 4 border - 2 border - purple - 400 text - purple - 400 font - semibold rounded - lg hover:bg - purple - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'>;
                    2025 Services Showcase;
                  </button>;
                </Link>;
                <Link href='/get - started'>;
                  <button className='px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105'>                    Get Started;
                  </button>;
                </Link>;
              </motion.div>              >;
                <Star className="w - 5 h - 5" />;
                <span > Innovation Leader 2025 - 2026</span>;
              </motion.div>;
              <h1 className="text - 6xl md:text - 8xl font - bold mb - 8 bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent">;
                Zion Tech Group;
              </h1>;
              <p className="text - 2xl md:text - 3xl text - gray - 300 mb - 10 max - w-3xl mx - auto leading - relaxed">;
                Pioneering the future of technology with innovative solutions that drive business transformation;
              </p>;
              {/* Enhanced CTA Section */}
              <motion.div;
                variants={item_variants}
                className="flex flex - col sm:flex - row gap - 4 justify - center mb - 8";
              >;
                <Link href="/comprehensive - services - showcase - 2026">;
                  <button className="group px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25">;
                    <span className="flex items - center gap - 2">;
                      Explore 2026 Services;
                      <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
                    </span>;
                  </button>;
                </Link>;
                <Link href="/comprehensive - services - showcase - 2025">;
                  <button className="px - 8 py - 4 border - 2 border - purple - 400 text - purple - 400 font - semibold rounded - lg hover:bg - purple - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105">;
                    2025 Services Showcase;
                  </button>;
                </Link>;
                <Link href="/get - started">;
                  <button className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105">;
                    Get Started;
                  </button>;
                </Link>;
              </motion.div>;
              {/* Trust Indicators */}
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='flex items - center justify - center space - x-6 text - sm text - gray - 400';
              >              >;
                <div className="flex items - center space - x-2">;
                  <Shield className="w - 4 h - 4 text - green - 400" />;
                  <span > Enterprise Security</span>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Globe className="w - 4 h - 4 text - blue - 400" />;
                  <span > Global Reach</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Shield className='w - 4 h - 4 text - green - 400' />;
                  <span > Enterprise Security</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Globe className='w - 4 h - 4 text - blue - 400' />;
                  <span > Global Reach</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <TrendingUp className='w - 4 h - 4 text - purple - 400' />                  <span > Proven Results</span>                <div className="flex items - center space - x-2">;
                  <TrendingUp className="w - 4 h - 4 text - purple - 400" />;
                  <span > Proven Results</span>;
                </div>;
              </motion.div>;
            </motion.div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className='py - 20 px - 4 relative'>;
        <div className='max - w-7xl mx - auto'>          <motion.div      <section className="py - 20 px - 4 relative">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 20';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Comprehensive Technology Solutions;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              From AI - powered automation to quantum computing, we provide the;
              tools you need to stay ahead of the competition.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6'>;
            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                className='group relative overflow - hidden rounded - 2xl bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 10 p - 8'                initial={{ opacity: 0, coordinate_y: 40 }}          >;
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
              Comprehensive Technology Solutions;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              From AI - powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;
            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                className="group relative overflow - hidden rounded - 2xl bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 10 p - 8";
                initial={{ opacity: 0, coordinate_y: 40 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                while_hover={{ coordinate_y: -10, scale: 1.02 }}
              >;
                <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 500 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300' />;
                <div className='relative'>;
                  <div className='w - 14 h - 14 rounded - xl bg - gradient - to - br from - cyan - 500 to - blue - 600 p - 3 mb - 6'>;
                    <feature.icon className='w - full h - full text - white' />;
                  </div>;
                  <h3 className='text - xl font - semibold text - white mb - 4'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 300 leading - relaxed'>;
                    {feature.description}
                  </p>                </div>                <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - blue - 500 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300" />;
                <div className="relative">;
                  <div className="w - 14 h - 14 rounded - xl bg - gradient - to - br from - cyan - 500 to - blue - 600 p - 3 mb - 6">;
                    <feature.icon className="w - full h - full text - white" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 4">{feature.title}</h3>;
                  <p className="text - gray - 300 leading - relaxed">{feature.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Enhanced Services Preview */}
      <section className='py - 20 px - 4'>;
        <div className='max - w-6xl mx - auto'>;
          <motion.div;
            className='text - center mb - 16'            initial={{ opacity: 0, coordinate_y: 40 }}      <section className="py - 20 px - 4">;
        <div className="max - w-6xl mx - auto">;
          <motion.div;
            className="text - center mb - 16";
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
          >;
            <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 4'>;
              Our Revolutionary 2026 Services;
            </h2>;
            <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
              From AI - powered business intelligence to quantum computing and;
              emerging technologies, we're building the future today;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
            {[;
              {
                title: 'AI Business Intelligence',
                description:;
                  'Transform data into actionable insights with AI - powered analytics',
                icon: Brain,
                gradient: 'from - purple - 500 to - pink - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
              {
                title: 'Cloud Infrastructure',
                description:;
                  'Automate cloud infrastructure deployment and management',
                icon: Cloud,
                gradient: 'from - cyan - 500 to - blue - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
              {
                title: 'Cybersecurity Intelligence',
                description: 'Advanced threat detection and response with AI',
                icon: Shield,
                gradient: 'from - red - 500 to - orange - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
              {
                title: 'Data Engineering',
                description: 'Streamline data pipelines and analytics with AI',
                icon: BarChart3,
                gradient: 'from - emerald - 500 to - teal - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
              {
                title: 'Quantum Computing',
                description: 'Access quantum computing power through the cloud',
                icon: Atom,
                gradient: 'from - indigo - 500 to - purple - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
              {
                title: 'Blockchain Intelligence',
                description:;
                  'Intelligent blockchain analytics and DeFi optimization',
                icon: Lock,
                gradient: 'from - yellow - 500 to - orange - 500',
                link: '/comprehensive - services - showcase - 2026',
              },
            ].map ((service, index) => (
              <motion.div;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={index}
                className='group relative overflow - hidden rounded - 2xl bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - sm border border - white / 10 cursor - pointer'                initial={{ opacity: 0, coordinate_y: 40 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary 2026 Services

            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today
            </p>
          </motion.div>
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary 2026 Services
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Our Revolutionary 2026 Services
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              From AI-powered business intelligence to quantum computing and
              emerging technologies, we're building the future today
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'AI Business Intelligence'
                description:
                  'Transform data into actionable insights with AI-powered analytics'
                icon: Brain
                gradient: 'from-purple-500 to-pink-500'
                link: '/comprehensive-services-showcase-2026'
              }
              {
                title: 'Cloud Infrastructure'
                description:
                  'Automate cloud infrastructure deployment and management'
                icon: Cloud
                gradient: 'from-cyan-500 to-blue-500'
                link: '/comprehensive-services-showcase-2026'
              }
              {
                title: 'Cybersecurity Intelligence'
                description: 'Advanced threat detection and response with AI'
                icon: Shield
                gradient: 'from-red-500 to-orange-500'
                link: '/comprehensive-services-showcase-2026'
              }
              {
                title: 'Data Engineering'
                description: 'Streamline data pipelines and analytics with AI'
                icon: BarChart3
                gradient: 'from-emerald-500 to-teal-500'
                link: '/comprehensive-services-showcase-2026'
              }
              {
                title: 'Quantum Computing'
                description: 'Access quantum computing power through the cloud'
                icon: Atom
                gradient: 'from-indigo-500 to-purple-500'
                link: '/comprehensive-services-showcase-2026'
              }
              {
                title: 'Blockchain Intelligence'
                description:
                  'Intelligent blockchain analytics and DeFi optimization'
                icon: Lock
                gradient: 'from-yellow-500 to-orange-500'
                link: '/comprehensive-services-showcase-2026'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer'                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => (window.location.href = service.link)}              Our Revolutionary 2026 Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today
            </p>
          </motion.div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Business Intelligence", description: "Transform data into actionable insights with AI-powered analytics", icon: Brain, gradient: "from-purple-500 to-pink-500", link: "/comprehensive-services-showcase-2026" }
              { title: "Cloud Infrastructure", description: "Automate cloud infrastructure deployment and management", icon: Cloud, gradient: "from-cyan-500 to-blue-500", link: "/comprehensive-services-showcase-2026" }
              { title: "Cybersecurity Intelligence", description: "Advanced threat detection and response with AI", icon: Shield, gradient: "from-red-500 to-orange-500", link: "/comprehensive-services-showcase-2026" }
              { title: "Data Engineering", description: "Streamline data pipelines and analytics with AI", icon: BarChart3, gradient: "from-emerald-500 to-teal-500", link: "/comprehensive-services-showcase-2026" }
              { title: "Quantum Computing", description: "Access quantum computing power through the cloud", icon: Atom, gradient: "from-indigo-500 to-purple-500", link: "/comprehensive-services-showcase-2026" }
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>;
              Our Revolutionary 2026 Services;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              From AI-powered business intelligence to quantum computing and;
              emerging technologies, we're building the future today;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            {[;
              {;
                title: 'AI Business Intelligence',;
                description:;
                  'Transform data into actionable insights with AI-powered analytics',;
                icon: Brain,;
                gradient: 'from-purple-500 to-pink-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
              {;
                title: 'Cloud Infrastructure',;
                description:;
                  'Automate cloud infrastructure deployment and management',;
                icon: Cloud,;
                gradient: 'from-cyan-500 to-blue-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
              {;
                title: 'Cybersecurity Intelligence',;
                description: 'Advanced threat detection and response with AI',;
                icon: Shield,;
                gradient: 'from-red-500 to-orange-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
              {;
                title: 'Data Engineering',;
                description: 'Streamline data pipelines and analytics with AI',;
                icon: BarChart3,;
                gradient: 'from-emerald-500 to-teal-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
              {;
                title: 'Quantum Computing',;
                description: 'Access quantum computing power through the cloud',;
                icon: Atom,;
                gradient: 'from-indigo-500 to-purple-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
              {;
                title: 'Blockchain Intelligence',;
                description:;
                  'Intelligent blockchain analytics and DeFi optimization',;
                icon: Lock,;
                gradient: 'from-yellow-500 to-orange-500',;
                link: '/comprehensive-services-showcase-2026',;
              },;
            ].map((service, index) => (;
              <motion&& motion.div
                key={index}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer'                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                whileHover={{ y: -10, scale: 1 && 1.02 }}
                onClick={() => (window && window.location.href = service && service.link)}              Our Revolutionary 2026 Services;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {[;
              { title: "AI Business Intelligence", description: "Transform data into actionable insights with AI-powered analytics", icon: Brain, gradient: "from-purple-500 to-pink-500", link: "/comprehensive-services-showcase-2026" },;
              { title: "Cloud Infrastructure", description: "Automate cloud infrastructure deployment and management", icon: Cloud, gradient: "from-cyan-500 to-blue-500", link: "/comprehensive-services-showcase-2026" },;
              { title: "Cybersecurity Intelligence", description: "Advanced threat detection and response with AI", icon: Shield, gradient: "from-red-500 to-orange-500", link: "/comprehensive-services-showcase-2026" },;
              { title: "Data Engineering", description: "Streamline data pipelines and analytics with AI", icon: BarChart3, gradient: "from-emerald-500 to-teal-500", link: "/comprehensive-services-showcase-2026" },;
              { title: "Quantum Computing", description: "Access quantum computing power through the cloud", icon: Atom, gradient: "from-indigo-500 to-purple-500", link: "/comprehensive-services-showcase-2026" },;
              { title: "Blockchain Intelligence", description: "Intelligent blockchain analytics and DeFi optimization", icon: Lock, gradient: "from-yellow-500 to-orange-500", link: "/comprehensive-services-showcase-2026" }
            ].map((service, index) => (;
              <motion&& motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                whileHover={{ y: -10, scale: 1.02 }}

                onClick={() => (window.location.href = service.link)}


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}


<<<<<<< HEAD



                onClick={() => (window.location.href = service.link)}

                onClick={() => (window.location.href = service.link)}

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
          </div>;
          {/* Call to Action for Services Showcase */}
          <motion&& motion.div
            className='text-center mt-16'            initial={{ opacity: 0, y: 40 }}            className="text-center mt-16"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => (window.location.href = service.link)}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className='relative p-6'>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}
                  >
                    <service.icon className='w-full h-full text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-300 leading-relaxed mb-4'>
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className='flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors'
                  >
                    <span className='text-sm font-medium'>Explore Service</span>
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />                  </a>                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  <a href={service.link} className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
          {/* Call to Action for Services Showcase */}
          <motion.div
            className='text-center mt-16'            initial={{ opacity: 0, y: 40 }}            className="text-center mt-16"

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
            viewport={{ once: true }}>;
            <a
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Contact Section */}
              href='/comprehensive-services-showcase-2026'
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25'
            >
              <Rocket className='w-5 h-5 mr-2' />
              View All 2026 Services
              <ArrowRight className='w-5 h-5 ml-2' />            </a>            >
              <Rocket className="w-5 h-5 mr-2" />
              View All 2026 Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Contact Section */}
      <section id='contact' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}

            initial={{ opacity: 0, y: 40 }}

<<<<<<< HEAD
<<<<<<< HEAD
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Get in touch with our team to discuss how our innovative services
              can help you achieve your goals.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-cyan-400' />
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                Expert Team
              </h3>
              <p className='text-gray-300 text-sm'>
                Dedicated professionals ready to help
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-8 h-8 text-blue-400' />
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                Fast Implementation
              </h3>
              <p className='text-gray-300 text-sm'>
                Quick setup and deployment
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-purple-400' />
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                24/7 Support
              </h3>
              <p className='text-gray-300 text-sm'>
                Round-the-clock assistance
              </p>            </div>
          </div>
          <motion.div
            className='text-center'            initial={{ opacity: 0, y: 20 }}              Ready to Transform Your Business?
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            whileInView={{ opacity: 1, y: 0 }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Dedicated professionals ready to help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">Quick setup and deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock assistance</p>
            </div>
          </div>
          <motion.div

            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
              Get in touch with our team to discuss how our innovative services;
              can help you achieve your goals.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>;
            <div className='text-center'>;
              <div className='w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <Users className='w-8 h-8 text-cyan-400' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                Expert Team;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Dedicated professionals ready to help;
              </p>;
            </div>;
            <div className='text-center'>;
              <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <Zap className='w-8 h-8 text-blue-400' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                Fast Implementation;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Quick setup and deployment;
              </p>;
            </div>;
            <div className='text-center'>;
              <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                <Shield className='w-8 h-8 text-purple-400' />;
              </div>;
              <h3 className='text-lg font-semibold text-white mb-2'>;
                24/7 Support;
              </h3>;
              <p className='text-gray-300 text-sm'>;
                Round-the-clock assistance;
              </p>            </div>;
          </div>;
          <motion&& motion.div
            className='text-center'            initial={{ opacity: 0, y: 20 }}              Ready to Transform Your Business?
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Users className="w-8 h-8 text-cyan-400" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>;
              <p className="text-gray-300 text-sm">Dedicated professionals ready to help</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-blue-400" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>;
              <p className="text-gray-300 text-sm">Quick setup and deployment</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-purple-400" />;
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>;
              <p className="text-gray-300 text-sm">Round-the-clock assistance</p>;
            </div>;
          </div>;
          <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='text-center'            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
            viewport={{ once: true }}>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'>;
                Email Us;
              </a>;
              <a
                href='tel:+13024640950'
                className='bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'>            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">;
                Email Us;
              </a>;
              <a
                href='tel:+13024640950'
                className='bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'                href="tel:+13024640950"

<<<<<<< HEAD



            className="text-center"
            className='text-center'            className="text-center"

=======
=======

            className='text-center'            className="text-center"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center"
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'              >
                Email Us
              </a>
              <a
                href='tel:+13024640950'
                className='bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'              >            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Email Us
              </a>
              <a
<<<<<<< HEAD
<<<<<<< HEAD
                href='tel:+13024640950'
                className='bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300'                href="tel:+13024640950"
=======
                href="tel:+13024640950"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                href="tel:+13024640950"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 mb-4">
            <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
      {/* Footer */}
      <footer className='py-12 px-4 border-t border-white/10'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='text-gray-400 mb-4'>
            <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
            <p className='mt-2'>
              Address: 364 E Main St STE 1008 Middletown DE 19709 | Phone: +1
              302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
          </div>
          <div className='flex justify-center space-x-6'>
            <a
              href='/comprehensive-services-showcase-2026'
              className='text-cyan-400 hover:text-cyan-300 transition-colors'
            >
              2026 Services
            </a>
            <a
              href='/comprehensive-services-showcase-2025'
              className='text-cyan-400 hover:text-cyan-300 transition-colors'
            >
              2025 Services
            </a>
            <a
              href='https://ziontechgroup.com'
              className='text-cyan-400 hover:text-cyan-300 transition-colors'
            >              Website            <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
            <p className="mt-2">
              Address: 364 E Main St STE 1008 Middletown DE 19709
              Phone: +1 302 464 0950
              Email: kleber@ziontechgroup.com
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="/comprehensive-services-showcase-2026" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              2026 Services
            </a>
            <a href="/comprehensive-services-showcase-2025" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              2025 Services
            </a>
            <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Website
            </a>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2026>


  )
};
export default Homepage2025;
=======
<<<<<<< HEAD
className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300">;
                Call Us;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Footer */}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              Website;
            </a>;
          </div>;
        </div>;
      </footer>;


};
<<<<<<< HEAD
export default Homepage2025;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </UltraFuturisticBackground2026>);
}
;
export default Homepage2025);
}
;
export default Homepage2025;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Homepage2025;

export default Homepage2025;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};


<<<<<<< HEAD
<<<<<<< HEAD
  );
}
};

export default Homepage2025;  )
}
export default Homepage2025;

export default Homepage2025;
export default Homepage2025;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
