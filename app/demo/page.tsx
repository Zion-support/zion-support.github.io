'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Brain, Cloud, Shield, BarChart3, MessageSquare, Eye, Zap, Target, Users, Settings, Code, Database, Smartphone, Globe, Headphones, Mail, Phone, Calendar, Clock, Star, Award, TrendingUp, Heart, FileText, Cpu, Package, Monitor, Wifi, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const demos = [
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Demo',
      description: 'Experience our advanced AI chatbot with natural language processing and sentiment analysis.',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Multi-language Support',
        'CRM Integration',
        'Real-time Learning'
      ],
      duration: '15 minutes',
      category: 'AI Services'
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Real-time Data Visualization',
        'Predictive Analytics',
        'Custom Dashboard Builder',
        'Advanced Data Connectors',
        'Automated Reporting'
      ],
      duration: '20 minutes',
      category: 'AI Services'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions including migration, optimization, and management.',
      icon: Cloud,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Cloud Architecture Design',
        'Multi-cloud Strategies',
        'Cost Optimization',
        'Disaster Recovery',
        '24/7 Monitoring'
      ],
      duration: '25 minutes',
      category: 'IT Services'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Learn about our comprehensive security services and threat protection capabilities.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessments',
        'Penetration Testing',
        'Security Monitoring',
        'Compliance Management'
      ],
      duration: '30 minutes',
      category: 'IT Services'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Discover how our computer vision solutions can automate quality control and analysis.',
      icon: Eye,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Object Detection',
        'Quality Control Automation',
        'Facial Recognition',
        'Video Analytics',
        'Real-time Processing'
      ],
      duration: '18 minutes',
      category: 'AI Services'
    },
    {
      id: 'workflow-automation',
      name: 'Workflow Automation',
      description: 'See how intelligent process automation can optimize your business workflows.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Process Mining',
        'Workflow Optimization',
        'Task Automation',
        'Exception Handling',
        'Performance Monitoring'
      ],
      duration: '22 minutes',
      category: 'AI Services'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Request Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Request a personalized demo of our AI and IT solutions. See how our technologies can transform your business with live demonstrations." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, product demonstration, live demo, technology showcase" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                See Our Solutions <span className="text-cyan-400">in Action</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience the power of our AI and IT solutions with personalized demonstrations 
                tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Demo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {demos.map((demo) => (
                  <div
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`cursor-pointer rounded-lg p-6 transition-all duration-300 ${
                      selectedDemo === demo.id
                        ? 'bg-cyan-500/20 border-2 border-cyan-500'
                        : 'bg-slate-800/50 hover:bg-slate-800/70 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mr-4`}>
                        <demo.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{demo.name}</h3>
                        <span className="text-sm text-cyan-400">{demo.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </span>
                      <span className="flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        Interactive Demo
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Demo Details */}
              {selectedDemoData && (
                <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedDemoData.color} rounded-lg flex items-center justify-center mr-6`}>
                        <selectedDemoData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedDemoData.name}</h3>
                        <p className="text-cyan-400 mb-2">{selectedDemoData.category}</p>
                        <p className="text-gray-300">{selectedDemoData.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-white">{selectedDemoData.duration}</div>
                      <div className="text-sm text-gray-400">Duration</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What You'll See:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Ready to See It Live?</h4>
                        <p className="text-gray-300">Schedule your personalized demo with our experts.</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Play className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">Interactive Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Request Your Demo</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below and our team will contact you to schedule a personalized demonstration 
                  of our solutions tailored to your business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-green-400">Thank you! We'll contact you soon to schedule your demo.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <span className="text-red-400">Sorry, there was an error submitting your request. Please try again.</span>
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Tell us about your specific needs or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          Request Demo
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">Why Choose Our Demos?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Personalized Experience</h4>
                        <p className="text-gray-300 text-sm">Demos tailored to your specific business needs and use cases.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Expert Guidance</h4>
                        <p className="text-gray-300 text-sm">Learn from our experienced team of AI and IT specialists.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Real-World Examples</h4>
                        <p className="text-gray-300 text-sm">See how our solutions work in real business scenarios.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">No Pressure</h4>
                        <p className="text-gray-300 text-sm">Educational demos with no sales pressure - just valuable insights.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">(302) 464-0950</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">Available Mon-Fri: 9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DemoPage;