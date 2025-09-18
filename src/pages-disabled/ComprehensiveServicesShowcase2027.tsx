import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const [activeService, setActiveService] = useState('ai-solutions');

  const services = {
    'ai-solutions': {
      title: 'AI Solutions & Automation',
      subtitle: 'Intelligent Systems for Modern Business',
      icon: '🤖',
      color: 'from-blue-500 to-purple-500',
      description: 'Transform your business with cutting-edge artificial intelligence solutions that automate complex processes and drive unprecedented growth.',
      features: [
        'Machine Learning Implementation',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics',
        'Automated Decision Making',
        'Intelligent Process Automation'
      ],
      benefits: [
        '300% increase in operational efficiency',
        '90% reduction in manual errors',
        '24/7 automated operations',
        'Real-time insights and analytics'
      ],
      pricing: {
        starter: '$2,999/month',
        professional: '$9,999/month',
        enterprise: 'Custom pricing'
      }
    },
    'quantum-computing': {
      title: 'Quantum Computing Services',
      subtitle: 'Exponential Computational Power',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
      description: 'Leverage the power of quantum computing to solve complex optimization problems and accelerate research and development.',
      features: [
        'Quantum Algorithm Development',
        'Optimization Problem Solving',
        'Cryptographic Security',
        'Drug Discovery Acceleration',
        'Financial Modeling',
        'Climate Simulation'
      ],
      benefits: [
        '1000x faster problem solving',
        'Exponential computational advantage',
        'Revolutionary breakthrough potential',
        'Future-proof technology investment'
      ],
      pricing: {
        starter: '$15,999/month',
        professional: '$49,999/month',
        enterprise: 'Custom pricing'
      }
    },
    'neural-interfaces': {
      title: 'Neural Interface Technology',
      subtitle: 'Direct Brain-Computer Communication',
      icon: '🔗',
      color: 'from-emerald-500 to-teal-500',
      description: 'Enable seamless communication between human minds and digital systems with our advanced neural interface technology.',
      features: [
        'Non-invasive Neural Reading',
        'Real-time Thought Processing',
        'High-bandwidth Data Transfer',
        'Secure Neural Encryption',
        'Multi-modal Interaction',
        'Consciousness Preservation'
      ],
      benefits: [
        'Direct thought-to-action control',
        'Enhanced cognitive capabilities',
        'Seamless human-machine integration',
        'Revolutionary accessibility solutions'
      ],
      pricing: {
        starter: '$8,999/month',
        professional: '$24,999/month',
        enterprise: 'Custom pricing'
      }
    },
    'biotech-ai': {
      title: 'Biotech AI Solutions',
      subtitle: 'Personalized Medicine Revolution',
      icon: '🧬',
      color: 'from-purple-500 to-pink-500',
      description: 'Revolutionize healthcare and biotechnology with AI-driven solutions for personalized medicine and advanced research.',
      features: [
        'Genetic Profile Analysis',
        'Personalized Drug Design',
        'Real-time Health Monitoring',
        'Disease Prediction Algorithms',
        'Automated Treatment Optimization',
        'Regenerative Medicine AI'
      ],
      benefits: [
        '95% treatment success rate',
        '10x faster diagnosis',
        '80% cost reduction',
        'Personalized healthcare solutions'
      ],
      pricing: {
        starter: '$12,999/month',
        professional: '$39,999/month',
        enterprise: 'Custom pricing'
      }
    },
    'space-technology': {
      title: 'Space Technology Services',
      subtitle: 'Interplanetary Communication & Exploration',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      description: 'Pioneer the future of space technology with our advanced communication networks and exploration systems.',
      features: [
        'Interplanetary Communication',
        'Satellite Constellation Management',
        'Space Resource Mining',
        'Planetary Exploration Systems',
        'Space-based Manufacturing',
        'Cosmic Weather Prediction'
      ],
      benefits: [
        'Global communication coverage',
        'Space resource utilization',
        'Planetary exploration capabilities',
        'Future space economy access'
      ],
      pricing: {
        starter: '$25,999/month',
        professional: '$79,999/month',
        enterprise: 'Custom pricing'
      }
    },
    'cybersecurity': {
      title: 'Advanced Cybersecurity',
      subtitle: 'Quantum-Safe Security Solutions',
      icon: '🛡️',
      color: 'from-indigo-500 to-purple-500',
      description: 'Protect your digital assets with next-generation cybersecurity solutions powered by quantum-safe encryption.',
      features: [
        'Quantum-Safe Encryption',
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Behavioral Analytics',
        'Automated Incident Response',
        'Blockchain Security'
      ],
      benefits: [
        '99.99% security guarantee',
        'Real-time threat prevention',
        'Automated security management',
        'Future-proof protection'
      ],
      pricing: {
        starter: '$5,999/month',
        professional: '$19,999/month',
        enterprise: 'Custom pricing'
      }
    }
  };

  const currentService = services[activeService as keyof typeof services];

  return (
    <>
      <Helmet>
        <title>Comprehensive Services Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of revolutionary technology services including AI solutions, quantum computing, neural interfaces, biotech AI, space technology, and advanced cybersecurity." />
        <meta name="keywords" content="AI services, quantum computing, neural interfaces, biotech AI, space technology, cybersecurity, technology solutions, 2027" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 COMPREHENSIVE SERVICES • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Technology Services
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Transform your business with our comprehensive suite of cutting-edge technology services. 
                From AI solutions to space technology, we provide the tools you need to dominate your industry.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Service Navigation */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeService === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="container mx-auto px-4 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-600/30"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Side - Description */}
                <div>
                  <div className="flex items-center mb-8">
                    <div className="text-6xl mr-6">{currentService.icon}</div>
                    <div>
                      <h2 className="text-4xl font-bold mb-2">{currentService.title}</h2>
                      <p className="text-xl text-gray-300">{currentService.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {currentService.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Key Benefits</h3>
                    <div className="space-y-3">
                      {currentService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${currentService.color} p-6 rounded-lg`}>
                    <h3 className="text-2xl font-bold mb-4">Pricing Plans</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-white/80 mb-1">Starter</div>
                        <div className="text-xl font-bold">{currentService.pricing.starter}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/80 mb-1">Professional</div>
                        <div className="text-xl font-bold">{currentService.pricing.professional}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-white/80 mb-1">Enterprise</div>
                        <div className="text-xl font-bold">{currentService.pricing.enterprise}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Service Features</h3>
                  <div className="space-y-4 mb-8">
                    {currentService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-6 border border-gray-600/30">
                    <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
                    <p className="text-gray-300 mb-6">
                      Contact our experts to discuss how {currentService.title.toLowerCase()} can transform your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`bg-gradient-to-r ${currentService.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                        Get Started
                      </button>
                      <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                        Schedule Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Transform Your Business Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary technology services. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Our Experts
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Download Service Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2027;