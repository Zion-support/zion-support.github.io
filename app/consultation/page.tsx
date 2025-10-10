'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Calendar, Users, MessageCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    preferredTime: '',
    urgency: '',
    message: ''
  });

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

  const consultationTypes = [
    {
      id: '1',
      name: 'Strategy Session',
      description: 'High-level strategic planning and technology roadmap development',
      duration: '2 hours',
      price: '$500',
      features: [
        'Technology assessment',
        'Strategic roadmap',
        'Implementation timeline',
        'Resource planning',
        'Follow-up report'
      ],
      popular: true
    },
    {
      id: '2',
      name: 'Technical Review',
      description: 'Deep dive into your current technology stack and architecture',
      duration: '4 hours',
      price: '$1,200',
      features: [
        'Code review',
        'Architecture analysis',
        'Performance audit',
        'Security assessment',
        'Detailed recommendations'
      ],
      popular: false
    },
    {
      id: '3',
      name: 'Implementation Planning',
      description: 'Detailed planning for specific projects or migrations',
      duration: '6 hours',
      price: '$1,800',
      features: [
        'Project planning',
        'Resource allocation',
        'Risk assessment',
        'Timeline creation',
        'Ongoing support'
      ],
      popular: false
    },
    {
      id: '4',
      name: 'Emergency Support',
      description: 'Urgent technical issues and crisis management',
      duration: '1-4 hours',
      price: '$300/hour',
      features: [
        'Immediate response',
        'Problem diagnosis',
        'Quick fixes',
        'Prevention strategies',
        '24/7 availability'
      ],
      popular: false
    }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Strategist',
      experience: '15+ years',
      expertise: ['AI/ML', 'Data Science', 'Strategy']
    },
    {
      name: 'Michael Chen',
      role: 'Cloud Architecture Lead',
      experience: '12+ years',
      expertise: ['Cloud Computing', 'DevOps', 'Security']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cybersecurity Expert',
      experience: '10+ years',
      expertise: ['Security', 'Compliance', 'Risk Management']
    }
  ];

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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expert
            </span>
            <br />
            <span className="text-white">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our team of experts. We'll help you navigate complex technology decisions and create a roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#consultation-types"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  type.popular
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                    : 'border-white/20'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{type.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{type.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
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

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
              <p className="text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Service Interest *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-strategy">AI Strategy & Implementation</option>
                  <option value="cloud-migration">Cloud Migration Planning</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="cybersecurity">Cybersecurity Assessment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your project and what you'd like to discuss..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  Schedule Consultation
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Other Ways to Reach Us</h2>
            <p className="text-xl text-gray-300">Prefer to contact us directly? Here are other ways to get in touch.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;