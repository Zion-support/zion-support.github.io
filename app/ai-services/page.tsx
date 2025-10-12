import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Brain, Bot, BarChart3, FileText, Lock, CheckCircle, Mail, Users, Mic, Zap, Shield, Database, Cloud, Smartphone, Globe, Target, Award, Clock, DollarSign, ArrowRight, Sparkles, Layers, Lightbulb, Settings, Network, Cpu, CircuitBoard, Monitor, Server, Wifi, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent, conversational chatbots that understand context and provide human-like responses for customer service, sales, and support.',
      price: '$199/month',
      features: [
        'No-code visual builder',
        'Multi-language support',
        'Integration with 50+ platforms',
        'Advanced analytics dashboard',
        'Custom training models',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Handle 1000+ conversations simultaneously',
        '99.9% uptime guarantee',
        'Easy integration with existing systems'
      ],
      link: '/ai-chatbot-builder',
      category: 'Conversational AI'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform that predicts trends and optimizes business performance.',
      price: '$149/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom report generation',
        'API integration capabilities',
        'Automated insights delivery',
        'Multi-source data connectors'
      ],
      benefits: [
        'Increase decision speed by 80%',
        'Identify opportunities 3x faster',
        'Reduce manual reporting by 90%',
        'Improve forecast accuracy by 40%'
      ],
      link: '/ai-analytics-dashboard',
      category: 'Business Intelligence'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Document Processing',
      description: 'Automate document workflows with intelligent OCR, data extraction, and classification using advanced machine learning algorithms.',
      price: '$179/month',
      features: [
        'OCR with 99.5% accuracy',
        'Intelligent data extraction',
        'Document classification',
        'Batch processing capabilities',
        'Custom field recognition',
        'Integration with cloud storage'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 95%',
        'Eliminate human errors',
        'Scale to handle millions of documents'
      ],
      link: '/ai-document-processing',
      category: 'Document Intelligence'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions that detect and prevent threats in real-time, protecting your digital assets with machine learning.',
      price: '$399/month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Zero-trust architecture',
        'Compliance monitoring',
        '24/7 security operations center'
      ],
      benefits: [
        'Detect threats 100x faster',
        'Reduce false positives by 85%',
        'Prevent 99.9% of attacks',
        'Comply with industry standards'
      ],
      link: '/ai-cybersecurity-suite',
      category: 'Cybersecurity'
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation that personalizes content, optimizes send times, and maximizes engagement using AI algorithms.',
      price: '$119/month',
      features: [
        'AI content personalization',
        'Optimal send time prediction',
        'A/B testing automation',
        'Segmentation intelligence',
        'Deliverability optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Save 20 hours per week'
      ],
      link: '/ai-email-marketing',
      category: 'Marketing Automation'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'AI CRM Assistant',
      description: 'Enhance your CRM with AI-powered lead scoring, automated follow-ups, and predictive analytics to maximize sales performance.',
      price: '$199/month',
      features: [
        'Intelligent lead scoring',
        'Automated follow-up sequences',
        'Sales forecasting',
        'Customer behavior analysis',
        'Integration with major CRMs',
        'Performance optimization'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead quality by 50%',
        'Reduce sales cycle by 25%',
        'Boost team productivity by 40%'
      ],
      link: '/ai-crm-assistant',
      category: 'Sales Intelligence'
    },
    {
      icon: <Mic className="w-8 h-8 text-pink-400" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language processing, speech recognition, and multi-modal interaction capabilities.',
      price: '$299/month',
      features: [
        'Natural language understanding',
        'Multi-language voice recognition',
        'Custom voice training',
        'Integration with IoT devices',
        'Real-time processing',
        'Conversation memory'
      ],
      benefits: [
        'Improve customer experience',
        'Reduce call center costs by 50%',
        'Enable hands-free operations',
        'Scale voice interactions globally'
      ],
      link: '/ai-voice-assistant',
      category: 'Voice Technology'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management system that prioritizes work, automates workflows, and optimizes team productivity using AI.',
      price: '$79/month',
      features: [
        'AI task prioritization',
        'Smart scheduling',
        'Workflow automation',
        'Team collaboration tools',
        'Progress tracking',
        'Performance analytics'
      ],
      benefits: [
        'Increase productivity by 30%',
        'Reduce project delays by 40%',
        'Improve team coordination',
        'Optimize resource allocation'
      ],
      link: '/ai-task-manager',
      category: 'Productivity'
    }
  ]

  const categories = [
    { name: 'All Services', count: aiServices.length, color: 'from-cyan-500 to-purple-500' },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length, color: 'from-blue-500 to-cyan-500' },
    { name: 'Business Intelligence', count: aiServices.filter(s => s.category === 'Business Intelligence').length, color: 'from-emerald-500 to-teal-500' },
    { name: 'Document Intelligence', count: aiServices.filter(s => s.category === 'Document Intelligence').length, color: 'from-purple-500 to-pink-500' },
    { name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length, color: 'from-red-500 to-orange-500' },
    { name: 'Marketing Automation', count: aiServices.filter(s => s.category === 'Marketing Automation').length, color: 'from-blue-500 to-indigo-500' },
    { name: 'Sales Intelligence', count: aiServices.filter(s => s.category === 'Sales Intelligence').length, color: 'from-orange-500 to-yellow-500' },
    { name: 'Voice Technology', count: aiServices.filter(s => s.category === 'Voice Technology').length, color: 'from-pink-500 to-rose-500' },
    { name: 'Productivity', count: aiServices.filter(s => s.category === 'Productivity').length, color: 'from-green-500 to-emerald-500' }
  ]

  return (
    <Layout
      title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
      description="Comprehensive AI services including chatbots, analytics, document processing, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence technology."
      keywords="AI services, artificial intelligence, machine learning, chatbots, analytics, document processing, cybersecurity, voice assistants, CRM automation"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
            <Brain className="w-4 h-4" />
            <span>Advanced AI Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Your Business with
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of cutting-edge AI technology to automate processes, gain insights, 
            and revolutionize your business operations. Our comprehensive AI services deliver 
            measurable results and competitive advantages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/pricing" 
              className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your AI Solution</h2>
            <p className="text-gray-300">Filter by category to find the perfect AI service for your needs</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to={service.link}
                  className="block w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/30">
                  <Sparkles className="w-4 h-4" />
                  <span>Ready to Transform with AI?</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Start Your AI Journey <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Today</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of businesses already using our AI solutions to drive growth, 
                  increase efficiency, and stay ahead of the competition. Get started with a 
                  free consultation and see the difference AI can make.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIServicesPage