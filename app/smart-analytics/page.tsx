'use client';
import React from 'react';
import { BarChart, TrendingUp, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, Target, Zap, Database, PieChart } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const SmartAnalytics: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-Time Dashboard',
      description: 'Monitor your business metrics with live, interactive dashboards and visualizations',
      benefits: ['Live data updates', 'Customizable widgets', 'Mobile-responsive design']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis to predict future performance',
      benefits: ['Revenue forecasting', 'Customer behavior prediction', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and monitor KPIs with automated alerts and progress tracking',
      benefits: ['KPI monitoring', 'Automated alerts', 'Performance insights']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect all your data sources for unified analytics and reporting',
      benefits: ['Multi-source integration', 'Data cleansing', 'Unified reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        '30-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 149,
      period: 'month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 20 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        'Up to 10 user accounts',
        '1-year data retention',
        'API access',
        'Predictive analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'White-label dashboards',
        'Custom analytics',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Full API access',
        'Custom integrations',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'DataFlow Solutions',
      content: 'Smart Analytics helped us increase our revenue by 40% through better data insights and forecasting.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'GrowthTech',
      content: 'The predictive analytics feature is game-changing. We can now make data-driven decisions with confidence.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Operations Manager',
      company: 'ScaleUp Inc.',
      content: 'Finally, a analytics platform that actually makes sense of our data. The dashboards are incredibly intuitive.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Smart Analytics - AI-Powered Business Intelligence Platform | Zion Tech Group"
        description="Transform your data into actionable insights with Smart Analytics. Real-time dashboards, predictive analytics, and AI-powered reporting. Starting at $49/month."
        keywords={['business analytics', 'data visualization', 'predictive analytics', 'business intelligence', 'data dashboard', 'KPI tracking']}
        canonicalUrl="https://ziontechgroup.com/smart-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Business Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                Smart Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Make smarter decisions with real-time dashboards and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10M+</div>
                <div className="text-gray-300">Data Points Processed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">5min</div>
                <div className="text-gray-300">Average Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into business insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
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
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming with Smart Analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and discover the power of AI-driven analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartAnalytics;