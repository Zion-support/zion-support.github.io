'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, User, MessageSquare, Calendar, Headphones, Globe, Award, Shield, Zap, Brain, Cloud, Code, Target, BarChart, MessageSquare as MessageSquareIcon, FileText, Headphones as HeadphonesIcon, DollarSign, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal'
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
        urgency: 'normal'
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Call us anytime for immediate assistance',
      action: 'Call Now',
      href: 'tel:+13024640950',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '364 E Main St STE 1008',
      city: 'Middletown, DE 19709',
      description: 'Visit our headquarters for in-person meetings',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Our team is available during business hours',
      action: 'Schedule Call',
      href: '#',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20'
    }
  ];

  const services = [
    'AI Business Intelligence',
    'AI Marketing Automation',
    'AI Customer Support',
    'AI Predictive Analytics',
    'Cloud Infrastructure',
    'Cybersecurity Solutions',
    'DevOps & CI/CD',
    'Database Management',
    'Micro SAAS Solutions',
    'Custom AI Development',
    'IT Consulting',
    'Digital Transformation'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K - $1M',
    'Over $1M',
    'Not sure yet'
  ];

  const urgencyLevels = [
    { value: 'urgent', label: 'Urgent (Within 1 week)', color: 'text-red-400' },
    { value: 'high', label: 'High (Within 1 month)', color: 'text-orange-400' },
    { value: 'normal', label: 'Normal (Within 3 months)', color: 'text-yellow-400' },
    { value: 'low', label: 'Low (Planning phase)', color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us via phone, email, or visit our office in Middletown, DE." />
        <meta name="keywords" content="contact us, get in touch, AI consultation, IT support, business inquiry" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI and IT solutions? Get in touch with our experts today 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative py-20 px-4 neural-network-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 ${method.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{method.details}</div>
                {method.city && (
                  <div className="text-gray-300 text-sm mb-2">{method.city}</div>
                )}
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <a
                  href={method.href}
                  className="cyber-button inline-flex items-center px-4 py-2 text-sm"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="relative py-20 px-4 particle-field">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Send Us a Message
          </h2>
          
          <div className="quantum-card p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">Sorry, there was an error sending your message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Urgency</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {urgencyLevels.map((urgency, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={urgency.value}
                        checked={formData.urgency === urgency.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-cyan-400 bg-slate-800 border-cyan-400 focus:ring-cyan-400"
                      />
                      <span className={`text-sm ${urgency.color}`}>{urgency.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-20 px-4 cyber-grid">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="quantum-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">How quickly can you start my project?</h3>
              <p className="text-gray-300">
                Most projects can begin within 1-2 weeks of contract signing. For urgent projects, 
                we can often start within 3-5 business days with our rapid deployment team.
              </p>
            </div>
            
            <div className="quantum-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer ongoing support?</h3>
              <p className="text-gray-300">
                Yes, we provide comprehensive ongoing support including 24/7 monitoring, 
                regular updates, maintenance, and optimization services for all our solutions.
              </p>
            </div>
            
            <div className="quantum-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">What's your ROI guarantee?</h3>
              <p className="text-gray-300">
                We guarantee a minimum 300% return on investment within 6 months of implementation, 
                or we'll refund your investment. This is backed by our track record of successful deployments.
              </p>
            </div>
            
            <div className="quantum-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do you work with small businesses?</h3>
              <p className="text-gray-300">
                Absolutely! Our micro SAAS solutions are specifically designed for small and medium businesses, 
                with pricing starting as low as $99/month and no long-term contracts required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your business. Contact us today for a free consultation and discover 
            how our AI and IT solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}