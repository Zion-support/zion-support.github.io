import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Bot, TrendingUp, Target, MessageCircle, BarChart3,
  DollarSign, Users, Check, ArrowRight, ExternalLink, Phone, Mail,
  Calendar, Shield, Filter, Headphones, Calculator, PieChart,
  Globe, Leaf, Cpu, Atom, Wifi, CheckCircle, Star
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      name: 'AI Supply Chain Risk Management',
      description: 'Protect your business from supply chain disruptions with AI-driven risk assessment, real-time monitoring, and predictive analytics.',
      features: ['AI-powered risk assessment', 'Real-time disruption alerts', 'Predictive analytics', 'Multi-tier supplier analysis'],
      pricing: 'Starting at $299/mo',
      benefits: ['60-80% reduction in disruptions', '90% faster risk assessment', '30-60 days early warning'],
      color: 'from-orange-600 via-red-600 to-red-800',
      icon: Shield,
      path: '/services/ai-supply-chain-risk-management'
    },
    {
      name: 'AI ESG Compliance Platform',
      description: 'Streamline your ESG compliance with AI-driven data collection, automated reporting, and real-time sustainability monitoring.',
      features: ['AI-powered data collection', 'Automated compliance reporting', 'Real-time sustainability tracking', 'Carbon footprint optimization'],
      pricing: 'Starting at $399/mo',
      benefits: ['85% faster reporting time', '90% improved compliance accuracy', '70% reduced tracking costs'],
      color: 'from-green-600 via-emerald-600 to-teal-800',
      icon: Leaf,
      path: '/services/ai-esg-compliance-platform'
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create intelligent digital replicas of your physical assets with AI-driven monitoring, predictive analytics, and real-time optimization.',
      features: ['AI-powered digital twin creation', 'Real-time IoT integration', 'Predictive maintenance', '3D visualization support'],
      pricing: 'Starting at $599/mo',
      benefits: ['25-40% reduction in operational costs', '30-50% improvement in uptime', '20-35% cut in maintenance costs'],
      color: 'from-blue-600 via-indigo-600 to-purple-800',
      icon: Cpu,
      path: '/services/ai-digital-twin-platform'
    },
    {
      name: 'AI Quantum Computing Platform',
      description: 'Harness the power of quantum computing with AI-driven optimization, hybrid quantum-classical solutions, and breakthrough computational capabilities.',
      features: ['AI-powered quantum optimization', 'Hybrid quantum-classical computing', 'Quantum machine learning', 'Real-time circuit simulation'],
      pricing: 'Starting at $1,299/mo',
      benefits: ['1000x faster problem solving', '60-80% reduction in computational costs', 'Breakthrough scientific discoveries'],
      color: 'from-purple-600 via-indigo-600 to-blue-800',
      icon: Atom,
      path: '/services/ai-quantum-computing-platform'
    },
    {
      name: 'AI Edge Computing Platform',
      description: 'Deploy AI at the edge with real-time processing, low-latency inference, and intelligent edge orchestration for IoT and mobile applications.',
      features: ['Real-time edge AI processing', 'Low-latency inference', 'Edge orchestration', 'IoT integration'],
      pricing: 'Starting at $199/mo',
      benefits: ['90% reduction in latency', '70% lower bandwidth costs', 'Real-time decision making'],
      color: 'from-cyan-600 via-blue-600 to-indigo-800',
      icon: Wifi,
      path: '/services/ai-edge-computing-platform'
    },
    {
      name: 'AI Customer Experience Analytics',
      description: 'Transform customer interactions with AI-driven sentiment analysis, behavioral insights, and personalized experience optimization.',
      features: ['AI sentiment analysis', 'Behavioral pattern recognition', 'Personalization engine', 'Real-time feedback processing'],
      pricing: 'Starting at $249/mo',
      benefits: ['40-60% improvement in customer satisfaction', '35% increase in retention', '50% faster issue resolution'],
      color: 'from-pink-600 via-rose-600 to-red-800',
      icon: MessageCircle,
      path: '/services/ai-customer-experience-analytics'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <SEO 
        title="New AI Services Showcase 2025 | Zion Tech Group"
        description="Discover our latest AI-powered services for 2025. Advanced solutions for supply chain, ESG compliance, digital twins, quantum computing, and more."
        keywords="AI services 2025, artificial intelligence, supply chain management, ESG compliance, digital twin, quantum computing, edge computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                New AI Services
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Showcase 2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover our cutting-edge AI-powered solutions designed to transform your business operations, 
                enhance efficiency, and drive innovation in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Pricing
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary AI Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our latest AI-powered solutions are designed to address the most pressing challenges 
                in modern business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 ml-4">
                          {service.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-gray-900">
                          {service.pricing}
                        </span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      <Link
                        to={service.path}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Contact us today to learn more about our AI services and how they can benefit your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                  <a 
                    href={contactInfo.website} 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Demo
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}