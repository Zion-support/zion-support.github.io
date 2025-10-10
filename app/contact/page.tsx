<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Users, Award, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ContactPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Building, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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

  useEffect(() => {
    setIsLoaded(true);
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
<<<<<<< HEAD
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
=======
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
<<<<<<< HEAD
    }, 3000);
  };

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'contact_page_phone'
      });
    }
  }, []);

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'contact_page_email'
      });
    }
  }, []);

  const services = [
    'AI Analytics Platform',
    'AI Workflow Automation',
    'AI Customer Support',
    'AI Data Visualization',
    'AI Email Marketing',
    'AI Sales Automation',
    'Cloud Migration',
    'IT Consulting',
    'Cybersecurity Solutions',
    'Database Management',
    'System Integration',
    'Network Security',
    'Custom AI Development',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us for immediate assistance',
      href: 'tel:+13024640950',
      color: 'text-cyan-400'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime',
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'text-purple-400'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'text-pink-400'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: '24/7 Support',
      description: 'We\'re always here to help',
      href: '#',
      color: 'text-green-400'
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: '15+ years of experience in artificial intelligence and machine learning'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all our solutions'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with proven track records'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '300% average ROI and $50M+ in client savings'
=======
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import EnhancedContactForm from '../../src/components/EnhancedContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  User,
  Building,
  Globe,
  Shield,
  Brain,
  Zap,
  Cloud,
  Database,
  Code,
  BarChart,
  Users,
  Award,
  Target,
  Star,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Cpu,
  Database as DatabaseIcon,
  Smartphone,
  Lock;
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone;
      title: "Phone"
      value: "+1 (302) 464-0950",
      description: "Call us anytime",
      action: "tel:+13024640950",
    },
    {
      icon: Mail;
      title: "Email"
      value: "kleber@ziontechgroup.com",
      description: "Send us an email",
      action: "mailto:kleber@ziontechgroup.com",
    },
    {
      icon: MapPin;
      title: "Address",
      value: "364 E Main St STE 1008",
      description: "Middletown, DE 19709",
      action: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
    },
    {
      icon: Clock;
      title: "Business Hours"
      value: "Mon-Fri: 9AM-6PM EST",
      description: "We're here to help",
      action: null;
    }
  ];

  const offices = [
    {
      city: 'Middletown, DE',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      phone: '+1 (302) 464-0950',
      email: 'kleber@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM EST',
      timezone: 'Eastern Time',
    },
    {
      city: 'San Francisco, CA',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM PST',
      timezone: 'Pacific Time',
    },
    {
      city: 'London, UK',
      address: '456 Innovation Lane, London EC1A 4HD',
      phone: '+44 20 7946 0958',
      email: 'london@ziontechgroup.com',
      hours: 'Mon-Fri: 9AM-6PM GMT',
      timezone: 'Greenwich Mean Time',
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We can typically begin most projects within 1-2 weeks of contract signing. For urgent projects, we offer expedited onboarding.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across healthcare, finance, manufacturing, retail, education, and government sectors.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We offer scalable solutions for businesses of all sizes, from startups to enterprise organizations.'
>>>>>>> origin/main
    }
  ];

<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
      <Navigation />)
      <SEOOptimizer;)
        title="Contact Zion Tech Group - AI & IT Solutions")
=======
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
=======
<<<<<<< HEAD
    <>
      <SEOOptimizer
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and IT solutions. Call +1 (302) 464-0950 or email kleber@ziontechgroup.com. Located at 364 E Main St STE 1008, Middletown, DE 19709."
        keywords={['contact', 'AI solutions', 'IT services', 'consultation', 'support', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/contact"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Contact Us">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Let's Transform Your Business Together
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Ready to revolutionize your business with AI and IT solutions? Get in touch with our expert team 
              for a free consultation and discover how we can help you achieve unprecedented growth.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Get In Touch</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
=======
    }, 2000);
  };

  const services = [
    'AI Marketing',
    'AI Automation',
    'AI Healthcare',
    'AI Fintech',
    'AI Content Generation',
    'AI Data Analytics',
    'AI Cybersecurity',
    'AI Workflow Automation',
    'AI Customer Support',
    'AI Sales Automation',
    'AI Project Management',
    'IT Infrastructure',
    'IT Support',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Database Management',
    'Managed IT',
    'Quantum Computing',
    'Autonomous Systems',
    'Blockchain',
    'IoT Edge Computing',
    'Robotics',
    'Micro SaaS',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Free consultation, expert advice, and custom solutions for your business needs." />
        <meta name="keywords" content="contact zion tech group, AI consultation, IT support, free consultation, business technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Contact Us
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Get in touch with our experts for a free consultation and discover how we can help you achieve your goals.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="cyber-card hologram-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-400 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-400 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Sorry, there was an error sending your message. Please try again.</span>
                  </div>
                )}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
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
                      onChange={handleInputChange}
<<<<<<< HEAD
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
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
<<<<<<< HEAD
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
=======
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
<<<<<<< HEAD
                    className="cyber-button w-full justify-center inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
