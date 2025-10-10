'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('ai-services');

  const services = [
    {
      id: 'ai-services',
      title: 'AI Services Consultation',
      description: 'Get expert advice on AI implementation, strategy, and optimization',
      icon: Brain,
      duration: '60 minutes',
      price: 'Free',
      features: [
        'AI Strategy Assessment',
        'Technology Recommendations',
        'Implementation Roadmap',
        'ROI Analysis'
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services Consultation',
      description: 'Comprehensive IT infrastructure and security consultation',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Infrastructure Assessment',
        'Security Audit',
        'Cloud Migration Planning',
        'Cost Optimization'
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Consultation',
      description: 'Discover how micro SAAS tools can streamline your business operations',
      icon: Zap,
      duration: '45 minutes',
      price: 'Free',
      features: [
        'Tool Recommendations',
        'Integration Planning',
        'Workflow Optimization',
        'ROI Projections'
      ]
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      expertise: 'Machine Learning, AI Strategy',
      image: '/images/experts/sarah-chen.webp',
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior IT Architect',
      expertise: 'Cloud Infrastructure, Security',
      image: '/images/experts/michael-rodriguez.webp',
      rating: 4.8,
      reviews: 89
    },
    {
      name: 'Emily Watson',
      role: 'Product Strategy Lead',
      expertise: 'Micro SAAS, Business Automation',
      image: '/images/experts/emily-watson.webp',
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Free
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice from our team of specialists. Schedule a free consultation to discuss your project and discover how we can help your business succeed.
          </p>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`card-futuristic glass-dark p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id ? 'ring-2 ring-cyan-400' : 'hover:shadow-2xl'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedServiceData && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-futuristic glass-dark p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedServiceData.title}</h2>
                <p className="text-gray-300 text-lg">{selectedServiceData.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What You'll Get:</h3>
                  <ul className="space-y-3">
                    {selectedServiceData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Schedule Your Consultation:</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Time
                      </label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                        <option value="">Choose a time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    <button className="w-full btn-futuristic text-lg px-6 py-4 float-animation">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Experts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="card-futuristic glass-dark p-6 text-center">
                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{expert.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{expert.role}</p>
                <p className="text-gray-300 text-sm mb-4">{expert.expertise}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{expert.rating} ({expert.reviews} reviews)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Don't wait to transform your business. Schedule your free consultation today and take the first step towards success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Schedule Now
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call (302) 464-0950
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;