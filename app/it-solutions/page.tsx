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
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  NetworkIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure solutions with automated scaling, monitoring, and optimization for AWS, Azure, and GCP.',
      price: '$2,999/month',
      features: [
        'Multi-cloud architecture design',
        'Automated scaling and load balancing',
        '24/7 infrastructure monitoring',
        'Disaster recovery planning',
        'Cost optimization strategies',
        'Security compliance management',
        'Performance optimization',
        'Backup and data protection',
        'Migration services',
        'Dedicated cloud architect'
      ],
      category: 'Cloud Services',
      icon: CloudIcon,
      gradient: 'from-cyan-500 to-blue-500',
      popular: true,
      trialDays: 14,
      setupFee: '$1,999',
      useCases: ['Digital Transformation', 'Scalability', 'Cost Reduction', 'Disaster Recovery']
    },
    {
      id: 2,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, VPN solutions, and threat monitoring.',
      price: '$3,499/month',
      features: [
        'Next-generation firewall management',
        'Intrusion detection and prevention',
        'VPN and remote access solutions',
        'Network segmentation',
        'Threat intelligence integration',
        'Security policy management',
        'Vulnerability assessments',
        'Incident response planning',
        'Compliance reporting',
        '24/7 security monitoring'
      ],
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      gradient: 'from-green-500 to-emerald-500',
      popular: true,
      trialDays: 7,
      setupFee: '$2,499',
      useCases: ['Threat Protection', 'Compliance', 'Remote Work', 'Data Security']
    },
    {
      id: 3,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive maintenance.',
      price: '$1,499/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware and software support',
        'User account management',
        'Software license management',
        'Proactive system monitoring',
        'IT asset management',
        'Training and documentation',
        'Mobile device management',
        'Service level agreements'
      ],
      category: 'Support',
      icon: UserGroupIcon,
      gradient: 'from-purple-500 to-pink-500',
      popular: false,
      trialDays: 30,
      setupFee: '$999',
      useCases: ['Technical Support', 'User Management', 'System Maintenance', 'Training']
    },
    {
      id: 4,
      title: 'Data Center Solutions',
      description: 'Complete data center services including colocation, managed hosting, backup solutions, and disaster recovery.',
      price: '$4,999/month',
      features: [
        'Colocation services',
        'Managed hosting solutions',
        'Backup and disaster recovery',
        'Power and cooling management',
        'Physical security monitoring',
        'Network connectivity options',
        'Compliance certifications',
        'Scalable infrastructure',
        'Migration services',
        'Dedicated support team'
      ],
      category: 'Data Center',
      icon: ServerIcon,
      gradient: 'from-yellow-500 to-orange-500',
      popular: false,
      trialDays: 14,
      setupFee: '$3,999',
      useCases: ['Data Storage', 'Business Continuity', 'Compliance', 'Scalability']
    },
    {
      id: 5,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to align technology with business goals and optimize IT investments.',
      price: '$2,499/month',
      features: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'IT budget optimization',
        'Vendor management',
        'Technology assessments',
        'Change management',
        'Process optimization',
        'Executive reporting',
        'Quarterly business reviews'
      ],
      category: 'Consulting',
      icon: ChartBarIcon,
      gradient: 'from-indigo-500 to-purple-500',
      popular: true,
      trialDays: 21,
      setupFee: '$1,999',
      useCases: ['Strategic Planning', 'Digital Transformation', 'Cost Optimization', 'Technology Alignment']
    },
    {
      id: 6,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems with custom APIs, middleware solutions, and data synchronization.',
      price: '$3,999/month',
      features: [
        'Custom API development',
        'Legacy system integration',
        'Data synchronization solutions',
        'Middleware implementation',
        'Real-time data processing',
        'System monitoring and alerts',
        'Performance optimization',
        'Documentation and training',
        'Ongoing maintenance',
        'Scalability planning'
      ],
      category: 'Integration',
      icon: CogIcon,
      gradient: 'from-pink-500 to-rose-500',
      popular: false,
      trialDays: 14,
      setupFee: '$2,999',
      useCases: ['System Connectivity', 'Data Flow', 'Process Automation', 'Legacy Modernization']
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Cybersecurity',
    'Support',
    'Data Center',
    'Consulting',
    'Integration'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '100+', label: 'IT Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '75+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'IT Support' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses. From cloud infrastructure to cybersecurity, we provide enterprise-grade IT services that drive efficiency and growth." />
        <meta name="keywords" content="IT solutions, cloud services, cybersecurity, IT support, data center, system integration, IT consulting" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade IT solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <CogIcon className="w-20 h-20 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                IT Solutions
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Technology</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions for modern businesses. From cloud infrastructure to cybersecurity, 
              we provide enterprise-grade IT services that drive efficiency, security, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get IT Support
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View IT Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
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
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: {service.setupFee} • {service.trialDays}-day free trial
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-sm text-purple-400">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center transform hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="border border-slate-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-center"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Solutions */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Our IT solutions are built with enterprise-grade reliability, security, and scalability. 
                We combine cutting-edge technology with deep industry expertise to deliver results that matter.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-300">Bank-level security with comprehensive compliance and threat protection.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <RocketLaunchIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
                  <p className="text-gray-300">Cloud-native solutions that grow with your business needs and requirements.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300">Certified IT professionals and 24/7 support to ensure your success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your business goals. 
              Our team of experts is ready to guide you through your IT transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your IT Journey
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;