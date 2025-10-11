<<<<<<< HEAD
'use client';
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment',
        'Team training recommendations'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false
    },
    {
      id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false
    }
  ];
  const process = [
    {
      step: '1',
    },
    {
      step: '2',
      title: 'Strategy Development',
    },
    {
      step: '3',
      title: 'Implementation Plan',
    },
    {
      step: '4',
      title: 'Ongoing Support',
    }
  ]
>>>>>>> main

const ConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free <span className="text-cyan-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert advice on how to implement AI and IT solutions for your business.
          </p>
        </div>
<<<<<<< HEAD
      </div>
=======
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedType === type.id
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-white">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Consultation Details */}
      {selectedConsultation && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {selectedConsultation.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

      )}

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering exceptional consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
=======

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
=======
'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const ConsultationPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
<<<<<<< HEAD
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const consultationTypes: ConsultationType[] = [
    {
      id: 'discovery',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: [
        'Needs assessment',
        'Solution overview',
        'Next steps planning',
        'Q&A session'
      ],
      popular: false
    },
    {
      id: 'strategy',
      name: 'Strategy Session',
      description: 'Comprehensive planning session for your AI and IT transformation',
      duration: '2 hours',
      price: '$500',
      features: [
        'Detailed requirements analysis',
        'Technology roadmap',
        'Implementation timeline',
        'Resource planning',
        'Risk assessment',
        'Follow-up support'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Deep Dive',
      description: 'In-depth technical consultation with our expert team',
      duration: '4 hours',
      price: '$1,200',
      features: [
        'Technical architecture review',
        'Integration planning',
        'Security assessment',
        'Performance optimization',
        'Scalability analysis',
        'Implementation guidance'
      ],
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise Consultation',
      description: 'Comprehensive consultation for large-scale implementations',
      duration: 'Full day',
      price: 'Custom',
      features: [
        'Executive briefing',
        'Multi-department planning',
        'Change management strategy',
        'ROI analysis',
        'Vendor evaluation',
        'Ongoing partnership'
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
    console.log('Form submitted:', { selectedType, ...formData });
    // You can add actual form submission logic here
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'consultation@ziontechgroup.com',
      description: 'Send us your questions'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Office',
      value: '123 Tech Street, San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Schedule a consultation with our AI and IT experts. Get personalized advice and solutions for your business needs." />
        <meta name="keywords" content="AI consultation, IT consulting, technology consulting, business transformation, expert advice" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get personalized advice from our AI and IT experts to transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation-types"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Consultation Options
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Us Directly
              </a>
            </div>
=======
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Consultation form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on how AI and IT solutions can transform your business. Schedule a free consultation with our team.
            </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Consultation Types */}
      <section id="consultation-types" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all ${
                    selectedType === type.id
                      ? 'ring-2 ring-blue-500 scale-105'
                      : 'hover:shadow-xl'
                  } ${type.popular ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{type.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      selectedType === type.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedType === type.id ? 'Selected' : 'Select'}
                  </button>
=======
      {/* Consultation Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your full name"
                    required
                  />
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Describe your project and what you hope to achieve..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Schedule Your Consultation
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                    placeholder="Enter your full name"
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
                    placeholder="Enter your email"
                  />
>>>>>>> origin/main
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                    placeholder="Enter your company name"
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
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your project, challenges, and what you hope to achieve..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {info.value}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
=======
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">What You'll Get</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Free Assessment</h3>
                      <p className="text-gray-300">Comprehensive analysis of your current systems and processes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Custom Recommendations</h3>
                      <p className="text-gray-300">Tailored solutions based on your specific business needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Implementation Plan</h3>
                      <p className="text-gray-300">Step-by-step roadmap for implementing recommended solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">ROI Projections</h3>
                      <p className="text-gray-300">Expected returns and timeline for your investment</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Expert team with 10+ years experience
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Proven track record with 500+ projects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    No obligation, completely free
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Quick response within 24 hours
                  </li>
                </ul>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation today and take the first step towards AI-powered success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation-types"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Book Now
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
>>>>>>> main
    </div>
  );
};
<<<<<<< HEAD

export default ConsultationPage;
=======
=======
      <Footer />
    </div>
  )
}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

export default ConsultationPage
>>>>>>> origin/main
