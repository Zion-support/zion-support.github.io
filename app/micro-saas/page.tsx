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
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      icon: Package,
      features: ['AI Writing Assistant', 'Content Templates', 'SEO Optimization', 'Multi-platform Publishing'],
      price: '$29/month',
      popular: true,
      category: 'Content Creation',
    },
    {
      id: 'zion-ai-crm-pro',
      title: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered insights and automation.',
      icon: Users,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Analytics', 'Integration Hub'],
      price: '$49/month',
      popular: false,
      category: 'CRM & Sales',
    },
    {
      id: 'zion-inventory-smart',
      title: 'Zion Inventory Smart',
      description: 'Smart inventory management with predictive analytics and automated reordering.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Auto Reordering', 'Multi-location', 'Real-time Tracking'],
      price: '$39/month',
      popular: false,
      category: 'Inventory Management',
    },
    {
      id: 'ai-financial-analytics-pro',
      title: 'AI Financial Analytics Pro',
      description: 'Advanced financial reporting and analysis with AI-powered insights and forecasting.',
      icon: BarChart3,
      features: ['Financial Forecasting', 'Expense Tracking', 'Tax Preparation', 'Investment Analysis'],
      price: '$59/month',
      popular: false,
      category: 'Financial Management',
    },
    {
      id: 'zion-performance-monitor',
      title: 'Zion Performance Monitor',
      description: 'Employee performance tracking and analytics with goal setting and progress monitoring.',
      icon: Users,
      features: ['Goal Setting', 'Performance Analytics', 'Team Collaboration', 'Progress Tracking'],
      price: '$19/month',
      popular: false,
      category: 'HR & Performance',
    },
    {
      id: 'zion-ai-marketing-automation',
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-driven campaign optimization.',
      icon: Zap,
      features: ['Email Campaigns', 'Social Media Automation', 'Lead Nurturing', 'A/B Testing'],
      price: '$79/month',
      popular: false,
      category: 'Marketing',
    },
  ];

  const categories = ['All', 'Content Creation', 'CRM & Sales', 'Inventory Management', 'Financial Management', 'HR & Performance', 'Marketing'];

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
