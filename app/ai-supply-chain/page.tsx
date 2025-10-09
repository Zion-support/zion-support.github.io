import React from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Truck, Package, AlertTriangle, PieChart, Activity, Warehouse } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Demand Forecasting',
      description: 'Advanced machine learning models predict demand patterns with 95% accuracy, optimizing inventory levels and reducing waste.',
      benefits: ['95% demand accuracy', '30% inventory reduction', '50% less waste']
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Intelligent Route Optimization',
      description: 'AI-powered logistics optimization that reduces delivery times, fuel costs, and carbon footprint through smart routing.',
      benefits: ['25% faster deliveries', '20% fuel savings', 'Reduced carbon footprint']
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Predictive Risk Management',
      description: 'AI-driven risk assessment that identifies potential supply chain disruptions and suggests mitigation strategies.',
      benefits: ['90% risk reduction', 'Proactive problem solving', 'Business continuity']
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Smart Inventory Management',
      description: 'Automated inventory optimization using AI to maintain optimal stock levels and prevent stockouts or overstocking.',
      benefits: ['40% inventory optimization', 'Zero stockouts', 'Reduced carrying costs']
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: 'Automated Warehouse Operations',
      description: 'AI-powered warehouse management with automated picking, packing, and sorting for maximum efficiency.',
      benefits: ['60% faster operations', '99.9% accuracy', 'Reduced labor costs']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics platform providing real-time insights into supply chain performance and optimization opportunities.',
      benefits: ['Real-time visibility', 'Data-driven decisions', 'Performance optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic demand forecasting',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'Basic integrations',
        'Single warehouse'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-warehouse support',
        'Advanced analytics & reporting',
        'Priority support',
        'API integrations',
        'Custom workflows',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom AI model training',
        '24/7 dedicated support',
        'Advanced security & compliance',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning with AI-driven demand forecasting, inventory management, and supplier coordination.',
      icon: '🏭',
      benefits: ['30% cost reduction', 'Improved efficiency', 'Better supplier relations']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Streamline inventory management with AI-powered demand prediction, automated reordering, and fulfillment optimization.',
      icon: '🛒',
      benefits: ['40% inventory optimization', 'Reduced stockouts', 'Better customer satisfaction']
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable inventory with AI-driven shelf-life prediction, waste reduction, and quality control automation.',
      icon: '🍎',
      benefits: ['50% waste reduction', 'Better quality control', 'Improved freshness']
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      description: 'Ensure critical supply availability with AI-powered demand forecasting, cold chain management, and compliance tracking.',
      icon: '🏥',
      benefits: ['100% compliance', 'Zero stockouts', 'Temperature monitoring']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 30-50% through AI optimization',
      icon: '💰',
      value: '30-50%'
    },
    {
      title: 'Efficiency Improvement',
      description: 'Increase operational efficiency with automated processes',
      icon: '⚡',
      value: '60%'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize supply chain risks with predictive analytics',
      icon: '🛡️',
      value: '90%'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction with reliable deliveries',
      icon: '😊',
      value: '95%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Supply Chain Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered demand forecasting, intelligent logistics optimization, and automated warehouse operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Supply Chain Features
            </h2>
            <p className="text-xl text-gray-600">
              Transform your supply chain operations with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact of AI on supply chain operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600">
              See how different industries benefit from AI supply chain management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today for a free consultation and custom AI supply chain solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainPage;