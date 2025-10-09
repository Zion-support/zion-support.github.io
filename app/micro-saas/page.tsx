import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Zap, 
  Brain, 
  Code, 
  BarChart, 
  Users, 
  Target, 
  Shield, 
  Globe, 
  Settings,
  TrendingUp,
  Mail,
  FileText,
  Search,
  Image,
  Video,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Sparkles,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    // AI Development Tools
    {
      id: 'ai-code-review',
      name: 'AI Code Review Assistant',
      description: 'Automated code analysis and review with AI-powered suggestions for improvements, security vulnerabilities, and best practices.',
      icon: Code,
      category: 'development',
      price: 29,
      period: 'month',
      features: ['Automated Code Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Suggestions', 'Multi-language Support', 'Git Integration'],
      benefits: ['50% faster code reviews', '90% reduction in bugs', 'Improved code quality', 'Team collaboration'],
      popular: true,
      rating: 4.9,
      users: 2500
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization tool that automatically improves your website ranking and content performance.',
      icon: Search,
      category: 'marketing',
      price: 49,
      period: 'month',
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO Audit', 'Competitor Analysis', 'Rank Tracking', 'Automated Reports'],
      benefits: ['40% increase in organic traffic', 'Higher search rankings', 'Automated optimization', 'Competitive advantage'],
      popular: true,
      rating: 4.8,
      users: 1800
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Business Intelligence',
      description: 'Comprehensive analytics dashboard with AI-powered insights, predictive analytics, and automated reporting.',
      icon: BarChart,
      category: 'analytics',
      price: 79,
      period: 'month',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'API Integration'],
      benefits: ['Data-driven decisions', 'Automated insights', 'Real-time monitoring', 'ROI optimization'],
      popular: false,
      rating: 4.7,
      users: 1200
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation Suite',
      description: 'Complete marketing automation platform with AI-powered email campaigns, social media management, and lead nurturing.',
      icon: Target,
      category: 'marketing',
      price: 99,
      period: 'month',
      features: ['Email Automation', 'Social Media Management', 'Lead Scoring', 'Campaign Optimization', 'A/B Testing', 'Customer Journey Mapping'],
      benefits: ['3x higher conversion rates', 'Automated lead nurturing', 'Personalized campaigns', 'Time savings'],
      popular: true,
      rating: 4.9,
      users: 3200
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Intelligence',
      description: 'Intelligent document processing and analysis tool that extracts, categorizes, and analyzes documents automatically.',
      icon: FileText,
      category: 'productivity',
      price: 39,
      period: 'month',
      features: ['Document OCR', 'Data Extraction', 'Smart Categorization', 'Search & Retrieval', 'Version Control', 'Collaboration Tools'],
      benefits: ['90% faster document processing', 'Improved accuracy', 'Better organization', 'Cost reduction'],
      popular: false,
      rating: 4.6,
      users: 950
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer support chatbot that provides 24/7 assistance with natural language processing and human handoff.',
      icon: Users,
      category: 'support',
      price: 59,
      period: 'month',
      features: ['24/7 Support', 'Multi-language Support', 'Human Handoff', 'Knowledge Base', 'Sentiment Analysis', 'Performance Analytics'],
      benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support'],
      popular: true,
      rating: 4.8,
      users: 2100
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced content creation tool that generates high-quality articles, social media posts, and marketing copy using AI.',
      icon: FileText,
      category: 'content',
      price: 69,
      period: 'month',
      features: ['Article Generation', 'Social Media Posts', 'Email Templates', 'SEO Optimization', 'Brand Voice Training', 'Multi-language Support'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO-optimized content', 'Cost-effective'],
      popular: true,
      rating: 4.7,
      users: 2800
    },
    {
      id: 'ai-image-optimizer',
      name: 'AI Image Optimizer',
      description: 'Intelligent image compression and optimization tool that reduces file sizes while maintaining quality and improving performance.',
      icon: Image,
      category: 'media',
      price: 19,
      period: 'month',
      features: ['Smart Compression', 'Format Conversion', 'Batch Processing', 'Quality Optimization', 'WebP Conversion', 'CDN Integration'],
      benefits: ['50% smaller file sizes', 'Faster loading times', 'Better SEO scores', 'Bandwidth savings'],
      popular: false,
      rating: 4.5,
      users: 750
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automated video editing tool that creates professional videos with AI-powered editing, transitions, and effects.',
      icon: Video,
      category: 'media',
      price: 89,
      period: 'month',
      features: ['Auto-editing', 'Smart Transitions', 'Audio Sync', 'Color Correction', 'Text Overlay', 'Export Options'],
      benefits: ['Professional results', 'Time savings', 'No editing skills needed', 'Consistent quality'],
      popular: false,
      rating: 4.4,
      users: 600
    },
    {
      id: 'ai-database-optimizer',
      name: 'AI Database Optimizer',
      description: 'Intelligent database performance optimization tool that analyzes and improves query performance automatically.',
      icon: Database,
      category: 'development',
      price: 149,
      period: 'month',
      features: ['Query Optimization', 'Index Recommendations', 'Performance Monitoring', 'Automated Tuning', 'Security Analysis', 'Backup Management'],
      benefits: ['3x faster queries', 'Reduced server costs', 'Improved reliability', 'Automated maintenance'],
      popular: false,
      rating: 4.8,
      users: 400
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI Mobile App Builder',
      description: 'No-code mobile app development platform with AI assistance for creating iOS and Android applications.',
      icon: Smartphone,
      category: 'development',
      price: 199,
      period: 'month',
      features: ['Drag & Drop Builder', 'AI Code Generation', 'Cross-platform', 'App Store Deployment', 'Analytics Integration', 'Push Notifications'],
      benefits: ['No coding required', 'Faster development', 'Cross-platform apps', 'Professional results'],
      popular: true,
      rating: 4.6,
      users: 1500
    },
    {
      id: 'ai-security-scanner',
      name: 'AI Security Scanner',
      description: 'Comprehensive security scanning tool that identifies vulnerabilities and provides automated fixes for web applications.',
      icon: Shield,
      category: 'security',
      price: 79,
      period: 'month',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Compliance Checks', 'Automated Fixes', 'Security Reports', 'Real-time Monitoring'],
      benefits: ['Enhanced security', 'Compliance assurance', 'Automated protection', 'Risk reduction'],
      popular: false,
      rating: 4.7,
      users: 800
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation platform that streamlines business processes with AI-powered decision making.',
      icon: Settings,
      category: 'productivity',
      price: 99,
      period: 'month',
      features: ['Process Automation', 'AI Decision Making', 'Integration Hub', 'Custom Workflows', 'Performance Analytics', 'Error Handling'],
      benefits: ['80% process efficiency', 'Reduced manual work', 'Better accuracy', 'Cost savings'],
      popular: true,
      rating: 4.8,
      users: 1900
    },
    {
      id: 'ai-email-optimizer',
      name: 'AI Email Optimizer',
      description: 'Smart email optimization tool that improves deliverability, open rates, and engagement through AI analysis.',
      icon: Mail,
      category: 'marketing',
      price: 39,
      period: 'month',
      features: ['Deliverability Analysis', 'Subject Line Optimization', 'Content Suggestions', 'Send Time Optimization', 'A/B Testing', 'Performance Tracking'],
      benefits: ['40% higher open rates', 'Better deliverability', 'Improved engagement', 'Data-driven insights'],
      popular: false,
      rating: 4.5,
      users: 1100
    },
    {
      id: 'ai-api-builder',
      name: 'AI API Builder',
      description: 'Intelligent API development platform that automatically generates, tests, and documents APIs with AI assistance.',
      icon: Cpu,
      category: 'development',
      price: 129,
      period: 'month',
      features: ['Auto API Generation', 'Testing Suite', 'Documentation', 'Rate Limiting', 'Authentication', 'Monitoring'],
      benefits: ['Faster API development', 'Automated testing', 'Better documentation', 'Reduced errors'],
      popular: false,
      rating: 4.6,
      users: 650
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasServices.length },
    { id: 'development', name: 'Development', count: microSaasServices.filter(s => s.category === 'development').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'media', name: 'Media', count: microSaasServices.filter(s => s.category === 'media').length },
    { id: 'support', name: 'Support', count: microSaasServices.filter(s => s.category === 'support').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Powerful AI-driven tools for modern businesses. 50+ ready-to-use applications starting from $19/month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View All Tools
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">${service.price}</div>
                    <div className="text-sm text-gray-500">/{service.period}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                    <span className="text-sm text-gray-500 ml-2">({service.users} users)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, index) => (
                      <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Start Free Trial
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$19</div>
              <div className="text-gray-500 mb-6">/month per tool</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  1 AI Tool Access
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard Features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email Support
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 ring-2 ring-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$79</div>
              <div className="text-gray-500 mb-6">/month for 5 tools</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 5 AI Tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  API Access
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$199</div>
              <div className="text-gray-500 mb-6">/month unlimited</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  All AI Tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Premium Features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label Options
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom Development
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
