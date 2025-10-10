import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Cpu as CpuIcon, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Sparkles, Atom, Cpu as CpuIcon2 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
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
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      id: 2,
      name: 'AI Content Generation Suite',
      description: 'Comprehensive AI-powered content creation platform for all your marketing needs',
      price: '$1,299/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Campaigns',
        'Video Script Writing',
        'SEO-Optimized Content',
        'Multi-Language Support',
        'Brand Voice Consistency',
        'Content Calendar Management'
      ],
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbot and customer service automation with human-like interactions',
      price: '$899/month',
      features: [
        '24/7 Customer Support',
        'Multi-Language Support',
        'Sentiment Analysis',
        'Ticket Routing & Prioritization',
        'Knowledge Base Integration',
        'Live Chat Handoff',
        'Performance Analytics',
        'Custom Training & Optimization'
      ],
      icon: Bot,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      name: 'AI Marketing Automation',
      description: 'End-to-end marketing automation powered by artificial intelligence',
      price: '$1,599/month',
      features: [
        'Campaign Optimization',
        'Audience Segmentation',
        'A/B Testing Automation',
        'Email Personalization',
        'Social Media Management',
        'Lead Scoring & Nurturing',
        'ROI Tracking & Analytics',
        'Cross-Platform Integration'
      ],
      icon: <Target className="w-8 h-8" />,
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
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
          description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, and human handoff',
          features: ['Multi-language NLP', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration', 'Performance Analytics'],
          pricing: 'Starting at $3,000/month',
          trial: '14-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-customer-support',
          popular: true
        },
        {
          name: 'AI Sales Automation Engine',
          description: 'Intelligent sales process automation with lead scoring, automated follow-ups, and predictive analytics',
          features: ['AI Lead Scoring', 'Automated Outreach', 'Sales Forecasting', 'CRM Integration', 'Revenue Optimization'],
          pricing: 'Starting at $4,000/month',
          trial: '14-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-sales-automation',
          popular: true
        },
        {
          name: 'AI Document Processing System',
          description: 'Intelligent document analysis, extraction, and processing with OCR and natural language understanding',
          features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Integration', 'Compliance Tracking'],
          pricing: 'Starting at $2,500/month',
          trial: '7-day free trial',
          roi: '180-350% ROI',
          link: 'https://ziontechgroup.com/ai-document-processing',
          popular: false
        }
      ]
    },
    {
      category: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'AI Data Analytics Platform',
          description: 'Advanced analytics and insights with machine learning-powered predictions and real-time dashboards',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'Automated Insights'],
          pricing: 'Starting at $6,000/month',
          trial: '14-day free trial',
          roi: '300-600% ROI',
          link: 'https://ziontechgroup.com/ai-data-analytics',
          popular: true
        },
        {
          name: 'AI Business Intelligence Suite',
          description: 'Transform raw data into actionable business insights with AI-powered analysis and recommendations',
          features: ['KPI Tracking', 'Trend Analysis', 'Performance Metrics', 'Strategic Planning', 'ROI Measurement'],
          pricing: 'Starting at $7,000/month',
          trial: '14-day free trial',
          roi: '400-700% ROI',
          link: 'https://ziontechgroup.com/ai-business-intelligence',
          popular: true
        },
        {
          name: 'AI Predictive Analytics Engine',
          description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models',
          features: ['Demand Forecasting', 'Risk Assessment', 'Market Analysis', 'Scenario Planning', 'Anomaly Detection'],
          pricing: 'Starting at $8,000/month',
          trial: '14-day free trial',
          roi: '500-800% ROI',
          link: 'https://ziontechgroup.com/ai-predictive-analytics',
          popular: true
        },
        {
          name: 'AI Real-time Monitoring System',
          description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses',
          features: ['Real-time Monitoring', 'Anomaly Detection', 'Automated Alerts', 'Performance Tracking', 'Predictive Maintenance'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-450% ROI',
          link: 'https://ziontechgroup.com/ai-monitoring',
          popular: false
        }
      ]
    },
    {
      category: 'AI Content & Marketing Solutions',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Generation Studio',
          description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: 'Starting at $2,000/month',
          trial: '7-day free trial',
          roi: '100-300% ROI',
          link: 'https://ziontechgroup.com/ai-content-generation',
          popular: true
        },
        {
          name: 'AI Email Marketing Platform',
          description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: 'Starting at $3,500/month',
          trial: '7-day free trial',
          roi: '200-400% ROI',
          link: 'https://ziontechgroup.com/ai-email-marketing',
          popular: true
        },
        {
          name: 'AI SEO Optimization Suite',
          description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: 'Starting at $4,500/month',
          trial: '7-day free trial',
          roi: '250-500% ROI',
          link: 'https://ziontechgroup.com/ai-seo-optimizer',
          popular: true
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization across platforms',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: 'Starting at $1,500/month',
          trial: '7-day free trial',
          roi: '150-300% ROI',
          link: 'https://ziontechgroup.com/ai-social-media-manager',
          popular: false
        }
      ]
    },
    {
      category: 'AI Industry-Specific Solutions',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 5,
      name: 'AI Data Analytics Platform',
      description: 'Advanced data processing and analytics with machine learning capabilities',
      price: '$3,299/month',
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Automated Insights',
        'Data Quality Management',
        'Custom Algorithm Development',
        'Enterprise Security'
      ],
      icon: Database,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 6,
      name: 'AI Voice & Speech Processing',
      description: 'Advanced voice recognition, synthesis, and processing capabilities',
      price: '$1,799/month',
      features: [
        'Speech-to-Text Conversion',
        'Text-to-Speech Synthesis',
        'Voice Cloning',
        'Language Translation',
        'Sentiment Analysis',
        'Voice Command Processing',
        'Multi-Language Support',
        'Real-time Processing'
      ],
      icon: Headphones,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions. 
              From automation to analytics, we deliver cutting-edge technology that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold text-lg"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
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
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI solutions to drive growth, 
            efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;