=======
                    className="w-full cyber-button inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                        Sending...
                      </>
                    ) : (
                      <>
<<<<<<< HEAD
                        <Send className="w-4 h-4 mr-2" />
=======
                        <Send className="w-5 h-5 mr-2" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
                        Send Message
                      </>
                    )}
                  </button>
                </form>
<<<<<<< HEAD
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.title}
                      href={method.href}
                      onClick={method.title === 'Phone' ? handlePhoneClick : method.title === 'Email' ? handleEmailClick : undefined}
                      className={`flex items-start space-x-4 p-4 cyber-card hover:scale-105 transition-all duration-300 ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                        <p className={`text-lg font-medium ${method.color} mb-1`}>{method.value}</p>
                        <p className="text-gray-300 text-sm">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 neon-text">Why Choose Us?</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={reason.title} className={`flex items-start space-x-3 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: `${(index + 4) * 100}ms` }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{reason.title}</h4>
                        <p className="text-gray-300 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait to transform your business. Contact us today for a free consultation 
                and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  onClick={handleEmailClick}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
      <Navigation />
      <SEOOptimizer
        title="Contact Zion Tech Group - AI & IT Solutions"
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        description="Get in touch with our AI and IT experts. Contact us for consultations, project inquiries, and enterprise solutions. Call (302) 464-0950 or email kleber@ziontechgroup.com"
        keywords="contact us, AI consulting, IT services, enterprise solutions, consultation"
<<<<<<< HEAD
      >{/* Hero Section */}</SEOOptimizer>
      </SEOOptimizer><section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8"></div>
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Get In Touch</span><h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">Let's Build the</h1>
              <span className="block holographic-text cyber-text">Future Together</span><p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">Ready to transform your business with AI and cutting-edge technology?</p>
              Our experts are here to help you achieve your goals.</p>
=======
      />
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Get In Touch</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Let's Build the;
              <span className="block holographic-text cyber-text">Future Together</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI and cutting-edge technology?
              Our experts are here to help you achieve your goals.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>

            <div className="flex flex-wrap justify-center gap-6"></div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Contact Methods */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{contactMethods.map((method, index) => (</div>
=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,
            {contactMethods.map((method, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="quantum-card p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
=======
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{contactMethods.map((method, index) => (</div>
              <div key={index} className="quantum-card p-6 text-center space-y-4"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <method.icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{method.title}</h3>
                <div className="space-y-2"></div>
                  <div className="text-cyan-400 font-medium">{method.value}</div><div className="text-gray-300 text-sm">{method.description}</div>
                  {method.action && (
                    <a;
                      href={method.action}
<<<<<<< HEAD
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4 mr-1" >{method.action.startsWith('tel:') ? 'Call Now' :</ArrowRight>
                       method.action.startsWith('mailto:') ? 'Send Email' : 'View on Map'}</ArrowRight>
                    </ArrowRight>
=======
                      className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors text-sm",
                    >,
                      <ArrowRight className="w-4 h-4 mr-1" />,
                      {method.action.startsWith('tel:') ? 'Call Now' :,
                       method.action.startsWith('mailto:') ? 'Send Email' : 'View on Map'}
                    </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
        <div className="container mx-auto px-4"></section>
          <EnhancedContactForm />
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Global Offices<p className="text-lg text-gray-300 max-w-3xl mx-auto">We're here to serve you wherever you are in the world<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{offices.map((office, index) => (</div>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Global Offices;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're here to serve you wherever you are in the world;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {offices.map((office, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Global Offices</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We're here to serve you wherever you are in the world</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{offices.map((office, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Mail className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{office.hours}</span><div className="text-cyan-400 text-sm font-medium">{office.timezone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions<p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our services and process</p>
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our services and process</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
<<<<<<< HEAD
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Frequently Asked Questions;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common questions about our services and process;
            </p>
          </div>,
          <div className="max-w-4xl mx-auto">,
            <div className="space-y-6">,
              {faqs.map((faq, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
=======
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
>>>>>>> origin/main
  );
};

export default ContactPage;
=======
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">(302) 464-0950</p>
                        <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                        <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Address</h4>
                        <p className="text-gray-300">364 E Main St STE 1008 Middletown, DE 19709</p>
                        <p className="text-sm text-gray-400">Serving clients worldwide</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                        <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                        <p className="text-sm text-gray-400">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">20+ years of experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">300% average ROI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support available</span>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate assistance? Call us now for urgent IT support or AI consultation.
                  </p>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center w-full"
                    style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Common questions about our services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-300">Most projects can begin within 1-2 weeks after initial consultation and contract signing. Emergency support is available immediately.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300">Yes, we provide comprehensive ongoing support and maintenance for all our implementations, including 24/7 monitoring and emergency response.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What industries do you serve?</h3>
                <p className="text-gray-300">We serve clients across all industries including healthcare, finance, manufacturing, retail, and technology sectors.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Is the consultation really free?</h3>
                <p className="text-gray-300">Yes, our initial consultation is completely free with no obligations. We'll assess your needs and provide recommendations at no cost.</p>
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
