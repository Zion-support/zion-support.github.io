'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Play, Star, Users, Clock, Shield, Zap, Brain, Code, BarChart, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictions.',
      category: 'AI',
      icon: BarChart,
      duration: '5 min',
      rating: 4.9,
      users: '2,500+',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports']
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.',
      category: 'AI',
      icon: MessageCircle,
      duration: '3 min',
      rating: 4.8,
      users: '1,800+',
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', 'Integration APIs']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Scalable cloud solutions with automated scaling and monitoring capabilities.',
      category: 'Cloud',
      icon: Globe,
      duration: '4 min',
      rating: 4.7,
      users: '3,200+',
      features: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Security Management']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Monitoring',
      description: 'Advanced threat detection and security monitoring for enterprise environments.',
      category: 'Security',
      icon: Shield,
      duration: '6 min',
      rating: 4.9,
      users: '1,600+',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Compliance Reporting', 'Incident Response']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with native performance and modern UI.',
      category: 'Mobile',
      icon: Smartphone,
      duration: '7 min',
      rating: 4.6,
      users: '2,100+',
      features: ['Cross-platform', 'Native Performance', 'Offline Support', 'Push Notifications']
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization Platform',
      description: 'Interactive data visualization tools for creating compelling charts and reports.',
      category: 'Analytics',
      icon: TrendingUp,
      duration: '4 min',
      rating: 4.8,
      users: '2,800+',
      features: ['Interactive Charts', 'Custom Dashboards', 'Data Export', 'Real-time Updates']
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | Interactive Technology Showcase</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See exactly how our technology can transform your business." />
        <meta name="keywords" content="demos, AI demo, IT demo, technology showcase, interactive demo, live demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It in
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI and IT solutions through interactive demos. 
              See exactly how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Demo
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Select from our collection of interactive demos to see our solutions in action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                    selectedDemo === demo.id ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/10'
                  }`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <demo.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {demo.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Demo Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <selectedDemoData.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h2>
                    <p className="text-xl text-gray-300 mb-6">{selectedDemoData.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{selectedDemoData.rating}</div>
                      <div className="text-gray-300 text-sm">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{selectedDemoData.users}</div>
                      <div className="text-gray-300 text-sm">Users</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Launch Interactive Demo
                  </button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo</h3>
                      <p className="text-gray-300 mb-6">
                        Click the launch button to start the interactive demo and explore all features.
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {selectedDemoData.duration} demo
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {selectedDemoData.users} users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to See More?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Schedule Live Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;