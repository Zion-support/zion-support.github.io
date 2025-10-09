'use client';
import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  CheckSquare, 
  TrendingUp, 
  Globe, 
  Sparkles, 
  Target, 
  Code, 
  Settings, 
  FileText, 
  Shield, 
  Star,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Clock,
  Award,
  Eye,
  Mic,
  Camera,
  Cpu,
  Database,
  Lock,
  Smartphone,
  MessageSquare,
  Search,
  Image,
  Video,
  Music,
  Palette,
  ShoppingCart,
  CreditCard,
  Heart,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Plane
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      category: 'marketing',
      description: 'Intelligent marketing automation with AI-powered customer segmentation, personalization, and campaign optimization.',
      features: ['Customer Segmentation', 'Personalized Campaigns', 'Predictive Analytics', 'A/B Testing', 'ROI Optimization'],
      price: 'Starting at $1,500/month',
      priceYearly: 'Starting at $15,000/year',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      rating: 4.9,
      clients: '400+',
      demo: 'https://demo.ziontechgroup.com/ai-marketing',
      docs: 'https://docs.ziontechgroup.com/ai-marketing'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'automation',
      description: 'Intelligent process automation using AI to streamline workflows and reduce manual tasks.',
      features: ['Workflow Automation', 'Document Processing', 'Decision Making', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $2,000/month',
      priceYearly: 'Starting at $20,000/year',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      rating: 4.8,
      clients: '300+',
      demo: 'https://demo.ziontechgroup.com/ai-automation',
      docs: 'https://docs.ziontechgroup.com/ai-automation'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.',
      features: ['Medical Imaging Analysis', 'Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery'],
      price: 'Starting at $5,000/month',
      priceYearly: 'Starting at $50,000/year',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      popular: false,
      rating: 4.9,
      clients: '50+',
      demo: 'https://demo.ziontechgroup.com/ai-healthcare',
      docs: 'https://docs.ziontechgroup.com/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech Solutions',
      category: 'fintech',
      description: 'Advanced AI solutions for financial services including fraud detection, risk assessment, and trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance'],
      price: 'Starting at $3,000/month',
      priceYearly: 'Starting at $30,000/year',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      rating: 4.8,
      clients: '100+',
      demo: 'https://demo.ziontechgroup.com/ai-fintech',
      docs: 'https://docs.ziontechgroup.com/ai-fintech'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'content',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      features: ['Blog Writing', 'Social Media Posts', 'Marketing Copy', 'Technical Docs', 'Multi-language'],
      price: 'Starting at $500/month',
      priceYearly: 'Starting at $5,000/year',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      rating: 4.7,
      clients: '500+',
      demo: 'https://demo.ziontechgroup.com/ai-content',
      docs: 'https://docs.ziontechgroup.com/ai-content'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      category: 'analytics',
      description: 'Advanced AI-powered data analytics with predictive modeling and real-time insights.',
      features: ['Predictive Modeling', 'Real-time Analytics', 'Data Visualization', 'Anomaly Detection', 'Business Intelligence'],
      price: 'Starting at $1,200/month',
      priceYearly: 'Starting at $12,000/year',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      rating: 4.8,
      clients: '250+',
      demo: 'https://demo.ziontechgroup.com/ai-analytics',
      docs: 'https://docs.ziontechgroup.com/ai-analytics'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      category: 'security',
      description: 'AI-powered cybersecurity solutions for threat detection, prevention, and response.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Vulnerability Assessment', 'Incident Investigation'],
      price: 'Starting at $2,500/month',
      priceYearly: 'Starting at $25,000/year',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: true,
      rating: 4.9,
      clients: '200+',
      demo: 'https://demo.ziontechgroup.com/ai-cybersecurity',
      docs: 'https://docs.ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      description: 'Intelligent workflow automation that learns and adapts to optimize business processes.',
      features: ['Process Learning', 'Adaptive Automation', 'Exception Handling', 'Performance Optimization', 'Integration'],
      price: 'Starting at $1,800/month',
      priceYearly: 'Starting at $18,000/year',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      rating: 4.7,
      clients: '150+',
      demo: 'https://demo.ziontechgroup.com/ai-workflow',
      docs: 'https://docs.ziontechgroup.com/ai-workflow'
    },
    {
      id: 'ai-mobile-app-development',
      name: 'AI Mobile App Development',
      category: 'development',
      description: 'AI-powered mobile app development with intelligent features and personalized experiences.',
      features: ['Intelligent Features', 'Personalization', 'Voice Recognition', 'Image Processing', 'Predictive UI'],
      price: 'Starting at $4,000/project',
      priceYearly: 'Starting at $40,000/year',
      icon: Smartphone,
      color: 'from-teal-500 to-cyan-500',
      popular: true,
      rating: 4.8,
      clients: '120+',
      demo: 'https://demo.ziontechgroup.com/ai-mobile',
      docs: 'https://docs.ziontechgroup.com/ai-mobile'
    },
    {
      id: 'ai-ecommerce-solutions',
      name: 'AI E-commerce Solutions',
      category: 'ecommerce',
      description: 'AI-powered e-commerce solutions for personalized shopping experiences and sales optimization.',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Service', 'Sales Forecasting'],
      price: 'Starting at $1,000/month',
      priceYearly: 'Starting at $10,000/year',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      popular: true,
      rating: 4.6,
      clients: '300+',
      demo: 'https://demo.ziontechgroup.com/ai-ecommerce',
      docs: 'https://docs.ziontechgroup.com/ai-ecommerce'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'support',
      description: 'Intelligent customer support with AI chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Multi-language'],
      price: 'Starting at $800/month',
      priceYearly: 'Starting at $8,000/year',
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
      popular: true,
      rating: 4.7,
      clients: '400+',
      demo: 'https://demo.ziontechgroup.com/ai-support',
      docs: 'https://docs.ziontechgroup.com/ai-support'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'sales',
      description: 'AI-powered sales automation with lead scoring, pipeline management, and sales forecasting.',
      features: ['Lead Scoring', 'Pipeline Management', 'Sales Forecasting', 'Email Automation', 'Performance Analytics'],
      price: 'Starting at $1,200/month',
      priceYearly: 'Starting at $12,000/year',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-500',
      popular: false,
      rating: 4.6,
      clients: '180+',
      demo: 'https://demo.ziontechgroup.com/ai-sales',
      docs: 'https://docs.ziontechgroup.com/ai-sales'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      category: 'analytics',
      description: 'Intelligent data visualization with AI-powered insights and interactive dashboards.',
      features: ['Interactive Dashboards', 'AI Insights', 'Real-time Updates', 'Custom Visualizations', 'Collaboration'],
      price: 'Starting at $900/month',
      priceYearly: 'Starting at $9,000/year',
      icon: BarChart,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      rating: 4.5,
      clients: '100+',
      demo: 'https://demo.ziontechgroup.com/ai-visualization',
      docs: 'https://docs.ziontechgroup.com/ai-visualization'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation',
      category: 'marketing',
      description: 'AI-powered lead generation with intelligent prospecting and qualification.',
      features: ['Intelligent Prospecting', 'Lead Qualification', 'Contact Enrichment', 'Engagement Scoring', 'CRM Integration'],
      price: 'Starting at $700/month',
      priceYearly: 'Starting at $7,000/year',
      icon: Target,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      rating: 4.8,
      clients: '250+',
      demo: 'https://demo.ziontechgroup.com/ai-leads',
      docs: 'https://docs.ziontechgroup.com/ai-leads'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      category: 'automation',
      description: 'Intelligent document processing with OCR, classification, and data extraction.',
      features: ['OCR Processing', 'Document Classification', 'Data Extraction', 'Form Processing', 'Compliance'],
      price: 'Starting at $600/month',
      priceYearly: 'Starting at $6,000/year',
      icon: FileText,
      color: 'from-gray-500 to-slate-500',
      popular: false,
      rating: 4.6,
      clients: '150+',
      demo: 'https://demo.ziontechgroup.com/ai-documents',
      docs: 'https://docs.ziontechgroup.com/ai-documents'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      category: 'voice',
      description: 'Custom AI voice assistants for customer service, internal operations, and smart home integration.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language', 'Custom Commands', 'Integration'],
      price: 'Starting at $1,500/month',
      priceYearly: 'Starting at $15,000/year',
      icon: Mic,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      rating: 4.7,
      clients: '80+',
      demo: 'https://demo.ziontechgroup.com/ai-voice',
      docs: 'https://docs.ziontechgroup.com/ai-voice'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      category: 'vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Inspection', 'Visual Search'],
      price: 'Starting at $2,200/month',
      priceYearly: 'Starting at $22,000/year',
      icon: Eye,
      color: 'from-emerald-500 to-green-500',
      popular: true,
      rating: 4.8,
      clients: '120+',
      demo: 'https://demo.ziontechgroup.com/ai-vision',
      docs: 'https://docs.ziontechgroup.com/ai-vision'
    },
    {
      id: 'ai-nlp',
      name: 'AI Natural Language Processing',
      category: 'nlp',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Entity Recognition'],
      price: 'Starting at $1,000/month',
      priceYearly: 'Starting at $10,000/year',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      rating: 4.6,
      clients: '200+',
      demo: 'https://demo.ziontechgroup.com/ai-nlp',
      docs: 'https://docs.ziontechgroup.com/ai-nlp'
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      category: 'recommendations',
      description: 'Intelligent recommendation systems for personalized content, products, and services.',
      features: ['Personalized Recommendations', 'Collaborative Filtering', 'Content-based Filtering', 'Real-time Updates', 'A/B Testing'],
      price: 'Starting at $1,300/month',
      priceYearly: 'Starting at $13,000/year',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      rating: 4.7,
      clients: '180+',
      demo: 'https://demo.ziontechgroup.com/ai-recommendations',
      docs: 'https://docs.ziontechgroup.com/ai-recommendations'
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics',
      category: 'analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and decision making.',
      features: ['Forecasting Models', 'Risk Prediction', 'Demand Planning', 'Churn Prediction', 'Performance Optimization'],
      price: 'Starting at $1,800/month',
      priceYearly: 'Starting at $18,000/year',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      popular: true,
      rating: 4.8,
      clients: '160+',
      demo: 'https://demo.ziontechgroup.com/ai-predictive',
      docs: 'https://docs.ziontechgroup.com/ai-predictive'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'marketing', name: 'Marketing', count: aiServices.filter(s => s.category === 'marketing').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length },
    { id: 'healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'healthcare').length },
    { id: 'fintech', name: 'Fintech', count: aiServices.filter(s => s.category === 'fintech').length },
    { id: 'content', name: 'Content', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'development', name: 'Development', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'ecommerce', name: 'E-commerce', count: aiServices.filter(s => s.category === 'ecommerce').length },
    { id: 'support', name: 'Support', count: aiServices.filter(s => s.category === 'support').length },
    { id: 'sales', name: 'Sales', count: aiServices.filter(s => s.category === 'sales').length },
    { id: 'voice', name: 'Voice', count: aiServices.filter(s => s.category === 'voice').length },
    { id: 'vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'nlp', name: 'NLP', count: aiServices.filter(s => s.category === 'nlp').length },
    { id: 'recommendations', name: 'Recommendations', count: aiServices.filter(s => s.category === 'recommendations').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cutting-edge AI services including machine learning, natural language processing, computer vision, 
            and intelligent automation to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button text-lg px-8 py-4">
              <Brain className="w-5 h-5 mr-2" />
              Start AI Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-all">
              <Play className="w-5 h-5 mr-2 inline" />
              Watch AI Demo
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-700 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded">
                        POPULAR
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.priceYearly}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{service.clients} clients</div>
                    <div className="text-xs text-gray-500">Served</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 cyber-button text-sm py-2">
                    <Play className="w-4 h-4 mr-1" />
                    Try Demo
                  </button>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                  <a
                    href={service.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 text-gray-400 rounded-lg hover:bg-gray-400/10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our AI services to automate processes, gain insights, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                <Award className="w-5 h-5 mr-2" />
                Start AI Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                <Users className="w-5 h-5 mr-2 inline" />
                Contact AI Experts
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <Clock className="w-4 h-4 inline mr-1" />
              Free AI consultation • Custom solutions • 24/7 support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
