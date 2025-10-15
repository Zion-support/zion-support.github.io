import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - Advanced AI and IT Solutions",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo192.png",
      "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    }
  };
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      href: '/ai-services',
      price: 'Starting at $2,500/month',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      href: '/ai-cloud-infrastructure',
      price: 'Starting at $1,200/month',
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', '24/7 Monitoring']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
      href: '/advanced-security-suite',
      price: 'Starting at $3,000/month',
      features: ['Threat Detection', 'Penetration Testing', 'Security Audits', 'Incident Response']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      href: '/services',
      price: 'Starting at $5,000/month',
      features: ['Process Automation', 'Legacy System Migration', 'Workflow Optimization', 'Change Management']
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions for data-driven decisions.',
      href: '/ai-business-intelligence-pro',
      price: 'Starting at $1,800/month',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'KPI Tracking']
    },
    {
      icon: GlobeAltIcon,
      title: '5G Solutions',
      description: 'Next-generation 5G network implementation and optimization services.',
      href: '/5g-solutions',
      price: 'Starting at $4,500/month',
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Optimization', 'IoT Integration']
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Custom Solutions',
    'Scalable Architecture',
    'Security First',
    'Performance Optimized',
    'Cost Effective'
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating neon-border"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        {/* Additional Neon Elements */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-pulse floating" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 animate-pulse floating" style={{animationDelay: '5s'}}></div>
        
        {/* Data Stream Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-data-stream"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-data-stream" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Holographic Title */}
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text animate-hologram-flicker">
                Zion Tech Group
              </h1>
              {/* Glitch Effect Overlay */}
              <div className="absolute inset-0 text-6xl md:text-7xl font-bold text-cyan-400 opacity-0 group-hover:opacity-20 animate-glitch">
                Zion Tech Group
              </div>
            </div>
            
            {/* Animated Subtitle */}
            <div className="mb-8">
              <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                We deliver cutting-edge artificial intelligence and information technology solutions 
                that drive growth, efficiency, and innovation for businesses of all sizes.
              </p>
              <div className="flex items-center justify-center gap-4 text-cyan-400 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>24/7 Support</span>
                </div>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Enterprise Ready</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 neon-button overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:neon-text transition-all duration-300">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:neon-text transition-all duration-300">50+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:neon-text transition-all duration-300">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/70 transition-all duration-500 hover-lift hover-glow glass-dark relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Neon glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating shadow-lg shadow-cyan-500/25">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text group-hover:neon-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all duration-300 glow-effect relative"
                  >
                    Learn More 
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use micro software solutions that solve specific business problems with instant deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Accounting Assistant */}
            <div className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-green-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">AI Accounting Assistant</h3>
                <p className="text-gray-300 mb-4">Automated bookkeeping, expense tracking, and financial reporting powered by AI.</p>
                <div className="mb-4">
                  <span className="text-green-400 font-semibold text-lg">$299/month</span>
                  <span className="text-gray-400 text-sm ml-2">or $2,999/year</span>
                </div>
                <ul className="space-y-1 mb-6">
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>Automated invoice processing</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>Real-time expense categorization</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>Tax preparation assistance</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>Financial forecasting</li>
                </ul>
                <Link to="/ai-accounting-assistant" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Get Started <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI Content Moderation */}
            <div className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-pink-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">AI Content Moderation Pro</h3>
                <p className="text-gray-300 mb-4">Advanced AI-powered content moderation for social media, forums, and user-generated content.</p>
                <div className="mb-4">
                  <span className="text-pink-400 font-semibold text-lg">$199/month</span>
                  <span className="text-gray-400 text-sm ml-2">or $1,999/year</span>
                </div>
                <ul className="space-y-1 mb-6">
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Real-time content scanning</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Multi-language support</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Custom moderation rules</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>Analytics dashboard</li>
                </ul>
                <Link to="/ai-content-moderation-pro" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Get Started <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI Climate Solutions */}
            <div className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-blue-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">AI Climate Solutions Pro</h3>
                <p className="text-gray-300 mb-4">Environmental monitoring and sustainability optimization using AI and IoT sensors.</p>
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-lg">$449/month</span>
                  <span className="text-gray-400 text-sm ml-2">or $4,499/year</span>
                </div>
                <ul className="space-y-1 mb-6">
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Carbon footprint tracking</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Energy optimization</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Environmental reporting</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Compliance monitoring</li>
                </ul>
                <Link to="/ai-climate-solutions-pro" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Get Started <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI Project Management Pro */}
            <div className="group bg-gradient-to-br from-slate-800/90 to-slate-700/90 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/70 transition-all duration-500 hover-lift relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 floating">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">AI Project Management Pro</h3>
                <p className="text-gray-300 mb-4">Advanced AI-powered project management with intelligent automation and predictive analytics.</p>
                <div className="mb-4">
                  <span className="text-purple-400 font-semibold text-lg">$399/month</span>
                  <span className="text-gray-400 text-sm ml-2">or $3,999/year</span>
                </div>
                <ul className="space-y-1 mb-6">
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>AI task automation</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>Predictive analytics</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>Smart team management</li>
                  <li className="text-sm text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>Risk management</li>
                </ul>
                <Link to="/ai-project-management-pro" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Get Started <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team of experts to discuss your project requirements and get a customized quote
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <PhoneIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold text-lg">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm mt-2">24/7 Support Available</p>
            </div>
            
            <div className="text-center p-8 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <EnvelopeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 font-semibold text-lg">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
            </div>
            
            <div className="text-center p-8 bg-slate-800/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <MapPinIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 font-semibold text-lg">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm mt-2">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
