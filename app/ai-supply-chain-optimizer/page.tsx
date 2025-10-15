'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CogIcon, 
  TruckIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Demand Forecasting',
      description: 'AI-powered demand forecasting using historical data, market trends, and external factors.',
      benefits: ['95% forecast accuracy', 'Multi-factor analysis', 'Seasonal adjustments']
    },
    {
      icon: TruckIcon,
      title: 'Logistics Optimization',
      description: 'Optimize shipping routes, warehouse locations, and delivery schedules for maximum efficiency.',
      benefits: ['Route optimization', 'Cost reduction', 'Delivery time improvement']
    },
    {
      icon: GlobeAltIcon,
      title: 'Inventory Management',
      description: 'Smart inventory management with automated reorder points and safety stock calculations.',
      benefits: ['Automated reordering', 'Safety stock optimization', 'Reduced stockouts']
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting to track supply chain performance and identify improvements.',
      benefits: ['Real-time monitoring', 'Performance dashboards', 'Predictive insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 supply chain nodes',
        'Basic demand forecasting',
        'Standard optimization',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Unlimited supply chain nodes',
        'Advanced demand forecasting',
        'Comprehensive optimization',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Dedicated support team',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'AI Supply Chain Optimizer reduced our inventory costs by 30% and improved delivery times by 25%. The ROI was immediate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'TechLogistics Inc',
      content: 'The demand forecasting is incredibly accurate. We\'ve eliminated stockouts and reduced excess inventory significantly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'RetailMax Corporation',
      content: 'Our supply chain efficiency improved by 40% within the first quarter. The AI insights are game-changing.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Supply Chain Optimizer - Zion Tech Group"
        description="AI-powered supply chain optimization for demand forecasting, inventory management, and logistics. Reduce costs and improve efficiency with intelligent automation."
        keywords="AI supply chain optimizer, demand forecasting, inventory management, logistics optimization, supply chain AI, operations optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
                <CogIcon className="w-5 h-5 text-teal-400 mr-2" />
                <span className="text-teal-300 text-sm font-medium">AI Supply Chain Optimizer</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Supply Chain Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization. 
                Reduce costs by 30% and improve efficiency by 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">30%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">40%</div>
                  <div className="text-gray-300">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
                  <div className="text-gray-300">Forecast Accuracy</div>
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
                Advanced <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Optimization Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered supply chain optimization tools designed to maximize efficiency and reduce costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                Scalable <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain optimization needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-teal-500 shadow-lg shadow-teal-500/25' 
                    : 'border-slate-700 hover:border-teal-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700'
                      : 'border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                Trusted by <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of companies optimizing their supply chains with our AI solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Supply Chain</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies reducing costs and improving efficiency with AI-powered supply chain optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;