'use client';
import React from 'react';
import { Database, Brain, BarChart3, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Settings, Globe, Cpu, Cloud, Lock, Eye, Activity, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Advanced Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
      benefits: ['Real-time processing', 'Scalable infrastructure', 'Data validation', 'Error handling']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data',
      benefits: ['Custom training', 'Model optimization', 'A/B testing', 'Performance monitoring']
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Beautiful, responsive dashboards for all devices',
      benefits: ['Responsive design', 'Custom widgets', 'Real-time updates', 'Export capabilities']
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'AI-powered predictions and recommendations',
      benefits: ['Predictive modeling', 'Trend analysis', 'Recommendation engine', 'Forecasting']
    }
  ];

  const capabilities = [
    {
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources and formats',
      icon: Database,
      features: ['API integrations', 'Data connectors', 'ETL processes', 'Real-time sync']
    },
    {
      title: 'Advanced Analytics',
      description: 'Sophisticated analytics with machine learning and AI',
      icon: Brain,
      features: ['Statistical analysis', 'ML algorithms', 'Pattern recognition', 'Anomaly detection']
    },
    {
      title: 'Visualization',
      description: 'Create stunning visualizations and interactive reports',
      icon: BarChart3,
      features: ['Interactive charts', 'Custom dashboards', 'Report generation', 'Data storytelling']
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
      icon: Target,
      features: ['KPI tracking', 'Performance metrics', 'Trend analysis', 'Strategic planning']
    }
  ];

  const benefits = [
    'Increase data processing speed by 10x',
    'Improve decision-making accuracy by 85%',
    'Reduce analysis time by 70%',
    'Enable real-time insights',
    'Scale analytics operations',
    'Drive business growth'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic analytics',
        'Up to 1M data points/month',
        'Email support',
        'Standard dashboards',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI features',
        'Unlimited data points',
        'Priority support',
        'Custom dashboards',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Data Analytics
                <span className="block text-blue-200">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered analytics solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI capabilities for data analysis and insights
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Analytics Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Data Analytics?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven results that transform your data into business value
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing for data analytics solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your AI-powered data analytics journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIDataAnalyticsPage;