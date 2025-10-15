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
  CogIcon,
  UserGroupIcon,
  ShareIcon
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
      href: '/cybersecurity-solutions',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
      href: '/cloud-infrastructure',
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
      href: '/it-services',
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
    },
    {
      icon: CpuChipIcon,
      title: 'Quantum Computing',
      description: 'Advanced quantum computing solutions for complex problem solving and optimization.',
      href: '/quantum-computing-solutions',
      gradient: 'from-violet-500 to-purple-500',
      glow: 'shadow-violet-500/25'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless cloud migration services for modernizing your infrastructure.',
      href: '/cloud-migration-services',
      gradient: 'from-sky-500 to-blue-500',
      glow: 'shadow-sky-500/25'
    },
    {
      icon: CogIcon,
      title: 'Managed IT Services',
      description: 'Complete IT management and support services for your business.',
      href: '/managed-it-services',
      gradient: 'from-gray-500 to-slate-500',
      glow: 'shadow-gray-500/25'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Audit',
      description: 'Comprehensive security assessment and penetration testing services.',
      href: '/security-audit',
      gradient: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/25'
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
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 floating"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500 floating"></div>
          
          {/* Holographic Overlay */}
          <div className="absolute inset-0 holographic-card opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion Tech Group
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-lg blur opacity-20 animate-pulse delay-1000"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and growth. 
                Trusted by 200+ businesses worldwide with 99.9% uptime guarantee and 24/7 expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/about"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto px-4">
                {stats.map((stat, index) => (
                  <div key={index} 
                    className="text-center p-3 sm:p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 group"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-400 mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors leading-tight">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Link key={index}
                  to={service.href}
                  className="group relative bg-slate-800/50 p-4 sm:p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
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
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">Micro SAAS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality and AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* AI Legal Assistant Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <span className="text-sm text-blue-400 font-medium neon-text">Legal AI</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  AI Legal Assistant Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced AI-powered legal research, document analysis, and case law assistance for law firms and legal professionals.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400 neon-text">$299/mo</span>
                  <span className="text-sm text-gray-400 line-through">$599/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>50% faster legal research</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Contract analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Multi-jurisdiction support</span>
                  </div>
                </div>
                <Link to="/ai-legal-assistant-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Medical Diagnosis Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium neon-text">Medical AI</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  AI Medical Diagnosis Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced AI-powered medical diagnosis assistance, symptom analysis, and treatment recommendations for healthcare professionals.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400 neon-text">$499/mo</span>
                  <span className="text-sm text-gray-400 line-through">$999/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Improved diagnostic accuracy</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Faster diagnosis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Evidence-based medicine</span>
                  </div>
                </div>
                <Link to="/ai-medical-diagnosis-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Real Estate Analyzer Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <span className="text-sm text-orange-400 font-medium neon-text">Real Estate</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  AI Real Estate Analyzer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive AI-powered real estate market analysis, property valuation, and investment opportunity identification.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-400 neon-text">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$399/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Data-driven decisions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Investment scoring</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Market insights</span>
                  </div>
                </div>
                <Link to="/ai-real-estate-analyzer-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Supply Chain Optimizer Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <span className="text-sm text-purple-400 font-medium neon-text">Supply Chain</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  AI Supply Chain Optimizer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced AI-powered supply chain optimization, demand forecasting, and logistics management for businesses.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400 neon-text">$399/mo</span>
                  <span className="text-sm text-gray-400 line-through">$799/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Reduced costs</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Improved efficiency</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Better inventory management</span>
                  </div>
                </div>
                <Link to="/ai-supply-chain-optimizer-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Education Tutor Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <span className="text-sm text-cyan-400 font-medium neon-text">Education</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  AI Education Tutor Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Personalized AI-powered educational platform with adaptive learning, progress tracking, and customized curriculum.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400 neon-text">$99/mo</span>
                  <span className="text-sm text-gray-400 line-through">$199/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Personalized learning</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Adaptive assessments</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Multi-language support</span>
                  </div>
                </div>
                <Link to="/ai-education-tutor-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI 3D Model Generator Pro */}
              <div className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="text-sm text-pink-400 font-medium neon-text">3D AI</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  AI 3D Model Generator Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced AI-powered 3D model generation, text-to-3D conversion, and automated 3D asset creation.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-400 neon-text">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$399/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Text-to-3D generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Faster 3D creation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Consistent quality</span>
                  </div>
                </div>
                <Link to="/ai-3d-model-generator-pro"
                  className="block w-full cyber-button text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-center space-x-3 p-3 sm:p-4 lg:p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business? Contact our experts for a free consultation and discover how our solutions can drive your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-2">Call us anytime</p>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-2">Send us a message</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-2">Visit our office</p>
                <p className="text-purple-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
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
              Let's discuss how our solutions can accelerate your digital transformation and drive growth.
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
              <Link to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>🌐 Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
