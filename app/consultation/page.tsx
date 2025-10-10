'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Star, ArrowRight, Brain, Cloud, Shield, Zap } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Implementation',
      description: 'Develop comprehensive AI strategies and implementation roadmaps for your business.',
      duration: '2-4 hours',
      price: '$500/hour'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migrations with optimal architecture design.',
      duration: '3-6 hours',
      price: '$400/hour'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and vulnerability analysis.',
      duration: '4-8 hours',
      price: '$600/hour'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategy and execution planning.',
      duration: '6-12 hours',
      price: '$450/hour'
    }
  ];

  const consultants = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Officer',
      experience: '15+ years',
      specialties: ['Machine Learning', 'Deep Learning', 'AI Strategy'],
      rating: 5,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Cloud Solutions Architect',
      experience: '12+ years',
      specialties: ['AWS', 'Azure', 'Cloud Migration'],
      rating: 5,
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Alex Thompson',
      title: 'Cybersecurity Expert',
      experience: '10+ years',
      specialties: ['Security Architecture', 'Compliance', 'Risk Assessment'],
      rating: 5,
      image: '/api/placeholder/200/200'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized advice from our team of experts. We'll help you navigate the complex world of AI and IT solutions.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Consultation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-cyan-400 font-medium">{service.duration}</span>
                          <span className="text-green-400 font-bold">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Consultants */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Meet Our Experts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {consultants.map((consultant, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{consultant.name}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{consultant.title}</p>
                    <p className="text-gray-400 text-sm mb-4">{consultant.experience} experience</p>
                    <div className="flex justify-center mb-4">
                      {[...Array(consultant.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="space-y-1">
                      {consultant.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Form */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-strategy">AI Strategy & Implementation</option>
                        <option value="cloud-migration">Cloud Migration & Architecture</option>
                        <option value="cybersecurity">Cybersecurity Assessment</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                        <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                        <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                        <option value="6pm-9pm">6:00 PM - 9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="cyber-button text-center py-4 px-8 text-lg"
                    >
                      Book Consultation
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">
                For urgent matters or quick questions, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:consultation@ziontechgroup.com"
                  className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>consultation@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;

