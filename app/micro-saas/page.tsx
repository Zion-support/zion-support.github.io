'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Settings, Target, Globe, Database, Smartphone, Lock, TrendingUp, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, DollarSign, Award, Rocket, Sparkles } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasProducts = [
    {
      id: 1,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      category: 'Analytics',
      icon: BarChart,
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
      marketPrice: '$200-500/month',
      benefits: ['Increase revenue by 35%', 'Save 20 hours/week on reporting', 'Make data-driven decisions', 'Scale with your business']
    },
    {
      id: 2,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      category: 'Communication',
      icon: Users,
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
      marketPrice: '$300-800/month',
      benefits: ['Reduce support costs by 60%', '24/7 customer support', 'Improve customer satisfaction', 'Scale support operations']
    },
    {
      id: 3,
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      category: 'Security',
      icon: Shield,
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
      marketPrice: '$500-2000/month',
      benefits: ['Prevent 99.9% of cyber attacks', 'Meet compliance requirements', 'Reduce security incidents', 'Protect your reputation']
    },
    {
      id: 4,
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      category: 'Storage',
      icon: Cloud,
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
      marketPrice: '$150-400/month',
      benefits: ['Never lose data again', 'Instant recovery capabilities', 'Reduce storage costs by 40%', 'Meet compliance requirements']
    },
    {
      id: 5,
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      category: 'Monitoring',
      icon: TrendingUp,
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
      marketPrice: '$200-600/month',
      benefits: ['Improve app performance by 50%', 'Reduce downtime by 90%', 'Optimize user experience', 'Scale with confidence']
    },
    {
      id: 6,
      title: 'Zion Workflow AI',
      description: 'Intelligent process automation with AI-powered workflow optimization and decision making',
      category: 'AI',
      icon: Brain,
      features: [
        'AI-powered workflow design and optimization',
        'Intelligent task routing and assignment',
        'Automated decision making with ML models',
        'Process mining and bottleneck identification',
        'Exception handling and escalation',
        'Integration with 500+ business tools',
        'Custom AI model training',
        'Performance analytics and ROI tracking'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      marketPrice: '$400-1200/month',
      benefits: ['Automate 80% of repetitive tasks', 'Reduce process time by 70%', 'Eliminate human errors', 'Scale operations efficiently']
    },
    {
      id: 7,
      title: 'Zion Email Marketing Pro',
      description: 'AI-powered email marketing automation with advanced personalization and optimization',
      category: 'Marketing',
      icon: Mail,
      features: [
        'AI-powered email content generation',
        'Advanced segmentation and targeting',
        'Automated A/B testing and optimization',
        'Predictive send time optimization',
        'Advanced analytics and ROI tracking',
        'Integration with major CRMs and platforms',
        'Compliance tools (GDPR, CAN-SPAM)',
        'White-label solution available'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      popular: false,
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 40%', 'Boost conversion rates by 25%', 'Save 15 hours/week', 'Scale email campaigns']
    },
    {
      id: 8,
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      category: 'Finance',
      icon: DollarSign,
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
      marketPrice: '$300-800/month',
      benefits: ['Reduce accounting time by 60%', 'Improve financial accuracy', 'Automate compliance', 'Make better financial decisions']
    },
    {
      id: 9,
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      category: 'HR',
      icon: Users,
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
      marketPrice: '$250-600/month',
      benefits: ['Streamline HR processes', 'Improve employee experience', 'Reduce administrative burden', 'Make data-driven HR decisions']
    },
    {
      id: 10,
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      category: 'E-commerce',
      icon: ShoppingCart,
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
      marketPrice: '$500-1500/month',
      benefits: ['Increase sales by 45%', 'Reduce cart abandonment', 'Optimize pricing strategy', 'Scale online business']
    },
    {
      id: 11,
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      category: 'Development',
      icon: Smartphone,
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
      marketPrice: '$300-1000/month',
      benefits: ['Build apps 10x faster', 'No coding required', 'Professional app quality', 'Scale mobile presence']
    },
    {
      id: 12,
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      category: 'SEO',
      icon: Search,
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
      marketPrice: '$200-500/month',
      benefits: ['Increase organic traffic by 60%', 'Improve search rankings', 'Save 20 hours/week', 'Scale SEO efforts']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Analytics', name: 'Analytics' },
    { id: 'Communication', name: 'Communication' },
    { id: 'Security', name: 'Security' },
    { id: 'Storage', name: 'Storage' },
    { id: 'Monitoring', name: 'Monitoring' },
    { id: 'AI', name: 'AI & Automation' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Finance', name: 'Finance' },
    { id: 'HR', name: 'HR' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Development', name: 'Development' },
    { id: 'SEO', name: 'SEO' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive interface and pre-built templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and SOC2 compliance'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results and automation'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere, anytime with our global infrastructure'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Secure' },
    { icon: Zap, value: '5min', label: 'Setup Time' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-cyan-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools that solve specific business problems. 
            Our micro SaaS products are designed to deliver maximum value with minimal complexity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                      <Users className="w-4 h-4 mr-1" />
                      {product.users}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                  <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  product.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                }`}>
                  Start Free Trial
                </button>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;