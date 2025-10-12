'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, Phone, Mail, CheckCircle, Star, Users, Clock, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Cpu, Rocket, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign, Smartphone } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chatbot Demo',
      description: 'Experience our AI-powered chatbot in action',
      icon: Brain,
      duration: '5 minutes',
      category: 'AI Services',
      features: ['Natural Language Processing', 'Multi-language Support', 'Real-time Responses', 'Integration Examples']
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'See our cloud solutions and monitoring dashboards',
      icon: Cloud,
      duration: '10 minutes',
      category: 'IT Services',
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling Demo', 'Monitoring Dashboards', 'Cost Optimization']
    },
    {
      title: 'Cybersecurity Demo',
      description: 'Witness our security solutions protecting your data',
      icon: Shield,
      duration: '8 minutes',
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring']
    },
    {
      title: 'Analytics Dashboard Demo',
      description: 'Explore our business intelligence platform',
      icon: BarChart,
      duration: '7 minutes',
      category: 'Analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Predictive Analytics']
    },
    {
      title: 'Mobile App Demo',
      description: 'Test our mobile applications and features',
      icon: Smartphone,
      duration: '6 minutes',
      category: 'Mobile',
      features: ['iOS/Android Apps', 'Cross-platform', 'UI/UX Design', 'Performance Testing']
    },
    {
      title: 'API Integration Demo',
      description: 'See how our APIs integrate with your systems',
      icon: Code,
      duration: '9 minutes',
      category: 'Development',
      features: ['RESTful APIs', 'GraphQL', 'Webhooks', 'Documentation']
    }
  ];

  const benefits = [
    'See solutions in action before committing',
    'Interactive demos tailored to your needs',
    'Expert guidance throughout the demo',
    'Q&A session with our specialists',
    'Customized recommendations based on your requirements'
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how we can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT demo, cloud demo, cybersecurity demo, business intelligence demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience our AI and IT solutions firsthand. See how our technologies can transform your business through interactive demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>

          {/* Demo Categories */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Available Demos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                      {demo.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {demo.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {demo.duration}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Why Choose Our Demos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how our AI and IT solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DemoPage;
