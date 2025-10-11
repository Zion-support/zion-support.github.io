import React, { useState } from 'react';
import { CheckCircle, ArrowRight, BarChart, Zap, Star, Users, Clock, Shield, Brain, TrendingUp, Target, Database, Eye, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze your data to provide actionable insights'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with advanced predictive modeling'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Dashboards',
      description: 'Customizable dashboards with live data updates and visualizations'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Goal Tracking',
      description: 'Set and monitor KPIs with automated progress tracking'
    },
    {
      icon: <Database className="w-6 h-6 text-pink-500" />,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including Google Analytics, Salesforce, and more'
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: 'Smart Alerts',
      description: 'Get notified when important metrics change or anomalies are detected'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        '30-day data retention'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        '25 data sources',
        'Unlimited dashboards',
        'Advanced AI insights',
        'Predictive analytics',
        'Priority support',
        '5 user accounts',
        '1-year data retention',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with complex data requirements',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited users',
        'Unlimited data retention',
        'Custom development',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Facebook Ads', logo: '📱' },
    { name: 'Google Ads', logo: '🔍' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Shopify', logo: '🛒' },
    { name: 'Mailchimp', logo: '📧' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Slack', logo: '💬' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'AWS', logo: '☁️' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Data Analyst',
      company: 'E-commerce Plus',
      content: 'The AI insights have completely transformed how we understand our customer behavior. We\'ve increased conversion rates by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Manager',
      company: 'GrowthCorp',
      content: 'The predictive analytics feature helped us identify market trends 3 months ahead of our competitors. Game changer!',
      rating: 5
    },
    {
      name: 'Robert Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'Finally, a dashboard that actually tells us what to do next. The AI recommendations are spot-on every time.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with predictive insights, real-time data visualization, and automated reporting. Transform your data into actionable intelligence." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, insights" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BarChart className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Analytics Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and intelligent recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to turn your data into competitive advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect to your favorite tools and data sources in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to match your analytics needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular 
                  ? 'border-green-500/50 bg-gradient-to-b from-green-500/10 to-transparent' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses making data-driven decisions with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start making smarter decisions with AI-powered analytics. Free trial available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboardPage;