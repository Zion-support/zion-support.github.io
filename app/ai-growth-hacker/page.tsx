'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Target, Zap, BarChart, Users, Globe, Smartphone, Mail, Phone, MapPin, Star, Award, ArrowRight, Brain, Rocket, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIGrowthHackerPage: React.FC = () => {
  const features = [
    'AI-powered growth strategy optimization',
    'Automated A/B testing across all channels',
    'Predictive customer acquisition modeling',
    'Real-time conversion rate optimization',
    'Intelligent content personalization',
    'Advanced funnel analysis and optimization',
    'Automated email marketing campaigns',
    'Social media growth automation',
    'SEO and content strategy optimization',
    'Revenue growth prediction and planning'
  ];

  const benefits = [
    'Increase conversion rates by up to 300%',
    'Reduce customer acquisition costs by 60%',
    'Boost revenue growth by 250% on average',
    'Automate 90% of growth marketing tasks',
    'Improve customer lifetime value by 180%',
    'Scale marketing efforts without scaling team',
    'Make data-driven decisions with AI insights',
    'Optimize campaigns in real-time'
  ];

  const strategies = [
    {
      title: 'Viral Growth Engine',
      description: 'AI-powered viral marketing strategies that exponentially increase user acquisition',
      icon: '🚀',
      metrics: ['500% viral coefficient', '10x user growth', 'Automated referral systems']
    },
    {
      title: 'Conversion Optimization',
      description: 'Machine learning algorithms that continuously optimize your conversion funnels',
      icon: '📈',
      metrics: ['300% conversion boost', 'Real-time optimization', 'A/B testing automation']
    },
    {
      title: 'Retention Mastery',
      description: 'AI-driven customer retention strategies that maximize lifetime value',
      icon: '🔄',
      metrics: ['85% retention rate', 'Churn prediction', 'Personalized engagement']
    },
    {
      title: 'Revenue Acceleration',
      description: 'Intelligent pricing and upselling strategies that maximize revenue per customer',
      icon: '💰',
      metrics: ['250% revenue growth', 'Dynamic pricing', 'Upsell optimization']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$497/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic AI growth strategies',
        'Up to 3 marketing channels',
        'Monthly growth reports',
        'Email support',
        'Basic A/B testing',
        'Social media automation'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$1,297/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI algorithms',
        'Unlimited marketing channels',
        'Real-time optimization',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Revenue tracking',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,997/month',
      description: 'For large organizations',
      features: [
        'Everything in Growth',
        'Custom AI model training',
        'Dedicated growth manager',
        'White-label solutions',
        'Advanced reporting',
        'API access',
        'SLA guarantee',
        'Custom deployment'
      ],
      popular: false
    }
  ];

  const results = [
    { metric: '300%', description: 'Average conversion increase' },
    { metric: '250%', description: 'Revenue growth boost' },
    { metric: '60%', description: 'Cost reduction' },
    { metric: '90%', description: 'Task automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>AI Growth Marketing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Growth Hacker
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate AI-powered growth marketing platform that automates and optimizes your entire customer acquisition funnel. 
            Scale your business with intelligent growth strategies that work 24/7.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {results.map((result, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Growth Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI Growth Hacker?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Advanced AI algorithms continuously optimize your growth strategies for maximum ROI.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Strategies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Proven Growth Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{strategy.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{strategy.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-sm text-orange-400 flex items-center">
                      <TrendingUp className="w-3 h-3 text-orange-400 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Growth-Focused Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-orange-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Growth Hacker Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                  }`}
                >
                  Start Growing
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Growth?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have accelerated their growth with our AI-powered marketing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Growth Hacker Inquiry"
                className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Growth Audit
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIGrowthHackerPage;
