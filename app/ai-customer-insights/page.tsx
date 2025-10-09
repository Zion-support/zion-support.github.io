'use client';
import React from 'react';
import { Brain, BarChart, Users, TrendingUp, Eye, MessageSquare, Target, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Award, Clock, Shield, Bot, Sparkles, PieChart, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Sentiment Analysis',
      description: 'Analyze customer emotions and satisfaction across all touchpoints instantly',
      icon: Brain,
      benefits: ['Live sentiment tracking', 'Multi-channel analysis', 'Emotion detection', 'Trend identification']
    },
    {
      title: 'Predictive Customer Behavior',
      description: 'Predict customer actions and preferences using advanced machine learning',
      icon: Target,
      benefits: ['Churn prediction', 'Purchase likelihood', 'Lifetime value', 'Behavior patterns']
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys and identify optimization opportunities',
      icon: Eye,
      benefits: ['Journey visualization', 'Bottleneck identification', 'Touchpoint analysis', 'Optimization insights']
    },
    {
      title: 'Automated Insights Generation',
      description: 'Get actionable insights automatically generated from your customer data',
      icon: Zap,
      benefits: ['Auto-generated reports', 'Smart recommendations', 'Anomaly detection', 'Performance alerts']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 customers',
        'Basic sentiment analysis',
        'Standard reports',
        'Email support',
        'Monthly insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Most popular for growing teams',
      features: [
        'Up to 100,000 customers',
        'Advanced AI insights',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        'API access',
        'Weekly insights'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Premium AI models',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Daily insights'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Increase conversion rates by understanding customer behavior patterns',
      icon: ShoppingCart,
      results: ['25% increase in conversions', '40% reduction in cart abandonment', '60% improvement in customer satisfaction']
    },
    {
      title: 'Customer Support Enhancement',
      description: 'Improve support quality with real-time sentiment analysis',
      icon: MessageSquare,
      results: ['50% faster issue resolution', '35% increase in CSAT scores', '80% reduction in escalations']
    },
    {
      title: 'Product Development',
      description: 'Make data-driven product decisions based on customer insights',
      icon: Target,
      results: ['30% faster feature adoption', '45% increase in user engagement', '70% improvement in product-market fit']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'RetailMax Solutions',
      role: 'VP of Customer Experience',
      content: 'AI Customer Insights helped us understand our customers like never before. Our NPS score increased by 40 points in just 3 months.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'TechStart Inc',
      role: 'Head of Product',
      content: 'The predictive analytics are incredibly accurate. We can now anticipate customer needs and stay ahead of the competition.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'ServicePro',
      role: 'Customer Success Manager',
      content: 'Real-time insights transformed our customer support. We can now proactively address issues before they become problems.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Customer Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Customer Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your customer data with AI-driven insights. Understand behavior, 
              predict needs, and deliver exceptional experiences that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Capabilities</h2>
            <p className="text-xl text-gray-300">Transform customer data into actionable intelligence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
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
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300">See how companies use AI Customer Insights to drive results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600' 
                    : 'border border-blue-400 text-blue-300 hover:bg-blue-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">See what our customers say about AI Customer Insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Customer Insights?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start understanding your customers better today with AI-powered insights that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICustomerInsightsPage;