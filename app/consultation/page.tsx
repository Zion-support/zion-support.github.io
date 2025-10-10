'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Clock, Calendar, Phone, Mail } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
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
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-4 hours',
      price: '$500/hour',
      features: [
        'AI readiness assessment',
        'Technology roadmap',
        'ROI analysis',
        'Implementation plan'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Plan and execute your cloud migration strategy',
      duration: '4-8 hours',
      price: '$400/hour',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration timeline',
        'Cost optimization'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '6-12 hours',
      price: '$600/hour',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Risk analysis',
        'Security recommendations'
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with years of experience'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Schedule consultations at your convenience'
    },
    {
      icon: Users,
      title: 'Personalized Solutions',
      description: 'Tailored recommendations for your specific needs'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy" />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our team of experts to transform your business with cutting-edge AI and IT solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Star className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400">Consultations</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Experts</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400">Availability</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Consultation Types</h2>
              <p className="text-gray-300">Choose the consultation that best fits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{type.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-gray-300">We provide unmatched expertise and personalized service</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-strategy">AI Strategy Consultation</option>
                    <option value="cloud-migration">Cloud Migration Planning</option>
                    <option value="cybersecurity">Cybersecurity Audit</option>
                    <option value="general">General IT Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    placeholder="Tell us about your project and what you'd like to achieve"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div>+1 (302) 464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div>consultation@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-medium">Response Time</div>
                  <div>Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;