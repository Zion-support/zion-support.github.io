'use client';
import React from 'react';
import { TrendingUp, BarChart, Brain, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Users, Award, Clock, Shield, Settings, Sparkles, PieChart, Activity, Zap, Eye, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: 'Advanced Forecasting',
      description: 'Predict future trends with 95% accuracy using machine learning algorithms',
      icon: TrendingUp,
      benefits: ['Time series analysis', 'Seasonal adjustments', 'Trend identification', 'Confidence intervals']
    },
    {
      title: 'Real-time Predictions',
      description: 'Get instant predictions as data flows through your systems',
      icon: Zap,
      benefits: ['Stream processing', 'Live dashboards', 'Instant alerts', 'Dynamic updates']
    },
    {
      title: 'Multi-dimensional Analysis',
      description: 'Analyze complex relationships across multiple data dimensions',
      icon: BarChart,
      benefits: ['Correlation analysis', 'Pattern recognition', 'Anomaly detection', 'Feature engineering']
    },
    {
      title: 'Automated Insights',
      description: 'AI automatically generates actionable insights and recommendations',
      icon: Brain,
      benefits: ['Smart recommendations', 'Root cause analysis', 'What-if scenarios', 'Optimization suggestions']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 data sources',
        'Basic forecasting',
        'Standard reports',
        'Email support',
        'Monthly predictions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Most popular for growing companies',
      features: [
        'Up to 50 data sources',
        'Advanced ML models',
        'Real-time predictions',
        'Priority support',
        'Custom dashboards',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom ML models',
        'Real-time streaming',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales performance and optimize revenue strategies',
      icon: TrendingUp,
      results: ['25% accuracy improvement', '40% better planning', '60% faster decisions', '35% revenue increase']
    },
    {
      title: 'Demand Planning',
      description: 'Optimize inventory and supply chain with demand predictions',
      icon: Target,
      results: ['30% inventory reduction', '50% stockout prevention', '45% cost savings', '80% efficiency gain']
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate risks before they impact your business',
      icon: Shield,
      results: ['70% risk reduction', '90% early detection', '50% loss prevention', '85% compliance improvement']
    },
    {
      title: 'Customer Behavior',
      description: 'Predict customer actions and optimize engagement strategies',
      icon: Users,
      results: ['60% churn reduction', '45% conversion increase', '35% lifetime value', '50% satisfaction boost']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'RetailMax Solutions',
      role: 'VP of Analytics',
      content: 'AI Predictive Analytics transformed our forecasting accuracy from 60% to 95%. We can now make data-driven decisions with confidence.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Manufacturing Corp',
      role: 'Operations Director',
      content: 'The demand forecasting helped us reduce inventory costs by 40% while improving customer satisfaction. ROI was achieved in just 2 months.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'FinanceFirst Inc',
      role: 'Risk Manager',
      content: 'Their risk prediction models saved us millions by identifying potential issues before they became problems. Incredible accuracy and insights.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Predictive Analytics
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Predictive Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Predict the future with confidence using our advanced AI-powered analytics platform. 
              Make data-driven decisions that drive growth and optimize performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
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
            <p className="text-xl text-gray-300">Powerful predictive analytics powered by machine learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
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
            <p className="text-xl text-gray-300">See how companies use AI Predictive Analytics to drive results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
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
            <p className="text-xl text-gray-300">Choose the analytics solution that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-purple-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                    : 'border border-purple-400 text-purple-300 hover:bg-purple-400/10'
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
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Data-Driven Companies</h2>
            <p className="text-xl text-gray-300">See what our clients say about AI Predictive Analytics</p>
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
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Predict the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start making data-driven predictions that drive business growth. 
            Get a free analysis and see how AI Predictive Analytics can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center">
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

export default AIPredictiveAnalyticsPage;