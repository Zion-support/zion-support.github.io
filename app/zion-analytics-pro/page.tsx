'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BarChart, Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Users, TrendingUp, Database, Target, Globe, Clock, DollarSign, Phone, Mail, MapPin, Sparkles, Award, Rocket } from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that automatically discover patterns and generate actionable business insights',
      price: '$4,500/month'
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Customizable dashboards with real-time data visualization and interactive charts for instant decision making',
      price: '$2,200/month'
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Build and deploy predictive models to forecast sales, customer behavior, and market trends with 98% accuracy',
      price: '$3,800/month'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Intelligence',
      description: 'AI-driven revenue optimization with dynamic pricing, churn prediction, and customer lifetime value analysis',
      price: '$5,500/month'
    },
    {
      icon: Database,
      title: 'Data Lake Integration',
      description: 'Seamless integration with enterprise data lakes, warehouses, and 200+ business applications',
      price: '$2,800/month'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, role-based access, and compliance with all major standards',
      price: 'Included'
    }
  ];

  const benefits = [
    'Increase revenue by 45-60% through AI-powered insights and optimization',
    'Reduce data processing time by 80% with automated analytics workflows',
    'Improve customer retention by 50% with predictive churn analysis',
    'Accelerate business decisions with real-time data visualization',
    'Scale analytics across global teams with multi-tenant architecture',
    'Achieve 99.9% uptime with enterprise-grade infrastructure'
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced AI insights',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        'Advanced security'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,500',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited data sources',
        'AI-powered predictions',
        'Custom dashboards',
        'Dedicated support',
        'White-label options',
        'Enterprise security',
        'On-premise deployment'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'Us',
      description: 'Tailored for enterprise needs',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'Bespoke dashboards',
        '24/7 dedicated support',
        'Full customization',
        'Military-grade security',
        'Hybrid deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, TechCorp',
      content: 'Zion Analytics Pro transformed our business intelligence. We increased revenue by 55% in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'CTO, DataFlow Inc',
      content: 'The AI insights are incredible. We can now predict market trends weeks in advance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'VP Analytics, GrowthCo',
      content: 'Best analytics platform we\'ve ever used. The ROI was immediate and substantial.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Enterprise AI Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Zion Analytics Pro - The most advanced AI-powered analytics platform for enterprises. Real-time insights, predictive modeling, and revenue optimization. Starting at $4,500/month." />
        <meta name="keywords" content="Zion Analytics Pro, enterprise analytics, AI business intelligence, predictive analytics, revenue optimization, data visualization" />
        <meta property="og:title" content="Zion Analytics Pro - Enterprise AI Analytics Platform | Zion Tech Group" />
        <meta property="og:description" content="The most advanced AI-powered analytics platform for enterprises. Real-time insights, predictive modeling, and revenue optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-analytics-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion Analytics Pro",
            "description": "Enterprise AI-powered analytics and business intelligence platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "price": "4500",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "4500",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Enterprise AI Analytics</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Analytics Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                The most advanced AI-powered analytics platform for enterprises. Transform your data into 
                competitive advantage with real-time insights, predictive modeling, and revenue optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Request Enterprise Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Enterprise Pricing
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">60%</div>
                  <div className="text-gray-400 text-sm">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for scale, security, and performance. Everything you need to transform your enterprise data strategy.
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
                Why Enterprise Leaders Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Analytics Pro</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join Fortune 500 companies that have transformed their business with our enterprise AI analytics platform
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

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Enterprise Clients</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from industry leaders who trust Zion Analytics Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed for enterprises of all sizes. All plans include 24/7 support and regular updates.
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
                    {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
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
                  Ready to Transform Your Enterprise Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join industry leaders using Zion Analytics Pro to drive growth and make smarter decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Schedule Enterprise Demo
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

export default ZionAnalyticsProPage;