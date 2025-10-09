'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Target, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Sparkles,
  MessageSquare,
  Eye,
  Code,
  Cloud,
  Settings,
  Award,
  DollarSign,
  Calendar,
  Download,
  Play
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    // AI-Powered Business Solutions
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM System',
      category: 'business',
      description: 'Intelligent customer relationship management with predictive analytics and automated workflows',
      features: [
        'Predictive lead scoring with 95% accuracy',
        'Automated follow-up sequences',
        'Real-time sentiment analysis',
        'Custom AI chatbots for each client',
        'Advanced analytics dashboard',
        'Integration with 50+ platforms'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce manual work by 60%',
        'Improve customer satisfaction by 35%',
        '24/7 automated support'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$599/month',
        enterprise: '$1,299/month'
      },
      icon: Users,
      popular: true,
      rating: 4.9,
      reviews: 127,
      implementation: '2-4 weeks',
      support: '24/7'
    },
    {
      id: 'ai-analytics',
      name: 'AI Business Intelligence Platform',
      category: 'analytics',
      description: 'Advanced AI-driven analytics platform for real-time business insights and predictive modeling',
      features: [
        'Real-time data processing',
        'Predictive analytics with 90% accuracy',
        'Custom dashboard creation',
        'Automated report generation',
        'Natural language queries',
        'Multi-source data integration'
      ],
      benefits: [
        'Make data-driven decisions 3x faster',
        'Identify trends before competitors',
        'Reduce reporting time by 80%',
        'Increase revenue by 25%'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$999/month'
      },
      icon: BarChart,
      popular: true,
      rating: 4.8,
      reviews: 89,
      implementation: '3-5 weeks',
      support: '24/7'
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation Suite',
      category: 'automation',
      description: 'Comprehensive AI-powered automation platform for business processes and workflows',
      features: [
        'Visual workflow builder',
        'AI process optimization',
        'Smart document processing',
        'Automated decision making',
        'Integration with 100+ tools',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduce operational costs by 50%',
        'Eliminate human errors',
        'Process 10x more data',
        'Scale operations effortlessly'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$799/month'
      },
      icon: Zap,
      popular: true,
      rating: 4.7,
      reviews: 156,
      implementation: '2-3 weeks',
      support: '24/7'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Creation Studio',
      category: 'content',
      description: 'Complete AI-powered content creation platform for blogs, social media, and marketing materials',
      features: [
        'Multi-format content generation',
        'Brand voice consistency',
        'SEO optimization',
        'Plagiarism detection',
        'Multi-language support',
        'Content calendar management'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent brand voice',
        'Improve SEO rankings by 40%',
        'Reduce content costs by 70%'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$599/month'
      },
      icon: MessageSquare,
      popular: false,
      rating: 4.6,
      reviews: 73,
      implementation: '1-2 weeks',
      support: 'Business hours'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity solution with threat detection and automated response',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Zero-day attack prevention',
        'Compliance monitoring',
        'Security scoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 90%',
        'Prevent 99.9% of attacks',
        'Ensure compliance automatically'
      ],
      pricing: {
        starter: '$399/month',
        professional: '$799/month',
        enterprise: '$1,599/month'
      },
      icon: Shield,
      popular: true,
      rating: 4.9,
      reviews: 94,
      implementation: '4-6 weeks',
      support: '24/7'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      category: 'healthcare',
      description: 'Comprehensive AI platform for healthcare providers with diagnostic assistance and patient management',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk assessment',
        'Treatment recommendations',
        'HIPAA compliance',
        'Integration with EHR systems'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce diagnosis time by 50%',
        'Enhance patient outcomes',
        'Streamline workflows'
      ],
      pricing: {
        starter: '$599/month',
        professional: '$1,299/month',
        enterprise: '$2,499/month'
      },
      icon: Eye,
      popular: false,
      rating: 4.8,
      reviews: 67,
      implementation: '6-8 weeks',
      support: '24/7'
    },
    {
      id: 'ai-fintech',
      name: 'AI Financial Technology Platform',
      category: 'fintech',
      description: 'Advanced AI solutions for financial services including fraud detection and risk assessment',
      features: [
        'Real-time fraud detection',
        'Credit risk assessment',
        'Algorithmic trading',
        'Regulatory compliance',
        'Customer behavior analysis',
        'Automated reporting'
      ],
      benefits: [
        'Reduce fraud by 95%',
        'Improve risk assessment accuracy',
        'Comply with regulations automatically',
        'Increase operational efficiency'
      ],
      pricing: {
        starter: '$499/month',
        professional: '$1,199/month',
        enterprise: '$2,299/month'
      },
      icon: DollarSign,
      popular: true,
      rating: 4.7,
      reviews: 112,
      implementation: '4-6 weeks',
      support: '24/7'
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile App Development',
      category: 'mobile',
      description: 'AI-powered mobile application development with intelligent features and automated testing',
      features: [
        'AI-assisted development',
        'Automated testing',
        'Performance optimization',
        'User behavior analysis',
        'Smart notifications',
        'Cross-platform compatibility'
      ],
      benefits: [
        'Develop apps 3x faster',
        'Reduce bugs by 80%',
        'Improve user engagement',
        'Lower maintenance costs'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,399/month'
      },
      icon: Code,
      popular: false,
      rating: 4.5,
      reviews: 45,
      implementation: '6-12 weeks',
      support: 'Business hours'
    },
    {
      id: 'ai-ecommerce',
      name: 'AI E-commerce Optimization',
      category: 'ecommerce',
      description: 'Complete AI solution for e-commerce platforms with personalization and sales optimization',
      features: [
        'Product recommendation engine',
        'Dynamic pricing optimization',
        'Inventory management',
        'Customer segmentation',
        'Sales forecasting',
        'Chatbot integration'
      ],
      benefits: [
        'Increase sales by 35%',
        'Reduce cart abandonment by 40%',
        'Optimize inventory levels',
        'Improve customer experience'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$999/month'
      },
      icon: Globe,
      popular: true,
      rating: 4.6,
      reviews: 78,
      implementation: '3-4 weeks',
      support: '24/7'
    },
    {
      id: 'ai-voice-processing',
      name: 'AI Voice & Speech Solutions',
      category: 'voice',
      description: 'Advanced AI voice processing platform with speech recognition and natural language understanding',
      features: [
        'Multi-language speech recognition',
        'Voice biometrics',
        'Real-time transcription',
        'Sentiment analysis',
        'Voice cloning',
        'Call center automation'
      ],
      benefits: [
        'Improve accessibility',
        'Automate call centers',
        'Enhance user experience',
        'Reduce operational costs'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$799/month'
      },
      icon: MessageSquare,
      popular: false,
      rating: 4.4,
      reviews: 56,
      implementation: '2-4 weeks',
      support: 'Business hours'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization Platform',
      category: 'analytics',
      description: 'Intelligent data visualization platform that automatically creates insights and interactive dashboards',
      features: [
        'Auto-generated visualizations',
        'Interactive dashboards',
        'Natural language queries',
        'Real-time data updates',
        'Custom chart creation',
        'Export capabilities'
      ],
      benefits: [
        'Understand data instantly',
        'Create reports automatically',
        'Share insights easily',
        'Make better decisions'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$599/month'
      },
      icon: BarChart,
      popular: false,
      rating: 4.3,
      reviews: 34,
      implementation: '1-2 weeks',
      support: 'Business hours'
    },
    {
      id: 'ai-project-management',
      name: 'AI Project Management Suite',
      category: 'business',
      description: 'Intelligent project management platform with AI-powered planning, resource allocation, and risk assessment',
      features: [
        'AI project planning',
        'Resource optimization',
        'Risk prediction',
        'Progress tracking',
        'Team collaboration',
        'Automated reporting'
      ],
      benefits: [
        'Complete projects 25% faster',
        'Reduce project risks',
        'Optimize resource allocation',
        'Improve team productivity'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$999/month'
      },
      icon: Calendar,
      popular: true,
      rating: 4.7,
      reviews: 89,
      implementation: '2-3 weeks',
      support: '24/7'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'business', name: 'Business Solutions', icon: Users },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'content', name: 'Content Creation', icon: MessageSquare },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'healthcare', name: 'Healthcare', icon: Eye },
    { id: 'fintech', name: 'Fintech', icon: DollarSign },
    { id: 'mobile', name: 'Mobile Apps', icon: Code },
    { id: 'ecommerce', name: 'E-commerce', icon: Globe },
    { id: 'voice', name: 'Voice & Speech', icon: MessageSquare }
  ];

  const filteredServices = useMemo(() => {
    return aiServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const popularServices = aiServices.filter(service => service.popular);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including CRM, analytics, automation, cybersecurity, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, business automation, AI CRM, AI analytics, AI cybersecurity, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our comprehensive suite of AI-powered solutions. 
                From intelligent automation to advanced analytics, we deliver cutting-edge AI technology 
                that drives real results and measurable ROI.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white">300% Average ROI</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Most Popular AI Services</h2>
            <p className="text-gray-300">Our most requested and highest-rated AI solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    Popular
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.professional}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Implementation: {service.implementation}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">All AI Services</h2>
            <p className="text-gray-300">Comprehensive AI solutions for every business need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.professional}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Implementation: {service.implementation}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and discover how our AI solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;