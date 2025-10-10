'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap } from 'lucide-react';
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
      id: 'it-services',
      title: 'IT Services Consultation',
      description: 'Comprehensive IT infrastructure and security consultation',
      icon: Cloud,
      duration: '45 minutes',
      price: 'Free',
      features: [
        'Infrastructure Assessment',
        'Security Audit',
        'Cloud Migration Planning',
        'Performance Optimization'
      ]
    },
    {
      id: 'custom-development',
      title: 'Custom Development Consultation',
      description: 'Expert guidance on custom software development and integration',
      icon: Zap,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Requirements Analysis',
        'Technology Stack Selection',
        'Development Timeline',
        'Cost Estimation'
      ]
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Free <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert advice from our team of specialists. Schedule a free consultation to discuss your project and discover how we can help.
          </p>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Consultation Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedService === service.id
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="text-green-400 font-semibold">{service.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      {selectedServiceData && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <selectedServiceData.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{selectedServiceData.title}</h2>
                <p className="text-xl text-gray-300 mb-6">{selectedServiceData.description}</p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedServiceData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>1-on-1 with our experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{selectedServiceData.price}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">What You'll Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 mr-4">
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our consultants have 15+ years of experience in AI, cloud, and development technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-gray-300">Get scheduled within 24 hours and receive actionable insights immediately.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Obligation</h3>
              <p className="text-gray-300">Our consultations are completely free with no strings attached or sales pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Online</h3>
              <p className="text-gray-300">Book instantly</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationPage;