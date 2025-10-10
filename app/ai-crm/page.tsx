'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Brain,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
  Settings,
  Database,
  Lock,
  RefreshCw
} from 'lucide-react';

const AICrmPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze customer behavior, engagement patterns, and conversion probability.',
      benefits: ['95% accuracy in lead qualification', '40% increase in conversion rates', 'Automated lead nurturing']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Get insights into customer lifetime value, churn prediction, and sales forecasting with advanced AI models trained on your data.',
      benefits: ['Predict customer churn 30 days in advance', 'Identify upsell opportunities', 'Forecast revenue with 90% accuracy']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows',
      description: 'Create intelligent workflows that automatically trigger actions based on customer behavior, stage progression, and custom criteria.',
      benefits: ['Reduce manual tasks by 80%', 'Consistent follow-up processes', 'Personalized customer journeys']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Smart Email Campaigns',
      description: 'AI-driven email marketing with personalized content, optimal send times, and automated A/B testing for maximum engagement.',
      benefits: ['3x higher email open rates', 'Personalized content generation', 'Automated A/B testing']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Intelligence',
      description: 'Transcribe, analyze, and extract insights from sales calls using natural language processing and sentiment analysis.',
      benefits: ['Real-time call transcription', 'Sentiment analysis', 'Action item extraction']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Advanced Segmentation',
      description: 'Create dynamic customer segments based on behavior, demographics, and AI-identified patterns for targeted campaigns.',
      benefits: ['Dynamic customer segments', 'Behavioral targeting', 'Personalized messaging']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'AI lead scoring',
        'Basic analytics dashboard',
        'Email automation (5 campaigns)',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'AI lead scoring + predictive analytics',
        'Advanced analytics & reporting',
        'Unlimited email campaigns',
        'Call intelligence',
        'Advanced segmentation',
        'API access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited contacts',
        'All AI features included',
        'Custom AI model training',
        'Advanced integrations',
        'Dedicated account manager',
        'Custom workflows',
        'White-label options',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Microsoft Dynamics', icon: '🔗' },
    { name: 'Pipedrive', icon: '🔗' },
    { name: 'Zoho CRM', icon: '🔗' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '💬' },
    { name: 'Google Workspace', icon: '📊' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Stripe', icon: '💳' },
    { name: 'PayPal', icon: '💳' }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered CRM - Zion Tech Group | Intelligent Customer Relationship Management</title>
        <meta name="description" content="Transform your sales process with our AI-powered CRM. Features include lead scoring, predictive analytics, automated workflows, and intelligent insights for maximum sales efficiency." />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI-Powered CRM
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with intelligent customer relationship management. 
              Our AI-powered CRM automatically scores leads, predicts customer behavior, and optimizes your sales pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Lead Scoring Accuracy</div>
              </div>
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Increase in Conversions</div>
              </div>
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300">Reduction in Manual Tasks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered CRM goes beyond traditional customer management with intelligent automation and predictive insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-orange-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-orange-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600' 
                      : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300">
                Connect with your favorite tools and platforms for a unified workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-2">{integration.icon}</div>
                  <div className="text-white font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to boost their sales performance. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICrmPage;