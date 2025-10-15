'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HomeIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  TrendingUpIcon
} from '@heroicons/react/24/outline';

const AIRealEstateAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: HomeIcon,
      title: 'Property Valuation',
      description: 'AI-powered property valuation with 94.7% accuracy using market data and comparable sales',
      benefits: ['Instant property valuations', 'Market trend analysis', 'Investment potential scoring']
    },
    {
      icon: ChartBarIcon,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis with predictive analytics and trend forecasting',
      benefits: ['Price trend predictions', 'Market timing insights', 'Neighborhood analysis']
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Investment Analysis',
      description: 'ROI calculations, cash flow projections, and investment opportunity scoring',
      benefits: ['ROI calculations', 'Cash flow projections', 'Risk assessment']
    },
    {
      icon: MapPinIcon,
      title: 'Location Intelligence',
      description: 'Advanced location analysis including amenities, schools, transportation, and future development',
      benefits: ['Amenity scoring', 'School district analysis', 'Transportation access']
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Investor',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual real estate investors and agents',
      features: [
        'Up to 50 property analyses/month',
        'Basic market analysis',
        'Property valuation reports',
        'Email support',
        'Mobile app access',
        'Basic analytics',
        'Market alerts'
      ],
      popular: false
    },
    {
      name: 'Real Estate Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for real estate agents, brokers, and small teams',
      features: [
        'Up to 200 property analyses/month',
        'Advanced market analysis',
        'Comprehensive reports',
        'Priority support',
        'Team collaboration',
        'Advanced analytics',
        'API access',
        'Custom branding',
        'Client presentations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large real estate companies and investment firms',
      features: [
        'Unlimited property analyses',
        'Full AI analysis suite',
        'Custom market models',
        '24/7 dedicated support',
        'Enterprise analytics',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Data export tools'
      ],
      popular: false
    }
  ];

  const propertyTypes = [
    'Single Family Homes', 'Condos', 'Townhouses', 'Multi-Family', 'Commercial',
    'Industrial', 'Land', 'Rental Properties', 'Fix & Flip', 'Luxury Homes'
  ];

  const useCases = [
    {
      title: 'Property Investment',
      description: 'Analyze investment opportunities and calculate potential returns',
      icon: TrendingUpIcon,
      impact: 'Increase ROI by 35%'
    },
    {
      title: 'Market Timing',
      description: 'Identify the best times to buy or sell properties',
      icon: ClockIcon,
      impact: 'Optimize timing by 40%'
    },
    {
      title: 'Portfolio Management',
      description: 'Manage and optimize real estate investment portfolios',
      icon: BuildingOfficeIcon,
      impact: 'Improve portfolio performance by 25%'
    },
    {
      title: 'Client Presentations',
      description: 'Create compelling presentations for clients and investors',
      icon: LightBulbIcon,
      impact: 'Close deals 30% faster'
    }
  ];

  const marketMetrics = [
    { metric: '94.7%', label: 'Valuation Accuracy' },
    { metric: '35%', label: 'ROI Improvement' },
    { metric: '50M+', label: 'Properties Analyzed' },
    { metric: '24/7', label: 'Market Monitoring' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Real Estate Analyzer Pro - Advanced Property Analysis AI | Zion Tech Group"
        description="Transform real estate investing with our AI-powered property analyzer. Market analysis, property valuation, investment insights, and location intelligence. Starting at $199/month."
        keywords="AI real estate analyzer, property valuation, real estate AI, market analysis, investment analysis, property investment, real estate technology, property intelligence"
        canonicalUrl="https://ziontechgroup.com/ai-real-estate-analyzer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI Real Estate Analyzer Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize real estate investing with AI-powered property analysis, market intelligence, and investment insights. 
                <br className="hidden sm:block" />
                <span className="text-emerald-400 font-semibold">Increase ROI by 35% and make smarter investment decisions with 94.7% accuracy</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-emerald-400 text-emerald-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-emerald-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                {marketMetrics.map((metric, index) => (
                  <div key={index} 
                    className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">{metric.metric}</div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Analysis Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI technology designed specifically for real estate professionals to make smarter investment decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Types Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                All Property <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Types</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI analyzer supports all types of real estate properties with specialized analysis for each category.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {propertyTypes.map((type, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 text-center"
                >
                  <div className="text-sm font-medium text-gray-300 group-hover:text-teal-300 transition-colors">
                    {type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Real-World <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how real estate professionals are using our AI analyzer to make better investment decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transparent <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your real estate business. All plans include core AI analysis features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-emerald-500 shadow-emerald-500/20' 
                      : 'border-slate-700 hover:border-emerald-500 hover:shadow-emerald-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                        : 'border-2 border-emerald-500 text-emerald-300 hover:bg-emerald-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Transform Real Estate?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals who are already using AI to make smarter investment decisions.
              <br className="hidden sm:block" />
              <span className="text-emerald-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-emerald-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;