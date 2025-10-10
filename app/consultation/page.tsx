'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, CheckCircle, ArrowRight, Users, Target, Lightbulb, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy & Implementation',
      description: 'Develop comprehensive AI strategies and implementation roadmaps',
      icon: Target,
      duration: '2-4 weeks',
      price: 'Starting at $5,000'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration strategies',
      icon: Shield,
      duration: '3-6 weeks',
      price: 'Starting at $8,000'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and recommendations',
      icon: Shield,
      duration: '1-2 weeks',
      price: 'Starting at $3,000'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting',
      icon: Lightbulb,
      duration: '4-8 weeks',
      price: 'Starting at $15,000'
    }
  ];

  const consultationTypes = [
    {
      type: 'Discovery Call',
      duration: '30 minutes',
      description: 'Initial discussion about your needs and challenges',
      price: 'Free',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      type: 'Strategy Session',
      duration: '2 hours',
      description: 'Deep dive into your business requirements and technology strategy',
      price: '$500',
      features: ['Detailed analysis', 'Custom recommendations', 'Implementation roadmap', 'Follow-up support']
    },
    {
      type: 'Full Consultation',
      duration: '1-2 days',
      description: 'Comprehensive consultation with detailed deliverables',
      price: 'Custom pricing',
      features: ['On-site visit', 'Detailed report', 'Implementation plan', 'Ongoing support']
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
    console.log('Form submitted:', { ...formData, selectedService });
  };

  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance from our expert team to transform your business with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We offer different types of consultations to meet your specific needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  index === 1 ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/50'
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{consultation.type}</h3>
                    <p className="text-cyan-400 text-lg font-semibold">{consultation.price}</p>
                    <p className="text-gray-400 text-sm">{consultation.duration}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{consultation.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We provide expert consultation across a wide range of technology domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-cyan-400 font-medium">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consultation</span>
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id} className="bg-slate-800">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project or specific needs..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;