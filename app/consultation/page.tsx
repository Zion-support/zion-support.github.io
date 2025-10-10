'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, BarChart, Code, Settings, Globe, Lock, Award, Target, MapPin, Sparkles, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, TrendingUp, Eye, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      id: 'cloud-migration',
      title: 'Cloud Migration Consultation',
      description: 'Plan your cloud migration with our certified cloud architects',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Migration Strategy',
        'Cost Optimization',
        'Security Assessment',
        'Timeline Planning'
      ]
    },
    {
      id: 'security-audit',
      title: 'Security Audit Consultation',
      description: 'Comprehensive security assessment and recommendations',
      icon: Shield,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Security Assessment',
        'Vulnerability Analysis',
        'Compliance Review',
        'Remediation Plan'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Consultation',
      description: 'Strategic guidance for your digital transformation journey',
      icon: Zap,
      duration: '75 minutes',
      price: 'Free',
      features: [
        'Current State Analysis',
        'Future State Planning',
        'Change Management',
        'Technology Stack Review'
      ]
    }
  ];

  const consultants = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Solutions Architect',
      experience: '15+ years',
      expertise: ['Machine Learning', 'AI Strategy', 'Data Science'],
      image: '/images/consultants/sarah-chen.webp',
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Solutions Architect',
      experience: '12+ years',
      expertise: ['AWS', 'Azure', 'Cloud Migration'],
      image: '/images/consultants/michael-rodriguez.webp',
      rating: 4.8,
      reviews: 98
    },
    {
      name: 'Emily Watson',
      role: 'Security Specialist',
      experience: '10+ years',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Assessment'],
      image: '/images/consultants/emily-watson.webp',
      rating: 4.9,
      reviews: 89
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Free
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert advice from our certified consultants. No obligation, no pressure, just valuable insights for your business.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                  selectedService === service.id ? 'border-purple-400 bg-purple-500/10' : 'border-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{service.price}</span>
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedServiceData && (
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">{selectedServiceData.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{selectedServiceData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Duration: {selectedServiceData.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Perfect for: Technical teams, decision makers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-gray-300">Completely free with no obligations</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Calendar className="inline-block mr-2 w-5 h-5" />
                    Schedule Consultation
                  </button>
                  <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    <Phone className="inline-block mr-2 w-5 h-5" />
                    Call Now
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
                <ul className="space-y-4">
                  {selectedServiceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Consultants */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Consultants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultants.map((consultant, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{consultant.name}</h3>
                <p className="text-purple-400 mb-3">{consultant.role}</p>
                <p className="text-gray-400 text-sm mb-4">{consultant.experience} experience</p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {consultant.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(consultant.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{consultant.rating} ({consultant.reviews} reviews)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Expert Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your free consultation today and discover how our experts can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Book Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;