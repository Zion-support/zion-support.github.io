'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Calendar, Clock, CheckCircle, ArrowRight, Zap, Brain, Shield, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const consultationTypes = [
    {
      icon: Zap,
      title: 'Quick Consultation',
      duration: '30 minutes',
      description: 'Get a quick overview of our services and how they can help your business',
      price: 'Free'
    },
    {
      icon: Brain,
      title: 'AI Strategy Session',
      duration: '60 minutes',
      description: 'Deep dive into AI implementation strategies for your specific industry',
      price: '$200'
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      duration: '90 minutes',
      description: 'Comprehensive security evaluation and recommendations',
      price: '$300'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration Plan',
      duration: '120 minutes',
      description: 'Detailed cloud migration strategy and implementation roadmap',
      price: '$500'
    }
  ];

  const benefits = [
    'Free initial consultation',
    'Customized recommendations',
    'Expert technical advice',
    'Implementation roadmap',
    'Cost-benefit analysis',
    'Risk assessment',
    'Ongoing support planning'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Schedule a consultation with our experts to discuss your AI and IT needs. Free initial consultation available." />
        <meta name="keywords" content="consultation, expert advice, AI strategy, IT consulting, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Expert Consultation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get personalized advice from our experts to transform your business with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-xl text-gray-300">
                Select the consultation that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <p className="text-cyan-400 font-medium">{type.duration}</p>
                      <p className="text-2xl font-bold text-white">{type.price}</p>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive consultation benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="data-analytics">Data Analytics</option>
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project and specific needs..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <SEOOptimizer />
    </div>
  );
}
