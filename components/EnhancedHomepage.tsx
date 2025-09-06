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
 //Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
//Import service data window && window.addEventListener ('mousemove', handleMouseMove);
//Import our enhanced components import EnhancedNavigation from './layout / EnhancedNavigation';
import EnhancedServiceCard from './ui / EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
//Import service data window.addEventListener ('mousemove', handleMouseMove);
//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas;
...revolutionary2044ITServices;
...revolutionary2044AIServices;
...realEnterpriseMicroSaas2025;
...innovativeITServicesExpansion2025V3;
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices;
...innovative2025AIAutonomousServices ];
<<<<<<< HEAD
//Filter services by category //Animation variants const containerVariants = {;
  hidden: {;
  opacity: 0 ;
};
visible: {;
  opacity: 1, transition: {;
  duration: 0 && 0.8, staggerChildren: 0 && 0.1 ;
};
};
};
};
};
export default EnhancedHomepage;import EnhancedServiceCard from './ui/EnhancedServiceCard';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight;
  TrendingUp, 
  Brain, 
  Shield, 
  Rocket, 
  Atom, 
Sparkles;
  Building, 
  Phone, 
  Mail, 
  MapPin;
  ArrowUpRight
} from 'lucide-react';
import Head from 'next/head';
// Import our enhanced components
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
// Import service data;
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';
const EnhancedHomepage: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),;
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  useEffect(() => {;
    setIsVisible(true);
    // Auto-rotate featured services;
    const interval = setInterval(() => {;
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    // Track mouse movement for parallax effects;
    const handleMouseMove = (e: MouseEvent) => {;
      setMousePosition({ x: e && e.clientX, y: e && e.clientY });
    };
    // Show performance monitor after 5 seconds;
    const performanceTimer = setTimeout(() => {;
      setShowPerformanceMonitor(true);
    }, 5000);
    window && window.addEventListener('mousemove', handleMouseMove);
    return () => {;
      clearInterval(interval);
      clearTimeout(performanceTimer);
      window && window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  // Combine all revolutionary services;
  const allRevolutionaryServices = [;
//Filter services by category //Animation variants const container_variants = {
  hidden: {
  opacity: 0;
}
visible: {
  opacity: 1, transition: {
  duration: 0.8, stagger_children: 0.1;
}
;
}
;
}
;
}
;
}
export default EnhancedHomepage;import EnhancedServiceCard from './ui / EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui / UltraFuturisticBackground';
// Import service data;
import { revolutionary2044AdvancedMicroSaas } from '../data / revolutionary - 2044 - advanced - micro - saas';
import { revolutionary2044ITServices } from '../data / revolutionary - 2044 - it - services';
import { revolutionary2044AIServices } from '../data / revolutionary - 2044 - ai - services';
import { realEnterpriseMicroSaas2025 } from '../data / 2025 - real - enterprise - micro - saas';
import { innovativeITServicesExpansion2025V3 } from '../data / 2025 - innovative - it - services - expansion - v3';
import { innovativeAIServicesExpansion2025V3 } from '../data / 2025 - innovative - ai - services - expansion - v3';
import { innovative2025ITInfrastructureServices } from '../data / 2025 - innovative - it - infrastructure - services';
import { innovative2025AIAutonomousServices } from '../data / 2025 - innovative - ai - autonomous - services';
const EnhancedHomepage: React.FC = () => {
  const [is_visible, setIsVisible] = useState (false);
  const [selected_category, setSelectedCategory] = useState ('all');
  const [mouse_position, setMousePosition] = useState ({ coordinate_x: 0, coordinate_y: 0 }),
  const [currentServiceIndex, setCurrentServiceIndex] = useState (0);
  const [color_scheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState (false);
;
  useEffect (() => {
    setIsVisible (true);
;
    // Auto - rotate featured services;
    const interval = set_interval (() => {
      setCurrentServiceIndex ((prev) => (prev + 1) % 6);
    }, 6000);
;
    // Track mouse movement for parallax effects;
    const handleMouseMove = (e: MouseEvent) =>: any {
      setMousePosition ({ coordinate_x: e.client_x, coordinate_y: e.client_y });
    }
;
    // Show performance monitor after 5 seconds;
    const performance_timer = set_timeout (() => {
      setShowPerformanceMonitor (true);
    }, 5000);
;
    window.addEventListener ('mousemove', handleMouseMove);
;
    return () => {
      clear_interval (interval);
      clear_timeout (performance_timer);
      window.removeEventListener ('mousemove', handleMouseMove);
    }
  }, []);
;
  // Combine all revolutionary services;
  const allRevolutionaryServices = [;
=======
//Filter services by category //Animation variants const containerVariants = {
  hidden: {
<<<<<<< HEAD
  opacity: 0
}
=======
  opacity: 0 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react';

interface EnhancedHomepageProps {
  className?: string;
}

const EnhancedHomepage: React.FC<EnhancedHomepageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnhancedHomepage</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
visible: {
  opacity: 1, transition: {
  duration: 0.8, staggerChildren: 0.1
}
}
}
}
}
export default EnhancedHomepage;import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';

import UltraFuturisticBackground from './ui/UltraFuturisticBackground';
// Import service data
import { revolutionary2044AdvancedMicroSaas  } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices  } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices  } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025  } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITServicesExpansion2025V3  } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3  } from '../data/2025-innovative-ai-services-expansion-v3';
import { innovative2025ITInfrastructureServices  } from '../data/2025-innovative-it-infrastructure-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';

const EnhancedHomepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6)
    }, 6000);
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    // Show performance monitor after 5 seconds
    const performanceTimer = setTimeout(() => {
      setShowPerformanceMonitor(true)
    }, 5000);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      clearTimeout(performanceTimer);
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []);
  // Combine all revolutionary services
  const allRevolutionaryServices = [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    ...revolutionary2044AdvancedMicroSaas;
    ...revolutionary2044ITServices;
    ...revolutionary2044AIServices;
    ...realEnterpriseMicroSaas2025;
    ...innovativeITServicesExpansion2025V3;
<<<<<<< HEAD
    ...innovativeAIServicesExpansion2025V3;
    ...innovative2025ITInfrastructureServices;
    ...innovative2025AIAutonomousServices;
  ];
;
  // Filter services by category;
  const getFilteredServices = () =>: any {
    // Check condition
if (return allRevolutionaryServices) {
  $2
}
    return allRevolutionaryServices.filter (service =>;
      service.category.toLowerCase ().includes (selected_category.toLowerCase ()) ||;
      (service as any).type?.toLowerCase ().includes (selected_category.toLowerCase ()));
  }
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from - purple - 500 to - pink - 500', scheme: 'holographic' as const },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from - cyan - 500 to - blue - 500', scheme: 'cyber' as const },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from - blue - 500 to - indigo - 500', scheme: 'quantum' as const },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from - red - 500 to - orange - 500', scheme: 'neon' as const },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from - indigo - 500 to - purple - 500', scheme: 'holographic' as const },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from - green - 500 to - teal - 500', scheme: 'cyber' as const }
  ];
;
  // Get featured services for rotation;
  const featured_services = allRevolutionaryServices.slice (0, 6);
;
  // Animation variants;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
        duration: 0.8,
        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
        ease: "ease_out" as const;
      }
    }
  }
;
  const hero_variants = {
    hidden: { opacity: 0, coordinate_y: 50 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 1,
        ease: "ease_out" as const;
      }
    }
  }
;
  const floating_variants = {
    animate: {
      coordinate_y: [-10, 10, -10];
      transition: {
  // Filter services by category;
  const getFilteredServices = () => {;
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices && allRevolutionaryServices.filter(service => ;
      service && service.category.toLowerCase().includes(selectedCategory && selectedCategory.toLowerCase()) ||;
      (service as any).type?.toLowerCase().includes(selectedCategory && selectedCategory.toLowerCase());
    );
  };
  const categories = [;
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', scheme: 'holographic' as const },;
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', scheme: 'cyber' as const },;
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', scheme: 'quantum' as const },;
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', scheme: 'neon' as const },;
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', scheme: 'holographic' as const },;
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-green-500 to-teal-500', scheme: 'cyber' as const }
  ];
  // Get featured services for rotation;
  const featuredServices = allRevolutionaryServices && allRevolutionaryServices.slice(0, 6);
  // Animation variants;
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        duration: 0 && 0.8,;
        staggerChildren: 0 && 0.1;
      }
    }
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: "easeOut" as const;
      }
    }
  };
  const heroVariants = {;
    hidden: { opacity: 0, y: 50 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 1,;
        ease: "easeOut" as const;
      }
    }
  };
  const floatingVariants = {;
    animate: {;
      y: [-10, 10, -10];
      transition: {;
        duration: 3,;
        ease: "easeInOut" as const;
      }
    }
  };
  const handleCategoryChange = (categoryId: string) => {;
    setSelectedCategory(categoryId);
    const category = categories && categories.find(cat => cat && cat.id === categoryId);
    if (category) {;
      setColorScheme(category && category.scheme);
    }
  }
  return (
    <>;
      <Head>;
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />;
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />;
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />;
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com" />;
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />;
        <meta name="theme-color" content="#00d4ff" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var && var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />;
        <link rel="dns-prefetch" href="//fonts && fonts.googleapis.com" />;
        <link rel="dns-prefetch" href="//fonts && fonts.gstatic.com" />;
      </Head>;
      {/* Enhanced Navigation */}
      <EnhancedNavigation />;
      <UltraFuturisticBackground variant={colorScheme === 'cyber' ? 'cyberpunk' : colorScheme === 'quantum' ? 'quantum' : colorScheme === 'neon' ? 'neural' : 'holographic'} intensity="high">;
        {/* Hero Section */}
        <motion&& motion.section 
          className="relative min-h-screen flex items-center justify-center px-4 lg: px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible">;
          <div className="relative z-10 text-center max-w-6xl mx-auto">;
            {/* Main Heading */}
            <motion&& motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}>;
              Zion Tech Group;
            </motion && motion.h1>;
            <motion&& motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}>;
              Pioneering the Future of Technology with Revolutionary AI Consciousness,;
              Quantum Computing, and Autonomous Solutions;
            </motion && motion.p>;
            {/* CTA Buttons */}
            <motion&& motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}>;
              <Link href="/services">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Explore Services;
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
              <Link href="/quote">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Get Quote;
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
            </motion && motion.div>;
            {/* Contact Information */}
            <motion&& motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
              variants={itemVariants}>;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-cyan-400" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-cyan-400" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-cyan-400" />;
                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </motion && motion.div>;
          </div>;
          {/* Floating Elements */}
          <motion&& motion.div
            className="absolute top-20 left-10 text-cyan-400/20"
            variants={floatingVariants}
            animate="animate">;
            <Atom className="w-8 h-8" />;
          </motion && motion.div>;
          <motion&& motion.div
            className="absolute top-40 right-20 text-blue-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}>;
            <Brain className="w-6 h-6" />;
          </motion && motion.div>;
          <motion&& motion.div
            className="absolute bottom-40 left-20 text-purple-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}>;
            <Rocket className="w-7 h-7" />;
          </motion && motion.div>;
        </motion && motion.section>;
        {/* Category Filter */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-6xl mx-auto">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}>;
              Explore Our Revolutionary Services;
            </motion && motion.h2>;
            <motion&& motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}>;
              {categories && categories.map((category) => (;
                <motion&& motion.button
                  key={category && category.id}
                  onClick={() => handleCategoryChange(category && category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${;
                    selectedCategory === category && category.id;
                      ? 'bg-gradient-to-r ' + category && category.color + ' text-white shadow-2xl';
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600';
                  }`}
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                >;
                  <category && category.icon className="inline-block w-5 h-5 mr-2" />;
                  {category && category.name}
                </motion && motion.button>;
              ))}
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
        {/* Services Grid */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}>;
              {getFilteredServices().slice(0, 12).map((service, index) => (;
                <EnhancedServiceCard
        duration: 3,
        ease: "easeInOut" as const;
      }
    }
  }
;
  const handleCategoryChange = (category_id: string) =>: any {
    setSelectedCategory (category_id);
    const category = categories.find (cat => cat.id === category_id);
    // Check condition
if ( {) {
  $2
}
      setColorScheme (category.scheme);
    }
  }
;
  return (
    <>;
      <Head>;
        <title > Zion Tech Group - Revolutionary 2045 Technology Solutions</title>;
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting - edge innovation." />;
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />;
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />;
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />;
        <meta property="og:url" content="https://ziontechgroup.com" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com" />;
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width = device - width, initial - scale = 1, viewport - fit = cover" />;
        <meta name="theme - color" content="#00d4ff" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts / inter - var.woff2" as="font" type="font / woff2" cross_origin="anonymous" />;
        <link rel="dns - prefetch" href="//fonts.googleapis.com" />;
        <link rel="dns - prefetch" href="//fonts.gstatic.com" />;
      </Head>;
      {/* Enhanced Navigation */}
      <EnhancedNavigation />;
      <UltraFuturisticBackground variant={color_scheme === 'cyber' ? 'cyberpunk' : color_scheme === 'quantum' ? 'quantum' : color_scheme === 'neon' ? 'neural' : 'holographic'} intensity="high">;
        {/* Hero Section */}
        <motion.section;
          className="relative min - h-screen flex items - center justify - center px - 4 lg: px - 8 pt - 20";
          variants={hero_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="relative z - 10 text - center max - w-6xl mx - auto">;
            {/* Main Heading */}
            <motion.h1;
              className="text - 5xl md:text - 7xl lg:text - 8xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6";
              variants={item_variants}
            >;
              Zion Tech Group;
            </motion.h1>;
            <motion.p;
              className="text - xl md:text - 2xl lg:text - 3xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed";
              variants={item_variants}
            >;
              Pioneering the Future of Technology with Revolutionary AI Consciousness,
              Quantum Computing, and Autonomous Solutions;
            </motion.p>;
            {/* CTA Buttons */}
            <motion.div;
              className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 12";
              variants={item_variants}
            >;
              <Link href="/services">;
                <motion.button;
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl text - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Explore Services;
                  <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
              <Link href="/quote">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - bold rounded - xl text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Get Quote;
                  <ArrowUpRight className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
            </motion.div>;
            {/* Contact Information */}
            <motion.div;
              className="flex flex - col sm:flex - row gap - 6 justify - center items - center text - sm text - gray - 400";
              variants={item_variants}
            >;
              <div className="flex items - center space - x-2">;
                <Phone className="w - 4 h - 4 text - cyan - 400" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <Mail className="w - 4 h - 4 text - cyan - 400" />;
                <span > kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <MapPin className="w - 4 h - 4 text - cyan - 400" />;
                <span > 364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </motion.div>;
          </div>;
          {/* Floating Elements */}
          <motion.div;
            className="absolute top - 20 left - 10 text - cyan - 400 / 20";
            variants={floating_variants}
            animate="animate";
          >;
            <Atom className="w - 8 h - 8" />;
          </motion.div>;
          <motion.div;
            className="absolute top - 40 right - 20 text - blue - 400 / 20";
            variants={floating_variants}
            animate="animate";
            style={{ animation_delay: '1s' }}
          >;
            <Brain className="w - 6 h - 6" />;
          </motion.div>;
          <motion.div;
            className="absolute bottom - 40 left - 20 text - purple - 400 / 20";
            variants={floating_variants}
            animate="animate";
            style={{ animation_delay: '2s' }}
          >;
            <Rocket className="w - 7 h - 7" />;
          </motion.div>;
        </motion.section>;
        {/* Category Filter */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-6xl mx - auto">;
            <motion.h2;
              className="text - 3xl md:text - 4xl font - bold text - center text - white mb - 12";
              variants={item_variants}
            >;
              Explore Our Revolutionary Services;
            </motion.h2>;
            <motion.div;
              className="flex flex - wrap justify - center gap - 4 mb - 12";
              variants={item_variants}
            >;
              {categories.map ((category) => (
                <motion.button;
                  key={category.id}
                  on_click={() => handleCategoryChange (category.id)}
                  className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 transform hover:scale - 105 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r ' + category.color + ' text - white shadow - 2xl';
                      : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50 border border - gray - 600';
                  }`}
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  <category.icon className="inline - block w - 5 h - 5 mr - 2" />;
                  {category.name}
                </motion.button>))}
            </motion.div>;
          </div>;
        </motion.section>;
        {/* Services Grid */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              variants={container_variants}
            >;
              {getFilteredServices ().slice (0, 12).map ((service, index) => (
                <EnhancedServiceCard;
// Import our enhanced components
import EnhancedNavigation from './layout/EnhancedNavigation'
import EnhancedServiceCard from './ui/EnhancedServiceCard'
import PerformanceMonitor from './PerformanceMonitor'
import UltraFuturisticBackground from './ui/UltraFuturisticBackground'
// Import service data
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas'
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services'
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services'
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas'
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3'
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3'
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services'
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services'
const EnhancedHomepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber'),
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false),
  
  useEffect(() => {
    setIsVisible(true),
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6)
    }, 6000),
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    },
    
    // Show performance monitor after 5 seconds
    const performanceTimer = setTimeout(() => {
      setShowPerformanceMonitor(true)
    }, 5000),

    window.addEventListener('mousemove', handleMouseMove),
    
    return () => {
      clearInterval(interval),
      clearTimeout(performanceTimer),
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, []),

  // Combine all revolutionary services
  const _allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
    ...innovative2025ITInfrastructureServices,
    ...innovative2025AIAutonomousServices
  ],

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices,
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
    )
  },

=======
    ...innovativeAIServicesExpansion2025V3
    ...innovative2025ITInfrastructureServices;
    ...innovative2025AIAutonomousServices
  ];
  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service =>
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) |
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
    )
  }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', scheme: 'holographic' as const }
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', scheme: 'cyber' as const }
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', scheme: 'quantum' as const }
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', scheme: 'neon' as const }
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', scheme: 'holographic' as const }
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-green-500 to-teal-500', scheme: 'cyber' as const }
<<<<<<< HEAD
  ],

  // Animation variants
  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        duration: 0.8, _staggerChildren: 0.1}
    }
  },

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: &quot;easeOut&quot; as const
      }
    }
  },

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        ease: &quot;easeInOut&quot; as const
      }
    }
  },

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId),
    const category = categories.find(cat => cat.id === categoryId)
    if (category) {
      setColorScheme(category.scheme)
    }
  },

  return (_<>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name=&quot;description&quot; content=&quot;Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion Tech Group - Revolutionary 2045 Technology&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com&quot; />
        
        {/* Performance and SEO Meta Tags */}
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, viewport-fit=cover&quot; />
        <meta name=&quot;theme-color&quot; content=&quot;#00d4ff&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
        
        {/* Preload critical resources */}
        <link rel=&quot;preload&quot; href=&quot;/fonts/inter-var.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossOrigin=&quot;anonymous&quot; />
        <link rel=&quot;dns-prefetch&quot; href=&quot;//fonts.googleapis.com&quot; />
        <link rel=&quot;dns-prefetch&quot; href=&quot;//fonts.gstatic.com&quot; />
      </Head>

      {_/* Enhanced Navigation */}
      <EnhancedNavigation />

      <UltraFuturisticBackground variant={colorScheme === 'cyber' ? 'cyberpunk' : colorScheme === 'quantum' ? 'quantum' : colorScheme === 'neon' ? 'neural' : 'holographic'} intensity=&quot;high&quot;>
        {/* Hero Section */}
        <motion.section 
          className=&quot;relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20&quot;
          variants={heroVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
        >
          <div className=&quot;relative z-10 text-center max-w-6xl mx-auto&quot;>
            {/* Main Heading */}
            <motion.h1 
              className=&quot;text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
=======
  ];
  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        duration: 0.8
        staggerChildren: 0.1
      }
    }
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.6
        ease: "easeOut" as const
      }
    }
  }
  const heroVariants = {
    hidden: { opacity: 0, y: 50 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 1
        ease: "easeOut" as const
      }
    }
  }
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10];
      transition: {
<<<<<<< HEAD
        duration: 3
=======
        duration: 3,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        ease: "easeInOut" as const
      }
    }
  }
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      setColorScheme(category.scheme)
    }
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>
      {/* Enhanced Navigation */}
      <EnhancedNavigation />
      <UltraFuturisticBackground variant={colorScheme === 'cyber' ? 'cyberpunk' : colorScheme === 'quantum' ? 'quantum' : colorScheme === 'neon' ? 'neural' : 'holographic'} intensity="high">
        {/* Hero Section */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center px-4 lg: px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
<<<<<<< HEAD
            
            <motion.p 
              className=&quot;text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness, _Quantum Computing, _and Autonomous Solutions
            </motion.p>

            {_/* CTA Buttons */}
            <motion.div 
              className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-12&quot;
              variants={itemVariants}
            >
              <Link href=&quot;/services&quot;>
                <motion.button
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.p
=======
            
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <motion.p 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness
              Quantum Computing, and Autonomous Solutions
            </motion.p>
<<<<<<< HEAD
<<<<<<< HEAD
            {/* CTA Buttons */}
            <motion.div
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            {/* CTA Buttons */}
            <motion.div 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
<<<<<<< HEAD
                  <ArrowRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
                </motion.button>
              </a>
              
              <Link href=&quot;/quote&quot;>
                <motion.button
                  className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
=======
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/quote">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
<<<<<<< HEAD
                  <ArrowUpRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
                </motion.button>
              </a>
            </motion.div>

            {_/* Contact Information */}
            <motion.div 
              className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400&quot;
              variants={itemVariants}
            >
              <div className=&quot;flex items-center space-x-2&quot;>
                <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                <span>+1 302 464 0950</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
=======
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
            {/* Contact Information */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD

          {_/* Floating Elements */}
          <motion.div
            className=&quot;absolute top-20 left-10 text-cyan-400/20&quot;
            variants={floatingVariants}
            animate=&quot;animate&quot;
          >
            <Atom className=&quot;w-8 h-8&quot; />
          </motion.div>
          
          <motion.div
            className=&quot;absolute top-40 right-20 text-blue-400/20&quot;
            variants={floatingVariants}
            animate=&quot;animate&quot;
            style={{ animationDelay: '1s' }}
          >
            <Brain className=&quot;w-6 h-6&quot; />
          </motion.div>
          
          <motion.div
            className=&quot;absolute bottom-40 left-20 text-purple-400/20&quot;
            variants={floatingVariants}
            animate=&quot;animate&quot;
            style={{ animationDelay: '2s' }}
          >
            <Rocket className=&quot;w-7 h-7&quot; />
          </motion.div>
        </motion.section>

        {_/* Category Filter */}
        <motion.section 
          className=&quot;py-16 px-4 lg:px-8&quot;
          variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
        >
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.h2 
              className=&quot;text-3xl md:text-4xl font-bold text-center text-white mb-12&quot;
=======
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 text-cyan-400/20"
            variants={floatingVariants}
            animate="animate"
          >
            <Atom className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20 text-blue-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <Brain className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-20 text-purple-400/20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <Rocket className="w-7 h-7" />
          </motion.div>
        </motion.section>
        {/* Category Filter */}
        <motion.section
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              variants={itemVariants}
            >
              Explore Our Revolutionary Services
            </motion.h2>
<<<<<<< HEAD
            
            <motion.div 
              className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;
              variants={itemVariants}
            >
              {_categories.map((category) => (_<motion.button
                  key={category.id}
                  onClick={_() => handleCategoryChange(category.id)}
                  className={_`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'}`}
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                >
                  <category.icon className=&quot;inline-block w-5 h-5 mr-2&quot; />
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div
=======
            
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <motion.div 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={itemVariants}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="inline-block w-5 h-5 mr-2" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.section>
<<<<<<< HEAD

        {_/* Services Grid */}
        <motion.section 
          className=&quot;py-16 px-4 lg:px-8&quot;
          variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
        >
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
              variants={containerVariants}
            >
              {_getFilteredServices().slice(0, _12).map(_(service, _index) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Services Grid */}
        <motion.section
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        {/* Services Grid */}
        <motion.section 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {getFilteredServices().slice(0, 12).map((service, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <EnhancedServiceCard

                  key={service.id}
                  id={service.id}
                  title={service.name}
                  description={service.description}
                  category={service.category}
<<<<<<< HEAD
key={service && service.id}
                  id={service && service.id}
                  title={service && service.name}
                  description={service && service.description}
                  category={service && service.category}
                  type={(service as any).type || service && service.category}
                  features={service && service.features?.map(f => ({ name: f, description: f }))}
                  slug={(service as any).slug || service && service.id}
                  index={index}
                  isPopular={Math && Math.random() > 0 && 0.7}
                  isNew={Math && Math.random() > 0 && 0.8}
                  rating={4 && 4.0 + Math && Math.random() * 1 && 1.0}
                  reviewCount={Math && Math.floor(Math && Math.random() * 100) + 10}
                  estimatedDelivery="2-4 weeks";
                  technologies={['AICloudSecurityAutomation']}
                />;
              ))}
            </motion && motion.div>;
            {getFilteredServices().length > 12 && (;
              <motion&& motion.div 
                className="text-center mt-12"
                variants={itemVariants}>;
                <Link href="/services">;
                  <motion&& motion.button
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1 && 1.05 }}
                    whileTap={{ scale: 0 && 0.95 }}>;
                    View All Services;
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                  </motion && motion.button>;
                </Link>;
              </motion && motion.div>;
            )}
          </div>;
        </motion && motion.section>;
        {/* Featured Service Showcase */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-6xl mx-auto">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}>;
              Featured Revolutionary Services;
            </motion && motion.h2>;
            <motion&& motion.div 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              variants={itemVariants}>;
              <AnimatePresence mode="wait">;
                <motion&& motion.div
                />
              ))}
            </motion.div>
            
            {_getFilteredServices().length > 12 && (
              <motion.div 
                className=&quot;text-center mt-12&quot;
                variants={itemVariants}
              >
                <Link href=&quot;/services&quot;>
                  <motion.button
                    className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300&quot;
=======
                  type={(service as any).type |service.category}
                  features={service.features?.map(f => ({ name: f, description: f }))}
                  slug={(service as any).slug |service.id}
                  index={index}
                  isPopular={Math.random() > 0.7}
                  isNew={Math.random() > 0.8}
                  rating={4.0 + Math.random() * 1.0}
                  reviewCount={Math.floor(Math.random() * 100) + 10}
                  estimatedDelivery="2-4 weeks"
                  technologies={['AICloudSecurityAutomation']}
                />
              ))}
            </motion.div>
            {getFilteredServices().length > 12 && (
              <motion.div
                className="text-center mt-12"
                variants={itemVariants}
              >
                <Link href="/services">
                  <motion.button
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
<<<<<<< HEAD
                    <ArrowRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
                  </motion.button>
                </a>
=======
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </motion.div>
            )}
          </div>
        </motion.section>
<<<<<<< HEAD

        {_/* Featured Service Showcase */}
        <motion.section 
          className=&quot;py-16 px-4 lg:px-8&quot;
          variants={containerVariants}
          initial=&quot;hidden&quot;
          animate=&quot;visible&quot;
        >
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.h2 
              className=&quot;text-3xl md:text-4xl font-bold text-center text-white mb-12&quot;
=======
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Featured Service Showcase */}
        <motion.section
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        {/* Featured Service Showcase */}
        <motion.section 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              variants={itemVariants}
            >
              Featured Revolutionary Services
            </motion.h2>
<<<<<<< HEAD
            
            <motion.div 
              className=&quot;bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8&quot;
              variants={itemVariants}
            >
              <AnimatePresence mode=&quot;wait&quot;>
=======
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <motion.div

                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
<<<<<<< HEAD
transition={{ duration: 0 && 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">;
                  <div>;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      {featuredServices[currentServiceIndex]?.name}
                    </h3>;
                    <p className="text-gray-300 mb-6 leading-relaxed">;
                      {featuredServices[currentServiceIndex]?.description}
                    </p>;
                    <div className="flex flex-wrap gap-4 mb-6">;
                      {featuredServices[currentServiceIndex]?.features?.slice(0, 3).map((feature, idx) => (;
                        <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600">;
=======
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {featuredServices[currentServiceIndex]?.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredServices[currentServiceIndex]?.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      {featuredServices[currentServiceIndex]?.features?.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          {feature}
                        </span>;
                      ))}
<<<<<<< HEAD
                    </div>;
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>;
                      <motion&& motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1 && 1.05 }}
                        whileTap={{ scale: 0 && 0.95 }}>;
                        Learn More;
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />;
                      </motion && motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">;
                      <div className="text-center">;
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                          <Rocket className="w-8 h-8 text-white" />;
                        </div>;
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>;
                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              </AnimatePresence>;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
=======
                    </div>
<<<<<<< HEAD
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug |featuredServices[currentServiceIndex]?.id}`}>
=======
                    <Link href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-cyan-400 font-medium">Revolutionary Technology</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Call to Action */}
        <motion&& motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
<<<<<<< HEAD
              variants={itemVariants}>;
              Ready to Transform Your Business?;
            </motion && motion.h2>;
            <motion&& motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}>;
              Join the future of technology with Zion Tech Group's revolutionary solutions. ;
              Get started today and experience the power of AI consciousness and quantum computing.;
            </motion && motion.p>;
            <motion&& motion.div 
=======
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
<<<<<<< HEAD
            <motion.p
=======
            <motion.p 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions.
              Get started today and experience the power of AI consciousness and quantum computing.
            </motion.p>
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}>;
              <Link href="/quote">;
                <motion&& motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
<<<<<<< HEAD
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Get Started Today;
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
              <Link href="/contact">;
                <motion&& motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}>;
                  Contact Us;
                  <Phone className="inline-block ml-2 w-5 h-5" />;
                </motion && motion.button>;
              </Link>;
            </motion && motion.div>;
          </div>;
        </motion && motion.section>;
      </UltraFuturisticBackground>;
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (;
          <PerformanceMonitor />;
        )}
      </AnimatePresence>;
    </>;
  );
};
export default EnhancedHomepage;
                  type={(service as any).type || service.category}
                  features={service.features?.map (function => ({ name: f, description: f }))}
                  slug={(service as any).slug || service.id}
                  index={index}
                  is_popular={Math.random () > 0.7}
                  is_new={Math.random () > 0.8}
                  rating={4.0 + Math.random () * 1.0}
                  review_count={Math.floor (Math.random () * 100) + 10}
                  estimated_delivery="2 - 4 weeks";
                  technologies={['AICloudSecurityAutomation']}
                />))}
            </motion.div>;
            {getFilteredServices ().length > 12 && (
              <motion.div;
                className="text - center mt - 12";
                variants={item_variants}
              >;
                <Link href="/services">;
                  <motion.button;
                    className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - bold rounded - xl text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300";
                    while_hover={{ scale: 1.05 }}
                    while_tap={{ scale: 0.95 }}
                  >;
                    View All Services;
                    <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
                  </motion.button>;
                </Link>;
              </motion.div>)}
          </div>;
        </motion.section>;
        {/* Featured Service Showcase */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-6xl mx - auto">;
            <motion.h2;
              className="text - 3xl md:text - 4xl font - bold text - center text - white mb - 12";
              variants={item_variants}
            >;
              Featured Revolutionary Services;
            </motion.h2>;
            <motion.div;
              className="bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 8";
              variants={item_variants}
            >;
              <AnimatePresence mode="wait">;
                <motion.div;
                  key={currentServiceIndex}
                  initial={{ opacity: 0, coordinate_x: 20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  exit={{ opacity: 0, coordinate_x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8 items - center";
                >;
                  <div>;
                    <h3 className="text - 2xl font - bold text - white mb - 4">;
                      {featured_services[currentServiceIndex]?.name}
                    </h3>;
                    <p className="text - gray - 300 mb - 6 leading - relaxed">;
                      {featured_services[currentServiceIndex]?.description}
                    </p>;
                    <div className="flex flex - wrap gap - 4 mb - 6">;
                      {featured_services[currentServiceIndex]?.features?.slice (0, 3).map ((feature, idx) => (
                        <span key={idx} className="text - xs text - gray - 400 bg - gray - 800 / 50 px - 3 py - 1 rounded - full border border - gray - 600">;
                          {feature}
                        </span>))}
                    </div>;
                    <Link href={`/services/${(featured_services[currentServiceIndex] as any)?.slug || featured_services[currentServiceIndex]?.id}`}>;
                      <motion.button;
                        className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - lg hover: from - cyan - 600 hover:to - blue - 700 transition - all duration - 300";
                        while_hover={{ scale: 1.05 }}
                        while_tap={{ scale: 0.95 }}
                      >;
                        Learn More;
                        <ArrowRight className="inline - block ml - 2 w - 4 h - 4" />;
                      </motion.button>;
                    </Link>;
                  </div>;
                  <div className="relative">;
                    <div className="w - full h - 64 bg - gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl border border - cyan - 500 / 30 flex items - center justify - center">;
                      <div className="text - center">;
                        <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - full flex items - center justify - center mx - auto mb - 4">;
                          <Rocket className="w - 8 h - 8 text - white" />;
                        </div>;
                        <p className="text - cyan - 400 font - medium">Revolutionary Technology</p>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>;
              </AnimatePresence>;
            </motion.div>;
          </div>;
        </motion.section>;
        {/* Call to Action */}
        <motion.section;
          className="py - 16 px - 4 lg:px - 8";
          variants={container_variants}
          initial="hidden";
          animate="visible";
        >;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.h2;
              className="text - 3xl md:text - 4xl font - bold text - white mb - 6";
              variants={item_variants}
            >;
              Ready to Transform Your Business?;
            </motion.h2>;
            <motion.p;
              className="text - xl text - gray - 300 mb - 8";
              variants={item_variants}
            >;
              Join the future of technology with Zion Tech Group's revolutionary solutions.;
              Get started today and experience the power of AI consciousness and quantum computing.;
            </motion.p>;
            <motion.div;
              className="flex flex - col sm:flex - row gap - 4 justify - center items - center";
              variants={item_variants}
            >;
              <Link href="/quote">;
                <motion.button;
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl text - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Get Started Today;
                  <ArrowRight className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
              <Link href="/contact">;
                <motion.button;
                  className="px - 8 py - 4 border - 2 border - cyan - 400 text - cyan - 400 font - bold rounded - xl text - lg hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  Contact Us;
                  <Phone className="inline - block ml - 2 w - 5 h - 5" />;
                </motion.button>;
              </Link>;
            </motion.div>;
          </div>;
        </motion.section>;
      </UltraFuturisticBackground>;
      {/* Performance Monitor */}
      <AnimatePresence>;
        {showPerformanceMonitor && (
          <PerformanceMonitor />)}
      </AnimatePresence>;
    </>);
}
;
export default EnhancedHomepage;
;
=======
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <Phone className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </UltraFuturisticBackground>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Performance Monitor */}
      <AnimatePresence>
        {showPerformanceMonitor && (
          <PerformanceMonitor />
        )}
      </AnimatePresence>
    </>
  )
}
export default EnhancedHomepage;
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
