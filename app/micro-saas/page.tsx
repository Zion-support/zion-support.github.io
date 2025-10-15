import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Package,
  Heart,
  Mail
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials with advanced NLP and SEO optimization.',
      icon: Package,
      features: ['AI Writing Assistant', 'Content Templates', 'SEO Optimization', 'Multi-platform Publishing', 'Brand Voice Training', 'Content Calendar', 'Plagiarism Checker', 'Multi-language Support'],
      price: '$29/month',
      originalPrice: '$49/month',
      popular: true,
      category: 'Content Creation',
      freeTrial: '14 days',
      setupTime: '5 minutes',
      integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social Media APIs'],
      useCases: ['Blog Management', 'Social Media Content', 'Email Marketing', 'Product Descriptions', 'SEO Content']
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered insights, automation, and predictive analytics for sales teams.',
      icon: Users,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Analytics', 'Integration Hub', 'Pipeline Management', 'Email Tracking', 'Call Recording', 'Custom Fields'],
      price: '$49/month',
      originalPrice: '$79/month',
      popular: false,
      category: 'CRM & Sales',
      freeTrial: '30 days',
      setupTime: '15 minutes',
      integrations: ['Gmail', 'Outlook', 'Slack', 'Zoom', 'Calendly', 'Stripe', 'PayPal'],
      useCases: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Marketing Automation', 'Revenue Tracking']
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'Smart inventory management with predictive analytics, automated reordering, and real-time tracking across multiple locations.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Auto Reordering', 'Multi-location', 'Real-time Tracking', 'Barcode Scanning', 'Supplier Management', 'Cost Analysis', 'Low Stock Alerts'],
      price: '$39/month',
      originalPrice: '$59/month',
      popular: false,
      category: 'Inventory Management',
      freeTrial: '21 days',
      setupTime: '30 minutes',
      integrations: ['QuickBooks', 'Xero', 'Shopify', 'WooCommerce', 'Amazon', 'eBay'],
      useCases: ['Retail Management', 'E-commerce', 'Warehouse Operations', 'Supply Chain', 'Cost Control']
    },
    {
      id: 'ai-financial-analytics-pro',
      title: 'AI Financial Analytics Pro',
      description: 'Advanced financial reporting and analysis with AI-powered insights, forecasting, and automated compliance reporting.',
      icon: BarChart3,
      features: ['Financial Forecasting', 'Expense Tracking', 'Tax Preparation', 'Investment Analysis', 'Cash Flow Management', 'Budget Planning', 'Audit Trail', 'Compliance Reports'],
      price: '$59/month',
      originalPrice: '$99/month',
      popular: false,
      category: 'Financial Management',
      freeTrial: '14 days',
      setupTime: '20 minutes',
      integrations: ['QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Bank APIs', 'Tax Software'],
      useCases: ['Financial Planning', 'Tax Preparation', 'Investment Analysis', 'Expense Management', 'Compliance']
    },
    {
      id: 'zion-performance-monitor',
      title: 'Zion Performance Monitor',
      description: 'Employee performance tracking and analytics with goal setting, progress monitoring, and team collaboration tools.',
      icon: Users,
      features: ['Goal Setting', 'Performance Analytics', 'Team Collaboration', 'Progress Tracking', '360 Reviews', 'Skill Assessment', 'Training Plans', 'Recognition System'],
      price: '$19/month',
      originalPrice: '$29/month',
      popular: false,
      category: 'HR & Performance',
      freeTrial: '30 days',
      setupTime: '10 minutes',
      integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Zoom', 'Calendly'],
      useCases: ['Performance Reviews', 'Goal Tracking', 'Team Management', 'Skill Development', 'Employee Engagement']
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-driven campaign optimization, personalization, and multi-channel orchestration.',
      icon: Zap,
      features: ['Email Campaigns', 'Social Media Automation', 'Lead Nurturing', 'A/B Testing', 'Personalization Engine', 'Behavioral Triggers', 'Attribution Tracking', 'ROI Analytics'],
      price: '$79/month',
      originalPrice: '$129/month',
      popular: false,
      category: 'Marketing',
      freeTrial: '14 days',
      setupTime: '25 minutes',
      integrations: ['Mailchimp', 'HubSpot', 'Salesforce', 'Facebook', 'Google Ads', 'LinkedIn'],
      useCases: ['Email Marketing', 'Social Media Management', 'Lead Generation', 'Customer Retention', 'Campaign Optimization']
    },
    {
      id: 'zion-ai-email-assistant',
      title: 'Zion AI Email Assistant',
      description: 'AI-powered email management with smart categorization, automated responses, and intelligent scheduling for improved productivity.',
      icon: Mail,
      features: ['Smart Categorization', 'Auto Responses', 'Email Scheduling', 'Priority Detection', 'Template Library', 'Sentiment Analysis', 'Follow-up Reminders', 'Spam Filtering'],
      price: '$24/month',
      originalPrice: '$39/month',
      popular: true,
      category: 'Productivity',
      freeTrial: '21 days',
      setupTime: '5 minutes',
      integrations: ['Gmail', 'Outlook', 'Apple Mail', 'Thunderbird', 'Slack'],
      useCases: ['Email Management', 'Customer Support', 'Sales Follow-ups', 'Team Communication', 'Inbox Organization']
    },
    {
      id: 'zion-ai-customer-sentiment-tracker',
      title: 'Zion AI Customer Sentiment Tracker',
      description: 'Real-time customer sentiment analysis across all channels with automated alerts and actionable insights for customer success teams.',
      icon: Heart,
      features: ['Real-time Analysis', 'Multi-channel Monitoring', 'Sentiment Scoring', 'Alert System', 'Trend Analysis', 'Competitor Tracking', 'Custom Dashboards', 'API Access'],
      price: '$34/month',
      originalPrice: '$54/month',
      popular: false,
      category: 'Customer Analytics',
      freeTrial: '14 days',
      setupTime: '15 minutes',
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Twitter', 'Facebook', 'Google Reviews'],
      useCases: ['Customer Feedback', 'Brand Monitoring', 'Competitor Analysis', 'Crisis Management', 'Product Development']
    },
    {
      id: 'zion-ai-financial-crime-detection',
      title: 'Zion AI Financial Crime Detection',
      description: 'Advanced fraud detection and financial crime prevention using machine learning algorithms and real-time transaction monitoring.',
      icon: Shield,
      features: ['Fraud Detection', 'Transaction Monitoring', 'Risk Scoring', 'Compliance Reporting', 'Real-time Alerts', 'Pattern Recognition', 'Regulatory Updates', 'Audit Trails'],
      price: '$149/month',
      originalPrice: '$249/month',
      popular: false,
      category: 'Security & Compliance',
      freeTrial: '30 days',
      setupTime: '45 minutes',
      integrations: ['Banking APIs', 'Payment Processors', 'Compliance Tools', 'Reporting Systems'],
      useCases: ['Fraud Prevention', 'Compliance', 'Risk Management', 'Transaction Monitoring', 'Regulatory Reporting']
    }
  ];

  const categories = ['All', 'Content Creation', 'CRM & Sales', 'Inventory Management', 'Financial Management', 'HR & Performance', 'Marketing', 'Productivity', 'Customer Analytics', 'Security & Compliance'];

  const benefits = [
    {
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process.',
      icon: Zap,
    },
    {
      title: 'Affordable Pricing',
      description: 'Access powerful tools at fraction of enterprise costs.',
      icon: Award,
    },
    {
      title: 'No Long-term Contracts',
      description: 'Cancel anytime with our flexible monthly billing.',
      icon: Heart,
    },
    {
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated support team.',
      icon: Globe,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | Powerful Business Tools</title>
        <meta name="description" content="Discover our suite of micro SAAS applications designed to streamline your business operations with affordable, powerful tools." />
        <meta name="keywords" content="micro SAAS, business tools, productivity software, CRM, inventory management, financial analytics, marketing automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SAAS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful business tools designed for small to medium businesses. Get enterprise-level functionality at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Micro SAAS Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className={`cyber-card hover:scale-105 transition-all duration-300 ${
                      product.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-cyan-500/20">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 holographic-text">{product.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{product.description}</p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 text-sm font-semibold">{product.freeTrial} Free Trial</div>
                        <div className="text-gray-400 text-xs">Setup in {product.setupTime}</div>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {product.features.length > 4 && (
                          <li className="text-cyan-400 text-sm font-medium">
                            +{product.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Integrations */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Integrations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.integrations.slice(0, 3).map((integration, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-cyan-500/20">
                            {integration}
                          </span>
                        ))}
                        {product.integrations.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded border border-cyan-500/20">
                            +{product.integrations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Link
                      to={`/${product.id}`}
                      className="w-full cyber-button text-center py-3 px-6 text-sm font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of our micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
