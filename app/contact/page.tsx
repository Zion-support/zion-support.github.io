'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (302) 464-0950', 'Mon-Fri 9AM-6PM EST'],
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
    'IT Infrastructure',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Software Development',
    'AI Consulting',
    'Digital Transformation',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options'
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Deep knowledge in artificial intelligence and machine learning technologies'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level security and compliance with industry standards'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid development and deployment with proven methodologies'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of enterprise experience'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, project inquiries, and expert advice. Call (302) 464-0950."
        keywords={['contact us', 'get in touch', 'consultation', 'AI services', 'IT solutions', 'project inquiry']}
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
                Our expert team is ready to provide personalized consultation and solutions tailored to your needs.
              </p>
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
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
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                      ))}
                    </div>
                    {info.action && (
                      <a
                        href={info.action}
                        className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Contact Now →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="cyber-card p-8">
                  <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                    Send Us a Message
                  </h2>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-gray-300 mb-6">
                        Thank you for your message. We'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="cyber-button"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                            placeholder="Your full name"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                            placeholder="Your company name"
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
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Service Interest
                          </label>
                          <select
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
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
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
                          rows={6}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                          placeholder="Tell us about your project, goals, and how we can help..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full cyber-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                {/* Why Choose Us */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                    Why Choose Zion Tech Group?
                  </h2>
                  <div className="space-y-6">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="cyber-card p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <reason.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-gray-300">{reason.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cyber-card p-6 mt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Quick Response Guarantee</h3>
                    <p className="text-gray-300 mb-4">
                      We respond to all inquiries within 24 hours. For urgent matters, call us directly at:
                    </p>
                    <a
                      href="tel:+13024640950"
                      className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      (302) 464-0950
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Don't wait to transform your business. Contact us today for a free consultation and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
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