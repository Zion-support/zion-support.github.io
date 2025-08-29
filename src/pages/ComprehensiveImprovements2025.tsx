import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Target, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Award,
  TrendingUp,
  Heart,
  Crown,
  Eye,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  PhoneCall,
  Mail as MailIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import EnhancedSEOManager from '../components/EnhancedSEOManager';

export default function ComprehensiveImprovements2025() {
  const improvements = [
    {
      category: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      title: 'AI-Powered Solutions',
      items: [
        'AI Workflow Orchestrator - Intelligent workflow automation',
        'AI Data Governance Platform - Comprehensive data compliance',
        'AI Customer Experience Analytics - Advanced customer insights',
        'AI Business Intelligence Analytics - ML-powered insights',
        'AI Compliance Assistant - Automated regulatory compliance',
        'AI Sales Copilot - Intelligent sales optimization',
        'AI-Powered SEO - Machine learning optimization',
        'Interview Assessment AI - Candidate evaluation',
        'AI Content Marketing Suite - Automated content creation',
        'AI Customer Support Automation - Intelligent support',
        'AI Project Management - AI-driven optimization',
        'AI Financial Analytics - Intelligent financial insights',
        'AI Financial Risk Management - Risk assessment',
        'AI Code Review Security Scanner - Security analysis',
        'AI DevOps Automation Platform - DevOps automation',
        'AI Customer Experience Support - Enhanced experience',
        'AI Marketing Automation Personalization - Personalization',
        'AI Quantum Hybrid Platform - Quantum-AI integration',
        'AI Quantum Financial Trading - Quantum trading',
        'AI Autonomous Supply Chain - Supply chain automation',
        'AI Cybersecurity Threat Intelligence - Threat detection'
      ]
    },
    {
      category: 'Cloud & DevOps Solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      title: 'Infrastructure Excellence',
      items: [
        'Cloud DevOps - Infrastructure automation & scaling',
        'IT Infrastructure - Enterprise infrastructure solutions',
        'FinOps Advisor - Cloud cost optimization',
        'Cloud FinOps Optimizer - Financial operations automation'
      ]
    },
    {
      category: 'Cybersecurity & Privacy',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      title: 'Security First',
      items: [
        'AI Cybersecurity Platform - Advanced AI-powered security',
        'Security Headers & CSP - Web security hardening',
        'DSR Privacy Portal - GDPR/CCPA compliance',
        'Zero Trust Network Access - Modern security architecture'
      ]
    },
    {
      category: 'Digital Transformation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      title: 'Future-Ready Solutions',
      items: [
        'Digital Twin - Virtual system replicas',
        'Digital Transformation - Strategic technology consulting',
        'IT Consulting - Technology strategy & planning'
      ]
    },
    {
      category: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      title: 'Next-Gen Innovation',
      items: [
        'Quantum Computing - Next-gen computational power',
        'IoT Edge Computing - Smart device networks',
        'Space Tech - Space technology solutions',
        'Green IT - Sustainable technology solutions'
      ]
    }
  ];

  const features = [
    {
      title: 'Futuristic Design',
      description: 'Modern neon effects, animated backgrounds, and cutting-edge UI/UX',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Responsive Layout',
      description: 'Optimized for all screen sizes with mobile-first approach',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Performance Optimized',
      description: 'Lazy loading, code splitting, and optimized animations',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Accessibility Enhanced',
      description: 'WCAG 2.1 AA compliant with advanced assistive technologies',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SEO Optimized',
      description: 'Advanced SEO with structured data and performance metrics',
      icon: Search,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Analytics Driven',
      description: 'Comprehensive analytics and performance monitoring',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced User Experience',
      description: 'Intuitive navigation, smooth animations, and responsive design',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Improved Performance',
      description: 'Faster loading times, optimized assets, and efficient rendering',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Better Accessibility',
      description: 'Inclusive design for users with diverse abilities',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into user behavior and performance',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SEO Excellence',
      description: 'Optimized for search engines and improved discoverability',
      icon: Search,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Security Enhanced',
      description: 'Advanced security measures and privacy protection',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <EnhancedSEOManager 
        title="Comprehensive Improvements 2025 - Zion Tech Group"
        description="Discover the revolutionary platform enhancements that make Zion Tech Group the most advanced business technology solution available today."
        keywords={['platform improvements', 'AI services', 'technology enhancements', 'digital transformation', 'Zion Tech Group']}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary Platform Enhancements
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Improvements
              </span>
              {' '}2025
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of business technology with our revolutionary platform enhancements. 
              From advanced AI services to cutting-edge performance analytics, discover how Zion Tech Group 
              is transforming the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-services-hub"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Explore AI Services Hub
              </Link>
              <Link
                to="/performance-analytics"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg"
              >
                <BarChart3 className="w-5 h-5 mr-2 inline" />
                View Performance Analytics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Improvements Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Enhancements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge improvements that make our platform the most advanced 
              business technology solution available today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {improvements.map((improvement, index) => (
              <motion.div
                key={improvement.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${improvement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <improvement.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded-full mb-3">
                    {improvement.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {improvement.title}
                  </h3>
                  <ul className="space-y-2">
                    {improvement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform enhancements deliver cutting-edge features that set new standards 
              for business technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the tangible benefits of our comprehensive platform improvements 
              that drive business success and user satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary platform 
              enhancements to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg"
              >
                <ArrowRight className="w-5 h-5 mr-2 inline" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}