import React from 'react';
import { CheckCircle, ArrowRight, Home, TrendingUp, MapPin, DollarSign, BarChart3, Zap, Target, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIRealEstateAnalyzerPage: React.FC = () => {
  const features = [
    'AI-powered property valuation and market analysis',
    'Neighborhood trend analysis and growth predictions',
    'Rental yield calculations and cash flow projections',
    'Investment opportunity scoring and recommendations',
    'Market price predictions and timing analysis',
    'Property condition assessment using AI image analysis',
    'Comparative market analysis (CMA) automation',
    'Risk assessment and investment viability scoring',
    'Portfolio optimization and diversification recommendations',
    'Real-time market alerts and opportunity notifications'
  ];

  const analysisTypes = [
    {
      name: 'Investment Analysis',
      description: 'Comprehensive ROI calculations, cash flow projections, and investment viability scoring',
      features: ['ROI calculations', 'Cash flow analysis', 'Cap rate analysis', 'Break-even analysis'],
      price: '$29/analysis'
    },
    {
      name: 'Market Valuation',
      description: 'AI-powered property valuation using comparable sales and market trends',
      features: ['Automated valuation model', 'Comparable sales analysis', 'Market trend analysis', 'Price predictions'],
      price: '$19/valuation'
    },
    {
      name: 'Rental Analysis',
      description: 'Rental yield calculations and market rent predictions for investment properties',
      features: ['Rental yield calculations', 'Market rent analysis', 'Vacancy rate predictions', 'Rent growth projections'],
      price: '$24/analysis'
    },
    {
      name: 'Portfolio Review',
      description: 'Complete portfolio analysis with optimization recommendations',
      features: ['Portfolio performance', 'Diversification analysis', 'Risk assessment', 'Optimization recommendations'],
      price: '$99/portfolio'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        '10 property analyses per month',
        'Basic market data',
        'Email support',
        'Standard reports',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        'Unlimited property analyses',
        'Advanced market data',
        'Priority support',
        'Detailed reports',
        'API access',
        'Portfolio tracking',
        'Market alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      features: [
        'Unlimited property analyses',
        'Premium market data',
        'White-label solution',
        'Custom reports',
        'Dedicated account manager',
        'Advanced analytics',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate' },
    { number: '50,000+', label: 'Properties Analyzed' },
    { number: '500+', label: 'Markets Covered' },
    { number: '24/7', label: 'Market Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Real Estate Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered real estate analysis tool for property valuation, investment analysis, and market predictions. Make smarter real estate decisions with AI." />
        <meta name="keywords" content="AI real estate, property analysis, real estate AI, property valuation, investment analysis, real estate technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Real Estate Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Make smarter real estate investment decisions with our AI-powered analysis platform. 
              Get accurate property valuations, market predictions, and investment recommendations powered by machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis Types */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Analysis Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analysisTypes.map((analysis, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{analysis.name}</h3>
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {analysis.price}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{analysis.description}</p>
                  <ul className="space-y-2">
                    {analysis.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Input Property Details</h3>
                <p className="text-gray-300">Enter property address, specifications, and your investment criteria for comprehensive analysis.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Analysis</h3>
                <p className="text-gray-300">Our AI analyzes market data, comparable properties, and trends to provide accurate insights.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Get Insights</h3>
                <p className="text-gray-300">Receive detailed reports with valuations, investment recommendations, and market predictions.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Real Estate Analyzer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Higher Returns</h3>
                <p className="text-gray-300">AI-identified properties achieve 20-30% higher returns compared to traditional analysis methods.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Save Time & Money</h3>
                <p className="text-gray-300">Reduce analysis time from days to minutes and avoid costly investment mistakes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data-Driven Decisions</h3>
                <p className="text-gray-300">Make investment decisions based on comprehensive data analysis and market predictions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Market Coverage</h3>
                <p className="text-gray-300">Access analysis for 500+ markets across the US with real-time data updates.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Make Smarter Real Estate Investments?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of investors using AI to identify profitable real estate opportunities and maximize returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
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

export default AIRealEstateAnalyzerPage;