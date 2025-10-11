'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Brain, Cloud, Shield, Code, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot with natural language processing',
      icon: Brain,
      category: 'AI Services',
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', 'Real-time Responses']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Explore our AI-powered business intelligence and analytics platform',
      icon: Brain,
      category: 'AI Services',
      features: ['Real-time Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Automated Insights']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'See our scalable cloud solutions and infrastructure management',
      icon: Cloud,
      category: 'IT Services',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Cost Optimization']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Discover our advanced security monitoring and threat detection',
      icon: Shield,
      category: 'IT Services',
      features: ['Threat Detection', 'Real-time Monitoring', 'Incident Response', 'Compliance Management']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Platform',
      description: 'Try our ready-to-use business applications and tools',
      icon: Zap,
      category: 'Micro SaaS',
      features: ['User Management', 'Payment Processing', 'API Integration', 'Custom Workflows']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Live Demos | Zion Tech Group - Try Our Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions with live demos. Try our chatbots, analytics, cloud infrastructure, and more." />
        <meta name="keywords" content="live demos, AI demos, IT demos, try before buy, product demonstrations, interactive demos" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Live Demos
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand with interactive demos and real-time demonstrations.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Choose a Demo
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Select from our range of interactive demonstrations to see our solutions in action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'bg-cyan-500/20 border-cyan-400/50'
                      : 'bg-white/5 border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                      <p className="text-sm text-cyan-400">{demo.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {demo.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo */}
            {selectedDemoData && (
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {selectedDemoData.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {selectedDemoData.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                      {selectedDemoData.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Start Demo
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <selectedDemoData.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-300">Interactive Demo Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Request a Custom Demo
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Need a personalized demonstration? Fill out the form below and our team will schedule a custom demo for your specific needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Request Custom Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DemoPage;