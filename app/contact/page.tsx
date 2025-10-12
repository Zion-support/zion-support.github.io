'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Message Sent - Zion Tech Group</title>
          <meta name="description" content="Thank you for contacting Zion Tech Group. We'll get back to you soon." />
        </Helmet>
        <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="tex t-center">
            <CheckCircle className="w-1 6 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="tex t-3xl font-bold text-white mb-4">Message Sent!</h1>
            <p className="tex t-gray-300 mb-8">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud infrastructure, cybersecurity, and custom software development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact zion tech group, AI consulting, IT services, cloud solutions, cybersecurity, software development" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="p y-20">
          <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="tex t-center">
              <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6">
                Get in <span className="tex t-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
              </h1>
              <p className="tex t-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss your project and bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="p y-16">
          <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gri d md:grid-cols-3 gap-8 mb-16">
              <div className="tex t-center">
                <div className="b g-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 tex t-white" />
                </div>
                <h3 className="tex t-xl font-semibold text-white mb-2">Phone</h3>
                <p className="tex t-gray-300 mb-2">+1 302 464 0950</p>
                <a href="tel:+13024640950" className="tex t-cyan-400 hover:text-cyan-300 transition-colors">
                  Call Now
                </a>
              </div>
              
              <div className="tex t-center">
                <div className="b g-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 tex t-white" />
                </div>
                <h3 className="tex t-xl font-semibold text-white mb-2">Email</h3>
                <p className="tex t-gray-300 mb-2">kleber@ziontechgroup.com</p>
                <a href="mailto:kleber@ziontechgroup.com" className="tex t-purple-400 hover:text-purple-300 transition-colors">
                  Send Email
                </a>
              </div>
              
              <div className="tex t-center">
                <div className="b g-gradient-to-r from-pink-500 to-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 tex t-white" />
                </div>
                <h3 className="tex t-xl font-semibold text-white mb-2">Location</h3>
                <p className="tex t-gray-300 mb-2">Middletown, DE</p>
                <p className="tex t-gray-400 text-sm">364 E Main St STE 1008</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="p y-16">
          <div className="ma x-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="b g-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="tex t-3xl font-bold text-white mb-8 text-center">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="spac e-y-6">
                <div className="gri d md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="bloc k text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="bloc k text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="gri d md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="bloc k text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="bloc k text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="bloc k text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="software-development">Software Development</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="bloc k text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-ful l px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <div className="tex t-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-ful l bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animat e-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 m r-2" />
                        Send Message
                      </>
                    )}
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

export default ContactPage;