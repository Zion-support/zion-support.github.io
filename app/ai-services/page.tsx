import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Brain, Bot, BarChart3, Code, Shield, FileText, Mic, Eye, 
  Users, DollarSign, Zap, Target, CheckCircle, ArrowRight,
  Sparkles, Layers, Award, Lightbulb, Monitor, Server, 
  CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, 
  LineChart, Activity, Search, Filter, Download, Upload, 
  Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer
} from 'lucide-react'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service and sales automation with no-code solutions.',
      price: 'Starting at $199/month',
      features: ['No-code builder', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and real-time reporting.',
      price: 'Starting at $299/month',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights', 'Data visualization'],
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'AI Code Assistant',
      description: 'Accelerate development with AI-powered code generation, debugging, and optimization tools.',
      price: 'Starting at $149/month',
      features: ['Code generation', 'Bug detection', 'Performance optimization', 'Multi-language support'],
      link: '/ai-code-assistant'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions for threat detection and prevention.',
      price: 'Starting at $399/month',
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Compliance reporting'],
      link: '/ai-cybersecurity'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Document Processing',
      description: 'Automated document processing with OCR, data extraction, and intelligent classification.',
      price: 'Starting at $179/month',
      features: ['OCR technology', 'Data extraction', 'Format conversion', 'Batch processing'],
      link: '/ai-document-processing'
    },
    {
      icon: <Mic className="w-8 h-8 text-orange-400" />,
      title: 'AI Voice Assistant',
      description: 'Create intelligent voice assistants with natural language processing and speech synthesis.',
      price: 'Starting at $249/month',
      features: ['Natural conversations', 'Multi-channel support', 'Custom integration', '98% accuracy'],
      link: '/ai-voice-assistant'
    },
    {
      icon: <Eye className="w-8 h-8 text-pink-400" />,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, analysis, and automation.',
      price: 'Starting at $349/month',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection'],
      link: '/ai-computer-vision'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, onboarding, and employee management.',
      price: 'Starting at $199/month',
      features: ['Resume screening', 'Interview scheduling', 'Employee onboarding', 'Performance tracking'],
      link: '/ai-hr-assistant'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-emerald-400" /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Monitor className="w-6 h-6 text-blue-400" /> },
    { number: '50+', label: 'Industries Served', icon: <Globe className="w-6 h-6 text-purple-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, and automation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, analytics, computer vision, automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From chatbots to computer vision, we deliver AI that works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI services designed to automate, optimize, and transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-cyan-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Transform</span> Your Business?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss how our AI solutions can revolutionize your operations and drive unprecedented growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Your AI Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}