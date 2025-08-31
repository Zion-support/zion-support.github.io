import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain,
  Cloud,
  Shield,
  Zap,
  Users,
  Globe,
  Code,
  Database,
  Rocket,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Target,
  Award,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  features: string[];
  pricing: string;
  rating: number;
  reviews: number;
  color: string;
  popular?: boolean;
  link: string;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Platform',
    description: 'Advanced analytics with AI-powered insights and predictive modeling',
    icon: Brain,
    category: 'AI & Machine Learning',
    features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
    pricing: '$2,999/month',
    rating: 4.9,
    reviews: 156,
    color: 'from-blue-500 to-cyan-500',
    popular: true,
    link: '/ai-services/business-intelligence'
  },
  {
    id: 'quantum-computing-suite',
    title: 'Quantum Computing Suite',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: Rocket,
    category: 'Emerging Tech',
    features: ['Quantum algorithms', 'Hybrid classical-quantum', 'Scientific computing', 'Optimization'],
    pricing: '$5,000/month',
    rating: 4.8,
    reviews: 89,
    color: 'from-purple-500 to-pink-500',
    link: '/emerging-tech/quantum-computing'
  },
  {
    id: 'cybersecurity-platform',
    title: 'Advanced Cybersecurity Platform',
    description: 'Comprehensive security solutions with AI-powered threat detection',
    icon: Shield,
    category: 'Security',
    features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Compliance monitoring'],
    pricing: '$3,500/month',
    rating: 4.9,
    reviews: 203,
    color: 'from-red-500 to-orange-500',
    popular: true,
    link: '/security/cybersecurity'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Solutions',
    description: 'Scalable cloud infrastructure with automated management',
    icon: Cloud,
    category: 'Infrastructure',
    features: ['Auto-scaling', 'Load balancing', 'Monitoring', 'Backup & recovery'],
    pricing: '$1,999/month',
    rating: 4.7,
    reviews: 178,
    color: 'from-blue-500 to-indigo-500',
    link: '/infrastructure/cloud'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Visualization',
    description: 'Transform raw data into actionable insights with interactive dashboards',
    icon: TrendingUp,
    category: 'Analytics',
    features: ['Data processing', 'Interactive dashboards', 'Real-time insights', 'Custom reports'],
    pricing: '$2,500/month',
    rating: 4.8,
    reviews: 134,
    color: 'from-green-500 to-teal-500',
    link: '/analytics/data-visualization'
  },
  {
    id: 'api-integration',
    title: 'API Integration Services',
    description: 'Seamless integration solutions for modern applications',
    icon: Code,
    category: 'Development',
    features: ['REST APIs', 'GraphQL', 'Authentication', 'Documentation'],
    pricing: '$1,800/month',
    rating: 4.6,
    reviews: 98,
    color: 'from-purple-500 to-violet-500',
    link: '/development/api-integration'
  }
];

const EnhancedServiceShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = ['all', 'AI & Machine Learning', 'Emerging Tech', 'Security', 'Infrastructure', 'Analytics', 'Development'];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge technology solutions designed to transform your business and drive innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Services' : category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.color} p-8 h-full cursor-pointer transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-yellow-400 ring-offset-4 ring-offset-slate-900' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Service Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-100 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-100">
                          <CheckCircle className="w-4 h-4 text-green-300 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-white font-semibold">{service.rating}</span>
                      <span className="ml-1 text-gray-300 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full"
                  >
                    <Link
                      to={service.link}
                      className="block w-full bg-white text-slate-900 py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="inline-block w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServiceShowcase;
