import React from 'react';
import { CheckCircle, ArrowRight, Leaf, Cloud, Zap, Globe, Star, Users, Clock, DollarSign, Activity, Target, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIClimateSolutionsProPage() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'Carbon Footprint Tracking',
      description: 'AI-powered carbon footprint monitoring and reduction recommendations for individuals and businesses.',
      features: ['Real-time tracking', 'Automated data collection', 'Reduction recommendations', 'Goal setting', 'Progress monitoring', 'Sustainability reports'],
      price: 'Starting at $29/month',
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Climate Risk Assessment',
      description: 'Predict and assess climate risks for businesses and investments using advanced AI models.',
      features: ['Risk prediction', 'Impact analysis', 'Adaptation strategies', 'Investment recommendations', 'Insurance optimization', 'Regulatory compliance'],
      price: 'Starting at $99/month',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Renewable Energy Optimization',
      description: 'Optimize renewable energy systems and predict energy production using AI algorithms.',
      features: ['Energy forecasting', 'Grid optimization', 'Battery management', 'Cost optimization', 'Performance monitoring', 'Maintenance scheduling'],
      price: 'Starting at $79/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Environmental Impact',
      description: 'Make data-driven decisions to reduce your environmental footprint and contribute to sustainability.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce energy costs and optimize resource usage with AI-powered recommendations.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Compliance',
      description: 'Stay compliant with environmental regulations and sustainability standards.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Future-Proofing',
      description: 'Prepare for climate change impacts and build resilience in your operations.'
    }
  ];

  const applications = [
    {
      title: 'Corporate Sustainability',
      description: 'Track and reduce corporate carbon footprint with AI-powered insights',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Real Estate',
      description: 'Assess climate risks and optimize building energy efficiency',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Agriculture',
      description: 'Optimize farming practices for climate resilience and sustainability',
      icon: <Leaf className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Financial Services',
      description: 'Assess climate risks in investment portfolios and lending',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '1M+', label: 'Tons CO2 Tracked' },
    { number: '25%', label: 'Average Reduction' },
    { number: '500+', label: 'Companies Served' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const pricing = [
    {
      plan: 'Individual',
      price: '$29',
      period: '/month',
      description: 'For personal carbon footprint tracking',
      features: ['Personal tracking', 'Basic recommendations', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      plan: 'Business',
      price: '$99',
      period: '/month',
      description: 'For small to medium businesses',
      features: ['Team tracking', 'Advanced analytics', 'API access', 'Priority support'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited tracking', 'Custom integrations', 'Dedicated support', 'White-label options'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered climate solutions for carbon tracking, risk assessment, and renewable energy optimization. Help combat climate change with intelligent technology." />
        <meta name="keywords" content="AI climate solutions, carbon tracking, climate risk, renewable energy, sustainability, environmental AI" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Climate Solutions Pro
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Combat climate change with AI-powered solutions for carbon tracking, climate risk assessment, 
              and renewable energy optimization. Make data-driven decisions for a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Climate Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to help you understand, track, and reduce your environmental impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI climate solutions are used across various industries to drive sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{application.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Climate Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make a positive impact on the environment while improving your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Climate Solutions Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your sustainability goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Climate Impact?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join thousands of individuals and businesses using AI to combat climate change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}