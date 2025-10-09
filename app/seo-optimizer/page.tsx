'use client';
import React from 'react';
import { Search, Target, BarChart, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Users, Shield, Clock, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const SEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords with AI-powered research that analyzes search volume, competition, and relevance.',
      benefit: 'Find 100+ profitable keywords in minutes'
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'AI analyzes your content and provides specific recommendations to improve SEO performance and rankings.',
      benefit: 'Increase organic traffic by 150%'
    },
    {
      icon: BarChart,
      title: 'Rank Tracking',
      description: 'Monitor your keyword rankings across search engines with detailed analytics and competitor analysis.',
      benefit: 'Track 500+ keywords automatically'
    },
    {
      icon: Brain,
      title: 'Technical SEO Audit',
      description: 'Comprehensive technical analysis covering page speed, mobile optimization, and site structure issues.',
      benefit: 'Fix 95% of technical issues'
    },
    {
      icon: Zap,
      title: 'Competitor Analysis',
      description: 'Analyze your competitors\' SEO strategies and discover opportunities to outperform them.',
      benefit: 'Outrank competitors in 30 days'
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Track your SEO progress with detailed reports and actionable insights for continuous improvement.',
      benefit: 'Measure ROI on every optimization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small websites',
      features: [
        'Track 100 keywords',
        'Basic keyword research',
        'Content optimization',
        'Monthly reports',
        'Email support',
        '1 website'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Track 500 keywords',
        'Advanced keyword research',
        'Technical SEO audit',
        'Competitor analysis',
        'Priority support',
        '5 websites',
        'API access',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For agencies and large sites',
      features: [
        'Unlimited keywords',
        'Custom AI training',
        'White-label reports',
        'Dedicated support',
        'Unlimited websites',
        'Custom integrations',
        'On-premise deployment',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const seoAreas = [
    { name: 'Keyword Research', icon: '🔍', description: 'Find profitable keywords' },
    { name: 'Content Optimization', icon: '📝', description: 'Improve content for SEO' },
    { name: 'Technical SEO', icon: '⚙️', description: 'Fix technical issues' },
    { name: 'Link Building', icon: '🔗', description: 'Build quality backlinks' },
    { name: 'Local SEO', icon: '📍', description: 'Optimize for local search' },
    { name: 'E-commerce SEO', icon: '🛒', description: 'Product page optimization' },
    { name: 'Mobile SEO', icon: '📱', description: 'Mobile-first optimization' },
    { name: 'Voice Search', icon: '🎤', description: 'Voice search optimization' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Store',
      role: 'Marketing Manager',
      content: 'Our organic traffic increased 200% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Digital Agency',
      role: 'SEO Specialist',
      content: 'We can now handle 10x more clients with the same team. The automation features are game-changing.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'SaaS Company',
      role: 'Growth Manager',
      content: 'The competitor analysis helped us identify gaps and opportunities we never knew existed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Search className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SEO Optimizer
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            AI-Powered Search Engine Optimization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Dominate search results with our AI-powered SEO platform. Get keyword insights, 
            content optimization, and technical recommendations that drive organic traffic and rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">150%</div>
            <div className="text-white font-semibold mb-2">Traffic Increase</div>
            <div className="text-gray-300 text-sm">Average organic growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-white font-semibold mb-2">Keywords Tracked</div>
            <div className="text-gray-300 text-sm">Per website automatically</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Issue Detection</div>
            <div className="text-gray-300 text-sm">Technical SEO problems</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">30</div>
            <div className="text-white font-semibold mb-2">Days to Results</div>
            <div className="text-gray-300 text-sm">See ranking improvements</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Comprehensive SEO Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Areas Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Complete SEO Coverage
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seoAreas.map((area, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{area.name}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our AI-powered SEO platform to increase 
            organic traffic, improve rankings, and drive more qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SEOOptimizerPage;