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
  popular?: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive assessment and strategic planning for AI implementation',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current state assessment',
        'AI readiness evaluation',
        'Strategic roadmap development',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and architecture planning',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
        'Technical architecture review',
        'Integration planning',
        'Security assessment',
        'Performance optimization',
        'Scalability analysis',
        'Best practices guidance'
      ]
    },
    {
      id: 'implementation',
      name: 'Implementation Planning',
      description: 'Step-by-step implementation strategy and project management',
      duration: '1-2 days',
      price: '$2,500',
      features: [
        'Detailed project plan',
        'Resource allocation',
        'Risk assessment',
        'Timeline development',
        'Team training plan',
        'Ongoing support strategy'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'Analyze your current systems and identify opportunities for AI integration.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized AI strategy aligned with your business goals.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
    }
  ];

  const benefits = [
    'Expert guidance from AI specialists',
    'Customized solutions for your business',
    'Proven methodologies and best practices',
    'Clear roadmap for implementation',
    'Risk mitigation strategies',
    'Ongoing support and optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Consultation | Zion Tech Group</title>
        <meta name="description" content="Expert AI consultation services to help you develop and implement AI strategies that drive business growth and innovation." />
        <meta name="keywords" content="AI consultation, AI strategy, AI implementation, business AI, AI planning, AI experts" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert guidance to develop and implement AI strategies that transform your business and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                View Our Process
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border ${
                    type.popular ? 'border-cyan-400/50 scale-105' : 'border-white/10'
                  }`}
                >
                  {type.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${type.price}</span>
                    <span className="text-gray-400 ml-2">/session</span>
                  </div>

                  <div className="flex items-center text-gray-300 mb-6">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{type.duration}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {selectedType === type.id ? 'Selected' : 'Select This Service'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our AI experts and take the first step towards a more intelligent future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Schedule Now
                  <Calendar className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConsultationPage;