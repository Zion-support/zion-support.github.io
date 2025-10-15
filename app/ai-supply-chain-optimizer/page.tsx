'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  TruckIcon, 
  ChartBarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  TrendingUpIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: TruckIcon,
      title: 'Logistics Optimization',
      description: 'AI-powered route optimization and delivery scheduling to reduce costs and improve efficiency',
      benefits: ['Reduce delivery costs by 25%', 'Optimize routes automatically', 'Real-time tracking']
    },
    {
      icon: ChartBarIcon,
      title: 'Demand Forecasting',
      description: 'Advanced demand prediction using machine learning to optimize inventory levels',
      benefits: ['95% forecast accuracy', 'Reduce stockouts by 60%', 'Optimize inventory levels']
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Automate supply chain processes from procurement to delivery with intelligent workflows',
      benefits: ['Automate 80% of processes', 'Reduce manual errors', 'Improve efficiency']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Identify and mitigate supply chain risks with predictive analytics and monitoring',
      benefits: ['Early risk detection', 'Disruption prevention', 'Contingency planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100 SKUs',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Basic analytics',
        'Inventory management',
        'Supplier tracking'
      ],
      popular: false
    },
    {
      name: 'Mid-Market',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing companies and mid-market businesses',
      features: [
        'Up to 1,000 SKUs',
        'Advanced forecasting',
        'Full optimization suite',
        'Priority support',
        'Advanced analytics',
        'API integration',
        'Team collaboration',
        'Custom workflows',
        'Risk monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive solution for large enterprises and global companies',
      features: [
        'Unlimited SKUs',
        'Full AI optimization suite',
        'Custom models',
        '24/7 dedicated support',
        'Enterprise analytics',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Global deployment'
      ],
      popular: false
    }
  ];

  const industries = [
    'Manufacturing', 'Retail', 'E-commerce', 'Healthcare', 'Automotive',
    'Food & Beverage', 'Pharmaceuticals', 'Electronics', 'Fashion', 'Logistics'
  ];

  const useCases = [
    {
      title: 'Inventory Optimization',
      description: 'Optimize inventory levels to reduce costs while maintaining service levels',
      icon: ChartBarIcon,
      impact: 'Reduce inventory costs by 30%'
    },
    {
      title: 'Route Optimization',
      description: 'Optimize delivery routes to reduce fuel costs and improve delivery times',
      icon: TruckIcon,
      impact: 'Reduce delivery costs by 25%'
    },
    {
      title: 'Supplier Management',
      description: 'Optimize supplier relationships and manage procurement processes',
      icon: BuildingOfficeIcon,
      impact: 'Improve supplier performance by 40%'
    },
    {
      title: 'Demand Planning',
      description: 'Accurate demand forecasting to prevent stockouts and overstocking',
      icon: TrendingUpIcon,
      impact: 'Reduce stockouts by 60%'
    }
  ];

  const metrics = [
    { metric: '30%', label: 'Cost Reduction' },
    { metric: '95%', label: 'Forecast Accuracy' },
    { metric: '60%', label: 'Stockout Reduction' },
    { metric: '25%', label: 'Delivery Cost Savings' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Supply Chain Optimizer Pro - Advanced Supply Chain AI | Zion Tech Group"
        description="Transform supply chain operations with our AI-powered optimizer. Demand forecasting, logistics optimization, inventory management, and risk mitigation. Starting at $399/month."
        keywords="AI supply chain optimizer, supply chain AI, logistics optimization, demand forecasting, inventory management, supply chain automation, procurement optimization"
        canonicalUrl="https://ziontechgroup.com/ai-supply-chain-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI Supply Chain Optimizer Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize supply chain operations with AI-powered optimization, demand forecasting, and logistics intelligence. 
                <br className="hidden sm:block" />
                <span className="text-blue-400 font-semibold">Reduce costs by 30% and improve efficiency by 40% with 95% forecast accuracy</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-blue-400 text-blue-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-blue-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                {metrics.map((metric, index) => (
                  <div key={index} 
                    className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{metric.metric}</div>
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
                Advanced <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Optimization Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI technology designed specifically for supply chain professionals to optimize operations and reduce costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors">
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

        {/* Industries Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Industry <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI optimizer is designed to work across all industries with specialized models for each sector.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 text-center"
                >
                  <div className="text-sm font-medium text-gray-300 group-hover:text-indigo-300 transition-colors">
                    {industry}
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
                See how supply chain professionals are using our AI optimizer to improve operations and reduce costs.
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
                Choose the perfect plan for your supply chain needs. All plans include core AI optimization features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-blue-500 shadow-blue-500/20' 
                      : 'border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-blue-400">{plan.price}</span>
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                        : 'border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white'
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of supply chain professionals who are already using AI to optimize operations and reduce costs.
              <br className="hidden sm:block" />
              <span className="text-blue-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-blue-500/25"
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

export default AISupplyChainOptimizerPage;