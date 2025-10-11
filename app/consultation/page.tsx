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
        'Implementation strategy',
        'ROI analysis and projections'
      ],
      popular: false
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
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
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance evaluation',
        'Threat analysis',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Technology Strategy',
      description: 'Strategic planning and technology roadmaps',
      duration: '2-4 hours',
      icon: '🎯'
    },
    {
      title: 'AI & Machine Learning',
      description: 'AI implementation and optimization guidance',
      duration: '3-5 hours',
      icon: '🤖'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration and optimization strategies',
      duration: '4-6 hours',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Security assessment and protection strategies',
      duration: '2-3 hours',
      icon: '🔒'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation planning',
      duration: '6-8 hours',
      icon: '🚀'
    },
    {
      title: 'Data Analytics',
      description: 'Data strategy and analytics implementation',
      duration: '3-4 hours',
      icon: '📊'
    }
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Expert IT consulting and strategy sessions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-white">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Flexible Scheduling</div>
                  <div className="text-gray-400">Book at your convenience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Expert Team</div>
                  <div className="text-gray-400">15+ years experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Proven Results</div>
                  <div className="text-gray-400">500+ successful projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Services</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We offer specialized consultation services across various technology domains to help you make informed decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <p className="text-cyan-400 text-sm font-medium">{service.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 ${
                  type.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  <div className="text-center mb-6">
                    {type.popular && (
                      <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{type.price}</div>
                    <div className="text-gray-400 text-sm">{type.duration}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBooking(type.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Book a consultation with our experts and take the first step towards digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultationPage;