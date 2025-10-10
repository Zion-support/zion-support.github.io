'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Brain, Cloud, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    demo: '',
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
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        demo: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      
      description: 'Experience our advanced AI chatbot with natural language processing and sentiment analysis',
      icon: Brain,
      features: ['Natural conversations', 'Multi-language support', 'Sentiment analysis', 'CRM integration'],
      duration: '15 minutes',
      category: 'AI Services'
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      
description: 'See how our AI-powered analytics can transform your data into actionable insights',
      icon: BarChart,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom visualizations', 'Automated reporting'],
      duration: '20 minutes',
      category: 'AI Services'

    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      
      description: 'Explore our cloud solutions including AWS, Azure, and GCP with migration services',
      icon: Cloud,
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', 'Auto-scaling'],
      duration: '25 minutes',
      category: 'IT Services'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      
      description: 'Discover how AI can automate and optimize your business processes',
      icon: Zap,
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling'],
      duration: '18 minutes',
      category: 'AI Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      
      description: 'Learn about our comprehensive security services and threat detection',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', '24/7 monitoring'],
      duration: '22 minutes',
      category: 'IT Services'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Tools',
      
      description: 'Try our ready-to-use business tools with AI and automation capabilities',
      icon: Users,
      features: ['Ready-to-use tools', 'AI integration', 'Custom workflows', 'Scalable solutions'],
      duration: '30 minutes',
      category: 'Micro SaaS'
    }
  ];

  const benefits = [
    'See our solutions in action',
    'Get personalized recommendations',
    'Ask questions to our experts',
    'Understand implementation process',
    'See ROI calculations for your business'
  ];


  return (
    <>
      <Helmet>
        <title>Request Demo - Zion Tech Group</title>
        <meta name="description" content="Request a personalized demo of our AI and IT solutions. See how our technology can transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request a Demo
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See our AI and IT solutions in action with a personalized demo tailored to your business needs. 
                Our experts will show you exactly how our technology can transform your operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo Options */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white mb-6">Available Demos</h2>
                <div className="space-y-4">
                  {demos.map((demo) => (
                    <div
                      key={demo.id}
                      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedDemo === demo.id
                          ? 'bg-cyan-500/20 border-2 border-cyan-500'
                          : 'bg-slate-800/50 hover:bg-slate-800/70 border-2 border-transparent'
                      }`}
                      onClick={() => setSelectedDemo(demo.id)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <demo.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                            <span className="text-sm text-cyan-400 font-semibold">{demo.duration}</span>
                          </div>
                          <p className="text-gray-300 mb-3">{demo.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{demo.category}</span>
                            <div className="flex space-x-2">
                              {demo.features.slice(0, 2).map((feature, index) => (
                                <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">What You'll Get</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Demo Request Form */}
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6">
                    Thank you! We'll contact you within 24 hours to schedule your demo.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
                    Sorry, there was an error submitting your request. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo" className="block text-sm font-medium text-gray-300 mb-2">
                      Demo Type
                    </label>
                    <select
                      id="demo"
                      name="demo"
                      value={formData.demo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a demo</option>
                      {demos.map((demo) => (
                        <option key={demo.id} value={demo.id}>
                          {demo.title} ({demo.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Request Demo</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Clock className="w-5 h-5" />
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DemoPage;