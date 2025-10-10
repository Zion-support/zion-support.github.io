'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Star, Shield, Users } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    consultationType: '',
    message: ''
  });

  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      description: 'Get expert guidance on implementing AI solutions that align with your business goals.',
      duration: '2-4 hours',
      price: 'Starting at $500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline planning'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute a seamless migration to the cloud with minimal disruption.',
      duration: '4-8 hours',
      price: 'Starting at $750/hour',
      features: [
        'Infrastructure assessment',
        'Migration strategy development',
        'Security and compliance planning',
        'Cost optimization analysis'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment to protect your digital assets.',
      duration: '3-6 hours',
      price: 'Starting at $600/hour',
      features: [
        'Vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Staff training recommendations'
      ]
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your business',
    'Proven methodologies and best practices',
    'Ongoing support and follow-up',
    'Cost-effective implementation strategies',
    'Risk mitigation and compliance assurance'
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
        <title>Free Consultation | Zion Tech Group - Expert AI & IT Consulting</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how our solutions can transform your business operations and drive growth." />
        <meta name="keywords" content="free consultation, AI consulting, IT consulting, business transformation, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Free Expert Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized advice from our AI and IT experts. Discover how our solutions 
                can transform your business and drive measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Schedule Now
                  <Calendar className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Consultation Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the consultation type that best fits your needs and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{consultation.title}</h3>
                <p className="text-gray-300 mb-6">{consultation.description}</p>
                
                <div className="space-y-2 mb-6">
                  {consultation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-semibold">{consultation.price}</span>
                    <span className="text-gray-400 text-sm">{consultation.duration}</span>
                  </div>
                  <button className="w-full py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium">
                    Book This Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Consultation?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our expert consultants bring years of experience and proven methodologies to help you succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl"
                >
                  <Star className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Request Your Free Consultation
              </h2>
              <p className="text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your full name"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your company name"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2">
                  Consultation Type
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select consultation type</option>
                  <option value="ai-strategy">AI Strategy Consultation</option>
                  <option value="cloud-migration">Cloud Migration Planning</option>
                  <option value="cybersecurity">Cybersecurity Audit</option>
                  <option value="general">General IT Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Request Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;