import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const InteractiveServiceShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'quantum', name: 'Quantum', icon: '🔮' },
    { id: 'security', name: 'Security', icon: '🛡️' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🖥️' },
    { id: 'emerging', name: 'Emerging Tech', icon: '⚡' }
  ];

  const services = [
    {
      id: 'quantum-ai',
      title: 'QuantumEdge AI Platform',
      description: 'Revolutionary platform combining quantum computing principles with AI for ultra-fast machine learning and optimization problems',
      category: 'quantum',
      icon: '🔮',
      price: 'From $2,500',
      features: ['Quantum-inspired algorithms', 'Hybrid quantum-classical processing', 'Real-time optimization'],
      isNew: true,
      href: '/services/quantum-ai'
    },
    {
      id: 'neuromorphic',
      title: 'NeuromorphicAI Studio',
      description: 'Brain-inspired AI development platform that mimics biological neural networks for ultra-efficient, low-power AI applications',
      category: 'ai',
      icon: '🧠',
      price: 'From $1,800',
      features: ['Spiking neural networks', 'Event-driven processing', 'Low-power AI models'],
      isPopular: true,
      href: '/services/neuromorphic-ai'
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Network Architecture',
      description: 'Comprehensive zero-trust network architecture implementation with continuous verification and micro-segmentation',
      category: 'security',
      icon: '🛡️',
      price: 'From $4,500',
      features: ['Continuous identity verification', 'Micro-segmentation', 'Real-time threat detection'],
      isPopular: true,
      href: '/services/zero-trust'
    },
    {
      id: '5g-private',
      title: '5G Private Network Solutions',
      description: 'Enterprise-grade 5G private network solutions for industrial IoT, smart manufacturing, and autonomous operations',
      category: 'infrastructure',
      icon: '📡',
      price: 'From $2,800',
      features: ['Private 5G core network', 'Ultra-low latency', 'Massive IoT support'],
      isNew: true,
      href: '/services/5g-private'
    },
    {
      id: 'space-tech',
      title: 'SpaceTech AI Platform',
      description: 'AI-powered platform for space mission planning, satellite operations, and space data analytics',
      category: 'emerging',
      icon: '🚀',
      price: 'From $3,500',
      features: ['Mission planning AI', 'Satellite operations', 'Space data analytics'],
      isNew: true,
      href: '/services/space-tech'
    },
    {
      id: 'green-tech',
      title: 'GreenTech AI Solutions',
      description: 'AI-powered sustainability platform for environmental monitoring, carbon footprint reduction, and green energy optimization',
      category: 'emerging',
      icon: '🌱',
      price: 'From $1,400',
      features: ['Environmental monitoring', 'Carbon footprint tracking', 'Energy optimization'],
      isPopular: true,
      href: '/services/green-tech'
    },
    {
      id: 'ai-autonomous',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages business operations, decision-making, and strategic planning',
      category: 'ai',
      icon: '🎯',
      price: 'From $5,000',
      features: ['Autonomous decision making', 'Strategic planning', 'Business optimization'],
      isNew: true,
      href: '/services/ai-autonomous'
    },
    {
      id: 'quantum-finance',
      title: 'Quantum Financial Trading Platform',
      description: 'Quantum computing-powered trading platform for ultra-fast market analysis and algorithmic trading',
      category: 'quantum',
      icon: '💰',
      price: 'From $6,000',
      features: ['Quantum market analysis', 'Ultra-fast trading', 'Risk optimization'],
      isPopular: true,
      href: '/services/quantum-finance'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="gradient-text">Service Showcase</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore our cutting-edge technology solutions through an interactive experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <Link to={service.href} className="block">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift group-hover:shadow-zion-glow relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Service Icon */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{service.icon}</span>
                    </div>

                    {/* Service Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="flex gap-2">
                          {service.isNew && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-zion-green/20 text-zion-green text-xs font-medium">
                              New
                            </span>
                          )}
                          {service.isPopular && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-zion-yellow/20 text-zion-yellow text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-zion-slate-light mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="text-zion-cyan text-sm font-medium mb-2">Key Features:</div>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-zion-cyan font-semibold">{service.price}</div>
                        <div className="text-zion-cyan group-hover:text-white transition-colors duration-300">
                          Learn More →
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our team of experts can create custom solutions tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Request Custom Solution
              </Link>
              <Link
                to="/services"
                className="btn-secondary"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceShowcase;