'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Calendar,
  CreditCard,
  Lock,
  Zap,
  Globe,
  Smartphone,
  Database,
  Settings,
  Target,
  Award,
  Clock,
  Sparkles,
  Brain,
  Cloud,
  Wifi,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Camera,
  Cpu,
  Server,
  Code,
  Eye,
  Mic,
  Palette,
  Search,
  Layers,
  Workflow,
  Bot,
  Lightbulb,
  Rocket,
  Atom,
  Dna,
  Microscope,
  ShieldCheck,
  LockKeyhole,
  Network,
  CircuitBoard
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with natural language processing, SEO optimization, and brand voice training',
      price: '$299/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content analytics', 'API integration', 'Plagiarism detection'],
      icon: FileText,
      path: '/ai-content-generator',
      popular: true,
      category: 'Content Creation',
      color: 'from-blue-500 to-cyan-500',
      applications: ['Blog writing', 'Social media content', 'Marketing copy', 'Product descriptions']
    },
    {
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI for customer service and support with advanced NLP and multi-channel integration',
      price: '$499/month',
      features: ['24/7 availability', 'Multi-channel integration', 'Sentiment analysis', 'Custom training', 'Analytics dashboard', 'Voice support'],
      icon: MessageSquare,
      path: '/ai-chatbot-enterprise',
      popular: true,
      category: 'Conversational AI',
      color: 'from-green-500 to-emerald-500',
      applications: ['Customer support', 'Sales assistance', 'Lead qualification', 'FAQ automation']
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics, machine learning insights, and custom dashboards',
      price: '$399/month',
      features: ['Real-time insights', 'Predictive modeling', 'Custom reports', 'API integration', 'Data visualization', 'Automated alerts'],
      icon: BarChart3,
      path: '/ai-analytics-dashboard',
      popular: true,
      category: 'Business Intelligence',
      color: 'from-purple-500 to-pink-500',
      applications: ['Sales forecasting', 'Customer analytics', 'Performance tracking', 'Risk assessment']
    },
    {
      name: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models and animations with AI assistance for VR/AR applications and visual content',
      price: '$799/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'VR/AR support', 'Cloud rendering', 'Export options'],
      icon: Camera,
      path: '/ai-3d-generation',
      popular: false,
      category: '3D & Visual',
      color: 'from-orange-500 to-red-500',
      applications: ['Game development', 'Architectural visualization', 'Product design', 'Marketing materials']
    },
    {
      name: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered molecular analysis, drug design, and clinical trial optimization',
      price: '$2,999/month',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Regulatory compliance', 'Patent analysis', 'Toxicity prediction'],
      icon: Dna,
      path: '/ai-drug-discovery-pro',
      popular: false,
      category: 'Healthcare & Life Sciences',
      color: 'from-indigo-500 to-purple-500',
      applications: ['Drug development', 'Molecular research', 'Clinical trials', 'Pharmaceutical analysis']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning, behavioral analysis, and automated response',
      price: '$1,299/month',
      features: ['Real-time monitoring', 'Threat intelligence', 'Automated response', 'Compliance reporting', 'Incident management', 'Forensic analysis'],
      icon: ShieldCheck,
      path: '/ai-cybersecurity-suite',
      popular: true,
      category: 'Cybersecurity',
      color: 'from-red-500 to-pink-500',
      applications: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance management']
    },
    {
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis with object detection, facial recognition, and automated visual inspection',
      price: '$599/month',
      features: ['Object detection', 'Facial recognition', 'Image classification', 'Video analysis', 'Real-time processing', 'Custom models'],
      icon: Eye,
      path: '/ai-computer-vision',
      popular: false,
      category: 'Computer Vision',
      color: 'from-cyan-500 to-blue-500',
      applications: ['Quality control', 'Security systems', 'Medical imaging', 'Autonomous vehicles']
    },
    {
      name: 'AI Voice Assistant',
      description: 'Intelligent voice recognition and synthesis with natural language understanding and multi-language support',
      price: '$399/month',
      features: ['Voice recognition', 'Text-to-speech', 'Natural language understanding', 'Multi-language support', 'Custom voices', 'Integration APIs'],
      icon: Mic,
      path: '/ai-voice-assistant',
      popular: false,
      category: 'Voice AI',
      color: 'from-pink-500 to-rose-500',
      applications: ['Voice commands', 'Call centers', 'Accessibility tools', 'Smart home control']
    },
    {
      name: 'AI Design Studio',
      description: 'AI-powered design tools for graphics, logos, and visual content with automated design generation',
      price: '$199/month',
      features: ['Logo generation', 'Graphic design', 'Color palette suggestions', 'Layout optimization', 'Brand consistency', 'Export options'],
      icon: Palette,
      path: '/ai-design-studio',
      popular: false,
      category: 'Design & Creative',
      color: 'from-violet-500 to-purple-500',
      applications: ['Logo design', 'Marketing materials', 'Web design', 'Brand identity']
    },
    {
      name: 'AI Search Engine',
      description: 'Intelligent search with semantic understanding, natural language queries, and personalized results',
      price: '$299/month',
      features: ['Semantic search', 'Natural language queries', 'Personalized results', 'Multi-source indexing', 'Real-time updates', 'Analytics'],
      icon: Search,
      path: '/ai-search-engine',
      popular: false,
      category: 'Search & Discovery',
      color: 'from-teal-500 to-cyan-500',
      applications: ['Enterprise search', 'E-commerce', 'Knowledge management', 'Content discovery']
    },
    {
      name: 'AI Workflow Automation',
      description: 'Automate complex business processes with AI-powered workflow management and intelligent decision making',
      price: '$499/month',
      features: ['Process automation', 'Intelligent routing', 'Decision making', 'Integration management', 'Performance monitoring', 'Custom workflows'],
      icon: Workflow,
      path: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      color: 'from-emerald-500 to-green-500',
      applications: ['Business processes', 'Document processing', 'Approval workflows', 'Task automation']
    },
    {
      name: 'AI Code Assistant',
      description: 'Intelligent coding assistance with code generation, debugging, optimization, and best practice recommendations',
      price: '$199/month',
      features: ['Code generation', 'Debugging assistance', 'Code optimization', 'Best practices', 'Multi-language support', 'IDE integration'],
      icon: Code,
      path: '/ai-code-assistant',
      popular: false,
      category: 'Development',
      color: 'from-yellow-500 to-orange-500',
      applications: ['Software development', 'Code review', 'Bug fixing', 'Performance optimization']
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length, active: true },
    { name: 'Content Creation', count: aiServices.filter(s => s.category === 'Content Creation').length, active: false },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length, active: false },
    { name: 'Business Intelligence', count: aiServices.filter(s => s.category === 'Business Intelligence').length, active: false },
    { name: '3D & Visual', count: aiServices.filter(s => s.category === '3D & Visual').length, active: false },
    { name: 'Healthcare & Life Sciences', count: aiServices.filter(s => s.category === 'Healthcare & Life Sciences').length, active: false },
    { name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length, active: false },
    { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length, active: false },
    { name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length, active: false },
    { name: 'Design & Creative', count: aiServices.filter(s => s.category === 'Design & Creative').length, active: false },
    { name: 'Search & Discovery', count: aiServices.filter(s => s.category === 'Search & Discovery').length, active: false },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length, active: false },
    { name: 'Development', count: aiServices.filter(s => s.category === 'Development').length, active: false }
  ];

  const stats = [
    { number: '50+', label: 'AI Services Available', icon: <Brain className="w-6 h-6" /> },
    { number: '10,000+', label: 'AI Models Deployed', icon: <Cpu className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Bot className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'AI-powered medical diagnosis, drug discovery, and patient care optimization',
      icon: <Microscope className="w-8 h-8 text-blue-400" />,
      services: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance']
    },
    {
      industry: 'Finance',
      description: 'Fraud detection, algorithmic trading, and risk assessment with AI',
      icon: <CreditCard className="w-8 h-8 text-green-400" />,
      services: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring']
    },
    {
      industry: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and process optimization',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      services: ['Quality control', 'Predictive maintenance', 'Process optimization', 'Supply chain management']
    },
    {
      industry: 'Retail',
      description: 'Personalized recommendations, inventory management, and customer analytics',
      icon: <ShoppingCart className="w-8 h-8 text-purple-400" />,
      services: ['Recommendation engines', 'Inventory optimization', 'Customer analytics', 'Price optimization']
    },
    {
      industry: 'Education',
      description: 'Personalized learning, automated grading, and educational content generation',
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      services: ['Personalized learning', 'Automated grading', 'Content generation', 'Student analytics']
    },
    {
      industry: 'Transportation',
      description: 'Autonomous vehicles, route optimization, and traffic management',
      icon: <Car className="w-8 h-8 text-red-400" />,
      services: ['Autonomous driving', 'Route optimization', 'Traffic management', 'Fleet management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive collection of AI services including content generation, chatbots, analytics, computer vision, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, computer vision, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of AI services. Transform your business with cutting-edge artificial intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our comprehensive collection of AI services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Advanced Artificial Intelligence</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI Services{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                  Suite
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our comprehensive collection of AI services designed to transform your business operations. From content generation to cybersecurity, we provide cutting-edge artificial intelligence solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 bg-gradient-to-r ${service.color}/20 rounded-lg mr-4`}>
                        <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                        <span className="text-sm text-gray-400">{service.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI services are designed to address specific challenges across various industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{useCase.industry}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 lg:p-12 border border-purple-500/30">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our comprehensive collection of AI services and start your journey towards intelligent automation and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}