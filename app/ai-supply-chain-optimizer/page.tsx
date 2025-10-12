<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';
import { Truck, ArrowRight} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
'use client';


=======

'use client';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';

import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
export default function AISupplyChainOptimizerPage() {
  const features = [
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5 h-5ml-2" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
  ];
  const pricingPlans = [
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
  ];
  const testimonials = [
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5
    },
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5
    },
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
  ];
  const stats = [
<<<<<<< HEAD
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-5 h-5ml-2" /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-5 h-5ml-2" /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-5 h-5ml-2" /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-5 h-5ml-2" /> }
  ];
  return (
    <>
      <Helmet>
        <title />AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>
        <meta const name = "description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." /  />
        <meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, logistics technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer"  />
      </Helmet>
=======

    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-6h-6" / /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-6h-6" / /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-6h-6" / /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-6h-6" / /> }

  ];
  return (
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>

        {/* Hero Section */}
<<<<<<< HEAD
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="w-5 h-5ml-2">AI Supply Chain Optimizer
              </h1>
              <p className="w-5 h-5ml-2">Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <FuturisticButton
=======
    
              <h1 className="text-3 xl sm:text-4 xl md:text-5 xl lg:text-6 xl font-boldtext-whitemb-6">AI Supply Chain Optimizer
                Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 

                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  variant="primary"
                  size="lg"
 window.open('/contact', '_blank')}
                  Start Free Trial
<<<<<<< HEAD
                  <ArrowRight className="w-5 h-5ml-2" />
                </FuturisticButton>
                <FuturisticButton
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  variant="ghost"
                  size="lg"
window.open('#demo', '_blank')}
                  Watch Demo
<<<<<<< HEAD
                </FuturisticButton>
              </div>

            {/* Stats */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Advanced AI Features
              </h2>
              <p className="w-5 h-5ml-2">Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <FuturisticCard key="{index}" variant="service" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                    <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                  <ul className="w-5 h-5ml-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key="{benefitIndex}" className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
=======

            {/* Stats */}

 (
    
                  <div className="flex items-centerjustify-centermb-2">{stat.icon}

                  <div className="text-3 xl font-boldtext-whitemb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>

              ))}

        {/* Features Section */}
    
              <h2 className="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Advanced AI Features
                Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations

 (

                    {feature.icon}
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300mb-6">{feature.description}</p>

 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                        {benefit}
                    ))}
<<<<<<< HEAD
                  </ul>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />Choose Your Plan
              </h2>
              <p className="w-5 h-5ml-2">Scalable pricing options to match your supply chain needs
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5ml-2" />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5ml-2" />{plan.price}</span>
                      <span className="w-5 h-5ml-2" />{plan.period}</span>
                    </div>
                    <p className="w-5 h-5ml-2">{plan.description}</p>
                  </div>

                  <ul className="w-5 h-5ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5 h-5ml-2" />
=======

              ))}

        {/* Pricing Section */}
    
              <h2 className="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Choose Your Plan
                Scalable pricing options to match your supply chain needs

 (
                  {plan.popular && (

                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular

                  )}

                    <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                      <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                      <span className="text-gray-400ml-1">{plan.period}</span>
                    <p className="text-gray-300text-sm">{plan.description}</p>

 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                        {feature}
                    ))}

                    variant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
window.open('/contact', '_blank')}
                    Get Started
<<<<<<< HEAD
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />What Our Clients Say
              </h2>
              <p className="w-5 h-5ml-2">Join hundreds of companies optimizing their supply chains
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key="{index}" variant="testimonial" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4h-4te xt-yellow-400fill-current"  />
                    ))}
                  </div>
                  <blockquote className="w-5 h-5ml-2" />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <p className="w-5 h-5ml-2">{testimonial.name}</p>
                    <p className="w-5 h-5ml-2">{testimonial.role}</p>
                    <p className="w-5 h-5ml-2">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <FuturisticCard variant="feature" className="text-center" />
              <h2 className="w-5 h-5ml-2" />Ready to Optimize Your Supply Chain?
              </h2>
              <p className="w-5 h-5ml-2">Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
=======

              ))}

        {/* Testimonials Section */}
    
              <h2 className="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">What Our Clients Say
                Join hundreds of companies optimizing their supply chains

 (

 (
                    ))}

                  <blockquote className="text-gray-300mb-6italic">"{testimonial.content}"
                    <p className="font-semiboldtext-white">{testimonial.name}</p>
                    <p className="text-gray-400text-sm">{testimonial.role}</p>
                    <p className="text-gray-500text-sm">{testimonial.company}</p>

              ))}

        {/* CTA Section */}
    
              <h2 className="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Optimize Your Supply Chain?
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.

                  variant="primary"
                  size="lg"
window.open('/contact', '_blank')}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  Start Free Trial
                
                  variant="secondary"
                  size="lg"
window.open('/contact', '_blank')}
                  Schedule Demo
<<<<<<< HEAD
                </FuturisticButton>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}
=======
    
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>

  );
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
