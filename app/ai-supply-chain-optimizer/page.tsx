import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';
import { Truck, ArrowRight} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
'use client';


export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5 h-5 ml-2" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5 ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5 ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Real-time analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
    }
  ];
  const stats = [
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-5 h-5 ml-2" /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-5 h-5 ml-2" /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-5 h-5 ml-2" /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-5 h-5 ml-2" /> }
  ];
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>
        <meta const name = "description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." /  />
        <meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, logistics technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer"  />
      </Helmet>

      <FuturisticBackground variant="services" />
        {/* Hero Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="w-5 h-5 ml-2">AI Supply Chain Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>

            {/* Stats */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                  </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced AI Features
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
              </p>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <FuturisticCard key="{index}" variant="service" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5 ml-2" />{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{feature.description}</p>
                  <ul className="w-5 h-5 ml-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Plan
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Scalable pricing options to match your supply chain needs
              </p>
          </div>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5 ml-2" />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5 ml-2" />{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5 ml-2" />{plan.price}</span>
                      <span className="w-5 h-5 ml-2" />{plan.period}</span>
                    </div>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{plan.description}</p>
                  </div>

                  <ul className="w-5 h-5 ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5 ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    variant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Our Clients Say
              </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of companies optimizing their supply chains
              </p>
          </div>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key="{index}" variant="testimonial" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4h-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <blockquote className="w-5 h-5 ml-2" />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{testimonial.name}</p>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{testimonial.role}</p>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FuturisticCard variant="feature" className="text-center" />
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}