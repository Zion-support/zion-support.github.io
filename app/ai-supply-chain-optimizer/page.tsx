'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, Trending Up, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import Futuristic Card from '../components/Futuristic Card';
import Futuristic Button from '../components/Futuristic Button';

export default function A ISupply Chain Optimizer Page() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'A I algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <T rending Up class Name="w-6h-6t ext-green-400" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <T ruck class Name="w-6h-6t ext-blue-400" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <P ackage class Name="w-6h-6t ext-purple-400" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <S hield class Name="w-6h-6t ext-red-400" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];
  const pricing Plans = [
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
        'Advanced A I forecasting',
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
        'Custom A I models',
        'White-label options',
        'Dedicated account manager',
        'A PI access',
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
      content: 'A I Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'Retail Max Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'C EO',
      company: 'Manufacturing Solutions',
      content: 'This A I tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
    }
  ];
  const stats = [

    { number: '35%', label: 'Cost Reduction', icon: <T rending Up class Name="w-6h-6" / /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <T arget class Name="w-6h-6" / /> },
    { number: '500+', label: 'Companies Using', icon: <G lobe class Name="w-6h-6" / /> },
    { number: '40%', label: 'Delivery Improvement', icon: <C lock class Name="w-6h-6" / /> }
  ];
  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</t itle>
        <m eta const name = "description" content="Optimize your supply chain with A I-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." / / />
        <m eta name="keywords" content="A I supply chain, logistics optimization, inventory management, demand forecasting, supply chain A I, logistics technology" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </H elmet>

      <F uturistic Background variant="services" />
        {/* Hero Section */}

        <s ection class Name="p t-20 px-4 py-12sm:py-16lg:py-20" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h1 c lass Name="t ext-3 xl sm:text-4 xl md:text-5 xl lg:text-6 xl font-boldtext-whitemb-6">A I Supply Chain Optimizer
              </h1>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8" />

                Revolutionize your supply chain with A I-powered demand forecasting, route optimization, 
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>

                <F uturistic Button
                  variant="primary"
                  size="lg"
                  on Click="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial

                  <A rrow Right class Name="w-5h-5m l-2" />
                </F uturistic Button>

                <F uturistic Button
                  variant="ghost"
                  size="lg"
                  on Click="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo

                </F uturistic Button>
              </d iv>

            {/* Stats */}
            <d iv class Name="g rid grid-cols-2 md:grid-cols-4gap-6mb-16">
        </d iv>
              {stats.map((stat, index) => (

                <d iv key="{index}" class Name="t ext-center" />
                  <d iv class Name="f lex items-centerjustify-centermb-2">{stat.icon}
                  </d iv>
                  <d iv class Name="t ext-3 xl font-boldtext-whitemb-2">{stat.number}</d iv>
                  <d iv class Name="t ext-gray-300">{stat.label}</d iv>

              ))}

            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-12 sm:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Advanced A I Features
              </h2>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2gap-8mb-16">
        </d iv>
              {features.map((feature, index) => (

                <F uturistic Card key="{index}" variant="service" class Name="h-f ull" />
                  <d iv class Name="f lexitems-startmb-4">
        </d iv>

                    {feature.icon}

                    <h3 c lass Name="t ext-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t ext-gray-300mb-6">{feature.description}</p>
                  <u l class Name="s pace-y-2" />

                    {feature.benefits.map((benefit, benefit Index) => (

                      <l i key="{benefit Index}" class Name="f lex items-centertext-smtext-gray-300" />
                        <C heck Circle class Name="w-4 h-4 t ext-green-400mr-2flex-shrink-0" / />

                        {benefit}
                      </l i>
                    ))}

                  </u l>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-12 sm:py-16 lg:py-20px-4bg-white/5" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Choose Your Plan
              </h2>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Scalable pricing options to match your supply chain needs

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <F uturistic Card 
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  class Name="{`h-f ull" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t ext-centermb-6">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <d iv class Name="f lex items-baselinejustify-centermb-2">
        </d iv>
                      <s pan class Name="t ext-4 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-1">{plan.period}</s pan>
                    </d iv>
                    <p c lass Name="t ext-gray-300text-sm">{plan.description}</p>
                  </d iv>

                  <u l class Name="s pace-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key="{feature Index}" class Name="f lex items-centertext-smtext-gray-300" />
                        <C heck Circle class Name="w-4 h-4 t ext-green-400mr-3flex-shrink-0" / />

                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <F uturistic Button
                    variant="{plan.popular" ? "primary" : "ghost"}
                    class Name="w-f ull"
                    on Click="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started

                  </F uturistic Button>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* Testimonials Section */}

        <s ection class Name="p y-12 sm:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">What Our Clients Say
              </h2>
              <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Join hundreds of companies optimizing their supply chains

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <F uturistic Card key="{index}" variant="testimonial" class Name="h-f ull" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key="{i}" class Name="w-4 h-4t ext-yellow-400fill-current" />
                    ))}

                  </d iv>
                  <b lockquote class Name="t ext-gray-300mb-6italic">"{testimonial.content}"
                  </b lockquote>
                  <f ooter />
                    <p c lass Name="f ont-semiboldtext-white">{testimonial.name}</p>
                    <p c lass Name="t ext-gray-400text-sm">{testimonial.role}</p>
                    <p c lass Name="t ext-gray-500text-sm">{testimonial.company}</p>
                  </f ooter>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-12 sm:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <F uturistic Card variant="feature" class Name="t ext-center" />
              <h2 c lass Name="t ext-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Optimize Your Supply Chain?
              </h2>
              <p c lass Name="t ext-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto" />

                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>

                <F uturistic Button
                  variant="primary"
                  size="lg"
                  on Click="{()" =>window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </F uturistic Button>
                <F uturistic Button
                  variant="secondary"
                  size="lg"
                  on Click="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo

                </F uturistic Button>
              </d iv>
              <d iv class Name="m t-8text-white/80text-sm">
        </d iv>
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </d iv>
            </F uturistic Card>
          </d iv>
        </s ection>
      </F uturistic Background>

  );
}
