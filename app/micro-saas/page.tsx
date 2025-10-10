'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  FileText,
  Filter,
  Search,
  Phone,
  Mail,
  DollarSign,
  Award,
  Rocket
} from 'lucide-react';
const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts = [
    // AI-Powered Tools
    {
      id: 1,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.',
      icon: FileText,
      category: 'ai',
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Up to 5 users',
      features: [
        'AI-powered content generation for 20+ content types',
        'SEO optimization with keyword research integration',
        'Brand voice customization and tone matching',
        'Plagiarism detection and originality scoring',
        'Multi-language support (50+ languages)',
        'Content calendar and scheduling',
        'Team collaboration and approval workflows',
        'Analytics and performance tracking'
      ],
      popular: true,
      rating: 4.9,
      reviews: 1250,
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence platform with AI-driven insights, predictive analytics, and customizable dashboards for data-driven decision making.',
      icon: BarChart,
      category: 'ai',
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 10 users',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      popular: true,
      rating: 4.8,
      reviews: 980,
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 3,
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with advanced AI chatbot, live chat, ticket management, and sentiment analysis capabilities.',
      icon: Users,
      category: 'ai',
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 users',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      popular: false,
      rating: 4.7,
      reviews: 650,
      link: 'https://ziontechgroup.com/ai-support'
    },
    {
      id: 4,
      title: 'AI Project Manager',
      description: 'Intelligent project management platform with AI-powered task allocation, resource optimization, and predictive project analytics.',
      icon: Calendar,
      category: 'ai',
      price: '$35/month',
      originalPrice: '$59/month',
      users: 'Up to 20 users',
      features: [
        'AI-powered task scheduling and resource allocation',
        'Predictive project timeline and risk analysis',
        'Smart team collaboration and communication tools',
        'Automated progress tracking and reporting',
        'Integration with 100+ popular tools',
        'Custom workflow automation',
        'Advanced analytics and performance insights',
        'Mobile app for on-the-go management'
      ],
      popular: true,
      rating: 4.6,
      reviews: 420,
      link: 'https://ziontechgroup.com/ai-project-manager'
    },

    // Business Tools
    {
      id: 5,
      title: 'Invoice Generator AI',
      description: 'Automated invoice creation and management system with AI-powered expense categorization, payment tracking, and financial insights.',
      icon: DollarSign,
      category: 'business',
      price: '$19/month',
      originalPrice: '$39/month',
      users: 'Up to 3 users',
      features: [
        'AI-powered invoice generation and customization',
        'Automated expense categorization and tracking',
        'Payment processing and reminder automation',
        'Multi-currency support and tax calculations',
        'Client portal and payment tracking',
        'Financial reporting and analytics',
        'Integration with accounting software',
        'Mobile app for invoice management'
      ],
      popular: false,
      rating: 4.5,
      reviews: 320,
      link: 'https://ziontechgroup.com/invoice-ai'
    },
    {
      id: 6,
      title: 'Lead Generation Pro',
      description: 'AI-powered lead generation and qualification platform that identifies, scores, and nurtures prospects automatically.',
      icon: Target,
      category: 'business',
      price: '$59/month',
      originalPrice: '$99/month',
      users: 'Up to 8 users',
      features: [
        'AI-powered lead discovery and contact finding',
        'Advanced lead scoring and qualification',
        'Automated email sequences and follow-ups',
        'CRM integration and data synchronization',
        'Social media and web scraping capabilities',
        'Lead nurturing and conversion tracking',
        'Custom lead scoring models',
        'Analytics and ROI reporting'
      ],
      popular: true,
      rating: 4.8,
      reviews: 780,
      link: 'https://ziontechgroup.com/lead-gen'
    },
    {
      id: 7,
      title: 'Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered personalization, A/B testing, and automated campaign optimization.',
      icon: Mail,
      category: 'business',
      price: '$39/month',
      originalPrice: '$69/month',
      users: 'Up to 12 users',
      features: [
        'AI-powered email personalization and content optimization',
        'Advanced segmentation and targeting',
        'Automated A/B testing and optimization',
        'Drag-and-drop email builder with AI assistance',
        'Behavioral triggers and automation workflows',
        'Advanced analytics and performance tracking',
        'Integration with popular CRM and e-commerce platforms',
        'Compliance tools and deliverability optimization'
      ],
      popular: false,
      rating: 4.7,
      reviews: 540,
      link: 'https://ziontechgroup.com/email-ai'
    },

    // Security & Monitoring
    {
      id: 8,
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring platform with AI threat detection, vulnerability scanning, and compliance reporting.',
      icon: Shield,
      category: 'security',
      price: '$149/month',
      originalPrice: '$249/month',
      users: 'Up to 50 users',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      popular: false,
      rating: 4.9,
      reviews: 890,
      link: 'https://ziontechgroup.com/security-monitor'
    },
    {
      id: 9,
      title: 'Website Performance AI',
      description: 'Advanced website performance monitoring and optimization platform with AI-powered recommendations and automated fixes.',
      icon: Rocket,
      category: 'monitoring',
      price: '$29/month',
      originalPrice: '$49/month',
      users: 'Up to 5 websites',
      features: [
        'Real-time performance monitoring and alerting',
        'AI-powered optimization recommendations',
        'Automated performance fixes and optimizations',
        'Core Web Vitals tracking and reporting',
        'Uptime monitoring with global checkpoints',
        'CDN optimization and caching strategies',
        'Mobile performance optimization',
        'Competitor performance benchmarking'
      ],
      popular: true,
      rating: 4.6,
      reviews: 680,
      link: 'https://ziontechgroup.com/performance-ai'
    },

    // Development Tools
    {
      id: 10,
      title: 'Code Review AI',
      description: 'Intelligent code review and quality assurance platform that automatically analyzes code for bugs, security issues, and best practices.',
      icon: Code,
      category: 'development',
      price: '$79/month',
      originalPrice: '$129/month',
      users: 'Up to 15 developers',
      features: [
        'AI-powered code analysis and bug detection',
        'Security vulnerability scanning and remediation',
        'Code quality scoring and improvement suggestions',
        'Automated code review and pull request analysis',
        'Integration with GitHub, GitLab, and Bitbucket',
        'Custom coding standards and rule configuration',
        'Team performance analytics and insights',
        'Learning recommendations and skill development'
      ],
      popular: false,
      rating: 4.7,
      reviews: 450,
      link: 'https://ziontechgroup.com/code-review-ai'
    },
    {
      id: 11,
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring platform with automated test generation, performance testing, and documentation.',
      icon: Settings,
      category: 'development',
      price: '$49/month',
      originalPrice: '$79/month',
      users: 'Up to 10 users',
      features: [
        'Automated API test generation and execution',
        'Performance testing and load testing capabilities',
        'API documentation generation and maintenance',
        'Mock server and test data management',
        'Integration with CI/CD pipelines',
        'Real-time monitoring and alerting',
        'Team collaboration and test sharing',
        'Advanced analytics and reporting'
      ],
      popular: true,
      rating: 4.5,
      reviews: 380,
      link: 'https://ziontechgroup.com/api-testing'
    },

    // Data & Analytics
    {
      id: 12,
      title: 'Data Visualization Pro',
      description: 'Advanced data visualization and dashboard creation platform with AI-powered insights and interactive reporting capabilities.',
      icon: TrendingUp,
      category: 'analytics',
      price: '$39/month',
      originalPrice: '$69/month',
      users: 'Up to 8 users',
      features: [
        'Drag-and-drop dashboard builder with 100+ chart types',
        'AI-powered data insights and recommendations',
        'Real-time data connections and live updates',
        'Interactive filtering and drill-down capabilities',
        'Custom branding and white-label options',
        'Mobile-responsive dashboards',
        'Scheduled reports and automated distribution',
        'Advanced data modeling and calculations'
      ],
      popular: false,
      rating: 4.6,
      reviews: 520,
      link: 'https://ziontechgroup.com/data-viz'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'ai', name: 'AI Tools' },
    { id: 'business', name: 'Business Tools' },
    { id: 'security', name: 'Security' },
    { id: 'monitoring', name: 'Monitoring' },
    { id: 'development', name: 'Development' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface and automated onboarding process'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and SOC2 compliance'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results and automation'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime with our cloud infrastructure'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  const searchFilteredProducts = filteredProducts.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-cyan-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools that solve specific business problems. 
            Our micro SaaS products are designed to deliver maximum value with minimal complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
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
                    placeholder="Search products..."
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

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-300">
              {searchFilteredProducts.length} product{searchFilteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredProducts.map((product) => (
              <div key={product.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                product.popular
                  ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                  : 'border-slate-700 hover:border-slate-600'
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {product.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {product.reviews} reviews
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mb-6">{product.users}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {product.features.length > 4 && (
                    <li className="text-gray-400 text-sm">
                      +{product.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex flex-col gap-3">
                  <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }`}>
                    Start Free Trial
                  </button>
                  <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
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
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose any of our micro SaaS products and start your free trial today. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Products
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

export default MicroSaasPage;
