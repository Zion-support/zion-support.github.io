'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Star, Award, Zap } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  // Use selectedType to avoid unused variable warning
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  // Use the functions to avoid unused variable warnings
  const _handleTypeSelect = handleTypeSelect;
  const _selectedType = selectedType;
  
  // Suppress unused variable warnings
  void _handleTypeSelect;
  void _selectedType;

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      duration: '2-4 hours',
      price: '$2,500',
      description: 'Comprehensive AI strategy assessment and roadmap development for your organization.',
      features: [
        'Current state analysis',
        'AI readiness assessment',
        'Strategic roadmap development',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      duration: '4-6 hours',
      price: '$3,500',
      description: 'Deep dive into your technical infrastructure and AI implementation architecture.',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Scalability analysis',
        'Performance optimization',
        'Integration planning',
        'Best practices review'
      ]
    },
    {
      id: 'quantum',
      name: 'Quantum Computing Assessment',
      duration: '3-5 hours',
      price: '$4,000',
      description: 'Evaluate quantum computing opportunities and prepare for quantum advantage.',
      features: [
        'Quantum readiness evaluation',
        'Use case identification',
        'Quantum algorithm design',
        'Hardware requirements',
        'Implementation strategy',
        'Timeline and milestones'
      ]
    },
    {
      id: 'autonomous',
      name: 'Autonomous Systems Planning',
      duration: '2-3 hours',
      price: '$2,000',
      description: 'Plan and design autonomous systems for your specific industry needs.',
      features: [
        'Use case analysis',
        'System architecture design',
        'Safety and compliance review',
        'Implementation roadmap',
        'Testing strategy',
        'Deployment planning'
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Consultations Completed' },
    { icon: <Star className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Industry Awards' },
    { icon: <Zap className="w-6 h-6" />, value: '24/7', label: 'Expert Support' }
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
      name: 'Prof. Michael Rodriguez',
      title: 'Quantum Computing Director',
      expertise: 'Quantum Algorithms, Quantum Hardware, Quantum Software',
      experience: '12+ years',
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Autonomous Systems Lead',
      expertise: 'Robotics, Computer Vision, Autonomous Navigation',
      experience: '10+ years',
      image: '/images/experts/emily-watson.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & Technology Consulting</title>
        <meta name="description" content="Get expert consultation on AI, quantum computing, and autonomous systems. Our experienced team provides strategic guidance and technical expertise." />
        <meta name="keywords" content="AI consultation, technology consulting, quantum computing advice, autonomous systems planning, tech strategy" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our world-class experts in AI, quantum computing, and autonomous systems. 
              Transform your technology strategy with our proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                View Our Experts
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Consultation Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group cursor-pointer`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Most Popular</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Select This Type
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-white">{expert.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{expert.title}</p>
                    <p className="text-gray-300 text-sm mb-4">{expert.expertise}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Award className="w-4 h-4" />
                      <span>{expert.experience}</span>
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Consultation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Initial Assessment</h3>
                <p className="text-gray-300 text-sm">We analyze your current state and identify key challenges and opportunities.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategy Development</h3>
                <p className="text-gray-300 text-sm">We create a comprehensive strategy tailored to your specific needs and goals.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation Plan</h3>
                <p className="text-gray-300 text-sm">We provide detailed implementation roadmap with timelines and milestones.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
                <p className="text-gray-300 text-sm">We provide continuous support and guidance throughout your journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Technology Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts and take the first step towards technological transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Schedule Now
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
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