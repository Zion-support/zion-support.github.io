<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, 
  AlertCircle, User, Building, FileText, Calendar, Zap, Shield, Globe, Award, 
  Star, TrendingUp, Users, Brain, Cpu, Rocket, Target, Lightbulb, Monitor, 
  Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, 
  Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, 
  Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, 
  Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, 
  Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, 
  Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, 
  Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, 
  Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, 
  Kiss, Tongue, Package, DollarSign
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
<<<<<<< HEAD
    phone: '',
    service: '',
    message: ''
  });
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
=======
  const [isSubmitted, setIsSubmitted] = useState(false);

=======
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
<<<<<<< HEAD
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, USA'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Support',
      description: 'We\'re always here to help'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Custom Development',
    'Data Analytics',
    'Mobile Development',
    'Web Development',
    'IT Support',
    'Consultation',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, cloud infrastructure, cybersecurity, and custom software development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact us, get in touch, AI solutions, cloud computing, cybersecurity, software development, IT services" />
=======
    }, 3000);
  };

  const services = [
    'AI Content Generation',
    'AI Chatbot Builder',
    'AI Analytics Dashboard',
    'AI Email Assistant',
    'AI Voice Assistant',
    'AI Automation',
    'Cloud Migration',
    'Cybersecurity Solutions',
    'DevOps & CI/CD',
    'Data Analytics',
    'Mobile Development',
    'Web Development',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Thank You - Zion Tech Group</title>
          <meta name="description" content="Thank you for contacting Zion Tech Group. We'll get back to you soon." />
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </>
    );
  }

=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for a free consultation and project discussion." />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT services contact, business inquiry" />
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Contact
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Ready to transform your business? Get in touch with our team of experts 
                to discuss your project and discover how we can help you succeed.
=======
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business with AI and IT solutions? Let's discuss your project and how we can help you achieve your goals.
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Info Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-purple-400 font-medium mb-2">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

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
=======
        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    We're here to help you transform your business with cutting-edge AI and IT solutions. 
                    Reach out to us for a free consultation and let's discuss your project.
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for free consultation." />
        <meta name="keywords" content="contact, consultation, AI services, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch with our experts for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company"
                      />
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
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-services">AI Services</option>
                        <option value="it-services">IT Services</option>
                        <option value="micro-saas">Micro SAAS</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                    >
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Ready to transform your business with cutting-edge AI and IT solutions? 
                    Our team of experts is here to help you succeed.
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
<<<<<<< HEAD
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+1-302-464-0950</p>
                      <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
=======
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        (302) 464-0950
                      </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
<<<<<<< HEAD
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                      <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
=======
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
<<<<<<< HEAD
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">364 E Main St STE 1008</p>
                      <p className="text-gray-300">Middletown, DE 19709</p>
                      <p className="text-sm text-gray-400">United States</p>
=======
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
=======
                <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why choose us?</h3>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Free consultation and project assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
                      Custom solutions tailored to your needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Expert team with proven track record
=======
                      Expert team with years of experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      Custom solutions tailored to your needs
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      24/7 support and maintenance
                    </li>
                  </ul>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
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
<<<<<<< HEAD
=======
export default ContactPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f66c
