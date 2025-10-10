'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, Star, ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('strategy');

  const consultationTypes = [
    {
      id: 'strategy',
      title: 'Technology Strategy',
      duration: '2-4 hours',
      price: '$500',
      description: 'Comprehensive technology roadmap and digital transformation strategy',
      features: [
        'Current state assessment',
        'Technology gap analysis',
        'Digital transformation roadmap',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: true
    },
    {
      id: 'ai',
      title: 'AI Solutions Consultation',
      duration: '3-5 hours',
      price: '$750',
      description: 'Expert guidance on AI implementation and optimization',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology recommendations',
        'Implementation strategy',
        'Training requirements'
      ],
      popular: false
    },
    {
      id: 'cloud',
      title: 'Cloud Migration',
      duration: '4-6 hours',
      price: '$1,000',
      description: 'Complete cloud strategy and migration planning',
      features: [
        'Cloud readiness assessment',
        'Platform selection',
        'Migration strategy',
        'Security considerations',
        'Cost optimization'
      ],
      popular: false
    },
    {
      id: 'security',
      title: 'Cybersecurity Audit',
      duration: '6-8 hours',
      price: '$1,500',
      description: 'Comprehensive security assessment and recommendations',
      features: [
        'Security posture analysis',
        'Vulnerability assessment',
        'Compliance review',
        'Risk mitigation plan',
        'Security roadmap'
      ],
      popular: false
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Officer',
      expertise: 'Machine Learning, Deep Learning, AI Strategy',
      experience: '15+ years',
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Cloud Solutions Architect',
      expertise: 'Cloud Migration, DevOps, Infrastructure',
      experience: '12+ years',
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      title: 'Cybersecurity Director',
      expertise: 'Security Architecture, Risk Management, Compliance',
      experience: '10+ years',
      image: '/images/experts/emily-watson.jpg'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'We analyze your current technology stack and business requirements',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized technology roadmap and implementation plan',
      duration: '3-5 days'
    },
    {
      step: 3,
      title: 'Presentation & Discussion',
      description: 'Present findings and recommendations with Q&A session',
      duration: '2-4 hours'
    },
    {
      step: 4,
      title: 'Implementation Support',
      description: 'Ongoing support during implementation phase',
      duration: 'Ongoing'
    }
  ];

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy from Zion Tech Group's experienced professionals." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity audit, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized guidance from our technology experts to accelerate your digital transformation and maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#consultation-types"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section id="consultation-types" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Select the consultation that best fits your needs. All consultations include detailed reports and actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`cursor-pointer bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 ${
                    selectedType === type.id
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25'
                      : 'border-white/20 hover:border-cyan-400/50'
                  } ${type.popular ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  {type.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Consultation Details */}
            {selectedConsultation && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedConsultation.title}</h3>
                    <p className="text-gray-300 mb-6">{selectedConsultation.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Duration: {selectedConsultation.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Expert Team: 2-3 specialists</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Includes: Detailed report & recommendations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4">What You'll Get</h4>
                    <ul className="space-y-3">
                      {selectedConsultation.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="text-3xl font-bold text-white mb-2">{selectedConsultation.price}</div>
                      <p className="text-gray-400 text-sm mb-4">One-time consultation fee</p>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                        Book This Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Experts</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our team of experienced professionals brings decades of combined expertise in AI, cloud computing, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{expert.title}</p>
                  <p className="text-gray-300 text-sm mb-2">{expert.expertise}</p>
                  <p className="text-gray-400 text-sm">{expert.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a structured approach to ensure you get maximum value from your consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your consultation today and get expert guidance on your technology strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Book Consultation
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;