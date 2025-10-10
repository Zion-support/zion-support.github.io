'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  BarChart3, 
  MessageSquare,
  Search,
  Settings,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Heart,
  Bot,
  FileText,
  Eye,
  Mic,
  Workflow,
  Palette,
  Smartphone,
  Globe,
  Database,
  Lock,
  Monitor,
  Cpu,
  Layers,
  Target,
  Calendar,
  Code,
  Headphones
} from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  marketPrice: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive forecasting',
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
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics',
      marketPrice: '$150-300/month',
      link: 'https://ziontechgroup.com/analytics-dashboard'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis for multi-channel support',
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
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication',
      marketPrice: '$250-500/month',
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response capabilities',
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
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security',
      marketPrice: '$500-1000/month',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and cross-cloud redundancy',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage',
      marketPrice: '$120-250/month',
      link: 'https://ziontechgroup.com/cloud-backup'
    },
    {
      id: '5',
      icon: Monitor,
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations and predictive alerts',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring',
      marketPrice: '$200-400/month',
      link: 'https://ziontechgroup.com/performance-monitoring'
    },
    {
      id: '6',
      icon: Workflow,
      title: 'Zion Workflow AI',
      description: 'Intelligent process automation with AI-powered workflow optimization and exception handling',
      features: [
        'AI-powered workflow discovery and mapping',
        'Intelligent task automation and scheduling',
        'Exception handling and escalation management',
        'Process mining and optimization recommendations',
        'Integration with 200+ business applications',
        'Custom automation rules and triggers',
        'Performance analytics and reporting',
        'Human-in-the-loop workflow support'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      marketPrice: '$300-600/month',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      id: '7',
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and marketing automation platform with brand voice consistency',
      features: [
        'GPT-4 powered content generation',
        'Multi-platform content distribution',
        'Brand voice customization and consistency',
        'SEO optimization and keyword research',
        'A/B testing and performance analytics',
        'Content calendar and scheduling',
        'Social media management integration',
        'White-label content solutions'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      marketPrice: '$150-300/month',
      link: 'https://ziontechgroup.com/ai-content-writer'
    },
    {
      id: '8',
      icon: DollarSign,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform with fraud detection',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance',
      marketPrice: '$250-500/month',
      link: 'https://ziontechgroup.com/ai-financial-analyzer'
    },
    {
      id: '9',
      icon: Users,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR',
      marketPrice: '$200-400/month',
      link: 'https://ziontechgroup.com/ai-hr'
    },
    {
      id: '10',
      icon: Globe,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce',
      marketPrice: '$400-800/month',
      link: 'https://ziontechgroup.com/ai-ecommerce-solutions'
    },
    {
      id: '11',
      icon: Smartphone,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development'
      ],
      price: '$189/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      marketPrice: '$300-600/month',
      link: 'https://ziontechgroup.com/mobile-app-builder'
    },
    {
      id: '12',
      icon: Target,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO',
      marketPrice: '$200-400/month',
      link: 'https://ziontechgroup.com/seo-optimizer'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'HR', 'E-commerce', 'Development', 'SEO'];

  const filteredProducts = microSaasProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Zap, value: '5min', label: 'Setup Time' }
  ];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300 mb-12">
              <a href="tel:+13024640950" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-white">{product.price}</span>
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 6 && (
                      <li className="text-sm text-cyan-400">
                        +{product.features.length - 6} more features
                      </li>
                    )}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </a>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </React.Fragment>
  );
};

export default MicroSaasPage;