import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable business insights',
      price: '$2,499/month',
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Report Generation',
        'Custom Dashboard Creation',
        'Multi-Data Source Integration',
        'Advanced Machine Learning Models',
        '24/7 Monitoring & Alerts'
      ],
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      category: 'AI Automation & Workflow',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      services: [
        {
          name: 'AI Workflow Automation Platform',
          description: 'End-to-end business process automation with intelligent decision-making and self-optimization',
          features: ['Visual Workflow Builder', 'Smart Process Optimization', 'Error Detection & Correction', 'Cost Reduction', 'Scalable Architecture'],
          pricing: 'Starting at $5,000/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-workflow-automation',
          popular: true
        },
        {
          name: 'AI Customer Support Suite',
          description: 'Advanced 24/7 customer support with intelligent routing and automated responses',
          features: ['Natural Language Processing', 'Multi-Channel Support', 'Sentiment Analysis', 'Escalation Management', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '30-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true
        },
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics with ML predictions and real-time insights',
          features: ['Machine Learning Models', 'Real-time Processing', 'Data Visualization', 'Predictive Analytics', 'Custom Dashboards'],
          pricing: 'Starting at $4,000/month',
          trial: '30-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true
        },
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI-powered writing and design',
          features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Brand Consistency'],
          pricing: 'Starting at $2,500/month',
          trial: '30-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true
        },
        {
          name: 'AI Healthcare Solutions',
          description: 'Medical AI and diagnosis support with advanced imaging and analysis',
          features: ['Medical Imaging AI', 'Diagnosis Support', 'Patient Monitoring', 'Drug Discovery', 'Clinical Trials'],
          pricing: 'Starting at $8,000/month',
          trial: '30-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-healthcare',
          popular: true
        },
        {
          name: 'AI Fintech Platform',
          description: 'Financial AI and fraud detection with real-time monitoring',
          features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance Monitoring'],
          pricing: 'Starting at $6,000/month',
          trial: '30-day free trial',
          roi: '400-800% ROI',
          link: 'https://ziontechgroup.com/ai-fintech',
          popular: true
        },
        {
          name: 'AI Computer Vision Platform',
          description: 'Advanced image recognition and computer vision solutions',
          features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Control', 'Surveillance Systems'],
          pricing: 'Starting at $4,500/month',
          trial: '30-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-computer-vision',
          popular: false
        },
        {
          name: 'AI Machine Learning Platform',
          description: 'Complete ML platform with model training and deployment',
          features: ['Model Training', 'AutoML', 'Model Deployment', 'A/B Testing', 'Performance Monitoring'],
          pricing: 'Starting at $7,000/month',
          trial: '30-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-ml-platform',
          popular: false
        },
        {
          name: 'AI Quantum Computing',
          description: 'Next-gen quantum solutions for complex optimization problems',
          features: ['Quantum Optimization', 'Quantum Simulation', 'Quantum Machine Learning', 'Quantum Security', 'Hybrid Computing'],
          pricing: 'Starting at $20,000/month',
          trial: '30-day free trial',
          roi: '500-1000% ROI',
          link: 'https://ziontechgroup.com/ai-quantum-computing',
          popular: false
        }
      ]
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Intelligent document processing and data extraction with OCR and NLP',
      price: '$1,999/month',
      features: [
        'OCR Technology',
        'Natural Language Processing',
        'Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Multi-Format Support',
        'Quality Assurance',
        'Integration APIs'
      ],
      capabilities: [
        '95% accuracy in data extraction',
        '50% reduction in processing time',
        'Automated document routing',
        'Real-time validation'
      ],
      category: 'AI Automation & Workflow',
      icon: FileText,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      rating: 4.8
    }
  ];

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our cutting-edge AI solutions. From automation to analytics, 
              we deliver enterprise-grade AI services that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
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

              {/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;