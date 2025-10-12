import {Helmet} from 'react-helmet-async'
import {Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign} from 'lucide-react'
import {Link} from 'react-router-dom'
import React from 'react';
import {ArrowRight, Bot, RotateCcw, RotateCw, Receipt} from 'lucide-react';
import {Link} from 'react-router-dom';

const AIInventory Manager Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Brainclass Name ="w-8h-8text-cyan-400" / />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms that analyze sales patterns, seasonality, and market trends.',
      benefits: ['95% accuracy rate', 'Seasonal predictions', 'Market trend analysis', 'Automated reorder points']
    },
    {
      icon: <Packageclass Name ="w-8h-8text-emerald-400" / />,
      title: 'Smart Stock Optimization',
      description: 'AI automatically optimizes stock levels to minimize carrying costs while preventing stockouts and overstock situations.',
      benefits: ['Cost optimization', 'Stockout prevention', 'Overstock reduction', 'Dynamic reordering']
    },
    {
      icon: <Bar Chart3class Name="w-8h-8text-purple-400" / />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with real-time inventory insights, performance metrics, and predictive analytics.',
      benefits: ['Live dashboards', 'Performance metrics', 'Trend analysis', 'Custom reports']
    },
    {
      icon: <Alert Triangleclass Name="w-8h-8text-red-400" / />,
      title: 'Intelligent Alerts',
      description: 'Smart notifications for low stock, expiring items, unusual demand patterns, and supply chain disruptions.',
      benefits: ['Low stock alerts', 'Expiry warnings', 'Anomaly detection', 'Supply chain monitoring']
    },
    {
      icon: <Zapclass Name ="w-8h-8text-orange-400" / />,
      title: 'Automated Reordering',
      description: 'AI-powered automatic purchase orders based on demand forecasts, supplier performance, and cost optimization.',
      benefits: ['Auto purchase orders', 'Supplier optimization', 'Cost analysis', 'Lead time tracking']
    },
    {
      icon: <Shieldclass Name ="w-8h-8text-pink-400" / />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses, stores, and distribution centers with real-time synchronization.',
      benefits: ['Multi-warehouse support', 'Real-time sync', 'Location tracking', 'Transfer management']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
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
      description: 'Ideal for growing businesses with complex inventory',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'API integrations',
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
        'Unlimited SKUs',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'David Kim',
      company: 'Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Store',
      content: 'The automated reordering feature saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  conststats = [
    { number: '95%', label: 'Forecast Accuracy', icon: <Trending Upclass Name="w-6h-6text-cyan-400" / /> },
    { number: '35%', label: 'Cost Reduction', icon: <Dollar Signclass Name="w-6h-6text-emerald-400" / /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Packageclass Name ="w-6h-6text-purple-400" / /> },
    { number: '50 K+', label: 'SKUs Managed', icon: <Databaseclass Name ="w-6h-6text-orange-400" / /> }
  ]

  return (
    <>
      <Helmet />
        <title   />AIInventory Manager - SmartStock Management | ZionTech Group</title>
        <meta name ="description" content="Revolutionary AI-poweredinventory managementwith demandforecasting, automatedreordering, andreal-timeanalytics. Reducecosts by 35% andstockouts by 80%." / / />
        <meta name ="keywords" content="AIinventory management, demandforecasting, stockoptimization, automatedreordering, inventoryanalytics, supplychain management" / / />
        <meta name ="robots" content="index, follow" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-inventory-manager" / />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4 overflow-hiddenbg-gradient-to-brfrom-slate-900via-emerald-900to-slate-900" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)]" / />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7 xlmx-autotext-center" />
          <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-emerald-400/30" />
            <Packageclass Name ="w-4h-4" / />
            <span   />AI- Powered Inventory Management</span>
          </div>
          
          <h1className ="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
            AI Inventory
            <br / />
            <spanclassName ="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent"  />Manager Pro
            </span>
          </h1>
          
          <pclassName ="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
            Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          
          <div className ="flex flex-col sm:flex-row gap-6justify-centermb-16" />
            <Link to ="/contact" className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="#demo" className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />Watch Demo</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <sectionclassName ="py-20px-4bg-gray-900" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="grid grid-cols-2md:grid-cols-4gap-8" />
            {stats.map((stat, index) => (
              <divkey ="{index}" className="text-centerbg-white/5 backdrop-blur-smrounded-2 xlp-6borderborder-white/10" />
                <div className ="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className ="text-3 xlmd:text-4 xlfont-boldtext-whitemb-2"  />{stat.number}
                </div>
                <div className ="text-gray-300text-sm"  />{stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-emerald-900/50" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Intelligent <spanclassName ="bg-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Our AI-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-emerald-500 to-cyan-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-emerald-400transition-colors"  />{feature.title}
                </h3>
                <pclassName ="text-gray-300mb-6leading-relaxed" />
                  {feature.description}
                </p>
                <div className ="space-y-2" />
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <divkey ="{benefitIndex}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <Check Circleclass Name="w-4h-4text-green-400" / />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <sectionclassName ="py-20px-4bg-gray-900" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Flexible <spanclassName ="bg-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the perfect plan for your inventory management needs. All plans include our core AI features 
              with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricing Plans.map((plan, index) => (
              <divkey ="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-2 xlshadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <div className ="bg-gradient-to-rfrom-emerald-500 to-cyan-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                  </div>
                )}
                
                <div className ="text-centermb-8" />
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300mb-4" />{plan.description}</p>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400ml-2"   />{plan.period}</span>
                  </div>
                </div>
                
                <div className ="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <divkey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                      <spanclassName ="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to ="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-whitehover:from-emerald-600 hover:to-cyan-700 shadow-lg shadow-emerald-500/25'
                      : 'border-2 border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-brfrom-emerald-900/50to-cyan-900/50" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <spanclassName ="bg-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent"   />Industry Leaders</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              See how AI Inventory Manager is transforming inventory management for businesses worldwide.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <divkey ="{index}" className="bg-white/10 backdrop-blur-lgrounded-2 xlp-8borderborder-white/20" />
                <div className ="flexitems-centermb-4" />
                  <div className ="w-12 h-12 bg-gradient-to-rfrom-emerald-500 to-cyan-600 rounded-fullflex items-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <h4className ="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <pclassName ="text-gray-400text-sm" />{testimonial.company}</p>
                  </div>
                </div>
                <div className ="flexitems-centermb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                  ))}
                </div>
                <pclassName ="text-gray-300italic" />"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-r from-emerald-600via-cyan-600to-blue-600" />
        <div className ="max-w-7 xlmx-autotext-center" />
          <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6" />
            Ready to Optimize Your
            <br / />
            <spanclassName ="bg-gradient-to-r from-emerald-300 to-cyan-300bg-clip-texttext-transparent"  />Inventory Management?
            </span>
          </h2>
          <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />
            Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
          </p>
          <div className ="flex flex-col sm:flex-rowgap-6justify-center" />
            <Link to ="/contact" className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />View All Plans</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AIInventory Manager Page;