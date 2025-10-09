'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Building, 
  Globe, 
  Calendar,
  ArrowRight,
  Star,
  Award,
  Shield,
  Users,
  TrendingUp,
  Brain,
  Cloud,
  Zap,
  Target,
  BarChart,
  Code,
  Database,
  Settings,
  Smartphone,
  FileText,
  Palette,
  ShoppingCart,
  CreditCard,
  Video,
  Music,
  Download,
  Play,
  Monitor,
  Network,
  Key,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Layers,
  Activity
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
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
        budget: '',
        message: '',
        newsletter: false
      });
    }, 2000);
  };

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST',
    emergency: '24/7 Support Available'
  };

  const services = [
    { value: 'ai-services', label: 'AI Services' },
    { value: 'it-services', label: 'IT Services' },
    { value: 'micro-saas', label: 'Micro SAAS Tools' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const quickActions = [
    {
      title: 'Schedule a Call',
      description: 'Book a free consultation with our experts',
      icon: Phone,
      action: 'Schedule Call',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Get a Quote',
      description: 'Request a personalized quote for your project',
      icon: FileText,
      action: 'Request Quote',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Technical Support',
      description: 'Get help with your existing solutions',
      icon: Settings,
      action: 'Get Support',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Download Resources',
      description: 'Access our latest whitepapers and guides',
      icon: Download,
      action: 'Download',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to my inquiry?',
      answer: 'We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, our 24/7 support team is always available.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free 30-minute consultations to discuss your project requirements and provide initial recommendations.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'Please provide details about your project goals, current technology stack, timeline, and budget range. The more information you share, the better we can assist you.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we work with clients worldwide. We have experience with different time zones and can accommodate various communication preferences.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch for AI & IT Solutions</title>
        <meta name="description" content="Contact Zion Tech Group for AI services, IT solutions, and micro SAAS tools. Get a free consultation and discover how we can help your business grow." />
        <meta name="keywords" content="contact us, AI consultation, IT support, business consultation, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-white">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Quick Actions</h2>
            <p className="text-gray-300 text-lg">Choose the best way to get started</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{action.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{action.description}</p>
                <button className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}

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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project requirements, goals, and any specific questions you have..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-600 bg-slate-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Subscribe to our newsletter for the latest AI and technology insights
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-cyan-400 font-medium">{contactInfo.phone}</p>
                      <p className="text-gray-400 text-sm">{contactInfo.emergency}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-cyan-400 font-medium">{contactInfo.email}</p>
                      <p className="text-gray-400 text-sm">We respond within 2-4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <p className="text-cyan-400 font-medium">Middletown, DE</p>
                      <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-cyan-400 font-medium">{contactInfo.hours}</p>
                      <p className="text-gray-400 text-sm">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card">
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Why Choose Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">500+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">300% average ROI for our clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">24/7 expert support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Free consultation and project assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait - let's discuss your project and see how we can help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;