'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, Eye, Heart, MessageCircle, CheckCircle, ArrowRight, Star, 
  BarChart, TrendingUp, Target, Zap, Brain, PieChart, 
  Activity, Clock, Award, Shield, Globe, Smartphone, Mail
} from 'lucide-react';

const ZionAiCustomerInsightsProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using advanced machine learning algorithms'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback, reviews, and interactions to understand emotional sentiment and satisfaction levels'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Predictive Analytics',
      description: 'Predict customer lifetime value, churn risk, and purchase likelihood with 92% accuracy'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
      title: 'Conversation Intelligence',
      description: 'Extract insights from customer conversations across all channels including calls, chats, and emails'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences and recommendations based on individual customer profiles'
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-400" />,
      title: 'Real-Time Dashboards',
      description: 'Monitor customer health, satisfaction scores, and engagement metrics in real-time'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 customers',
        'Basic AI insights',
        'Email support',
        'Standard integrations',
        'Monthly reports',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25,000 customers',
        'Advanced AI insights',
        'Priority support',
        'All integrations',
        'Real-time dashboards',
        'Custom reporting',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Premium AI insights',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Increase Customer Retention by 40%',
      description: 'Identify at-risk customers and take proactive action to improve retention rates'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Boost Customer Satisfaction',
      description: 'Understand what drives customer happiness and optimize experiences accordingly'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Increase Revenue by 28%',
      description: 'Personalize offers and recommendations to maximize customer lifetime value'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Industry Recognition',
      description: 'Trusted by 300+ companies worldwide, featured in top customer experience publications'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Create personalized product recommendations and shopping experiences that increase conversion rates by 35%',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'SaaS Customer Success',
      description: 'Monitor user engagement and predict churn to proactively retain customers and reduce churn by 45%',
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Financial Services',
      description: 'Analyze customer behavior patterns to offer personalized financial products and improve cross-selling',
      icon: <BarChart className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Healthcare & Wellness',
      description: 'Understand patient preferences and engagement patterns to improve care delivery and outcomes',
      icon: <Heart className="w-8 h-8 text-red-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Customer Insights Pro - Advanced Customer Analytics & Personalization | Zion Tech Group</title>
        <meta name="description" content="Transform customer relationships with Zion AI Customer Insights Pro. Get deep customer analytics, sentiment analysis, and personalization tools. Start your free trial today!" />
        <meta name="keywords" content="customer insights, customer analytics, sentiment analysis, customer segmentation, personalization, customer experience" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Users className="w-4 h-4" />
              <span>AI-Powered Customer Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Zion AI Customer{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Insights Pro
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock deep customer insights with AI-powered analytics. Understand behavior patterns, 
              predict preferences, and create personalized experiences that drive loyalty and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-sm">Retention Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">28%</div>
                <div className="text-gray-300 text-sm">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">92%</div>
                <div className="text-gray-300 text-sm">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand your customers and create exceptional experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different industries use our AI to transform customer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion AI Customer Insights Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI to transform customer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400/50 shadow-2xl shadow-purple-500/25' 
                    : 'border-white/20 hover:border-purple-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Customer Relationships?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join 300+ companies already using Zion AI Customer Insights Pro to increase 
                  retention by 40% and boost revenue by 28%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Your Free Trial
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCustomerInsightsProPage;