import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
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

interface EnhancedHomepageProps {
  className?: string;
}

const EnhancedHomepage: React.FC<EnhancedHomepageProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<'cyber' | 'quantum' | 'neon' | 'holographic'>('cyber');

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Sample services data
  const allRevolutionaryServices = [
    {
      id: 'ai-consciousness-platform',
      name: 'AI Consciousness Platform',
      description: 'Revolutionary AI consciousness platform that enables machines to develop self-awareness and emotional intelligence.',
      category: 'ai',
      features: ['Self-awareness algorithms', 'Emotional intelligence', 'Autonomous decision making', 'Real-time learning'],
      slug: 'ai-consciousness-platform'
    },
    {
      id: 'quantum-computing-suite',
      name: 'Quantum Computing Suite',
      description: 'Advanced quantum computing solutions for complex problem solving and data processing.',
      category: 'quantum',
      features: ['Quantum algorithms', 'Superposition processing', 'Entanglement networks', 'Quantum cryptography'],
      slug: 'quantum-computing-suite'
    },
    {
      id: 'cybersecurity-ai',
      name: 'AI-Powered Cybersecurity',
      description: 'Next-generation cybersecurity powered by artificial intelligence and machine learning.',
      category: 'cybersecurity',
      features: ['Threat detection', 'Automated response', 'Behavioral analysis', 'Zero-trust architecture'],
      slug: 'cybersecurity-ai'
    },
    {
      id: 'space-technology',
      name: 'Space Technology Solutions',
      description: 'Cutting-edge space technology for satellite communications and space exploration.',
      category: 'space',
      features: ['Satellite networks', 'Space communication', 'Orbital mechanics', 'Deep space exploration'],
      slug: 'space-technology'
    },
    {
      id: 'enterprise-automation',
      name: 'Enterprise Automation',
      description: 'Comprehensive enterprise automation solutions for modern businesses.',
      category: 'enterprise',
      features: ['Process automation', 'Workflow optimization', 'Data integration', 'Performance monitoring'],
      slug: 'enterprise-automation'
    },
    {
      id: 'micro-saas-platform',
      name: 'Micro SaaS Platform',
      description: 'Complete micro SaaS development platform with billing, auth, and analytics.',
      category: 'enterprise',
      features: ['User management', 'Payment processing', 'Analytics dashboard', 'API integration'],
      slug: 'micro-saas-platform'
    }
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase())
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
        <title>Zion Tech Group - Revolutionary 2025 Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2025 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2025 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className || ''}`}>
        {/* Hero Section */}
        <motion.section 
          className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness,
              Quantum Computing, and Autonomous Solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
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
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>

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
              variants={itemVariants}
            >
              Explore Our Revolutionary Services
            </motion.h2>
            
            <motion.div 
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
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {getFilteredServices().slice(0, 12).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <motion.button
                      className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Featured Service Showcase */}
        <motion.section 
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              variants={itemVariants}
            >
              Featured Revolutionary Services
            </motion.h2>
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
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
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link href={`/services/${featuredServices[currentServiceIndex]?.slug}`}>
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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

        {/* Call to Action */}
        <motion.section
          className="py-16 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group's revolutionary solutions.
              Get started today and experience the power of AI consciousness and quantum computing.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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
      </div>
    </>
  );
};

export default EnhancedHomepage;