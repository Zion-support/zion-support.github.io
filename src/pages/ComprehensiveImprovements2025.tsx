import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Database,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Monitor,
  Search,
  BarChart3,
  Settings,
  Code,
  Palette,
  Smartphone,
  Globe2,
  Lock,
  Target,
  Award
} from 'lucide-react';
import EnhancedSEOManager from '../components/EnhancedSEOManager';

const ComprehensiveImprovements2025: React.FC = () => {
  const improvements = [
    {
      category: 'AI Services',
      title: 'Advanced AI Services Hub',
      description: 'Centralized platform showcasing all AI-powered micro SAAS solutions with intelligent filtering and search capabilities.',
      features: ['Smart Service Discovery', 'Category-based Filtering', 'Real-time Search', 'Service Status Tracking'],
      icon: Brain,
      route: '/ai-services-hub',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Performance',
      title: 'Real-Time Performance Analytics',
      description: 'Comprehensive performance monitoring with automated alerts and intelligent optimization recommendations.',
      features: ['Live Metrics Dashboard', 'Automated Alerts', 'Performance Insights', 'Optimization Tips'],
      icon: Monitor,
      route: '/performance-analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'SEO & Marketing',
      title: 'Enhanced SEO Management',
      description: 'Advanced SEO tools with structured data, meta tag optimization, and social media integration.',
      features: ['Meta Tag Optimization', 'Structured Data', 'Social Media Cards', 'Performance Tracking'],
      icon: Search,
      route: '/seo-dashboard',
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'User Experience',
      title: 'Modern UI/UX Enhancements',
      description: 'Futuristic design with smooth animations, responsive layouts, and intuitive navigation.',
      features: ['Smooth Animations', 'Responsive Design', 'Dark Mode', 'Interactive Elements'],
      icon: Palette,
      route: '/ui-showcase',
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Security',
      title: 'Advanced Security Features',
      description: 'Enterprise-grade security with threat detection, compliance monitoring, and automated responses.',
      features: ['Threat Detection', 'Compliance Monitoring', 'Automated Responses', 'Security Analytics'],
      icon: Shield,
      route: '/security-features',
      color: 'from-red-500 to-pink-500'
    },
    {
      category: 'Integration',
      title: 'Seamless Integrations',
      description: 'Connect with popular tools and platforms for enhanced workflow automation and data synchronization.',
      features: ['API Integration', 'Webhook Support', 'Data Sync', 'Workflow Automation'],
      icon: Code,
      route: '/integrations',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { label: 'AI Services', value: '6+', icon: Brain },
    { label: 'Performance Metrics', value: '12+', icon: BarChart3 },
    { label: 'Security Features', value: '8+', icon: Shield },
    { label: 'Integration Options', value: '15+', icon: Code }
  ];

  const benefits = [
    'Improved search engine rankings and visibility',
    'Enhanced user experience and engagement',
    'Real-time performance monitoring and optimization',
    'Advanced security and compliance features',
    'Seamless integration with existing tools',
    'Scalable and maintainable architecture'
  ];

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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Comprehensive Improvements 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}Platform
                </span>
                {' '}Enhancements
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the future of digital innovation with our comprehensive suite of improvements 
                designed to transform your business operations and drive unprecedented growth.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Platform Improvements Overview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive improvements span across multiple domains, ensuring your platform 
                is equipped with cutting-edge technology and features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {improvements.map((improvement, index) => (
                <motion.div
                  key={improvement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${improvement.color} rounded-lg flex items-center justify-center`}>
                      <improvement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                      {improvement.category}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{improvement.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{improvement.description}</p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {improvement.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={improvement.route}
                    className={`w-full bg-gradient-to-r ${improvement.color} text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                  >
                    Explore Feature
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Improvements?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive improvements deliver tangible benefits that directly impact 
                your business success and user satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with our comprehensive improvements and stay ahead 
                of the competition with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/ai-services-hub"
                  className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-lg"
                >
                  Explore AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the way in AI-powered business solutions and digital transformation
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>Mobile: +1 302 464 0950</span>
              <span>Email: kleber@ziontechgroup.com</span>
              <span>Address: 364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </section>
      </div>
    </EnhancedSEOManager>
  );
};

export default ComprehensiveImprovements2025;