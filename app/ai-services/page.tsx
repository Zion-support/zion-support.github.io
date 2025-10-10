'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Zap, BarChart, Users, Search, Filter } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 1,
      name: 'Machine Learning Models',
      category: 'ml',
      description: 'Custom ML models tailored to your specific business needs and data.',
      icon: Brain,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing'],
      useCases: ['Fraud Detection', 'Customer Segmentation', 'Demand Forecasting', 'Quality Control']
    },
    {
      id: 2,
      name: 'Natural Language Processing',
      category: 'nlp',
      description: 'AI-powered text analysis and language understanding for better communication.',
      icon: Search,
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development'],
      useCases: ['Customer Support', 'Content Moderation', 'Market Research', 'Document Processing']
    },
    {
      id: 3,
      name: 'Computer Vision',
      category: 'vision',
      description: 'Advanced image and video analysis using cutting-edge AI technology.',
      icon: BarChart,
      features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Facial Recognition'],
      useCases: ['Security Systems', 'Medical Imaging', 'Quality Inspection', 'Retail Analytics']
    },
    {
      id: 4,
      name: 'AI Chatbots',
      category: 'chatbots',
      description: 'Intelligent conversational agents that provide 24/7 customer support.',
      icon: Users,
      features: ['Multi-language Support', 'Context Awareness', 'Integration APIs', 'Analytics Dashboard'],
      useCases: ['Customer Service', 'Lead Generation', 'Internal Support', 'E-commerce Assistance']
    },
    {
      id: 5,
      name: 'Predictive Analytics',
      category: 'analytics',
      description: 'Forecast future trends and behaviors using advanced data analysis.',
      icon: BarChart,
      features: ['Trend Forecasting', 'Risk Assessment', 'Performance Optimization', 'Custom Dashboards'],
      useCases: ['Sales Forecasting', 'Risk Management', 'Inventory Optimization', 'Market Analysis']
    },
    {
      id: 6,
      name: 'AI Automation',
      category: 'automation',
      description: 'Automate repetitive tasks and processes with intelligent AI solutions.',
      icon: Zap,
      features: ['Process Automation', 'Workflow Optimization', 'Error Reduction', 'Cost Savings'],
      useCases: ['Data Entry', 'Report Generation', 'Email Processing', 'Task Scheduling']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'vision', name: 'Computer Vision' },
    { id: 'chatbots', name: 'AI Chatbots' },
    { id: 'analytics', name: 'Predictive Analytics' },
    { id: 'automation', name: 'AI Automation' }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business operations, 
            improve efficiency, and gain competitive advantages.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
              <div className="flex items-center mb-4">
                <service.icon className="w-12 h-12 text-cyan-400 mr-4" />
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.useCases.map((useCase, index) => (
                    <span key={index} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* AI Implementation Process */}
        <div className="bg-slate-700/50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our AI Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">We analyze your business needs and identify AI opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">We design custom AI solutions tailored to your requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
              <p className="text-gray-300 text-sm">We build and train AI models using your data and requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">We deploy the solution and provide ongoing support and optimization.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiServicesPage;