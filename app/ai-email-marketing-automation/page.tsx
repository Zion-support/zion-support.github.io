'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EnvelopeIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  CogIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EyeIcon,
  HeartIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Welcome Series',
      status: 'Active',
      subscribers: 1250,
      openRate: 68.5,
      clickRate: 12.3,
      revenue: 2450,
      type: 'Automated'
    },
    {
      id: 2,
      name: 'Product Launch',
      status: 'Scheduled',
      subscribers: 890,
      openRate: 0,
      clickRate: 0,
      revenue: 0,
      type: 'Broadcast'
    },
    {
      id: 3,
      name: 'Cart Abandonment',
      status: 'Active',
      subscribers: 2100,
      openRate: 45.2,
      clickRate: 8.7,
      revenue: 1890,
      type: 'Automated'
    }
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    type: 'Broadcast',
    subject: '',
    content: ''
  });

  const [selectedTemplate, setSelectedTemplate] = useState('welcome');
  const [isCreating, setIsCreating] = useState(false);

  const templates = [
    {
      id: 'welcome',
      name: 'Welcome Series',
      description: 'Onboard new subscribers with a 5-email sequence',
      openRate: 72.3,
      clickRate: 15.8,
      icon: HeartIcon
    },
    {
      id: 'newsletter',
      name: 'Newsletter',
      description: 'Regular updates and content for your audience',
      openRate: 45.2,
      clickRate: 8.9,
      icon: EnvelopeIcon
    },
    {
      id: 'promotional',
      name: 'Promotional',
      description: 'Drive sales with targeted promotional campaigns',
      openRate: 38.7,
      clickRate: 12.4,
      icon: StarIcon
    },
    {
      id: 'abandoned-cart',
      name: 'Abandoned Cart',
      description: 'Recover lost sales with automated follow-ups',
      openRate: 52.1,
      clickRate: 18.6,
      icon: BoltIcon
    }
  ];

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Content',
      description: 'Generate compelling email content using advanced AI that adapts to your brand voice.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      title: 'Perfect Timing',
      description: 'AI determines the optimal send time for each subscriber to maximize engagement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics and AI-powered insights.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: CogIcon,
      title: 'Automation Workflows',
      description: 'Create complex email sequences that trigger based on user actions and behavior.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with AI-powered deliverability optimization.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '2.5M+', label: 'Emails Sent' },
    { number: '68%', label: 'Average Open Rate' },
    { number: '15%', label: 'Average Click Rate' },
    { number: '45%', label: 'Revenue Increase' }
  ];

  const createCampaign = () => {
    if (newCampaign.name && newCampaign.subject) {
      setIsCreating(true);
      setTimeout(() => {
        const campaign = {
          id: campaigns.length + 1,
          name: newCampaign.name,
          status: 'Draft',
          subscribers: 0,
          openRate: 0,
          clickRate: 0,
          revenue: 0,
          type: newCampaign.type
        };
        setCampaigns([...campaigns, campaign]);
        setNewCampaign({ name: '', type: 'Broadcast', subject: '', content: '' });
        setIsCreating(false);
      }, 2000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-400 bg-green-400/20';
      case 'Scheduled': return 'text-yellow-400 bg-yellow-400/20';
      case 'Draft': return 'text-gray-400 bg-gray-400/20';
      case 'Paused': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Automated': return 'text-blue-400 bg-blue-400/20';
      case 'Broadcast': return 'text-purple-400 bg-purple-400/20';
      case 'Drip': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <>
      <SEOHead 
        title="AI Email Marketing Automation - Zion Tech Group"
        description="Revolutionary AI-powered email marketing automation platform with smart segmentation, content generation, and perfect timing. Boost engagement and drive revenue with intelligent email campaigns."
        keywords="AI email marketing, email automation, marketing automation, email campaigns, smart segmentation, email analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI Email Marketing
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your email marketing with AI-powered automation. Create personalized campaigns, 
                optimize send times, and boost engagement with intelligent content generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Campaign Builder */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Campaign Builder
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Create powerful email campaigns with our AI-powered builder
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              {/* Template Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Choose a Template</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        selectedTemplate === template.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-slate-600 hover:border-purple-400 hover:bg-slate-700/30'
                      }`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                          <template.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-white">{template.name}</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{template.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Open: {template.openRate}%</span>
                        <span>Click: {template.clickRate}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Creation Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Campaign Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Name</label>
                      <input
                        type="text"
                        value={newCampaign.name}
                        onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                        placeholder="Enter campaign name"
                        className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Type</label>
                      <select
                        value={newCampaign.type}
                        onChange={(e) => setNewCampaign({...newCampaign, type: e.target.value})}
                        className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                      >
                        <option value="Broadcast">Broadcast</option>
                        <option value="Automated">Automated</option>
                        <option value="Drip">Drip Campaign</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject Line</label>
                      <input
                        type="text"
                        value={newCampaign.subject}
                        onChange={(e) => setNewCampaign({...newCampaign, subject: e.target.value})}
                        placeholder="Enter subject line"
                        className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Content</label>
                      <textarea
                        value={newCampaign.content}
                        onChange={(e) => setNewCampaign({...newCampaign, content: e.target.value})}
                        placeholder="Enter email content or let AI generate it for you"
                        rows={6}
                        className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={createCampaign}
                      disabled={isCreating}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isCreating ? 'Creating Campaign...' : 'Create Campaign'}
                    </button>
                  </div>
                </div>

                {/* Campaign Preview */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Preview</h3>
                  <div className="bg-white rounded-lg p-6 text-gray-900">
                    <div className="border-b pb-4 mb-4">
                      <div className="text-sm text-gray-500 mb-1">Subject:</div>
                      <div className="font-semibold">{newCampaign.subject || 'Your email subject here'}</div>
                    </div>
                    <div className="text-sm">
                      {newCampaign.content || 'Your email content will appear here. Use AI to generate compelling content that drives engagement and conversions.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaigns List */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Campaigns
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Manage and track all your email marketing campaigns
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Campaign</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Type</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Status</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Subscribers</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Open Rate</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Click Rate</th>
                      <th className="text-left py-4 px-2 font-semibold text-gray-300">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                        <td className="py-4 px-2">
                          <div className="font-medium text-white">{campaign.name}</div>
                        </td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(campaign.type)}`}>
                            {campaign.type}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-gray-300">{campaign.subscribers.toLocaleString()}</td>
                        <td className="py-4 px-2 text-gray-300">{campaign.openRate}%</td>
                        <td className="py-4 px-2 text-gray-300">{campaign.clickRate}%</td>
                        <td className="py-4 px-2 text-green-400 font-semibold">${campaign.revenue.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to create successful email marketing campaigns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your email marketing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$29<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1,000 subscribers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email templates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$99<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10,000 subscribers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    AI content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    A/B testing
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">$299<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited subscribers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI email marketing to boost engagement and drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailMarketingAutomationPage;