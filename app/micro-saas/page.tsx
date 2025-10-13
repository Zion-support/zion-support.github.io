import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Code, 
  Database, 
  Target, 
  Calendar,
  Video,
  FileText,
  Eye,
  Package,
  TrendingUp,
  MessageSquare,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSaasPage = () => {
  const microSaasProducts = [
    {
      id: 'zion-ai-video-generator',
      name: 'Zion AI Video Generator',
      description: 'AI-powered video creation tool that generates professional videos from text prompts and templates.',
      price: 'From $99/month',
      features: ['Text-to-video generation', 'Template library', 'Auto-editing', 'HD export'],
      icon: <Video className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/zion-ai-video-generator',
      featured: true
    },
    {
      id: 'zion-ai-invoice-generator',
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered data extraction and smart formatting.',
      price: 'From $49/month',
      features: ['Auto data extraction', 'Smart templates', 'PDF generation', 'Email automation'],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-ai-invoice-generator',
      featured: true
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics platform with AI-driven insights and behavioral predictions.',
      price: 'From $199/month',
      features: ['Customer segmentation', 'Behavioral analysis', 'Predictive insights', 'Custom dashboards'],
      icon: <Eye className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/zion-ai-customer-insights',
      featured: true
    },
    {
      id: 'zion-ai-email-analyzer',
      name: 'Zion AI Email Analyzer',
      description: 'AI-powered email analysis tool for sentiment, intent, and response optimization.',
      price: 'From $79/month',
      features: ['Sentiment analysis', 'Intent detection', 'Response suggestions', 'Performance metrics'],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/zion-ai-email-analyzer',
      featured: false
    },
    {
      id: 'zion-smart-inventory-optimizer',
      name: 'Zion Smart Inventory Optimizer',
      description: 'AI-driven inventory management with demand forecasting and automated reordering.',
      price: 'From $149/month',
      features: ['Demand forecasting', 'Auto reordering', 'Stock optimization', 'Cost analysis'],
      icon: <Package className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-smart-inventory-optimizer',
      featured: false
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      name: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment monitoring across all communication channels.',
      price: 'From $129/month',
      features: ['Real-time monitoring', 'Multi-channel analysis', 'Alert system', 'Trend reports'],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      link: '/zion-ai-customer-sentiment-tracker',
      featured: false
    },
    {
      id: 'zion-smart-expense-categorizer',
      name: 'Zion Smart Expense Categorizer',
      description: 'AI-powered expense categorization and financial tracking for businesses.',
      price: 'From $69/month',
      features: ['Auto categorization', 'Receipt scanning', 'Expense reports', 'Tax preparation'],
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      link: '/zion-smart-expense-categorizer',
      featured: false
    },
    {
      id: 'zion-ai-voice-assistant-pro',
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced voice assistant for business operations with custom command training.',
      price: 'From $179/month',
      features: ['Custom commands', 'Voice analytics', 'Multi-language support', 'Integration APIs'],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-voice-assistant-pro',
      featured: false
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'AI-powered code review tool that analyzes code quality and suggests improvements.',
      price: 'From $159/month',
      features: ['Code analysis', 'Quality metrics', 'Security scanning', 'Best practices'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-gray-500 to-slate-500',
      link: '/zion-ai-code-reviewer',
      featured: false
    },
    {
      id: 'zion-ai-social-media-manager',
      name: 'Zion AI Social Media Manager',
      description: 'Comprehensive social media management with AI content generation and scheduling.',
      price: 'From $199/month',
      features: ['Content generation', 'Auto scheduling', 'Analytics dashboard', 'Multi-platform'],
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/zion-ai-social-media-manager',
      featured: false
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      count: 6,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Analytics & Insights',
      count: 4,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security & Compliance',
      count: 2,
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Productivity & Automation',
      count: 8,
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro saas, business automation, AI tools, productivity software, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">50+ Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered analytics to automated workflows, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Video className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our micro SAAS solutions are organized into categories to help you find exactly what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-center text-sm md:text-base">
                  {category.count} solutions available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and powerful micro SAAS solutions that are transforming businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.filter(product => product.featured).map((product) => (
              <Link
                key={product.id}
                to={product.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-purple-400 font-medium">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of micro SAAS solutions designed for every business need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasProducts.map((product) => (
              <Link
                key={product.id}
                to={product.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm">{product.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {product.description}
                </p>
                <div className="flex items-center text-purple-400 text-xs font-medium group-hover:text-purple-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;