'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
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
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs',
      duration: '2-4 hours',
      price: 'Starting at $500',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      title: 'IT Infrastructure Review',
      description: 'Evaluate your current IT setup and recommend improvements',
      duration: '4-6 hours',
      price: 'Starting at $800',
      features: ['Security audit', 'Performance analysis', 'Scalability assessment', 'Cost optimization']
    },
    {
      title: 'Digital Transformation Planning',
      description: 'Create a roadmap for your digital transformation journey',
      duration: '6-8 hours',
      price: 'Starting at $1,200',
      features: ['Current state analysis', 'Future state design', 'Change management plan', 'Technology selection']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get advice from certified professionals with years of experience'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Receive detailed recommendations within 48 hours of consultation'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work directly with our team to implement recommended solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, IT infrastructure, and digital transformation. Professional guidance to accelerate your business growth." />
        <meta name="keywords" content="IT consulting, AI strategy, digital transformation, technology consulting, business strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get professional guidance to accelerate your digital transformation and maximize the value of your technology investments.
            </p>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
              <p className="text-gray-300">Choose the consultation that best fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{consultation.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {consultation.duration}
                    </div>
                    <div className="text-cyan-400 font-semibold">
                      {consultation.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-gray-300">Get the expertise and guidance you need to succeed</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy Consultation</option>
                      <option value="it-infrastructure">IT Infrastructure Review</option>
                      <option value="digital-transformation">Digital Transformation Planning</option>
                      <option value="custom">Custom Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="over-10k">Over $10,000</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project and what you hope to achieve..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-4 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-300">Prefer to contact us directly? We're here to help.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">consultation@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-cyan-400 font-medium">Available on website</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;