'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, CheckCircle, ArrowRight, Star, Clock, Globe, Database, Users, Settings, Cpu, Lock, Smartphone, Mail, Calendar, Code, PieChart, Activity, CreditCard, ShoppingCart, BookOpen, Building, Heart, Car, Leaf, Gamepad2, GraduationCap, Briefcase, Home, Scale, Book, Truck, Wrench, Camera, Music, Video, Image } from 'lucide-react';

interface AIService {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  category: string;
  benefits: string[];
  popular: boolean;
  link: string;
}

const AIServicesPage: React.FC = () => {
  const aiServices: AIService[] = [
    // Core AI Services
    {
      id: '1',
      icon: '🤖',
      title: 'AI Solutions Platform',
      description: 'Comprehensive AI platform with machine learning, natural language processing, and computer vision capabilities for enterprise applications.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Real-time Processing', 'API Integration', 'Custom Model Training', 'Scalable Infrastructure'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2,500/month',
      category: 'Core AI',
      benefits: ['Increase efficiency by 60%', 'Reduce operational costs by 40%', 'Improve decision accuracy by 85%'],
      popular: true,
      link: '/ai-solutions'
    },
    {
      id: '2',
      icon: '🧠',
      title: 'AI Voice Assistant Platform',
      description: 'Advanced voice AI platform with natural language understanding, multi-language support, and enterprise integration capabilities.',
      features: ['Voice Recognition', 'Natural Language Understanding', 'Multi-language Support', 'Custom Wake Words', 'Enterprise Integration', 'Conversation Management', 'Analytics Dashboard', 'API Development'],
      price: 'Starting at $299/month',
      marketPrice: '$499/month',
      category: 'Voice AI',
      benefits: ['Improve customer engagement by 70%', 'Reduce support costs by 50%', 'Enable 24/7 voice interactions'],
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      id: '3',
      icon: '🔮',
      title: 'AI Predictive Maintenance',
      description: 'Intelligent predictive maintenance system that prevents equipment failures and optimizes maintenance schedules using IoT and machine learning.',
      features: ['Failure Prediction', 'Real-time Monitoring', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration', 'Alert System', 'Performance Analytics', 'ROI Tracking'],
      price: 'Starting at $599/month',
      marketPrice: '$999/month',
      category: 'Industrial AI',
      benefits: ['Reduce downtime by 80%', 'Lower maintenance costs by 35%', 'Extend equipment lifespan by 40%'],
      popular: true,
      link: '/ai-predictive-maintenance'
    },

    // Marketing & Sales AI
    {
      id: '4',
      icon: '📈',
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns, intelligent optimization, and advanced analytics.',
      features: ['Campaign Automation', 'Personalization Engine', 'A/B Testing', 'ROI Optimization', 'Multi-channel Marketing', 'Lead Scoring', 'Customer Segmentation', 'Performance Analytics'],
      price: 'Starting at $299/month',
      marketPrice: '$499/month',
      category: 'Marketing AI',
      benefits: ['Increase conversion rates by 45%', 'Reduce marketing costs by 30%', 'Improve customer engagement by 60%'],
      popular: true,
      link: '/ai-marketing-automation'
    },
    {
      id: '5',
      icon: '💼',
      title: 'AI Sales Automation',
      description: 'Intelligent sales automation platform with lead scoring, automated outreach, and CRM integration for maximum sales efficiency.',
      features: ['Lead Scoring', 'Automated Outreach', 'CRM Integration', 'Sales Forecasting', 'Pipeline Management', 'Email Sequences', 'Call Analytics', 'Performance Tracking'],
      price: 'Starting at $399/month',
      marketPrice: '$699/month',
      category: 'Sales AI',
      benefits: ['Increase sales by 300%', 'Improve lead quality by 60%', 'Reduce sales cycle by 40%'],
      popular: false,
      link: '/ai-sales-automation'
    },
    {
      id: '6',
      icon: '🎯',
      title: 'AI Lead Generation',
      description: 'Advanced AI-powered lead generation platform that identifies, qualifies, and nurtures prospects automatically across multiple channels.',
      features: ['Lead Identification', 'Qualification Scoring', 'Automated Nurturing', 'Multi-channel Outreach', 'Social Media Integration', 'Email Sequences', 'CRM Integration', 'Analytics Dashboard'],
      price: 'Starting at $199/month',
      marketPrice: '$349/month',
      category: 'Sales AI',
      benefits: ['Generate 3x more qualified leads', 'Reduce cost per lead by 50%', 'Increase conversion rates by 35%'],
      popular: false,
      link: '/ai-lead-generation'
    },

    // Customer Support AI
    {
      id: '7',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Comprehensive AI-powered customer support platform with chatbots, ticket management, and knowledge base automation.',
      features: ['AI Chatbots', 'Ticket Management', 'Knowledge Base', 'Live Chat Integration', 'Multi-channel Support', 'Sentiment Analysis', 'Customer Satisfaction', 'Automation Workflows'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      category: 'Support AI',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 80%', 'Increase customer satisfaction by 50%'],
      popular: true,
      link: '/ai-customer-support'
    },
    {
      id: '8',
      icon: '📞',
      title: 'AI Call Center Assistant',
      description: 'Intelligent call center solution with AI-powered call routing, sentiment analysis, and real-time agent assistance.',
      features: ['Call Routing', 'Sentiment Analysis', 'Real-time Assistance', 'Call Transcription', 'Quality Monitoring', 'Performance Analytics', 'Agent Training', 'Integration APIs'],
      price: 'Starting at $299/month',
      marketPrice: '$499/month',
      category: 'Support AI',
      benefits: ['Improve call efficiency by 40%', 'Reduce wait times by 50%', 'Enhance customer experience'],
      popular: false,
      link: '/ai-call-center'
    },

    // Content & Creative AI
    {
      id: '9',
      icon: '✍️',
      title: 'AI Content Generation Studio',
      description: 'Advanced AI content creation platform that generates high-quality text, images, and videos for marketing campaigns and content marketing.',
      features: ['AI Writing Assistant', 'Image Generation', 'Video Creation', 'Content Templates', 'Brand Voice Training', 'SEO Optimization', 'Plagiarism Checker', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$299/month',
      category: 'Content AI',
      benefits: ['Create content 10x faster', 'Reduce content costs by 70%', 'Improve content quality and consistency'],
      popular: true,
      link: '/ai-content-generation'
    },
    {
      id: '10',
      icon: '🎨',
      title: 'AI Design Assistant',
      description: 'Intelligent design platform that creates logos, graphics, and marketing materials with AI-powered design tools and brand consistency.',
      features: ['Logo Generation', 'Graphic Design', 'Brand Kit Creation', 'Template Library', 'Color Palette Generator', 'Font Matching', 'Design Analytics', 'Collaboration Tools'],
      price: 'Starting at $99/month',
      marketPrice: '$199/month',
      category: 'Creative AI',
      benefits: ['Reduce design time by 80%', 'Maintain brand consistency', 'Lower design costs by 60%'],
      popular: false,
      link: '/ai-design-assistant'
    },

    // Data & Analytics AI
    {
      id: '11',
      icon: '📊',
      title: 'AI Data Analytics Platform',
      description: 'Advanced AI-powered analytics platform that transforms data into actionable insights with predictive modeling and automated reporting.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models', 'Automated Reports', 'Data Integration', 'API Development'],
      price: 'Starting at $399/month',
      marketPrice: '$699/month',
      category: 'Analytics AI',
      benefits: ['Improve decision-making by 70%', 'Reduce analysis time by 80%', 'Increase data accuracy by 95%'],
      popular: true,
      link: '/ai-data-analytics'
    },
    {
      id: '12',
      icon: '🔍',
      title: 'AI Business Intelligence',
      description: 'Comprehensive business intelligence solution with AI-powered insights, forecasting, and strategic recommendations.',
      features: ['Business Intelligence', 'Forecasting Models', 'Strategic Recommendations', 'Performance Tracking', 'Competitive Analysis', 'Market Insights', 'ROI Analysis', 'Executive Dashboards'],
      price: 'Starting at $499/month',
      marketPrice: '$899/month',
      category: 'Analytics AI',
      benefits: ['Improve strategic planning', 'Increase revenue by 25%', 'Optimize business operations'],
      popular: false,
      link: '/ai-business-intelligence'
    },

    // Healthcare AI
    {
      id: '13',
      icon: '🏥',
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support.',
      features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance', 'Clinical Workflows', 'Treatment Recommendations', 'Research Tools'],
      price: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      category: 'Healthcare AI',
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce treatment costs by 30%', 'Enhance patient outcomes'],
      popular: true,
      link: '/ai-healthcare'
    },
    {
      id: '14',
      icon: '💊',
      title: 'AI Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis with machine learning algorithms.',
      features: ['Molecular Analysis', 'Drug Discovery', 'Clinical Trials', 'Side Effect Prediction', 'Drug Interaction Analysis', 'Research Collaboration', 'Regulatory Compliance', 'Patent Analysis'],
      price: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      category: 'Healthcare AI',
      benefits: ['Accelerate drug discovery by 50%', 'Reduce research costs by 40%', 'Improve success rates'],
      popular: false,
      link: '/ai-drug-discovery'
    },

    // Financial AI
    {
      id: '15',
      icon: '💰',
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, algorithmic trading, and financial analysis.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance Monitoring', 'Portfolio Management', 'Market Analysis', 'Regulatory Reporting'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2,999/month',
      category: 'Financial AI',
      benefits: ['Reduce fraud by 90%', 'Improve risk assessment by 60%', 'Increase trading profits by 25%'],
      popular: true,
      link: '/ai-fintech'
    },
    {
      id: '16',
      icon: '📈',
      title: 'AI Investment Optimizer',
      description: 'Intelligent investment platform with portfolio optimization, market prediction, and automated trading strategies.',
      features: ['Portfolio Optimization', 'Market Prediction', 'Automated Trading', 'Risk Management', 'Performance Analytics', 'Tax Optimization', 'Rebalancing', 'Client Reporting'],
      price: 'Starting at $799/month',
      marketPrice: '$1,499/month',
      category: 'Financial AI',
      benefits: ['Maximize returns by 30%', 'Minimize risk exposure', 'Automate investment decisions'],
      popular: false,
      link: '/ai-investment-optimizer'
    },

    // E-commerce AI
    {
      id: '17',
      icon: '🛒',
      title: 'AI E-commerce Solutions',
      description: 'Comprehensive e-commerce AI platform with recommendation engines, dynamic pricing, and customer behavior analysis.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting', 'Personalization', 'A/B Testing', 'Analytics Dashboard'],
      price: 'Starting at $799/month',
      marketPrice: '$1,299/month',
      category: 'E-commerce AI',
      benefits: ['Increase sales by 35%', 'Improve conversion rates by 50%', 'Reduce cart abandonment by 40%'],
      popular: true,
      link: '/ai-ecommerce-solutions'
    },
    {
      id: '18',
      icon: '📦',
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $599/month',
      marketPrice: '$999/month',
      category: 'E-commerce AI',
      benefits: ['Reduce inventory costs by 25%', 'Improve supplier performance', 'Minimize supply chain risks'],
      popular: false,
      link: '/ai-supply-chain'
    },

    // Cybersecurity AI
    {
      id: '19',
      icon: '🔒',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, vulnerability assessment, and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Security Monitoring', 'Incident Management', 'Compliance Reporting', 'Risk Analysis', 'Penetration Testing'],
      price: 'Starting at $799/month',
      marketPrice: '$1,499/month',
      category: 'Security AI',
      benefits: ['Prevent 99% of security breaches', 'Reduce response time by 80%', 'Lower compliance costs by 50%'],
      popular: true,
      link: '/ai-cybersecurity'
    },
    {
      id: '20',
      icon: '🛡️',
      title: 'AI Fraud Detection System',
      description: 'Real-time fraud detection and prevention system using machine learning to identify and block fraudulent activities.',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Transaction Monitoring', 'Alert System', 'Machine Learning Models', 'Integration APIs', 'Compliance Tools'],
      price: 'Starting at $499/month',
      marketPrice: '$899/month',
      category: 'Security AI',
      benefits: ['Detect fraud with 99.5% accuracy', 'Reduce false positives by 70%', 'Save millions in prevented losses'],
      popular: false,
      link: '/ai-fraud-detection'
    },

    // Document & Legal AI
    {
      id: '21',
      icon: '📄',
      title: 'AI Document Processing',
      description: 'Intelligent document processing platform with OCR, data extraction, and automated document analysis.',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Contract Analysis', 'Compliance Checking', 'Version Control', 'Search & Retrieval', 'Integration APIs'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      category: 'Document AI',
      benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Improve compliance accuracy'],
      popular: true,
      link: '/ai-document-processing'
    },
    {
      id: '22',
      icon: '⚖️',
      title: 'AI Legal Assistant',
      description: 'Comprehensive legal AI platform with contract analysis, legal research, and compliance monitoring.',
      features: ['Contract Analysis', 'Legal Research', 'Compliance Monitoring', 'Risk Assessment', 'Document Templates', 'Case Management', 'Billing Integration', 'Client Portal'],
      price: 'Starting at $499/month',
      marketPrice: '$999/month',
      category: 'Legal AI',
      benefits: ['Reduce legal review time by 70%', 'Improve compliance by 90%', 'Minimize legal risks'],
      popular: false,
      link: '/ai-legal-assistant'
    },

    // HR & Recruitment AI
    {
      id: '23',
      icon: '👥',
      title: 'AI HR Assistant',
      description: 'Intelligent HR platform with resume screening, candidate matching, performance management, and employee analytics.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Analysis', 'Skills Assessment', 'Onboarding Automation', 'Analytics Dashboard'],
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      category: 'HR AI',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      popular: true,
      link: '/ai-hr-assistant'
    },
    {
      id: '24',
      icon: '🎯',
      title: 'AI Recruitment Platform',
      description: 'Advanced recruitment platform with AI-powered candidate sourcing, interview scheduling, and talent pipeline management.',
      features: ['Candidate Sourcing', 'Interview Scheduling', 'Talent Pipeline', 'Skills Matching', 'Background Checks', 'Onboarding Tools', 'Analytics Dashboard', 'Integration APIs'],
      price: 'Starting at $399/month',
      marketPrice: '$699/month',
      category: 'HR AI',
      benefits: ['Find better candidates faster', 'Reduce recruitment costs', 'Improve hiring success rates'],
      popular: false,
      link: '/ai-recruitment-platform'
    },

    // Education AI
    {
      id: '25',
      icon: '🎓',
      title: 'AI Educational Platform',
      description: 'Comprehensive AI-powered educational platform with personalized learning, adaptive content, and student performance analytics.',
      features: ['Personalized Learning', 'Adaptive Content', 'Performance Analytics', 'Learning Paths', 'Progress Tracking', 'Assessment Tools', 'Certification', 'Mobile Learning'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      category: 'Education AI',
      benefits: ['Improve learning outcomes by 60%', 'Increase student engagement', 'Personalize education at scale'],
      popular: true,
      link: '/ai-education'
    },
    {
      id: '26',
      icon: '📚',
      title: 'AI Tutoring System',
      description: 'Intelligent tutoring system with personalized instruction, adaptive learning, and real-time feedback for students.',
      features: ['Personalized Instruction', 'Adaptive Learning', 'Real-time Feedback', 'Progress Tracking', 'Skill Assessment', 'Homework Help', 'Study Planning', 'Parent Reports'],
      price: 'Starting at $149/month',
      marketPrice: '$299/month',
      category: 'Education AI',
      benefits: ['Improve student performance', 'Provide 24/7 tutoring support', 'Adapt to individual learning styles'],
      popular: false,
      link: '/ai-tutoring-system'
    },

    // Manufacturing AI
    {
      id: '27',
      icon: '🏭',
      title: 'AI Manufacturing Optimizer',
      description: 'Intelligent manufacturing platform with production optimization, quality control, and predictive maintenance.',
      features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Management', 'Cost Analysis', 'Performance Metrics', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $999/month',
      marketPrice: '$1,999/month',
      category: 'Manufacturing AI',
      benefits: ['Increase production efficiency by 30%', 'Reduce defects by 50%', 'Optimize resource utilization'],
      popular: true,
      link: '/ai-manufacturing'
    },
    {
      id: '28',
      icon: '⚙️',
      title: 'AI Quality Control System',
      description: 'Advanced quality control system with computer vision, defect detection, and automated inspection for manufacturing.',
      features: ['Computer Vision', 'Defect Detection', 'Automated Inspection', 'Quality Reports', 'Integration APIs', 'Real-time Monitoring', 'Statistical Analysis', 'Compliance Tracking'],
      price: 'Starting at $799/month',
      marketPrice: '$1,499/month',
      category: 'Manufacturing AI',
      benefits: ['Improve quality by 95%', 'Reduce inspection time by 80%', 'Minimize defects and recalls'],
      popular: false,
      link: '/ai-quality-control'
    },

    // Transportation AI
    {
      id: '29',
      icon: '🚚',
      title: 'AI Transportation Optimizer',
      description: 'Intelligent transportation platform with route optimization, fleet management, and logistics planning.',
      features: ['Route Optimization', 'Fleet Management', 'Demand Prediction', 'Fuel Optimization', 'Driver Scheduling', 'Maintenance Planning', 'Performance Analytics', 'Integration APIs'],
      price: 'Starting at $599/month',
      marketPrice: '$1,199/month',
      category: 'Transportation AI',
      benefits: ['Reduce fuel costs by 20%', 'Improve delivery times', 'Optimize fleet utilization'],
      popular: true,
      link: '/ai-transportation'
    },
    {
      id: '30',
      icon: '🚗',
      title: 'AI Autonomous Vehicle Platform',
      description: 'Advanced AI platform for autonomous vehicle development with computer vision, sensor fusion, and decision making.',
      features: ['Computer Vision', 'Sensor Fusion', 'Decision Making', 'Path Planning', 'Object Detection', 'Safety Systems', 'Simulation Tools', 'Integration APIs'],
      price: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      category: 'Transportation AI',
      benefits: ['Develop safer autonomous vehicles', 'Reduce development time', 'Improve navigation accuracy'],
      popular: false,
      link: '/ai-autonomous-vehicles'
    }
  ];

  const categories = ['All', 'Core AI', 'Voice AI', 'Marketing AI', 'Sales AI', 'Support AI', 'Content AI', 'Analytics AI', 'Healthcare AI', 'Financial AI', 'E-commerce AI', 'Security AI', 'Document AI', 'Legal AI', 'HR AI', 'Education AI', 'Manufacturing AI', 'Transportation AI'];

  const benefits = [
    'Increase efficiency by up to 60%',
    'Reduce operational costs by 40%',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    'Automate repetitive tasks and processes',
    'Enhance customer experience and satisfaction',
    'Enable data-driven business strategies'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | 30+ Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of 30+ AI services including machine learning, natural language processing, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting, AI development, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of 30+ advanced AI services designed to transform your business. 
              From machine learning to computer vision, we provide cutting-edge AI solutions for every industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </Link>
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
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                {categories.slice(0, 8).map((category) => (
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

        {/* AI Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Choose from our comprehensive collection of AI services designed to solve specific business challenges.
              </p>
              <p className="text-gray-400">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={service.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our AI experts to discuss your requirements and get started with the perfect AI solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;