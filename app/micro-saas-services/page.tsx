'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Settings, CreditCard, BarChart3, MessageSquare, Calendar, FileText, Globe, Lock, TrendingUp, Phone, Mail, MapPin, Smartphone, Code, Database, Cloud, Cpu } from 'lucide-react';

const MicroSAASServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration'],
      pricing: 'Starting at $29/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI categorization and budget insights.',
      features: ['Auto categorization', 'Budget alerts', 'Receipt scanning', 'Financial reports'],
      pricing: 'Starting at $19/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Customer Support',
      description: '24/7 AI-powered customer support with natural language processing.',
      features: ['Instant responses', 'Multi-language support', 'Ticket management', 'Analytics dashboard'],
      pricing: 'Starting at $49/month',
      link: '/ai-customer-support',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictions.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'AI Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes with AI.',
      features: ['Process automation', 'Custom workflows', 'Integration APIs', 'Performance monitoring'],
      pricing: 'Starting at $59/month',
      link: '/ai-workflow-automation',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Advanced security monitoring with AI threat detection and prevention.',
      features: ['Threat detection', 'Real-time alerts', 'Security reports', 'Compliance tracking'],
      pricing: 'Starting at $79/month',
      link: '/ai-security-monitor',
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Products', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '10K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS services designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, productivity software, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Cpu className="w-4 h-4" />
              <span>AI-Powered Micro SAAS</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SAAS Services
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Powerful AI-driven micro SAAS tools designed to automate, optimize, and transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Tools</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven tools designed to automate and optimize your business processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  service.popular 
                    ? 'border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-cyan-500/20' 
                    : 'border-white/20 hover:bg-white/20 hover:shadow-purple-500/10'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.pricing}
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className={`block w-full mt-6 text-center py-3 rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg ${
                        service.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 group-hover:shadow-cyan-500/25'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                      }`}
                    >
                      Try Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven micro SAAS solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASServicesPage;
