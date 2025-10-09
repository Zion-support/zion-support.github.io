'use client';
import React from 'react';
import { CheckCircle, Star, Zap, BarChart, TrendingUp, Users, Clock, Shield, ArrowRight, Play, Download, MessageSquare, PieChart, Activity, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SmartAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live dashboards that update in real-time across all your data sources.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis to help you make data-driven decisions and predict future outcomes.'
    },
    {
      icon: PieChart,
      title: 'Custom Visualizations',
      description: 'Create stunning charts, graphs, and reports with our drag-and-drop visualization builder and 50+ chart types.'
    },
    {
      icon: Activity,
      title: 'Automated Reports',
      description: 'Schedule and automate report generation with intelligent insights and recommendations delivered to your inbox.'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track KPIs, monitor progress toward business goals, and get alerts when targets are at risk.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance with GDPR, CCPA, and SOC 2 standards.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        '10 dashboards',
        'Basic visualizations',
        'Email support',
        'Monthly reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies and teams',
      features: [
        '25 data sources',
        'Unlimited dashboards',
        'Advanced analytics',
        'Priority support',
        'Real-time reports',
        '5 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'AI-powered insights',
        'Dedicated support',
        'Custom development',
        'Unlimited users',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Shopify', logo: '🛒' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Mailchimp', logo: '📧' },
    { name: 'Facebook Ads', logo: '📱' },
    { name: 'Google Ads', logo: '🔍' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Slack', logo: '💬' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'Webhook', logo: '🔗' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'DataFlow Inc.',
      content: 'Smart Analytics has transformed how we understand our business. The predictive insights have helped us increase revenue by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'GrowthTech',
      content: 'The real-time dashboards are incredible. We can now make decisions based on live data instead of waiting for weekly reports.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Data Analyst',
      company: 'AnalyticsPro',
      content: 'The AI-powered insights are spot-on. It has saved me hours of manual analysis and provided insights I would have missed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
                Smart Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Get real-time dashboards, predictive analytics, and automated reports that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button-advanced px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Chart Types</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-pink-400 mb-2">12</div>
                <div className="text-gray-300">Integrations</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">5K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Powerful Analytics Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Connect all your favorite tools and data sources with our extensive integration library.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-white font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'cyber-button-advanced' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Smart Analytics to make better decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button-advanced px-8 py-4 text-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmartAnalyticsPage;