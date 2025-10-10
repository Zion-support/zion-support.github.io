'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, 
  FileText, Search, Phone, CheckCircle, ArrowRight, Star, Clock, Globe, Database, 
  Users, Settings, Cpu, Lock, Mail, Smartphone, Camera, Headphones, BookOpen, 
  ShoppingCart, Home, Briefcase, Heart, Car, Plane, Gamepad2, Music, Video, 
  Image, Download, Upload, Share2, Bell, Calendar, MapPin, Edit, Trash2, Plus, 
  Minus, X, Check, AlertTriangle, Info, HelpCircle, PieChart, CreditCard, 
  Code, Settings2, Globe2, Shield2, Zap2, Target2, BarChart3, Users2, Database2
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  marketPrice?: string;
  savings?: string;
  rating?: number;
  reviews?: number;
  benefits: string[];
}

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices: AIService[] = [
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights, predictive analytics, and automated decision-making for enterprise operations.',
      features: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis', 'Machine learning models', 'Data integration', 'Custom dashboards', 'API access'],
      price: 'Starting at $1,500/month',
      category: 'Analytics',
      popular: true,
      marketPrice: '$4,999/month',
      savings: '70%',
      rating: 4.9,
      reviews: 1247,
      benefits: ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', 'Improve decision-making with AI insights']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Suite',
      description: 'Revolutionary AI-powered customer support with chatbots, sentiment analysis, and intelligent ticket routing for 24/7 customer service.',
      features: ['AI chatbots', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Multi-language support', 'Live chat integration', 'Escalation management', 'Analytics dashboard'],
      price: 'Starting at $199/month',
      category: 'Customer Service',
      popular: true,
      marketPrice: '$599/month',
      savings: '67%',
      rating: 4.8,
      reviews: 892,
      benefits: ['24/7 customer support', 'Reduce response time by 80%', 'Improve customer satisfaction scores']
    },
    {
      id: '3',
      icon: BarChart,
      title: 'AI Data Analytics Platform',
      description: 'Comprehensive AI-powered analytics platform with real-time data visualization, predictive modeling, and automated reporting.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics', 'Predictive modeling', 'Data integration', 'Custom alerts', 'Mobile app'],
      price: 'Starting at $399/month',
      category: 'Analytics',
      popular: false,
      marketPrice: '$1,299/month',
      savings: '69%',
      rating: 4.7,
      reviews: 456,
      benefits: ['Real-time business insights', 'Automated reporting', 'Data-driven decision making']
    },
    {
      id: '4',
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered campaign optimization, personalization, and lead scoring for maximum ROI.',
      features: ['Campaign optimization', 'Personalization', 'Lead scoring', 'A/B testing', 'Email automation', 'Social media management', 'Content generation', 'ROI tracking'],
      price: 'Starting at $299/month',
      category: 'Marketing',
      popular: true,
      marketPrice: '$799/month',
      savings: '63%',
      rating: 4.8,
      reviews: 1567,
      benefits: ['Increase conversion rates by 40%', 'Reduce marketing costs by 35%', 'Improve lead quality']
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'AI Sales Optimization',
      description: 'Advanced AI sales platform with intelligent lead scoring, sales forecasting, and automated follow-up for increased revenue.',
      features: ['Lead scoring', 'Sales forecasting', 'Automated follow-up', 'Pipeline management', 'Deal tracking', 'Performance analytics', 'CRM integration', 'Mobile app'],
      price: 'Starting at $399/month',
      category: 'Sales',
      popular: true,
      marketPrice: '$1,199/month',
      savings: '67%',
      rating: 4.9,
      reviews: 2134,
      benefits: ['Increase sales by 300%', 'Improve lead conversion rates', 'Automate sales processes']
    },
    {
      id: '6',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered code completion, debugging, and optimization for multiple programming languages with context awareness.',
      features: ['Code completion', 'Debugging help', 'Code optimization', 'Multi-language support', 'Documentation generation', 'Code review', 'Refactoring suggestions', 'Security scanning'],
      price: 'Starting at $39/month',
      category: 'Development',
      popular: true,
      marketPrice: '$99/month',
      savings: '61%',
      rating: 4.9,
      reviews: 2134,
      benefits: ['Increase development speed by 50%', 'Reduce bugs by 40%', 'Improve code quality']
    },
    {
      id: '7',
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions with image recognition, object detection, and visual analytics for various industries.',
      features: ['Image recognition', 'Object detection', 'Visual analytics', 'Real-time processing', 'Custom models', 'API integration', 'Batch processing', 'Cloud deployment'],
      price: 'Starting at $599/month',
      category: 'Computer Vision',
      popular: false,
      marketPrice: '$1,999/month',
      savings: '70%',
      rating: 4.6,
      reviews: 234,
      benefits: ['Automate visual inspections', 'Improve accuracy by 95%', 'Reduce manual labor costs']
    },
    {
      id: '8',
      icon: Mic,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: ['Voice recognition', 'Natural language processing', 'Multi-language support', 'Enterprise integration', 'Custom wake words', 'Conversation management', 'Analytics', 'API access'],
      price: 'Starting at $199/month',
      category: 'Voice AI',
      popular: false,
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.6,
      reviews: 345,
      benefits: ['Hands-free operation', 'Multi-language support', '24/7 availability']
    },
    {
      id: '9',
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity with threat detection, vulnerability assessment, and automated incident response.',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Risk analysis', 'Compliance reporting', 'Automated remediation', '24/7 monitoring'],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: true,
      marketPrice: '$2,499/month',
      savings: '68%',
      rating: 4.8,
      reviews: 567,
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 80%', 'Automate security responses']
    },
    {
      id: '10',
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Automated document processing with AI-powered data extraction, classification, and intelligent workflow automation.',
      features: ['Document extraction', 'Data classification', 'Workflow automation', 'OCR technology', 'Template recognition', 'Batch processing', 'Quality control', 'Integration APIs'],
      price: 'Starting at $89/month',
      category: 'Document AI',
      popular: false,
      marketPrice: '$199/month',
      savings: '55%',
      rating: 4.5,
      reviews: 312,
      benefits: ['Process documents 90% faster', 'Reduce manual errors', 'Automate workflows']
    },
    {
      id: '11',
      icon: Search,
      title: 'AI Search & Discovery',
      description: 'Intelligent search solutions with AI-powered content discovery, semantic search, and personalized recommendations.',
      features: ['Semantic search', 'Content discovery', 'Personalized recommendations', 'Natural language queries', 'Multi-language support', 'Real-time indexing', 'Analytics', 'API access'],
      price: 'Starting at $149/month',
      category: 'Search AI',
      popular: false,
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.7,
      reviews: 234,
      benefits: ['Improve search accuracy by 85%', 'Increase content discovery', 'Personalize user experience']
    },
    {
      id: '12',
      icon: Smartphone,
      title: 'AI Mobile App Development',
      description: 'Build intelligent mobile applications with AI-powered features, natural language processing, and machine learning capabilities.',
      features: ['AI-powered features', 'Natural language processing', 'Machine learning', 'Cross-platform development', 'Real-time analytics', 'Push notifications', 'Offline capabilities', 'Cloud integration'],
      price: 'Starting at $1,999/month',
      category: 'Mobile AI',
      popular: true,
      marketPrice: '$4,999/month',
      savings: '60%',
      rating: 4.8,
      reviews: 789,
      benefits: ['Create intelligent mobile apps', 'Reduce development time by 50%', 'Enhance user experience']
    },
    {
      id: '13',
      icon: Camera,
      title: 'AI Image & Video Analysis',
      description: 'Advanced AI-powered image and video analysis with object detection, content moderation, and visual search capabilities.',
      features: ['Object detection', 'Content moderation', 'Visual search', 'Image classification', 'Video analysis', 'Real-time processing', 'Custom models', 'API integration'],
      price: 'Starting at $299/month',
      category: 'Visual AI',
      popular: false,
      marketPrice: '$799/month',
      savings: '63%',
      rating: 4.6,
      reviews: 456,
      benefits: ['Automate visual content analysis', 'Improve content moderation', 'Enable visual search']
    },
    {
      id: '14',
      icon: Headphones,
      title: 'AI Audio Processing',
      description: 'Intelligent audio processing with speech recognition, audio analysis, and real-time transcription for various applications.',
      features: ['Speech recognition', 'Audio analysis', 'Real-time transcription', 'Noise reduction', 'Speaker identification', 'Language detection', 'Custom models', 'API access'],
      price: 'Starting at $199/month',
      category: 'Audio AI',
      popular: false,
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.5,
      reviews: 189,
      benefits: ['Convert speech to text accurately', 'Analyze audio content', 'Enable voice interfaces']
    },
    {
      id: '15',
      title: 'AI Content Generation',
      description: 'Create high-quality content with AI-powered writing, image generation, and video production for marketing and communication.',
      features: ['Content writing', 'Image generation', 'Video creation', 'SEO optimization', 'Multi-language', 'Brand consistency', 'Template library', 'API access'],
      price: 'Starting at $149/month',
      category: 'Content AI',
      popular: true,
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.8,
      reviews: 1234,
      benefits: ['Generate content 10x faster', 'Maintain brand consistency', 'Optimize for SEO']
    },
    {
      id: '16',
      icon: BookOpen,
      title: 'AI Learning & Training',
      description: 'Personalized learning experiences with AI-powered content adaptation, student performance analytics, and adaptive learning paths.',
      features: ['Personalized learning', 'Content adaptation', 'Performance analytics', 'Learning paths', 'Progress tracking', 'Assessment tools', 'Certification', 'Mobile app'],
      price: 'Starting at $99/month',
      category: 'Education AI',
      popular: false,
      marketPrice: '$299/month',
      savings: '67%',
      rating: 4.7,
      reviews: 567,
      benefits: ['Personalize learning experiences', 'Improve learning outcomes', 'Track student progress']
    },
    {
      id: '17',
      icon: ShoppingCart,
      title: 'AI E-commerce Optimization',
      description: 'Optimize e-commerce performance with AI-powered product recommendations, pricing strategies, and inventory management.',
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer insights', 'Sales forecasting', 'A/B testing', 'Conversion optimization', 'Analytics dashboard'],
      price: 'Starting at $179/month',
      category: 'E-commerce AI',
      popular: true,
      marketPrice: '$499/month',
      savings: '64%',
      rating: 4.8,
      reviews: 789,
      benefits: ['Increase sales by 40%', 'Optimize pricing strategies', 'Improve customer experience']
    },
    {
      id: '18',
      icon: Home,
      title: 'AI Property Management',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization for real estate professionals.',
      features: ['Tenant screening', 'Maintenance scheduling', 'Rent optimization', 'Property analytics', 'Tenant portal', 'Financial reporting', 'Lease management', 'Communication tools'],
      price: 'Starting at $149/month',
      category: 'Real Estate AI',
      popular: false,
      marketPrice: '$399/month',
      savings: '63%',
      rating: 4.6,
      reviews: 234,
      benefits: ['Optimize property management', 'Improve tenant satisfaction', 'Reduce maintenance costs']
    },
    {
      id: '19',
      icon: Briefcase,
      title: 'AI HR & Recruitment',
      description: 'Streamline HR processes with AI-powered resume screening, candidate matching, and employee performance analytics.',
      features: ['Resume screening', 'Candidate matching', 'Performance analytics', 'Employee engagement', 'Retention analysis', 'Skills assessment', 'Background checks', 'Hiring analytics'],
      price: 'Starting at $199/month',
      category: 'HR AI',
      popular: true,
      marketPrice: '$499/month',
      savings: '60%',
      rating: 4.7,
      reviews: 456,
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Automate HR processes']
    },
    {
      id: '20',
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization in healthcare.',
      features: ['Medical imaging', 'Drug discovery', 'Patient analytics', 'Diagnostic support', 'HIPAA compliance', 'Clinical decision support', 'Treatment optimization', 'Research tools'],
      price: 'Starting at $1,999/month',
      category: 'Healthcare AI',
      popular: false,
      marketPrice: '$4,999/month',
      savings: '60%',
      rating: 4.8,
      reviews: 123,
      benefits: ['Improve diagnostic accuracy', 'Accelerate drug discovery', 'Optimize patient care']
    }
  ];

  const categories = [
    'All', 'Analytics', 'Customer Service', 'Marketing', 'Sales', 'Development', 
    'Computer Vision', 'Voice AI', 'Security', 'Document AI', 'Search AI', 
    'Mobile AI', 'Visual AI', 'Audio AI', 'Content AI', 'Education AI', 
    'E-commerce AI', 'Real Estate AI', 'HR AI', 'Healthcare AI'
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | 20+ Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including business intelligence, customer support, marketing automation, and more. Starting from $39/month with enterprise solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, customer support AI, marketing automation, AI development" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="20+ Advanced AI Solutions for Modern Businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight holographic-text cyber-scan-line">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              20+ Advanced AI solutions for modern businesses. From business intelligence to customer support, 
              we provide comprehensive AI services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white neon-glow'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                {categories.length > 8 && (
                  <span className="text-gray-400 text-sm px-4 py-2">
                    +{categories.length - 8} more categories
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
                Choose from our comprehensive collection of AI services designed to transform your business.
              </p>
              <div className="text-cyan-400 font-medium">
                Showing {filteredServices.length} of {aiServices.length} services
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative quantum-card p-6 hover:scale-105 transition-all duration-300 group ${
                    service.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 energy-pulse">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
                      {service.marketPrice && (
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Save {service.savings}
                          </span>
                        </div>
                      )}
                    </div>

                    {service.rating && (
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating!)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-1">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    )}

                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-4">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm text-center">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}>
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="cyber-button"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Proven results that drive business growth and efficiency with cutting-edge AI technology.
              </p>
            </div>

            <div className="cyber-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Get in Touch</h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your business with our AI services?
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <Phone className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    +1 (302) 464-0950
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Mon-Fri: 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <Mail className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">24/7 Support Available</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center energy-pulse">
                    <MapPin className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hologram-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive AI services. 
                From $39/month to enterprise solutions, we have the perfect AI service for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg font-semibold transform hover:scale-105">
                  Contact Us
                </button>
                <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPage;