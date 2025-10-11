'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Experience our advanced analytics platform with real-time data visualization and predictive insights.',
      duration: '10 min',
      category: 'AI Solutions',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Interactive Dashboards', 'Custom Reports'],
      image: '/demos/analytics-dashboard.jpg',
      icon: BarChart
    },
    {
      id: 2,
      title: 'Smart Chatbot Assistant',
      description: 'Interact with our intelligent chatbot that understands context and provides personalized responses.',
      duration: '5 min',
      category: 'AI Solutions',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
      image: '/demos/chatbot.jpg',
      icon: MessageCircle
    },
    {
      id: 3,
      title: 'Cloud Migration Tool',
      description: 'Watch our automated cloud migration process in action with zero-downtime deployment.',
      duration: '15 min',
      category: 'Cloud Services',
      features: ['Automated Migration', 'Zero Downtime', 'Data Validation', 'Rollback Capability'],
      image: '/demos/cloud-migration.jpg',
      icon: Cloud
    },
    {
      id: 4,
      title: 'Cybersecurity Monitor',
      description: 'See how our AI-powered security system detects and prevents threats in real-time.',
      duration: '8 min',
      category: 'Security',
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Response', 'Compliance Reporting'],
      image: '/demos/cybersecurity.jpg',
      icon: Shield
    },
    {
      id: 5,
      title: 'Mobile App Builder',
      description: 'Create and deploy mobile applications using our no-code platform with AI assistance.',
      duration: '12 min',
      category: 'Development',
      features: ['No-code Development', 'AI Assistance', 'Cross-platform', 'Instant Deployment'],
      image: '/demos/mobile-builder.jpg',
      icon: Smartphone
    },
    {
      id: 6,
      title: 'Data Visualization Studio',
      description: 'Transform complex data into beautiful, interactive visualizations with our AI-powered tools.',
      duration: '7 min',
      category: 'Analytics',
      features: ['Interactive Charts', 'AI Insights', 'Custom Themes', 'Export Options'],
      image: '/demos/data-viz.jpg',
      icon: Target
    }
  ];

  const categories = [
    { id: 'all', name: 'All Demos', icon: Play },
    { id: 'AI Solutions', name: 'AI Solutions', icon: Brain },
    { id: 'Cloud Services', name: 'Cloud Services', icon: Cloud },
    { id: 'Security', name: 'Security', icon: Shield },
    { id: 'Development', name: 'Development', icon: Code },
    { id: 'Analytics', name: 'Analytics', icon: BarChart }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDemos = demos.filter(demo => 
    selectedCategory === 'all' || demo.category === selectedCategory
  );

  const stats = [
    { number: '50+', label: 'Live Demos' },
    { number: '10K+', label: 'Demo Views' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive live demos. See our products in action and discover how they can transform your business." />
        <meta name="keywords" content="live demos, product demos, AI demos, IT solutions demos, interactive demonstrations" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Live Demos
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions through interactive demos. See our products in action and discover how they can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Start Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demos Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDemos.map((demo) => (
                <div key={demo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <demo.icon className="w-16 h-16 mx-auto mb-2" />
                      <p className="text-lg font-semibold">Live Demo</p>
                      <p className="text-cyan-100">Coming Soon</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-600 font-medium">{demo.category}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{demo.title}</h3>
                    <p className="text-gray-600 mb-4">{demo.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts and see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule Live Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default DemoPage;