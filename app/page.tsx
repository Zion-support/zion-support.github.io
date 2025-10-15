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
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="cyber-grid"></div>
        
        {/* Matrix Rain Effect */}
        <div className="matrix-rain"></div>
        
        {/* Particle System */}
        <div className="particles">
          <div className="particle" style={{left: '5%', animationDelay: '0s'}}></div>
          <div className="particle" style={{left: '15%', animationDelay: '1s'}}></div>
          <div className="particle" style={{left: '25%', animationDelay: '2s'}}></div>
          <div className="particle" style={{left: '35%', animationDelay: '3s'}}></div>
          <div className="particle" style={{left: '45%', animationDelay: '4s'}}></div>
          <div className="particle" style={{left: '55%', animationDelay: '5s'}}></div>
          <div className="particle" style={{left: '65%', animationDelay: '6s'}}></div>
          <div className="particle" style={{left: '75%', animationDelay: '7s'}}></div>
          <div className="particle" style={{left: '85%', animationDelay: '8s'}}></div>
          <div className="particle" style={{left: '95%', animationDelay: '9s'}}></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Holographic Overlay */}
          <div className="holographic-overlay"></div>
          
          {/* Data Stream Effect */}
          <div className="data-stream"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Energy Field */}
          <div className="energy-field"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gradient-holographic leading-tight animate-pulse glitch" data-text="Zion Tech Group">
                  Zion Tech Group
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
                <div className="cyber-scan"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 text-typing">
                Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact"
                  className="btn-holographic px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/about"
                  className="btn-cyber px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105"
                >
                  Learn More
                </Link>
                <Link to="/pricing"
                  className="btn-futuristic px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
                {stats.map((stat, index) => (
                  <div key={index} 
                    className="text-center p-4 glass-card hover:scale-105 transition-all duration-300 group neon-border"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neon-purple mb-1 lg:mb-2 group-hover:text-purple-300 transition-colors neon-glow">
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
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          {/* Cyber Circuit Pattern */}
          <div className="cyber-circuit"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-gradient-cyber">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Link key={index}
                  to={service.href}
                  className="group relative glass-card-cyber p-6 sm:p-8 hover:scale-105 transition-all duration-300 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg neon-glow`}>
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
          {/* Cyber Grid Background */}
          <div className="cyber-grid"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Featured <span className="text-gradient-holographic">Micro SAAS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality and cutting-edge AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* AI Content Generator */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">AI Content</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  AI Content Generator Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Generate high-quality content for blogs, social media, and marketing materials using advanced AI with 99.9% accuracy.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$299/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Unlimited content generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>SEO optimization & keyword research</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Multi-language support (50+ languages)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Plagiarism detection & originality</span>
                  </div>
                </div>
                <Link to="/ai-content-generator"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* Analytics Dashboard */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-purple-400 font-medium">Analytics</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  Business Analytics Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive business intelligence and analytics platform with real-time insights, predictive analytics, and custom reporting.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">$349/mo</span>
                  <span className="text-sm text-gray-400 line-through">$499/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Real-time dashboards & KPIs</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI-powered predictive analytics</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Custom reports & data visualization</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>API integration & webhooks</span>
                  </div>
                </div>
                <Link to="/analytics-dashboard"
                  className="block w-full btn-holographic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* Task Manager */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-green-400 font-medium">Productivity</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  Task Manager Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced task management with AI-powered prioritization, team collaboration, and intelligent scheduling features.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400">$29/mo</span>
                  <span className="text-sm text-gray-400 line-through">$49/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI task prioritization & scheduling</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Team collaboration & project management</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Time tracking & productivity analytics</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Mobile app & desktop sync</span>
                  </div>
                </div>
                <Link to="/task-manager"
                  className="block w-full btn-futuristic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* AI Code Assistant */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <CogIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-orange-400 font-medium">Development</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  AI Code Assistant Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Intelligent code generation, debugging, and optimization with support for 50+ programming languages and frameworks.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-400">$99/mo</span>
                  <span className="text-sm text-gray-400 line-through">$149/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI code generation & completion</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Bug detection & fixing suggestions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Code optimization & refactoring</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Documentation generation</span>
                  </div>
                </div>
                <Link to="/ai-code-assistant"
                  className="block w-full btn-pulse text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* AI Video Generator */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-pink-400 font-medium">Media</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  AI Video Generator Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Create professional videos from text prompts with AI-powered voice synthesis, animations, and effects.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-400">$149/mo</span>
                  <span className="text-sm text-gray-400 line-through">$199/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Text-to-video generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI voice synthesis (100+ voices)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Professional templates & effects</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>4K export & social media formats</span>
                  </div>
                </div>
                <Link to="/ai-video-generator"
                  className="block w-full btn-glow text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* AI Legal Assistant */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-indigo-400 font-medium">Legal</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  AI Legal Assistant Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive legal document analysis, contract review, and compliance checking with AI-powered insights.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-400">$299/mo</span>
                  <span className="text-sm text-gray-400 line-through">$399/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Contract analysis & review</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Legal document generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Compliance monitoring & alerts</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Case law research & analysis</span>
                  </div>
                </div>
                <Link to="/ai-legal-assistant"
                  className="block w-full btn-futuristic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* AI Medical Assistant */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-teal-400 font-medium">Healthcare</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  AI Medical Assistant Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced medical diagnosis support, patient data analysis, and treatment recommendations with AI-powered insights.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-teal-400">$499/mo</span>
                  <span className="text-sm text-gray-400 line-through">$699/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Symptom analysis & diagnosis support</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Medical image analysis (X-ray, MRI, CT)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Treatment recommendation engine</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>HIPAA compliant & secure</span>
                  </div>
                </div>
                <Link to="/ai-medical-assistant"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>

              {/* AI Supply Chain Optimizer */}
              <div className="group glass-card-cyber p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <CogIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-yellow-400 font-medium">Logistics</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Supply Chain Optimizer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-400">$399/mo</span>
                  <span className="text-sm text-gray-400 line-through">$599/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Demand forecasting & planning</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Inventory optimization algorithms</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Route optimization & logistics</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Risk assessment & mitigation</span>
                  </div>
                </div>
                <Link to="/ai-supply-chain-optimizer"
                  className="block w-full btn-holographic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial (14 days)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Micro SAAS Services */}
        <section className="py-16 sm:py-20 bg-slate-900/50 relative overflow-hidden">
          {/* Holographic Overlay */}
          <div className="holographic-overlay"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                More <span className="text-gradient-cyber">AI-Powered Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Explore our comprehensive suite of AI-powered micro SAAS applications designed for specific industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* AI Email Optimizer */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium">Marketing</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  AI Email Optimizer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Optimize email campaigns with AI-powered subject line generation, content optimization, and send time optimization.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">$79/mo</span>
                  <span className="text-sm text-gray-400 line-through">$119/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI subject line optimization</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Content personalization engine</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Send time optimization</span>
                  </div>
                </div>
                <Link to="/ai-email-optimizer"
                  className="block w-full btn-futuristic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Social Media Manager */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <ShareIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-pink-400 font-medium">Social Media</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  AI Social Media Manager Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Automate social media management with AI-powered content creation, scheduling, and engagement optimization.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pink-400">$129/mo</span>
                  <span className="text-sm text-gray-400 line-through">$179/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI content generation for all platforms</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Optimal posting time analysis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Hashtag optimization & trending topics</span>
                  </div>
                </div>
                <Link to="/ai-social-media-manager"
                  className="block w-full btn-pulse text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Website Analyzer */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-green-400 font-medium">SEO & Analytics</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                  AI Website Analyzer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive website analysis with AI-powered SEO recommendations, performance optimization, and competitor insights.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400">$89/mo</span>
                  <span className="text-sm text-gray-400 line-through">$129/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI-powered SEO analysis & recommendations</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Performance optimization suggestions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Competitor analysis & benchmarking</span>
                  </div>
                </div>
                <Link to="/ai-website-analyzer"
                  className="block w-full btn-glow text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI 3D Model Generator */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-purple-400 font-medium">3D & Design</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  AI 3D Model Generator Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Generate high-quality 3D models from text descriptions with AI-powered modeling, texturing, and animation tools.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-400">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$299/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Text-to-3D model generation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI-powered texturing & materials</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Animation & rigging automation</span>
                  </div>
                </div>
                <Link to="/ai-3d-model-generator"
                  className="block w-full btn-holographic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Audio Processor */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-orange-400 font-medium">Audio</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                  AI Audio Processor Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced audio processing with AI-powered noise reduction, enhancement, and real-time audio manipulation tools.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-400">$149/mo</span>
                  <span className="text-sm text-gray-400 line-through">$199/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI noise reduction & enhancement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Real-time audio processing</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Voice cloning & synthesis</span>
                  </div>
                </div>
                <Link to="/ai-audio-processor"
                  className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Education Tutor */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-indigo-400 font-medium">Education</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  AI Education Tutor Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Personalized AI tutoring system with adaptive learning, progress tracking, and interactive educational content.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-400">$79/mo</span>
                  <span className="text-sm text-gray-400 line-through">$119/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Personalized learning paths</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Adaptive difficulty adjustment</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Progress tracking & analytics</span>
                  </div>
                </div>
                <Link to="/ai-education-tutor"
                  className="block w-full btn-futuristic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Real Estate Analyzer */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <ChartBarIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-emerald-400 font-medium">Real Estate</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  AI Real Estate Analyzer Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Comprehensive real estate market analysis with AI-powered property valuation, investment insights, and market trends.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-400">$199/mo</span>
                  <span className="text-sm text-gray-400 line-through">$299/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>AI property valuation & pricing</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Market trend analysis & forecasting</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Investment opportunity scoring</span>
                  </div>
                </div>
                <Link to="/ai-real-estate-analyzer"
                  className="block w-full btn-pulse text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>

              {/* AI Translator */}
              <div className="group glass-card-holographic p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">Translation</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  AI Translator Pro
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Advanced AI translation service supporting 100+ languages with context-aware translation and real-time processing.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">$49/mo</span>
                  <span className="text-sm text-gray-400 line-through">$79/mo</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>100+ language support</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Context-aware translation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    <span>Real-time voice translation</span>
                  </div>
                </div>
                <Link to="/ai-translator"
                  className="block w-full btn-glow text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Try Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          {/* Energy Field Background */}
          <div className="energy-field"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="text-gradient-holographic">Zion Tech Group</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-center space-x-4 p-4 sm:p-6 glass-card hover:scale-105 transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform neon-glow-subtle" />
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
          {/* Advanced Background Effects */}
          <div className="cyber-grid"></div>
          <div className="particles">
            <div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
            <div className="particle" style={{left: '20%', animationDelay: '2s'}}></div>
            <div className="particle" style={{left: '30%', animationDelay: '4s'}}></div>
            <div className="particle" style={{left: '40%', animationDelay: '6s'}}></div>
            <div className="particle" style={{left: '50%', animationDelay: '8s'}}></div>
            <div className="particle" style={{left: '60%', animationDelay: '10s'}}></div>
            <div className="particle" style={{left: '70%', animationDelay: '12s'}}></div>
            <div className="particle" style={{left: '80%', animationDelay: '14s'}}></div>
            <div className="particle" style={{left: '90%', animationDelay: '16s'}}></div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-holographic">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our AI-powered solutions can accelerate your digital transformation and drive unprecedented growth.
            </p>
            
            {/* Contact Information */}
            <div className="mb-8 p-6 glass-card-cyber max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+13024640950" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Website</p>
                  <a href="https://ziontechgroup.com" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cyan-500/30">
                <p className="text-sm text-gray-400">
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group btn-holographic px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Today
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/demo"
                className="btn-cyber px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105"
              >
                Schedule Demo
              </Link>
              <Link to="/pricing"
                className="btn-futuristic px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
