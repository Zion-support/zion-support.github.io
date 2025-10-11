'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, Brain, TrendingUp, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';

const AiDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that discover hidden patterns and trends in your data.',
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Pattern Recognition', 'Automated Insights']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Interactive visualizations that update in real-time with your business data.',
      benefits: ['Live Data Streaming', 'Custom Dashboards', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
  ];

  const analyticsTypes = [
    {
      title: 'Descriptive Analytics',
      description: 'Understand what happened in your business with historical data analysis.',
      benefits: ['Historical reporting', 'Data summarization', 'Trend analysis', 'Performance tracking']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using machine learning models.',
      benefits: ['Future forecasting', 'Risk assessment', 'Demand prediction', 'Trend projection']
    },
    {
      title: 'Prescriptive Analytics',
      description: 'Get actionable recommendations to optimize your business decisions.',
      benefits: ['Action recommendations', 'Optimization suggestions', 'Decision support', 'Strategic planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter Analytics',
      price: '$299',
      period: '/month',
      description: 'Basic analytics features for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Email support',
        'Standard reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional Analytics',
      price: '$799',
      period: '/month',
      description: 'Advanced analytics features for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced AI features',
        'Priority support',
        'Custom dashboards',
        'Up to 10 user accounts',
        'Real-time analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise Analytics',
      price: 'Custom',
      period: '',
      description: 'Comprehensive analytics solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Unlimited users',
        'Advanced analytics',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Data Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Make smarter decisions with real-time dashboards and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into business intelligence with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Types of Analytics</h2>
            <p className="text-gray-300">Comprehensive analytics solutions for every business need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Analytics Plans</h2>
            <p className="text-gray-300">Choose the analytics plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500 ring-2 ring-cyan-500/50' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise Analytics' ? 'Contact Sales' : 'Get Started'}
                  {plan.name !== 'Enterprise Analytics' && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Data Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial and see how AI data analytics can revolutionize your business decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiDataAnalyticsPage;