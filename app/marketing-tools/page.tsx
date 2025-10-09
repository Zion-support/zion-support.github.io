'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Megaphone, Target, BarChart, Mail, Camera, PenTool, ArrowRight, CheckCircle, Star } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Content Generator',
      description: 'Create high-quality marketing content with AI-powered writing, image generation, and video production.',
      features: ['Blog posts & articles', 'Social media content', 'Email campaigns', 'Video scripts'],
      price: '$99/month',
      icon: PenTool,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'Social Media Manager',
      description: 'Automate your social media presence with AI-powered scheduling, engagement, and analytics.',
      features: ['Auto scheduling', 'Engagement tracking', 'Hashtag optimization', 'Performance analytics'],
      price: '$79/month',
      icon: Megaphone,
      color: 'text-pink-400',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Email Marketing Suite',
      description: 'Advanced email marketing with AI personalization, automation, and detailed campaign analytics.',
      features: ['AI personalization', 'Automation workflows', 'A/B testing', 'Advanced analytics'],
      price: '$89/month',
      icon: Mail,
      color: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Ad Campaign Optimizer',
      description: 'Maximize your ad ROI with AI-powered optimization across Google, Facebook, and other platforms.',
      features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'ROI tracking'],
      price: '$149/month',
      icon: Target,
      color: 'text-orange-400',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive marketing analytics with real-time insights and predictive performance modeling.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'Data visualization'],
      price: '$119/month',
      icon: BarChart,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Visual Content Creator',
      description: 'AI-powered visual content creation including graphics, videos, and interactive media.',
      features: ['AI graphics', 'Video creation', 'Interactive content', 'Brand consistency'],
      price: '$129/month',
      icon: Camera,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI-Powered Marketing Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your marketing strategy with our comprehensive suite of AI-powered marketing tools. 
            From content creation to campaign optimization, we have everything you need to scale your marketing efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tools" className="cyber-button">
              Explore Tools
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Marketing Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${tool.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tool.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block">
                    Start Free Trial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Marketing Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Optimization</h3>
              <p className="text-gray-300">Leverage advanced AI to optimize your campaigns, content, and targeting for maximum ROI and engagement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-300">Get deep insights into your marketing performance with predictive analytics and real-time reporting.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Channel Management</h3>
              <p className="text-gray-300">Manage all your marketing channels from one platform with seamless integration and automation.</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <h3 className="text-xl font-bold text-white mb-3">Increase in ROI</h3>
              <p className="text-gray-300 text-sm">Average ROI improvement for our clients using AI-powered ad optimization.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <h3 className="text-xl font-bold text-white mb-3">Time Savings</h3>
              <p className="text-gray-300 text-sm">Time saved on content creation and campaign management with our AI tools.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">250%</div>
              <h3 className="text-xl font-bold text-white mb-3">Engagement Boost</h3>
              <p className="text-gray-300 text-sm">Average increase in social media engagement with AI-optimized content.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Flexible Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 marketing tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All marketing tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited everything
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantee
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of marketers who have already revolutionized their campaigns with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📞 Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketingToolsPage;