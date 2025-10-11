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
      image: '/demos/security-monitor.jpg',
      icon: Shield
    }
  ];

  const stats = [
    { number: '50+', label: 'Live Demos', icon: Play },
    { number: '10K+', label: 'Demo Views', icon: Users },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '24/7', label: 'Available', icon: Clock }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Interactive Experience',
      description: 'Hands-on demos that let you explore our solutions in real-time.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'See how our AI solutions can transform your business processes.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Experience enterprise-grade security and reliability in action.'
    },
    {
      icon: Target,
      title: 'Customizable',
      description: 'Demos tailored to your specific industry and use cases.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and technology solutions through interactive live demos. See how our solutions can transform your business." />
        <meta name="keywords" content="demos, live demos, AI solutions, technology demonstrations, interactive demos" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Demos</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and technology solutions through interactive demos. See how our solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Demo
                  <Play className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our collection of interactive demos to explore different aspects of our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(index)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                    selectedDemo === index
                      ? 'border-cyan-400/50 bg-slate-800/50 shadow-lg shadow-cyan-400/20'
                      : 'border-white/10 bg-slate-800/30 hover:border-cyan-400/30'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{demo.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </span>
                    <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {demo.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo Display */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-gray-300">Demo Preview</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {demos[selectedDemo].category}
                    </span>
                    <span className="text-cyan-400 text-sm font-medium">
                      {demos[selectedDemo].duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{demos[selectedDemo].title}</h3>
                  <p className="text-gray-300 mb-6">{demos[selectedDemo].description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    {demos[selectedDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                    Start Demo
                    <Play className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Try Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our interactive demos provide a hands-on experience of our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our team to see how our solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Live Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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