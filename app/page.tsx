import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $79/month', 'AI Automation Suite - $99/month'],
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Micro SAAS Applications',
      description: 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, 5G implementation, IT services, digital transformation, enterprise technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            {/* Animated Title */}
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Advanced AI & IT Solutions
                </span>
                {/* Neon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 relative">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/contact" 
                className="group relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center relative">
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Core Services
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-blue-400 hover:text-cyan-300 font-semibold transition-all duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 group-hover:text-white transition-colors duration-300">
                  Let's discuss how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group/btn relative bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/about" 
                    className="group/btn relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Learn About Us</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;