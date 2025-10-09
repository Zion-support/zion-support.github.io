import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Content Generator',
      description: 'Create engaging content for blogs, social media, and marketing campaigns with AI-powered writing assistance.',
      icon: Brain,
      features: ['Blog posts', 'Social media content', 'Email campaigns', 'Ad copy'],
      price: '$99/month'
    },
    {
      title: 'SEO Optimizer Pro',
      description: 'Optimize your website and content for search engines with intelligent keyword research and content suggestions.',
      icon: Target,
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis'],
      price: '$149/month'
    },
    {
      title: 'Social Media Manager',
      description: 'Schedule, publish, and analyze social media content across all major platforms with AI-powered insights.',
      icon: MessageSquare,
      features: ['Multi-platform posting', 'Content scheduling', 'Analytics dashboard', 'Engagement tracking'],
      price: '$199/month'
    },
    {
      title: 'Email Marketing Suite',
      description: 'Design, send, and track email campaigns with advanced automation and personalization features.',
      icon: Mail,
      features: ['Drag-and-drop editor', 'Automation workflows', 'A/B testing', 'Advanced analytics'],
      price: '$79/month'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive marketing analytics with real-time data visualization and performance insights.',
      icon: BarChart,
      features: ['Real-time data', 'Custom reports', 'ROI tracking', 'Performance insights'],
      price: '$129/month'
    },
    {
      title: 'Lead Generation Tool',
      description: 'Identify and capture high-quality leads with AI-powered prospecting and contact management.',
      icon: Users,
      features: ['Lead scoring', 'Contact management', 'Email sequences', 'CRM integration'],
      price: '$179/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Marketing Tools' },
    { number: '95%', label: 'Time Savings' },
    { number: '300%', label: 'ROI Increase' },
    { number: '24/7', label: 'Automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Marketing Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your marketing with AI-powered tools for content creation, SEO optimization, social media management, and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <tool.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <ul className="space-y-2 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                <a
                  href="/contact"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of marketers already using our AI-powered tools to increase efficiency and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingToolsPage;