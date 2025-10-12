'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
=======
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, User, Building, RotateCcw, RotateCw } from 'lucide-react';

const ContactPage: React.FC = () => {
'use client';
import { useState } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1443

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
      setSubmitStatus('success');
<<<<<<< HEAD
      setIsSubmitting(false);
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const services = [
    'AI Analytics & Business Intelligence',
    'AI Workflow Automation',
    'AI Chatbot & Conversational AI',
    'AI-Powered Cybersecurity',
    'Cloud Infrastructure & Migration',
    'Cybersecurity Solutions',
    'Custom Web Development',
    'Blockchain & IoT Development',
    'Zion Analytics Pro',
    'Zion AI Video Editor',
    'Zion AI Code Reviewer',
    'Zion AI Fraud Detector',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch</title>
<<<<<<< HEAD
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch with our experts to discuss your project requirements and discover how we can help transform your business." />
        <meta name="keywords" content="contact zion tech group, ai solutions contact, it services contact, business consultation, project inquiry" />
=======
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud infrastructure, cybersecurity, and custom software development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact us, get in touch, AI solutions, cloud computing, cybersecurity, software development, IT services" />
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for a free consultation and project discussion." />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT services contact, business inquiry" />
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Let's discuss your project and discover how we can help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project requirements, goals, and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
<<<<<<< HEAD
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 mb-8">
                    Ready to start your project? Get in touch with our team of experts. 
                    We're here to help you transform your business with innovative AI and IT solutions.
=======

                  {submitStatus === 'success' && (
                    <div className="flex items-center justify-center p-4 bg-green-900/20 border border-green-500 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center justify-center p-4 bg-red-900/20 border border-red-500 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                      <span className="text-red-400">Failed to send message. Please try again.</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Us?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-300">
                        Our team of experienced professionals brings deep expertise in AI, cloud computing, and cybersecurity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300">
                        Round-the-clock support to ensure your systems run smoothly and your business stays operational.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                      <p className="text-gray-300">
                        Enterprise-grade security measures to protect your data and ensure compliance with industry standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                      <p className="text-gray-300">
                        Agile development processes that deliver results quickly without compromising on quality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Phone className="h-5 w-5 mr-3" />
                      +1 302 464 0950
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      kleber@ziontechgroup.com
                    </a>
                    <div className="flex items-start text-gray-300">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <div>364 E Main St STE 1008</div>
                        <div>Middletown DE 19709, USA</div>
                      </div>
                    </div>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                  </p>
                </div>

                <div className="space-y-6">
<<<<<<< HEAD
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
=======
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+1 302 464 0950</p>
                      <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400" />
=======
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
=======
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">364 E Main St STE 1008</p>
                      <p className="text-gray-300">Middletown, DE 19709</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                      <p className="text-sm text-gray-400">United States</p>
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Why Choose Us?</h3>
=======
                <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Expert AI and IT professionals
                    </li>
                    <li className="flex items-center">
<<<<<<< HEAD
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Proven track record of success
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Custom solutions for your business
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Custom solutions tailored to your needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Expert team with proven track record
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
                      24/7 support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ContactPage;
=======
export default ContactPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
