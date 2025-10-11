'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Target, Award } from 'lucide-react';

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
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });

  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'ROI analysis and recommendations',
        'Implementation timeline',
        'Follow-up support included'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'Implementation strategy',
        'Training and support planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Implement AI solutions to automate processes and gain insights'
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Empower your team with the skills they need to succeed'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Learn industry best practices and proven methodologies'
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
    // In a real app, this would submit the form data
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleBookConsultation = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  };

  return (
    <>
      <Helmet>
        <title>Consultation - Expert IT & AI Consulting | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI implementation, cloud migration, and digital transformation. Book a consultation with our specialists." />
        <meta name="keywords" content="consultation, IT consulting, AI consulting, cloud migration, digital transformation, expert advice" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized guidance from our experts on AI implementation, cloud migration, and digital transformation. 
              Book a consultation to accelerate your business growth.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {type.popular && (
                    <div className="flex items-center mb-4">
                      <Award className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{type.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleBookConsultation(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                    }`}
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What We Can Help You With
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Get in Touch
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Implementation</option>
                    <option value="cloud">Cloud Migration</option>
                    <option value="strategy">IT Strategy</option>
                    <option value="other">Other</option>
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
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">consultation@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
                <p className="text-gray-300">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;