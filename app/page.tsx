import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Cpu, Wifi, Lock, BarChart3, Users, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $79/month', 'AI Automation Suite - $99/month', 'AI Voice Assistant - $59/month', 'AI Document Processor - $39/month'],
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Cloud className="w-8 h-8 text-emerald-400" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month', 'DevOps & CI/CD - $3,000', 'Blockchain Solutions - $8,000'],
      link: '/it-services',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: 'Micro SAAS Applications',
      description: 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month', 'AI Health Tracker - $18/month', 'AI Smart Calendar - $22/month'],
      link: '/micro-saas-services',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Wifi className="w-8 h-8 text-orange-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions', 'Smart City Infrastructure', 'Industrial IoT Networks'],
      link: '/5g-implementation',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets with AI-powered threat detection and prevention.',
      benefits: ['AI Threat Detection - $2,000/month', 'Security Audit - $1,500', 'Penetration Testing - $2,500', 'Compliance Management - $1,800/month', '24/7 Security Monitoring - $3,000/month'],
      link: '/cybersecurity-solutions',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence.',
      benefits: ['Data Warehousing - $2,000/month', 'Predictive Analytics - $3,500/month', 'Custom Dashboards - $1,500', 'Real-time Analytics - $2,500/month', 'Machine Learning Models - $4,000'],
      link: '/data-analytics',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '75+', label: 'Expert Team Members', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6 text-orange-400" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6 text-blue-400" /> },
    { number: '4.9/5', label: 'Client Rating', icon: <Star className="w-6 h-6 text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, 5G implementation, IT services, digital transformation, enterprise technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 transform"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
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
          <div className={`text-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-white/25"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
                  >
                    Learn About Us
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