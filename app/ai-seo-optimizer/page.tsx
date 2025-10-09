'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Search, Target, BarChart, Zap, CheckCircle, Phone, Mail, Brain, Shield, Users, TrendingUp } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords and search trends using advanced AI algorithms and competitor analysis.',
      benefits: ['Long-tail keywords', 'Search volume data', 'Competitor insights']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'AI-powered content analysis and optimization to improve search rankings and user engagement.',
      benefits: ['Content scoring', 'Readability analysis', 'Keyword density']
    },
    {
      icon: BarChart,
      title: 'Ranking Tracking',
      description: 'Monitor your search rankings across multiple keywords and search engines with detailed analytics.',
      benefits: ['Real-time tracking', 'Historical data', 'Competitor analysis']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Automated technical SEO audits and fixes to improve site speed, mobile-friendliness, and crawlability.',
      benefits: ['Site speed optimization', 'Mobile optimization', 'Crawl error fixes']
    },
    {
      icon: Brain,
      title: 'AI Content Suggestions',
      description: 'Get AI-powered content suggestions and topic ideas to improve your SEO performance.',
      benefits: ['Topic suggestions', 'Content gaps', 'Trending topics']
    },
    {
      icon: Shield,
      title: 'Link Building',
      description: 'Automated link building strategies and outreach to improve your domain authority and rankings.',
      benefits: ['Link opportunities', 'Outreach automation', 'Authority building']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129',
      period: '/month',
      description: 'Perfect for small websites',
      features: [
        'Up to 1,000 keywords',
        'Basic AI features',
        'Monthly reports',
        'Email support',
        '1 website',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 keywords',
        'Advanced AI features',
        'Weekly reports',
        'Priority support',
        '5 websites',
        'Advanced analytics',
        'Competitor tracking',
        'Content optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited keywords',
        'Custom AI models',
        'Real-time reports',
        'Dedicated support',
        'Unlimited websites',
        'White-label options',
        'API access',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Traffic Increase' },
    { number: '85%', label: 'Time Savings' },
    { number: '50+', label: 'Ranking Improvements' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI SEO Optimizer - Zion Tech Group"
        description="Revolutionary AI SEO tool that increases organic traffic by 300% and saves 85% of SEO time. Automated optimization and ranking tracking."
        keywords={['AI SEO', 'SEO optimization', 'keyword research', 'ranking tracking', 'content optimization', 'technical SEO']}
        canonicalUrl="https://ziontechgroup.com/ai-seo-optimizer"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI SEO Optimizer
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Increase organic traffic by 300% with AI-powered SEO
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered SEO platform combines intelligent keyword research, content optimization, 
                and automated technical SEO to boost your search rankings and organic traffic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful SEO Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Dominate Search Rankings?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 2,500+ businesses already using our AI SEO platform
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
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AISEOOptimizerPage;