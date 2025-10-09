'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Brain, MessageSquare, Calendar, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain & Web3',
    'IoT & Edge Computing',
    'Business Intelligence',
    'Robotics Solutions',
    'Other'
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/services" className="text-white hover:text-cyan-400 transition-colors">
                  Services
                </a>
                <a href="/about" className="text-white hover:text-cyan-400 transition-colors">
                  About
                </a>
                <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">
                  Blog
                </a>
                <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
                  Case Studies
                </a>
                <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
                <a href="/contact" className="text-cyan-400 font-semibold">
                  Contact
                </a>
                
                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">+1 302 464 0950</span>
                  </a>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Get in touch with our experts today.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help you transform your business with cutting-edge AI and IT solutions. 
                  Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Phone</h3>
                      <p className="text-gray-300">+1 302 464 0950</p>
                      <a 
                        href="tel:+13024640950" 
                        className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Email</h3>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                      >
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Address</h3>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                      <a 
                        href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 font-medium transition-colors"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+13024640950"
                    className="flex items-center space-x-3 text-white hover:text-cyan-200 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-white hover:text-cyan-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send an Email</span>
                  </a>
                  <a 
                    href="/services"
                    className="flex items-center space-x-3 text-white hover:text-cyan-200 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>View Our Services</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for your message. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="/about" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><a href="/contact" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
                  <li><a href="/pricing" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/ai-services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">AI Services</a></li>
                  <li><a href="/it-services" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">IT Services</a></li>
                  <li><a href="/micro-saas" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                  <li><a href="/specialized" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Specialized Solutions</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="/support" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Support Center</a></li>
                  <li><a href="/docs" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a></li>
                  <li><a href="/api-docs" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">API Reference</a></li>
                  <li><a href="/status" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">System Status</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                  <li><a href="/cookies" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                  <li><a href="/gdpr" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">GDPR Compliance</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2024 Zion Tech Group. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
                  <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
                  <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Cookies</a>
                  <a href="/gdpr" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">GDPR</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;