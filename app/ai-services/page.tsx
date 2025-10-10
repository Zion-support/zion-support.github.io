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
  TrendingUp, 
  Target, 
  FileText, 
  Search, 
  Phone,
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
}

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices: AIService[] = [
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI solutions that provide 24/7 customer support and automate business processes.',
      icon: MessageSquare,
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Integration with CRM',
        'Analytics & Reporting',
        'Custom Training'
      ],
      price: 'Starting at $299/month',
      category: 'Conversational AI',
      popular: true
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis using deep learning for object detection, recognition, and analysis.',
      icon: Eye,
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Quality Inspection',
        'Real-time Processing'
      ],
      price: 'Starting at $599/month',
      category: 'Computer Vision',
      popular: true
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Machine learning models that analyze data patterns to predict future trends and behaviors.',
      icon: TrendingUp,
      features: [
        'Data Pattern Analysis',
        'Forecasting Models',
        'Risk Assessment',
        'Performance Optimization',
        'Custom Algorithms'
      ],
      price: 'Starting at $799/month',
      category: 'Analytics',
      popular: false
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Text analysis and understanding capabilities for document processing, sentiment analysis, and content generation.',
      icon: FileText,
      features: [
        'Text Analysis',
        'Sentiment Analysis',
        'Document Processing',
        'Content Generation',
        'Language Translation'
      ],
      price: 'Starting at $499/month',
      category: 'NLP',
      popular: false
    },
    {
      id: 'voice-recognition',
      title: 'Voice Recognition & Speech Processing',
      description: 'Advanced speech-to-text and text-to-speech solutions with voice command capabilities.',
      icon: Mic,
      features: [
        'Speech-to-Text',
        'Text-to-Speech',
        'Voice Commands',
        'Multi-language Support',
        'Noise Cancellation'
      ],
      price: 'Starting at $399/month',
      category: 'Speech',
      popular: false
    },
    {
      id: 'recommendation-engines',
      title: 'Recommendation Engines',
      description: 'Personalized recommendation systems that improve user engagement and drive sales.',
      icon: Target,
      features: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing'
      ],
      price: 'Starting at $699/month',
      category: 'Recommendations',
      popular: false
    },
    {
      id: 'fraud-detection',
      title: 'Fraud Detection & Security',
      description: 'AI-powered fraud detection systems that identify suspicious activities and protect your business.',
      icon: Shield,
      features: [
        'Real-time Monitoring',
        'Anomaly Detection',
        'Risk Scoring',
        'Pattern Recognition',
        'Automated Alerts'
      ],
      price: 'Starting at $899/month',
      category: 'Security',
      popular: false
    },
    {
      id: 'process-automation',
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes using AI to improve efficiency and reduce errors.',
      icon: Zap,
      features: [
        'Workflow Automation',
        'Document Processing',
        'Data Extraction',
        'Decision Making',
        'Integration APIs'
      ],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: false
    },
    {
      id: 'data-mining',
      title: 'Data Mining & Insights',
      description: 'Extract valuable insights from large datasets using advanced machine learning techniques.',
      icon: BarChart,
      features: [
        'Data Exploration',
        'Pattern Discovery',
        'Statistical Analysis',
        'Visualization',
        'Custom Reports'
      ],
      price: 'Starting at $799/month',
      category: 'Data Science',
      popular: false
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      icon: Box,
      features: [
        'System Integration',
        'API Development',
        'Custom Solutions',
        'Training & Support',
        'Maintenance'
      ],
      price: 'Starting at $1,299/month',
      category: 'Integration',
      popular: false
    }
  ];

  const categories = ['all', 'Conversational AI', 'Computer Vision', 'Analytics', 'NLP', 'Speech', 'Recommendations', 'Security', 'Automation', 'Data Science', 'Integration'];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, value: '50+', label: 'AI Models Deployed' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '95%', label: 'Accuracy Rate' },
    { icon: <Clock className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'AI Monitoring' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Cutting-edge AI services including chatbots, computer vision, predictive analytics, and machine learning solutions. Transform your business with AI." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, computer vision, predictive analytics, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Harness the power of artificial intelligence to transform your business. From chatbots to computer vision, we deliver cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Free AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-8 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-gray-500">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                    <Link
                      to="/contact"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No AI services found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our AI experts help you implement the perfect artificial intelligence solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Free AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
