'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react';

export default function ContactPage() {
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      setSubmitStatus('success');
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
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (302) 464-0950',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'kleber@ziontechgroup.com',
      description: 'Get a detailed response within 24 hours',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '364 E Main St STE 1008, Middletown, DE 19709',
      description: 'Schedule an in-person meeting',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown,+DE+19709'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      details: 'Book a free consultation',
      description: '30-minute strategy session with our team',
      action: 'Book Now',
      href: '#consultation'
    }
  ];

  const services = [
    'AI Services',
    'IT Infrastructure',
    'Cybersecurity',
    'Cloud Migration',
    'Digital Transformation',
    'Custom Development',
    'AI Automation',
    'Data Analytics',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'Not sure'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Contact Zion Tech Group - Get Your Free AI & IT Consultation"
        description="Ready to transform your business? Contact Zion Tech Group for a free consultation. Call (302) 464-0950 or email kleber@ziontechgroup.com. Expert AI and IT solutions."
        keywords="contact zion tech group, AI consultation, IT services contact, free consultation, business transformation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Let's <span className="text-cyan-400">Transform</span> Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to revolutionize your operations with AI and cutting-edge technology? 
              Get a free consultation with our experts and discover how we can help you achieve 300% ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">300% ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Get In Touch</h2>
            <p className="text-xl text-gray-300">Choose your preferred way to connect with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card hover:from-cyan-600/20 hover:to-purple-600/20 transition-all duration-300 group"
              >
                <method.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{method.details}</p>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300">
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">Request a Free Consultation</h2>
              <p className="text-xl text-gray-300">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 cyber-card">
              {submitStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Thank you for your message!</h3>
                      <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button inline-flex items-center px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300">We deliver results that transform businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 cyber-card">
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Expertise</h3>
              <p className="text-gray-300">15+ years of experience in AI and machine learning solutions</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 cyber-card">
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all our solutions</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 cyber-card">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI with measurable business impact</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 cyber-card">
              <Clock className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock expert support and monitoring</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-xl p-6 cyber-card">
              <Users className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">100+ Clients</h3>
              <p className="text-gray-300">Trusted by businesses worldwide for their digital transformation</p>
            </div>
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-xl p-6 cyber-card">
              <Award className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Award Winning</h3>
              <p className="text-gray-300">Recognized for excellence in AI and technology innovation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}