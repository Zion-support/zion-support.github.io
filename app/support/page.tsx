'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Shield,
  Zap,
  Brain,
  Cloud,
  Code,
  Smartphone,
  BarChart3,
  Settings,
  HelpCircle,
  Send,
  Calendar,
  MapPin
} from 'lucide-react';

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportCategories = [
    {
      id: 'general',
      title: 'General Support',
      description: 'General questions and account support',
      icon: <HelpCircle className="w-6 h-6 text-cyan-400" />,
      responseTime: '24 hours'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      icon: <Code className="w-6 h-6 text-green-400" />,
      responseTime: '12 hours'
    },
    {
      id: 'billing',
      title: 'Billing Support',
      description: 'Billing questions and payment issues',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      responseTime: '24 hours'
    },
    {
      id: 'emergency',
      title: 'Emergency Support',
      description: 'Critical issues requiring immediate attention',
      icon: <AlertCircle className="w-6 h-6 text-red-400" />,
      responseTime: '2 hours'
    }
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll get back to you',
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      contact: 'kleber@ziontechgroup.com',
      responseTime: 'Within 24 hours',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      contact: '+1 (302) 464-0950',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help through our chat system',
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      contact: 'Available on website',
      responseTime: 'Immediate',
      availability: '24/7'
    }
  ];

  const supportTopics = [
    {
      category: 'AI Services',
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      topics: [
        'AI Content Generator issues',
        'Chatbot configuration',
        'Analytics dashboard setup',
        'Custom AI model training'
      ]
    },
    {
      category: 'IT Services',
      icon: <Code className="w-5 h-5 text-green-400" />,
      topics: [
        'Cloud migration support',
        'Cybersecurity implementation',
        'Mobile app development',
        'DevOps configuration'
      ]
    },
    {
      category: '5G Solutions',
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      topics: [
        '5G network setup',
        'Edge computing configuration',
        'IoT device integration',
        'Performance optimization'
      ]
    },
    {
      category: 'Account & Billing',
      icon: <Users className="w-5 h-5 text-orange-400" />,
      topics: [
        'Account management',
        'Billing questions',
        'Payment issues',
        'Subscription changes'
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support for Zion Tech Group's AI and IT services. 24/7 support, documentation, and expert assistance for all your technology needs." />
        <meta name="keywords" content="technical support, customer service, help desk, Zion Tech Group, AI support, IT support" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Support{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Get the help you need with our comprehensive support services. 
            Our expert team is here to assist you 24/7.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {method.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{method.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{method.contact}</p>
                  <p className="text-sm text-gray-400">Response: {method.responseTime}</p>
                  <p className="text-sm text-gray-400">Available: {method.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Support Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500/20 border-cyan-500/50'
                    : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{category.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">{category.description}</p>
                <p className="text-cyan-400 text-sm">Response: {category.responseTime}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Support Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Support Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTopics.map((topic, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {topic.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{topic.category}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.topics.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Support Form */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Submit a Support Request</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Support Category *
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Support Hours */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Support Hours</h2>
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                  Regular Support
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  Emergency Support
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Critical Issues</span>
                    <span>24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact</span>
                    <span>+1 (302) 464-0950</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/help"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Help Center</h3>
              <p className="text-gray-300 text-sm">Browse our FAQ and help articles</p>
            </Link>
            
            <Link
              to="/docs"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">Complete guides and API references</p>
            </Link>
            
            <Link
              to="/status"
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center"
            >
              <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">System Status</h3>
              <p className="text-gray-300 text-sm">Check real-time system status</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              For urgent issues, call us directly or use our emergency support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call Now
                <Phone className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}