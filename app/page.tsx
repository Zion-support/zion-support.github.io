'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business.',
      href: '/ai-solutions',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      href: '/cybersecurity',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      href: '/cloud-solutions',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your operations.',
      href: '/digital-transformation',
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25'
    },
    {
      icon: GlobeAltIcon,
      title: 'Micro SaaS Solutions',
      description: 'Innovative micro software solutions designed to solve specific business challenges.',
      href: '/micro-saas-solutions',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      icon: CogIcon,
      title: 'IT Solutions',
      description: 'Comprehensive technology services including development, infrastructure, and support.',
      href: '/it-solutions',
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      href: '/data-analytics',
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/25'
    },
    {
      icon: BoltIcon,
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for ultra-fast connectivity and IoT applications.',
      href: '/5g-solutions',
      gradient: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/25'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation',
    'AI-Powered Solutions',
    'Real-time Analytics',
    'Enterprise Security',
    'Cloud-Native Architecture',
    'Mobile-First Design',
    'API-First Approach'
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'AI Models Deployed' },
    { number: '10M+', label: 'API Calls Processed' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, artificial intelligence"
      />
      
      <div className="min-h-screen bg-slate-900 text-white cyber-grid">
        {/* Matrix Rain Effect */}
        <div className="matrix-rain"></div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center scan-line">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Enhanced Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-300"></div>
          
          {/* Data Stream Effects */}
          <div className="absolute top-0 left-0 w-full h-full data-stream"></div>
          <div className="absolute top-1/3 left-0 w-full h-full data-stream" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 left-0 w-full h-full data-stream" style={{animationDelay: '2s'}}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic-text leading-tight glitch">
                  Zion Tech Group
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 animate-pulse delay-500"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 digital-pulse">
                Leading provider of <span className="text-cyan-400 font-semibold">AI-powered solutions</span>, <span className="text-purple-400 font-semibold">cybersecurity</span>, <span className="text-pink-400 font-semibold">cloud infrastructure</span>, and <span className="text-green-400 font-semibold">digital transformation</span> services that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact"
                  className="btn-cyber group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/about"
                  className="neon-border-animated text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400/10 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                {stats.map((stat, index) => (
                  <div key={index} 
                    className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Link key={index}
                  to={service.href}
                  className="group cyber-card p-6 sm:p-8 hover:transform hover:scale-105 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors holographic-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Showcase Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* AI Code Assistant */}
              <div className="group cyber-card p-6 hover:scale-105 neon-border-animated">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <CogIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium holographic-text">Development</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors holographic-text">
                  AI Code Assistant
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Generate, analyze, and optimize code with AI-powered development assistance.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-blue-400">$79/mo</span>
                  <span className="text-sm text-gray-400 line-through">$129/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Code generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Bug detection</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Auto documentation</span>
                  </div>
                </div>
                <Link to="/ai-code-assistant"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Translator */}
              <div className="group cyber-card p-6 hover:scale-105 neon-border-animated">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-green-400 font-medium holographic-text">Translation</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors holographic-text">
                  AI Translator
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Break language barriers with 100+ language support and real-time translation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-400">$19/mo</span>
                  <span className="text-sm text-gray-400 line-through">$39/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>100+ languages</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Real-time translation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Voice & image support</span>
                  </div>
                </div>
                <Link to="/ai-translator"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Video Generator */}
              <div className="group cyber-card p-6 hover:scale-105 neon-border-animated">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-purple-400 font-medium holographic-text">Video</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors holographic-text">
                  AI Video Generator
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Create professional videos from text prompts with AI-powered generation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-purple-400">$79/mo</span>
                  <span className="text-sm text-gray-400 line-through">$149/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Text-to-video</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>4K quality</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Voice synthesis</span>
                  </div>
                </div>
                <Link to="/ai-video-generator"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Legal Assistant */}
              <div className="group cyber-card p-6 hover:scale-105 neon-border-animated">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-amber-400 font-medium holographic-text">Legal</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors holographic-text">
                  AI Legal Assistant
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Contract analysis, legal research, and compliance monitoring with AI.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-amber-400">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$299/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Contract analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Legal research</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 neon-glow" />
                    <span>Compliance monitoring</span>
                  </div>
                </div>
                <Link to="/ai-legal-assistant"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/micro-saas-solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                View All Micro SaaS Solutions
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-center space-x-4 p-4 sm:p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our solutions can accelerate your digital transformation and drive growth.";
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
