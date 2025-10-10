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
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive assessment and strategic planning for AI implementation',
      duration: '2-4 hours',
      price: '$2,500',
      features: [
        'Current state assessment',
        'AI readiness evaluation',
        'Strategic roadmap development',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ]
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your technical infrastructure and AI integration',
      duration: '4-6 hours',
      price: '$4,000',
      features: [
        'Infrastructure analysis',
        'Security assessment',
        'Integration planning',
        'Performance optimization',
        'Scalability recommendations',
        'Technical documentation'
      ]
    },
    {
      id: 'implementation',
      name: 'Implementation Planning',
      description: 'Detailed planning and execution strategy for AI projects',
      duration: '6-8 hours',
      price: '$6,000',
      features: [
        'Project roadmap',
        'Resource planning',
        'Risk assessment',
        'Timeline development',
        'Team training plan',
        'Success metrics definition'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from AI specialists',
    'Customized recommendations for your business',
    'Actionable implementation roadmap',
    'Access to latest AI technologies and trends',
    'Ongoing support and follow-up',
    'Proven methodologies and best practices'
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Strategist',
      expertise: 'Machine Learning, Deep Learning, AI Strategy',
      experience: '15+ years',
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Senior AI Architect',
      expertise: 'AI Architecture, Cloud Computing, Integration',
      experience: '12+ years',
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Jennifer Lee',
      title: 'AI Implementation Specialist',
      expertise: 'Project Management, AI Implementation, Training',
      experience: '10+ years',
      image: '/images/experts/jennifer-lee.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert AI consultation from our specialists. Strategic planning, technical architecture, and implementation guidance for your AI projects." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Consultation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get expert guidance from our AI specialists to accelerate your digital transformation and maximize the value of your AI investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Types */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white border-2 rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  selectedType === type.id
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedType(selectedType === type.id ? '' : type.id)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </span>
                    <span className="text-2xl font-bold text-blue-600">{type.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedType === type.id ? 'Selected' : 'Select This Option'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Consultation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the expertise and guidance you need to succeed with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experts Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders with years of experience in AI and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{expert.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{expert.title}</p>
                <p className="text-gray-600 text-sm mb-2">{expert.expertise}</p>
                <p className="text-gray-500 text-sm">{expert.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Schedule your consultation today and take the first step towards AI success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Schedule Now
              <Calendar className="w-5 h-5 ml-2" />
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;