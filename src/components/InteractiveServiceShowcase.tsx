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
}

const InteractiveServiceShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟', count: 35 },
    { id: 'ai', name: 'AI & ML', icon: '🤖', count: 13 },
    { id: 'quantum', name: 'Quantum', icon: '🔮', count: 1 },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🖥️', count: 2 },
    { id: 'analytics', name: 'Analytics', icon: '📊', count: 1 },
    { id: 'automation', name: 'Automation', icon: '⚡', count: 1 },
    { id: 'security', name: 'Security', icon: '🛡️', count: 1 }
  ];

  const services: Service[] = [
    {
      id: 'ai-strategy',
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation consulting for enterprises",
      icon: "🤖",
      price: "From $2,500",
      category: "ai",
      features: ["Strategic Planning", "Implementation Roadmap", "ROI Analysis"],
      isPopular: true,
      color: "from-zion-blue to-zion-cyan"
    },
    {
      id: 'quantum-ai',
      title: "Quantum AI Fusion Platform",
      description: "Revolutionary platform combining quantum computing with artificial intelligence",
      icon: "🔮",
      price: "From $25,000",
      category: "quantum",
      features: ["Quantum Algorithms", "AI Integration", "Performance Optimization"],
      isNew: true,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      id: 'neuromorphic',
      title: "Neuromorphic Computing Platform",
      description: "Brain-inspired computing architecture for ultra-efficient AI processing",
      icon: "🧠",
      price: "From $35,000",
      category: "ai",
      features: ["Neural Networks", "Efficient Processing", "Scalable Architecture"],
      color: "from-zion-cyan to-zion-green"
    },
    {
      id: 'edge-ai',
      title: "Edge AI Orchestration Platform",
      description: "Intelligent orchestration of AI workloads across distributed edge computing",
      icon: "🌐",
      price: "From $15,000",
      category: "infrastructure",
      features: ["Edge Deployment", "Load Balancing", "Real-time Processing"],
      color: "from-zion-yellow to-zion-orange"
    },
    {
      id: 'federated-learning',
      title: "Federated Learning Platform",
      description: "Privacy-preserving AI training across distributed data sources",
      icon: "🔒",
      price: "From $20,000",
      category: "ai",
      features: ["Data Privacy", "Distributed Training", "Secure Communication"],
      color: "from-zion-orange to-zion-red"
    },
    {
      id: 'ai-ethics',
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive framework for ethical AI development and governance",
      icon: "⚖️",
      price: "From $18,000",
      category: "ai",
      features: ["Ethical Guidelines", "Compliance Tools", "Audit Trails"],
      color: "from-zion-red to-zion-purple"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
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
            Explore our cutting-edge technology solutions with interactive filtering and detailed insights
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
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-zion-blue-dark border-zion-cyan shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-zion-slate-light border-white/20 hover:bg-white/20 hover:border-zion-cyan/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
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
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group relative"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 h-full"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(34, 221, 210, 0.15)"
                  }}
                >
                  {/* Badges */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex gap-2">
                      {service.isPopular && (
                        <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          Popular
                        </span>
                      )}
                      {service.isNew && (
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-zion-cyan text-xs font-medium mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center">
                    <div className="text-zion-cyan font-bold">{service.price}</div>
                    <Link
                      to={`/services/${service.id}`}
                      className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan text-sm rounded-lg border border-zion-cyan/30 hover:bg-zion-cyan/30 transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-cyan/50 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
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
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="btn-secondary"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceShowcase;