'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, User, Building, Globe, Shield, Brain, Zap, Cloud, Database, Code, BarChart, Users, Award, Target, Star, TrendingUp, ArrowRight } from 'lucide-react';

export default function ContactPage() {
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
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with AI and cutting-edge technology? 
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-900/50 rounded-2xl p-8 cyber-card">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Send Us a Message</h2>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        placeholder="(555) 123-4567"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
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
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 neon-text">Contact Information</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    We're here to help you succeed. Reach out to us through any of these channels 
                    and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-xl cyber-card">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-cyan-400 font-medium text-lg">(302) 464-0950</p>
                      <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-xl cyber-card">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-purple-400 font-medium text-lg">kleber@ziontechgroup.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-xl cyber-card">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-green-400 font-medium text-lg">Middletown, DE</p>
                      <p className="text-gray-400 text-sm">364 E Main St STE 1008, 19709</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span className="text-white">Call Now</span>
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Send Email</span>
                    </a>
                    <a
                      href="/consultation"
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span className="text-white">Schedule Consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're your strategic partner in digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Track Record</h3>
                <p className="text-gray-300">50+ successful projects with 300% average ROI for our clients.</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">ISO 27001 certified with enterprise-grade security measures.</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl cyber-card">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">100+ happy clients served by our expert engineers and strategists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}