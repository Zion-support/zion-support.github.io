import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Code, BarChart, Users, Shield, Clock, DollarSign } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates and multi-language support.',
      icon: '✍️',
      price: '$79/month',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Bulk Content Generation',
        'API Access Included'
      ],
      popular: true,
      category: 'Content Creation',
      link: '/ai-content-generator'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting.',
      icon: '📊',
      price: '$149/month',
      features: [
        'Real-time Analytics',
        'AI-Powered Insights',
        'Custom Dashboards',
        'Automated Reports',
        'Data Visualization',
        'Mobile App Included'
      ],
      popular: true,
      category: 'Analytics',
      link: '/smart-analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-driven personalization and automation.',
      icon: '📧',
      price: '$99/month',
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'Advanced Segmentation',
        'Deliverability Optimization',
        '10,000 Subscribers'
      ],
      category: 'Marketing',
      link: '/ai-email-marketing'
    },
    {
      title: 'Code Review Assistant',
      description: 'AI-powered code review tool with security scanning and best practice recommendations.',
      icon: '🔍',
      price: '$199/month',
      features: [
        'AI Code Analysis',
        'Security Scanning',
        'Performance Optimization',
        'Best Practice Checks',
        'Multi-language Support',
        'Team Collaboration'
      ],
      category: 'Development',
      link: '/code-review-assistant'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and seamless human handoff.',
      icon: '🤖',
      price: '$129/month',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Analytics & Insights',
        'Custom Branding'
      ],
      category: 'Customer Service',
      link: '/ai-customer-support'
    },
    {
      title: 'Smart Invoice Generator',
      description: 'Automated invoice creation with AI-powered data extraction and payment tracking.',
      icon: '🧾',
      price: '$59/month',
      features: [
        'AI Data Extraction',
        'Automated Invoicing',
        'Payment Tracking',
        'Multi-currency Support',
        'Tax Calculations',
        'Client Portal'
      ],
      category: 'Finance',
      link: '/smart-invoice-generator'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media posting with AI-generated content and optimal timing.',
      icon: '📱',
      price: '$89/month',
      features: [
        'AI Content Generation',
        'Optimal Posting Times',
        'Multi-platform Support',
        'Hashtag Optimization',
        'Engagement Analytics',
        'Content Calendar'
      ],
      category: 'Social Media',
      link: '/ai-social-media-manager'
    },
    {
      title: 'Smart Project Tracker',
      description: 'AI-powered project management with predictive analytics and resource optimization.',
      icon: '📋',
      price: '$119/month',
      features: [
        'AI Project Insights',
        'Resource Optimization',
        'Risk Prediction',
        'Team Collaboration',
        'Time Tracking',
        'Custom Workflows'
      ],
      category: 'Project Management',
      link: '/smart-project-tracker'
    },
    {
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification with machine learning and automated follow-up.',
      icon: '🎯',
      price: '$159/month',
      features: [
        'Machine Learning Scoring',
        'Behavioral Analysis',
        'Automated Follow-up',
        'CRM Integration',
        'Custom Scoring Models',
        'Real-time Updates'
      ],
      category: 'Sales',
      link: '/ai-lead-scoring'
    },
    {
      title: 'Smart Document Processor',
      description: 'AI-powered document analysis with OCR, data extraction, and intelligent categorization.',
      icon: '📄',
      price: '$79/month',
      features: [
        'OCR Technology',
        'Data Extraction',
        'Smart Categorization',
        'Bulk Processing',
        'API Integration',
        'Cloud Storage'
      ],
      category: 'Document Management',
      link: '/smart-document-processor'
    },
    {
      title: 'AI Website Optimizer',
      description: 'Automated website performance optimization with AI-driven recommendations.',
      icon: '⚡',
      price: '$139/month',
      features: [
        'Performance Analysis',
        'SEO Optimization',
        'Speed Improvements',
        'Mobile Optimization',
        'A/B Testing',
        'Monthly Reports'
      ],
      category: 'Web Optimization',
      link: '/ai-website-optimizer'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$169/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Multi-location Support',
        'Supplier Integration',
        'Cost Analysis'
      ],
      category: 'Inventory',
      link: '/smart-inventory-manager'
    }
  ];

  const categories = [
    { name: 'All', count: microSAASServices.length },
    { name: 'Content Creation', count: microSAASServices.filter(s => s.category === 'Content Creation').length },
    { name: 'Analytics', count: microSAASServices.filter(s => s.category === 'Analytics').length },
    { name: 'Marketing', count: microSAASServices.filter(s => s.category === 'Marketing').length },
    { name: 'Development', count: microSAASServices.filter(s => s.category === 'Development').length },
    { name: 'Customer Service', count: microSAASServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Finance', count: microSAASServices.filter(s => s.category === 'Finance').length },
    { name: 'Social Media', count: microSAASServices.filter(s => s.category === 'Social Media').length },
    { name: 'Project Management', count: microSAASServices.filter(s => s.category === 'Project Management').length },
    { name: 'Sales', count: microSAASServices.filter(s => s.category === 'Sales').length },
    { name: 'Document Management', count: microSAASServices.filter(s => s.category === 'Document Management').length },
    { name: 'Web Optimization', count: microSAASServices.filter(s => s.category === 'Web Optimization').length },
    { name: 'Inventory', count: microSAASServices.filter(s => s.category === 'Inventory').length }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our pre-configured templates and automated onboarding process.'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology to automate complex tasks and boost productivity.'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and SDKs for seamless integration with your existing systems.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'Real-time Analytics',
      description: 'Track performance and ROI with detailed analytics and customizable dashboards.'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools to keep your team aligned and productive.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful AI-driven tools for modern businesses
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of micro SAAS applications. 
            From AI content generation to smart analytics, we provide the tools you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">Ready-to-use Tools</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$79</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">5min</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Micro SAAS Tools
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="cyber-button px-6 py-2 text-sm"
                style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:shadow-2xl transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                
                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-400 text-sm ml-2">/month</span>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all inline-flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="w-full border border-purple-600 text-purple-300 py-2 px-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all text-center block"
                  >
                    Call for Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 Micro SAAS Tool
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center ring-2 ring-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  3 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Phone Support
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-orange-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Premium Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated Account Manager
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site Training
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to boost productivity and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free 14-day trial for all plans</p>
            <p>✓ No setup fees or hidden costs</p>
            <p>✓ Cancel anytime with 30-day notice</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
