import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, Atom,
  ArrowRight,
  Building, Cpu, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Import our new futuristic components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

// Import our new enhanced components
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../components/EnhancedAccessibilityEnhancer';
import EnhancedSEO from '../components/EnhancedSEO';

// Helper function to get service website safely
const getServiceWebsite = (service: { website?: string; link?: string; id?: string; name: string }) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

// Helper function to get service price safely
const getServicePrice = (service: any): string => {
  if ('price' in service && typeof service.price === 'string') {
    return service.price;
  }
  
  if ('price' in service && typeof service.price === 'object' && service.price.monthly) {
    return `$${service.price.monthly}/month`;
  }
  
  if ('pricing' in service && service.pricing) {
    if (typeof service.pricing === 'string') {
      return service.pricing;
    }
    if (typeof service.pricing === 'object' && 'starter' in service.pricing) {
      return service.pricing.starter;
    }
    if (typeof service.pricing === 'object' && 'monthly' in service.pricing) {
      return `$${service.pricing.monthly}/month`;
    }
  }
  
  return 'Contact Us';
};

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Get featured services
  const featuredServices = allServices.slice(0, 6);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' }
  ];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Zion Tech Group
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Pioneering the future of autonomous business operations with cutting-edge AI, 
                quantum computing, and emerging technologies.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions that drive innovation and transform businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${service.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white">
                    <service.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Leading-edge technology with proven results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the future of autonomous business operations with Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
