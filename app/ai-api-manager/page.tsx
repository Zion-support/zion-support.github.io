import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Settings, Cpu, Database, Monitor } from 'lucide-react';
=======
import { Brain, Shield, Zap, BarChart, Globe, Settings, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      title: 'API Configuration',
      description: 'Easy configuration and management of AI APIs.',
      benefits: ['Simple Setup', 'Flexible Configuration', 'Environment Management', 'Version Control'],
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'AI Processing',
      description: 'High-performance AI processing and inference.',
      benefits: ['GPU Acceleration', 'Batch Processing', 'Real-time Inference', 'Model Optimization'],
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Data Management',
      description: 'Efficient data storage and retrieval for AI operations.',
      benefits: ['Vector Databases', 'Data Pipelines', 'Caching Layer', 'Data Security'],
      icon: <Database className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and performance analytics.',
      benefits: ['Real-time Metrics', 'Performance Tracking', 'Error Monitoring', 'Usage Analytics'],
      icon: <Monitor className="w-8 h-8 text-orange-400" />
=======
const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered API Management',
      description: 'Intelligent API routing, load balancing, and optimization using advanced AI algorithms.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including authentication, authorization, and threat detection.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast API responses with intelligent caching and optimization strategies.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics, performance monitoring, and detailed insights for optimization.'
    },
    {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Worldwide API distribution with edge computing for optimal performance.'
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple setup and configuration with intuitive management dashboard.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 10 APIs',
        'Basic AI optimization',
        'Standard security',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        'Up to 50 APIs',
        'Advanced AI features',
        'Enhanced security',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited APIs',
        'Full AI suite',
        'Enterprise security',
        '24/7 support',
        'Custom analytics',
        'Dedicated account manager'
      ]
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional AI API manager solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI API manager solutions for modern businesses. 
              Manage and optimize your AI APIs with ease.
=======
        <meta name="description" content="Advanced AI-powered API management solutions for modern businesses." />
        <meta name="keywords" content="API management, AI, microservices, cloud, enterprise" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your API infrastructure with intelligent management, 
              advanced security, and AI-driven optimization.
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Demo
              </button>
            </div>
          </div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
=======
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className="text-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
=======
          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your API Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI-powered API management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
    </>
  );
};

<<<<<<< HEAD
export default AIApiManagerPage;
=======
export default AIAPIManagerPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-9171
