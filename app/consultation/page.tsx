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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: ''
  });

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive AI strategy development and implementation planning',
      duration: '2-3 hours',
      price: '$500',
      features: [
        'Current state assessment',
        'AI opportunity identification',
        'Implementation roadmap',
        'ROI projections',
        'Technology recommendations'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your technical infrastructure and AI integration',
      duration: '4-6 hours',
      price: '$800',
      features: [
        'Infrastructure analysis',
        'Security assessment',
        'Integration planning',
        'Performance optimization',
        'Scalability recommendations'
      ],
      popular: false
    },
    {
      id: 'implementation',
      name: 'Implementation Support',
      description: 'Hands-on support for AI solution implementation and deployment',
      duration: '1-2 weeks',
      price: '$2,500',
      features: [
        'Project management',
        'Development support',
        'Testing and validation',
        'Training and documentation',
        'Go-live support'
      ],
      popular: false
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
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert AI and IT consultation from Zion Tech Group. Strategic planning, technical reviews, and implementation support." />
        <meta name="keywords" content="AI consultation, IT consulting, strategy planning, technical review, implementation support" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert Consultation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Get personalized guidance from our AI and IT experts to transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white rounded-lg shadow-sm border-2 p-8 hover:shadow-md transition-shadow cursor-pointer ${
                    selectedType === type.id ? 'border-blue-500' : 'border-gray-200'
                  } ${type.popular ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {type.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {type.duration}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {type.price}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {selectedType === type.id ? 'Selected' : 'Select This Option'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type *
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a consultation type</option>
                    {consultationTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name} - {type.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your current challenges, goals, and what you hope to achieve with our consultation..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Prefer to speak with us directly? Use any of these contact methods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                    <Phone className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-100 rounded-full text-green-600">
                    <Mail className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-2">consultation@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">Response within 2 hours</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-100 rounded-full text-purple-600">
                    <MapPin className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-2">123 Tech Street</p>
                <p className="text-sm text-gray-500">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;