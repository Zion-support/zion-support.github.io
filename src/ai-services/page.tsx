'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  FileText, 
  Bot, 
  Music, 
  Video, 
  CreditCard, 
  Car, 
  Train, 
  Home, 
  Heart, 
  GraduationCap,
  Palette,
  Camera,
  Calculator,
  Calendar,
  Clock,
  Compass,
  PieChart,
  Activity,
  Target,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Network,
  Database as DatabaseIcon,
  Globe,
  Layers,
  Workflow,
  Microscope,
  Atom,
  CircuitBoard
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision-making.',
      icon: Brain,
      price: 'Starting at $2,500/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Real-time inference APIs',
        'Performance monitoring',
        'A/B testing framework'
      ],
      category: 'Core AI',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      useCases: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Demand Forecasting']
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding.',
      icon: MessageSquare,
      price: 'Starting at $1,800/month',
      features: [
        'Text classification & sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Chatbot development',
        'Document processing'
      ],
      category: 'Core AI',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      useCases: ['Customer Support', 'Content Moderation', 'Market Research', 'Legal Document Analysis']
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual understanding.',
      icon: Eye,
      price: 'Starting at $2,200/month',
      features: [
        'Object detection & recognition',
        'Facial recognition systems',
        'Image classification',
        'Video analysis',
        'OCR & text extraction',
        'Quality inspection'
      ],
      category: 'Core AI',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      useCases: ['Quality Control', 'Security Systems', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      icon: Workflow,
      price: 'Starting at $1,500/month',
      features: [
        'Workflow automation',
        'Decision tree implementation',
        'Exception handling',
        'Process optimization',
        'Integration with existing systems',
        'Performance analytics'
      ],
      category: 'Automation',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      useCases: ['Document Processing', 'Customer Onboarding', 'Inventory Management', 'Financial Operations']
    },
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics with AI-driven insights and predictive modeling.',
      icon: BarChart,
      price: 'Starting at $1,200/month',
      features: [
        'Predictive analytics',
        'Anomaly detection',
        'Trend analysis',
        'Custom dashboards',
        'Real-time reporting',
        'Data visualization'
      ],
      category: 'Analytics',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      useCases: ['Business Intelligence', 'Risk Assessment', 'Performance Monitoring', 'Market Analysis']
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI for customer service and engagement.',
      icon: Bot,
      price: 'Starting at $800/month',
      features: [
        'Multi-channel deployment',
        'Context-aware conversations',
        'Integration with CRM systems',
        'Multi-language support',
        'Sentiment analysis',
        'Human handoff capabilities'
      ],
      category: 'Conversational AI',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      useCases: ['Customer Support', 'Lead Generation', 'Internal Help Desk', 'E-commerce Assistance']
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Systems',
      description: 'Personalized recommendation engines for products, content, and services.',
      icon: Target,
      price: 'Starting at $1,600/month',
      features: [
        'Collaborative filtering',
        'Content-based recommendations',
        'Hybrid approaches',
        'Real-time personalization',
        'A/B testing framework',
        'Performance metrics'
      ],
      category: 'Personalization',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      useCases: ['E-commerce', 'Content Platforms', 'Streaming Services', 'Financial Products']
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Solutions',
      description: 'Voice recognition, synthesis, and conversational AI for voice interfaces.',
      icon: Mic,
      price: 'Starting at $1,400/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command processing',
        'Multi-language support',
        'Custom voice training',
        'Real-time processing'
      ],
      category: 'Voice AI',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      useCases: ['Voice Assistants', 'Call Centers', 'Accessibility Tools', 'IoT Devices']
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization.',
      icon: Heart,
      price: 'Starting at $3,500/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Drug discovery support',
        'Patient monitoring',
        'HIPAA compliance'
      ],
      category: 'Healthcare AI',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      useCases: ['Medical Imaging', 'Drug Discovery', 'Patient Care', 'Clinical Research']
    },
    {
      id: 'ai-finance',
      name: 'AI Financial Solutions',
      description: 'AI-powered financial services including fraud detection and risk assessment.',
      icon: CreditCard,
      price: 'Starting at $2,800/month',
      features: [
        'Fraud detection',
        'Credit risk assessment',
        'Algorithmic trading',
        'Regulatory compliance',
        'Real-time monitoring',
        'Anomaly detection'
      ],
      category: 'FinTech AI',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      useCases: ['Fraud Prevention', 'Risk Management', 'Trading Algorithms', 'Compliance Monitoring']
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Solutions',
      description: 'Intelligent robotics for automation, navigation, and human-robot interaction.',
      icon: Cpu,
      price: 'Starting at $4,500/month',
      features: [
        'Autonomous navigation',
        'Object manipulation',
        'Human-robot interaction',
        'Sensor integration',
        'Path planning',
        'Safety protocols'
      ],
      category: 'Robotics AI',
      color: 'from-gray-500 to-slate-600',
      textColor: 'text-gray-400',
      useCases: ['Manufacturing', 'Warehouse Automation', 'Service Robots', 'Research Applications']
    },
    {
      id: 'ai-quantum',
      name: 'Quantum AI Solutions',
      description: 'Next-generation quantum computing applications for complex problem solving.',
      icon: Atom,
      price: 'Custom Pricing',
      features: [
        'Quantum machine learning',
        'Optimization problems',
        'Cryptography applications',
        'Simulation capabilities',
        'Quantum algorithms',
        'Hybrid classical-quantum systems'
      ],
      category: 'Quantum AI',
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      useCases: ['Drug Discovery', 'Financial Modeling', 'Climate Simulation', 'Cryptography']
    }
  ];

  const categories = ['All', 'Core AI', 'Automation', 'Analytics', 'Conversational AI', 'Personalization', 'Voice AI', 'Healthcare AI', 'FinTech AI', 'Robotics AI', 'Quantum AI'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = aiServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-flicker-enhanced">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Cutting-edge artificial intelligence for enterprise applications
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your business with our comprehensive AI services. From machine learning and natural language processing 
            to computer vision and quantum computing, we deliver intelligent solutions that drive real results.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  className="cyber-card-enhanced holographic-card quantum-field p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mr-6 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className={`text-xl font-bold ${service.textColor}`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="/contact"
                      className={`inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* AI Capabilities Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our AI Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Custom ML models for predictive analytics and intelligent decision-making</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">NLP</h3>
              <p className="text-gray-300 text-sm">Advanced natural language processing for text analysis and understanding</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Image and video analysis for object detection and recognition</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Atom className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Quantum AI</h3>
              <p className="text-gray-300 text-sm">Next-generation quantum computing for complex problem solving</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            AI Service Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Consultation</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$500<span className="text-lg text-gray-400">/hour</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• AI Strategy Planning</li>
                <li>• Technology Assessment</li>
                <li>• Implementation Roadmap</li>
                <li>• ROI Analysis</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Schedule Consultation</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• Custom AI Model Development</li>
                <li>• API Integration</li>
                <li>• Testing & Optimization</li>
                <li>• Documentation & Training</li>
                <li>• 3 Months Support</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Start Development</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• Full AI Transformation</li>
                <li>• Dedicated AI Team</li>
                <li>• 24/7 Support</li>
                <li>• Custom Infrastructure</li>
                <li>• Ongoing Optimization</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Implement AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can transform your business operations and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                (302) 464-0950
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;