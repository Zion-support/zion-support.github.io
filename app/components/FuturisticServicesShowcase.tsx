'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Shield,
  Globe,
  Settings,
  BarChart,
  Users,
  Target,
  Cpu,
  Database,
  Smartphone,
  Video,
  Mic,
  DollarSign,
  Calendar,
  FileText,
  Image,
  Music,
  Hash,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube
} from 'lucide-react';

const FuturisticServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      services: [
        { 
          name: 'AI Voice Assistant', 
          path: '/ai-voice-assistant', 
          description: 'Intelligent voice solutions with 99.5% accuracy',
          price: '$199/month',
          icon: Mic,
          features: ['50+ languages', 'Real-time translation', 'Custom voices']
        },
        { 
          name: 'AI Social Media Manager', 
          path: '/ai-social-media-manager', 
          description: 'Automated social media management and content creation',
          price: '$99/month',
          icon: Instagram,
          features: ['6 platforms', 'AI content', 'Analytics']
        },
        { 
          name: 'AI Financial Planner', 
          path: '/ai-financial-planner', 
          description: 'Smart financial planning and investment optimization',
          price: '$49/month',
          icon: DollarSign,
          features: ['Portfolio optimization', 'Goal tracking', 'Risk analysis']
        },
        { 
          name: 'AI Code Generator', 
          path: '/ai-code-generator', 
          description: 'Generate code 10x faster in 50+ programming languages',
          price: '$79/month',
          icon: Code,
          features: ['50+ languages', 'Auto completion', 'Documentation']
        },
        { 
          name: 'AI Video Creator', 
          path: '/ai-video-creator', 
          description: 'Create professional videos with AI automation',
          price: '$99/month',
          icon: Video,
          features: ['Auto editing', 'AI voiceover', 'Templates']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      services: [
        { 
          name: 'IT Infrastructure', 
          path: '/it-infrastructure', 
          description: 'Enterprise-grade infrastructure solutions',
          price: 'Custom pricing',
          icon: Server,
          features: ['Cloud migration', '24/7 support', 'Security']
        },
        { 
          name: 'Cybersecurity', 
          path: '/cybersecurity', 
          description: 'Advanced security solutions and protection',
          price: 'Custom pricing',
          icon: Shield,
          features: ['Threat detection', 'Compliance', 'Monitoring']
        },
        { 
          name: 'DevOps & CI/CD', 
          path: '/devops', 
          description: 'Development operations and automation',
          price: 'Custom pricing',
          icon: Settings,
          features: ['Automation', 'Monitoring', 'Deployment']
        },
        { 
          name: 'Database Services', 
          path: '/database', 
          description: 'Database management and optimization',
          price: 'Custom pricing',
          icon: Database,
          features: ['Performance tuning', 'Backup', 'Migration']
        }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      services: [
        { 
          name: 'AI Writing Assistant', 
          path: '/ai-writing-assistant', 
          description: 'AI-powered content creation and editing',
          price: '$29/month',
          icon: FileText,
          features: ['Content generation', 'Grammar check', 'SEO optimization']
        },
        { 
          name: 'Smart Analytics', 
          path: '/smart-analytics', 
          description: 'Business intelligence and data visualization',
          price: '$49/month',
          icon: BarChart,
          features: ['Real-time dashboards', 'Predictive analytics', 'Reports']
        },
        { 
          name: 'AI Scheduler', 
          path: '/ai-scheduler', 
          description: 'Intelligent scheduling and calendar management',
          price: '$39/month',
          icon: Calendar,
          features: ['Auto scheduling', 'Conflict resolution', 'Integrations']
        },
        { 
          name: 'Expense Tracker', 
          path: '/expense-tracker', 
          description: 'AI-powered financial tracking and budgeting',
          price: '$19/month',
          icon: DollarSign,
          features: ['Auto categorization', 'Budget alerts', 'Reports']
        }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      services: [
        { 
          name: 'Quantum Computing', 
          path: '/quantum-computing', 
          description: 'Next-generation quantum computing solutions',
          price: 'Custom pricing',
          icon: Cpu,
          features: ['Quantum algorithms', 'Optimization', 'Research']
        },
        { 
          name: 'Robotics', 
          path: '/robotics', 
          description: 'Intelligent robotic systems and automation',
          price: 'Custom pricing',
          icon: Settings,
          features: ['AI integration', 'Autonomous operation', 'Custom solutions']
        },
        { 
          name: 'IoT & Edge Computing', 
          path: '/iot-edge-computing', 
          description: 'Connected devices and edge computing',
          price: 'Custom pricing',
          icon: Globe,
          features: ['Device management', 'Real-time processing', 'Analytics']
        },
        { 
          name: 'Blockchain & Web3', 
          path: '/blockchain-web3', 
          description: 'Decentralized applications and blockchain solutions',
          price: 'Custom pricing',
          icon: Hash,
          features: ['Smart contracts', 'DeFi', 'NFTs']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive unprecedented growth
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {serviceCategories[activeCategory].services.map((service, index) => (
              <motion.div
                key={index}
                className={`cyber-card-advanced p-6 relative overflow-hidden group cursor-pointer ${
                  serviceCategories[activeCategory].borderColor
                }`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${serviceCategories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Service Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${serviceCategories[activeCategory].color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>

                {/* Hover Effect */}
                {hoveredService === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="cyber-card-advanced p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get in touch with our experts to discuss your specific needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+13024640950"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FuturisticServicesShowcase;