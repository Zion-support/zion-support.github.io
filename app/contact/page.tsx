'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
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
        message: '',
        budget: '',
        timeline: ''
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
      details: ['kleber@ziontechgroup.com', 'info@ziontechgroup.com'],
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709', 'United States'],
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      action: null
    }
  ];

  const services = [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Quantum Computing',
    'Autonomous Systems',
    'Digital Transformation',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'Custom Development'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your project and explore 
              how our cutting-edge solutions can drive your success.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">
                        {info.action && detailIndex === 0 ? (
                          <a href={info.action} className="hover:text-cyan-400 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-white font-semibold mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-white font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-white font-semibold mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-white font-semibold mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 neon-text">
                    Why Choose Zion Tech Group?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">50+ Successful Projects</h4>
                        <p className="text-gray-300 text-sm">Proven track record of delivering exceptional results</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                        <p className="text-gray-300 text-sm">World-class AI researchers and engineers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                        <p className="text-gray-300 text-sm">Round-the-clock assistance for your projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Fast Delivery</h4>
                        <p className="text-gray-300 text-sm">Agile development with rapid deployment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 neon-text">
                    Quick Response
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a>.
                  </p>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Free Consultation</h4>
                    <p className="text-gray-300 text-sm">
                      Schedule a free 30-minute consultation to discuss your project requirements 
                      and explore potential solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and let's discuss 
              how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;