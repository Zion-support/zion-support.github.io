'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Target, Zap, Shield, CheckCircle, ArrowRight, Star, Users, Clock, Award, Phone, Mail, MapPin, Eye, Download, Share2, Settings } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const AnalyticsDashboardPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor your business metrics in real-time with live data updates and instant insights.',
      benefits: ['Live data streaming', 'Instant updates', 'Real-time alerts', 'Performance monitoring']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Visualizations',
      description: 'Create stunning charts, graphs, and dashboards with our powerful visualization engine.',
      benefits: ['Interactive charts', 'Custom widgets', 'Drag-and-drop builder', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track your business objectives with intelligent goal monitoring and progress alerts.',
      benefits: ['KPI tracking', 'Progress visualization', 'Smart alerts', 'Performance insights']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports to keep your team informed and aligned.',
      benefits: ['Scheduled reports', 'Email delivery', 'Custom templates', 'Export options']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 dashboards',
        'Basic visualizations',
        'Standard reports',
        'Email support',
        '1 user account',
        'Monthly data refresh'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses with team collaboration needs',
      features: [
        'Up to 20 dashboards',
        'Advanced visualizations',
        'Custom reports',
        'Priority support',
        'Up to 5 user accounts',
        'Real-time data sync',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited dashboards',
        'Premium visualizations',
        'Advanced analytics',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Real-time processing',
        'Full API access',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc',
      role: 'Founder',
      content: 'The analytics dashboard has been a game-changer for our startup. We can now make data-driven decisions with confidence.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'Real-time analytics help us optimize our campaigns instantly. Our conversion rates have improved by 40%.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataDriven LLC',
      role: 'Operations Manager',
      content: 'The automated reports save us hours every week. The team is always informed and aligned on our goals.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  const integrations = [
    { name: 'Google Analytics', description: 'Track website performance and user behavior' },
    { name: 'Salesforce', description: 'Monitor sales metrics and customer data' },
    { name: 'HubSpot', description: 'Analyze marketing campaigns and lead generation' },
    { name: 'Stripe', description: 'Track payment processing and revenue metrics' },
    { name: 'Shopify', description: 'Monitor e-commerce performance and sales data' },
    { name: 'Slack', description: 'Share insights and alerts with your team' },
    { name: 'Microsoft Teams', description: 'Integrate analytics into your workflow' },
    { name: 'Zapier', description: 'Connect with 2000+ apps and services' }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, inventory, customer behavior, and conversion rates for your online store.',
      metrics: ['40% increase in conversion rate', '25% reduction in cart abandonment', '60% improvement in customer retention']
    },
    {
      title: 'Marketing Performance',
      description: 'Monitor campaign effectiveness, ROI, and customer acquisition costs across all channels.',
      metrics: ['35% improvement in ROI', '50% reduction in CAC', '80% increase in lead quality']
    },
    {
      title: 'Financial Tracking',
      description: 'Monitor revenue, expenses, profit margins, and cash flow in real-time.',
      metrics: ['30% improvement in cash flow', '20% reduction in expenses', '45% increase in profit margins']
    },
    {
      title: 'Team Performance',
      description: 'Track individual and team productivity, goals, and performance metrics.',
      metrics: ['50% improvement in productivity', '35% increase in goal achievement', '25% reduction in turnover']
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Smart Analytics Dashboard - Zion Tech Group"
        description="Real-time business intelligence with customizable dashboards and automated insights. Track KPIs, monitor performance, and make data-driven decisions with our analytics platform."
        keywords="analytics dashboard, business intelligence, data visualization, KPI tracking, real-time analytics, micro saas, Zion Tech Group"
        canonical="https://ziontechgroup.com/micro-saas/analytics-dashboard"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Smart <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Analytics Dashboard</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Transform your business data into actionable insights with our powerful analytics platform. 
                Monitor KPIs, track performance, and make data-driven decisions in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <feature.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                See how businesses use our analytics dashboard to drive growth and success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-cyan-400">
                        <TrendingUp className="w-5 h-5 mr-3" />
                        <span className="font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Connect with your favorite tools and services to centralize all your data
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-center group hover:scale-105">
                  <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-400">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees, cancel anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-lg p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-cyan-400/20 hover:border-cyan-400/50'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-purple-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join thousands of businesses that trust our analytics platform. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;