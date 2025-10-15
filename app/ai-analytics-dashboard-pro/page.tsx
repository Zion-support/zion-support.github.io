import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Database, Shield, Zap, Users, DollarSign, Clock, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Real-time Analytics',
      description: 'Advanced AI-powered analytics with real-time data processing and visualization capabilities.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Predictive Insights',
      description: 'Machine learning algorithms that predict trends and provide actionable business insights.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Multi-Source Integration',
      description: 'Seamlessly integrate data from multiple sources including APIs, databases, and cloud services.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Lightning Fast',
      description: 'Optimized for performance with sub-second query response times and instant visualizations.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Collaborative Features',
      description: 'Team collaboration tools with role-based access control and shared dashboards.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Email support',
        'Standard reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Up to 10 user accounts',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited users',
        'On-premise deployment',
        'Custom development'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'ROI Improvement',
      description: 'Average 340% ROI within 6 months of implementation'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Time Savings',
      description: 'Reduce reporting time by 85% with automated insights'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Better Decisions',
      description: 'Data-driven insights lead to 40% better business decisions'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: 'Scalable Solution',
      description: 'Grows with your business from startup to enterprise'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI-powered analytics dashboard. Real-time insights, predictive analytics, and enterprise-grade security. Starting at $299/month." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboard, enterprise analytics" />
        <meta property="og:title" content="AI Analytics Dashboard Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered analytics dashboard for data-driven business decisions. Real-time insights and predictive analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Dashboard
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business data into actionable insights with our advanced AI-powered analytics platform. 
                Real-time monitoring, predictive analytics, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Pricing Display */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Starting at $299/month</div>
                  <div className="text-gray-300">14-day free trial • No setup fees</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to turn your data into competitive advantage
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of companies already seeing results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see the power of AI-driven analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAnalyticsDashboardProPage;
