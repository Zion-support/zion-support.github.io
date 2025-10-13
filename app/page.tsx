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
  GlobeAltIcon,
  SignalIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const microSaasServices = [
    {
      icon: CpuChipIcon,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and brand voice customization.',
      price: '$29/month',
      features: ['50+ Content Templates', 'Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'API Access'],
      href: '/ai-content-generator-pro'
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and reporting platform with custom dashboards, automated insights, and data visualization.',
      price: '$49/month',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Integration', 'Mobile App'],
      href: '/business-intelligence-dashboard'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Monitor Suite',
      description: 'Comprehensive security monitoring platform with threat detection, compliance reporting, and incident response.',
      price: '$79/month',
      features: ['Threat Detection', 'Compliance Reports', 'Incident Response', 'Security Audits', '24/7 Monitoring'],
      href: '/cybersecurity-monitor-suite'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure Manager',
      description: 'Multi-cloud infrastructure management platform with cost optimization, performance monitoring, and automated scaling.',
      price: '$99/month',
      features: ['Multi-cloud Support', 'Cost Optimization', 'Auto-scaling', 'Performance Monitoring', 'Security Management'],
      href: '/cloud-infrastructure-manager'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Analytics Platform',
      description: 'Advanced customer behavior analytics with predictive modeling, segmentation, and personalized recommendations.',
      price: '$39/month',
      features: ['Behavior Analytics', 'Predictive Modeling', 'Customer Segmentation', 'Personalization', 'A/B Testing'],
      href: '/customer-analytics-platform'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document AI Processor',
      description: 'Intelligent document processing with OCR, data extraction, classification, and automated workflows.',
      price: '$59/month',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'API Integration'],
      href: '/document-ai-processor'
    }
  ];

  const aiServices = [
    {
      icon: CpuChipIcon,
      title: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI platform with natural language processing, multi-channel support, and custom training.',
      price: 'From $199/month',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard', 'API Access'],
      href: '/ai-chatbot-enterprise'
    },
    {
      icon: ChartBarIcon,
      title: 'AI Analytics Dashboard Pro',
      description: 'Comprehensive AI-powered analytics platform with predictive insights, automated reporting, and real-time monitoring.',
      price: 'From $299/month',
      features: ['Predictive Analytics', 'Automated Reports', 'Real-time Monitoring', 'Custom Models', 'Data Integration'],
      href: '/ai-analytics-dashboard-pro'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Cybersecurity Suite Pro',
      description: 'Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response.',
      price: 'From $399/month',
      features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring', 'Incident Management'],
      href: '/ai-cybersecurity-suite-pro'
    },
    {
      icon: CloudIcon,
      title: 'AI Cloud Automation',
      description: 'Intelligent cloud management platform with AI-driven optimization, cost management, and performance tuning.',
      price: 'From $249/month',
      features: ['AI Optimization', 'Cost Management', 'Performance Tuning', 'Auto-scaling', 'Multi-cloud Support'],
      href: '/ai-cloud-automation'
    }
  ];

  const itServices = [
    {
      icon: CogIcon,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management with monitoring, maintenance, and optimization services.',
      price: 'From $1,500/month',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Security Management', 'Disaster Recovery'],
      href: '/it-infrastructure-management'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration Services',
      description: 'Expert cloud migration services with zero-downtime migration, data security, and cost optimization.',
      price: 'From $5,000/project',
      features: ['Zero-downtime Migration', 'Data Security', 'Cost Optimization', 'Performance Tuning', 'Training & Support'],
      href: '/cloud-migration-services'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive cybersecurity consulting with risk assessment, security audits, and compliance management.',
      price: 'From $2,500/month',
      features: ['Risk Assessment', 'Security Audits', 'Compliance Management', 'Incident Response', 'Security Training'],
      href: '/cybersecurity-consulting'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services with strategy development, implementation, and change management.',
      price: 'From $10,000/project',
      features: ['Strategy Development', 'Implementation', 'Change Management', 'Training', 'Ongoing Support'],
      href: '/digital-transformation'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Micro SaaS | Cybersecurity</title>
        <meta name="description" content="Leading provider of AI-powered solutions, micro SaaS platforms, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, micro SaaS, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group, business intelligence, customer analytics" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, micro SaaS platforms, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, micro SaaS platforms, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section with Futuristic Design */}
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Elements with Neon Effects */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
                Advanced AI & IT Solutions for Modern Businesses
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
                Empowering businesses with cutting-edge artificial intelligence, micro SaaS platforms, 
                cybersecurity solutions, cloud infrastructure, and digital transformation services to drive innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2 glow-effect"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services" 
                  className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 glass"
                >
                  Explore Services
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Powerful, ready-to-use micro SaaS platforms designed to solve specific business challenges with scalable, cost-effective solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Advanced artificial intelligence services powered by cutting-edge machine learning and deep learning technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/80 to-purple-800/80 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive IT services and solutions to modernize your infrastructure and accelerate digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-green-400 mb-2">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We deliver exceptional results through innovative technology, expert guidance, and proven methodologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors group">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can accelerate your growth and innovation.
              </p>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPinIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Middletown, DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;