'use client';
import React from 'react';
import { CheckCircle, Star, Target, BarChart3, Mail, Share2 } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing campaigns',
      icon: Target,
      price: '$29/month',
      features: ['Unlimited content generation', '50+ templates', 'SEO optimization', 'Multi-language support']
    },
    {
      title: 'Email Marketing Automation',
      description: 'Automate email campaigns with AI-powered personalization',
      icon: Mail,
      price: '$39/month',
      features: ['Drag-and-drop editor', 'Behavioral triggers', 'A/B testing', 'Analytics dashboard']
    },
    {
      title: 'Social Media Manager',
      description: 'Schedule and manage posts across all social platforms',
      icon: Share2,
      price: '$35/month',
      features: ['Multi-platform posting', 'Content calendar', 'Engagement tracking', 'Hashtag optimization']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track and analyze marketing performance with AI insights',
      icon: BarChart3,
      price: '$49/month',
      features: ['Real-time analytics', 'Custom dashboards', 'ROI tracking', 'Predictive insights']
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Marketing Tools
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-powered marketing tools to grow your business
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Boost your marketing efforts with our suite of AI-powered tools designed to 
            increase engagement, generate leads, and drive conversions.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our Marketing Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <tool.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
                    <p className="text-gray-300 mb-4">{tool.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button py-3">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Boost Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our AI-powered marketing tools today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default MarketingToolsPage;