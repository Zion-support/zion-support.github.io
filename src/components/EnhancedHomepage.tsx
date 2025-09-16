import React, { useEffect, useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  ArrowRight, 
  TrendingUp, 
  Brain, 
  Shield, 
  Rocket, 
  Atom, 
  Sparkles,
  Building, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import Head from 'next/head';

// Import our enhanced components
import EnhancedServiceCard from './ui/EnhancedServiceCard';
import PerformanceMonitor from './PerformanceMonitor';
import UltraFuturisticBackground from './ui/UltraFuturisticBackground';

// Import service data
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';

const EnhancedHomepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Show performance monitor after 5 seconds
    const performanceTimer = setTimeout(() => {
      setShowPerformanceMonitor(true);
    }, 5000);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      clearTimeout(performanceTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
    ...innovative2025ITInfrastructureServices,
    ...innovative2025AIAutonomousServices
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', scheme: 'holographic' as const },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', scheme: 'cyber' as const },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', scheme: 'quantum' as const },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', scheme: 'neon' as const },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', scheme: 'holographic' as const },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-green-500 to-teal-500', scheme: 'cyber' as const }
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        ease: "easeInOut" as const
      }
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      setColorScheme(category.scheme);
    }
  };

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
        <divsection 
          className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20"
        >
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <divh1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Zion Tech Group
            </divh1>
            
            <divp 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness, 
              Quantum Computing, and Autonomous Solutions
            </divp>

            {/* CTA Buttons */}
            <divdiv 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a href="/services">
                <divbutton
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Explore Services
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </divbutton>
              </a>
              
              <a href="/quote">
                <divbutton
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Get Quote
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5" />
                </divbutton>
              </a>
            </divdiv>

            {/* Contact Information */}
            <divdiv 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
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
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </divdiv>
          </div>

          {/* Floating Elements */}
          <divdiv
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Atom className="w-8 h-8" />
          </divdiv>
          
          <divdiv
            className="absolute top-40 right-20 text-blue-400/20"
            style={{ animationDelay: '1s' }}
          >
            <Brain className="w-6 h-6" />
          </divdiv>
          
          <divdiv
            className="absolute bottom-40 left-20 text-purple-400/20"
            style={{ animationDelay: '2s' }}
          >
            <Rocket className="w-7 h-7" />
          </divdiv>
        </divsection>

        {/* Category Filter */}
        <divsection 
          className="py-16 px-4 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <divh2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
              Explore Our Revolutionary Services
            </divh2>
            
            <divdiv 
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <divbutton
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-2xl'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                  }`}
                >
                  <category.icon className="inline-block w-5 h-5 mr-2" />
                  {category.name}
                </divbutton>
              ))}
            </divdiv>
          </div>
        </divsection>

        {/* Services Grid */}
        <divsection 
          className="py-16 px-4 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <divdiv 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredServices().slice(0, 12).map((service, index) => (
                <EnhancedServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.name}
                  description={service.description}
                  category={service.category}
                  type={(service as any).type || service.category}
                  features={service.features?.map(f => ({ name: f, description: f }))}
                  slug={(service as any).slug || service.id}
                  index={index}
                  isPopular={Math.random() > 0.7}
                  isNew={Math.random() > 0.8}
                  rating={4.0 + Math.random() * 1.0}
                  reviewCount={Math.floor(Math.random() * 100) + 10}
                  estimatedDelivery="2-4 weeks"
                  technologies={['AI', 'Cloud', 'Security', 'Automation']}
                />
              ))}
            </divdiv>
            
            {getFilteredServices().length > 12 && (
              <divdiv 
                className="text-center mt-12"
              >
                <a href="/services">
                  <divbutton
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    View All Services
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </divbutton>
                </a>
              </divdiv>
            )}
          </div>
        </divsection>

        {/* Featured Service Showcase */}
        <divsection 
          className="py-16 px-4 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <divh2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
              Featured Revolutionary Services
            </divh2>
            
            <divdiv 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
                <divdiv
                  key={currentServiceIndex}
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
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <a href={`/services/${(featuredServices[currentServiceIndex] as any)?.slug || featuredServices[currentServiceIndex]?.id}`}>
                      <divbutton
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="inline-block ml-2 w-4 h-4" />
                      </divbutton>
                    </a>
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
                </divdiv>
              </div>
            </divdiv>
          </div>
        </divsection>

        {/* Call to Action */}
        <divsection 
          className="py-16 px-4 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <divh2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </divh2>
            
            <divp 
              className="text-xl text-gray-300 mb-8"
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions. 
              Get started today and experience the power of AI consciousness and quantum computing.
            </divp>
            
            <divdiv 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="/quote">
                <divbutton
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </divbutton>
              </a>
              
              <a href="/contact">
                <divbutton
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <Phone className="inline-block ml-2 w-5 h-5" />
                </divbutton>
              </a>
            </divdiv>
          </div>
        </divsection>
      </UltraFuturisticBackground>

      {/* Performance Monitor */}
      <div>
        {showPerformanceMonitor && (
          <PerformanceMonitor />
        )}
      </div>
    </>
  );
};

export default EnhancedHomepage;
