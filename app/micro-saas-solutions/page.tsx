'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Build intelligent micro SaaS applications with AI capabilities for enhanced user experience.',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Automation',
        'Custom AI Models',
        'Real-time Insights'
      ],
      benefits: [
        'Enhanced User Experience',
        'Automated Decision Making',
        'Predictive Capabilities',
        'Competitive Advantage'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Cloud-Native Micro SaaS',
      description: 'Scalable micro SaaS solutions built for the cloud with auto-scaling and high availability.',
      features: [
        'Auto-scaling Architecture',
        'Multi-cloud Deployment',
        'Container Orchestration',
        'Serverless Functions',
        'Global CDN',
        'Disaster Recovery'
      ],
      benefits: [
        'Cost Efficiency',
        'Global Scalability',
        'High Availability',
        'Reduced Maintenance'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Micro SaaS',
      description: 'Enterprise-grade security for micro SaaS applications with compliance and data protection.',
      features: [
        'End-to-end Encryption',
        'Identity Management',
        'API Security',
        'Data Privacy',
        'Compliance Tools',
        'Audit Logging'
      ],
      benefits: [
        'Data Protection',
        'Regulatory Compliance',
        'Trust & Credibility',
        'Risk Mitigation'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting capabilities for micro SaaS applications.',
      features: [
        'Real-time Dashboards',
        'Custom Reports',
        'User Behavior Analytics',
        'Performance Metrics',
        'Business Intelligence',
        'Data Visualization'
      ],
      benefits: [
        'Data-Driven Decisions',
        'Performance Optimization',
        'User Insights',
        'Business Growth'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-tenant Architecture',
      description: 'Efficient multi-tenant micro SaaS solutions with data isolation and customization.',
      features: [
        'Tenant Isolation',
        'Custom Branding',
        'Configurable Workflows',
        'User Management',
        'Billing Integration',
        'White-label Options'
      ],
      benefits: [
        'Scalable Revenue Model',
        'Customization Options',
        'Efficient Resource Usage',
        'Market Flexibility'
      ]
    },
    {
      icon: RocketLaunchIcon,
      title: 'Rapid Deployment',
      description: 'Quick-to-market micro SaaS solutions with modern development practices and DevOps.',
      features: [
        'CI/CD Pipelines',
        'Automated Testing',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Version Control',
        'Rollback Capabilities'
      ],
      benefits: [
        'Faster Time to Market',
        'Reduced Development Costs',
        'Higher Quality',
        'Continuous Improvement'
      ]
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Real Estate',
    'Marketing',
    'HR & Recruitment',
    'Project Management'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your business needs and define the micro SaaS solution requirements.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design scalable and secure architecture tailored to your specific use case.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and thoroughly test your micro SaaS application with modern practices.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy your solution to production and launch with monitoring and support.'
    },
    {
      step: '05',
      title: 'Maintenance & Growth',
      description: 'Ongoing support, updates, and scaling as your business grows.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Build scalable micro SaaS solutions with AI, cloud-native architecture, and enterprise security. Custom micro SaaS applications for modern businesses." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, cloud applications, AI-powered SaaS, multi-tenant, scalable software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build scalable, intelligent micro SaaS applications that solve specific business problems
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We specialize in creating focused, efficient micro SaaS solutions that deliver value quickly 
              and scale with your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SaaS development services tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-indigo-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-400 text-sm">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS solutions work across various industries and business types
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <h3 className="text-white font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology to ensure successful micro SaaS development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you create a focused, scalable micro SaaS solution that delivers value to your customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <PhoneIcon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSSolutionsPage;