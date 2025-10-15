'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  TruckIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  TruckIcon as TruckIconSolid,
  BeakerIcon,
  EyeIcon,
  MapIcon,
  CurrencyDollarIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const ZionAISupplyChainOptimizerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: TruckIcon,
      title: 'Route Optimization',
      description: 'AI-powered logistics optimization reducing delivery costs by 35% and improving delivery times by 40%.',
      stats: '50,000+ routes optimized daily'
    },
    {
      icon: CubeIcon,
      title: 'Inventory Management',
      description: 'Intelligent inventory forecasting with 98.5% accuracy in demand prediction and stock optimization.',
      stats: '2M+ SKUs managed'
    },
    {
      icon: ChartBarIcon,
      title: 'Demand Forecasting',
      description: 'Advanced predictive analytics for demand planning with machine learning algorithms.',
      stats: '95% forecast accuracy'
    },
    {
      icon: UserGroupIcon,
      title: 'Supplier Management',
      description: 'Comprehensive supplier relationship management with performance tracking and risk assessment.',
      stats: '10,000+ suppliers tracked'
    },
    {
      icon: DocumentTextIcon,
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking for regulations, certifications, and quality standards.',
      stats: '200+ regulations monitored'
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'End-to-end supply chain automation reducing manual work by 70% and improving efficiency.',
      stats: '80% process automation'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic route optimization',
        'Inventory forecasting',
        'Supplier management (up to 100)',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Enterprise Pro',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for large enterprises and manufacturers',
      features: [
        'Unlimited SKUs',
        'Advanced optimization algorithms',
        'Predictive analytics',
        'Unlimited suppliers',
        'Priority support',
        'Advanced reporting suite',
        'API access',
        'Custom integrations',
        'Multi-location support'
      ],
      popular: true
    },
    {
      name: 'Global Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For multinational corporations and complex supply chains',
      features: [
        'Everything in Pro',
        'Global supply chain visibility',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics suite',
        'Full API access',
        'White-label options',
        'Custom compliance frameworks',
        'Multi-currency support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'Zion AI Supply Chain Optimizer has reduced our logistics costs by 35% and improved delivery performance significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Operations Manager',
      company: 'TechSupply Inc.',
      content: 'The inventory forecasting accuracy has helped us reduce stockouts by 90% while maintaining optimal inventory levels.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'VP of Operations',
      company: 'RetailChain Solutions',
      content: 'The supplier management features have improved our vendor relationships and reduced supply chain risks.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Supply Chain Optimizer - AI-Powered Logistics & Inventory Management | Zion Tech Group"
        description="Transform supply chain operations with AI-powered route optimization, inventory management, and demand forecasting. 35% cost reduction, 98.5% accuracy."
        keywords="AI supply chain optimizer, logistics optimization, inventory management, demand forecasting, supply chain automation, route optimization, supplier management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <TruckIconSolid className="w-5 h-5 text-teal-400 mr-2" />
                <span className="text-teal-400 font-medium">AI Supply Chain Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion AI Supply Chain Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize supply chain operations with AI-powered route optimization, inventory management, and demand forecasting. 
                Achieve 35% cost reduction and 98.5% accuracy in inventory predictions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">35%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">98.5%</div>
                  <div className="text-gray-300 text-sm">Forecast Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Routes Optimized Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">2M+</div>
                  <div className="text-gray-300 text-sm">SKUs Managed</div>
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
                Advanced AI Supply Chain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive supply chain technology solutions designed to optimize operations and reduce costs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-teal-400 font-medium">
                    {feature.stats}
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain needs. All plans include our core AI optimization features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-teal-500 shadow-lg shadow-teal-500/25' 
                    : 'border-slate-700 hover:border-teal-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-teal-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700'
                      : 'border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white'
                  }`}>
                    Get Started
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Supply Chain Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what supply chain professionals are saying about Zion AI Supply Chain Optimizer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of supply chain professionals who trust Zion AI Supply Chain Optimizer for their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISupplyChainOptimizerPage;