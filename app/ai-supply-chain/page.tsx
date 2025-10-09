'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Truck, Globe, BarChart, Shield, Zap, Target, CheckCircle, ArrowRight, Phone, Mail, TrendingUp, Clock, Users, Database } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'AI-powered route planning for maximum efficiency and cost reduction',
      benefits: ['30% fuel savings', '25% faster deliveries', 'Real-time adjustments', 'Multi-modal planning']
    },
    {
      icon: BarChart,
      title: 'Demand Forecasting',
      description: 'Predict future demand with machine learning algorithms',
      benefits: ['95% accuracy', 'Seasonal adjustments', 'Market trend analysis', 'Inventory optimization']
    },
    {
      icon: Globe,
      title: 'Global Visibility',
      description: 'End-to-end supply chain visibility across all touchpoints',
      benefits: ['Real-time tracking', 'Risk monitoring', 'Performance analytics', 'Compliance tracking']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies',
      benefits: ['Early warning system', 'Scenario planning', 'Supplier risk assessment', 'Disruption recovery']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate routine processes and decision-making',
      benefits: ['Process automation', 'Smart scheduling', 'Exception handling', 'Workflow optimization']
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and KPI monitoring',
      benefits: ['Custom dashboards', 'Performance metrics', 'Trend analysis', 'ROI tracking']
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing Optimization',
      description: 'Streamline production planning and inventory management',
      results: ['40% inventory reduction', '25% cost savings', '99% on-time delivery'],
      icon: Database
    },
    {
      title: 'Retail Supply Chain',
      description: 'Optimize retail operations from supplier to customer',
      results: ['35% stockout reduction', '20% cost reduction', '50% faster restocking'],
      icon: BarChart
    },
    {
      title: 'Healthcare Logistics',
      description: 'Ensure critical medical supplies reach patients on time',
      results: ['60% faster delivery', '95% compliance rate', '30% waste reduction'],
      icon: Shield
    },
    {
      title: 'E-commerce Fulfillment',
      description: 'Optimize order fulfillment and last-mile delivery',
      results: ['45% faster shipping', '25% cost reduction', '90% customer satisfaction'],
      icon: Truck
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 30% through optimized processes',
      value: '30%'
    },
    {
      icon: Clock,
      title: 'Faster Delivery',
      description: 'Improve delivery times by 25% with optimized routing',
      value: '25%'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce supply chain risks by 50% with predictive analytics',
      value: '50%'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Increase customer satisfaction with reliable, on-time deliveries',
      value: '95%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 locations',
        'Basic analytics',
        'Standard support',
        'API access',
        'Mobile app',
        'Email notifications'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50 locations',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Real-time tracking',
        'Advanced reporting',
        'Risk management',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited locations',
        'Custom analytics',
        'Dedicated support',
        'White-label solution',
        'On-premise deployment',
        'Custom development',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Optimize your supply chain with AI-powered solutions. Reduce costs, improve efficiency, and enhance visibility across your entire supply network."
        keywords={['AI supply chain', 'supply chain optimization', 'logistics AI', 'demand forecasting', 'route optimization', 'supply chain analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-supply-chain"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Supply Chain <span className="text-green-400">Optimization</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, 
              and gain complete visibility across your entire supply network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a href="/demo" className="cyber-button-secondary inline-flex items-center justify-center">
                <BarChart className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful <span className="text-green-400">Features</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Everything you need to optimize your supply chain
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
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
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven <span className="text-cyan-400">Results</span>
              </h2>
              <p className="text-gray-300 text-lg">
                See the impact of AI-powered supply chain optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {benefit.value}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry <span className="text-purple-400">Applications</span>
              </h2>
              <p className="text-gray-300 text-lg">
                See how different industries benefit from our solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-gray-400">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible <span className="text-orange-400">Pricing</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the plan that fits your supply chain needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 relative ${tier.popular ? 'ring-2 ring-green-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-400">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      tier.popular
                        ? 'bg-green-400 text-slate-900 hover:bg-green-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
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
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card max-w-4xl mx-auto p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join industry leaders who are already transforming their supply chains with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a href="/demo" className="cyber-button-secondary inline-flex items-center justify-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AISupplyChainPage;