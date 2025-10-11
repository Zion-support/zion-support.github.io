import React from 'react';
import { CheckCircle, ArrowRight, ShoppingCart, Brain, TrendingUp, DollarSign, Star, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIEcommerceOptimizerPage: React.FC = () => {
  const features = [
    'AI-powered product recommendations',
    'Dynamic pricing optimization',
    'Customer behavior analysis',
    'Inventory management automation',
    'Personalized shopping experiences',
    'Conversion rate optimization',
    'Fraud detection and prevention',
    'Real-time analytics dashboard'
  ];

  const optimizationModules = [
    {
      title: 'Product Recommendations',
      description: 'Increase sales with AI-powered product recommendations based on customer behavior and preferences.',
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />,
      features: ['Personalized suggestions', 'Cross-selling optimization', 'Upselling strategies', 'A/B testing']
    },
    {
      title: 'Pricing Optimization',
      description: 'Maximize revenue with dynamic pricing strategies powered by AI and market analysis.',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      features: ['Dynamic pricing', 'Competitor analysis', 'Demand forecasting', 'Profit optimization']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand your customers better with AI-driven insights and behavioral analysis.',
      icon: <Users className="w-6 h-6 text-purple-500" />,
      features: ['Customer segmentation', 'Behavioral analysis', 'Lifetime value prediction', 'Churn prevention']
    },
    {
      title: 'Conversion Optimization',
      description: 'Boost your conversion rates with AI-powered website optimization and testing.',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      features: ['A/B testing automation', 'Landing page optimization', 'Checkout optimization', 'Performance tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      features: ['Up to 1,000 products', 'Basic recommendations', 'Email support', 'Standard analytics'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      features: ['Up to 10,000 products', 'Advanced AI features', 'Priority support', 'Custom integrations', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499/month',
      features: ['Unlimited products', 'Full AI suite', 'Dedicated support', 'Custom development', 'White-label solution'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI E-commerce Optimizer - Zion Tech Group</title>
        <meta name="description" content="Boost your e-commerce sales with AI-powered optimization including product recommendations, dynamic pricing, and customer analytics. Increase conversions by up to 40%." />
        <meta name="keywords" content="AI e-commerce, product recommendations, dynamic pricing, conversion optimization, customer analytics, online retail" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full mb-6">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI E-commerce Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Boost your e-commerce sales by up to 40% with AI-powered optimization. From product recommendations to dynamic pricing, transform your online store with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-commerce Intelligence Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered optimization for your online store
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Optimization Modules</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive e-commerce optimization across all touchpoints
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationModules.map((module, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {module.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-commerce Optimization Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scale your e-commerce business with AI-powered optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
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
                  to="/contact" 
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white hover:from-orange-700 hover:to-pink-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Boost Your E-commerce Sales Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of online stores using AI E-commerce Optimizer to increase sales and improve customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEcommerceOptimizerPage;