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
      features: ['Smart Service Discovery', 'Category-based Filtering', 'Real-time Search', 'Interactive Service Cards'],
      icon: Brain,
      route: '/ai-services-hub',
      color: 'from-purple-600 to-blue-600'
    },
    {
      category: 'Performance',
      title: 'Performance Analytics Dashboard',
      description: 'Real-time monitoring and analytics for optimal application performance with automated alerts and recommendations.',
      features: ['Real-time Monitoring', 'Performance Metrics', 'Automated Alerts', 'Smart Recommendations'],
      icon: BarChart3,
      route: '/performance-analytics',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      category: 'SEO & Optimization',
      title: 'Enhanced SEO Management',
      description: 'Advanced SEO optimization with dynamic meta tags, structured data, and social media integration.',
      features: ['Dynamic Meta Tags', 'Structured Data', 'Social Media Integration', 'Performance Optimization'],
      icon: Search,
      route: '/',
      color: 'from-green-600 to-emerald-600'
    },
    {
      category: 'User Experience',
      title: 'Modern UI/UX Enhancements',
      description: 'Cutting-edge user interface improvements with smooth animations, responsive design, and accessibility features.',
      features: ['Smooth Animations', 'Responsive Design', 'Accessibility Features', 'Modern Components'],
      icon: Palette,
      route: '/',
      color: 'from-pink-600 to-rose-600'
    },
    {
      category: 'Security',
      title: 'Advanced Security Features',
      description: 'Enhanced security measures including CSP headers, XSS protection, and secure authentication.',
      features: ['CSP Headers', 'XSS Protection', 'Secure Authentication', 'Security Monitoring'],
      icon: Shield,
      route: '/',
      color: 'from-red-600 to-orange-600'
    },
    {
      category: 'Integration',
      title: 'Seamless Service Integration',
      description: 'Unified platform for integrating and managing all micro SAAS services with centralized control.',
      features: ['Unified Dashboard', 'Service Management', 'Centralized Control', 'API Integration'],
      icon: Settings,
      route: '/',
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Performance',
      description: 'Optimized loading times and improved user experience across all services.',
      icon: Zap,
      metric: '40% faster'
    },
    {
      title: 'Better SEO',
      description: 'Improved search engine visibility and social media sharing capabilities.',
      icon: Search,
      metric: '60% improvement'
    },
    {
      title: 'Increased Security',
      description: 'Advanced security measures protecting user data and application integrity.',
      icon: Shield,
      metric: '99.9% secure'
    },
    {
      title: 'User Satisfaction',
      description: 'Enhanced user interface and experience leading to higher engagement rates.',
      icon: Users,
      metric: '85% satisfaction'
    }
  ];

  const seoData = {
    title: 'Comprehensive Improvements 2025 - Zion Tech Group',
    description: 'Discover the revolutionary platform enhancements including Advanced AI Services Hub, Performance Analytics, Enhanced SEO Management, and Modern UI/UX improvements.',
    keywords: ['AI Services Hub', 'Performance Analytics', 'SEO Management', 'UI/UX Improvements', 'Zion Tech Group', 'Micro SAAS', 'AI Solutions'],
    ogImage: '/images/comprehensive-improvements-2025.jpg',
    ogType: 'website',
    canonicalUrl: 'https://ziontechgroup.com/comprehensive-improvements-2025',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Comprehensive Improvements 2025",
      "description": "Revolutionary platform enhancements for Zion Tech Group",
      "url": "https://ziontechgroup.com/comprehensive-improvements-2025",
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    }
  };

  return (
    <EnhancedSEOManager seoData={seoData}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
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
                  key={improvement.title}
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
                    <p className="text-gray-300 mb-4">
                      {improvement.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {improvement.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={improvement.route}
                    className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r ${improvement.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                  >
                    Explore Feature
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Measurable Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive improvements deliver tangible results that directly impact your business success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-purple-400">{benefit.metric}</div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already leveraging our revolutionary platform enhancements 
                to drive growth, improve efficiency, and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/ai-services-hub"
                  className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg"
                >
                  <Brain className="w-5 h-5 mr-2 inline" />
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                <div>
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Phone</h4>
                  <p>+1 302 464 0950</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Website</h4>
                  <p>https://ziontechgroup.com</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Address</h4>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedSEOManager>
  );
};

export default ComprehensiveImprovements2025;