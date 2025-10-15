import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AISupplyChainOptimizerProPage: React.FC = () => {
  const features = [
    'Demand Forecasting',
    'Inventory Optimization',
    'Route Optimization',
    'Supplier Analysis',
    'Risk Assessment',
    'Cost Optimization',
    'Performance Monitoring',
    'Automated Reordering',
    'Quality Control',
    'Sustainability Tracking'
  ];

  const benefits = [
    'Reduced costs',
    'Improved efficiency',
    'Better inventory management',
    'Reduced waste',
    'Faster delivery',
    'Higher customer satisfaction'
  ];

  const useCases = [
    'Manufacturing',
    'Retail',
    'E-commerce',
    'Food & beverage',
    'Pharmaceuticals',
    'Automotive'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: 399,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 SKUs',
        'Basic demand forecasting',
        'Inventory optimization',
        'Email support',
        'Standard reports'
      ]
    },
    {
      name: 'Professional',
      price: 999,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1000 SKUs',
        'Advanced forecasting',
        'Route optimization',
        'Priority support',
        'Advanced analytics',
        'Multi-user access',
        'API integration',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 2499,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'AI-powered optimization',
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
        title="AI Supply Chain Optimizer Pro - Zion Tech Group"
        description="Advanced AI-powered supply chain optimization, demand forecasting, and logistics management for businesses. Reduce costs by 30% and improve efficiency by 50%."
        keywords="AI supply chain, supply chain optimization, demand forecasting, logistics AI, inventory optimization, supply chain management"
        canonicalUrl="https://ziontechgroup.com/ai-supply-chain-optimizer-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <TruckIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">AI Supply Chain Optimizer Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Supply Chain AI</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with AI-powered optimization, demand forecasting, and logistics management. 
                Reduce costs by 30% and improve efficiency by 50% with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                  <div className="text-gray-300">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                  <div className="text-gray-300">Waste Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
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
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Supply Chain AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your supply chain and maximize operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <TruckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature}</h3>
                  <p className="text-gray-400">
                    Advanced AI-powered {feature.toLowerCase()} with industry-leading accuracy and insights.
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
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Supply Chain Optimizer Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have optimized their supply chain with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-400">
                      Experience measurable improvements in your supply chain performance and operational efficiency.
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
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From manufacturing to retail, our AI optimizer adapts to your specific industry needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase}</h3>
                  <p className="text-gray-400">
                    Optimize your {useCase.toLowerCase()} supply chain with AI-powered insights and automation.
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
                Simple, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-purple-500 shadow-lg shadow-purple-500/25' : 'border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact?service=ai-supply-chain-optimizer-pro&plan=basic"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses who have already transformed their supply chain with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-supply-chain-optimizer-pro"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
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

export default AISupplyChainOptimizerProPage;