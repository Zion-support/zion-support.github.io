'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Calendar, Users, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
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
      details: '+1 (302) 464-0950',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re here to help'
    }
  ];

  const services = [
    'AI Services',
    'IT Services',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Custom Development',
    'Consulting',
    'Other'
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Get expert advice on your project at no cost'
    },
    {
      icon: Calendar,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your information is always protected'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Ready to Transform Your Business?
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can help your business achieve unprecedented growth. 
              We're here to answer your questions and provide expert guidance.
            </p>
          </section>

          {/* Contact Info Cards */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <info.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6 neon-text">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          placeholder="your@email.com"
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
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
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        placeholder="Tell us about your project or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-slate-900 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Initial Response</h4>
                        <p className="text-gray-300 text-sm">We'll respond within 24 hours to discuss your needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-slate-900 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Free Consultation</h4>
                        <p className="text-gray-300 text-sm">Schedule a detailed consultation with our experts.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-slate-900 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Custom Proposal</h4>
                        <p className="text-gray-300 text-sm">Receive a tailored solution for your business.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">Emergency Support</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate assistance? Our emergency support team is available 24/7 for critical issues.
                  </p>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;