"use client";
'use client';

import React{ useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motionAnimatePresence } from 'framer-motion';
import { 
  SearchStarUsersTrendingUpDollarSignClock
  CheckCircleArrowRightZapBrainShieldGlobe
  SparklesDatabaseCloud
  LockEyeHeartShare2DownloadPhoneMailMapPin
} from 'lucide-react';

export default function ServicesShowcase2027() {
  const [searchTermsetSearchTerm] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-automation-2027',
      name: 'AI Automation 2027',
      description: 'Next-generation AI automation with quantum-enhanced processing and neural interfaces.',
      icon: Brain,
      category: 'ai',
      features: ['Quantum AI Processing'Neural Interface Integration'Predictive Automation'],
      pricing: 'Starting at $299/month'
    },
    {
      id: 'quantum-security-2027',
      name: 'Quantum Security 2027',
      description: 'Revolutionary quantum encryption and AI-powered threat detection systems.',
      icon: Shield,
      category: 'security',
      features: ['Quantum Encryption'AI Threat Detection'Zero Trust Architecture'],
      pricing: 'Starting at $499/month'
    },
    {
      id: 'advanced-infrastructure-2027',
      name: 'Advanced Infrastructure 2027',
      description: 'Cutting-edge cloud infrastructure with AI optimization and autonomous management.',
      icon: Zap,
      category: 'infrastructure',
      features: ['AI Optimization'Autonomous Scaling'Real-time Monitoring'],
      pricing: 'Starting at $199/month'
    }
  ];

  const categories = [
    { id: 'all'name: 'All Services'icon: Globe },
    { id: 'ai'name: 'AI & ML'icon: Brain },
    { id: 'security'name: 'Security'icon: Shield },
    { id: 'infrastructure'name: 'Infrastructure'icon: Zap }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Advanced Services 2027 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary AI-powered services for 2027. Transform your business with cutting-edge technology." />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0y: -50 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Advanced Services
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}2027
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our revolutionary AI-powered services 
            designed for the next generation of business.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="flex gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((serviceindex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-purple-400">
                  {service.pricing}
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                  Learn More
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
          initial={{ opacity: 0y: 20 }}
          animate={{ opacity: 1y: 0 }}
          transition={{ duration: 0.8delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready for the Future?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our advanced 2027 services and 
            how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}