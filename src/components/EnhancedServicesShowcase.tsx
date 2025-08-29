import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Zap, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import { NEXT_GEN_INNOVATIVE_SERVICES_2025 } from '../data/nextGenInnovativeServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  features: string[];
  price: string;
  roi: string;
  marketSize: string;
  path: string;
  category: string;
}

const services: Service[] = [
  {
    id: 'ai-analytics',
    title: 'AI Predictive Analytics Engine',
    description: 'Advanced machine learning algorithms for real-time business insights and forecasting',
    icon: Brain,
    gradient: 'from-zion-cyan to-zion-purple',
    features: ['95% prediction accuracy', 'Real-time processing', 'Custom model training', 'Multi-dimensional forecasting'],
    price: '$12,999/month',
    roi: '450% ROI',
    marketSize: '$23.1B Market',
    path: '/services/ai-business-intelligence',
    category: 'AI & Analytics'
  },
  {
    id: 'quantum-optimization',
    title: 'Quantum Optimization Suite',
    description: 'Solve complex optimization problems with hybrid quantum-classical computing',
    icon: Zap,
    gradient: 'from-zion-purple to-zion-blue',
    features: ['Quantum advantage', 'Custom algorithms', 'Hybrid computing', '800% ROI'],
    price: '$25,999/month',
    roi: '800% ROI',
    marketSize: '$1.8B Market',
    path: '/services/quantum-computing',
    category: 'Quantum Computing'
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Platform',
    description: 'Continuous verification with AI behavioral analysis and real-time threat detection',
    icon: Shield,
    gradient: 'from-zion-blue to-zion-cyan',
    features: ['Continuous verification', 'AI behavioral analysis', 'Real-time detection', '600% ROI'],
    price: '$18,999/month',
    roi: '600% ROI',
    marketSize: '$18.5B Market',
    path: '/services/cybersecurity',
    category: 'Cybersecurity'
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Orchestration',
    description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization',
    icon: Cloud,
    gradient: 'from-zion-cyan to-zion-blue',
    features: ['Unified management', 'Cost optimization', 'Performance monitoring', '700% ROI'],
    price: '$15,999/month',
    roi: '700% ROI',
    marketSize: '$12.8B Market',
    path: '/services/cloud-devops',
    category: 'Cloud & DevOps'
  },
  {
    id: 'data-streaming',
    title: 'Real-Time Data Streaming',
    description: 'Process millions of events per second with AI analytics and enterprise scalability',
    icon: Database,
    gradient: 'from-zion-purple to-zion-cyan',
    features: ['Millions of events/sec', 'AI analytics', 'Low latency', '500% ROI'],
    price: '$13,999/month',
    roi: '500% ROI',
    marketSize: '$15.2B Market',
    path: '/services/data-analytics',
    category: 'Data & Analytics'
  },
  {
    id: 'blockchain-enterprise',
    title: 'Enterprise Blockchain Platform',
    description: 'AI-powered governance and smart contracts with multi-chain support',
    icon: Globe,
    gradient: 'from-zion-blue to-zion-purple',
    features: ['AI governance', 'Multi-chain support', 'Smart contracts', '600% ROI'],
    price: '$22,999/month',
    roi: '600% ROI',
    marketSize: '$19.9B Market',
    path: '/services/blockchain',
    category: 'Blockchain & Web3'
  }
];

const categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3'];

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Transform your business with our innovative AI-powered services designed for the future
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <motion.div
                  className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    borderColor: 'rgba(34, 221, 210, 0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Category badge */}
                  <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-4">
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-cyan">{service.price}</p>
                      <p className="text-xs text-gray-400">Monthly</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-purple">{service.roi}</p>
                      <p className="text-xs text-gray-400">ROI</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zion-blue">{service.marketSize}</p>
                      <p className="text-xs text-gray-400">Market</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={service.path}
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 border border-zion-cyan/30"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-zion-slate-light" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-lg">No services found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-zion-cyan/30 text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;