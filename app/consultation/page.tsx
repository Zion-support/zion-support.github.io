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
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing guidance',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'
    }
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our expert team to transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleBooking('strategy')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
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
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  type.popular ? 'border-purple-400' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration
                    </span>
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Price
                    </span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    type.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                <p className="text-purple-400 mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4">{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {expert.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;