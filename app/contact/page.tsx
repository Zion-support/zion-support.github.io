'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe } from 'lucide-react';

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
    // Handle form submission here
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
      details: ['+1 (302) 464-0950', 'Mon-Fri: 9AM-6PM EST'],
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['kleber@ziontechgroup.com', 'support@ziontechgroup.com'],
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      action: null
    }
  ];

  const services = [
    'AI Services',
    'AI Marketing',
    'AI Automation',
    'AI Healthcare',
    'AI Fintech',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'IT Consulting',
    'Custom Development',
    'Other'
  ];

  return (
    <>
      <SEOOptimizer
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for free consultation, project inquiries, or support. We're here to help transform your business."
        keywords={['contact us', 'AI consulting', 'IT support', 'free consultation', 'project inquiry', 'support']}
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Ready to Transform Your Business?
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can help your business achieve unprecedented growth and efficiency. 
                We're here to answer your questions and provide expert guidance.
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300 text-sm mb-2">{detail}</p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action}
                        className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                      >
                        Contact Now
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="cyber-card p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 neon-text">
                    Send Us a Message
                  </h2>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">We'll get back to you within 24 hours.</p>
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
                          placeholder="Tell us about your project or how we can help you..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full cyber-button flex items-center justify-center space-x-2 py-4"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Quick Contact Options */}
                <div className="space-y-8">
                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Quick Contact</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+13024640950"
                        className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">Call Now</div>
                          <div className="text-gray-400 text-sm">+1 (302) 464-0950</div>
                        </div>
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">Email Us</div>
                          <div className="text-gray-400 text-sm">kleber@ziontechgroup.com</div>
                        </div>
                      </a>
                      <a
                        href="/consultation"
                        className="flex items-center space-x-3 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                      >
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-white font-medium">Schedule Meeting</div>
                          <div className="text-gray-400 text-sm">Free consultation</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="cyber-card p-6">
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">Why Choose Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Free initial consultation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">24/7 support available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Custom solutions for your needs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300 text-sm">Proven track record</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
