'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BarChart, Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Users, TrendingUp, Database, Target, Globe, Clock, DollarSign, Phone, Mail, MapPin } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that predict future trends and behaviors with 95% accuracy',
      price: '$2,500/month'
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time with key performance indicators and metrics',
      price: '$1,800/month'
    },
    {
      icon: Target,
      title: 'Customer Segmentation',
      description: 'AI-powered customer segmentation to identify high-value prospects and optimize marketing spend',
      price: '$1,200/month'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Data-driven insights to maximize revenue through pricing optimization and sales forecasting',
      price: '$3,000/month'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with 100+ data sources including CRM, ERP, and marketing platforms',
      price: '$1,500/month'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR, CCPA, and SOC 2 compliance built-in',
      price: 'Included'
    }
  ];

  const benefits = [
    'Increase revenue by 25-40% through data-driven insights',
    'Reduce operational costs by 30% with automated reporting',
    'Improve customer retention by 35% with predictive analytics',
    'Accelerate decision-making with real-time data visualization',
    'Scale analytics across all business units seamlessly',
    '24/7 monitoring and alerting for critical business metrics'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Monthly reports',
        'Email support',
        'Standard security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 data sources',
        'Advanced analytics',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,500',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'AI-powered insights',
        'Custom dashboards',
        'Dedicated support',
        'White-label options',
        'Enterprise security',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Advanced Data Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered analytics. Real-time insights, predictive modeling, and data-driven decision making. Starting at $2,500/month." />
        <meta name="keywords" content="AI analytics, business intelligence, predictive analytics, data visualization, machine learning, data science" />
        <meta property="og:title" content="AI Analytics - Advanced Data Intelligence | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with AI-powered analytics. Real-time insights, predictive modeling, and data-driven decision making." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Analytics",
            "description": "Advanced AI-powered analytics and business intelligence solutions",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2500",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Analytics
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                Make smarter decisions, predict trends, and drive growth with cutting-edge machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Get Free Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics platform combines machine learning, real-time processing, and intuitive visualization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{feature.price}</span>
                    <Link 
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Analytics</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 500+ companies that have transformed their business with our AI analytics platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using AI analytics to drive growth and make smarter decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Free Trial
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAnalyticsPage;