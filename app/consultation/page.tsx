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
        'Technology roadmap',
        'Budget planning',
        'Risk analysis',
        'Implementation timeline'
      ],
      popular: true
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
        'Technology selection',
        'ROI analysis',
        'Implementation strategy'
      ],
      popular: false
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning for migrating your infrastructure to the cloud with optimal cost and performance.',
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy',
        'Cost optimization',
        'Security planning',
        'Performance optimization'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '2-3 hours',
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Threat analysis',
        'Security recommendations',
        'Implementation plan'
      ],
      popular: false
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Strategist',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Cloud Architecture Lead',
      expertise: 'Cloud Computing & DevOps',
      experience: '12+ years',
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Alex Thompson',
      title: 'Cybersecurity Director',
      expertise: 'Information Security',
      experience: '10+ years',
      image: '/images/experts/alex-thompson.jpg'
    }
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log('Booking consultation:', typeId);
  };

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT & AI Consultation</title>
        <meta name="description" content="Get expert consultation on IT strategy, AI implementation, cloud migration, and cybersecurity. Book a session with our experienced professionals." />
        <meta name="keywords" content="IT consultation, AI consultation, cloud migration, cybersecurity audit, technology strategy, expert advice" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Expert IT and AI consultation services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our industry experts. Whether you need IT strategy, 
              AI implementation, or cybersecurity advice, we're here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the type of consultation that best fits your needs and schedule a session with our experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                    type.popular
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/25'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBooking(type.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      type.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                        : 'border border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                    }`}
                  >
                    Book Consultation
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Experts</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team of experienced professionals brings deep expertise across all areas of technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{expert.title}</p>
                  <p className="text-gray-300 text-sm mb-2">{expert.expertise}</p>
                  <p className="text-gray-400 text-xs">{expert.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300">
                Contact us to schedule your consultation or learn more about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">consultation@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 Response</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">San Francisco, CA</p>
                <p className="text-gray-400 text-sm">By Appointment</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;