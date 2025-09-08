import React from 'react';
import SEO from './seo/Seo';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Circle, 
  ArrowRight,
  Check, 
  Star, 
  TrendingUp, 
  Users,
  Globe, 
  Lock, 
  Cloud, 
  Smartphone, 
  Building, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

// Import our new 2025 V2 innovative services
import { advancedMicroSaasExpansion2025V2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advancedITServices2025 } from '../data/2025-advanced-it-services';
import { advancedAIServices2025 } from '../data/2025-advanced-ai-services';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [
    ...advancedMicroSaasExpansion2025V2,
    ...advancedITServices2025,
    ...advancedAIServices2025
  ];

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: advancedMicroSaasExpansion2025V2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    },
    {
      id: 'it-services',
      name: 'Advanced IT Solutions',
      icon: <Building className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: advancedITServices2025,
      description: 'Comprehensive IT infrastructure and digital transformation services'
    },
    {
      id: 'ai-services',
      name: 'AI-Powered Solutions',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      services: advancedAIServices2025,
      description: 'Next-generation artificial intelligence and machine learning services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase V2 - Zion Tech Group"
        description="Discover our cutting-edge 2025 V2 innovative services including micro SAAS, advanced IT solutions, and AI-powered technologies."
        keywords="2025 services, micro SAAS, IT solutions, AI services, digital transformation, innovation"
      />
      
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <motion.h1 
            className="text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025 V2
            </span>
            <br />
            <span className="text-white">Comprehensive Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of technology with our revolutionary 2025 V2 service portfolio. 
            From micro SAAS solutions to advanced AI services, we deliver cutting-edge innovation.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">100+ Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">500+ Clients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="relative"
            >
              <div className="text-center mb-12">
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.icon}
                </motion.div>
                
                <h2 className="text-4xl font-bold text-white mb-4">
                  {category.name}
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-medium">{service.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        ${service.price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      
                      <motion.button
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our 2025 V2 services to drive innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}