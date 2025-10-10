'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'ROI analysis and projections',
        'Implementation strategy'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning for migrating your infrastructure to the cloud with optimal cost and performance.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Security and compliance planning',
        'Cost optimization strategies'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations to protect your digital assets.',
      duration: '2-3 hours',
      price: '$400',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy recommendations',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Guidance',
      description: 'Work with certified professionals with years of industry experience'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Proven Methodologies',
      description: 'Follow established best practices and proven implementation strategies'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: 'Time-Saving',
      description: 'Avoid common pitfalls and accelerate your implementation timeline'
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-purple-500" />,
      title: 'Clear Roadmap',
      description: 'Get a detailed action plan with specific next steps and milestones'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current situation and requirements'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your needs'
    },
    {
      step: 3,
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones'
    },
    {
      step: 4,
      title: 'Follow-up Support',
      description: 'Ongoing support to ensure successful implementation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consultation Services</title>
        <meta name="description" content="Get expert IT consultation from Zion Tech Group. Strategic planning, AI implementation, cloud migration, and cybersecurity assessments." />
        <meta name="keywords" content="IT consultation, AI consultation, cloud migration, cybersecurity assessment, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Expert IT Consultation
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Get strategic guidance from our certified experts to transform your business 
                with the right technology solutions and implementation strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Consultation Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert consultants help you make informed decisions and avoid costly mistakes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-600">
                Choose the consultation type that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white rounded-lg shadow-sm p-8 border transition-all duration-300 hover:shadow-md ${
                    type.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
                  }`}
                >
                  {type.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {type.duration}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {type.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      type.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    Select This Consultation
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-600">
                A structured approach to delivering maximum value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and take the first step toward 
                transforming your business with the right technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">consultation@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule Online</h3>
                <p className="text-blue-100">Book a consultation slot</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;