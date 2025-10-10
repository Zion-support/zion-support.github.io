'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Clock, Users, Award, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      features: [
        'Needs assessment',
        'Technology evaluation',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false
    },
    {
      id: '2',
      name: 'Strategy Session',
      duration: '60 minutes',
      price: '$299',
      description: 'Comprehensive strategy session with detailed analysis',
      features: [
        'Deep dive analysis',
        'Custom roadmap creation',
        'Technology stack recommendations',
        'Implementation timeline',
        'Resource planning'
      ],
      popular: true
    },
    {
      id: '3',
      name: 'Technical Review',
      duration: '90 minutes',
      price: '$499',
      description: 'In-depth technical review of your current systems',
      features: [
        'System architecture review',
        'Security assessment',
        'Performance analysis',
        'Optimization recommendations',
        'Migration planning',
        'Follow-up support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    'Expert guidance from industry professionals',
    'Customized solutions for your specific needs',
    'Proven methodologies and best practices',
    'Ongoing support and maintenance',
    'Cost-effective implementation strategies',
    'Scalable and future-proof solutions'
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert technology consultation from Zion Tech Group. Free discovery calls, strategy sessions, and technical reviews to help your business succeed." />
        <meta name="keywords" content="technology consultation, IT consulting, AI consulting, cloud consulting, business strategy, technology assessment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our technology experts to transform your business with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Call
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {type.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {type.name}
                    </h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>
                    <div className="text-gray-400">{type.duration}</div>
                  </div>

                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Select This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Consultation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to understanding your needs and delivering solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">We learn about your business, challenges, and goals through detailed discussions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Analysis</h3>
                <p className="text-gray-300">We analyze your current systems and identify opportunities for improvement.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-gray-300">We develop a customized strategy and roadmap for your technology transformation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">We guide you through the implementation process and provide ongoing support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a free consultation with our experts and discover how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
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