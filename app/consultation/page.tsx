'use client';
import React from 'react';
'use client';

<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'AI Strategy Consultation',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive AI strategy assessment and roadmap development',
      features: [
        'Current state analysis',
        'AI readiness assessment',
        'Strategic roadmap',
        'Implementation timeline',
        'ROI projections'
      ]
    },
    {
      title: 'Cloud Migration Planning',
      duration: '3 hours',
      price: '$750',
      description: 'Detailed cloud migration strategy and architecture planning',
      features: [
        'Infrastructure assessment',
        'Migration strategy',
        'Cost optimization',
        'Security planning',
        'Timeline development'
      ]
    },
    {
      title: 'Cybersecurity Audit',
      duration: '4 hours',
      price: '$1,000',
      description: 'Comprehensive security assessment and improvement recommendations',
      features: [
        'Security vulnerability scan',
        'Compliance assessment',
        'Risk analysis',
        'Remediation plan',
        'Ongoing monitoring setup'
      ]
    }
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'AI Solutions',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Other'
>>>>>>> origin/main
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get personalized advice from our experienced team of AI and IT experts.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Consultation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{consultation.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{consultation.price}</span>
                    <span className="text-gray-300 ml-2">({consultation.duration})</span>
                  </div>
                  <p className="text-gray-300 mb-6">{consultation.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Hours</h3>
                  <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
=======
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Free Consultation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert advice on how AI and technology can transform your business. Schedule a free consultation with our specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Describe your current challenges and what you hope to achieve..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Consultation?</h2>
                  <p className="text-gray-300 mb-8">
                    Our expert consultants will analyze your current setup and provide personalized recommendations for your business transformation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Analysis</h3>
                      <p className="text-gray-300">Get insights from certified AI and IT professionals with years of experience.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">No Obligation</h3>
                      <p className="text-gray-300">Free consultation with no commitment required. We're here to help you make informed decisions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Personalized Solutions</h3>
                      <p className="text-gray-300">Tailored recommendations based on your specific business needs and goals.</p>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                      +1 (555) 123-4567
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                      info@ziontechgroup.com
                    </div>
                  </div>
>>>>>>> origin/main
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ConsultationPage;
=======
export default ConsultationPage;
>>>>>>> origin/main
