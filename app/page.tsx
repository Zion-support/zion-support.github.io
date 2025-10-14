'use client';
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
  BoltIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  SignalIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  SparklesIcon
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

  const microSaasServices = [
    {
      icon: CpuChipIcon,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and SEO optimization.',
      price: '$29/month',
      features: ['50+ Content Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Checker'],
      href: '/ai-content-generator',
      category: 'AI Services',
      popular: true
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and reporting dashboard with custom KPIs, automated insights, and data visualization.',
      price: '$49/month',
      features: ['Real-time Analytics', 'Custom KPIs', 'Automated Reports', 'Data Visualization', 'API Integration'],
      href: '/business-intelligence-dashboard',
      category: 'Analytics',
      popular: false
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Monitor Pro',
      description: '24/7 threat detection and response system with automated security scanning and compliance reporting.',
      price: '$99/month',
      features: ['24/7 Monitoring', 'Threat Detection', 'Automated Response', 'Compliance Reports', 'Security Training'],
      href: '/cybersecurity-monitor-pro',
      category: 'Security',
      popular: true
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure Manager',
      description: 'Complete cloud resource management with cost optimization, auto-scaling, and performance monitoring.',
      price: '$79/month',
      features: ['Resource Management', 'Cost Optimization', 'Auto-scaling', 'Performance Monitoring', 'Multi-cloud Support'],
      href: '/cloud-infrastructure-manager',
      category: 'Cloud Services',
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Support Automation',
      description: 'AI-powered customer support with chatbots, ticket management, and sentiment analysis.',
      price: '$39/month',
      features: ['AI Chatbots', 'Ticket Management', 'Sentiment Analysis', 'Multi-channel Support', 'Analytics Dashboard'],
      href: '/customer-support-automation',
      category: 'Customer Service',
      popular: true
    },
    {
      icon: CogIcon,
      title: 'API Management Suite',
      description: 'Complete API lifecycle management with rate limiting, analytics, and developer portal.',
      price: '$59/month',
      features: ['API Gateway', 'Rate Limiting', 'Analytics', 'Developer Portal', 'Documentation Generator'],
      href: '/api-management-suite',
      category: 'Development',
      popular: false
    }
  ];

  const aiServices = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Data Analytics',
      description: 'Advanced machine learning algorithms for predictive analytics and business intelligence.',
      price: 'Starting at $2,500/month',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Processing', 'Custom Dashboards'],
      href: '/ai-data-analytics'
    },
    {
      icon: SparklesIcon,
      title: 'AI Content Creation Studio',
      description: 'Comprehensive AI content generation platform with video, text, and image creation capabilities.',
      price: 'Starting at $1,800/month',
      features: ['Multi-format Content', 'Brand Consistency', 'SEO Optimization', 'Content Scheduling'],
      href: '/ai-content-studio'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Cybersecurity Suite',
      description: 'Next-generation AI-powered security solutions with behavioral analysis and threat prediction.',
      price: 'Starting at $3,200/month',
      features: ['Behavioral Analysis', 'Threat Prediction', 'Automated Response', 'Compliance Monitoring'],
      href: '/ai-cybersecurity-suite'
    }
  ];

  const itServices = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation services with zero-downtime migration and ongoing management.',
      price: 'Starting at $5,000/project',
      features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Hardening', '24/7 Support'],
      href: '/cloud-migration'
    },
    {
      icon: GlobeAltIcon,
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation planning and implementation for modern businesses.',
      price: 'Starting at $3,500/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Implementation Support', 'Change Management'],
      href: '/digital-transformation'
    },
    {
      icon: SignalIcon,
      title: '5G Network Implementation',
      description: 'Complete 5G network design, deployment, and optimization for enterprise environments.',
      price: 'Starting at $15,000/project',
      features: ['Network Design', 'Hardware Installation', 'Performance Optimization', 'Training & Support'],
      href: '/5g-implementation'
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

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Micro SAAS Products' },
    { number: '24/7', label: 'Support Available' }
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
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold"> AI & IT Solutions</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS products designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <div className="mb-6">
                  <span className="inline-block bg-slate-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to modernize and secure your business infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovative technology and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how our technology solutions can drive your business forward
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
          <div className="mt-8 text-gray-400">
            <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
}