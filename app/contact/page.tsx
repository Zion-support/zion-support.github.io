'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ContactPage: React.FC = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown, DE 19709',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Eastern Time Zone'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud Services',
    'Cybersecurity',
    'Custom Development',
    'Data Analytics',
    'Mobile Solutions',
    'IT Consulting',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Contact Zion Tech Group - Get in Touch"
        description="Contact Zion Tech Group for AI and IT solutions. Get in touch with our experts for consultation and support."
        keywords="contact, AI solutions, IT consulting, support, consultation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact our experts for a consultation 
            and discover how our AI and IT solutions can drive your success.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-purple-400 mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
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
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">15+ years of experience in AI and IT solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">500+ successful projects completed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Custom solutions tailored to your needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300 mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
                <p className="text-gray-300">
                  For urgent matters, please call us directly at{' '}
                  <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                    +1 (302) 464-0950
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;