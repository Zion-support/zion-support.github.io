'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, Users, Award, Phone, Mail, Calendar } from 'lucide-react';

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

  const services = [
    'AI Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Process Automation',
    'IT Infrastructure',
    'Mobile Development',
    'Other'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals with years of experience'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get a response within 24 hours of your consultation request'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation for your AI and IT needs. Free consultation with our certified professionals to help you choose the right solutions." />
        <meta name="keywords" content="IT consultation, AI consulting, technology consulting, free consultation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Free Consultation
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Get expert advice on your AI and IT needs. Our certified professionals are here to help you make the right technology decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Free</div>
                <div className="text-gray-300">Initial Consultation</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">24h</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Confidential</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our Consultation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Schedule Your Free Consultation
              </h2>
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                      placeholder="Enter your company name"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 cyber-glow"
                    placeholder="Describe your project requirements, challenges, and goals..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105 mx-auto"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Prefer to Talk Directly?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-cyan-400 font-medium text-lg mb-2">+1 (302) 464-0950</p>
                <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                <p className="text-gray-300">24/7 Emergency Support</p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-cyan-400 font-medium text-lg mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-300">Response within 2 hours</p>
                <p className="text-gray-300">Detailed consultation available</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait to get started. Schedule your free consultation today and discover how our AI and IT solutions can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cyber-glow"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;