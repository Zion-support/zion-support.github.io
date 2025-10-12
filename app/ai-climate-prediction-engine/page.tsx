import React from 'react';
import { CheckCircle, ArrowRight, Cloud, BarChart3, Shield, Star, Zap, Brain, Target, Globe, TrendingUp, Leaf } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AIClimatePredictionEnginePage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Weather Prediction',
      description: 'Advanced AI models for accurate weather forecasting with extended range predictions and extreme weather alerts.',
      features: ['7-day forecasts', 'Extreme weather alerts', 'Precipitation modeling', 'Temperature predictions', 'Wind pattern analysis', 'Seasonal forecasting'],
      price: 'Starting at $199/month',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Climate Analytics',
      description: 'Comprehensive climate data analysis with long-term trend predictions and environmental impact assessment.',
      features: ['Climate trend analysis', 'Carbon footprint tracking', 'Environmental impact', 'Sustainability metrics', 'Emission predictions', 'Green energy optimization'],
      price: 'Starting at $299/month',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Risk Assessment',
      description: 'AI-powered climate risk assessment for businesses, agriculture, and infrastructure planning.',
      features: ['Disaster risk modeling', 'Crop yield predictions', 'Infrastructure vulnerability', 'Insurance risk scoring', 'Adaptation strategies', 'Resilience planning'],
      price: 'Starting at $399/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Accurate Predictions',
      description: 'Achieve 95% accuracy in weather and climate predictions with advanced AI models.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Risk Mitigation',
      description: 'Minimize climate-related risks with early warning systems and predictive analytics.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Sustainability',
      description: 'Optimize operations for environmental sustainability and carbon reduction.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce weather-related losses and optimize resource allocation with accurate predictions.'
    }
  ];

  const useCases = [
    {
      title: 'Agriculture',
      description: 'Optimize crop planning and irrigation with weather and climate predictions',
      icon: <Leaf className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Energy Sector',
      description: 'Optimize renewable energy production and grid management',
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Insurance',
      description: 'Assess climate risks and develop accurate pricing models',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Urban Planning',
      description: 'Design resilient cities with climate-adaptive infrastructure',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '95%', label: 'Prediction Accuracy' },
    { number: '30+', label: 'Climate Models' },
    { number: '100+', label: 'Data Sources' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const pricing = [
    {
      plan: 'Research',
      price: '$199',
      period: '/month',
      description: 'Perfect for academic research and small organizations',
      features: ['Basic weather predictions', 'Climate data access', 'Standard reports', 'Email support', 'API access', 'Basic analytics'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for businesses and government agencies',
      features: ['Advanced predictions', 'Risk assessment', 'Custom models', 'Priority support', 'White-label options', 'Custom integrations'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations and critical infrastructure',
      features: ['Full AI suite', 'Custom development', 'Dedicated support', 'On-premise deployment', 'Advanced security', 'SLA guarantees'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Climate Prediction Engine - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered climate prediction engine. Accurate weather forecasting, climate analytics, and risk assessment for sustainable business operations." />
        <meta name="keywords" content="AI climate prediction, weather forecasting, climate analytics, environmental AI, sustainability technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Climate Prediction Engine
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of AI for accurate climate predictions and environmental insights. 
              Make data-driven decisions for sustainability, risk management, and resource optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
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
              Advanced Climate AI Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to predict and adapt to climate changes with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{feature.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI climate prediction engine adapts to your industry and environmental needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
              Why Choose Our AI Climate Prediction Engine?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of climate intelligence with advanced AI technology.
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start free and scale as your climate prediction needs grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Predict the Future of Climate?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join leading organizations using AI to build a more sustainable and resilient future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Cloud className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}