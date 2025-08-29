import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Globe, 
  Rocket, 
  Target, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  price: string;
  features: string[];
  gradient: string;
  path: string;
  badge?: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Advanced analytics and insights powered by artificial intelligence',
    icon: Brain,
    category: 'AI & Analytics',
    price: '$8,999/month',
    features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'AI-powered Reports'],
    gradient: 'from-cyan-500 to-blue-600',
    path: '/services/ai-business-intelligence-platform',
    badge: 'Most Popular',
    popular: true
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI Cybersecurity Platform',
    description: 'Next-generation cybersecurity using AI and machine learning',
    icon: Shield,
    category: 'Cybersecurity',
    price: '$6,999/month',
    features: ['Threat Detection', 'Automated Response', 'Risk Assessment', '24/7 Monitoring'],
    gradient: 'from-red-500 to-orange-600',
    path: '/services/ai-cybersecurity-suite'
  },
  {
    id: 'quantum-ai',
    title: 'Quantum AI Hybrid Platform',
    description: 'Revolutionary platform combining quantum computing with advanced AI',
    icon: Rocket,
    category: 'Emerging Tech',
    price: '$25,000/month',
    features: ['Quantum Algorithms', 'AI Integration', 'Scalable Computing', 'Future-ready'],
    gradient: 'from-purple-500 to-pink-600',
    path: '/services/quantum-ai-platform',
    badge: 'Revolutionary'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud DevOps Platform',
    description: 'Complete infrastructure automation and management solution',
    icon: Cloud,
    category: 'Cloud & DevOps',
    price: '$4,999/month',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling'],
    gradient: 'from-blue-500 to-indigo-600',
    path: '/services/cloud-devops'
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Platform',
    description: 'Virtual simulation and monitoring for physical systems',
    icon: Globe,
    category: 'Digital Innovation',
    price: '$7,999/month',
    features: ['Real-time Simulation', 'Predictive Maintenance', '3D Visualization', 'IoT Integration'],
    gradient: 'from-green-500 to-emerald-600',
    path: '/services/digital-twin'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Enterprise Platform',
    description: 'Secure, transparent distributed ledger technology',
    icon: Target,
    category: 'Blockchain',
    price: '$5,999/month',
    features: ['Smart Contracts', 'Supply Chain', 'Identity Management', 'DeFi Solutions'],
    gradient: 'from-yellow-500 to-orange-600',
    path: '/services/blockchain-enterprise-solutions'
  }
];

const categories = ['All', 'AI & Analytics', 'Cybersecurity', 'Emerging Tech', 'Cloud & DevOps', 'Digital Innovation', 'Blockchain'];

export const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Revolutionary Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Experience the future of technology with our cutting-edge solutions designed to transform 
            industries and drive unprecedented growth.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                {/* Service Card */}
                <div className="relative bg-slate-800/60 backdrop-blur border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6 h-full hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Most Popular
                      </div>
                    </motion.div>
                  )}

                  {/* Revolutionary Badge */}
                  {service.badge === 'Revolutionary' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        🚀 Revolutionary
                      </div>
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Category */}
                  <div className="text-sm text-cyan-400 font-medium mb-3">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center text-sm text-slate-400"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-slate-400 mb-6">
                    Starting price • Enterprise support included
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto"
                  >
                    <Link
                      to={service.path}
                      className="group/btn inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 border border-slate-600 hover:border-cyan-500"
                    >
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: hoveredService === service.id ? 1 : 0
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/comprehensive-services"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};