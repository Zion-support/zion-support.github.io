import React from 'react';
import Layout from '../components/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import { Share2, TrendingUp, Users, BarChart, CheckCircle, Phone, Mail, Calendar, MessageSquare, Image } from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Share2,
      title: 'Automated Posting',
      description: 'AI-powered content scheduling and posting across all social media platforms.',
      benefits: ['Multi-platform Posting', 'Optimal Timing', 'Content Scheduling', 'Cross-platform Sync']
    },
    {
      icon: TrendingUp,
      title: 'Engagement Optimization',
      description: 'Intelligent content optimization to maximize engagement and reach.',
      benefits: ['Content Analysis', 'Engagement Prediction', 'Hashtag Optimization', 'Audience Targeting']
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep analytics and insights about your audience behavior and preferences.',
      benefits: ['Audience Analysis', 'Behavior Tracking', 'Demographic Insights', 'Interest Mapping']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting for all your social media activities.',
      benefits: ['Performance Metrics', 'ROI Tracking', 'Competitor Analysis', 'Trend Monitoring']
    }
  ];

  const platforms = [
    'Facebook',
    'Instagram',
    'Twitter',
    'LinkedIn',
    'TikTok',
    'YouTube',
    'Pinterest',
    'Snapchat',
    'WhatsApp Business',
    'Telegram'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Social Media Manager - Zion Tech Group"
        description="Automate and optimize your social media presence with AI. Schedule posts, analyze engagement, and grow your audience with intelligent social media management."
        keywords={['AI social media manager', 'social media automation', 'content scheduling', 'social media analytics', 'engagement optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-social-media-manager"
      />
      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl text-pink-400 mb-8">
              Automate and optimize your social media presence with AI
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Our AI-powered social media management platform automates posting, optimizes engagement, 
              and provides deep insights to help you grow your audience and increase brand awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #ec4899, #be185d)'}}
              >
                <Mail className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI capabilities designed to revolutionize your social media management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <feature.icon className="w-10 h-10 text-pink-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one intelligent platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-gray-300 text-sm font-medium">{platform}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven social media management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #ec4899, #be185d)'}}
              >
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AISocialMediaManagerPage;