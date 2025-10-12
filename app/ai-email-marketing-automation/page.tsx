'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Zap, Brain, Mail, BarChart, Calendar, Target, TrendingUp, DollarSign, Clock, Shield, Smartphone, Monitor, Laptop, Send, Eye, MousePointer, PieChart } from 'lucide-react';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Email Content Generation',
      description: 'Create compelling subject lines, email copy, and CTAs using advanced AI that understands your brand voice',
      price: '$89/month'
    },
    {
      icon: Target,
      title: 'Smart Audience Segmentation',
      description: 'AI automatically segments your audience based on behavior, preferences, and engagement patterns',
      price: '$79/month'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI predicts email performance, optimal send times, and customer lifetime value before you send',
      price: '$149/month'
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up complex email sequences that adapt based on recipient behavior and engagement',
      price: '$199/month'
    },
    {
      icon: Eye,
      title: 'A/B Testing AI',
      description: 'AI automatically tests different versions and optimizes for the highest conversion rates',
      price: '$129/month'
    },
    {
      icon: PieChart,
      title: 'Revenue Attribution',
      description: 'Track email campaign ROI with AI-powered attribution modeling and revenue forecasting',
      price: '$179/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 Subscribers',
        '5,000 Emails/Month',
        'Basic AI Content Generation',
        'Email Templates',
        'Basic Analytics',
        'Email Support',
        '1 User Account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 Subscribers',
        '50,000 Emails/Month',
        'Advanced AI Content Generation',
        'Custom Templates',
        'Advanced Analytics & Insights',
        'Priority Support',
        '5 User Accounts',
        'A/B Testing',
        'Automation Workflows',
        'Integration APIs'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and marketing teams',
      features: [
        'Unlimited Subscribers',
        'Unlimited Emails',
        'Full AI Suite',
        'Custom AI Training',
        'Advanced Attribution',
        '24/7 Phone Support',
        'Unlimited User Accounts',
        'White-label Options',
        'Dedicated Account Manager',
        'Custom Integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Manager',
      company: 'E-commerce Plus',
      content: 'AI Email Marketing Automation increased our email revenue by 450% and reduced our campaign setup time by 80%. The AI-generated content consistently outperforms our manual campaigns.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'TechStart Solutions',
      content: 'The predictive analytics are incredible. We can now forecast which campaigns will succeed before launching them. Our email ROI has improved by 320% in just 3 months.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Digital Marketing Director',
      company: 'Growth Agency',
      content: 'Managing 50+ client email campaigns used to be overwhelming. Now AI handles the heavy lifting and our team focuses on strategy. Client satisfaction has never been higher.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Active Users', icon: Users },
    { number: '2.5B+', label: 'Emails Sent', icon: Send },
    { number: '450%', label: 'Avg. Revenue Increase', icon: TrendingUp },
    { number: '80%', label: 'Time Saved', icon: Clock }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Automated abandoned cart recovery, product recommendations, and post-purchase follow-ups',
      icon: ShoppingCart,
      results: '35% increase in revenue'
    },
    {
      title: 'SaaS',
      description: 'Onboarding sequences, feature announcements, and churn prevention campaigns',
      icon: Monitor,
      results: '60% improvement in retention'
    },
    {
      title: 'B2B',
      description: 'Lead nurturing, event promotion, and thought leadership content distribution',
      icon: Building,
      results: '280% increase in qualified leads'
    },
    {
      title: 'Non-Profit',
      description: 'Donation campaigns, volunteer recruitment, and impact storytelling',
      icon: Heart,
      results: '200% increase in donations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform that automates content creation, audience segmentation, and campaign optimization. Increase revenue by 450% and save 80% of your time." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, marketing automation, AI content generation" />
        <meta property="og:title" content="AI Email Marketing Automation - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered email marketing platform that automates content creation, audience segmentation, and campaign optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
                <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI-Powered Email Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Email Marketing Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your email marketing with AI that creates, segments, and optimizes campaigns automatically. 
                Increase revenue by 450% and save 80% of your time with intelligent automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
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
                Everything you need to create high-converting email campaigns with the power of artificial intelligence
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
                  <div className="text-cyan-400 font-semibold text-lg">
                    {feature.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Email Marketing Automation transforms campaigns across different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {useCase.results}
                  </div>
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
                Choose the perfect plan for your email marketing needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25 scale-105' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Email Marketing Automation to grow their revenue
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
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
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
                  Ready to Transform Your Email Marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using AI to create high-converting email campaigns, increase revenue, and save time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailMarketingAutomationPage;
