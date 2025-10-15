'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  TruckIcon, 
  ChartBarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: TruckIcon,
      title: 'Demand Forecasting',
      description: 'AI-powered demand forecasting with 94.2% accuracy using machine learning and real-time market data.',
      benefit: 'Reduce stockouts by 65%'
    },
    {
      icon: ChartBarIcon,
      title: 'Inventory Optimization',
      description: 'Intelligent inventory management with automated reorder points and optimal stock level calculations.',
      benefit: 'Reduce carrying costs by 40%'
    },
    {
      icon: CogIcon,
      title: 'Route Optimization',
      description: 'Advanced logistics optimization for delivery routes, warehouse operations, and transportation planning.',
      benefit: 'Cut logistics costs by 30%'
    },
    {
      icon: GlobeAltIcon,
      title: 'Supplier Management',
      description: 'Comprehensive supplier performance tracking with risk assessment and alternative sourcing recommendations.',
      benefit: 'Improve supplier reliability'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Warehouse Automation',
      description: 'AI-driven warehouse optimization with automated picking, packing, and inventory management.',
      benefit: 'Increase efficiency by 50%'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies for supply chain disruptions and market volatility.',
      benefit: 'Minimize supply chain risks'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$399',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Inventory optimization',
        'Email support',
        'Standard reporting',
        'Basic route optimization',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Ideal for large enterprises and manufacturers',
      features: [
        'Up to 25 warehouses',
        'Advanced demand forecasting',
        'Full inventory optimization',
        'Priority support',
        'Advanced analytics',
        'Complete route optimization',
        'Supplier management',
        'Risk assessment',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Global Corporation',
      price: '$2,499',
      period: '/month',
      description: 'For multinational corporations',
      features: [
        'Unlimited warehouses',
        'Enterprise demand forecasting',
        'Global supply chain optimization',
        '24/7 dedicated support',
        'Custom analytics dashboard',
        'Multi-modal transportation',
        'Advanced supplier network',
        'Custom training & onboarding',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Supply Chain Director, Global Manufacturing Inc.',
      content: 'Zion AI Supply Chain Optimizer has reduced our inventory costs by 40% while improving delivery times. The ROI was immediate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, Retail Chain',
      content: 'The demand forecasting is incredibly accurate. We\'ve eliminated stockouts and reduced waste significantly.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Logistics Coordinator, E-commerce Company',
      content: 'Route optimization has saved us thousands in fuel costs. The system learns and improves continuously.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Supply Chain Optimizer - Zion Tech Group"
        description="Advanced AI-powered supply chain optimization platform with demand forecasting, inventory management, and logistics optimization. Reduce costs by 40% with 94.2% accuracy."
        keywords="AI supply chain optimizer, demand forecasting, inventory optimization, logistics optimization, supply chain management, warehouse automation, supplier management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
                <TruckIcon className="w-4 h-4 mr-2" />
                AI-Powered Supply Chain Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Supply Chain Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Optimize your entire supply chain with AI-powered demand forecasting, inventory management, and logistics optimization. 
                Reduce costs by 40% while improving efficiency and customer satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">94.2%</div>
                  <div className="text-gray-300">Forecasting Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">65%</div>
                  <div className="text-gray-300">Fewer Stockouts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Supply Chain AI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end AI-powered supply chain optimization tools designed to maximize efficiency and minimize costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-400 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Scalable <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your supply chain complexity. All plans include our core AI optimization features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Supply Chain Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what supply chain professionals are saying about our AI Supply Chain Optimizer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of supply chain professionals who trust Zion AI Supply Chain Optimizer for better efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;