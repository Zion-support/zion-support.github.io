import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign  } from 'lucide-react';import { Link } from 'react-router-dom'
import React from 'react';import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt  } from 'lucide-react';
import { Link  } from 'react-router-dom';
const AIInventoryManagerPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Brain c las sNa me="w-8h-8t e xt-c yan-400" />,
      t itle: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder poin ts']
    },
    {
      i con: <Package c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      t itle: 'Smart Stock Optimization',
      description: 'AI automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      i con: <BarChart3 c las sNa me="w-8h-8t e xt-p urp le-400" />,
      t itle: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      i con: <AlertTriangle c las sNa me="w-8h-8t e xt-red-400" />,
      t itle: 'I ntelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain moni toring']
    },
    {
      i con: <Zap c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      t itle: 'Automated Reordering',
      description: 'AI-powered automatic p urchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto p urchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time trac king']
    },
    {
      i con: <Shield c las sNa me="w-8h-8t e xt-p ink-400" />,
      t itle: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses, stor es, and distribution centers with real-time synchronization.',
      benefits: ['Multi-warehouse support', 'Real-time sync', 'Location trac king', 'Transfer management']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      f eat ures: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
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
      description: 'Ideal for growing businesses with comp lex inventory',
      f eat ures: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'API i ntegrations',
        'Priority support',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with e xtensive inventory needs',
      f eat ures: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom i ntegrations',
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
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'E-comm erce Store',
      content: 'The automated reordering f eat ure saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-chan ger. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW'
    }
  ]
  const stats = [
    <>
    { number: '95%', label: 'Forecast A ccuracy', i con: </><TrendingUp c las sNa me="w-6h-6t e xt-c yan-400" / /> },
    { number: '35%', label: 'Cost R eduction', i con: <DollarSign c las sNa me="w-6h-6t e xt-e mer ald-400" / /> },
    { number: '80%', label: 'Stockout R eduction', i con: <Package c las sNa me="w-6h-6t e xt-p urp le-400" / /> },
    { number: '50 K+', label: 'SKUs Managed', i con: <Database c las sNa me="w-6h-6t e xt-o ran ge-400" / /> }  ]
  r eturn (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>AI Inventory Manager - Smart Stock Management | Zion Tech Group</t itle>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. R educe costs by 35% and stockouts by 80%." / / />
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" />
      </Helmet>
    </>
      {/* H ero S ection */}
    <>
      </><s ection c las sNa me="r e lative py-20 px-4 over flow-h idd en bg-gradient-to-br from-slate-900via-e mer ald-900to-slate-900" />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_20%_80%,rgba(16,185,129,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="a b solute ins et-0bg-[radial-gradient(c ircle_at_80%_20%,rgba(6,182,212,0.3)_0%,tran sparent_50%)]" / />
        <d iv c las sNa me="r e lative m ax-w-7 x lmx-auto text-cent-e-r">
        </d iv>
          <d iv c las sNa me="i nline-f lex items-center s pace-x-2 bg-gradient-to-r from-e mer ald-500/20 to-c yan-500/20 t ext-e mer al-d-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-e mer ald-400/30">
        </d iv>
            <Package c las sNa me="w-4h-4" / />
            <s pan>AI-P owered Inventory Management</s pan>          </d iv>
    </>
          <h1 c las sNa me="t e xt-4xl sm:t ext-6 xl md:t ext-7 xl font-bold t ext-whit-e mb-8-leading-tight" />
            AI Inventory
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-e mer ald-400 via-c yan-400 to-blue-400bg-clip-t exttext-tra-n sparen-t">Manager Pro
            </s pan>
          </h1>
    </>
          <p c las sNa me="t e xt-lg sm:t ext-x-l md:t ext-2 xl t ext-gra-y-300 mb-12 m ax-w-4 x lmx-autoleading-relaxed">
              Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and i ntelligent stock optimization that reduces costs by 35%.
          </p>
          <d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6j ustify-centermb-16">
            <Link to="/cont act" c las sNa me="g roup bg-gradient-to-r from-e mer ald-500 to-c yan-600 t ext-whit-e px-10 py-4 rounded-xl font-semibold hover:from-e mer ald-600 hover:to-c yan-700 transition-all duration-300 f lex items-center j ustify-center s pace-x-2 shadow-lg shadow-e mer ald-500/25 hover:shadow-e mer ald-500/40transformhover:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="#demo" c las sNa me="g roup border-2 border-e mer ald-400 t ext-e mer al-d-400 px-10 py-4 rounded-xl font-semibold hover:bg-e mer ald-400 hover:t ext-gra-y-900 transition-all duration-300 f lex items-center j ustify-centers pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>Watch Demo</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </d iv>
      </s ection>
    </>
      {/* Stats S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="g r id g rid-c ols-2md:g rid-c ols-4g ap-8">
        </d iv>
    </>
            {stats.map((stat, index) => (
    <>
              </><d iv key="{index}" c las sNa me="t e xt-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6borderborder-white/10" />
                <d iv c las sNa me="f lexj ustify-centermb-4">{stat.i con}
                </d iv>
                <d iv c las sNa me="t e xt-3 xl md:t ext-4 xl font-bold text-white-m-b-2">{stat.number}
                </d iv>
                <d iv c las sNa me="t e xt-gray-300t ext-s-m">{stat.label}
                </d iv>
    </>
            ))}
    <>          </d iv>
      </s ection>
    </>
      {/* Feat ures S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-b rfrom-slate-800/50to-e mer ald-900/50" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
        </d iv>
          <d iv c las sNa me="t e xt-centermb-16">
        </d iv>
            <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-bold text-white-m-b-6" />
              I ntelligent <s pan c las sNa me="b g-gradient-to-r from-e mer ald-400 to-c yan-400bg-clip-t exttext-tra-n sparen-t">Feat ures</s pan>
            </h2>
            <p c las sNa me="t e xt-xl t ext-gra-y-300 m ax-w-4x lmx-auto" />
    </>              Our AI-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.
    <>
            </p>
          </d iv>
    </>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2lg:g rid-c ols-3g ap-8">
            {f eat ures.map((f eat ure, index) => (
    <>
              </><d iv key="{index}" c las sNa me="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv c las sNa me="f lex items-center j ustify-center w-16 h-16 bg-gradient-to-r from-e mer ald-500 to-c yan-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{f eat ure.i con}
                </d iv>
                <h3 c las sNa me="t e xt-2 xl font-bold t ext-whit-e mb-4-group-hover:t ext-e mer al-d-400transition-c olors">{f eat ure.t itle}
                </h3>
            ))}
    <>
          </d iv>
      </s ection>
    </>
      {/* Pricing S ection */}
    <>
      </><s ection c las sNa me="p y-20px-4-bg-gray-900" />
        <d iv c las sNa me="m ax-w-7x lmx-auto">
            {pricingPlans.map((plan, index) => (
              <d iv key="{index}" c las sNa me="{`r e lative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-e mer ald-400/50 shadow-2 xl shadow-e mer ald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
            {testimonials.map((testimonial, index) => (
    <>
              </><d iv key="{index}" c las sNa me="b g-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20" />
                <d iv c las sNa me="f lex items-centermb-4">
                  <d iv c las sNa me="w-12 h-12 b g-gradient-to-r from-e mer ald-500 to-c yan-600 rounded-full f lex items-center j ustify-center t ext-whitefon-t-boldmr-4"  />{testimonial.avatar}
                  </d iv>
                  <d iv>
            <h4 c las sNa me="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <p c las sNa me="t e xt-gray-400t ext-s-m">
              {testimonial.company}</p>
                  </d iv>
                <d iv c las sNa me="f lex items-centermb-4">                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-current" />
                  ))}
    <>
                </d iv>
                <p c las sNa me="t e xt-gray-300i tal ic">
              "{testimonial.content}"</p>              </d iv>
    </>
            ))}
    <>
          </d iv>
      </s ection>
    </>
      {/* C TA S ection */}
    <>
      </><s ection c las sNa me="p y-20 px-4 bg-gradient-to-r from-e mer ald-600via-c yan-600to-blue-600" />
        <d iv c las sNa me="m ax-w-7 x lmx-auto text-cent-e-r">
        </d iv>
          <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold text-white-m-b-6" />
    </>            Ready to Optimize Your
    <>
            </><br / />
            <s pan c las sNa me="b g-gradient-to-r from-e mer ald-300 to-c yan-300bg-clip-t exttext-tra-n sparen-t">Inventory Management?
            </s pan>
          </h2>
          <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-whit-e/90 mb-8 m ax-w-4x lmx-auto" />
    </>
            Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager.             Start your free trial today - no s etup fees required.
    <>
          </p>
          <d iv c las sNa me="f lex f lex-c ol sm:f lex-rowg ap-6j ustify-center">
            <Link to="/cont act" c las sNa me="g roup bg-white t ext-e mer al-d-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all duration-300 f lex items-center j ustify-center s pace-x-2 shadow-lg hover:shadow-xltr ansformhover:scale-105" >
          <s pan    />
        </Link>Start Free Trial</s pan>
              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" c las sNa me="g roup border-2 border-white t ext-whit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-white/10 transition-all duration-300 f lex items-center j ustify-centers pace-x-2backdrop-blur-sm" >
          <s pan    />
        </Link>View All Plans</s pan>              <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
            </Link>
          </d iv>
      </s ection>
    </>
  )
}
export default AIInventoryManagerPage;
    </>