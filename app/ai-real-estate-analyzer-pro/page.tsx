import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIRealEstateAnalyzerProPage: React.FC = () => {
  const features = [
    'Property Valuation',
    'Market Analysis',
    'Investment Scoring',
    'Rental Yield Prediction',
    'Neighborhood Analysis',
    'Price Trend Forecasting',
    'Risk Assessment',
    'Portfolio Optimization',
    'Market Timing',
    'Investment Recommendations'
  ];

  const benefits = [
    'Data-driven decisions',
    'Reduced investment risk',
    'Higher ROI potential',
    'Market insights',
    'Time savings',
    'Competitive advantage'
  ];

  const useCases = [
    'Property investment',
    'Real estate development',
    'Portfolio management',
    'Market research',
    'Investment banking',
    'Property management'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 199,
      period: 'month',
      description: 'Perfect for individual investors',
      features: [
        'Up to 50 property analyses/month',
        'Basic market data',
        'Property valuation',
        'Email support',
        'Standard reports'
      ]
    },
    {
      name: 'Professional',
      price: 499,
      period: 'month',
      description: 'Ideal for real estate professionals',
      features: [
        'Up to 200 property analyses/month',
        'Advanced market analysis',
        'Investment scoring',
        'Priority support',
        'Advanced analytics',
        'Multi-user access',
        'API integration',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      description: 'For large firms and institutions',
      features: [
        'Unlimited analyses',
        'Premium market data',
        'Custom AI models',
        '24/7 phone support',
        'Comprehensive analytics',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Real Estate Analyzer Pro - Zion Tech Group"
        description="Comprehensive AI-powered real estate market analysis, property valuation, and investment opportunity identification. Make data-driven real estate decisions with 95% accuracy."
        keywords="AI real estate, property analysis, real estate AI, investment analysis, property valuation, market analysis, real estate technology"
        canonicalUrl="https://ziontechgroup.com/ai-real-estate-analyzer-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <HomeIcon className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">AI Real Estate Analyzer Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Real Estate AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your real estate investments with AI-powered market analysis, property valuation, and investment insights. 
                Make data-driven decisions with 95% accuracy and maximize your ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                  <div className="text-gray-300">Higher ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">60%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">Market Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Comprehensive <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Real Estate AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make informed real estate investment decisions and maximize your returns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <HomeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature}</h3>
                  <p className="text-gray-400">
                    Advanced AI-powered {feature.toLowerCase()} with market-leading accuracy and insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">AI Real Estate Analyzer Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of real estate professionals who have enhanced their investment strategies with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-400">
                      Experience measurable improvements in your real estate investment performance and decision-making.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Perfect for <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Every Real Estate Professional</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From individual investors to large real estate firms, our AI analyzer adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase}</h3>
                  <p className="text-gray-400">
                    Enhance your {useCase.toLowerCase()} capabilities with AI-powered market analysis and insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple, <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your real estate business. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-orange-500 shadow-lg shadow-orange-500/25' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact?service=ai-real-estate-analyzer-pro&plan=basic"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                        : 'border border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals who have already revolutionized their investment strategies with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-real-estate-analyzer-pro"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerProPage;