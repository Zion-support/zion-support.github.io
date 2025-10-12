import { Helmet } from 'react-helmet-async'
import { Package, Trending Up, Bar Chart3, Alert Triangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, Dollar Sign } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, Rotate Ccw, Rotate Cw, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';

const A IInventory Manager Page: React.F C = () => {
  const features = [
    {
      icon: <B rain class Name="w-8h-8t ext-cyan-400" />,
      title: 'A I Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
    },
    {
      icon: <P ackage class Name="w-8h-8t ext-emerald-400" />,
      title: 'Smart Stock Optimization',
      description: 'A I automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t ext-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <A lert Triangle class Name="w-8h-8t ext-red-400" />,
      title: 'Intelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <Z ap class Name="w-8h-8t ext-orange-400" />,
      title: 'Automated Reordering',
      description: 'A I-powered automatic purchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto purchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time tracking']
    },
    {
      icon: <S hield class Name="w-8h-8t ext-pink-400" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with real-time synchronization.',
      benefits: ['Multi-warehouse support', 'Real-time sync', 'Location tracking', 'Transfer management']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 S KUs',
        'Basic A I forecasting',
        'Mobile app access',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with complex inventory',
      features: [
        'Up to 10,000 S KUs',
        'Advanced A I forecasting',
        'Multi-location support',
        'A PI integrations',
        'Priority support',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with extensive inventory needs',
      features: [
        'Unlimited S KUs',
        'Full A I suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Retail Chain',
      content: 'A I Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'D K'
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Store',
      content: 'The automated reordering feature saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'L M'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'J W'
    }
  ]

  const stats = [

    { number: '95%', label: 'Forecast Accuracy', icon: <T rending Up class Name="w-6h-6t ext-cyan-400" / /> },
    { number: '35%', label: 'Cost Reduction', icon: <D ollar Sign class Name="w-6h-6t ext-emerald-400" / /> },
    { number: '80%', label: 'Stockout Reduction', icon: <P ackage class Name="w-6h-6t ext-purple-400" / /> },
    { number: '50 K+', label: 'S KUs Managed', icon: <D atabase class Name="w-6h-6t ext-orange-400" / /> }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Inventory Manager - Smart Stock Management | Zion Tech Group</t itle>
        <m eta name="description" content="Revolutionary A I-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%." / / />
        <m eta name="keywords" content="A I inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r elative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-emerald-900to-slate-900" />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-emerald-400/30">
        </d iv>
            <P ackage class Name="w-4h-4" / />
            <s pan>A I-Powered Inventory Management</s pan>
          </d iv>

          <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            A I Inventory

            <b r / />
            <s pan class Name="b g-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Manager Pro
            </s pan>
          </h1>

          <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
            Transform your inventory management with A I-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>

          <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="#demo" class Name="g roup border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

      {/* Stats Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="g rid grid-cols-2md:grid-cols-4gap-8">
        </d iv>

            {stats.map((stat, index) => (

              <d iv key="{index}" class Name="t ext-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv class Name="f lexjustify-centermb-4">{stat.icon}
                </d iv>
                <d iv class Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-2">{stat.number}
                </d iv>
                <d iv class Name="t ext-gray-300text-sm">{stat.label}
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-emerald-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Intelligent <s pan class Name="b g-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent">Features</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Our A I-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-emerald-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s pace-y-2">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d iv key="{benefit Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                      <C heck Circle class Name="w-4h-4t ext-green-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20px-4bg-gray-900" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Flexible <s pan class Name="b g-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your inventory management needs. All plans include our core A I features 
              with scalable options for businesses of all sizes.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d iv key="{index}" class Name="{`r elative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-2 xl shadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

                  <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t ext-centermb-8">
        </d iv>
                  <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t ext-gray-300mb-4">{plan.description}</p>
                  <d iv class Name="f lexitems-baselinejustify-center" />
                    <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s pace-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d iv key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                      <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                      <s pan class Name="t ext-gray-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact" 
                  class Name="{`b lock" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-brfrom-emerald-900/50to-cyan-900/50" />
        <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t ext-centermb-16">
        </d iv>
            <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <s pan class Name="b g-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent">Industry Leaders</s pan>
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

              See how A I Inventory Manager is transforming inventory management for businesses worldwide.

            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv class Name="f lexitems-centermb-4">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t ext-whitefont-semibold">{testimonial.name}</h4>
                    <p c lass Name="t ext-gray-400text-sm">{testimonial.company}</p>
                  </d iv>
                <d iv class Name="f lexitems-centermb-4">
        </d iv>

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                  ))}

                </d iv>
                <p c lass Name="t ext-gray-300italic">"{testimonial.content}"</p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C TA Section */}

      <s ection class Name="p y-20 px-4 bg-gradient-to-r from-emerald-600via-cyan-600to-blue-600" />
        <d iv class Name="m ax-w-7 xlmx-autotext-center">
        </d iv>
          <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6" />

            Ready to Optimize Your

            <b r / />
            <s pan class Name="b g-gradient-to-r from-emerald-300 to-cyan-300bg-clip-texttext-transparent">Inventory Management?
            </s pan>
          </h2>
          <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />

            Join thousands of businesses already reducing costs and improving efficiency with A I Inventory Manager. 
            Start your free trial today - no setup fees required.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-6justify-center">
        </d iv>
            <L ink to="/contact" class Name="g roup bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/pricing" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>View All Plans</s pan>
              <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
            </L ink>
          </d iv>
      </s ection>

  )
}

export default A IInventory Manager Page;
