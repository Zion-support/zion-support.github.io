'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Brain, Cloud, Code, BarChart3, Users, Shield, Sparkles, Target, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    {
      title: "AI Writing Assistant",
      description: "Transform your writing with AI-powered content generation, SEO optimization, and intelligent editing tools.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $29/month",
      features: ["10,000 words/month", "AI-powered writing", "SEO optimization", "Multiple formats"]
    },
    {
      title: "Smart Analytics",
      description: "Make data-driven decisions with real-time dashboards, predictive analytics, and intelligent insights.",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $49/month",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "API access"]
    },
    {
      title: "AI Scheduler",
      description: "Never miss another meeting with intelligent scheduling, time zone management, and smart coordination.",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $19/month",
      features: ["Smart scheduling", "Team coordination", "Time zone intelligence", "Mobile app"]
    },
    {
      title: "Expense Tracker",
      description: "Take control of your finances with AI-powered categorization, budgeting, and financial insights.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      price: "Starting at $9/month",
      features: ["Smart categorization", "Budget management", "Receipt scanning", "Bank integration"]
    }
  ];

  const microSaasServices = [
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', icon: Brain, color: 'text-purple-400' },
    { name: 'Smart Analytics', url: '/smart-analytics', icon: BarChart3, color: 'text-blue-400' },
    { name: 'AI Scheduler', url: '/ai-scheduler', icon: Clock, color: 'text-green-400' },
    { name: 'Expense Tracker', url: '/expense-tracker', icon: TrendingUp, color: 'text-orange-400' },
    { name: 'Task Manager Pro', url: '/task-manager-pro', icon: CheckCircle, color: 'text-indigo-400' },
    { name: 'AI Design Studio', url: '/ai-design-studio', icon: Sparkles, color: 'text-pink-400' }
  ];

  const stats = [
    { number: '100+', label: 'Micro SAAS Tools', icon: Code },
    { number: '50+', label: 'AI Services', icon: Brain },
    { number: '25+', label: 'IT Solutions', icon: Cloud },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 particle-bg"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-lg font-medium mb-8 animate-pulse-glow">
              <Sparkles className="w-5 h-5 mr-3" />
              Revolutionary AI & IT Solutions
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Transform your business with our comprehensive suite of AI-powered micro SAAS tools, 
              enterprise IT solutions, and cutting-edge technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <Link href="#services" className="cyber-button inline-flex items-center px-10 py-5 text-xl">
                <Zap className="w-6 h-6 mr-3" />
                Explore Services
              </Link>
              <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-10 py-5 text-xl">
                <Phone className="w-6 h-6 mr-3" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Featured Micro SAAS Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular AI-powered tools designed to boost your productivity and efficiency
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all group ${
                currentService === index ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="cyber-button inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Micro SAAS Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microSaasServices.map((service, index) => (
            <Link 
              key={index}
              href={service.url}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/40 transition-all group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-400">AI-powered solution</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven business solutions to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
              <p className="text-gray-300">50+ successful projects with Fortune 500 companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
              <p className="text-gray-300">Latest AI technologies and machine learning algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-16 text-center border border-cyan-500/30">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group for their AI and IT solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-12 py-6 text-xl">
              <Target className="w-6 h-6 mr-3" />
              Get Started Today
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-12 py-6 text-xl">
              <Phone className="w-6 h-6 mr-3" />
              Call (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;