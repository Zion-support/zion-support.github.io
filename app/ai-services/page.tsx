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
    users: '2,800+',
    color: 'from-purple-500 to-pink-600',
    capabilities: [
      '300% increase in conversion rates',
      'Automated campaign optimization',
      'Real-time performance tracking',
      'Predictive customer behavior'
    ]
  },
  {
    id: 3,
    name: 'AI Customer Support Automation',
    description: 'Intelligent customer service platform with natural language processing and sentiment analysis',
    price: '$1,599/month',
    features: [
      '24/7 Chatbot Support',
      'Sentiment Analysis',
      'Multi-Language Support',
      'Ticket Routing & Prioritization',
      'Knowledge Base Integration',
      'Voice & Text Support',
      'Customer Satisfaction Tracking',
      'Escalation Management'
    ],
    icon: <Users className="w-8 h-8" />,
    category: 'Customer Service',
    popular: false,
    rating: 4.7,
    users: '1,500+',
    color: 'from-green-500 to-teal-600',
    capabilities: [
      '95% query resolution rate',
      '60% reduction in response time',
      'Multi-channel support',
      'Real-time analytics'
    ]
  },
  {
    id: 4,
    name: 'AI Document Processing',
    description: 'Intelligent document processing and data extraction with OCR and NLP',
    price: '$799/month',
    features: [
      'OCR Text Recognition',
      'Document Classification',
      'Data Extraction',
      'Form Processing',
      'Contract Analysis',
      'Compliance Checking',
      'Multi-Format Support',
      'Batch Processing'
    ],
    icon: <FileText className="w-8 h-8" />,
    category: 'Document Processing',
    popular: false,
    rating: 4.6,
    users: '1,800+',
    color: 'from-indigo-500 to-blue-600',
    capabilities: [
      '99.5% accuracy in text extraction',
      'Process 10,000+ documents/hour',
      'Multi-language OCR support',
      'Automated compliance checking'
    ]
  },
  {
    id: 5,
    name: 'AI Image & Video Analysis',
    description: 'Advanced computer vision platform for image and video content analysis',
    price: '$1,299/month',
    features: [
      'Object Detection & Recognition',
      'Facial Recognition',
      'Scene Understanding',
      'Video Content Analysis',
      'Real-time Processing',
      'Custom Model Training',
      'API Integration',
      'Batch Processing'
    ],
    icon: <Camera className="w-8 h-8" />,
    category: 'Computer Vision',
    popular: false,
    rating: 4.8,
    users: '900+',
    color: 'from-orange-500 to-red-600',
    capabilities: [
      'Real-time object detection',
      '99.2% accuracy in recognition',
      'Custom model training',
      'Multi-format support'
    ]
  },
  {
    id: 6,
    name: 'AI Workflow Automation',
    description: 'Intelligent business process automation with AI decision-making capabilities',
    price: '$1,999/month',
    features: [
      'Process Automation',
      'Decision Tree Logic',
      'Exception Handling',
      'Integration APIs',
      'Custom Workflows',
      'Performance Monitoring',
      'Scalable Architecture',
      'Compliance Management'
    ],
    icon: <Zap className="w-8 h-8" />,
    category: 'Automation',
    popular: true,
    rating: 4.9,
    users: '2,100+',
    color: 'from-yellow-500 to-orange-600',
    capabilities: [
      '80% reduction in manual tasks',
      '99.9% process reliability',
      'Real-time monitoring',
      'Custom workflow creation'
    ]
  }
];

const categories = ['All', 'Analytics', 'Content Creation', 'Customer Service', 'Document Processing', 'Computer Vision', 'Automation'];

const AIServicesPage: React.FC = () => {
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
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions. 
              From analytics to automation, we provide cutting-edge AI services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
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
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                {service.popular && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{service.rating}</span>
                    <span className="text-gray-500">({service.users})</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-white">Capabilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((capability, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Link
                  to="/contact"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI services to drive growth, 
              efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;