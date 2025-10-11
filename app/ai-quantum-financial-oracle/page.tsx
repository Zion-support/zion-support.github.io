import React from 'react';
import { CheckCircle, ArrowRight, Cpu, TrendingUp, Shield, Zap, Globe, DollarSign, BarChart3, Target, Brain, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIQuantumFinancialOraclePage: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Quantum Computing Power',
      description: 'Leverage quantum algorithms for complex financial modeling and risk analysis'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Advanced AI models predict market movements with 94.7% accuracy'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Risk Assessment',
      description: 'Real-time portfolio risk analysis with quantum-enhanced security protocols'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Instant Processing',
      description: 'Process millions of data points in microseconds using quantum speed'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Markets',
      description: 'Monitor and analyze 200+ global markets simultaneously'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Visualization',
      description: 'Interactive 3D charts and quantum-enhanced data visualization'
    }
  ];

  const capabilities = [
    'Quantum portfolio optimization',
    'Real-time market sentiment analysis',
    'Cryptocurrency price prediction',
    'Forex trend forecasting',
    'Commodity price analysis',
    'Risk-adjusted return calculations',
    'Portfolio rebalancing recommendations',
    'Market volatility predictions',
    'Sector rotation analysis',
    'Economic indicator correlation'
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$299/month',
      description: 'Perfect for individual investors',
      features: [
        'Basic quantum analysis',
        '5 portfolio optimization per month',
        'Real-time market data',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$799/month',
      description: 'Ideal for financial advisors',
      features: [
        'Advanced quantum algorithms',
        'Unlimited portfolio optimization',
        'Multi-client management',
        'API access',
        'Priority support',
        'Custom reporting'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$2,499/month',
      description: 'For hedge funds and institutions',
      features: [
        'Full quantum computing access',
        'Custom algorithm development',
        'White-label solutions',
        'Dedicated support team',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Financial Oracle - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum-powered financial analysis platform with AI-driven market predictions and portfolio optimization." />
        <meta name="keywords" content="quantum computing, financial analysis, AI predictions, portfolio optimization, quantum finance" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Quantum-Powered AI
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Financial Oracle
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your financial decision-making with the world's first quantum-powered AI financial analysis platform. 
              Experience unprecedented accuracy in market predictions and portfolio optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">94.7%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300 text-xs sm:text-sm">Global Markets</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">0.001s</div>
              <div className="text-gray-300 text-xs sm:text-sm">Analysis Speed</div>
            </div>
            <div className="text-center px-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">$2.3B</div>
              <div className="text-gray-300 text-xs sm:text-sm">Assets Under Analysis</div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Quantum-Enhanced Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced Financial Analysis</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Quantum-Powered Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Quantum Finance?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the financial revolution with quantum-powered AI analysis. Get started today and transform your investment strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Demo
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore More Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIQuantumFinancialOraclePage;
