<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
<<<<<<< HEAD
'use client;

import React, { useState, useCallback } from 'react;

import { Helmet } from 'react-helmet-async;

import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react;

import Navigation from '../components/Navigation;

import Footer from '../components/Footer;

;

<<<<<<< HEAD
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({
    name: '',    email: ',
    company: ',
    phone: ',
    service: ',
    message: ';)
})const [isSubmitting, setIsSubmitting] = useState(false);

const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(idle);

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;;

    setFormData(prev => ({
=======
const $1Page: React.FC = () => {}
  const [formData, setFormData] = useState({}
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '';)
})
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {}
    setFormData(prev => ({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ...prev,
      [e.target.name]: e.target.value;)
})))
}, []);
<<<<<<< HEAD

const handleSubmit = useCallback(async (e: React.FormEvent) => {    setFormData(prev => ({;
=======
const handleSubmit = useCallback(async (e: React.FormEvent) => {}
    setFormData(prev => ({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ...prev,
      [e.target.name]: e.target.value]
    });)]
    }, []);

<<<<<<< HEAD
  const handleSubmit = useCallback(async (e: React.FormEvent) => {;
  const handleSubmit = useCallback (async (e: React.FormEvent) => {;
    e.preventDefault();    setIsSubmitting(true);
=======
'use client';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your AI and IT needs.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📞</span>
    phone: '',
    service: '',
    message: ''
  });
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus(success);

      setFormData({
        name: ',
        email: ',
        company: ',
        phone: ',
        service: ',
message: ']
    });]
    } catch (error) {
      setSubmitStatus('error)]
=======
  const handleSubmit = useCallback(async (e: React.FormEvent) => {}
  const handleSubmit = useCallback (async (e: React.FormEvent) => {}
    e.preventDefault();
    setIsSubmitting(true);
    
    try {}
      /
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({}
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
message: '']
    });]
    } catch (error) {
      setSubmitStatus('error')]}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    } finally {
      setIsSubmitting(false)]}
    }

        message: ')
      });

    } catch (error) {
<<<<<<< HEAD
      setSubmitStatus('error);

    } finally {
      setIsSubmitting(false);

=======
      setSubmitStatus('error');}
    } finally {
      setIsSubmitting(false);}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

  }, []);

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com 
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support 
      <

      <Navigation 
      
<<<<<<< HEAD
      {/* Hero Section *
      <section className="relative py-20 px-4 overflow-hidden>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }}

        <div className="relative max-w-7xl mx-auto text-center>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight>
=======
      {/* Hero Section *}
      <section className="relative py-20 px-4 overflow-hidden">)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent>

            <
          <
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed>
  }, []);
>>>>>>> origin/cursor/ad-creation-and-management-f267

export default function Contact() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for advanced AI and IT solutions" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
=======

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900></div>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com />
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support />
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact, AI consulting, IT support, technology consultation" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      </Helmet>
      
<<<<<<< HEAD
      {/* Hero Section */}

      <section className="relative py-20 px-4 overflow-hidden></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }} />
        <div className="relative max-w-7xl mx-auto text-center></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight></h1>
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent></span>
              Touch
            </span>
>>>>>>> origin/cursor/ad-creation-and-management-f267
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for advanced AI and IT solutions
          </p>
        </div>

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our contact page is under development. Please check back later for updates.
            </p>
=======

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Touch
              </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
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
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
=======
<<<<<<< HEAD
      {/* Contact Form and Info *
      <section className="py-20 px-4>
        <div className="max-w-7xl mx-auto>
          <div className=grid grid-cols-1 l,
    g:grid-cols-2 gap-12>
            {/* Contact Form *
            <div className=bg-white/5 backdrop-blur-sm border border-white
              <h2 className="text-3xl font-bold text-white mb-6>Send us a message<
              
              {submitStatus === 'success' && (<div className=mb-6 p-4 bg-green-500/20 border border-green-500
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 
                  <span className="text-green-400>Message sent successfully!<
                <)
              )}

              {submitStatus === 'error' && (<div className=mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400>Failed to send message. Please try again.<
=======
      {/* Contact Form and Info *}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-12">
            {/* Contact Form *}
            <div className="bg-white/5 backdrop-blur-sm border border-white
              <h2 className="text-3xl font-bold text-white mb-6">Send us a message<
              
              {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-500/20 border border-green-500}
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" 
                  <span className="text-green-400">Message sent successfully!<
                <)
              )}

              {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-500/20 border border-red-500}
                  <span className="text-red-400">Failed to send message. Please try again.<
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <)
              )}

              <form onSubmit={handleSubmit} className="space-y-6></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6></div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2></label>
                      Full Name *
                    <
                    <input
                      type="text
                      id="name
                      name="name
                      value = { formData.name };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *                    <
                    <input
                      type="email
                      id="email
                      name="email
                      value = { formData.email };

                      onChange = { handleChange };

                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focus:border-transparent
                    
                  <
                <

                <div className=grid grid-cols-1 m,
    d:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2>
                      Company Name                    <
                    <input
                      type="text
                      id="company
                      name="company
                      value = { formData.company };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number                    <
                    <input
                      type="tel
                      id="phone
                      name="phone
                      value = { formData.phone };

                      onChange = { handleChange };

                      className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                    
                  <
                <

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2></label>
                    Service Interest
                  <
                  <select
                    id="service
                    name="service
                    value = { formData.service };

                    onChange = { handleChange };

                    className=w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent
                  >
                    <option value=">Select a service<
                    <option value="ai-solutions>AI Solutions<
                    <option value="it-services>IT Services<
                    <option value="cloud-migration>Cloud Migration<
                    <option value="cybersecurity>Cybersecurity<
                    <option value="digital-transformation>Digital Transformation<
                  <
                <
<<<<<<< HEAD
                  and well get back to you within 24 hours.
=======
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Get in touch with our experts today.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-800/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <
                  <textarea
                    id="message"
                    name="message"
                    value = { formData.message };
                    onChange = { handleChange };
                    rows = { 5 };

                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                    placeholder="Tell us about your project..."
                  
                <

                <button
                  type="submit"
                  disabled = { isSubmitting };
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 disabled:opacity-50 disable,
    d:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (<>}
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
                      Sending...
                    <)
                  ) : (<>
                      
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch<
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <
              <

              <div className="space-y-6>
                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Phone<
                    <p className="text-gray-300>+1-302-464-0950<
                    <p className="text-sm text-gray-400>Mon-Fri 9AM-6PM EST<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Email<
                    <p className="text-gray-300>kleber@ziontechgroup.com<
                    <p className="text-sm text-gray-400">Well respond within 24 hours<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Office<
                    <p className="text-gray-300>364 E Main St STE 1008<
                    <p className="text-gray-300>Middletown, DE 19709<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Business Hours<
                    <p className="text-gray-300>Monday - Friday: 9:00 AM - 6:00 PM<
                    <p className="text-gray-300>Saturday: 10:00 AM - 4:00 PM<
                    <p className="text-gray-300>Sunda,
    y: Closed<
                  <
                <
              <
            <
          <
        <
      <

      <Footer 
    <
  );

)]
    };

};

export default ContactPage;}
=======
                  <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-300">info@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-300">Global Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Why choose us?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Expert AI and IT professionals</li>
                    <li>• Proven track record of success</li>
                    <li>• 24/7 support and maintenance</li>
                    <li>• Custom solutions for your needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...

                  ) : (
                    <>
  </>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message

                  </div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1-302-464-0950</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                  </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✉️</span>
                </div>
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📍</span>
                </div>
                <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-gray-300">364 E Main St STE 1008</p>
                    <p className="text-gray-300">Middletown, DE 19709</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
      </div>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  );
};

export default ContactPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
