'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Play, Download, ExternalLink } from 'lucide-react'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries, provide support, and answer questions 24/7.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness', 'Integration Ready'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      type: 'Interactive',
      duration: '5 min',
      category: 'AI Services'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Explore our comprehensive analytics dashboard with real-time data visualization and insights.',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      type: 'Interactive',
      duration: '10 min',
      category: 'Data Analytics'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'See how our cloud solutions can scale your infrastructure and improve performance.',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Cost Optimization'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      type: 'Video',
      duration: '15 min',
      category: 'Cloud Services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Suite',
      description: 'Discover our advanced security features and threat detection capabilities.',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Reports'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
      type: 'Interactive',
      duration: '8 min',
      category: 'Security'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Builder',
      description: 'Try our no-code mobile app builder and create your own application in minutes.',
      features: ['Drag & Drop Interface', 'Real-time Preview', 'Cross-platform', 'App Store Ready'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      type: 'Interactive',
      duration: '20 min',
      category: 'Mobile Development'
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'See how our automation tools can streamline your business processes.',
      features: ['Process Mapping', 'Automation Rules', 'Integration Hub', 'Performance Analytics'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop',
      type: 'Interactive',
      duration: '12 min',
      category: 'Automation'
    }
  ]

  const categories = ['All', 'AI Services', 'Data Analytics', 'Cloud Services', 'Security', 'Mobile Development', 'Automation']

  const filteredDemos = demos.filter(demo => 
    selectedDemo === null || demo.id === selectedDemo
  )

  return (
    <>
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
                Experience our solutions firsthand with interactive demos and real-world examples.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button
                onClick={() => setSelectedDemo(null)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDemo === null
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                All Demos
              </button>
              {categories.slice(1).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedDemo(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demos Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDemos.map((demo) => (
                <div key={demo.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <img 
                    src={demo.image} 
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-cyan-500 text-white px-2 py-1 rounded text-sm">
                        {demo.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {demo.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                    <p className="text-gray-300 mb-4">{demo.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Try Demo
                      </button>
                      <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Custom Demo */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Request a custom demo tailored to your specific needs and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Request Custom Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* Demo Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Why Try Our Demos?</h2>
              <p className="text-xl text-gray-300">Experience the benefits before you commit</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">See It in Action</h3>
                <p className="text-gray-300">Watch our solutions work in real-time with live data and scenarios.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Test Features</h3>
                <p className="text-gray-300">Interact with our tools and explore all the features at your own pace.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Make Informed Decisions</h3>
                <p className="text-gray-300">Experience the value firsthand before making your investment decision.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default DemoPage;