'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';

interface ConsultationType {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      title: 'AI Strategy Consultation',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive AI strategy assessment and roadmap development for your organization.',
      features: [
        'Current AI maturity assessment',
        'Technology stack evaluation',
        'Implementation roadmap',
        'ROI projections',
        'Risk analysis'
      ],
      popular: true
    },
    {
      id: '2',
      title: 'Quantum Computing Assessment',
      duration: '3 hours',
      price: '$750',
      description: 'Evaluate quantum computing opportunities and develop a quantum strategy.',
      features: [
        'Quantum readiness assessment',
        'Use case identification',
        'Technology evaluation',
        'Implementation timeline',
        'Investment recommendations'
      ]
    },
    {
      id: '3',
      title: 'Digital Transformation Planning',
      duration: '4 hours',
      price: '$1,000',
      description: 'Complete digital transformation strategy and implementation plan.',
      features: [
        'Current state analysis',
        'Future state vision',
        'Gap analysis',
        'Change management plan',
        'Technology recommendations'
      ]
    },
    {
      id: '4',
      title: 'Cybersecurity Audit',
      duration: '2 hours',
      price: '$400',
      description: 'Comprehensive security assessment and improvement recommendations.',
      features: [
        'Security posture evaluation',
        'Vulnerability assessment',
        'Compliance review',
        'Security roadmap',
        'Best practices implementation'
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '500+', label: 'Consultations Completed' },
    { icon: <CheckCircle className="w-8 h-8" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Star className="w-8 h-8" />, value: '4.9/5', label: 'Average Rating' },
    { icon: <Zap className="w-8 h-8" />, value: '24h', label: 'Response Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert consultation on AI, quantum computing, digital transformation, and cybersecurity. Book a consultation with our technology experts." />
        <meta name="keywords" content="technology consultation, AI consulting, quantum computing, digital transformation, cybersecurity audit" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our technology experts. We'll help you navigate the complex world of AI, quantum computing, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition-colors">
                <Calendar className="w-5 h-5" />
                Book Consultation
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-slate-900">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Consultation Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation that best fits your needs and schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group relative`}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {type.title}
                    </h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>
                    <div className="text-gray-400 flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      {type.duration}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Book This Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple, transparent, and effective consultation process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-slate-900">1</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Book & Prepare</h3>
                <p className="text-gray-300">
                  Schedule your consultation and provide us with relevant information about your project.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-slate-900">2</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Consultation</h3>
                <p className="text-gray-300">
                  Meet with our experts for a detailed discussion about your technology challenges and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-slate-900">3</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Action Plan</h3>
                <p className="text-gray-300">
                  Receive a comprehensive report with recommendations and next steps for your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Technology?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a consultation with our experts and take the first step towards technological excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5" />
                  Book Now
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;
