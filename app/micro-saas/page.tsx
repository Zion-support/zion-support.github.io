import React from 'react';
import { CheckCircle, Zap, Users, TrendingUp, Star, ArrowRight } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasApps = [
    {
      name: 'AI Writing Assistant',
      price: '$29/month',
      description: 'AI-powered writing tool for content creation, editing, and optimization',
      features: ['Content generation', 'Grammar checking', 'SEO optimization', 'Tone adjustment', 'Multi-language support'],
      category: 'Productivity',
      popular: true
    },
    {
      name: 'Smart Analytics Dashboard',
      price: '$49/month',
      description: 'Comprehensive business analytics with AI-powered insights',
      features: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Predictive insights', 'API integration'],
      category: 'Analytics',
      popular: false
    },
    {
      name: 'AI Scheduler Pro',
      price: '$19/month',
      description: 'Intelligent scheduling and calendar management',
      features: ['Smart scheduling', 'Meeting optimization', 'Time zone handling', 'Calendar sync', 'Reminder automation'],
      category: 'Productivity',
      popular: false
    },
    {
      name: 'Expense Tracker AI',
      price: '$15/month',
      description: 'AI-powered expense tracking and financial management',
      features: ['Receipt scanning', 'Category auto-detection', 'Budget tracking', 'Tax preparation', 'Financial insights'],
      category: 'Finance',
      popular: false
    },
    {
      name: 'Task Manager Pro',
      price: '$25/month',
      description: 'Advanced task management with AI prioritization',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'Deadline management', 'Productivity insights'],
      category: 'Productivity',
      popular: true
    },
    {
      name: 'CRM Lite',
      price: '$39/month',
      description: 'Lightweight CRM with AI-powered lead scoring',
      features: ['Contact management', 'Lead scoring', 'Sales pipeline', 'Email integration', 'Performance analytics'],
      category: 'Sales',
      popular: false
    },
    {
      name: 'Email Optimizer',
      price: '$35/month',
      description: 'AI-powered email marketing optimization',
      features: ['Subject line optimization', 'Send time optimization', 'A/B testing', 'Performance tracking', 'Template library'],
      category: 'Marketing',
      popular: false
    },
    {
      name: 'Social Media Manager',
      price: '$45/month',
      description: 'Automated social media management and analytics',
      features: ['Content scheduling', 'Hashtag optimization', 'Engagement tracking', 'Performance analytics', 'Multi-platform support'],
      category: 'Marketing',
      popular: false
    },
    {
      name: 'AI Design Studio',
      price: '$59/month',
      description: 'AI-powered design tools for graphics and branding',
      features: ['Logo generation', 'Template creation', 'Color palette suggestions', 'Brand guidelines', 'Export options'],
      category: 'Design',
      popular: false
    },
    {
      name: 'Landing Page Builder',
      price: '$39/month',
      description: 'AI-assisted landing page creation and optimization',
      features: ['Drag-and-drop builder', 'AI content suggestions', 'A/B testing', 'Conversion optimization', 'Analytics integration'],
      category: 'Marketing',
      popular: false
    },
    {
      name: 'SEO Optimizer',
      price: '$49/month',
      description: 'Comprehensive SEO analysis and optimization',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking', 'Competitor analysis'],
      category: 'SEO',
      popular: false
    },
    {
      name: 'Ad Campaign Manager',
      price: '$55/month',
      description: 'AI-powered ad campaign management across platforms',
      features: ['Multi-platform ads', 'Bid optimization', 'Audience targeting', 'Creative testing', 'Performance monitoring'],
      category: 'Advertising',
      popular: false
    }
  ];

  const categories = [
    { name: 'All', count: microSaasApps.length },
    { name: 'Productivity', count: microSaasApps.filter(app => app.category === 'Productivity').length },
    { name: 'Analytics', count: microSaasApps.filter(app => app.category === 'Analytics').length },
    { name: 'Finance', count: microSaasApps.filter(app => app.category === 'Finance').length },
    { name: 'Sales', count: microSaasApps.filter(app => app.category === 'Sales').length },
    { name: 'Marketing', count: microSaasApps.filter(app => app.category === 'Marketing').length },
    { name: 'Design', count: microSaasApps.filter(app => app.category === 'Design').length },
    { name: 'SEO', count: microSaasApps.filter(app => app.category === 'SEO').length },
    { name: 'Advertising', count: microSaasApps.filter(app => app.category === 'Advertising').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our collection of AI-powered micro applications designed to solve specific business challenges. 
            Each tool is purpose-built, easy to use, and delivers immediate value.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro Apps</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$15</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">5min</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSaasApps.map((app, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                app.popular ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              {app.popular && (
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                  <span className="text-2xl font-bold text-green-600">{app.price}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-3">
                  {app.category}
                </div>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {app.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                Try Free for 14 Days
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our intuitive setup process and pre-configured templates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Built-in collaboration features that make it easy for teams to work together and share insights.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Our tools have helped thousands of businesses improve efficiency and drive growth.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-purple-100 mb-6">
            Start with any micro app and see immediate results. No long-term commitments, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Browse All Apps
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/demo"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;