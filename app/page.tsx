'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Phone, Mail, MapPin, Building, TreePine, Home, Scale, Trophy, Gamepad2, Share2, Truck, Factory } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence that learns, adapts, and delivers measurable results for your business.',
      color: 'from-purple-500 to-pink-600',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision'],
      price: 'Starting at $1,500/month',
      marketPrice: '$3,000/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-600',
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization'],
      price: 'Starting at $2,500/month',
      marketPrice: '$5,000/month'
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection and 24/7 monitoring.',
      color: 'from-red-500 to-orange-600',
      benefits: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Audits'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3,600/month'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that reduces manual work by 80% and increases efficiency dramatically.',
      color: 'from-yellow-500 to-green-600',
      benefits: ['Workflow Automation', 'RPA', 'API Integration', 'Smart Scheduling'],
      price: 'Starting at $999/month',
      marketPrice: '$1,999/month'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Real-time Dashboards', 'Predictive Modeling', 'Custom Reports', 'Data Visualization'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2,400/month'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of certified professionals providing 24/7 support and consultation.',
      color: 'from-emerald-500 to-teal-600',
      benefits: ['24/7 Support', 'Certified Experts', 'Proactive Monitoring', 'Training & Documentation'],
      price: 'Starting at $499/month',
      marketPrice: '$999/month'
    }
  ];

  const aiServices = [
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing', icon: Cpu, description: 'Quantum AI processing', price: '$25,000/month', marketPrice: '$50,000/month' },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse-solutions', icon: Globe, description: 'Virtual world AI', price: '$5,000/month', marketPrice: '$10,000/month' },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence', icon: Globe, description: 'Environmental AI', price: '$8,000/month', marketPrice: '$16,000/month' },
    { name: 'AI Space Technology', href: '/ai-space-technology', icon: Rocket, description: 'Space exploration AI', price: '$50,000/month', marketPrice: '$100,000/month' },
    { name: 'AI Brain-Computer Interface', href: '/ai-brain-computer-interface', icon: Brain, description: 'Neural interface AI', price: '$75,000/month', marketPrice: '$150,000/month' },
    { name: 'AI Digital Twin', href: '/ai-digital-twin', icon: Monitor, description: 'Virtual replicas', price: '$15,000/month', marketPrice: '$30,000/month' }
  ];

  const itServices = [
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure', icon: Cpu, description: 'Quantum systems', price: '$50,000/month', marketPrice: '$100,000/month' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions', icon: Server, description: 'Distributed processing', price: '$15,000/month', marketPrice: '$30,000/month' },
    { name: '5G Network Implementation', href: '/5g-network-implementation', icon: Wifi, description: 'Next-gen connectivity', price: '$25,000/month', marketPrice: '$50,000/month' },
    { name: 'AR/VR Development', href: '/ar-vr-development', icon: Monitor, description: 'Immersive experiences', price: '$20,000/month', marketPrice: '$40,000/month' },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure', icon: Link, description: 'Decentralized systems', price: '$30,000/month', marketPrice: '$60,000/month' },
    { name: 'IoT Platform Development', href: '/iot-platform-development', icon: Wifi, description: 'Connected ecosystems', price: '$18,000/month', marketPrice: '$36,000/month' }
  ];

  const microSaasServices = [
    { name: 'Zion AI Voice Assistant', href: '/zion-ai-voice-assistant', icon: Mic, description: 'Voice AI platform', price: '$29/month', marketPrice: '$59/month' },
    { name: 'Zion AI Image Generator', href: '/zion-ai-image-generator', icon: Eye, description: 'AI image creation', price: '$49/month', marketPrice: '$99/month' },
    { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator', icon: Eye, description: 'AI video creation', price: '$79/month', marketPrice: '$159/month' },
    { name: 'Zion AI Music Composer', href: '/zion-ai-music-composer', icon: Mic, description: 'AI music generation', price: '$39/month', marketPrice: '$79/month' },
    { name: 'Zion AI Code Generator', href: '/zion-ai-code-generator', icon: Code, description: 'AI code creation', price: '$59/month', marketPrice: '$119/month' },
    { name: 'Zion AI Website Builder', href: '/zion-ai-website-builder', icon: Globe, description: 'AI web development', price: '$99/month', marketPrice: '$199/month' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Target },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '10+', label: 'Years Experience', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                🚀 Trusted by 500+ Companies Worldwide
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Transform Your Business with 
                <span className="block text-6xl md:text-8xl mt-2">AI & IT Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth for businesses worldwide. Get results in 30 days or less.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>30-Day Results Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>50% Cost Savings</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 text-green-400 mr-1" />
                  <span>99% Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-purple-400 mr-1" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-cyan-400">{feature.price}</span>
                      <span className="text-sm text-gray-400 line-through">{feature.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-semibold">Save 50% vs Market Rate</div>
                  </div>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-purple-400">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary AI solutions that transform businesses with cutting-edge technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-purple-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <a 
                    href={service.href} 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-blue-400">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT infrastructure solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <a 
                    href={service.href} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-green-400">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use AI-powered business tools with instant deployment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <a 
                    href={service.href} 
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
                  >
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee • ✓ 50% cost savings</p>
            </div>
            <div className="mt-8 text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;