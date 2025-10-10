'use client';
import React, { useState, useCallback } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone Mail MapPin Clock Send CheckCircle AlertCircle } from "lucide-react";
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      setSubmitStatus('error');
      setIsSubmitting(false);

  const services = [
    'AI Solutions',
    'Cloud Computing',
    'Cybersecurity',
    'Software Development',
    'IT Consulting',
    'Other'
  ];
  return (</HTMLInputElement>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact, AI solutions, IT consulting, support, consultation" />
      
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"/>
            Get In</h1>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
              Touch;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Ready to transform your business with AI and technology? Let's discuss your project and explore how we can help you achieve your goals.

      <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center"></div>
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              )}
              
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center"></div>
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400">Failed to send message. Please try again.</span>
              )}

              <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Call us at (302) 464-0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact, AI solutions, IT services, consultation, support, phone, email" />
      
      <Navigation />
      
      <main className="pt-20"></main>
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Ready to transform your business? Get in touch with our expert team;
              to discuss your AI and IT needs.

        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              <div></div>
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="space-y-8"></div>
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                      <Phone className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300 mb-1">+1 (302) 464-0950</p>
                      <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                  
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                      <Mail className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300 mb-1">kleber@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">24/7 Support Available</p>
                  
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                      <MapPin className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300 mb-1">364 E Main St STE 1008</p>
                      <p className="text-gray-300 mb-1">Middletown, DE 19709</p>
                      <p className="text-sm text-gray-400">United States</p>
                  
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                      <Clock className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300 mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-gray-400">24/7 Emergency Support Available</p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <p className="text-green-400">Message sent successfully! We'll get back to you soon.</p>
                )}

                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"></div>
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <p className="text-red-400">Failed to send message. Please try again.</p>
                )}

                <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *</label>
                      <input;
                        type="text"
                        id="name"
                        name="name"
                        valu, e={formDat, a.nam, e}
                        onChang, e={handleChang, e}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *</label>
                      <input;
                        type="email"
                        id="email"
                        name="email"
                        valu, e={formDat, a.emai, l}
                        onChang, e={handleChang, e}
                        required;
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number</label>
                      <input;
                        type="tel"
                        id="phone"
                        name="phone"
                        valu, e={formDat, a.phon, e}
                        onChang, e={handleChang, e}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company</label>
                      <input;
                        type="text"
                        id="company"
                        name="company"
                        valu, e={formDat, a.compan, y}
                        onChang, e={handleChang, e}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />

                  <div></div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *</label>
                    <input;
                      type="text"
                      id="name"
                      name="name"
                      valu, e={formDat, a.nam, e}
                      onChang, e={handleInputChang, e}
                      required;
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Your full name"
                    />
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *</label>
                    <input;
                      type="email"
                      id="email"
                      name="email"
                      valu, e={formDat, a.emai, l}
                      onChang, e={handleInputChang, e}
                      required;
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="your@email.com"
                    />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company</label>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                      valu, e={formDat, a.compan, y}
                      onChang, e={handleInputChang, e}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Your company name"
                    />
                  <div></div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number</label>
                    <input;
                      type="tel"
                      id="phone"
                      name="phone"
                      valu, e={formDat, a.phon, e}
                      onChang, e={handleInputChang, e}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="+1 (555) 123-4567"
                    />

                <div></div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest</label>
                  <select;
                    id="service"
                    name="service"
                    valu, e={formDat, a.servic, e}
                    onChang, e={handleInputChang, e}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    <option value="">Select a service</option>
                      <option, key={servic, e} valu, e={servic, e}>
                    ))}</option>
                <div></div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *</label>
                  <textarea;
                    id="message"
                    name="message"
                    valu, e={formDat, a.messag, e}
                    onChang, e={handleInputChang, e}
                    required;
                    row, s={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Tell us about your project..."
                  />

                <button;
                  type="submit"
                  disable, d={isSubmittin, g}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                  ) : (
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                  )}

            <div className="space-y-8"></div>
              <div></div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6"></div>
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center"></div>
                      <Phone className="w-6 h-6 text-cyan-400" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (302) 464-0950</p>
                      <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>

                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center"></div>
                      <Mail className="w-6 h-6 text-cyan-400" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>

                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center"></div>
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300"></p>
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709;
                  <div className="flex items-start space-x-4"></div>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center"></div>
                      <Clock className="w-6 h-6 text-cyan-400" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20"></div>
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3"></ul>
                  <li className="flex items-center text-gray-300"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Expert AI and IT professionals;
                  <li className="flex items-center text-gray-300"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 customer support;
                  <li className="flex items-center text-gray-300"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Customized solutions for your business;
                  <li className="flex items-center text-gray-300"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Proven track record of success;
                    <select;
                      id="service"
                      name="service"
                      valu, e={formDat, a.servic, e}
                      onChang, e={handleChang, e}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>

                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *</label>
                    <textarea;
                      id="message"
                      name="message"
                      valu, e={formDat, a.messag, e}
                      onChang, e={handleChang, e}
                      required;
                      row, s={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project or requirements"
                    />

                  <button;
                    type="submit"
                    disable, d={isSubmittin, g}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Sending...
                    ) : (
                        <Send className="w-5 h-5 mr-2" />
                        Send Message;
                    )}
      
      <Footer />
  );

export default ContactPage;