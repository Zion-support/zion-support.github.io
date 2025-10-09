import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Search, Target, BarChart, Zap, Globe } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const seoFeatures = [
    {
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords and search opportunities using advanced AI analysis.',
      icon: '🔍',
      benefits: [
        'Long-tail keyword discovery',
        'Competitor analysis',
        'Search volume prediction',
        'Difficulty scoring'
      ]
    },
    {
      title: 'Content Optimization',
      description: 'AI-powered content suggestions to improve rankings and user engagement.',
      icon: '✍️',
      benefits: [
        'Content gap analysis',
        'Readability optimization',
        'Keyword density analysis',
        'Content structure suggestions'
      ]
    },
    {
      title: 'Technical SEO Audit',
      description: 'Comprehensive technical analysis to identify and fix SEO issues.',
      icon: '⚙️',
      benefits: [
        'Site speed optimization',
        'Mobile responsiveness',
        'Schema markup',
        'Crawl error detection'
      ]
    },
    {
      title: 'Link Building Intelligence',
      description: 'AI identifies high-quality link opportunities and outreach prospects.',
      icon: '🔗',
      benefits: [
        'Link opportunity discovery',
        'Domain authority analysis',
        'Outreach automation',
        'Link quality scoring'
      ]
    },
    {
      title: 'Ranking Tracking',
      description: 'Monitor keyword rankings across search engines with detailed analytics.',
      icon: '📊',
      benefits: [
        'Multi-engine tracking',
        'Ranking history',
        'Competitor monitoring',
        'Performance alerts'
      ]
    },
    {
      title: 'Local SEO Optimization',
      description: 'Optimize for local search with AI-powered location-based strategies.',
      icon: '📍',
      benefits: [
        'Google My Business optimization',
        'Local keyword targeting',
        'Citation management',
        'Review monitoring'
      ]
    }
  ];

  const seoPackages = [
    {
      type: 'Basic SEO',
      description: 'Essential SEO optimization for small websites',
      price: '$129/month',
      features: ['Keyword research', 'On-page optimization', 'Basic analytics', 'Monthly reports', 'Email support']
    },
    {
      type: 'Advanced SEO',
      description: 'Comprehensive SEO strategy for growing businesses',
      price: '$299/month',
      features: ['Advanced keyword research', 'Technical SEO audit', 'Content optimization', 'Link building', 'Competitor analysis', 'Priority support']
    },
    {
      type: 'Enterprise SEO',
      description: 'Complete SEO solution for large organizations',
      price: '$599/month',
      features: ['Custom SEO strategy', 'Advanced analytics', 'White-label reports', 'Dedicated support', 'Custom integrations', 'SLA guarantee']
    },
    {
      type: 'E-commerce SEO',
      description: 'Specialized SEO for online stores',
      price: '$399/month',
      features: ['Product optimization', 'Category SEO', 'Schema markup', 'Image optimization', 'Conversion tracking', 'Shopping feed optimization']
    },
    {
      type: 'Local SEO',
      description: 'Location-based SEO for local businesses',
      price: '$199/month',
      features: ['Google My Business', 'Local citations', 'Review management', 'Local keywords', 'Map optimization', 'Local analytics']
    },
    {
      type: 'Content SEO',
      description: 'Content-focused SEO strategy',
      price: '$249/month',
      features: ['Content strategy', 'Topic research', 'Content optimization', 'Internal linking', 'Content performance', 'Editorial calendar']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129/month',
      description: 'Perfect for small websites and blogs',
      features: [
        'Up to 10 pages',
        'Basic keyword research',
        'On-page optimization',
        'Monthly reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Advanced SEO for growing businesses',
      features: [
        'Up to 100 pages',
        'Advanced keyword research',
        'Technical SEO audit',
        'Content optimization',
        'Link building',
        'Priority support',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'Complete SEO solution for large organizations',
      features: [
        'Unlimited pages',
        'Custom SEO strategy',
        'Advanced analytics',
        'White-label reports',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered SEO optimization with keyword research, content optimization, and technical analysis. Boost your search rankings and organic traffic." />
        <meta name="keywords" content="ai seo, seo optimization, keyword research, content optimization, technical seo, search engine optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered SEO optimization with keyword research, content optimization, and technical analysis. Boost your search rankings and organic traffic.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Traffic Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Ranking Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered SEO Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            SEO Packages & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{pkg.price}</div>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI SEO Optimizer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Analysis</h3>
              <p className="text-gray-300">AI analyzes your website and competitors to identify the best SEO opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Precise Targeting</h3>
              <p className="text-gray-300">Target the right keywords and audiences for maximum SEO impact and ROI.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Continuous Optimization</h3>
              <p className="text-gray-300">AI continuously monitors and optimizes your SEO strategy for better results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI SEO Optimizer Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI optimize your SEO strategy and drive more organic traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISEOOptimizerPage;