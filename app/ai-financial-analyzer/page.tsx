import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, Brain, DollarSign, BarChart, PieChart, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIFinancialAnalyzerPage: React.FC = () => {
  const features = [
    'Real-time market analysis',
    'AI-powered investment recommendations',
    'Risk assessment and portfolio optimization',
    'Automated financial reporting',
    'Fraud detection and prevention',
    'Predictive financial modeling',
    'Compliance monitoring',
    'Multi-currency support'
  ];

  const analysisTypes = [
    {
      title: 'Investment Analysis',
      description: 'AI-driven investment recommendations based on market trends, risk profiles, and financial goals.',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      features: ['Portfolio optimization', 'Risk assessment', 'Market predictions', 'ROI analysis']
    },
    {
      title: 'Fraud Detection',
      description: 'Advanced machine learning algorithms detect suspicious transactions and prevent financial fraud.',
      icon: <Brain className="w-6 h-6 text-red-500" />,
      features: ['Real-time monitoring', 'Pattern recognition', 'Anomaly detection', 'Alert system']
    },
    {
      title: 'Financial Reporting',
      description: 'Automated generation of comprehensive financial reports with AI-powered insights and recommendations.',
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      features: ['Automated reports', 'Custom dashboards', 'Trend analysis', 'Performance metrics']
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ensure regulatory compliance with automated monitoring and reporting for financial regulations.',
      icon: <PieChart className="w-6 h-6 text-purple-500" />,
      features: ['Regulatory compliance', 'Audit trails', 'Risk management', 'Policy enforcement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299/month',
      features: ['Basic analysis', 'Standard reports', 'Email support', 'Up to 5 portfolios'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      features: ['Advanced AI analysis', 'Custom reports', 'Priority support', 'Up to 25 portfolios', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      features: ['Full AI suite', 'Custom development', 'Dedicated support', 'Unlimited portfolios', 'White-label solution'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analysis with investment recommendations, fraud detection, and automated reporting. Make smarter financial decisions with AI." />
        <meta name="keywords" content="AI financial analysis, investment recommendations, fraud detection, financial reporting, portfolio optimization, risk assessment" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Make smarter financial decisions with AI-powered analysis, investment recommendations, and automated reporting. Transform your financial operations with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Financial Intelligence</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI-powered financial analysis and insights
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

      {/* Analysis Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Financial Analysis Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive financial intelligence across all aspects of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analysisTypes.map((analysis, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {analysis.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{analysis.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{analysis.description}</p>
                <ul className="space-y-2">
                  {analysis.features.map((feature, featureIndex) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your financial analysis needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
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
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
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
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Your Financial Operations</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI Financial Analyzer to make smarter financial decisions and maximize returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default AIFinancialAnalyzerPage;