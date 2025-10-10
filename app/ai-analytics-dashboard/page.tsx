'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BarChart3, Zap, Shield, Users, Clock, Star, TrendingUp, Database, Smartphone, Globe, Target, Award } from 'lucide-react';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    'Real-time dashboards with 50+ chart types',
    'AI-powered predictive analytics with 95% accuracy',
    'Custom report builder with drag-and-drop interface',
    'Mobile app with offline sync capabilities',
    'API integration with 100+ popular tools',
    'Automated insights and anomaly detection',
    'White-label customization options',
    'Advanced data visualization tools',
    'Automated report scheduling',
    'Team collaboration features',
    'Data export in multiple formats',
    'Custom KPI tracking and alerts'
  ];

  const integrations = [
    'Google Analytics 4', 'Google Search Console', 'Facebook Ads', 'Instagram Insights',
    'Twitter Analytics', 'LinkedIn Analytics', 'YouTube Analytics', 'TikTok Analytics',
    'Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Stripe', 'PayPal', 'Shopify',
    'WooCommerce', 'Magento', 'BigCommerce', 'Amazon Seller Central', 'eBay Analytics',
    'Mailchimp', 'Constant Contact', 'ActiveCampaign', 'ConvertKit', 'AWeber',
    'Slack', 'Microsoft Teams', 'Discord', 'Telegram', 'WhatsApp Business',
    'Zendesk', 'Freshdesk', 'Intercom', 'LiveChat', 'Crisp',
    'AWS', 'Google Cloud', 'Microsoft Azure', 'Heroku', 'DigitalOcean',
    'WordPress', 'Squarespace', 'Wix', 'Webflow', 'Framer'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      users: 'Up to 5 users',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      users: 'Up to 25 users',
      features: [
        'Unlimited data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      users: 'Unlimited users',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'Unlimited data storage',
        '24/7 phone support',
        'Custom training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: TrendingUp, value: '95%', label: 'Accuracy Rate' },
    { icon: Clock, value: '2.3s', label: 'Load Time' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Analytics Dashboard - Real-time Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with our AI-powered analytics dashboard. Real-time dashboards, predictive analytics, and custom reporting for growing businesses." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, business reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <BarChart3 className="w-20 h-20 text-cyan-400 mx-auto mb-6 neon-glow" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 neon-text">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and automated reporting that helps you make 
              data-driven decisions and grow your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6 rounded-xl">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1 neon-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button w-full sm:w-auto text-center">
                Start 14-Day Free Trial
              </button>
              <a 
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into business intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with 100+ popular tools and platforms
              </p>
            </div>

            <div className="cyber-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <div className="text-gray-300 text-sm font-medium">{integration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative cyber-card p-8 ${
                    plan.popular ? 'border-2 border-purple-400 shadow-2xl shadow-purple-500/25 scale-105' : 'border border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.users}</p>
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
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Data?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Start your free trial today and see how AI analytics can revolutionize your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button w-full sm:w-auto text-center">
                  Start Free Trial
                </button>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiAnalyticsDashboardPage;