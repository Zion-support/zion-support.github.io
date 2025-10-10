'use client';
import React from 'react';
import { Truck, Package, TrendingUp, Globe, BarChart3, Zap, Shield, CheckCircle, ArrowRight, Clock } from 'lucide-react';

const AISupplyChainOptimizationProPage: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'AI-powered route planning that reduces delivery times by 30% and fuel costs by 25%.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Predictive inventory management that prevents stockouts and reduces excess inventory by 40%.'
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Advanced ML models that predict demand with 95% accuracy, optimizing production schedules.'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'Real-time tracking and monitoring across your entire global supply chain network.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and reporting on supply chain performance and optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'Automated Decision Making',
      description: 'AI-driven automation for routine supply chain decisions, reducing manual intervention by 80%.'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by 25-40%',
    'Improve delivery performance by 35%',
    'Minimize inventory carrying costs',
    'Enhance supplier relationship management',
    'Increase supply chain resilience',
    'Real-time risk assessment and mitigation'
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production schedules, raw material procurement, and finished goods distribution.',
      icon: '🏭'
    },
    {
      title: 'Retail & E-commerce',
      description: 'Streamline inventory management, fulfillment, and last-mile delivery operations.',
      icon: '🛒'
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      description: 'Ensure critical medical supplies reach patients on time with temperature-controlled logistics.',
      icon: '🏥'
    },
    {
      title: 'Food & Beverage',
      description: 'Optimize cold chain logistics and reduce food waste through better demand planning.',
      icon: '🍎'
    }
  ];

  const metrics = [
    { label: 'Cost Reduction', value: '35%', color: 'text-green-400' },
    { label: 'Delivery Speed', value: '+30%', color: 'text-blue-400' },
    { label: 'Inventory Accuracy', value: '98%', color: 'text-purple-400' },
    { label: 'Customer Satisfaction', value: '95%', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {' '}Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization that reduces costs, improves efficiency, 
              and enhances customer satisfaction across your entire logistics network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border border-green-400 text-green-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Real performance improvements from our AI optimization platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive supply chain optimization powered by advanced artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 text-white mb-6 inline-block">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your supply chain operations with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="text-white font-semibold">Week 1-2: Data Integration</div>
                    <div className="text-gray-300 text-sm">Connect your existing systems</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="text-white font-semibold">Week 3-4: AI Model Training</div>
                    <div className="text-gray-300 text-sm">Train models on your data</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <div className="text-white font-semibold">Week 5-6: Testing & Optimization</div>
                    <div className="text-gray-300 text-sm">Fine-tune and validate results</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <div className="text-white font-semibold">Week 7-8: Full Deployment</div>
                    <div className="text-gray-300 text-sm">Go live with full optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven solutions across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join industry leaders who have transformed their supply chain operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimizationProPage;