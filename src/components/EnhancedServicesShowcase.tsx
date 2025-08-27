import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Database, 
  Cpu, 
  Network,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
  price: string;
  rating: number;
  reviewCount: number;
  features: string[];
  path: string;
  gradient: string;
  popular?: boolean;
  new?: boolean;
}

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
      icon: Brain,
      category: 'AI Solutions',
      price: '$2,500/mo',
      rating: 4.9,
      reviewCount: 127,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'AI Insights'],
      path: '/services/ai-business-intelligence',
      gradient: 'from-zion-cyan to-zion-purple',
      popular: true
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.',
      icon: Cloud,
      category: 'Infrastructure',
      price: '$1,800/mo',
      rating: 4.8,
      reviewCount: 89,
      features: ['99.9% Uptime', 'Auto-scaling', 'Security First', 'Cost Optimization'],
      path: '/services/cloud-devops',
      gradient: 'from-zion-blue to-zion-cyan'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description: 'Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we\'ve got you covered.',
      icon: Shield,
      category: 'Security',
      price: '$3,200/mo',
      rating: 4.9,
      reviewCount: 156,
      features: ['Threat Detection', '24/7 Monitoring', 'Compliance', 'Incident Response'],
      path: '/services/cybersecurity',
      gradient: 'from-zion-purple to-zion-cyan',
      popular: true
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Platform',
      description: 'Unlock the power of your data with advanced analytics, machine learning, and business intelligence tools.',
      icon: Database,
      category: 'AI Solutions',
      price: '$2,100/mo',
      rating: 4.7,
      reviewCount: 94,
      features: ['Advanced Analytics', 'ML Models', 'Data Visualization', 'Real-time Processing'],
      path: '/services/data-analytics',
      gradient: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Stay ahead with cutting-edge quantum computing capabilities for complex problem-solving and optimization.',
      icon: Cpu,
      category: 'Emerging Tech',
      price: '$5,000/mo',
      rating: 4.9,
      reviewCount: 67,
      features: ['Quantum Algorithms', 'Optimization', 'Research Support', 'Expert Consultation'],
      path: '/services/quantum-computing',
      gradient: 'from-zion-purple to-zion-blue',
      new: true
    },
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance.',
      icon: Globe,
      category: 'Sustainability',
      price: '$1,900/mo',
      rating: 4.8,
      reviewCount: 78,
      features: ['Energy Efficiency', 'Carbon Reduction', 'Sustainable Practices', 'Cost Savings'],
      path: '/green-it',
      gradient: 'from-zion-cyan to-zion-blue'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'AI Solutions', name: 'AI Solutions', count: services.filter(s => s.category === 'AI Solutions').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Emerging Tech', name: 'Emerging Tech', count: services.filter(s => s.category === 'Emerging Tech').length },
    { id: 'Sustainability', name: 'Sustainability', count: services.filter(s => s.category === 'Sustainability').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology solutions designed to drive your business forward.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="relative group"
              >
                {/* Service card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 h-full hover:border-zion-cyan/30 transition-all duration-300"
                >
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
                          Popular
                        </span>
                      )}
                      {service.new && (
                        <span className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <Link
                      to={service.path}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-3xl pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
