import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CpuChipIcon,
CloudIcon
  GlobeAltIcon,
SignalIcon
  BriefcaseIcon,
ArrowRightIcon
  CheckIcon } from '@heroicons/react/24/outline';
const ServicesPage: React.FC = () => {,
  return null;
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.'
      icon: CpuChipIcon,
      features: [,
        'Machine Learning Models'
        'Natural Language Processing'
        'Computer Vision'
        'Predictive Analytics'
        'AI Automation'
        'Custom AI Development'
      ]
      href: '/ai-solutions',
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      icon: ShieldCheckIcon,
      features: [,
        'Threat Detection'
        'Vulnerability Assessment'
        'Security Monitoring'
        'Incident Response'
        'Compliance Management'
        'Security Training'
      ]
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    }
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with high availability, security, and performance.'
      icon: CloudIcon,
      features: [,
        'Cloud Migration'
        'Infrastructure as Code'
        'Auto-scaling'
        'Disaster Recovery'
        'Cost Optimization'
        'Multi-cloud Strategy'
      ]
      href: '/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications tailored to your specific business needs and requirements.',
      icon: GlobeAltIcon,
      features: [,
        'Custom Development'
        'API Integration'
        'Scalable Architecture'
        'User Management'
        'Payment Processing'
        'Analytics Dashboard'
      ]
      href: '/micro-saas-solutions',
      color: 'from-green-500 to-emerald-500'
    }
    {
      title: '5 G Technology',
      description: 'Next-generation 5 G technology implementation for ultra-fast connectivity and IoT solutions.',
      icon: SignalIcon,
      features: [,
        '5 G Network Implementation'
        'IoT Device Management'
        'Edge Computing'
        'Real-time Data Processing'
        'Low Latency Applications'
        'Network Optimization'
      ]
      href: '/5 g-solutions',
      color: 'from-indigo-500 to-purple-500'
    }
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure management and support services for your business operations.',
      icon: BriefcaseIcon,
      features: [,
        'IT Infrastructure Management'
        'Help Desk Support'
        'System Administration'
        'Network Management'
        'Software Deployment'
        'Technical Consulting'
      ]
      href: '/it-solutions',
      color: 'from-gray-500 to-slate-500';
    };
  ];
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and current technology stack to identify opportunities for improvement.'
    }
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy tailored to your specific requirements and business goals.'
    }
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your daily operations.'
    }
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and optimization to ensure your solution continues to deliver value.';
    };
  ];
  return (
    <></>
      <Helmet /></Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5 G technology, and IT services." / /></meta>
        <meta name="keywords" content="technology services, AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5 G technology, IT services" / /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden" /></section>
        <div className="absolute inset-0 opacity-20" /></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20" /></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center" /></div>
          <div className="max-w-4 xl mx-auto" /></div>
            <h1 className="text-6 xl md: text-7 xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" />,
              Our Services
            </h1>
            <p className="text-xl md: text-2 xl text-gray-300 mb-8 leading-relaxed" />,
              Comprehensive Technology Solutions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3 xl mx-auto" /></p>
              From AI and cybersecurity to cloud infrastructure and 5 G technology,
we provide end-to-end solutions that drive digital transformation and business growth.
            </p>
            <Link,
to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2",
             /></Link>
              Get Started
              <ArrowRightIcon className="w-5 h-5" / /></ArrowRightIcon>
            </Link>
          </div>
        </section>
      {/* Services Grid */}
      <section className="py-20 bg-slate-900" /></section>
        <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />,
          <div className="text-center mb-16" /></div>
            <h2 className="text-4 xl md: text-5 xl font-bold text-white mb-6" />,
              Our Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
              Comprehensive solutions designed to meet your business needs
            </p>
          </div>)
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8" />),
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover: bg-slate-700 transition-all duration-300 group" />,
                <div className="flex items-center mb-6" /></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform""