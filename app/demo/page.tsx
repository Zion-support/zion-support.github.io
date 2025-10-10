'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Calendar, Clock, Users, CheckCircle, ArrowRight, Brain, Cloud, Shield, BarChart3, MessageSquare, Eye } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our advanced AI chatbot with natural language processing and multi-language support.',
      icon: MessageSquare,
      duration: '15 min',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'],
      videoUrl: '#',
      category: 'AI Services'
    },
    {
      id: 'analytics',
      title: 'Data Analytics Dashboard',
      description: 'See how our AI-powered analytics platform transforms your data into actionable insights.',
      icon: BarChart3,
      duration: '20 min',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Automated Reports', 'Custom Metrics'],
      videoUrl: '#',
      category: 'AI Services'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions and see how they can optimize your business operations.',
      icon: Cloud,
      duration: '25 min',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Cost Optimization'],
      videoUrl: '#',
      category: 'IT Services'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Discover how our AI vision solutions can automate quality control and security monitoring.',
      icon: Eye,
      duration: '18 min',
      features: ['Object Detection', 'Quality Control', 'Facial Recognition', 'Video Analytics'],
      videoUrl: '#',
      category: 'AI Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Learn about our comprehensive security solutions and threat detection capabilities.',
      icon: Shield,
      duration: '22 min',
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Alerts', 'Compliance Reports'],
      videoUrl: '#',
      category: 'IT Services'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'See how intelligent automation can streamline your business processes and reduce manual work.',
      icon: Brain,
      duration: '20 min',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'],
      videoUrl: '#',
      category: 'AI Services'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];

  const demoCategories = [
    { id: 'all', name: 'All Demos', count: demos.length },
    { id: 'ai', name: 'AI Services', count: demos.filter(d => d.category === 'AI Services').length },
    { id: 'it', name: 'IT Services', count: demos.filter(d => d.category === 'IT Services').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDemos = demos.filter(demo => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return demo.category === 'AI Services';
    if (selectedCategory === 'it') return demo.category === 'IT Services';
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Request Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Request a personalized demo of our AI and IT solutions. See how our technology can transform your business operations." />
        <meta name="keywords" content="demo, product demo, AI demo, IT demo, technology demonstration, business solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions through personalized demos tailored to your business needs.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Choose Your Demo</h2>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    {demoCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Demo List */}
                <div className="space-y-3">
                  {filteredDemos.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => setSelectedDemo(demo.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        selectedDemo === demo.id
                          ? 'bg-cyan-500/20 border border-cyan-500/30'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <demo.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{demo.title}</h3>
                          <p className="text-sm text-gray-400">{demo.duration}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Details */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <selectedDemoData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedDemoData.title}</h2>
                    <p className="text-cyan-400 font-medium">{selectedDemoData.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">{selectedDemoData.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Duration: {selectedDemoData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Live Q&A included</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">What You'll See</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedDemoData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Video Placeholder */}
                <div className="mb-8">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Interactive Demo</h3>
                      <p className="text-gray-400">Click to start the personalized demo</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo Now
                  </button>
                  <Link
                    to="/consultation"
                    className="flex-1 bg-white/10 text-white py-4 px-6 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experts are ready to show you how our solutions can specifically address your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;