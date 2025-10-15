import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AISalesPredictorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sales Predictor Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sales forecasting and revenue prediction platform with machine learning algorithms. Predict sales with 95% accuracy." />
        <meta name="keywords" content="AI sales prediction, sales forecasting, revenue prediction, machine learning, business intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-6">📈</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                AI Sales Predictor <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered sales forecasting and revenue prediction platform with machine learning algorithms. 
                Predict sales with 95% accuracy and optimize your revenue strategy.
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced machine learning algorithms to predict sales trends and optimize your revenue strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Sales Forecasting',
                  description: 'Predict future sales with 95% accuracy using advanced ML algorithms'
                },
                {
                  icon: '💰',
                  title: 'Revenue Prediction',
                  description: 'Forecast revenue streams and identify growth opportunities'
                },
                {
                  icon: '👥',
                  title: 'Customer Behavior Analysis',
                  description: 'Understand customer patterns and buying behaviors'
                },
                {
                  icon: '📊',
                  title: 'Market Trend Analysis',
                  description: 'Analyze market trends and competitive landscape'
                },
                {
                  icon: '⭐',
                  title: 'Lead Scoring',
                  description: 'Score and prioritize leads based on conversion probability'
                },
                {
                  icon: '🔄',
                  title: 'Pipeline Management',
                  description: 'Track and optimize your sales pipeline in real-time'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs and scale as you grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Basic',
                  price: '$199',
                  period: '/month',
                  features: [
                    'Up to 1,000 predictions/month',
                    'Basic forecasting models',
                    'Email support',
                    'Standard accuracy (90%)',
                    'Basic analytics dashboard'
                  ]
                },
                {
                  name: 'Pro',
                  price: '$499',
                  period: '/month',
                  features: [
                    'Up to 10,000 predictions/month',
                    'Advanced ML models',
                    'Priority support',
                    'High accuracy (95%)',
                    'Advanced analytics',
                    'Custom integrations',
                    'API access'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$1,299',
                  period: '/month',
                  features: [
                    'Unlimited predictions',
                    'Custom ML models',
                    '24/7 dedicated support',
                    'Maximum accuracy (98%)',
                    'Full analytics suite',
                    'White-label solution',
                    'Custom development',
                    'SLA guarantee'
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500' 
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+13024640950"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Predict Your Sales Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using our AI Sales Predictor to optimize their revenue strategy. 
                Contact us today for a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISalesPredictorPage;