'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Eye, Brain, Zap, Target, Users, Clock, CheckCircle, AlertCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Globe, PieChart, Activity, Database, Settings } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions',
      benefits: ['45% increase in revenue', '60% productivity boost', '30% conversion lift', 'Real-time decision making']
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive, customizable dashboards that update in real-time with your business metrics',
      benefits: ['Live data visualization', 'Customizable widgets', 'Mobile-responsive design', 'Export capabilities']
    },
    {
      icon: Target,
      title: 'Advanced Analytics',
      description: 'Deep dive into your data with advanced statistical analysis and predictive modeling',
      benefits: ['Predictive analytics', 'Cohort analysis', 'Funnel analysis', 'A/B testing insights']
    },
    {
      icon: Users,
      title: 'User Behavior Tracking',
      description: 'Comprehensive user behavior analysis to understand customer journeys and preferences',
      benefits: ['User journey mapping', 'Behavioral segmentation', 'Engagement metrics', 'Retention analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149/month',
      marketPrice: '$300-500/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        '10 custom dashboards',
        'Basic AI insights',
        'Email support',
        'Monthly reports',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      marketPrice: '$600-1000/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 data sources',
        'Unlimited dashboards',
        'Advanced AI insights',
        'Priority support',
        'Real-time alerts',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      marketPrice: '$1500-3000/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Custom AI models',
        '24/7 dedicated support',
        'Custom reporting',
        'White-label options',
        'On-premise deployment',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Slack', icon: '💬' },
    { name: 'Zapier', icon: '⚡' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'AI Analytics Dashboard transformed our decision-making process. We saw a 45% increase in revenue within 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'The predictive analytics helped us optimize our marketing spend and increase conversion rates by 30%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Co.',
      role: 'Data Analyst',
      content: 'Finally, a dashboard that actually provides actionable insights. The AI recommendations are spot-on.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time dashboards, predictive analytics, and user behavior tracking." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
                <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                <a href="tel:+13024640950" className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Transform Your Data Into Actionable Insights
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our AI-powered analytics dashboard provides real-time insights, predictive analytics, and user behavior tracking to help you make data-driven decisions and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Integrations Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified analytics experience
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-2">{integration.icon}</div>
                  <p className="text-sm text-gray-300">{integration.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI analytics features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <div className="text-sm text-gray-400 mb-2">Market: {plan.marketPrice}</div>
                    <div className="text-sm text-green-400 mb-4">Save 50-70% vs market</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Analytics Dashboard`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Start making data-driven decisions today with our AI-powered analytics dashboard.
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
                Email Us
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Micro SAAS</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;