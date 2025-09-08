import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  category: string;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  color: string;
  href: string;
}

const InteractiveServiceShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: 35 },
    { id: 'ai', name: 'AI & ML', icon: '🤖', count: 13 },
    { id: 'quantum', name: 'Quantum', icon: '🔮', count: 5 },
    { id: 'cloud', name: 'Cloud', icon: '☁️', count: 8 },
    { id: 'security', name: 'Security', icon: '🛡️', count: 6 },
    { id: 'automation', name: 'Automation', icon: '⚡', count: 3 }
  ];

  const services: Service[] = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting for enterprises',
      icon: '🤖',
      price: 'From $2,500',
      category: 'ai',
      features: ['Strategic Planning', 'Implementation Roadmap', 'ROI Analysis', 'Team Training'],
      isPopular: true,
      color: 'from-zion-cyan to-zion-blue',
      href: '/services/ai'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Fusion Platform',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence',
      icon: '🔮',
      price: 'From $25,000',
      category: 'quantum',
      features: ['Quantum Algorithms', 'AI Integration', 'Performance Optimization', 'Scalable Architecture'],
      isNew: true,
      color: 'from-zion-purple to-zion-cyan',
      href: '/services/quantum'
    },
    {
      id: 'neuromorphic',
      title: 'Neuromorphic Computing Platform',
      description: 'Brain-inspired computing architecture for ultra-efficient AI processing',
      icon: '🧠',
      price: 'From $35,000',
      category: 'ai',
      features: ['Neural Networks', 'Efficient Processing', 'Scalable Architecture', 'Low Power Consumption'],
      color: 'from-zion-blue to-zion-cyan',
      href: '/services/ai'
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Orchestration Platform',
      description: 'Intelligent orchestration of AI workloads across distributed edge computing',
      icon: '🌐',
      price: 'From $15,000',
      category: 'cloud',
      features: ['Edge Deployment', 'Load Balancing', 'Real-time Processing', 'IoT Integration'],
      color: 'from-zion-cyan to-zion-green',
      href: '/services/cloud'
    },
    {
      id: 'federated-learning',
      title: 'Federated Learning Platform',
      description: 'Privacy-preserving AI training across distributed data sources',
      icon: '🔒',
      price: 'From $20,000',
      category: 'security',
      features: ['Data Privacy', 'Distributed Training', 'Secure Communication', 'Compliance Ready'],
      color: 'from-zion-green to-zion-cyan',
      href: '/services/security'
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Governance Platform',
      description: 'Comprehensive framework for ethical AI development and governance',
      icon: '⚖️',
      price: 'From $18,000',
      category: 'ai',
      features: ['Ethical Guidelines', 'Compliance Tools', 'Audit Trails', 'Risk Assessment'],
      color: 'from-zion-yellow to-zion-orange',
      href: '/services/ai'
    },
    {
      id: 'quantum-security',
      title: 'Quantum-Safe Security Suite',
      description: 'Next-generation security solutions resistant to quantum attacks',
      icon: '🔐',
      price: 'From $30,000',
      category: 'security',
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Threat Detection', 'Zero Trust'],
      isNew: true,
      color: 'from-zion-purple to-zion-red',
      href: '/services/security'
    },
    {
      id: 'cloud-automation',
      title: 'Cloud Infrastructure Automation',
      description: 'Intelligent automation of cloud infrastructure deployment and management',
      icon: '⚙️',
      price: 'From $12,000',
      category: 'automation',
      features: ['Infrastructure as Code', 'Auto-scaling', 'Cost Optimization', 'Monitoring'],
      color: 'from-zion-orange to-zion-yellow',
      href: '/services/automation'
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
    <section className="py-24 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Innovative Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge technology solutions designed to transform your business operations 
            and drive innovation across all industries
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-xl shadow-zion-cyan/25'
                  : 'bg-white/10 backdrop-blur-md text-zion-slate-light border border-white/20 hover:bg-white/20 hover:border-zion-cyan/50'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-zion-cyan/20 text-zion-cyan'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
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
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 hover:-translate-y-2">
                    {/* Popular/New Badge */}
                    {(service.isPopular || service.isNew) && (
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold text-white ${
                        service.isPopular 
                          ? 'bg-gradient-to-r from-zion-orange to-zion-yellow' 
                          : 'bg-gradient-to-r from-zion-purple to-zion-cyan'
                      }`}>
                        {service.isPopular ? '🔥 Popular' : '✨ New'}
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>

                    {/* Service Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Price */}
                      <div className="text-zion-cyan font-bold text-lg mb-4">
                        {service.price}
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-zion-cyan/60 text-xs">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-xl text-zion-cyan text-sm font-semibold group-hover:from-zion-cyan/30 group-hover:to-zion-blue/30 transition-all duration-300">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 backdrop-blur-md p-12 rounded-3xl border border-zion-cyan/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and give you a competitive edge in the market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-2xl hover:from-zion-blue to-zion-cyan transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-zion-cyan/25"
              >
                <span>🚀</span>
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan/50 text-zion-cyan font-semibold rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-zion-cyan/20 hover:border-zion-cyan transition-all duration-300 hover:scale-105"
              >
                <span>🔍</span>
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