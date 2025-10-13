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

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Intelligent Automation',
        'AI Chatbots'
      ],
      benefits: [
        'Increased Efficiency',
        'Better Decision Making',
        'Cost Reduction',
        'Enhanced Customer Experience'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions tailored to your business needs.',
      features: [
        'Cloud Migration',
        'Multi-Cloud Strategy',
        'Serverless Architecture',
        'Container Orchestration',
        'Auto-scaling',
        'Disaster Recovery'
      ],
      benefits: [
        'Scalability',
        'Cost Optimization',
        'High Availability',
        'Global Reach'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets and ensure compliance.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Identity Management',
        'Data Encryption',
        'Compliance Management',
        'Incident Response'
      ],
      benefits: [
        'Data Protection',
        'Regulatory Compliance',
        'Risk Mitigation',
        'Business Continuity'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights that drive business growth.',
      features: [
        'Data Warehousing',
        'Real-time Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Modeling',
        'Custom Dashboards'
      ],
      benefits: [
        'Data-Driven Decisions',
        'Performance Insights',
        'Competitive Advantage',
        'Operational Efficiency'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'API Integration',
        'Workflow Optimization',
        'Digital Workflows',
        'Change Management'
      ],
      benefits: [
        'Improved Efficiency',
        'Better User Experience',
        'Reduced Costs',
        'Future-Proof Technology'
      ]
    },
    {
      icon: RocketLaunchIcon,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your unique business requirements.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'System Integration',
        'Quality Assurance'
      ],
      benefits: [
        'Customized Solutions',
        'Competitive Edge',
        'Scalable Architecture',
        'Ongoing Support'
      ]
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-Profit',
    'Startups'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify pain points, and understand your business objectives.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our team designs a comprehensive solution architecture tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your ongoing operations.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing ensures everything works perfectly before going live.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including AI, cloud computing, cybersecurity, data analytics, and digital transformation services." />
        <meta name="keywords" content="IT solutions, AI solutions, cloud computing, cybersecurity, data analytics, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              From AI-powered automation to cloud infrastructure and cybersecurity, we provide end-to-end IT solutions 
              that help businesses stay competitive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of IT solutions to address every aspect of your technology needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-blue-400 mr-2" />
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
              Our solutions are designed to work across various industries and business types
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
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our expert team help you implement the right IT solutions for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
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
                <PhoneIcon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-blue-400 mb-4" />
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

export default ITSolutionsPage;