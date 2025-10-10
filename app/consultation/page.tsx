'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
    message: ''
  });

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'AI Strategy Consultation',
      description: 'Comprehensive assessment of your AI readiness and strategic planning',
      duration: '2-3 hours',
      price: '$500',
      features: [
        'AI readiness assessment',
        'Strategic roadmap development',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your technical infrastructure and AI integration',
      duration: '4-6 hours',
      price: '$1,200',
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
      name: 'Implementation Planning',
      description: 'Detailed planning for AI solution implementation and deployment',
      duration: '1-2 days',
      price: '$2,500',
      features: [
        'Project planning',
        'Resource allocation',
        'Risk assessment',
        'Timeline development',
        'Success metrics definition'
      ],
      popular: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Consultation - Zion Tech Group | AI & IT Consulting Services</title>
        <meta name="description" content="Schedule a consultation with our AI and IT experts. Get personalized advice and strategic guidance for your business." />
        <meta name="keywords" content="AI consultation, IT consulting, business strategy, technology advisory, expert consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Expert Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get personalized guidance from our AI and IT experts. Schedule a consultation to discuss 
            your specific needs and get strategic recommendations.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Consultation Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the consultation that best fits your needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700 hover:border-cyan-400/30'
                } ${type.popular ? 'ring-2 ring-purple-400/20' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`w-full py-2 px-4 rounded-lg text-center font-semibold transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {selectedType === type.id ? 'Selected' : 'Select This Type'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Tell us about your specific needs and goals..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prefer to Contact Us Directly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-300">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-300">consultation@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-white font-semibold">Schedule</div>
                <div className="text-gray-300">Book online anytime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;