import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, Brain, Bot, Target, Layers, BarChart, PieChart, LineChart, Activity, Sparkles, Atom } from 'lucide-react';

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
    icon: <BarChart3 className="w-8 h-8" />,
    category: 'Analytics',
    popular: true,
    rating: 4.9,
    users: '1,200+',
    color: 'from-blue-500 to-purple-600',
    capabilities: [
      'Process 10TB+ data daily',
      '99.9% accuracy in predictions',
      'Real-time insights delivery',
      'Custom ML model training'
    ]
  },
  {
    id: 2,
    name: 'AI Content Generation Suite',
    description: 'Comprehensive AI-powered content creation platform for all marketing needs',
    price: '$899/month',
    features: [
      'Blog Post Generation',
      'Social Media Content',
      'Email Marketing Copy',
      'Video Script Writing',
      'SEO Optimization',
      'Multi-Language Support',
      'Brand Voice Training',
      'Content Calendar Management'
    ],
    icon: <FileText className="w-8 h-8" />,
    category: 'Content Creation',
    popular: true,
    rating: 4.8,
    users: '2,500+',
    color: 'from-green-500 to-teal-600',
    capabilities: [
      'Generate 1000+ articles daily',
      'Support for 50+ languages',
      'SEO score optimization',
      'Brand consistency maintenance'
    ]
  },
  {
    id: 3,
    name: 'AI Customer Support Automation',
    description: 'Intelligent customer service solution with natural language processing',
    price: '$1,299/month',
    features: [
      '24/7 Chatbot Support',
      'Multi-Channel Integration',
      'Sentiment Analysis',
      'Ticket Routing & Prioritization',
      'Knowledge Base Management',
      'Live Agent Handoff',
      'Performance Analytics',
      'Custom Training & Optimization'
    ],
    icon: <Users className="w-8 h-8" />,
    category: 'Customer Service',
    popular: false,
    rating: 4.7,
    users: '800+',
    color: 'from-orange-500 to-red-600',
    capabilities: [
      'Handle 10,000+ queries daily',
      '95% first-contact resolution',
      'Multi-language support',
      'Real-time sentiment tracking'
    ]
  },
  {
    id: 4,
    name: 'AI Cybersecurity Monitoring',
    description: 'Advanced threat detection and prevention system powered by machine learning',
    price: '$3,999/month',
    features: [
      'Real-time Threat Detection',
      'Behavioral Analysis',
      'Automated Incident Response',
      'Vulnerability Assessment',
      'Compliance Monitoring',
      'Security Analytics Dashboard',
      'Threat Intelligence Integration',
      'Custom Security Policies'
    ],
    icon: <Shield className="w-8 h-8" />,
    category: 'Security',
    popular: true,
    rating: 4.9,
    users: '500+',
    color: 'from-red-500 to-pink-600',
    capabilities: [
      'Detect 99.8% of threats',
      'Response time under 30 seconds',
      'Zero false positives',
      'Continuous learning adaptation'
    ]
  },
  {
    id: 5,
    name: 'AI Marketing Automation',
    description: 'Complete marketing automation platform with AI-driven personalization',
    price: '$1,599/month',
    features: [
      'Email Campaign Automation',
      'Social Media Management',
      'Lead Scoring & Nurturing',
      'A/B Testing Optimization',
      'Customer Journey Mapping',
      'ROI Analytics & Reporting',
      'Cross-Channel Integration',
      'Predictive Customer Insights'
    ],
    icon: <TrendingUp className="w-8 h-8" />,
    category: 'Marketing',
    popular: false,
    rating: 4.6,
    users: '1,800+',
    color: 'from-purple-500 to-indigo-600',
    capabilities: [
      'Increase conversions by 40%',
      'Reduce marketing costs by 30%',
      'Personalize 100% of campaigns',
      'Real-time performance optimization'
    ]
  },
  {
    id: 6,
    name: 'AI Data Processing & ETL',
    description: 'Intelligent data extraction, transformation, and loading solution',
    price: '$2,199/month',
    features: [
      'Automated Data Extraction',
      'Data Quality Validation',
      'Real-time Data Transformation',
      'Multi-Source Integration',
      'Data Lineage Tracking',
      'Automated Error Handling',
      'Scalable Processing Pipeline',
      'Custom Data Models'
    ],
    icon: <Database className="w-8 h-8" />,
    category: 'Data Processing',
    popular: false,
    rating: 4.7,
    users: '600+',
    color: 'from-cyan-500 to-blue-600',
    capabilities: [
      'Process 100TB+ data daily',
      '99.99% data accuracy',
      'Real-time processing',
      'Zero data loss guarantee'
    ]
  }
];

const categories = ['All', 'Analytics', 'Content Creation', 'Customer Service', 'Security', 'Marketing', 'Data Processing'];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered tools and services designed to transform your business and boost productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{service.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{service.users} users</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No services found matching your criteria.</div>
          </div>
        )}
      </div>
    </div>
  );
}