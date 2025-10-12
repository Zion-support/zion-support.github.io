import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';
import { Truck, ArrowRight} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-6h-6text-green-400" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-6h-6text-blue-400" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-6h-6text-purple-400" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-6h-6text-red-400" />,
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
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-6h-6" /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-6h-6" /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-6h-6" /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-6h-6" /> }
  ];
  return (

      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>
        <meta const name = "description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." / / />
        <meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, logistics technology" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </Helmet>

      <FuturisticBackground variant="services" />
        {/* Hero Section */}

        <section className="pt-20 px-4 py-12sm:py-16lg:py-20" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h1 className="text-3 xl sm:text-4xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6"  />AI Supply Chain Optimizer
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Revolutionize your supply chain with AI-powered demand forecasting, route optimization,
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.

              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                  Start Free Trial

                  <ArrowRight className="w-5h-5ml-2" />
                </FuturisticButton>

                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick="{()" =  />window.open('#demo', '_blank')}
                  Watch Demo

                </FuturisticButton>
              </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4gap-6mb-16">
              {stats.map((stat, index) => (

                <div key="{index}" className="text-center" />
                  <div className="flex items-centerjustify-centermb-2">{stat.icon}
                  </div>
                  <div className="text-3 xl font-bold text-white mb-2"   />{stat.number}</div>
                  <div className="text-gray-300"   />{stat.label}</div>
              ))}

            </div>
        </section>

        {/* Features Section */}

        <section className="py-12 sm:py-16lg:py-20px-4" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-2 xl sm:text-3 xl md:text-4xl font-bold text-white mb-4"  />Advanced AI Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto">
              Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2gap-8mb-16">
              {features.map((feature, index) => (

                <FuturisticCard key="{index}" variant="service" className="h-full" />
                  <div className="flex items-startmb-4">
                    {feature.icon}

                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
              {feature.description}</p>
                  <ul className="space-y-2" />

                    {feature.benefits.map((benefit, benefitIndex) => (

                      <li key="{benefitIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}

                  </ul>
                </FuturisticCard>

              ))}

            </div>
        </section>

        {/* Pricing Section */}

        <section className="py-12 sm:py-16 lg:py-20px-4bg-white/5" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-2 xl sm:text-3 xl md:text-4xl font-bold text-white mb-4"  />Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto">
              Scalable pricing options to match your supply chain needs
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key="{index}"
                  variant="{plan.popular" ? "feature" : "service"}
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2transform-translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>

                  )}

                  <div className="text-centermb-6">
                    <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <div className="flex items-baselinejustify-centermb-2">
                      <span className="text-4xlfont-bold text-white"   />{plan.price}</span>
                      <span className="text-gray-400ml-1"   />{plan.period}</span>
                    </div>
                    <p className="text-gray-300text-sm">
              {plan.description}</p>
                  </div>

                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (

                      <li key="{featureIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    variant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick="{()" =  />window.open('/contact', '_blank')}
                    Get Started

                  </FuturisticButton>
                </FuturisticCard>

              ))}

            </div>
        </section>

        {/* Testimonials Section */}

        <section className="py-12 sm:py-16lg:py-20px-4" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-2 xl sm:text-3 xl md:text-4xl font-bold text-white mb-4"  />What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto">
              Join hundreds of companies optimizing their supply chains
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (

                <FuturisticCard key="{index}" variant="testimonial" className="h-full" />
                  <div className="flex items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4 h-4text-yellow-400fill-current" />
                    ))}

                  </div>
                  <blockquote className="text-gray-300 mb-6italic"  />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <p className="font-semiboldtext-white">
              {testimonial.name}</p>
                    <p className="text-gray-400text-sm">
              {testimonial.role}</p>
                    <p className="text-gray-500text-sm">
              {testimonial.company}</p>
                  </footer>
                </FuturisticCard>

              ))}

            </div>
        </section>

        {/* CTA Section */}

        <section className="py-12 sm:py-16lg:py-20px-4" />
          <div className="max-w-7xlmx-auto">
            <FuturisticCard variant="feature" className="text-center" />
              <h2 className="text-2 xl sm:text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto">
              Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" =>window.open('/contact', '_blank')}
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                  Schedule Demo

                </FuturisticButton>
              </div>
              <div className="mt-8text-white/80text-sm">
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>

  );
}
