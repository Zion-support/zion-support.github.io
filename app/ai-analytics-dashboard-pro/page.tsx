import React from 'react'
import { Link } from 'react-router-dom'
import { Bar Chart3, Arrow Right, Check Circle, Brain, Globe, Star, Target } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import Layout from '../layout';

export default function A IAnalytics Dashboard Pro() {
  const features = [
    {
      icon: <B rainclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'A I-Powered Insights',
      description: 'Advanced machine learning algorithms provide actionable business insights'
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards'
    },
    {
      icon: <T argetclass Name="w-6h-6t e xt-y e llow-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with confidence'
    },
    {
      icon: <G lobeclass Name="w-6h-6t e xt-g r een-400" />,
      title: 'Multi-Platform Integration',
      description: 'Connect all your data sources in one unified dashboard'
    }
  ]

  const dashboard Features = [
    {
      category: 'Data Sources',
      items: ['Google Analytics', 'Facebook Ads', 'Salesforce C R M', 'Shopify', 'Stripe', 'Custom A P Is']
    },
    {
      category: 'Visualizations',
      items: ['Interactive Charts', 'Heat Maps', 'Funnel Analysis', 'Cohort Analysis', 'Custom Reports', 'Real-time Alerts']
    },
    {
      category: 'A I Features',
      items: ['Anomaly Detection', 'Trend Prediction', 'Customer Segmentation', 'Churn Analysis', 'R O I Optimization', 'Smart Alerts']
    },
    {
      category: 'Collaboration',
      items: ['Team Dashboards', 'Custom Permissions', 'Scheduled Reports', 'Export Options', 'A P I Access', 'White-label']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic A I insights',
        'Standard visualizations',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced A I analytics',
        'Custom dashboards',
        'Priority support',
        'Real-time alerts',
        'A P I access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom A I models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'S L A guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'E-commerce Plus',
      content: 'A I Analytics Dashboard Pro transformed our decision-making process. R O I increased by 60% in just 3 months.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency Pro',
      content: 'The predictive analytics helped us optimize campaigns before problems occurred. Game-changer for our clients.',
      rating: 5
    },
    {
      name: 'Michael Davis',
      company: 'Saa S Startup',
      content: 'Real-time insights and A I recommendations saved us countless hours of manual analysis. Highly recommended.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="A I Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group"
      description="Transform your data into actionable insights with A I-powered analytics dashboard. Real-time visualization, predictive analytics, and custom reporting. Start your free trial today."
      keywords="A I analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting" />
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 p b-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="i n l i ne-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-smfont-mediummb-6">
        </d iv>
                <B ar Chart3 class Name="w-4h-4m r-2" / />
                Advanced Analytics

              </d iv>
              <h1 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6">A I Analytics Dashboard Pro
              </h1>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Transform your data into powerful insights with our A I-powered analytics platform. 
                Real-time visualization, predictive analytics, and intelligent recommendations.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Start Free Trial

                  <A rrow Rightclass Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Powerful Analytics Features
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Everything you need to make data-driven decisions

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-g r a dient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40transition-allduration-300" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {feature.icon}

                    <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Dashboard Features */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Comprehensive Dashboard Capabilities
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Connect, analyze, and visualize all your data in one place

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {dashboard Features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whitemb-4">{feature.category}</h3>
                  <u lclass Name="s p a c e-y-2" />
                    {feature.items.map((item, item Index) => (

                      <l ikey="{item Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4t e xt-g r een-400mr-2" / />
                        {item}
                      </l i>
                    ))}

                  </u l>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Flexible Pricing Plans
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your analytics needs

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-g r a dient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2 xl shadow-green-500/20' 
                    : 'border-green-500/20 hover: border-green-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i n l i ne-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-smfont-mediummb-4">
        </d iv>
                      <S tarclass Name="w-4h-4m r-1" / />
                      Most Popular
                    </d iv>
                  )}

                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-6">{plan.description}</p>
                  <d iv class Name="m b-6">
        </d iv>
                    <s pan class Name="t e xt-4 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400">{plan.period}</s pan>
                  </d iv>
                  <u lclass Name="s p a c e-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400mr-3" / />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name="{`w-f u ll" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                        : 'border-2 border-green-400 text-green-400 hover: bg-green-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Trusted by Data-Driven Companies
              </h2>
              <p c lass Name="t e xt-g r ay-300" />
                See how our analytics platform transforms business decisions

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mb-4">"{testimonial.content}"</p>
                  <d iv />
                    <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t e xt-s m text-gray-400">{testimonial.company}</d iv>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m a x-w-4 x l mx-autotext-center">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-green-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-green-500/30">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Start Making Data-Driven Decisions Today
              </h2>
              <p c lass Name="t e x t-lgtext-gray-300 mb-8" />
                Join thousands of businesses using A I Analytics Dashboard Pro to unlock their data potential

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </L ink>
                <L ink to="/about" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
    </L ayout>
  )
};
