'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Mail, Phone, MapPin, Calendar, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const services = [
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'custom-development', name: 'Custom Development', icon: Code },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'it-consulting', name: 'IT Consulting', icon: Users }
  ];

  const budgetRanges = [
    { id: 'under-10k', name: 'Under $10,000' },
    { id: '10k-50k', name: '$10,000 - $50,000' },
    { id: '50k-100k', name: '$50,000 - $100,000' },
    { id: '100k-500k', name: '$100,000 - $500,000' },
    { id: 'over-500k', name: 'Over $500,000' }
  ];

  const timelines = [
    { id: 'asap', name: 'ASAP' },
    { id: '1-month', name: 'Within 1 month' },
    { id: '3-months', name: 'Within 3 months' },
    { id: '6-months', name: 'Within 6 months' },
    { id: 'flexible', name: 'Flexible' }
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Consultation Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Thank you for your consultation request. We'll get back to you within 24 hours." />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
          <main className="container mx-auto px-4 py-16 pt-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6">
                Thank You!
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Your consultation request has been submitted successfully. 
                Our team will review your requirements and get back to you within 24 hours.
              </p>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">What happens next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-300">We'll review your requirements and prepare a customized proposal</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-300">Our expert will contact you to schedule a detailed consultation call</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-300">We'll present our solution and discuss next steps</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Back to Home
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert AI & IT Advice</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discuss your project requirements and discover how we can help transform your business." />
        <meta name="keywords" content="free consultation, AI consultation, IT consultation, expert advice, project planning" />
        <meta property="og:title" content="Free Consultation - Zion Tech Group" />
        <meta property="og:description" content="Get expert AI and IT consultation for your business" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Free Consultation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Get Expert AI & IT Advice
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Schedule a free consultation with our AI and IT experts. Discuss your project requirements 
              and discover how we can help transform your business with cutting-edge technology.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Request Your Free Consultation</h2>
              
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
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                          {range.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.id} value={timeline.id}>
                          {timeline.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Consultation?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Expert Analysis</h4>
                      <p className="text-gray-300 text-sm">Get insights from our team of AI and IT experts with 10+ years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Customized Solutions</h4>
                      <p className="text-gray-300 text-sm">Tailored recommendations based on your specific business needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">No Obligation</h4>
                      <p className="text-gray-300 text-sm">Free consultation with no strings attached. We're here to help, not sell</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;
