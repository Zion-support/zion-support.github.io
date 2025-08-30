import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud
} from 'lucide-react';

export function EnhancedServicesShowcase() {
  const featuredServices = [
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration'],
      price: 'Starting at $2,999/month',
      category: 'AI & Analytics'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation'],
      price: 'Starting at $1,999/month',
      category: 'Cybersecurity'
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support'],
      price: 'Starting at $4,999/month',
      category: 'Emerging Tech'
    },
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization'],
      price: 'Starting at $3,499/month',
      category: 'Healthcare'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      count: 15,
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: 12,
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Threat Intelligence', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Compliance Automation', href: '/services/ai-compliance-assistant' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      count: 8,
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Edge Computing', href: '/services/edge-computing-platform' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      count: 20,
      services: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'IoT & Edge', href: '/services/iot-edge' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge solutions that are reshaping industries and driving innovation across the globe
          </motion.p>
        </motion.div>

        {/* Featured Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <span className="text-xs text-cyan-400 font-medium">{service.category}</span>
                  <div className="text-lg font-bold text-white mt-1">{service.price}</div>
                </div>
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Explore by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">{category.name}</h4>
                  <span className="text-sm text-cyan-400 font-medium">{category.count} services</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link
                        to={service.href}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of enterprises already leveraging our cutting-edge solutions to stay ahead of the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
