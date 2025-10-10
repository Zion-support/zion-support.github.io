'use client';
import React from 'react';
'use client';
;
import React, { useState, useCallback } from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import {;
  Phone,;
  Mail,;
  MapPin,;
  Clock,;
  Send,;
  CheckCircle;}
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
;
const ContactPage: React.FC = () => {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    company: '',;
phone: '',;
    service: '',;
    budget: '',;
    timeline: '',;
    message: '';}
;</HTMLInputElement>
  const [isSubmitting, setIsSubmitting] = useState(false);</HTMLInputElement>
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;}
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Simulate form submission;
;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
;
    try {;
      // Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        budget: '',;
        timeline: '',;
        message: '';}
      setSubmitStatus('error');}
      setIsSubmitting(false);}
  const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ];
  const contactInfo = [
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST'
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office'
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
  ];</HTMLInputElement>
  return (</HTMLInputElement>
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6"/>
              Get in</h1>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.
div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
              )}
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
              )}
              <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *</label>
                    <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input;
                        type="text"
                        name="name"
                        valu, e={formDat, a.nam, e}
                        onChang, e={handleInputChang, e}
                        required;
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *</label>
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input;
                        type="email"
                        name="email"
                        valu, e={formDat, a.emai, l}
                        onChang, e={handleInputChang, e}
                        required;
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company;</label>
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input;
                        type="text"
                        name="company"
                        valu, e={formDat, a.compan, y}
                        onChang, e={handleInputChang, e}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your company"
                      />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number;</label>
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input;
                        type="tel"
                        name="phone"
                        valu, e={formDat, a.phon, e}
                        onChang, e={handleInputChang, e}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest;</label>
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select;
                      name="service"
                      valu, e={formDat, a.servic, e}
                      onChang, e={handleInputChang, e}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500">
                      <option value="">Select a service</option>
                        <option, key={servic, e} valu, e={servic, e}>
;
  const services = [;
    'AI Solutions',;
    'Cloud Computing',;
    'Mobile App Development',;
    'Web Development',;
    'Data Analytics',;
    'Cybersecurity',;
    'DevOps',;
    'Consulting',;
    'Other';
  ];
;
  const contactInfo = [;
      icon: Phone,;
      title: 'Phone',;
      details: '+1 (302) 464-0950',;
      description: 'Mon-Fri 9AM-6PM EST';}
      icon: Mail,;
      title: 'Email',;
      details: 'kleber@ziontechgroup.com',;
      description: 'We respond within 24 hours';}
      icon: MapPin,;
      title: 'Address',;
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',;
      description: 'Visit our office';}
      icon: Clock,;
      title: 'Business Hours',;
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',;
      description: 'Eastern Time';}
  ];
;</option>
  return (;</option>
      <Helmet>;</Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>;
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." />;
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />;
div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>;
        <div className="container mx-auto px-4"></div>;
          <div className="text-center mb-16"></div>;
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">;</h1>
              Get in;</h1>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;</span>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
              Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.;
div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>;
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>;
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>;
              )}
;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>;
                  <span className="text-red-400">Failed to send message. Please try again.</span>;
              )}
;
              <form, onSubmit={handleSubmi, t} classNam, e="spac, e-y-6">;</for, m>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
                  <div></div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                      Full Name *;</label>
                    <div className="relative"></div>;
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="text";
                        name="name";
                        valu, e={formDat, a.nam, e}
                        onChang, e={handleInputChang, e}
                        required;
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";
                        placeholder="Your full name";
                      />;
                  <div></div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                      Email Address *;</label>
                    <div className="relative"></div>;
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="email";
                        name="email";
                        valu, e={formDat, a.emai, l}
                        onChang, e={handleInputChang, e}
                        required;
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";
                        placeholder="your@email.com";
                      />;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
                  <div></div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                      Company;</label>
                    <div className="relative"></div>;
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="text";
                        name="company";
                        valu, e={formDat, a.compan, y}
                        onChang, e={handleInputChang, e}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";
                        placeholder="Your company";
                      />;
                  <div></div>;
                    <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                      Phone Number;</label>
                    <div className="relative"></div>;
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                      <input;
                        type="tel";
                        name="phone";
                        valu, e={formDat, a.phon, e}
                        onChang, e={handleInputChang, e}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500";
                        placeholder="+1 (555) 123-4567";
                      />;
                <div></div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                    Service Interest;</label>
                  <div className="relative"></div>;
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                    <select;
                      name="service";
                      valu, e={formDat, a.servic, e}
                      onChang, e={handleInputChang, e}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500";
                      <option value="">Select a service</option>;
                        <option, key={servic, e} valu, e={servic, e}>;</optio, n>
                      ))}</option>
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *</label>
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea;
                      name="message"
                <div></div>;
                  <label className="block text-sm font-medium text-gray-300 mb-2">;</label>
                    Message *;</label>
                  <div className="relative"></div>;
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />;
                    <textarea;
                      name="message";
                      valu, e={formDat, a.messag, e}
                      onChang, e={handleInputChang, e}
                      required;
                      row, s={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                <button;
                  type="submit"
                  disable, d={isSubmittin, g}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                    <React.Fragment></React.Fragment>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                  ) : (
                    <React.Fragment></React.Fragment>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                  )}
            <div className="space-y-8"></div>
              <div></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-lg text-gray-300 mb-8"></p>
                  We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
              <div className="space-y-8"></div>
                <div></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8"></p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Phone className="w-6 h-6 text-white" />
                    <div></div>
h3 className="text-lg font-semibold text-white mb-1"></h3>
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none";
                      placeholder="Tell us about your project, goals, or any questions you have...";
                    />;
                <button;
                  type="submit";
                  disable, d={isSubmittin, g}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2";
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>;
                      <span>Sending...</span>;
                  ) : (;
                      <Send className="w-5 h-5" />;
                      <span>Send Message</span>;
                  )}
            <div className="space-y-8"></div>;
              <div></div>;
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>;
                <p className="text-lg text-gray-300 mb-8">;</p>
                  We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.;
              <div className="space-y-8"></div>;
                <div></div>;
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>;
                  <p className="text-gray-300 mb-8">;</p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.;
                <div className="space-y-6"></div>;
                  <div className="flex items-center"></div>;
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>;
                      <Phone className="w-6 h-6 text-white" />;
                    <div></div>;
h3 className="text-lg font-semibold text-white mb-1">;</h3>
                      <p className="text-cyan-400 font-medium mb-1">;</p>
                      <p className="text-gray-300 text-sm">;</p>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Mail className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <MapPin className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Clock className="w-6 h-6 text-white" />
                    <div></div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
  );
export default ContactPage;
                  <div className="flex items-center"></div>;
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4"></div>;
                      <Mail className="w-6 h-6 text-white" />;
                    <div></div>;
                      <h3 className="text-lg font-semibold text-white">Email</h3>;
                      <p className="text-gray-300">info@ziontechgroup.com</p>;
                  <div className="flex items-center"></div>;
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4"></div>;
                      <MapPin className="w-6 h-6 text-white" />;
                    <div></div>;
                      <h3 className="text-lg font-semibold text-white">Address</h3>;
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>;
                  <div className="flex items-center"></div>;
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4"></div>;
                      <Clock className="w-6 h-6 text-white" />;
                    <div></div>;
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>;
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>;
  );
;
export default ContactPage;
