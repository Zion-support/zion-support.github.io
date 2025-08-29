import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Heart, 
  PenTool, 
  Atom, 
  Cpu,
  ArrowRight,
  Star,
  Zap,
  TrendingUp
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  color: string;
  features: string[];
  price: string;
  category: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
}

const services: Service[] = [
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced analytics and machine learning',
    icon: Brain,
    href: '/services/ai-business-intelligence',
    color: 'from-cyan-400 to-blue-500',
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
    price: 'From $2,500/month',
    category: 'AI & ML',
    featured: true,
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: 'ai-healthcare-platform',
    name: 'AI Healthcare Platform',
    description: 'Revolutionary medical AI solutions for diagnostics, treatment planning, and patient care',
    icon: Heart,
    href: '/services/ai-healthcare-platform',
    color: 'from-red-400 to-pink-500',
    features: ['Medical Imaging AI', 'Diagnostic Assistance', 'Treatment Optimization', 'Patient Monitoring'],
    price: 'From $5,000/month',
    category: 'Healthcare',
    featured: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity',
    description: 'Next-generation security powered by artificial intelligence and machine learning',
    icon: Shield,
    href: '/services/ai-cybersecurity',
    color: 'from-green-400 to-emerald-500',
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
    price: 'From $3,200/month',
    category: 'Security',
    featured: true,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Harness the power of quantum mechanics for complex problem solving and optimization',
    icon: Atom,
    href: '/services/quantum-computing',
    color: 'from-purple-400 to-pink-500',
    features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
    price: 'From $8,000/month',
    category: 'Emerging Tech',
    featured: true,
    rating: 4.7,
    reviewCount: 43
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Enterprise-grade cloud infrastructure and automated deployment solutions',
    icon: Cloud,
    href: '/services/cloud-devops',
    color: 'from-blue-400 to-indigo-500',
    features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Monitoring & Alerting', 'Auto-scaling'],
    price: 'From $1,800/month',
    category: 'Infrastructure',
    featured: false,
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: 'ai-content-creation',
    name: 'AI Content Creation',
    description: 'Generate high-quality content at scale with advanced AI writing and design tools',
    icon: PenTool,
    href: '/services/ai-content-creation',
    color: 'from-orange-400 to-red-500',
    features: ['Content Generation', 'SEO Optimization', 'Brand Voice Consistency', 'Multi-language Support'],
    price: 'From $1,200/month',
    category: 'Content',
    featured: false,
    rating: 4.6,
    reviewCount: 98
  }
];

const categories = ['All', 'AI & ML', 'Healthcare', 'Security', 'Emerging Tech', 'Infrastructure', 'Content'];

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) 
              ? 'text-yellow-400 fill-current' 
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Innovative Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge solutions that drive digital transformation and business growth. 
            From AI-powered insights to quantum computing, we deliver the future of technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Star className="w-3 h-3 inline mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="relative p-8 pb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-sm"></div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="px-8 pb-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-3">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-6">
                      <RatingStars rating={service.rating} />
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">{service.price}</div>
                        <div className="text-xs text-gray-500">{service.reviewCount} reviews</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.href}
                      className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredService === service.id ? 0.05 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can drive your digital transformation 
              and accelerate your growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}