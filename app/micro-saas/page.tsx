'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  BarChart, 
  Calendar, 
  FileText, 
  Video, 
  Smartphone, 
  Mail, 
  Users, 
  DollarSign, 
  Settings, 
  Shield, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Rocket,
  Truck,
  Stethoscope,
  Clock,
  Database,
  ShoppingCart,
  Scale,
  Palette,
  Music,
  Cpu,
  Sprout,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // Productivity & Project Management
    { 
      name: 'AI Project Manager Pro', 
      href: '/ai-project-manager', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights, predictive analytics, and automated resource allocation',
      features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment', 'Predictive Analytics', 'Team Performance Insights'],
      popular: true,
      rating: 4.8,
      users: '2,500+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-project-manager'
    },
    { 
      name: 'AI Smart Calendar Pro', 
      href: '/ai-smart-calendar', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management with smart scheduling, conflict resolution, and productivity optimization',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights', 'Energy Level Tracking', 'Focus Time Blocks'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Workflow Automation Studio', 
      href: '/ai-workflow-automation', 
      icon: Zap, 
      category: 'Productivity', 
      price: '$149/mo',
      description: 'Visual workflow builder with AI-powered automation for complex business processes',
      features: ['Visual Workflow Builder', 'AI Process Discovery', 'Smart Triggers', 'Error Handling', 'Performance Analytics', 'Integration Hub'],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Time Tracker Pro', 
      href: '/ai-time-tracker', 
      icon: Clock, 
      category: 'Productivity', 
      price: '$59/mo',
      description: 'Intelligent time tracking with automatic categorization and productivity insights',
      features: ['Auto Time Tracking', 'Smart Categorization', 'Productivity Analytics', 'Focus Mode', 'Distraction Alerts', 'Team Reports'],
      popular: false,
      rating: 4.6,
      users: '1,200+',
      trial: '14-day free trial'
    },

    // Content Creation & Marketing
    { 
      name: 'AI Content Writer Pro', 
      href: '/ai-content-writer', 
      icon: FileText, 
      category: 'Content', 
      price: '$129/mo',
      description: 'Advanced AI content creation with SEO optimization, brand consistency, and multi-platform publishing',
      features: ['SEO Optimization', 'Brand Voice Training', 'Content Templates', 'Multi-language Support', 'Plagiarism Check', 'Performance Analytics'],
      popular: true,
      rating: 4.9,
      users: '4,100+',
      trial: '10-day free trial'
    },
    { 
      name: 'AI Video Generator Pro', 
      href: '/ai-video-generator', 
      icon: Video, 
      category: 'Content', 
      price: '$199/mo',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated storytelling',
      features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library', 'Brand Kit', 'Social Media Optimization'],
      popular: true,
      rating: 4.6,
      users: '2,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Social Media Manager Pro', 
      href: '/ai-social-media-manager', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$99/mo',
      description: 'Automated social media management with AI content generation, scheduling, and engagement optimization',
      features: ['Auto Posting', 'Content Generation', 'Analytics Dashboard', 'Engagement Optimization', 'Hashtag Research', 'Competitor Analysis'],
      popular: true,
      rating: 4.8,
      users: '3,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Email Marketing Suite', 
      href: '/ai-email-marketing', 
      icon: Mail, 
      category: 'Marketing', 
      price: '$79/mo',
      description: 'Intelligent email marketing with personalization, A/B testing, and automated campaign optimization',
      features: ['Personalization Engine', 'A/B Testing', 'Automation Workflows', 'Advanced Analytics', 'Deliverability Optimization', 'Template Library'],
      popular: true,
      rating: 4.7,
      users: '2,900+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI SEO Optimizer Pro', 
      href: '/ai-seo-optimizer', 
      icon: Globe, 
      category: 'Marketing', 
      price: '$149/mo',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking predictions',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Predictions', 'Competitor Analysis', 'Technical SEO Audit', 'Link Building'],
      popular: false,
      rating: 4.5,
      users: '1,600+',
      trial: '7-day free trial'
    },

    // Business & Finance
    { 
      name: 'AI Financial Advisor Pro', 
      href: '/ai-financial-advisor', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$299/mo',
      description: 'Personalized financial planning and investment advice powered by advanced AI algorithms',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Tax Optimization', 'Retirement Planning', 'Market Predictions'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Invoice Generator Pro', 
      href: '/ai-invoice-generator', 
      icon: FileText, 
      category: 'Business', 
      price: '$49/mo',
      description: 'Automated invoice generation with smart templates, payment tracking, and financial reporting',
      features: ['Smart Templates', 'Auto Calculations', 'Payment Tracking', 'Financial Reports', 'Tax Integration', 'Client Portal'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Expense Tracker Pro', 
      href: '/ai-expense-tracker', 
      icon: BarChart, 
      category: 'Finance', 
      price: '$39/mo',
      description: 'Intelligent expense tracking with automatic categorization, receipt scanning, and budget management',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Management', 'Tax Preparation', 'Expense Reports', 'Spending Insights'],
      popular: false,
      rating: 4.6,
      users: '1,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Lead Generation Suite', 
      href: '/ai-lead-generation', 
      icon: Users, 
      category: 'Business', 
      price: '$199/mo',
      description: 'AI-powered lead generation with automated prospecting, qualification, and nurturing',
      features: ['Lead Scoring', 'Auto Prospecting', 'Email Sequences', 'CRM Integration', 'Lead Nurturing', 'Conversion Analytics'],
      popular: true,
      rating: 4.8,
      users: '2,700+',
      trial: '21-day free trial'
    },

    // Development & Technical
    { 
      name: 'AI Code Assistant Pro', 
      href: '/ai-code-assistant', 
      icon: Code, 
      category: 'Development', 
      price: '$179/mo',
      description: 'Advanced AI coding assistant with code generation, debugging, and optimization suggestions',
      features: ['Code Generation', 'Debug Assistant', 'Code Review', 'Documentation', 'Test Generation', 'Performance Optimization'],
      popular: true,
      rating: 4.9,
      users: '4,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI API Builder Pro', 
      href: '/ai-api-builder', 
      icon: Settings, 
      category: 'Development', 
      price: '$249/mo',
      description: 'Build and manage APIs with AI-powered code generation, testing, and documentation',
      features: ['API Generation', 'Auto Testing', 'Documentation', 'Rate Limiting', 'Authentication', 'Monitoring'],
      popular: false,
      rating: 4.7,
      users: '1,300+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Database Optimizer', 
      href: '/ai-database-optimizer', 
      icon: Database, 
      category: 'Development', 
      price: '$199/mo',
      description: 'AI-powered database optimization with query analysis, indexing suggestions, and performance monitoring',
      features: ['Query Optimization', 'Index Suggestions', 'Performance Monitoring', 'Security Analysis', 'Backup Management', 'Scaling Recommendations'],
      popular: false,
      rating: 4.6,
      users: '1,100+',
      trial: '14-day free trial'
    },

    // Security & Compliance
    { 
      name: 'AI Security Monitor Pro', 
      href: '/ai-security-monitor', 
      icon: Shield, 
      category: 'Security', 
      price: '$299/mo',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring', 'Security Reports', 'Risk Assessment'],
      popular: true,
      rating: 4.8,
      users: '1,900+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Password Manager Pro', 
      href: '/ai-password-manager', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Multi-device Sync', 'Team Sharing', '2FA Integration'],
      popular: true,
      rating: 4.7,
      users: '3,800+',
      trial: '14-day free trial'
    },

    // Specialized Industry Solutions
    { 
      name: 'AI Healthcare Assistant Pro', 
      href: '/ai-healthcare-assistant', 
      icon: Stethoscope, 
      category: 'Healthcare', 
      price: '$399/mo',
      description: 'AI-powered healthcare management with patient scheduling, medical records, and diagnostic assistance',
      features: ['Patient Scheduling', 'Medical Records', 'Diagnostic Support', 'Prescription Management', 'Insurance Processing', 'Compliance Tracking'],
      popular: false,
      rating: 4.9,
      users: '800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Legal Assistant Pro', 
      href: '/ai-legal-assistant', 
      icon: Scale, 
      category: 'Legal', 
      price: '$349/mo',
      description: 'AI-powered legal research, document analysis, and case management for law firms',
      features: ['Legal Research', 'Document Analysis', 'Case Management', 'Contract Review', 'Compliance Tracking', 'Client Communication'],
      popular: false,
      rating: 4.8,
      users: '600+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI E-commerce Optimizer', 
      href: '/ai-ecommerce-optimizer', 
      icon: ShoppingCart, 
      category: 'E-commerce', 
      price: '$199/mo',
      description: 'AI-powered e-commerce optimization with product recommendations, pricing strategies, and inventory management',
      features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Segmentation', 'Conversion Optimization', 'Analytics Dashboard'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI HR Assistant Pro', 
      href: '/ai-hr-assistant', 
      icon: Users, 
      category: 'HR', 
      price: '$179/mo',
      description: 'AI-powered HR management with recruitment, employee engagement, and performance analytics',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding', 'Performance Tracking', 'Engagement Surveys', 'Compliance Management'],
      popular: true,
      rating: 4.6,
      users: '1,700+',
      trial: '21-day free trial',
      link: 'https://ziontechgroup.com/ai-hr-assistant'
    },

    // Advanced AI & Machine Learning
    { 
      name: 'AI Quantum Financial Oracle', 
      href: '/ai-quantum-financial-oracle', 
      icon: Brain, 
      category: 'Quantum AI', 
      price: '$2,999/mo',
      description: 'Revolutionary quantum-powered financial prediction system with 99.7% accuracy in market forecasting',
      features: ['Quantum Market Analysis', 'Real-time Risk Assessment', 'Portfolio Optimization', 'Crypto Prediction', 'Economic Modeling', 'Quantum Encryption'],
      popular: true,
      rating: 4.9,
      users: '150+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-quantum-financial-oracle'
    },
    { 
      name: 'AI Neural Memory Assistant', 
      href: '/ai-neural-memory-assistant', 
      icon: Brain, 
      category: 'AI Memory', 
      price: '$399/mo',
      description: 'Advanced AI system that learns and remembers everything about your business for instant recall and decision making',
      features: ['Infinite Memory Storage', 'Contextual Recall', 'Pattern Recognition', 'Predictive Memory', 'Knowledge Graphs', 'Smart Search'],
      popular: true,
      rating: 4.8,
      users: '800+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-neural-memory-assistant'
    },
    { 
      name: 'AI Holographic Workspace', 
      href: '/ai-holographic-workspace', 
      icon: Globe, 
      category: 'Immersive Tech', 
      price: '$1,299/mo',
      description: 'Next-generation 3D holographic workspace for immersive collaboration and data visualization',
      features: ['3D Data Visualization', 'Holographic Meetings', 'Spatial Computing', 'AR/VR Integration', 'Gesture Controls', 'Real-time Collaboration'],
      popular: false,
      rating: 4.7,
      users: '200+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-holographic-workspace'
    },

    // Specialized Industry Solutions
    { 
      name: 'AI Drug Discovery Pro', 
      href: '/ai-drug-discovery-pro', 
      icon: Stethoscope, 
      category: 'Healthcare', 
      price: '$4,999/mo',
      description: 'Revolutionary AI platform for pharmaceutical drug discovery with molecular simulation and clinical trial optimization',
      features: ['Molecular Simulation', 'Drug Target Identification', 'Clinical Trial Design', 'Side Effect Prediction', 'Patent Analysis', 'Regulatory Compliance'],
      popular: true,
      rating: 4.9,
      users: '50+',
      trial: '60-day free trial',
      link: 'https://ziontechgroup.com/ai-drug-discovery-pro'
    },
    { 
      name: 'AI Climate Solutions Pro', 
      href: '/ai-climate-solutions-pro', 
      icon: Globe, 
      category: 'Climate Tech', 
      price: '$2,499/mo',
      description: 'Advanced AI system for climate modeling, carbon tracking, and environmental impact optimization',
      features: ['Climate Modeling', 'Carbon Footprint Tracking', 'Renewable Energy Optimization', 'Environmental Impact Analysis', 'Sustainability Reporting', 'Green Tech Integration'],
      popular: true,
      rating: 4.8,
      users: '300+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-climate-solutions-pro'
    },
    { 
      name: 'AI Space Technology Pro', 
      href: '/ai-space-technology-pro', 
      icon: Rocket, 
      category: 'Space Tech', 
      price: '$9,999/mo',
      description: 'Cutting-edge AI platform for space mission planning, satellite optimization, and space resource management',
      features: ['Mission Planning', 'Satellite Optimization', 'Space Resource Mapping', 'Orbital Mechanics', 'Space Weather Prediction', 'Launch Optimization'],
      popular: false,
      rating: 4.9,
      users: '25+',
      trial: '90-day free trial',
      link: 'https://ziontechgroup.com/ai-space-technology-pro'
    },
    { 
      name: 'AI Financial Crime Detection Pro', 
      href: '/ai-financial-crime-detection-pro', 
      icon: Shield, 
      category: 'FinTech', 
      price: '$1,999/mo',
      description: 'Advanced AI system for real-time financial crime detection, fraud prevention, and compliance monitoring',
      features: ['Real-time Fraud Detection', 'Money Laundering Prevention', 'Transaction Analysis', 'Risk Scoring', 'Compliance Monitoring', 'Regulatory Reporting'],
      popular: true,
      rating: 4.8,
      users: '400+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro'
    },

    // Creative & Design
    { 
      name: 'AI Fashion Design Studio', 
      href: '/ai-fashion-design', 
      icon: Palette, 
      category: 'Creative', 
      price: '$299/mo',
      description: 'Revolutionary AI fashion design platform with trend prediction, virtual modeling, and sustainable design optimization',
      features: ['Trend Prediction', 'Virtual Modeling', 'Sustainable Design', 'Color Palette Generation', 'Pattern Creation', 'Market Analysis'],
      popular: true,
      rating: 4.7,
      users: '1,200+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-fashion-design'
    },
    { 
      name: 'AI Music Composition Studio', 
      href: '/ai-music-composition', 
      icon: Music, 
      category: 'Creative', 
      price: '$199/mo',
      description: 'Advanced AI music composition platform with genre analysis, emotional scoring, and collaborative composition tools',
      features: ['Genre Analysis', 'Emotional Scoring', 'Collaborative Composition', 'Instrument Simulation', 'Lyric Generation', 'Mastering Tools'],
      popular: true,
      rating: 4.6,
      users: '900+',
      trial: '14-day free trial',
      link: 'https://ziontechgroup.com/ai-music-composition'
    },
    { 
      name: 'AI Logo Designer Pro', 
      href: '/ai-logo-designer', 
      icon: Palette, 
      category: 'Design', 
      price: '$99/mo',
      description: 'Intelligent logo design platform with brand analysis, style matching, and automated design generation',
      features: ['Brand Analysis', 'Style Matching', 'Auto Design Generation', 'Vector Export', 'Brand Guidelines', 'A/B Testing'],
      popular: true,
      rating: 4.8,
      users: '2,100+',
      trial: '7-day free trial',
      link: 'https://ziontechgroup.com/ai-logo-designer'
    },

    // Advanced Business Solutions
    { 
      name: 'AI Supply Chain Optimization Pro', 
      href: '/ai-supply-chain-optimization-pro', 
      icon: Truck, 
      category: 'Supply Chain', 
      price: '$1,499/mo',
      description: 'Comprehensive AI supply chain optimization with demand forecasting, inventory management, and logistics automation',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Logistics Automation', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      popular: true,
      rating: 4.7,
      users: '600+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization-pro'
    },
    { 
      name: 'AI Energy Grid Management Pro', 
      href: '/ai-energy-grid-management-pro', 
      icon: Zap, 
      category: 'Energy', 
      price: '$3,999/mo',
      description: 'Smart energy grid management system with real-time optimization, renewable integration, and demand response',
      features: ['Grid Optimization', 'Renewable Integration', 'Demand Response', 'Energy Storage', 'Predictive Maintenance', 'Carbon Tracking'],
      popular: false,
      rating: 4.8,
      users: '100+',
      trial: '60-day free trial',
      link: 'https://ziontechgroup.com/ai-energy-grid-management-pro'
    },
    { 
      name: 'AI Agricultural Intelligence Pro', 
      href: '/ai-agricultural-intelligence-pro', 
      icon: Sprout, 
      category: 'Agriculture', 
      price: '$799/mo',
      description: 'Precision agriculture AI platform with crop monitoring, yield prediction, and sustainable farming optimization',
      features: ['Crop Monitoring', 'Yield Prediction', 'Soil Analysis', 'Pest Detection', 'Irrigation Optimization', 'Sustainability Tracking'],
      popular: true,
      rating: 4.7,
      users: '500+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-agricultural-intelligence-pro'
    },

    // Emerging Technologies
    { 
      name: 'AI Autonomous Systems Pro', 
      href: '/ai-autonomous-systems', 
      icon: Cpu, 
      category: 'Autonomous', 
      price: '$2,999/mo',
      description: 'Advanced AI platform for autonomous system development with self-learning capabilities and real-time adaptation',
      features: ['Self-Learning Algorithms', 'Real-time Adaptation', 'Sensor Fusion', 'Decision Making', 'Safety Protocols', 'Performance Optimization'],
      popular: true,
      rating: 4.8,
      users: '150+',
      trial: '45-day free trial',
      link: 'https://ziontechgroup.com/ai-autonomous-systems'
    },
    { 
      name: 'AI Blockchain Solutions Pro', 
      href: '/ai-blockchain-solutions', 
      icon: Shield, 
      category: 'Blockchain', 
      price: '$1,799/mo',
      description: 'Intelligent blockchain platform with smart contract optimization, DeFi integration, and automated compliance',
      features: ['Smart Contract Optimization', 'DeFi Integration', 'Automated Compliance', 'Token Economics', 'Cross-chain Interoperability', 'Security Auditing'],
      popular: true,
      rating: 4.7,
      users: '300+',
      trial: '30-day free trial',
      link: 'https://ziontechgroup.com/ai-blockchain-solutions'
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Quantum AI', 'AI Memory', 'Immersive Tech', 'Climate Tech', 'Space Tech', 'FinTech', 'Creative', 'Design', 'Supply Chain', 'Energy', 'Agriculture', 'Autonomous', 'Blockchain'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
                Micro SAAS Solutions
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered micro SaaS tools that transform your business operations with cutting-edge technology
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20' : ''
              }`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">
                    {service.price}
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium">
                    {service.category}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {service.trial}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies already using our revolutionary AI-powered micro SaaS tools to boost productivity and drive innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-white text-cyan-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/25 inline-flex items-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 (302) 464-0950
            </a>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-200">+1 (302) 464-0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-200">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-200">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;