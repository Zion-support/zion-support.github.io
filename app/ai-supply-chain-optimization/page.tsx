'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  Truck, 
  Package, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  Globe,
  Cpu,
  Target
} from 'lucide-react';

const AISupplyChainOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Demand Forecasting',
      description: 'Predict demand patterns with 98% accuracy using advanced machine learning and external data sources',
      benefits: ['98% forecast accuracy', 'Multi-factor analysis', 'Seasonal adjustments', 'Real-time updates']
    },
    {
      icon: Package,
      title: 'Inventory Optimization',
      description: 'Optimize inventory levels across your entire supply chain to reduce costs while maintaining service levels',
      benefits: ['30% inventory reduction', 'Service level optimization', 'Multi-location management', 'ABC analysis']
    },
    {
      icon: Truck,
      title: 'Route Planning',
      description: 'AI-powered route optimization that reduces transportation costs and improves delivery times',
      benefits: ['25% cost reduction', 'Faster deliveries', 'Fuel optimization', 'Real-time tracking']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Identify and mitigate supply chain risks before they impact your operations',
      benefits: ['Risk scoring', 'Early warning system', 'Mitigation strategies', 'Compliance monitoring']
    },
    {
      icon: Zap,
      title: 'Supplier Management',
      description: 'Intelligent supplier selection and performance monitoring for optimal partnerships',
      benefits: ['Supplier scoring', 'Performance tracking', 'Cost analysis', 'Relationship management']
    },
    {
      icon: Cpu,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards and analytics for data-driven supply chain decisions',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Predictive insights', 'KPI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small to medium businesses looking to optimize their supply chain',
      features: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Inventory optimization',
        'Route planning',
        'Email support',
        'Standard reporting',
        '99% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing companies with complex supply chain operations',
      features: [
        'Up to 25 locations',
        'Advanced demand forecasting',
        'Multi-echelon optimization',
        'Advanced route planning',
        'Priority support',
        'Advanced analytics',
        '99.5% uptime SLA',
        'API integration',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Complete supply chain optimization for large, complex operations',
      features: [
        'Unlimited locations',
        'AI-powered forecasting',
        'End-to-end optimization',
        'Advanced route optimization',
        '24/7 dedicated support',
        'Enterprise analytics & BI',
        '99.9% uptime SLA',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Retail & E-commerce',
      description: 'Optimize inventory across multiple channels and distribution centers to meet customer demand',
      metrics: 'Reduce stockouts by 70%',
      icon: Package
    },
    {
      title: 'Manufacturing',
      description: 'Streamline raw material procurement and finished goods distribution for maximum efficiency',
      metrics: 'Cut costs by 35%',
      icon: Cpu
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable inventory and optimize distribution to reduce waste and improve freshness',
      metrics: 'Reduce waste by 50%',
      icon: Globe
    },
    {
      title: 'Automotive',
      description: 'Coordinate complex supply chains with just-in-time delivery and quality control',
      metrics: 'Improve on-time delivery by 85%',
      icon: Truck
    }
  ];

  const benefits = [
    {
      title: 'Reduce Costs',
      description: 'Optimize every aspect of your supply chain to minimize costs while maintaining service levels',
      value: '25-40% cost reduction'
    },
    {
      title: 'Improve Efficiency',
      description: 'Streamline operations and eliminate bottlenecks for maximum throughput',
      value: '50% efficiency improvement'
    },
    {
      title: 'Enhance Visibility',
      description: 'Real-time visibility into your entire supply chain for better decision making',
      value: '100% supply chain visibility'
    },
    {
      title: 'Reduce Risk',
      description: 'Identify and mitigate risks before they impact your business',
      value: '80% risk reduction'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      company: 'Global Retail Corp',
      role: 'Supply Chain Director',
      content: 'The AI supply chain optimization platform transformed our operations. We reduced costs by 38% and improved on-time delivery to 98%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Solutions',
      role: 'Operations Manager',
      content: 'The demand forecasting accuracy is incredible. We\'ve eliminated stockouts and reduced excess inventory by 45%.',
      rating: 5,
      avatar: '👨‍🔧'
    },
    {
      name: 'Lisa Chen',
      company: 'Food Distribution Inc',
      role: 'Logistics Director',
      content: 'Our waste reduction has been phenomenal. The AI helps us manage perishable inventory perfectly, saving us millions annually.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group | Optimize Your Supply Chain with AI</title>
        <meta name="description" content="Optimize your supply chain with AI-powered demand forecasting, inventory optimization, and route planning. Reduce costs by 25-40% and improve efficiency by 50%." />
        <meta name="keywords" content="supply chain optimization, AI supply chain, demand forecasting, inventory optimization, logistics AI, supply chain analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
                AI Supply Chain Optimization
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your supply chain with AI-powered optimization. Reduce costs by 25-40%, 
                improve efficiency by 50%, and achieve 98% demand forecasting accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Get Free Analysis
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Forecast Accuracy</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Comprehensive Supply Chain AI
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end supply chain optimization powered by advanced artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your supply chain with proven results and measurable improvements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored supply chain optimization for different industries and use cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <useCase.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-cyan-400 font-semibold">{useCase.metrics}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain optimization needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading companies are optimizing their supply chains with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free supply chain analysis and discover how AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Schedule Analysis
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainOptimizationPage;