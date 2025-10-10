'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart3, 
  Box, 
  Mic, 
  Shield, 
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe, 
  Database, 
  Users, 
  Settings,
  Filter,
  DollarSign,
  Cpu,
  Camera,
  Heart,
  ShoppingCart,
  Home,
  Scale,
  GraduationCap,
  Layers,
  Code,
  Mail,
  Activity,
  BookOpen,
  Briefcase,
  Car,
  Building
} from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  benefits: string[];
  marketPrice: string;
  link: string;
  useCases: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    // Core AI Solutions
    {
      id: '1',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Solutions Platform',
      description: 'Comprehensive AI platform providing machine learning, natural language processing, computer vision, and predictive analytics for enterprise applications.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Deep Learning',
        'Neural Networks',
        'Model Training',
        'API Integration'
      ],
      price: 'Starting at $1,500/month',
      category: 'Core AI',
      popular: true,
      benefits: ['Increase efficiency by 60%', 'Reduce operational costs by 40%', 'Improve accuracy by 85%'],
      marketPrice: '$5,000/month',
      link: 'https://ziontechgroup.com/ai-solutions',
      useCases: ['Business Process Automation', 'Customer Service Enhancement', 'Data Analysis', 'Predictive Maintenance']
    },
    {
      id: '2',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Data Analytics Pro',
      description: 'Advanced AI-powered data analytics with real-time insights, predictive modeling, and automated reporting for data-driven decision making.',
      features: [
        'Real-time Analytics',
        'Predictive Modeling',
        'Automated Reporting',
        'Data Visualization',
        'Pattern Recognition',
        'Anomaly Detection',
        'Custom Dashboards',
        'Multi-source Integration'
      ],
      price: 'Starting at $799/month',
      category: 'Analytics',
      popular: true,
      benefits: ['Increase data insights by 300%', 'Reduce analysis time by 80%', 'Improve decision accuracy by 70%'],
      marketPrice: '$2,999/month',
      link: 'https://ziontechgroup.com/ai-data-analytics',
      useCases: ['Business Intelligence', 'Market Research', 'Performance Monitoring', 'Risk Assessment']
    },
    {
      id: '3',
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support system with chatbots, sentiment analysis, automated ticket routing, and 24/7 multilingual support.',
      features: [
        'AI Chatbots',
        'Sentiment Analysis',
        'Automated Ticket Routing',
        'Knowledge Base AI',
        'Multi-language Support',
        'Voice Recognition',
        'Live Agent Handoff',
        'Performance Analytics'
      ],
      price: 'Starting at $299/month',
      category: 'Customer Service',
      popular: true,
      benefits: ['Reduce support costs by 60%', 'Increase customer satisfaction by 45%', 'Handle 80% of queries automatically'],
      marketPrice: '$1,199/month',
      link: 'https://ziontechgroup.com/ai-customer-support',
      useCases: ['Customer Service Automation', 'Lead Qualification', 'Technical Support', 'FAQ Management']
    },

    // Marketing & Sales AI
    {
      id: '4',
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns, lead scoring, and intelligent optimization across all channels.',
      features: [
        'Personalized Campaigns',
        'AI Lead Scoring',
        'Content Generation',
        'A/B Testing AI',
        'ROI Optimization',
        'Multi-channel Integration',
        'Behavioral Analysis',
        'Predictive Targeting'
      ],
      price: 'Starting at $599/month',
      category: 'Marketing',
      popular: false,
      benefits: ['Increase conversion rates by 150%', 'Reduce marketing costs by 40%', 'Improve campaign ROI by 200%'],
      marketPrice: '$2,499/month',
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      useCases: ['Email Marketing', 'Social Media Management', 'Content Creation', 'Lead Nurturing']
    },
    {
      id: '5',
      icon: <TrendingUp className="w-8 h-8 text-cyan-500" />,
      title: 'AI Sales Intelligence',
      description: 'Advanced AI sales platform with lead generation, opportunity scoring, sales forecasting, and automated follow-up systems.',
      features: [
        'Lead Generation AI',
        'Opportunity Scoring',
        'Sales Forecasting',
        'Automated Follow-ups',
        'Pipeline Optimization',
        'Competitive Analysis',
        'Price Optimization',
        'Sales Coaching AI'
      ],
      price: 'Starting at $899/month',
      category: 'Sales',
      popular: false,
      benefits: ['Increase sales by 50%', 'Improve lead quality by 70%', 'Reduce sales cycle by 35%'],
      marketPrice: '$3,499/month',
      link: 'https://ziontechgroup.com/ai-sales-intelligence',
      useCases: ['Lead Generation', 'Sales Forecasting', 'Pipeline Management', 'Sales Training']
    },

    // Content & Creative AI
    {
      id: '6',
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: 'AI Content Generation Studio',
      description: 'Complete AI content creation suite with writing, image generation, video editing, and social media automation for all content needs.',
      features: [
        'AI Writing Assistant',
        'Image Generation',
        'Video Creation',
        'Social Media Automation',
        'SEO Optimization',
        'Brand Consistency',
        'Content Calendar',
        'Performance Analytics'
      ],
      price: 'Starting at $399/month',
      category: 'Content',
      popular: true,
      benefits: ['Create 10x more content', 'Reduce content costs by 70%', 'Increase engagement by 80%'],
      marketPrice: '$1,599/month',
      link: 'https://ziontechgroup.com/ai-content-generation',
      useCases: ['Blog Writing', 'Social Media Content', 'Marketing Materials', 'Product Descriptions']
    },
    {
      id: '7',
      icon: <Camera className="w-8 h-8 text-indigo-500" />,
      title: 'AI Visual Intelligence',
      description: 'Advanced computer vision and image recognition AI for visual content analysis, object detection, and automated image processing.',
      features: [
        'Object Detection',
        'Image Recognition',
        'Visual Search',
        'Quality Analysis',
        'Automated Tagging',
        'Content Moderation',
        'Style Transfer',
        '3D Modeling'
      ],
      price: 'Starting at $699/month',
      category: 'Computer Vision',
      popular: false,
      benefits: ['Automate visual tasks by 90%', 'Improve accuracy by 95%', 'Reduce processing time by 80%'],
      marketPrice: '$2,999/month',
      link: 'https://ziontechgroup.com/ai-visual-intelligence',
      useCases: ['Quality Control', 'Security Monitoring', 'Medical Imaging', 'E-commerce Search']
    },

    // Healthcare AI
    {
      id: '8',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support.',
      features: [
        'Medical Imaging AI',
        'Drug Discovery',
        'Patient Care Optimization',
        'Clinical Decision Support',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Health Monitoring',
        'Research Analytics'
      ],
      price: 'Starting at $2,999/month',
      category: 'Healthcare',
      popular: true,
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce treatment costs by 30%', 'Enhance patient outcomes'],
      marketPrice: '$9,999/month',
      link: 'https://ziontechgroup.com/ai-healthcare',
      useCases: ['Medical Diagnosis', 'Drug Development', 'Patient Monitoring', 'Clinical Research']
    },
    {
      id: '9',
      icon: <Activity className="w-8 h-8 text-teal-500" />,
      title: 'AI Mental Health Assistant',
      description: 'AI-powered mental health monitoring, mood tracking, therapeutic support, and crisis detection for comprehensive wellness management.',
      features: [
        'Mood Tracking',
        'Stress Analysis',
        'Therapeutic Support',
        'Crisis Detection',
        'Wellness Recommendations',
        'Progress Monitoring',
        'Personalized Therapy',
        'Emergency Alerts'
      ],
      price: 'Starting at $199/month',
      category: 'Healthcare',
      popular: false,
      benefits: ['Improve mental health outcomes by 60%', 'Reduce therapy costs by 50%', 'Enable 24/7 support'],
      marketPrice: '$799/month',
      link: 'https://ziontechgroup.com/ai-mental-health',
      useCases: ['Mental Health Monitoring', 'Therapy Support', 'Crisis Intervention', 'Wellness Coaching']
    },

    // Financial AI
    {
      id: '10',
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and financial planning with regulatory compliance.',
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Credit Scoring',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Market Analysis',
        'Financial Planning'
      ],
      price: 'Starting at $1,999/month',
      category: 'Finance',
      popular: true,
      benefits: ['Reduce fraud by 90%', 'Improve risk assessment by 70%', 'Increase trading profits by 25%'],
      marketPrice: '$7,999/month',
      link: 'https://ziontechgroup.com/ai-financial-services',
      useCases: ['Fraud Prevention', 'Risk Management', 'Algorithmic Trading', 'Credit Assessment']
    },
    {
      id: '11',
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: 'AI Investment Optimizer',
      description: 'Intelligent investment platform with portfolio optimization, market prediction, and automated trading strategies powered by AI.',
      features: [
        'Portfolio Optimization',
        'Market Prediction',
        'Automated Trading',
        'Risk Management',
        'Performance Analytics',
        'Tax Optimization',
        'Rebalancing AI',
        'Alternative Investments'
      ],
      price: 'Starting at $499/month',
      category: 'Finance',
      popular: false,
      benefits: ['Increase returns by 20%', 'Reduce risk by 35%', 'Optimize tax efficiency by 40%'],
      marketPrice: '$1,999/month',
      link: 'https://ziontechgroup.com/ai-investment-optimizer',
      useCases: ['Portfolio Management', 'Trading Automation', 'Risk Assessment', 'Tax Planning']
    },

    // E-commerce AI
    {
      id: '12',
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines, dynamic pricing, inventory optimization, and customer insights.',
      features: [
        'Recommendation Engine',
        'Dynamic Pricing',
        'Inventory Optimization',
        'Customer Insights',
        'Sales Forecasting',
        'Personalization',
        'Search Optimization',
        'Conversion Analytics'
      ],
      price: 'Starting at $799/month',
      category: 'E-commerce',
      popular: true,
      benefits: ['Increase sales by 60%', 'Reduce cart abandonment by 50%', 'Improve customer experience'],
      marketPrice: '$3,199/month',
      link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
      useCases: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation']
    },

    // Cybersecurity AI
    {
      id: '13',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity with threat detection, incident response, vulnerability assessment, and compliance monitoring.',
      features: [
        'Threat Detection',
        'Incident Response',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Behavioral Analysis',
        'Automated Response',
        'Security Analytics',
        'Risk Assessment'
      ],
      price: 'Starting at $1,299/month',
      category: 'Cybersecurity',
      popular: true,
      benefits: ['Reduce security incidents by 85%', 'Improve response time by 70%', 'Ensure compliance'],
      marketPrice: '$4,999/month',
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      useCases: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Risk Assessment']
    },

    // Legal AI
    {
      id: '14',
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      title: 'AI Legal Assistant',
      description: 'AI-powered legal document analysis, contract review, compliance monitoring, and legal research automation.',
      features: [
        'Document Analysis',
        'Contract Review',
        'Compliance Monitoring',
        'Legal Research',
        'Risk Assessment',
        'Case Law Analysis',
        'Document Generation',
        'Deadline Tracking'
      ],
      price: 'Starting at $899/month',
      category: 'Legal',
      popular: false,
      benefits: ['Reduce legal costs by 50%', 'Improve accuracy by 90%', 'Save 20 hours per week'],
      marketPrice: '$3,599/month',
      link: 'https://ziontechgroup.com/ai-legal-assistant',
      useCases: ['Contract Analysis', 'Legal Research', 'Compliance Monitoring', 'Document Review']
    },

    // Education AI
    {
      id: '15',
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: 'AI Educational Platform',
      description: 'Personalized learning platform with AI-powered content adaptation, student performance analytics, and automated tutoring.',
      features: [
        'Personalized Learning',
        'Content Adaptation',
        'Performance Analytics',
        'Automated Tutoring',
        'Assessment Generation',
        'Learning Paths',
        'Progress Tracking',
        'Adaptive Testing'
      ],
      price: 'Starting at $299/month',
      category: 'Education',
      popular: false,
      benefits: ['Improve learning outcomes by 60%', 'Increase engagement by 80%', 'Reduce teaching workload'],
      marketPrice: '$1,199/month',
      link: 'https://ziontechgroup.com/ai-educational-platform',
      useCases: ['Personalized Learning', 'Student Assessment', 'Content Creation', 'Tutoring Support']
    },

    // Manufacturing AI
    {
      id: '16',
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: 'AI Manufacturing Intelligence',
      description: 'AI-powered manufacturing optimization with predictive maintenance, quality control, supply chain optimization, and production planning.',
      features: [
        'Predictive Maintenance',
        'Quality Control',
        'Supply Chain Optimization',
        'Production Planning',
        'Defect Detection',
        'Energy Optimization',
        'Process Optimization',
        'Resource Allocation'
      ],
      price: 'Starting at $1,599/month',
      category: 'Manufacturing',
      popular: false,
      benefits: ['Reduce downtime by 50%', 'Improve quality by 40%', 'Optimize costs by 30%'],
      marketPrice: '$6,399/month',
      link: 'https://ziontechgroup.com/ai-manufacturing',
      useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Management', 'Production Optimization']
    },

    // Real Estate AI
    {
      id: '17',
      icon: <Home className="w-8 h-8 text-green-500" />,
      title: 'AI Real Estate Analytics',
      description: 'Advanced real estate AI with property valuation, market analysis, investment insights, and automated property management.',
      features: [
        'Property Valuation',
        'Market Analysis',
        'Investment Insights',
        'Property Management',
        'Tenant Screening',
        'Rent Optimization',
        'Market Prediction',
        'Portfolio Management'
      ],
      price: 'Starting at $499/month',
      category: 'Real Estate',
      popular: false,
      benefits: ['Improve investment decisions by 60%', 'Increase ROI by 35%', 'Reduce management costs'],
      marketPrice: '$1,999/month',
      link: 'https://ziontechgroup.com/ai-real-estate',
      useCases: ['Property Valuation', 'Market Analysis', 'Investment Planning', 'Property Management']
    },

    // Voice & Speech AI
    {
      id: '18',
      icon: <Mic className="w-8 h-8 text-cyan-500" />,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: [
        'Voice Recognition',
        'Natural Language Processing',
        'Multi-language Support',
        'Custom Wake Words',
        'Integration APIs',
        'Analytics Dashboard',
        'Mobile App',
        'IoT Integration'
      ],
      price: 'Starting at $599/month',
      category: 'Voice AI',
      popular: true,
      benefits: ['Improve customer experience by 60%', 'Reduce support costs by 50%', 'Enable hands-free interaction'],
      marketPrice: '$2,399/month',
      link: 'https://ziontechgroup.com/ai-voice-assistant',
      useCases: ['Customer Service', 'Smart Home Control', 'Voice Commands', 'Accessibility']
    },

    // Development AI
    {
      id: '19',
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI coding assistant with code completion, debugging, optimization, and automated testing for multiple programming languages.',
      features: [
        'Code Completion',
        'Debugging Assistant',
        'Code Optimization',
        'Automated Testing',
        'Multi-language Support',
        'Documentation Generation',
        'Code Review',
        'Refactoring Suggestions'
      ],
      price: 'Starting at $199/month',
      category: 'Development',
      popular: true,
      benefits: ['Increase coding speed by 50%', 'Reduce bugs by 70%', 'Improve code quality'],
      marketPrice: '$799/month',
      link: 'https://ziontechgroup.com/ai-code-assistant',
      useCases: ['Code Development', 'Debugging', 'Code Review', 'Documentation']
    },

    // HR AI
    {
      id: '20',
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI HR Solutions',
      description: 'Comprehensive AI HR platform with recruitment automation, employee analytics, performance management, and workforce optimization.',
      features: [
        'Recruitment Automation',
        'Employee Analytics',
        'Performance Management',
        'Workforce Optimization',
        'Resume Screening',
        'Interview Scheduling',
        'Skills Assessment',
        'Retention Analysis'
      ],
      price: 'Starting at $699/month',
      category: 'HR',
      popular: false,
      benefits: ['Reduce hiring time by 60%', 'Improve candidate quality by 70%', 'Increase retention by 40%'],
      marketPrice: '$2,799/month',
      link: 'https://ziontechgroup.com/ai-hr-solutions',
      useCases: ['Recruitment', 'Performance Management', 'Employee Analytics', 'Workforce Planning']
    }
  ];

  const categories = [
    'All',
    'Core AI',
    'Analytics',
    'Customer Service',
    'Marketing',
    'Sales',
    'Content',
    'Computer Vision',
    'Healthcare',
    'Finance',
    'E-commerce',
    'Cybersecurity',
    'Legal',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Voice AI',
    'Development',
    'HR'
  ];

  const benefits = [
    'Increase efficiency by up to 60%',
    'Reduce operational costs by 40%',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    '24/7 automated operations',
    'Predictive analytics and forecasting',
    'Enhanced customer experience'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced AI Solutions for Business</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, AI consulting, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions including machine learning, natural language processing, computer vision, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                      {service.useCases.length > 2 && (
                        <span className="text-gray-400 text-xs">
                          +{service.useCases.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save {Math.round((parseFloat(service.marketPrice.replace('$', '').replace('/month', '').replace(',', '')) - parseFloat(service.price.replace('$', '').replace('/month', '').replace(',', ''))) / parseFloat(service.marketPrice.replace('$', '').replace('/month', '').replace(',', '')) * 100)}% vs market price
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and discover how our solutions can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;