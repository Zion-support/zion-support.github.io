import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Brain, Target, Zap, Shield } from 'lucide-react';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive business intelligence with live data visualization and interactive dashboards.',
      benefits: ['Instant insights', 'Customizable views', 'Mobile responsive', 'Real-time updates']
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning models for forecasting sales, demand, and market trends.',
      benefits: ['95% accuracy rate', 'Automated forecasting', 'Risk assessment', 'Trend analysis']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Intelligent recommendations to optimize business processes and increase efficiency.',
      benefits: ['Process improvement', 'Cost reduction', 'Revenue optimization', 'Resource allocation']
    },
    {
      icon: Target,
      title: 'Goal Tracking & KPIs',
      description: 'Automated tracking of key performance indicators with intelligent alerts and recommendations.',
      benefits: ['Automated reporting', 'Smart alerts', 'Goal setting', 'Progress monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,299',
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Monthly reports',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 data sources',
        'Advanced AI predictions',
        'Real-time dashboards',
        'Custom reports',
        'Priority support',
        'API access',
        'Advanced integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Retail Analytics',
      description: 'Optimize inventory, predict demand, and increase sales with AI-powered retail analytics.',
      icon: '🛒',
      results: ['25% increase in sales', '40% reduction in stockouts', '30% improvement in inventory turnover']
    },
    {
      title: 'Financial Services',
      description: 'Advanced risk assessment, fraud detection, and portfolio optimization for financial institutions.',
      icon: '💰',
      results: ['60% reduction in fraud', '35% improvement in risk assessment', '20% increase in portfolio returns']
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization for manufacturing operations.',
      icon: '🏭',
      results: ['50% reduction in downtime', '25% improvement in quality', '30% cost savings']
    },
    {
      title: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and operational efficiency for healthcare providers.',
      icon: '🏥',
      results: ['40% improvement in patient outcomes', '35% reduction in costs', '50% faster diagnosis']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence solutions. Real-time analytics, predictive insights, and automated reporting for data-driven decisions." />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, business intelligence, data visualization, machine learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Business Intelligence
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI-powered business intelligence platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI-Driven Features
              </h2>
              <p className="text-xl text-gray-600">
                Leverage cutting-edge artificial intelligence to unlock insights from your data
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-600">
                See how our AI business intelligence solutions transform different industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-600">
                        <Star className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {plan.price}
                      {plan.period !== 'pricing' && <span className="text-lg text-gray-500">/{plan.period}</span>}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our AI experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBusinessIntelligencePage;