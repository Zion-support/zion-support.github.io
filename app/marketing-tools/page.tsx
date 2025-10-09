import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Cpu, Target, BarChart, Settings, Cog, Brain, Users, Globe } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const marketingTools = [
    {
      title: 'AI Content Generator',
      description: 'Intelligent content creation tool that generates high-quality marketing content automatically.',
      icon: '✍️',
      price: 'Starting at $199/month',
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'Ad copy', 'SEO optimization'],
      benefits: ['Increase content output by 300%', 'Improve engagement by 40%', 'Reduce content costs'],
      marketPrice: '$500-1,500/month',
      category: 'Content',
      technologies: ['OpenAI GPT', 'NLP', 'SEO Tools', 'Social Media APIs', 'Analytics']
    },
    {
      title: 'Social Media Manager',
      description: 'Comprehensive social media management platform with AI-powered scheduling and analytics.',
      icon: '📱',
      price: 'Starting at $299/month',
      features: ['Multi-platform posting', 'Content scheduling', 'Engagement tracking', 'Analytics', 'AI optimization'],
      benefits: ['Save 20 hours/week', 'Increase engagement by 60%', 'Improve brand visibility'],
      marketPrice: '$600-2,000/month',
      category: 'Social Media',
      technologies: ['Social APIs', 'AI/ML', 'Analytics', 'Scheduling', 'Content Management']
    },
    {
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation.',
      icon: '📧',
      price: 'Starting at $149/month',
      features: ['Email automation', 'Personalization', 'A/B testing', 'Analytics', 'List management'],
      benefits: ['Increase open rates by 45%', 'Improve click-through rates', 'Automate campaigns'],
      marketPrice: '$300-1,000/month',
      category: 'Email Marketing',
      technologies: ['Email APIs', 'AI Personalization', 'Analytics', 'Automation', 'CRM Integration']
    },
    {
      title: 'SEO Optimization Suite',
      description: 'Comprehensive SEO tools with AI-powered keyword research and optimization recommendations.',
      icon: '🔍',
      price: 'Starting at $199/month',
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking', 'Competitor analysis'],
      benefits: ['Improve search rankings', 'Increase organic traffic', 'Optimize content performance'],
      marketPrice: '$400-1,200/month',
      category: 'SEO',
      technologies: ['SEO APIs', 'Keyword Tools', 'Analytics', 'AI Analysis', 'Rank Tracking']
    },
    {
      title: 'PPC Campaign Manager',
      description: 'AI-powered pay-per-click campaign management with automated optimization and bidding.',
      icon: '💰',
      price: 'Starting at $399/month',
      features: ['Campaign automation', 'Bid optimization', 'Ad testing', 'Performance tracking', 'Budget management'],
      benefits: ['Reduce cost per acquisition', 'Improve ROI by 50%', 'Automate campaign management'],
      marketPrice: '$800-2,500/month',
      category: 'PPC',
      technologies: ['Google Ads API', 'Facebook Ads API', 'AI Optimization', 'Analytics', 'Automation']
    },
    {
      title: 'Marketing Analytics Dashboard',
      description: 'Comprehensive marketing analytics with AI-powered insights and reporting.',
      icon: '📊',
      price: 'Starting at $249/month',
      features: ['Multi-channel analytics', 'ROI tracking', 'Customer journey', 'Predictive analytics', 'Custom reports'],
      benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Optimize marketing spend'],
      marketPrice: '$500-1,800/month',
      category: 'Analytics',
      technologies: ['Analytics APIs', 'AI/ML', 'Data Visualization', 'Predictive Modeling', 'Custom Dashboards']
    },
    {
      title: 'Lead Generation System',
      description: 'AI-powered lead generation and qualification system with automated nurturing.',
      icon: '🎯',
      price: 'Starting at $299/month',
      features: ['Lead scoring', 'Automated nurturing', 'CRM integration', 'Email sequences', 'Analytics'],
      benefits: ['Increase lead quality by 70%', 'Improve conversion rates', 'Automate lead management'],
      marketPrice: '$600-2,000/month',
      category: 'Lead Generation',
      technologies: ['AI/ML', 'CRM APIs', 'Email Automation', 'Lead Scoring', 'Analytics']
    },
    {
      title: 'Marketing Automation Platform',
      description: 'Complete marketing automation suite with AI-powered workflows and personalization.',
      icon: '⚙️',
      price: 'Starting at $399/month',
      features: ['Workflow automation', 'Lead nurturing', 'Email sequences', 'Behavioral triggers', 'Analytics'],
      benefits: ['Automate marketing processes', 'Improve lead conversion', 'Personalize customer experience'],
      marketPrice: '$800-3,000/month',
      category: 'Automation',
      technologies: ['Workflow Engines', 'AI/ML', 'CRM Integration', 'Email APIs', 'Analytics']
    },
    {
      title: 'Video Marketing Tools',
      description: 'AI-powered video creation and optimization tools for marketing campaigns.',
      icon: '🎬',
      price: 'Starting at $199/month',
      features: ['Video creation', 'Auto-editing', 'Thumbnail generation', 'Optimization', 'Analytics'],
      benefits: ['Create videos 10x faster', 'Improve engagement', 'Optimize for platforms'],
      marketPrice: '$400-1,500/month',
      category: 'Video Marketing',
      technologies: ['AI Video', 'Video APIs', 'Analytics', 'Platform Optimization', 'Content Management']
    },
    {
      title: 'Influencer Marketing Platform',
      description: 'AI-powered influencer discovery and campaign management platform.',
      icon: '👥',
      price: 'Starting at $299/month',
      features: ['Influencer discovery', 'Campaign management', 'Performance tracking', 'Payment processing', 'Analytics'],
      benefits: ['Find perfect influencers', 'Manage campaigns efficiently', 'Track performance'],
      marketPrice: '$600-2,500/month',
      category: 'Influencer Marketing',
      technologies: ['Social APIs', 'AI Matching', 'Analytics', 'Payment Processing', 'Campaign Management']
    },
    {
      title: 'Marketing Chatbot',
      description: 'AI-powered marketing chatbot for lead qualification and customer engagement.',
      icon: '🤖',
      price: 'Starting at $149/month',
      features: ['Lead qualification', 'Customer support', 'Appointment booking', 'FAQ automation', 'Analytics'],
      benefits: ['Qualify leads 24/7', 'Improve response time', 'Reduce support costs'],
      marketPrice: '$300-1,200/month',
      category: 'Chatbot',
      technologies: ['NLP', 'AI/ML', 'Chat APIs', 'CRM Integration', 'Analytics']
    },
    {
      title: 'Marketing Attribution Platform',
      description: 'Advanced marketing attribution and ROI tracking with AI-powered insights.',
      icon: '📈',
      price: 'Starting at $399/month',
      features: ['Multi-touch attribution', 'ROI tracking', 'Customer journey', 'Predictive modeling', 'Reporting'],
      benefits: ['Understand customer journey', 'Optimize marketing mix', 'Improve ROI'],
      marketPrice: '$800-3,000/month',
      category: 'Attribution',
      technologies: ['Attribution Models', 'AI/ML', 'Data Integration', 'Analytics', 'Predictive Modeling']
    }
  ];

  const categories = [...new Set(marketingTools.map(tool => tool.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketing Tools
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              AI-powered marketing tools to accelerate growth and improve campaign performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Marketing Tools
              </Link>
              <Link 
                to="/ai-marketing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View AI Marketing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Marketing Tools?
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered marketing tools designed to accelerate growth and improve campaign performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Intelligent tools that learn and optimize your marketing campaigns automatically</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and focus on strategy and creative work</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven</h3>
              <p className="text-gray-600">Make informed decisions with comprehensive analytics and insights</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI Focused</h3>
              <p className="text-gray-600">Optimize campaigns for maximum return on investment and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      {categories.map(category => (
        <section key={category} className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category} Tools
              </h2>
              <p className="text-xl text-gray-600">
                Specialized {category.toLowerCase()} solutions for modern marketing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingTools
                .filter(tool => tool.category === category)
                .map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-blue-600">{tool.price}</span>
                        <span className="text-sm text-gray-500">Market: {tool.marketPrice}</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold">
                        Save up to 50% vs market rates
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Marketing Tools
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our marketing tools can help you reach more customers and grow your business faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingToolsPage;
