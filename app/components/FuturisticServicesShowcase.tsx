'use client';
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign,
  Target,
  Sparkles
} from 'lucide-react';
import { realMicroSAASServices2025 } from '../../data/real-micro-saas-services-2025';
import { realITServices2025 } from '../../data/real-it-services-2025';
import { realAIServices2025 } from '../../data/real-ai-services-2025';

const FuturisticServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');
  const [visibleCards, setVisibleCards] = useState(6);

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: Zap,
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      services: realMicroSAASServices2025
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      services: realAIServices2025
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      services: realITServices2025
    }
  ];

  const activeServices = serviceCategories.find(cat => cat.id === activeTab)?.services || [];

  const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="quantum-card p-6 h-full group hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-2xl`}>
          {service.icon}
        </div>
        {service.popular && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {service.name}
      </h3>

      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {service.description}
      </p>

      <div className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center text-sm text-gray-400">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            <span className="line-clamp-1">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-white">
          {service.price}
          <span className="text-sm text-gray-400 font-normal">{service.period}</span>
        </div>
        <div className="flex items-center text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="ml-1 text-sm font-medium">{service.rating}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-400">
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          <span>{service.setupTime}</span>
        </div>
        <div className="flex items-center">
          <Users className="w-3 h-3 mr-1" />
          <span>{service.customers} customers</span>
        </div>
      </div>

      <button className="w-full cyber-button py-3 text-sm font-semibold rounded-lg flex items-center justify-center group">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Solutions
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="holographic-text">Real Services</span>
            <br />
            <span className="text-white">For Real Results</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI, IT, and Micro SAAS services. 
            Each solution is designed to deliver measurable results and drive business growth.
          </p>
        </motion.div>

        {/* Service Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.services.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {activeServices.slice(0, visibleCards).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleCards < activeServices.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={() => setVisibleCards(prev => Math.min(prev + 6, activeServices.length))}
              className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg flex items-center mx-auto group"
            >
              Load More Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Services Delivered', icon: Award },
            { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
            { number: '300%', label: 'Average ROI', icon: TrendingUp },
            { number: '24/7', label: 'Expert Support', icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white neon-glow mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive suite of AI and IT services. 
              Our experts are ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg flex items-center justify-center group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticServicesShowcase;