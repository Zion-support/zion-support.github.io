'use client';
import React from 'react';
import { Users, BarChart, TrendingUp, MessageSquare, Zap, CheckCircle, ArrowRight, Star, Clock, Target, Brain, Shield } from 'lucide-react';
import Link from 'next/link';

const AICustomerInsights: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Customer Segmentation',
      description: 'Automatically segment customers using advanced machine learning algorithms',
      benefits: ['95% accuracy in segmentation', 'Real-time updates', 'Behavioral pattern analysis']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior, churn risk, and lifetime value with AI',
      benefits: ['Churn prediction', 'LTV forecasting', 'Purchase probability scoring']
    },
    {
      icon: MessageSquare,
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback and social media sentiment in real-time',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Emotion detection']
    },
    {
      icon: TrendingUp,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize the complete customer journey with AI insights',
      benefits: ['Journey visualization', 'Bottleneck identification', 'Optimization recommendations']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'Get actionable insights and recommendations delivered automatically',
      benefits: ['Daily insights reports', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: Shield,
      title: 'Privacy & Compliance',
      description: 'GDPR-compliant data processing with enterprise-grade security',
      benefits: ['GDPR compliance', 'Data encryption', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customers',
        'Basic AI insights',
        'Email support',
        'Standard reports',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 customers',
        'Advanced AI analytics',
        'Priority support',
        'Custom dashboards',
        'Real-time alerts',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'VP of Marketing',
      company: 'Retail Innovations',
      content: 'AI Customer Insights has transformed how we understand our customers. Our retention rate increased by 35% in just 6 months.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Head of Customer Success',
      company: 'SaaS Solutions',
      content: 'The predictive analytics are incredibly accurate. We can now identify at-risk customers before they churn and take proactive action.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'The customer segmentation has helped us personalize our marketing campaigns. Our conversion rates have improved by 50%.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Churn Prevention',
      description: 'Identify customers at risk of churning and take proactive retention actions',
      impact: 'Reduce churn by 40%'
    },
    {
      title: 'Personalization',
      description: 'Create highly personalized experiences based on customer behavior patterns',
      impact: 'Increase conversion by 60%'
    },
    {
      title: 'Upselling',
      description: 'Identify upsell opportunities based on customer preferences and behavior',
      impact: 'Boost revenue by 25%'
    },
    {
      title: 'Customer Support',
      description: 'Route support tickets based on customer sentiment and urgency',
      impact: 'Improve satisfaction by 45%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                AI-Powered Customer Intelligence
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI Customer Insights
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Unlock the power of your customer data with AI-driven insights, predictive analytics, 
                and automated customer intelligence. Make data-driven decisions that drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Customer Dashboard</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">45,678</div>
                      <div className="text-sm text-gray-400">Total Customers</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">92%</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Churn Risk</span>
                      <span className="text-yellow-400 font-medium">Low (8%)</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-1/5"></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    <div className="flex justify-between mb-1">
                      <span>High-Value Customers</span>
                      <span className="text-cyan-400">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>At-Risk Customers</span>
                      <span className="text-red-400">89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Customer Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to understand your customers better and make 
              data-driven decisions that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300">
              See how businesses are using AI Customer Insights to drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
                  {useCase.impact}
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start with a free trial and scale as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 bg-gradient-to-br from-slate-800/70 to-cyan-900/20' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
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
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                
                <Link 
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
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
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of businesses using AI Customer Insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
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
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and discover what your customer data can tell you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerInsights;