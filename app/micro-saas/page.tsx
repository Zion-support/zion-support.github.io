'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling',
      features: [
        'Real-time data visualization with 50+ chart types',
        'Custom dashboard builder with drag-and-drop interface',
        'AI-powered insights and anomaly detection',
        'Advanced reporting with automated scheduling',
        'API integration with 100+ data sources',
        'Mobile-responsive dashboard with offline access',
        'White-label customization options',
        'Advanced user permissions and role management'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multilingual support',
      features: [
        'Advanced AI chatbot with GPT-4 integration',
        'Multi-channel support (web, mobile, social, WhatsApp)',
        'Sentiment analysis and mood tracking',
        'Live chat integration with human handoff',
        'Knowledge base management with AI search',
        'Performance analytics and conversation insights',
        'Custom AI training with your data',
        'Integration with CRM and helpdesk systems'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management',
      features: [
        'Real-time threat monitoring across all endpoints',
        'AI-powered threat detection and behavioral analysis',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Vulnerability scanning and patch management',
        'Security analytics dashboard with threat intelligence',
        '24/7 security operations center monitoring',
        'Custom security policies and rule creation'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and cross-platform synchronization',
      features: [
        'Automated cloud backup with version control',
        'Disaster recovery planning and testing',
        'Version control and file history tracking',
        'AI-powered storage optimization and deduplication',
        'Cross-platform sync (Windows, Mac, Linux, Mobile)',
        'Advanced encryption (AES-256) and zero-knowledge architecture',
        'Bandwidth throttling and scheduling',
        'Compliance with data residency requirements'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations and real-time alerting',
      features: [
        'Real-time performance monitoring across all applications',
        'AI-powered optimization suggestions and recommendations',
        'Error tracking and alerting with smart notifications',
        'User experience analytics and heatmaps',
        'Database performance insights and query optimization',
        'Mobile app performance tracking and crash reporting',
        'Custom metrics and KPI tracking',
        'Integration with popular development tools'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models, workflow optimization, and 200+ integrations',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'AI-powered process optimization and suggestions',
        'Custom automation rules and conditional logic',
        'Integration with 200+ popular business tools',
        'Advanced analytics and process insights',
        'Multi-tenant architecture with role-based access',
        'Custom AI model training and deployment',
        'Real-time workflow monitoring and debugging'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation, personalization, and deliverability optimization',
      features: [
        'AI-powered content generation and optimization',
        'Advanced audience segmentation and targeting',
        'Automated campaign optimization and A/B testing',
        'Comprehensive analytics and ROI tracking',
        'Template library with 500+ professional designs',
        'Deliverability optimization and reputation monitoring',
        'Advanced automation workflows and drip campaigns',
        'Integration with CRM and e-commerce platforms'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform with AI-powered insights and forecasting',
      features: [
        'Automated bookkeeping and transaction categorization',
        'AI-powered expense categorization and receipt scanning',
        'Financial forecasting and budget planning',
        'Invoice generation and automated follow-ups',
        'Tax preparation assistance and compliance checking',
        'Multi-currency support with real-time exchange rates',
        'Advanced financial reporting and analytics',
        'Integration with banks and payment processors'
      ],
      price: '$179/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '📝',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials with brand consistency',
      features: [
        'AI-powered blog post and article generation',
        'Social media content creation and scheduling',
        'Marketing material design and templates',
        'Brand voice consistency and style guides',
        'SEO optimization and keyword research',
        'Content calendar and planning tools',
        'Multi-language content generation',
        'Collaboration tools and approval workflows'
      ],
      price: '$129/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Content'
    },
    {
      id: '10',
      icon: '👥',
      title: 'Zion Team Hub',
      description: 'Comprehensive team collaboration and project management platform with AI-powered productivity insights',
      features: [
        'Project management with Gantt charts and Kanban boards',
        'Team collaboration with chat, video calls, and file sharing',
        'AI-powered productivity insights and recommendations',
        'Time tracking and resource allocation',
        'Document collaboration and version control',
        'Meeting scheduling and calendar integration',
        'Task automation and workflow management',
        'Advanced reporting and team analytics'
      ],
      price: '$159/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Collaboration'
    },
    {
      id: '11',
      icon: '🛒',
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with intelligent product recommendations and automated customer service',
      features: [
        'AI-powered product recommendations and personalization',
        'Automated customer service and support chatbots',
        'Inventory management with demand forecasting',
        'Dynamic pricing optimization',
        'Customer behavior analytics and insights',
        'Multi-channel selling (web, mobile, social)',
        'Payment processing and fraud detection',
        'Advanced SEO and marketing tools'
      ],
      price: '$249/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'E-commerce'
    },
    {
      id: '12',
      icon: '🎯',
      title: 'Zion Lead Gen Pro',
      description: 'Advanced lead generation and qualification platform with AI-powered scoring and automated nurturing',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated lead nurturing and follow-up sequences',
        'Multi-channel lead capture (web, social, email)',
        'Advanced lead analytics and conversion tracking',
        'CRM integration and data synchronization',
        'Custom lead forms and landing pages',
        'Lead enrichment and data enhancement',
        'ROI tracking and campaign optimization'
      ],
      price: '$189/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Sales'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Content', 'Collaboration', 'E-commerce', 'Sales'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SaaS
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                product.popular ? 'border-cyan-500' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {product.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <span>{product.users}</span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mt-4">{product.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS products are designed for quick deployment, easy integration, and immediate value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our streamlined onboarding process.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">Grow with confidence - our solutions scale with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions or contact us for a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;