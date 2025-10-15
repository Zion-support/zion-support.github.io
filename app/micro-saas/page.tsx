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
  Heart
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 'zion-content-studio',
      title: 'Zion AI Content Studio',
      description: 'Advanced AI-powered content creation platform for blogs, social media, videos, and marketing materials with real-time optimization.',
      icon: Package,
      features: ['AI Writing Assistant', 'Video Generation', 'Social Media Automation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar'],
      price: '$79/month',
      popular: true,
      category: 'Content Creation',
      marketPrice: '$120-200/month',
      savings: '35% savings',
      description: 'Create engaging content 10x faster with AI assistance. Generate blog posts, social media content, videos, and marketing materials with advanced AI technology.',
      benefits: ['Save 20+ hours/week', 'Increase engagement by 300%', 'SEO-optimized content', 'Multi-language support']
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Enterprise',
      description: 'Next-generation CRM with AI-powered lead scoring, automated follow-ups, and advanced analytics for maximum sales efficiency.',
      icon: Users,
      features: ['AI Lead Scoring', 'Automated Workflows', 'Advanced Analytics', 'Multi-channel Communication', 'Sales Forecasting', 'Integration Hub'],
      price: '$199/month',
      popular: true,
      category: 'CRM & Sales',
      marketPrice: '$300-500/month',
      savings: '33% savings',
      description: 'Transform your sales process with AI-powered insights. Automate follow-ups, score leads intelligently, and close more deals.',
      benefits: ['Increase sales by 40%', 'Reduce manual work by 60%', 'Better lead qualification', 'Real-time insights']
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion AI Inventory Smart',
      description: 'Intelligent inventory management with AI demand forecasting, automated reordering, and multi-location optimization.',
      icon: BarChart3,
      features: ['AI Demand Forecasting', 'Automated Reordering', 'Multi-location Tracking', 'Real-time Analytics', 'Supplier Management', 'Cost Optimization'],
      price: '$89/month',
      popular: false,
      category: 'Inventory Management',
      marketPrice: '$150-250/month',
      savings: '41% savings',
      description: 'Optimize your inventory with AI-powered predictions. Reduce stockouts by 80% and cut carrying costs by 30%.',
      benefits: ['Reduce stockouts by 80%', 'Cut carrying costs by 30%', 'Automated reordering', 'Multi-location support']
    },
    {
      id: 'ai-financial-analytics-pro',
      title: 'Zion AI Financial Analytics Pro',
      description: 'Comprehensive financial analytics with AI forecasting, expense tracking, automated reporting, and tax preparation.',
      icon: BarChart3,
      features: ['AI Financial Forecasting', 'Expense Tracking', 'Automated Reports', 'Tax Preparation', 'Investment Analysis', 'Cash Flow Management'],
      price: '$129/month',
      popular: true,
      category: 'Financial Management',
      marketPrice: '$200-350/month',
      savings: '36% savings',
      description: 'Get complete financial visibility with AI-powered insights. Automate reporting, track expenses, and make data-driven decisions.',
      benefits: ['Save 15+ hours/month', 'Improve accuracy by 95%', 'Automated tax prep', 'Real-time financial insights']
    },
    {
      id: 'zion-performance-monitor',
      title: 'Zion AI Performance Monitor',
      description: 'Advanced employee performance tracking with AI insights, goal setting, and predictive analytics for team optimization.',
      icon: Users,
      features: ['AI Performance Insights', 'Goal Setting & Tracking', 'Team Analytics', 'Predictive Modeling', 'Skill Assessment', 'Career Development'],
      price: '$49/month',
      popular: false,
      category: 'HR & Performance',
      marketPrice: '$100-180/month',
      savings: '51% savings',
      description: 'Optimize team performance with AI-powered insights. Set goals, track progress, and identify improvement opportunities.',
      benefits: ['Increase productivity by 25%', 'Reduce turnover by 40%', 'Better goal alignment', 'Data-driven insights']
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI content generation, multi-channel campaigns, and ROI optimization.',
      icon: Zap,
      features: ['AI Content Generation', 'Multi-channel Campaigns', 'ROI Optimization', 'A/B Testing', 'Lead Nurturing', 'Customer Segmentation'],
      price: '$149/month',
      popular: true,
      category: 'Marketing',
      marketPrice: '$250-400/month',
      savings: '40% savings',
      description: 'Automate your entire marketing funnel with AI. Generate content, optimize campaigns, and maximize ROI across all channels.',
      benefits: ['Increase ROI by 200%', 'Reduce campaign time by 70%', 'Better targeting', 'Automated optimization']
    },
    {
      id: 'zion-ai-project-manager',
      title: 'Zion AI Project Manager Pro',
      description: 'Intelligent project management with AI task prioritization, resource optimization, and predictive scheduling.',
      icon: Calendar,
      features: ['AI Task Prioritization', 'Resource Optimization', 'Predictive Scheduling', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking'],
      price: '$99/month',
      popular: false,
      category: 'Project Management',
      marketPrice: '$150-300/month',
      savings: '34% savings',
      description: 'Manage projects smarter with AI. Automatically prioritize tasks, optimize resources, and predict project outcomes.',
      benefits: ['Complete projects 30% faster', 'Reduce project risks by 50%', 'Better resource allocation', 'Predictive insights']
    },
    {
      id: 'zion-ai-customer-support',
      title: 'Zion AI Customer Support Suite',
      description: 'AI-powered customer support with chatbots, ticket automation, sentiment analysis, and 24/7 availability.',
      icon: Heart,
      features: ['AI Chatbots', 'Ticket Automation', 'Sentiment Analysis', 'Knowledge Base', 'Multi-language Support', 'Performance Analytics'],
      price: '$119/month',
      popular: false,
      category: 'Customer Support',
      marketPrice: '$200-350/month',
      savings: '40% savings',
      description: 'Provide exceptional customer support with AI. Automate responses, analyze sentiment, and resolve issues faster.',
      benefits: ['Reduce response time by 80%', 'Increase satisfaction by 45%', '24/7 availability', 'Multilingual support']
    },
    {
      id: 'zion-ai-data-analytics',
      title: 'Zion AI Data Analytics Pro',
      description: 'Advanced data analytics platform with AI insights, automated reporting, and predictive modeling for business intelligence.',
      icon: BarChart3,
      features: ['AI Data Insights', 'Automated Reporting', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization', 'API Integration'],
      price: '$199/month',
      popular: true,
      category: 'Data Analytics',
      marketPrice: '$400-600/month',
      savings: '50% savings',
      description: 'Transform your data into actionable insights with AI. Automate reporting, predict trends, and make data-driven decisions.',
      benefits: ['Save 25+ hours/week', 'Improve accuracy by 90%', 'Predictive insights', 'Real-time dashboards']
    }
  ];

  const categories = ['All', 'Content Creation', 'CRM & Sales', 'Inventory Management', 'Financial Management', 'HR & Performance', 'Marketing', 'Project Management', 'Customer Support', 'Data Analytics'];

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
                    className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 ${
                      product.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Free Trial</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/${product.id}`}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Try Free</span>
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
