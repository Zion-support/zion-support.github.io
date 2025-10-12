import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BarChart3, Zap, Shield, Globe, DollarSign, Star, Clock, TrendingUp, Users, Target, Award, Brain, Database, PieChart, LineChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that automatically analyze your data and provide actionable insights and predictions.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Anomaly detection', 'Automated insights']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from multiple sources including databases, APIs, files, and cloud services in real-time.',
      benefits: ['Real-time processing', 'Multi-source support', 'Data synchronization', 'Cloud integration']
    },
    {
      icon: <PieChart className="w-8 h-8 text-purple-500" />,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards and reports that automatically update with your latest data and insights.',
      benefits: ['Interactive visualizations', 'Real-time updates', 'Custom dashboards', 'Mobile responsive']
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      title: 'Automated Reporting',
      description: 'AI-powered automated reporting that generates insights, alerts, and recommendations based on your data patterns.',
      benefits: ['Automated reports', 'Smart alerts', 'Recommendation engine', 'Scheduled delivery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1M data points/month',
        'Basic AI insights',
        '5 data sources',
        'Basic dashboards',
        'Email reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 10M data points/month',
        'Advanced AI features',
        'Unlimited data sources',
        'Advanced dashboards',
        'Priority support',
        'API access',
        'Custom visualizations',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited data points',
        'Custom AI training',
        'White-label solution',
        'Advanced reporting',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-tenant support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '1B+', label: 'Data Points Analyzed', icon: <Database className="w-6 h-6 text-blue-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '80%', label: 'Time Saved', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '300%', label: 'Insight Discovery', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="AI-powered data analytics platform that provides intelligent insights, automated reporting, and predictive analytics. Save 80% time and discover 300% more insights." />
        <meta name="keywords" content="AI data analytics, business intelligence, data visualization, predictive analytics, automated reporting" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Data Analytics
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your data into actionable insights with AI-powered analytics that automatically 
              discovers patterns, predicts trends, and generates reports. Save 80% of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Everything you need to analyze, visualize, and gain insights from your data with AI intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-sky-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the plan that fits your data volume and analytics needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group ${
                plan.popular 
                  ? 'border-sky-500 bg-gradient-to-b from-sky-500/20 to-transparent' 
                  : 'border-white/20 hover:bg-white/15'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data Analytics?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses saving 80% of their analytics time and discovering 300% more insights with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataAnalyticsPage;