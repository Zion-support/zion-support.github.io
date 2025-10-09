'use client';
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Download, Share2, Star, CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, Users, Award, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 1,
      title: 'AI Project Manager Pro',
      description: 'See how our AI-powered project management tool can streamline your workflow and boost productivity.',
      category: 'Micro SAAS',
      duration: '3:45',
      features: [
        'Intelligent task prioritization',
        'Automated resource allocation',
        'Predictive timeline analysis',
        'Real-time collaboration tools',
        'Advanced reporting dashboard'
      ],
      videoUrl: '/demos/ai-project-manager-demo.mp4',
      thumbnail: '/demos/ai-project-manager-thumb.jpg',
      icon: BarChart,
      color: 'text-blue-400'
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      description: 'Experience the power of AI-driven analytics with real-time insights and predictive modeling.',
      category: 'AI Services',
      duration: '4:20',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom KPI tracking',
        'Automated report generation',
        'Interactive dashboards'
      ],
      videoUrl: '/demos/ai-analytics-demo.mp4',
      thumbnail: '/demos/ai-analytics-thumb.jpg',
      icon: BarChart,
      color: 'text-purple-400'
    },
    {
      id: 3,
      title: 'AI Customer Support Bot',
      description: 'Watch our intelligent chatbot handle customer inquiries with natural language understanding.',
      category: 'AI Services',
      duration: '2:30',
      features: [
        'Natural language processing',
        '24/7 availability',
        'Human handoff capability',
        'Sentiment analysis',
        'Multi-language support'
      ],
      videoUrl: '/demos/ai-chatbot-demo.mp4',
      thumbnail: '/demos/ai-chatbot-thumb.jpg',
      icon: Bot,
      color: 'text-green-400'
    },
    {
      id: 4,
      title: 'Cloud Migration Assistant',
      description: 'See how we can help you migrate to the cloud with our automated migration tools.',
      category: 'IT Services',
      duration: '5:15',
      features: [
        'Automated migration planning',
        'Risk assessment tools',
        'Cost optimization analysis',
        'Security compliance checks',
        'Real-time migration monitoring'
      ],
      videoUrl: '/demos/cloud-migration-demo.mp4',
      thumbnail: '/demos/cloud-migration-thumb.jpg',
      icon: Cloud,
      color: 'text-cyan-400'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'Experience AI-powered content creation for blogs, social media, and marketing materials.',
      category: 'Micro SAAS',
      duration: '3:10',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Plagiarism detection',
        'Content scheduling'
      ],
      videoUrl: '/demos/ai-content-generator-demo.mp4',
      thumbnail: '/demos/ai-content-generator-thumb.jpg',
      icon: FileText,
      color: 'text-yellow-400'
    },
    {
      id: 6,
      title: 'Cybersecurity Monitor',
      description: 'See our AI-powered security monitoring system in action with real-time threat detection.',
      category: 'IT Services',
      duration: '4:45',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Security analytics dashboard'
      ],
      videoUrl: '/demos/cybersecurity-demo.mp4',
      thumbnail: '/demos/cybersecurity-thumb.jpg',
      icon: Shield,
      color: 'text-red-400'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Demos', count: demos.length },
    { id: 'Micro SAAS', name: 'Micro SAAS', count: demos.filter(d => d.category === 'Micro SAAS').length },
    { id: 'AI Services', name: 'AI Services', count: demos.filter(d => d.category === 'AI Services').length },
    { id: 'IT Services', name: 'IT Services', count: demos.filter(d => d.category === 'IT Services').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDemos = selectedCategory === 'all' 
    ? demos 
    : demos.filter(demo => demo.category === selectedCategory);

  const currentDemo = demos[selectedDemo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Product Demos - Zion Tech Group"
        description="Experience our AI and IT solutions through interactive demos. See how our products can transform your business with real-world examples and use cases."
        keywords={['demos', 'product demos', 'AI demos', 'IT demos', 'interactive demos', 'video demos', 'product showcase', 'trial']}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Product Demos
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Experience our AI and IT solutions in action. Watch interactive demos and see how our products can transform your business.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'cyber-button'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-slate-800 text-gray-300 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Demo Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo, index) => (
              <div 
                key={demo.id} 
                className={`cyber-card p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                  selectedDemo === index ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setSelectedDemo(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {demo.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{demo.duration}</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <demo.icon className={`w-12 h-12 ${demo.color} mx-auto mb-3`} />
                  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 text-sm">{demo.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {demo.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">
                    {selectedDemo === index ? 'Selected' : 'Click to view'}
                  </span>
                  <Play className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Player Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{currentDemo.title}</h2>
                <p className="text-gray-300">{currentDemo.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative bg-slate-800 rounded-lg overflow-hidden mb-6">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-slate-900" />
                    ) : (
                      <Play className="w-8 h-8 text-slate-900 ml-1" />
                    )}
                  </div>
                  <p className="text-gray-400">Click to play demo video</p>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <RotateCcw className="w-5 h-5" />
                  <span>Restart</span>
                </button>
              </div>
              <div className="text-sm text-gray-400">
                {currentDemo.duration}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDemo.features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Related Demos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Related Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.filter(demo => demo.id !== currentDemo.id).slice(0, 3).map((demo) => (
              <div key={demo.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {demo.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{demo.duration}</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <demo.icon className={`w-10 h-10 ${demo.color} mx-auto mb-3`} />
                  <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 text-sm">{demo.description}</p>
                </div>

                <button 
                  onClick={() => setSelectedDemo(demos.indexOf(demo))}
                  className="w-full cyber-button py-2 text-sm font-semibold"
                >
                  View Demo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a personalized demo with our team to see how our solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Schedule Demo
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;