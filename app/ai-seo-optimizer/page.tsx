import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, TrendingUp, Target, BarChart, CheckCircle, ArrowRight, Phone, Zap, Globe, Users } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords with AI-powered analysis of search volume, competition, and intent.',
      benefits: ['Long-tail keyword discovery', 'Competitor analysis', 'Search intent mapping']
    },
    {
      icon: TrendingUp,
      title: 'Content Optimization',
      description: 'Automatically optimize your content for search engines with real-time suggestions and scoring.',
      benefits: ['On-page SEO scoring', 'Content structure optimization', 'Meta tag generation']
    },
    {
      icon: Target,
      title: 'Competitor Analysis',
      description: 'Track competitor strategies and identify opportunities to outperform them in search rankings.',
      benefits: ['Competitor keyword tracking', 'Gap analysis', 'Strategy recommendations']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive SEO reporting with actionable insights and trend analysis.',
      benefits: ['Ranking tracking', 'Traffic analysis', 'ROI measurement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small websites',
      features: [
        'Up to 5 websites',
        '1,000 keyword research/month',
        'Basic content optimization',
        'Monthly reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 websites',
        '10,000 keyword research/month',
        'Advanced content optimization',
        'Competitor analysis',
        'Weekly reports',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited websites',
        'Unlimited keyword research',
        'Full SEO suite',
        'Custom reporting',
        '24/7 dedicated support',
        'White-label options',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Average Traffic Increase' },
    { number: '85%', label: 'Keyword Ranking Improvement' },
    { number: '50+', label: 'Supported Languages' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI SEO Optimizer
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
              Dominate Search Rankings with AI
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Boost your website's visibility and organic traffic with our AI-powered SEO platform. 
              Get intelligent keyword research, content optimization, and competitor analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center cyber-card p-6">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful SEO Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Choose Your SEO Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses that have increased their organic traffic by 300% with our AI SEO platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISEOOptimizerPage;
