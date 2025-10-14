'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon, 
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IT Solutions - Zion Tech Group",
    "description": "Comprehensive IT solutions for businesses. Cloud infrastructure, cybersecurity, network management, and digital transformation services.",
    "url": "https://ziontechgroup.com/it-solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Solutions',
      description: 'Complete cloud infrastructure setup, migration, and management with AWS, Azure, and Google Cloud Platform expertise.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Load Balancing',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic setup', 'Email support', 'Standard monitoring'] },
        professional: { price: 799, period: 'month', features: ['Advanced setup', 'Priority support', 'Custom monitoring', 'Migration assistance'] },
        enterprise: { price: 1999, period: 'month', features: ['Full management', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: CloudIcon,
      category: 'Cloud Computing',
      marketPrice: '$299-1999/month',
      link: '/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and security monitoring.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Risk Assessment'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Standard reports'] },
        professional: { price: 599, period: 'month', features: ['Advanced monitoring', 'Real-time alerts', 'Custom reports', 'Incident response'] },
        enterprise: { price: 1299, period: 'month', features: ['Full security suite', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      marketPrice: '$199-1299/month',
      link: '/cybersecurity-suite'
    },
    {
      id: 'network-management',
      title: 'Network Management Solutions',
      description: 'Complete network infrastructure design, implementation, and management with advanced monitoring and optimization.',
      features: [
        'Network Design',
        'Implementation',
        'Performance Monitoring',
        'Traffic Analysis',
        'Bandwidth Management',
        'Network Security',
        'Remote Management',
        'Troubleshooting'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Basic monitoring', 'Email support', 'Standard reports'] },
        professional: { price: 399, period: 'month', features: ['Advanced monitoring', 'Priority support', 'Custom reports', 'Remote management'] },
        enterprise: { price: 899, period: 'month', features: ['Full management', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: GlobeAltIcon,
      category: 'Network Management',
      marketPrice: '$149-899/month',
      link: '/network-management'
    },
    {
      id: 'data-center-solutions',
      title: 'Data Center Solutions',
      description: 'Complete data center design, implementation, and management with high availability and disaster recovery capabilities.',
      features: [
        'Data Center Design',
        'Hardware Procurement',
        'Installation & Setup',
        'Power Management',
        'Cooling Systems',
        'Security Systems',
        'Backup Solutions',
        'Disaster Recovery'
      ],
      pricing: {
        starter: { price: 499, period: 'month', features: ['Basic setup', 'Email support', 'Standard monitoring'] },
        professional: { price: 1299, period: 'month', features: ['Advanced setup', 'Priority support', 'Custom monitoring', 'Migration assistance'] },
        enterprise: { price: 2999, period: 'month', features: ['Full management', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: ServerIcon,
      category: 'Data Center',
      marketPrice: '$499-2999/month',
      link: '/data-center-solutions'
    },
    {
      id: 'it-support-services',
      title: 'IT Support Services',
      description: 'Comprehensive IT support and helpdesk services with 24/7 monitoring and rapid response times.',
      features: [
        '24/7 Helpdesk',
        'Remote Support',
        'On-site Support',
        'Hardware Maintenance',
        'Software Support',
        'User Training',
        'System Updates',
        'Performance Optimization'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['Email support', 'Basic troubleshooting', 'Standard response'] },
        professional: { price: 299, period: 'month', features: ['Phone support', 'Advanced troubleshooting', 'Priority response', 'Remote support'] },
        enterprise: { price: 699, period: 'month', features: ['24/7 support', 'Dedicated support', 'On-site support', 'Custom SLA'] }
      },
      icon: WrenchScrewdriverIcon,
      category: 'IT Support',
      marketPrice: '$99-699/month',
      link: '/it-support-services'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Services',
      description: 'Complete digital transformation solutions to modernize your business processes and technology infrastructure.',
      features: [
        'Process Analysis',
        'Technology Assessment',
        'Digital Strategy',
        'System Integration',
        'Change Management',
        'Training Programs',
        'Performance Monitoring',
        'Continuous Improvement'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic assessment', 'Email support', 'Standard implementation'] },
        professional: { price: 999, period: 'month', features: ['Advanced assessment', 'Priority support', 'Custom implementation', 'Training programs'] },
        enterprise: { price: 2499, period: 'month', features: ['Full transformation', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: RocketLaunchIcon,
      category: 'Digital Transformation',
      marketPrice: '$399-2499/month',
      link: '/digital-transformation'
    },
    {
      id: 'backup-disaster-recovery',
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data and ensure business continuity.',
      features: [
        'Automated Backups',
        'Disaster Recovery',
        'Data Replication',
        'Recovery Testing',
        'Compliance Management',
        'RTO/RPO Optimization',
        'Cloud Backup',
        'Recovery Planning'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Basic backup', 'Email support', 'Standard recovery'] },
        professional: { price: 399, period: 'month', features: ['Advanced backup', 'Priority support', 'Fast recovery', 'Testing services'] },
        enterprise: { price: 899, period: 'month', features: ['Full DR solution', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      icon: ShieldCheckIcon,
      category: 'Backup & Recovery',
      marketPrice: '$149-899/month',
      link: '/backup-disaster-recovery'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting Services',
      description: 'Strategic IT consulting services to help you make informed technology decisions and optimize your IT infrastructure.',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Vendor Evaluation',
        'Cost Optimization',
        'Risk Assessment',
        'Compliance Review',
        'Technology Roadmap',
        'Implementation Guidance'
      ],
      pricing: {
        starter: { price: 199, period: 'hour', features: ['Basic consultation', 'Email support', 'Standard reports'] },
        professional: { price: 299, period: 'hour', features: ['Advanced consultation', 'Priority support', 'Custom reports', 'Follow-up support'] },
        enterprise: { price: 499, period: 'hour', features: ['Full consultation', 'Dedicated support', 'Custom solutions', 'Ongoing support'] }
      },
      icon: ChartBarIcon,
      category: 'IT Consulting',
      marketPrice: '$199-499/hour',
      link: '/it-consulting'
    }
  ];

  const categories = [
    'Cloud Computing',
    'Cybersecurity',
    'Network Management',
    'Data Center',
    'IT Support',
    'Digital Transformation',
    'Backup & Recovery',
    'IT Consulting'
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  ];
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for businesses. Cloud infrastructure, cybersecurity, network management, and digital transformation services with competitive pricing." />
        <meta name="keywords" content="IT solutions, cloud computing, cybersecurity, network management, IT support, digital transformation, IT consulting" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions for businesses. Cloud infrastructure, cybersecurity, network management, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
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
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              IT Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions covering all aspects of technology infrastructure and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Computing</h3>
              <p className="text-gray-300 text-sm">Complete cloud infrastructure solutions with AWS, Azure, and Google Cloud Platform expertise.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Advanced security solutions including threat detection, vulnerability assessment, and compliance management.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Network Management</h3>
              <p className="text-gray-300 text-sm">Complete network infrastructure design, implementation, and management with advanced monitoring.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Transformation</h3>
              <p className="text-gray-300 text-sm">Complete digital transformation solutions to modernize your business processes and technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized IT solutions designed to address specific business technology needs with expert implementation and support.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              All Categories
            </button>
            {categories.map((category) => (
              <button key={category} className="px-6 py-2 bg-slate-700 text-gray-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-purple-400">
                      ${service.pricing.starter.price}
                      <span className="text-sm text-gray-400">/{service.pricing.starter.period}</span>
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our IT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful IT implementation and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assessment & Planning</h3>
              <p className="text-gray-300">We assess your current IT infrastructure and create a comprehensive implementation plan.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design & Architecture</h3>
              <p className="text-gray-300">We design the optimal IT solution architecture tailored to your specific requirements.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">We implement the solution with minimal disruption to your business operations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Support & Optimization</h3>
              <p className="text-gray-300">We provide ongoing support and continuously optimize your IT infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              IT Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent, competitive pricing for IT solutions with no hidden fees. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $99-499<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Standard monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic reporting
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $399-1299<span className="text-lg text-gray-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced IT services
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Custom reporting
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Remote management
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $1299-2999<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Full IT management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  On-site support
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to discuss your IT needs and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your IT Transformation
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
