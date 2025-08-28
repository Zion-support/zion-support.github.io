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
      color: 'from-zion-cyan to-zion-purple',
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
      description: 'WCAG compliant with enhanced user experience',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <EnhancedSEOManager
      seoData={{
        title: 'Comprehensive Improvements 2025 | Zion Tech Group',
        description: 'Discover our comprehensive suite of improvements including AI services, performance analytics, SEO optimization, and modern UI/UX enhancements.',
        keywords: ['AI services', 'performance analytics', 'SEO optimization', 'UI/UX', 'security features', 'integrations'],
        ogType: 'website',
        canonicalUrl: 'https://ziontechgroup.com/comprehensive-improvements-2025'
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                2025 Comprehensive Improvements
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI-powered micro SAAS solutions, cutting-edge IT services, and innovative technology solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/new-innovative-services-2025"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                >
                  Explore New Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-zion-cyan text-zion-cyan font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Improvements Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                What We've Improved
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the comprehensive enhancements we've made to revolutionize your digital experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-105`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Enhanced Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of AI-powered solutions and innovative services
              </p>
            </motion.div>

            <div className="space-y-8">
              {improvements.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 border border-opacity-20 backdrop-blur-sm`}>
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us to learn more about our enhanced services and how we can help transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple bg-opacity-10 border border-opacity-20 backdrop-blur-sm"
              >
                <PhoneCall className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-zion-purple to-zion-cyan bg-opacity-10 border border-opacity-20 backdrop-blur-sm"
              >
                <MailIcon className="w-12 h-12 text-zion-purple mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-zion-cyan to-zion-purple bg-opacity-10 border border-opacity-20 backdrop-blur-sm"
              >
                <MapPinIcon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Experience the Future of Technology
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our enhanced AI-powered solutions and futuristic design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                >
                  View All Services
                </Link>
                
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-zion-cyan text-zion-cyan font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedSEOManager>
  );
}