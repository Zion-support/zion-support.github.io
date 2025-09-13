'use client';

import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, CheckCircle,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react';

const ComprehensiveServicesShowcase2025V2 = () => {
  const services = [
    {
      id: 'ai-powered-automation',
      name: 'AI-Powered Automation Suite',
      description: 'Revolutionary AI automation that transforms your business processes with 99.9% efficiency.',
      icon: Brain,
      features: ['Process Automation', 'Predictive Analytics', 'Real-time Monitoring'],
      pricing: 'Starting at $299/month'
    },
    {
      id: 'quantum-security',
      name: 'Quantum Security Solutions',
      description: 'Next-generation security powered by quantum encryption and AI threat detection.',
      icon: Shield,
      features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust Architecture'],
      pricing: 'Starting at $499/month'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Advanced Cloud Infrastructure',
      description: 'Scalable cloud solutions with AI optimization and automated management.',
      icon: Cloud,
      features: ['Auto-scaling', 'AI Optimization', '24/7 Monitoring'],
      pricing: 'Starting at $199/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <SEO 
        title="Comprehensive AI Services 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered services for 2025. Transform your business with cutting-edge technology."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Comprehensive AI Services
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of business with our comprehensive suite of AI-powered 
            services designed to revolutionize your operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                {service.features.map((feature, featureIndex) => (
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
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our comprehensive AI services and 
            how they can help your business achieve unprecedented success.
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
};

export default ComprehensiveServicesShowcase2025V2;