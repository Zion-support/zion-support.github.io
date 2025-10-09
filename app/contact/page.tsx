'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Call (302) 464-0950 or email kleber@ziontechgroup.com for expert consultation." />
        <meta name="keywords" content="contact, AI consulting, IT support, business consultation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your Company Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>AI Services</option>
                      <option>IT Services</option>
                      <option>Micro SAAS Solutions</option>
                      <option>Consulting</option>
                      <option>Custom Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {contactInfo.phone}
                        </a>
                        <p className="text-gray-300 text-sm">Call us anytime</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {contactInfo.email}
                        </a>
                        <p className="text-gray-300 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Address</h4>
                        <p className="text-gray-300">{contactInfo.address}</p>
                        <p className="text-gray-300 text-sm">Middletown, Delaware</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                        <p className="text-gray-300">{contactInfo.hours}</p>
                        <p className="text-gray-300 text-sm">Emergency support available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                  
                  <div className="space-y-4">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                    
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center border border-white/20"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                    
                    <a
                      href="/pricing"
                      className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center border border-white/20"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss your requirements and create a custom solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Consultation
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
