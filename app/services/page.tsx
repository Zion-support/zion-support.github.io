'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText,
  Filter,
  Search
} from 'lucide-react';
const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    // AI Services
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap for digital transformation.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $299/hour',
      features: ['AI readiness assessment', 'Strategic planning', 'Technology selection', 'Implementation roadmap', 'ROI analysis'],
      popular: true,
      link: '/ai-services'
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data requirements.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $2,500/month',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Performance optimization', 'Model deployment'],
      popular: false,
      link: '/ai-services'
    },
    {
      id: 3,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and automated content processing.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $1,800/month',
      features: ['Text analysis', 'Sentiment analysis', 'Content generation', 'Language translation', 'Chatbot development'],
      popular: false,
      link: '/ai-services'
    },
    {
      id: 4,
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for automation, quality control, and intelligent monitoring.',
      icon: Brain,
      category: 'ai',
      price: 'Starting at $2,200/month',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Quality inspection', 'Video analytics'],
      popular: false,
      link: '/ai-services'
    },
    {
      id: 5,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics with AI-driven insights for better business decision making and forecasting.',
      icon: BarChart,
      category: 'ai',
      price: 'Starting at $1,500/month',
      features: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Automated reporting', 'Real-time insights'],
      popular: true,
      link: '/ai-services'
    },

    // IT Services
    {
      id: 6,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring.',
      icon: Cloud,
      category: 'it',
      price: 'Starting at $1,299/month',
      features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Cost Optimization', 'Security Management'],
      popular: true,
      link: '/it-services'
    },
    {
      id: 7,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets and data with enterprise-grade protection.',
      icon: Shield,
      category: 'it',
      price: 'Starting at $799/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response', 'Security Training'],
      popular: true,
      link: '/it-services'
    },
    {
      id: 8,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business requirements and processes.',
      icon: Code,
      category: 'it',
      price: 'Starting at $2,000/month',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Maintenance'],
      popular: false,
      link: '/it-services'
    },
    {
      id: 9,
      title: 'Data Management & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools and data management.',
      icon: Database,
      category: 'it',
      price: 'Starting at $1,299/month',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting', 'Data Warehousing'],
      popular: false,
      link: '/it-services'
    },
    {
      id: 10,
      title: 'IT Consulting & Strategy',
      description: 'Expert guidance to help you make the right technology decisions and optimize your IT infrastructure.',
      icon: Users,
      category: 'it',
      price: '$299/hour',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training', 'Vendor Management'],
      popular: false,
      link: '/it-services'
    },

    // Micro SaaS Services
    {
      id: 11,
      title: 'AI Content Writer Pro',
      description: 'Automated content creation with AI-powered writing assistance for blogs, social media, and marketing.',
      icon: FileText,
      category: 'saas',
      price: '$29/month',
      features: ['AI-powered content creation', 'Multiple content types', 'SEO optimization', 'Brand voice customization', 'Plagiarism detection'],
      popular: true,
      link: '/micro-saas'
    },
    {
      id: 12,
      title: 'Analytics Dashboard Pro',
      description: 'Real-time analytics and insights for your business with customizable dashboards and reporting.',
      icon: BarChart,
      category: 'saas',
      price: '$49/month',
      features: ['Real-time data visualization', 'Custom reports', 'API integration', 'Automated alerts', 'Multi-platform support'],
      popular: true,
      link: '/micro-saas'
    },
    {
      id: 13,
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot and live chat capabilities.',
      icon: Users,
      category: 'saas',
      price: '$79/month',
      features: ['AI chatbot with NLP', 'Live chat support', 'Ticket management', 'Multi-language support', 'Analytics'],
      popular: false,
      link: '/micro-saas'
    },
    {
      id: 14,
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with threat detection and compliance reporting.',
      icon: Shield,
      category: 'saas',
      price: '$149/month',
      features: ['Real-time threat detection', 'Automated security scans', 'Compliance reporting', 'Incident response', '24/7 monitoring'],
      popular: false,
      link: '/micro-saas'
    },
    {
      id: 15,
      title: 'Project Management AI',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      icon: Calendar,
      category: 'saas',
      price: '$35/month',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization', 'AI insights'],
      popular: true,
      link: '/micro-saas'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'it', name: 'IT Services' },
    { id: 'saas', name: 'Micro SaaS' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services | Zion Tech Group - AI and IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to cloud infrastructure, we provide cutting-edge technology services for your business." />
        <meta name="keywords" content="AI services, IT services, cloud solutions, cybersecurity, custom development, data analytics, IT consulting, micro SaaS" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations 
            and drive unprecedented growth.
          </p>
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
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-gray-800">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="flex items-start mb-6">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {categories.find(c => c.id === service.category)?.name}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-300">Contact for custom pricing</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Our Work
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-gray-300">
              <a href="tel:+13024640950" className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
