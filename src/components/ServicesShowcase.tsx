import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Rocket, Shield, Cpu, Zap, TrendingUp, Star, CheckCircle, Users, Globe, Lock, Heart } from 'lucide-react';

export function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, color: 'from-green-500 to-emerald-600' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
  ];

  const services = [
    // AI & ML Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      category: 'ai',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'ML Model Training'],
      price: 'Starting at $2,999/month',
      rating: 4.9,
      reviewCount: 127,
      href: '/services/ai-business-intelligence'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'Intelligent sales automation and optimization platform',
      category: 'ai',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization', 'Customer Insights'],
      price: 'Starting at $1,999/month',
      rating: 4.8,
      reviewCount: 89,
      href: '/services/ai-sales-copilot'
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      description: 'AI-powered content creation and management platform',
      category: 'ai',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: ['Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Consistency'],
      price: 'Starting at $999/month',
      rating: 4.7,
      reviewCount: 156,
      href: '/services/llm-content-studio'
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      description: 'Modern infrastructure automation and deployment solutions',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring & Alerting'],
      price: 'Starting at $3,999/month',
      rating: 4.9,
      reviewCount: 203,
      href: '/services/cloud-devops'
    },
    {
      id: 'cloud-finops-optimizer',
      name: 'Cloud FinOps Optimizer',
      description: 'Cost optimization and financial operations for cloud infrastructure',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
      price: 'Starting at $2,499/month',
      rating: 4.8,
      reviewCount: 94,
      href: '/services/cloud-finops-optimizer'
    },
    {
      id: 'finops-advisor',
      name: 'FinOps Advisor',
      description: 'Strategic financial operations guidance and consulting',
      category: 'cloud',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      features: ['Strategic Planning', 'Cost Optimization', 'Team Training', 'Best Practices'],
      price: 'Starting at $1,999/month',
      rating: 4.9,
      reviewCount: 67,
      href: '/services/finops-advisor'
    },

    // Cybersecurity Services
    {
      id: 'ai-compliance-copilot',
      name: 'AI Compliance Copilot',
      description: 'AI-powered security and regulatory compliance automation',
      category: 'security',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Automated Compliance', 'Risk Assessment', 'Policy Management', 'Audit Preparation'],
      price: 'Starting at $4,999/month',
      rating: 4.9,
      reviewCount: 178,
      href: '/services/ai-compliance-copilot'
    },
    {
      id: 'zero-trust-architecture',
      name: 'Zero Trust Architecture',
      description: 'Modern security framework implementation and management',
      category: 'security',
      icon: Lock,
      color: 'from-red-500 to-orange-600',
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
      price: 'Starting at $5,999/month',
      rating: 4.8,
      reviewCount: 112,
      href: '/services/zero-trust-network-architecture'
    },
    {
      id: 'incident-response',
      name: 'Incident Response Platform',
      description: 'Comprehensive security incident management and response',
      category: 'security',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['24/7 Monitoring', 'Automated Response', 'Forensic Analysis', 'Recovery Planning'],
      price: 'Starting at $6,999/month',
      rating: 4.9,
      reviewCount: 89,
      href: '/services/incident-response-platform'
    },

    // Emerging Tech Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions and consulting',
      category: 'emerging',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      features: ['Quantum Algorithms', 'Hardware Integration', 'Performance Optimization', 'Future Planning'],
      price: 'Starting at $15,999/month',
      rating: 4.9,
      reviewCount: 45,
      href: '/services/quantum-computing'
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain Solutions',
      description: 'Enterprise blockchain implementation and consulting',
      category: 'emerging',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600',
      features: ['Smart Contracts', 'DApp Development', 'Consensus Mechanisms', 'Integration Services'],
      price: 'Starting at $8,999/month',
      rating: 4.7,
      reviewCount: 78,
      href: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'iot-edge',
      name: 'IoT Edge Computing',
      description: 'Smart device networks and edge computing solutions',
      category: 'emerging',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600',
      features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Security Integration'],
      price: 'Starting at $4,999/month',
      rating: 4.8,
      reviewCount: 134,
      href: '/services/iot-edge'
    },

    // Infrastructure Services
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Enterprise infrastructure design and management',
      category: 'infrastructure',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      price: 'Starting at $3,999/month',
      rating: 4.8,
      reviewCount: 167,
      href: '/services/it-infrastructure'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      description: 'Virtual simulation and monitoring solutions',
      category: 'infrastructure',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
      price: 'Starting at $7,999/month',
      rating: 4.9,
      reviewCount: 56,
      href: '/services/digital-twin'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Advanced data processing and analytics solutions',
      category: 'infrastructure',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      features: ['Data Processing', 'Business Intelligence', 'Custom Dashboards', 'Predictive Analytics'],
      price: 'Starting at $2,999/month',
      rating: 4.8,
      reviewCount: 189,
      href: '/services/data-analytics'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                  : 'border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                          />
                        ))}
                        <span className="text-sm text-slate-400 ml-2">({service.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.href}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-8">
              Our team of experts can design and implement tailored technology solutions to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services-catalog"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}