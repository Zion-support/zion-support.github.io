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
        'AI Strategy Planning',
        'Technology Assessment',
        'Implementation Roadmap',
        'ROI Analysis',
        'Best Practices Guide'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud',
      icon: Cloud,
      duration: '90 minutes',
      price: 'Free',
      features: [
        'Migration Strategy',
        'Cost Optimization',
        'Security Assessment',
        'Performance Planning',
        'Timeline Development'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations',
      icon: Shield,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Security Audit',
        'Vulnerability Assessment',
        'Compliance Review',
        'Incident Response Planning',
        'Security Training'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Strategic guidance for complete digital transformation',
      icon: Zap,
      duration: '120 minutes',
      price: 'Free',
      features: [
        'Digital Strategy',
        'Process Optimization',
        'Technology Integration',
        'Change Management',
        'Success Metrics'
      ]
    }
  ];

  const consultants = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      expertise: 'Machine Learning, Quantum Computing',
      experience: '15+ years',
      image: '/images/consultants/sarah-chen.webp',
      rating: 4.9
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Solutions Architect',
      expertise: 'AWS, Azure, DevOps',
      experience: '12+ years',
      image: '/images/consultants/michael-rodriguez.webp',
      rating: 4.8
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Cybersecurity Expert',
      expertise: 'Security Architecture, Compliance',
      experience: '10+ years',
      image: '/images/consultants/emily-watson.webp',
      rating: 4.9
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Free <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert advice from our team of AI and IT specialists. Schedule a free consultation 
              to discuss your project and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Our Experts
              </button>
            </div>
          </div>
        </section>

        {/* Services Selection */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Consultation</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`cyber-card p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                    selectedService === service.id ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cyan-400 font-semibold">{service.duration}</span>
                    <span className="text-green-400 font-semibold">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        {selectedServiceData && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="cyber-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <selectedServiceData.icon className="w-12 h-12 text-cyan-400 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedServiceData.title}</h3>
                        <p className="text-gray-300">{selectedServiceData.description}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Duration: {selectedServiceData.duration}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Star className="w-5 h-5 text-cyan-400" />
                        <span className="text-white">Price: {selectedServiceData.price}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">What You'll Get</h4>
                    <ul className="space-y-3">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Our Experts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <div key={consultant.name} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {consultant.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{consultant.name}</h3>
                  <p className="text-cyan-400 mb-3">{consultant.role}</p>
                  <p className="text-gray-300 text-sm mb-3">{consultant.expertise}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-semibold">{consultant.rating}</span>
                    <span className="text-gray-400 text-sm">({consultant.experience})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How It <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Schedule Your Call</h3>
                <p className="text-gray-300">Choose your preferred time and consultation type. We'll send you a calendar invite.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Meet Our Expert</h3>
                <p className="text-gray-300">Connect with our specialist via video call and discuss your specific needs and challenges.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get Your Action Plan</h3>
                <p className="text-gray-300">Receive a detailed report with recommendations and next steps for your project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule your free consultation today and take the first step towards transforming your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us Directly
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;