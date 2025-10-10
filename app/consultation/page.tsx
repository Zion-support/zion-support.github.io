'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowRight, Users, Zap, Shield, Cloud, Brain, Phone, Mail, MessageCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const consultationTypes = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy & Implementation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs',
      duration: '2-4 hours',
      price: '$500/hour',
      icon: Brain,
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline',
        'Risk mitigation strategies'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute your cloud migration with expert guidance',
      duration: '3-6 hours',
      price: '$400/hour',
      icon: Cloud,
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration strategy development',
        'Security and compliance planning',
        'Cost optimization strategies'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and improvement recommendations',
      duration: '4-8 hours',
      price: '$600/hour',
      icon: Shield,
      features: [
        'Security vulnerability assessment',
        'Compliance audit',
        'Incident response planning',
        'Security training recommendations',
        'Ongoing monitoring setup'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business with modern technology solutions',
      duration: '6-12 hours',
      price: '$450/hour',
      icon: Zap,
      features: [
        'Current state analysis',
        'Digital maturity assessment',
        'Transformation roadmap',
        'Change management strategy',
        'Success metrics definition'
      ]
    }
  ];

  const consultationSteps = [
    {
      step: 1,
      title: 'Initial Discovery',
      description: 'We learn about your business, challenges, and goals through a detailed questionnaire and initial call.'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Our experts analyze your needs and develop a customized strategy and recommendations.'
    },
    {
      step: 3,
      title: 'Presentation & Discussion',
      description: 'We present our findings and recommendations in a detailed consultation session.'
    },
    {
      step: 4,
      title: 'Implementation Planning',
      description: 'We provide a detailed implementation plan and next steps for moving forward.'
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Officer',
      expertise: 'AI Strategy, Machine Learning, Data Science',
      experience: '15+ years',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Cloud Solutions Architect',
      expertise: 'Cloud Architecture, DevOps, Infrastructure',
      experience: '12+ years',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Alex Thompson',
      title: 'Cybersecurity Director',
      expertise: 'Cybersecurity, Risk Management, Compliance',
      experience: '10+ years',
      image: '/api/placeholder/200/200'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Consultation',
      description: 'Schedule a call with our experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Consultation',
      description: 'Send us your questions and requirements',
      contact: 'consultation@ziontechgroup.com',
      availability: '24/7 response within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized guidance from our team of experts to transform your business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Consultation Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationTypes.map((consultation) => (
                <div
                  key={consultation.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <consultation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{consultation.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-cyan-400">{consultation.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400">{consultation.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedService(consultation.id)}
                    className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  >
                    Select This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Experts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-cyan-400 mb-2">{expert.title}</p>
                  <p className="text-gray-300 text-sm mb-2">{expert.expertise}</p>
                  <p className="text-gray-400 text-xs">{expert.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
                  <p className="text-cyan-400 font-medium mb-2">{method.contact}</p>
                  <p className="text-gray-400 text-xs">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your consultation today and take the first step towards transforming your business with AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;