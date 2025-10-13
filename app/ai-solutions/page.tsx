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

const AISolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'Machine Learning Models',
      description: 'Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.',
      features: [
        'Custom Algorithm Development',
        'Real-time Model Training',
        'A/B Testing Framework',
        'Model Performance Monitoring',
        'Automated Retraining',
        'Edge Deployment'
      ],
      benefits: [
        '95% Accuracy',
        'Real-time Processing',
        'Custom Algorithms',
        'Scalable Infrastructure'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Leverage data to predict future trends, behaviors, and outcomes with advanced statistical models and AI.',
      features: [
        'Time Series Forecasting',
        'Risk Assessment',
        'Demand Prediction',
        'Customer Behavior Analysis',
        'Market Trend Analysis',
        'Performance Optimization'
      ],
      benefits: [
        'Better Decision Making',
        'Risk Mitigation',
        'Cost Reduction',
        'Competitive Advantage'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for automation, quality control, and intelligent monitoring.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR Technology',
        'Video Analytics',
        'Quality Inspection'
      ],
      benefits: [
        'Automated Processing',
        'Improved Accuracy',
        'Cost Efficiency',
        '24/7 Monitoring'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security Solutions',
      description: 'Intelligent security systems that detect threats, prevent fraud, and protect your digital assets.',
      features: [
        'Threat Detection',
        'Fraud Prevention',
        'Anomaly Detection',
        'Behavioral Analysis',
        'Risk Assessment',
        'Automated Response'
      ],
      benefits: [
        'Enhanced Security',
        'Real-time Protection',
        'Reduced False Positives',
        'Compliance Assurance'
      ]
    },
    {
      icon: CloudIcon,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable cloud-based AI infrastructure that grows with your business needs.',
      features: [
        'Auto-scaling Resources',
        'GPU Acceleration',
        'Distributed Computing',
        'Model Serving',
        'Data Pipeline',
        'Monitoring & Logging'
      ],
      benefits: [
        'Cost Optimization',
        'High Performance',
        'Global Availability',
        'Easy Management'
      ]
    },
    {
      icon: RocketLaunchIcon,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline processes and reduce manual work.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Document Processing',
        'Data Entry Automation',
        'Quality Control',
        'Performance Monitoring'
      ],
      benefits: [
        'Increased Efficiency',
        'Reduced Errors',
        'Cost Savings',
        'Scalable Operations'
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

  const benefits = [
    'Increased Efficiency',
    'Better Decision Making',
    'Cost Reduction',
    'Enhanced Customer Experience',
    'Competitive Advantage',
    'Scalable Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, predictive analytics, computer vision, and AI automation for modern businesses." />
        <meta name="keywords" content="AI solutions, machine learning, predictive analytics, computer vision, AI automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses leverage the power of AI to automate processes, gain insights, 
              and create intelligent solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-purple-400 mr-2" />
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
              Our AI solutions are designed to work across various industries
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Benefits of AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you implement AI solutions that transform your business and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Start Your AI Journey
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center gap-2"
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
                <PhoneIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              <div className="flex flex-col items-center">
                <EnvelopeIcon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-purple-400 mb-4" />
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

export default AISolutionsPage;