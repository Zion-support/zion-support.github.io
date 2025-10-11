'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Customer Service & Support
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing, sentiment analysis, and multi-channel support for 24/7 customer engagement.',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'GPT-4 Powered Conversations',
        'Multi-language Support',
        'Sentiment Analysis',
        'CRM Integration',
        'Real-time Learning',
        'Voice & Text Support',
        'Escalation Management',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions',
        'Improved customer satisfaction'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Intelligent voice AI that handles customer calls, provides support, and automates phone-based interactions with natural conversation flow.',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Natural Voice Synthesis',
        'Call Routing Intelligence',
        'Multi-language Support',
        'Emotion Recognition',
        'Call Analytics',
        'Integration with CRM',
        'Custom Voice Training',
        'Real-time Transcription'
      ],
      benefits: [
        'Handle 80% of calls automatically',
        'Reduce wait times',
        '24/7 phone support',
        'Consistent service quality'
      ],
      category: 'Customer Service',
      popular: true,
      icon: Mic
    },

    // Content & Marketing
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Revolutionary content creation platform using advanced language models for blogs, social media, marketing materials, and multimedia content.',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Multi-format Content Generation',
        'SEO Optimization',
        'Brand Voice Customization',
        'Visual Content Creation',
        'Video Script Writing',
        'Social Media Automation',
        'Content Calendar Management',
        'Performance Analytics'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing',
        'Higher engagement rates'
      ],
      category: 'Content',
      popular: true,
      icon: Brain
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing platform that automates campaigns, personalizes messaging, and optimizes customer journeys across all channels.',
      price: '$449/month',
      marketPrice: '$800-2500/month',
      features: [
        'Campaign Automation',
        'Customer Journey Mapping',
        'Personalization Engine',
        'A/B Testing Automation',
        'Email Marketing AI',
        'Social Media Management',
        'Lead Scoring',
        'ROI Optimization'
      ],
      benefits: [
        'Increase conversions by 45%',
        'Automated campaign optimization',
        'Personalized customer experiences',
        'Reduced marketing costs'
      ],
      category: 'Content',
      popular: true,
      icon: Target
    },

    // Analytics & Business Intelligence
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence platform powered by machine learning algorithms for predictive insights and automated reporting.',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Automated Reporting',
        'Anomaly Detection',
        'Custom Data Models',
        'Natural Language Queries',
        'Data Visualization',
        'API Integration'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization',
        'Faster decision making'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced machine learning models for forecasting sales, customer behavior, market trends, and business outcomes with high accuracy.',
      price: '$699/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Sales Forecasting',
        'Customer Lifetime Value Prediction',
        'Market Trend Analysis',
        'Risk Assessment',
        'Scenario Planning',
        'Model Performance Monitoring',
        'Automated Retraining',
        'Custom Algorithm Development'
      ],
      benefits: [
        'Improve forecast accuracy by 85%',
        'Better business planning',
        'Risk mitigation',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: false,
      icon: TrendingUp
    },

    // Computer Vision & Image Processing
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis solutions for quality control, security, automation, and visual content understanding.',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object Detection & Recognition',
        'Quality Control Automation',
        'Facial Recognition Systems',
        'Video Analytics',
        'Real-time Processing',
        'Custom Model Training',
        'Edge Computing Support',
        'API Integration'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction',
        'Improved accuracy'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Content Generation',
      description: 'Revolutionary AI platform for generating 3D models, animations, and virtual environments for gaming, AR/VR, and architectural visualization.',
      price: '$899/month',
      marketPrice: '$2000-8000/month',
      features: [
        '3D Model Generation',
        'Texture Synthesis',
        'Animation Creation',
        'AR/VR Content',
        'Architectural Visualization',
        'Game Asset Creation',
        'Real-time Rendering',
        'Custom Style Transfer'
      ],
      benefits: [
        'Reduce 3D creation time by 90%',
        'Lower production costs',
        'Faster prototyping',
        'Creative automation'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Cpu
    },

    // Automation & Workflow
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns, adapts, and optimizes business workflows for maximum efficiency and minimal errors.',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process Mining',
        'Workflow Optimization',
        'Task Automation',
        'Exception Handling',
        'Performance Monitoring',
        'RPA Integration',
        'Custom Workflow Builder',
        'Analytics Dashboard'
      ],
      benefits: [
        'Process efficiency gains',
        'Error reduction',
        'Cost savings',
        'Scalable automation',
        'Improved compliance'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Intelligence',
      description: 'Advanced document processing and understanding platform that extracts, analyzes, and processes information from any document type.',
      price: '$249/month',
      marketPrice: '$500-2000/month',
      features: [
        'Document OCR & Extraction',
        'Intelligent Classification',
        'Data Validation',
        'Contract Analysis',
        'Invoice Processing',
        'Legal Document Review',
        'Multi-language Support',
        'API Integration'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual errors',
        'Automated data entry',
        'Better compliance'
      ],
      category: 'Automation',
      popular: true,
      icon: FileText
    },

    // Security & Fraud Prevention
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms that detect and prevent fraudulent activities in real-time across all business channels.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time Transaction Monitoring',
        'Behavioral Pattern Analysis',
        'Risk Scoring Algorithms',
        'Anomaly Detection',
        'Automated Alert Systems',
        'Multi-channel Protection',
        'Machine Learning Models',
        'Compliance Reporting'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready',
        'Continuous learning'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity platform that provides threat detection, incident response, and security monitoring.',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Threat Detection & Response',
        'Network Security Monitoring',
        'Vulnerability Assessment',
        'Incident Response Automation',
        'Security Analytics',
        'Compliance Management',
        'Threat Intelligence',
        '24/7 Monitoring'
      ],
      benefits: [
        'Proactive threat detection',
        'Reduced security incidents',
        'Faster incident response',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: false,
      icon: Lock
    },

    // Industry-Specific AI Solutions
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical AI platform for image analysis, diagnostic assistance, and patient care optimization with HIPAA compliance.',
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Patient Risk Assessment',
        'Treatment Recommendations',
        'HIPAA Compliance',
        'Clinical Decision Support',
        'Drug Interaction Analysis',
        'Telemedicine Integration'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce diagnostic time',
        'Early disease detection',
        'Better patient outcomes',
        'Cost-effective healthcare'
      ],
      category: 'Healthcare',
      popular: true,
      icon: Heart
    },
    {
      id: 'ai-financial-modeling',
      name: 'AI Financial Modeling',
      description: 'Advanced financial analysis and modeling platform using machine learning for investment decisions and risk management.',
      price: '$899/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Market Prediction',
        'Algorithmic Trading',
        'Compliance Monitoring',
        'Credit Scoring',
        'Fraud Detection',
        'Regulatory Reporting'
      ],
      benefits: [
        'Improve investment returns',
        'Reduce financial risk',
        'Automated trading strategies',
        'Real-time market analysis',
        'Better risk management'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
      price: '$1,599/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Risk Assessment',
        'Cost Optimization',
        'Quality Control',
        'Sustainability Tracking',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times',
        'Minimize stockouts',
        'Optimize supplier relationships',
        'Better sustainability'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-education',
      name: 'AI Education Platform',
      description: 'Personalized learning platform with AI tutors, adaptive curriculum, and intelligent assessment for educational institutions.',
      price: '$499/month',
      marketPrice: '$1000-4000/month',
      features: [
        'Personalized Learning Paths',
        'AI Tutoring System',
        'Adaptive Assessments',
        'Progress Tracking',
        'Content Generation',
        'Student Analytics',
        'Multi-language Support',
        'Integration with LMS'
      ],
      benefits: [
        'Personalized education',
        'Improved learning outcomes',
        'Reduced teaching workload',
        'Better student engagement'
      ],
      category: 'Education',
      popular: false,
      icon: Users
    },

    // Emerging AI Technologies
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing',
      description: 'Cutting-edge quantum AI solutions for complex optimization problems, cryptography, and advanced machine learning applications.',
      price: '$4,999/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Quantum Machine Learning',
        'Optimization Algorithms',
        'Cryptographic Solutions',
        'Quantum Simulation',
        'Advanced Analytics',
        'Research Applications',
        'Custom Quantum Circuits',
        'Expert Consultation'
      ],
      benefits: [
        'Solve complex problems',
        'Exponential speed improvements',
        'Advanced security',
        'Competitive advantage'
      ],
      category: 'Quantum AI',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Distributed AI processing at the edge for real-time decision making, IoT applications, and low-latency requirements.',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Edge AI Processing',
        'Real-time Inference',
        'IoT Integration',
        'Low-latency Processing',
        'Offline Capability',
        'Resource Optimization',
        'Security at Edge',
        'Scalable Deployment'
      ],
      benefits: [
        'Real-time processing',
        'Reduced latency',
        'Offline operation',
        'Cost optimization'
      ],
      category: 'Edge AI',
      popular: false,
      icon: Server
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content & Marketing', count: services.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics & BI', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'Education', name: 'Education', count: services.filter(s => s.category === 'Education').length },
    { id: 'Quantum AI', name: 'Quantum AI', count: services.filter(s => s.category === 'Quantum AI').length },
    { id: 'Edge AI', name: 'Edge AI', count: services.filter(s => s.category === 'Edge AI').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, automation, and machine learning solutions for your business." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, automation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI services are designed to solve complex business challenges and unlock new opportunities.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our AI experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiServicesPage;