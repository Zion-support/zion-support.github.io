
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
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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



} from '../data/2025-emerging-tech-services-enhanced';


import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
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
} from 'lucide-react';
interface Homepage2025Props {;
  showInternalNav?: boolean;
const Homepage2025: React.FC<Homepage2025Props> = ({;
  showInternalNav = true,;
}) => {  const [activeSection, setActiveSection] = useState('hero');} from 'lucide-react';

=======
import { 
  ArrowRight, Star, Brain, Atom, Shield, Zap;
  Users, Globe, TrendingUp, Rocket, Cpu, Lock;
  BarChart3, Cloud
} from 'lucide-react';


interface Homepage2025Props { showInternalNav?: boolean }


const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {;

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


  const scrollToSection = (sectionId: string) => {;
    const element = document && document.getElementById(sectionId),;
    if (element) {;
      element && element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);    }
  };
  const allServices = [      element && element.scrollIntoView({ behavior: 'smooth' }),;

      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }

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

=======

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

    }, 5000);
    return () => clear_interval (interval);
  }, []);

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
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices,
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026,
  ];
;
  const featured_services = all_services;
    .filter (service => service.popular);
    .slice (0, 12);

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


  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);

  const navigationSections = [
=======
;
  const featured_services = all_services.filter (service => service.popular).slice (0, 12);
  const navigation_sections = [;

    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },

      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth",

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

  ];

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                      key={section.id}
                      on_click={() => scrollToSection (section.id)}
                      className={`flex items - center space - x-2 text - sm font - medium transition - all duration - 300 ${
                        active_section === section.id;
                          ? 'text - cyan - 400 border - b-2 border - cyan - 400';
                          : 'text - gray - 300 hover:text - cyan - 400';
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>

                </div>;


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}


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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Mobile Navigation Menu */}
              <AnimatePresence>;
                {isMobileMenuOpen && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className='lg:hidden border-t border-white/10'
                  >
                    <div className='py-4 space-y-2'>
                      {navigationSections.map(section => (                        <button                    className="lg:hidden border-t border-white/10"
                  >
                    <div className="py-4 space-y-2">
                      {navigationSections.map((section) => (
                      {navigationSections.map(section => (                        <button


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-white/10'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                          }`}
                        >;
                          <span>{section && section.icon}</span>;
                          <span>{section && section.label}</span>;
                        </button>;
                      ))}
                      <div className='pt-4 border-t border-white/10'>
                        <a
                          href='tel:+13024640950'
                          className='flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300'                        >                      <div className="pt-4 border-t border-white/10">
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
                )}
</AnimatePresence>;
            </div>;
          </nav>;
        </>;
      )}

      {/* Hero Section */}
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
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
              className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'            >



          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto relative z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
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


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
              {/* Trust Indicators */}
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}


      {/* Features Section */}
      <section className='py-20 px-4 relative'>;
        <div className='max-w-7xl mx-auto'>          <motion && motion.div      <section className="py-20 px-4 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion&& motion.div

=======
      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-20'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

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
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}          >
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
=======
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
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8'                initial={{ opacity: 0, y: 40 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


            ))}
          </div>
        </div>
      </section>

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
=======

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======



      {/* Enhanced Services Preview */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}

            initial={{ opacity: 0, y: 40 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            whileInView={{ opacity: 1, y: 0 }}

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
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


=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6, delay: 0 && 0.3 }}
            viewport={{ once: true }}>;
            <a


=======
      {/* Contact Section */}
      <section id='contact' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            className='text-center mb-16'            initial={{ opacity: 0, y: 40 }}

            initial={{ opacity: 0, y: 40 }}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            whileInView={{ opacity: 1, y: 0 }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?

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

            className='text-center'            className="text-center"

            className="text-center"
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>


              Website;
            </a>;
          </div>;
        </div>;
      </footer>;


};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Homepage2025;

export default Homepage2025;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
