import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Code2, Database, Shield, Smartphone, Target, 
  CheckCircle, ArrowRight, Star, Sparkles, Rocket, 
  Zap, TrendingUp, Lock, Globe, Cpu, Users, 
  Clock, DollarSign, Award, Phone, Mail, MapPin
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'content-generator',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content with advanced AI. Perfect for blogs, social media, and marketing.',
      price: '$29',
      period: 'month',
      features: [
        'Unlimited content generation',
        '50+ content types',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      popular: true,
      category: 'content',
      rating: 4.9,
      users: '2.5K+',
      savings: 'Save 10 hours/week'
    },
    {
      id: 'code-assistant',
      icon: <Code2 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster.',
      price: '$49',
      period: 'month',
      features: [
        'Code completion',
        'Bug detection',
        'Documentation generation',
        'Multi-language support',
        'Code review',
        'Refactoring suggestions'
      ],
      popular: false,
      category: 'development',
      rating: 4.8,
      users: '1.8K+',
      savings: 'Save 15 hours/week'
    },
    {
      id: 'analytics-dashboard',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictions.',
      price: '$39',
      period: 'month',
      features: [
        'Real-time dashboards',
        'AI predictions',
        'Custom reports',
        'Data visualization',
        'Automated alerts',
        'Integration APIs'
      ],
      popular: true,
      category: 'analytics',
      rating: 4.9,
      users: '3.2K+',
      savings: 'Save 8 hours/week'
    },
    {
      id: 'security-monitor',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring powered by AI.',
      price: '$59',
      period: 'month',
      features: [
        'Real-time monitoring',
        'Threat detection',
        'Automated responses',
        'Compliance reporting',
        'Vulnerability scanning',
        'Incident management'
      ],
      popular: false,
      category: 'security',
      rating: 4.7,
      users: '1.2K+',
      savings: 'Save 12 hours/week'
    },
    {
      id: 'chatbot-builder',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and engagement.',
      price: '$19',
      period: 'month',
      features: [
        'No-code builder',
        'Multi-platform support',
        'Natural language processing',
        'Analytics',
        'Custom integrations',
        'Live chat handoff'
      ],
      popular: true,
      category: 'communication',
      rating: 4.8,
      users: '4.1K+',
      savings: 'Save 20 hours/week'
    },
    {
      id: 'marketing-automation',
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'AI Marketing Automation',
      description: 'Automate your marketing campaigns with AI-powered personalization.',
      price: '$79',
      period: 'month',
      features: [
        'Campaign automation',
        'Personalization',
        'A/B testing',
        'Performance analytics',
        'Email marketing',
        'Social media management'
      ],
      popular: false,
      category: 'marketing',
      rating: 4.6,
      users: '2.8K+',
      savings: 'Save 18 hours/week'
    },
    {
      id: 'task-manager',
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and scheduling.',
      price: '$24',
      period: 'month',
      features: [
        'Smart prioritization',
        'Auto-scheduling',
        'Progress tracking',
        'Team collaboration',
        'Deadline alerts',
        'Performance insights'
      ],
      popular: false,
      category: 'productivity',
      rating: 4.7,
      users: '1.9K+',
      savings: 'Save 6 hours/week'
    },
    {
      id: 'expense-tracker',
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and insights.',
      price: '$14',
      period: 'month',
      features: [
        'Auto-categorization',
        'Receipt scanning',
        'Budget tracking',
        'Tax preparation',
        'Expense reports',
        'Financial insights'
      ],
      popular: false,
      category: 'finance',
      rating: 4.5,
      users: '1.5K+',
      savings: 'Save 4 hours/week'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSAASServices.length },
    { id: 'content', name: 'Content & Writing', count: microSAASServices.filter(s => s.category === 'content').length },
    { id: 'development', name: 'Development', count: microSAASServices.filter(s => s.category === 'development').length },
    { id: 'analytics', name: 'Analytics', count: microSAASServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSAASServices.filter(s => s.category === 'security').length },
    { id: 'communication', name: 'Communication', count: microSAASServices.filter(s => s.category === 'communication').length },
    { id: 'marketing', name: 'Marketing', count: microSAASServices.filter(s => s.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', count: microSAASServices.filter(s => s.category === 'productivity').length },
    { id: 'finance', name: 'Finance', count: microSAASServices.filter(s => s.category === 'finance').length }
  ];

  const filteredServices = activeFilter === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === activeFilter);

  const stats = [
    { number: '15,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Zap className="w-6 h-6" /> },
    { number: '50+', label: 'Integrations', icon: <Globe className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <Helmet>
        <title>Micro SAAS Services - AI-Powered Business Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS services. From content generation to analytics, automate your business processes with affordable, scalable solutions." />
        <meta name="keywords" content="micro SAAS, AI services, business automation, content generation, analytics, chatbot, marketing automation, productivity tools" />
        <meta name="contact" content="Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008 Middletown DE 19709" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our suite of intelligent micro SAAS solutions. 
              Affordable, powerful, and designed to scale with your growth. Start automating 
              your workflows today with our AI-powered tools.
            </p>
            
            {/* Contact Info */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-4xl mx-auto mb-8">
              <p className="text-cyan-300 font-semibold mb-4">Ready to get started? Contact us now!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
                <span className="flex items-center"><Phone className="w-4 h-4 text-cyan-400 mr-2" /> +1 302 464 0950</span>
                <span className="flex items-center"><Mail className="w-4 h-4 text-cyan-400 mr-2" /> kleber@ziontechgroup.com</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 text-cyan-400 mr-2" /> Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 relative ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per {service.period}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{service.rating}</span>
                    <span className="ml-2">({service.users} users)</span>
                  </div>
                  <span className="text-green-400 font-semibold">{service.savings}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link 
                    to={`/contact?service=${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to automate 
              workflows, increase productivity, and drive growth. Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call +1 302 464 0950
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              No setup fees • 30-day money-back guarantee • 24/7 support included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}