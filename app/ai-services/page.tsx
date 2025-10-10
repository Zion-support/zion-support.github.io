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
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server
} from 'lucide-react';

interface AIService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
  category: string;
  pricing: string;
  duration: string;
  popular?: boolean;
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const services: AIService[] = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Integration APIs'],
      benefits: ['Reduce support costs by 60%', 'Improve customer satisfaction', 'Handle multiple conversations simultaneously'],
      category: 'Customer Service',
      pricing: 'Starting at $2,999/month',
      duration: '4-6 weeks',
      popular: true
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with advanced machine learning algorithms.',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      benefits: ['Make data-driven decisions', 'Identify trends and patterns', 'Optimize business processes'],
      category: 'Analytics',
      pricing: 'Starting at $4,999/month',
      duration: '6-8 weeks'
    },
    {
      id: 'ai-computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Extract meaningful information from images and videos using advanced AI algorithms.',
      icon: Eye,
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control'],
      benefits: ['Automate visual inspections', 'Improve accuracy', 'Reduce manual labor'],
      category: 'Computer Vision',
      pricing: 'Starting at $7,999/month',
      duration: '8-12 weeks'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale using advanced language models.',
      icon: FileText,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      benefits: ['Scale content production', 'Maintain brand voice', 'Save time and resources'],
      category: 'Content',
      pricing: 'Starting at $1,999/month',
      duration: '2-4 weeks'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent workflow management.',
      icon: Settings,
      features: ['Workflow Automation', 'Document Processing', 'Data Entry', 'Task Scheduling'],
      benefits: ['Increase efficiency', 'Reduce errors', 'Free up human resources'],
      category: 'Automation',
      pricing: 'Starting at $3,999/month',
      duration: '6-10 weeks'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'Protect your systems with intelligent threat detection and response capabilities.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Monitoring'],
      benefits: ['Prevent security breaches', 'Reduce false positives', '24/7 monitoring'],
      category: 'Security',
      pricing: 'Starting at $5,999/month',
      duration: '8-12 weeks'
    }
  ];

  const categories = ['all', 'Customer Service', 'Analytics', 'Computer Vision', 'Content', 'Automation', 'Security'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { number: '500+', label: 'AI Projects Completed' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '60%', label: 'Average Cost Reduction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, computer vision, content generation, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, computer vision" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From chatbots to computer vision, we deliver intelligent solutions that drive results.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <Brain className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                500+ Projects Completed
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                95% Client Satisfaction
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                60% Cost Reduction
              </span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 ${
                    service.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {service.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-medium text-gray-300">Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-slate-700 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <Link
                      to={`/ai-services/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg mb-4">No AI services found matching your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                View Demos
                <Brain className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;