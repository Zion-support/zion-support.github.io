<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
=======
import { Helmet } from 'react-helmet-async'
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function AiInventoryManagerZionTechGroup() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Ai Inventory Manager solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Inventory Manager</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai inventory manager solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
=======
const AIInventoryManagerPage: React.FC = () => {
  const features = [
    'Demand Forecasting',
    'Stock Optimization',
    'Reorder Alerts',
    'Analytics Dashboard',
    'Supplier Management',
    'Cost Optimization',
    'Real-time Tracking',
    'Automated Reporting'
  ];

<<<<<<< HEAD
  const benefits = [
    '30% inventory reduction',
    '99% stock accuracy',
    'Zero stockouts',
    '50% cost savings'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Inventory Manager"></h1>
            AI Inventory Manager;
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"></p>
            Optimize inventory with AI-powered demand forecasting and intelligent stock management.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $149/month</div>
        </section>)
)
        <section className="mb-16">)
          <div className="cyber-card p-8">)
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>),
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Inventory Manager">AI Inventory Manager</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Optimize inventory with AI-powered demand forecasting and intelligent stock management.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $149/month</section>
        </section>

        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Inventory Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai inventory manager solution for modern businesses.
=======
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

  const stats = [
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-6h-6text-cyan-400" /> },
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-6h-6text-emerald-400" /> },
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-6h-6text-purple-400" /> },
    { number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-6h-6text-orange-400" /> }
  ]

  return (
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Inventory Manager - Smart Stock Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 35% and stockouts by 80%." / / />
        <meta name="keywords" content="AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics, supply chain management" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900via-emerald-900to-slate-900" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3)_0%,transparent_50%)]" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-emerald-400/30">
            <Package className="w-4 h-4" />
            <span   />AI-Powered Inventory Management</span>
          </div>

          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            AI Inventory
            <br / />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400bg-clip-texttext-transparent">Manager Pro
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your inventory management with AI-powered demand forecasting, 
            automated reordering, and intelligent stock optimization that reduces costs by 35%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#demo" className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>Watch Demo</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">
          <div className="grid grid-cols-2md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2xll p-6borderborder-white/10" />
                <div className="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className="text-3 xl md:text-4xl font-bold text-white mb-2"  />{stat.number}
                </div>
                <div className="text-gray-300text-sm"  />{stat.label}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-emerald-900/50" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Intelligent <span className="bg-gradient-to-r from-emerald-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Our AI-powered inventory management system uses advanced machine learning to optimize 
              your stock levels, predict demand, and automate critical inventory processes.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
=======
        <section className="text-center"></section>
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Inventory?</h2><p className="text-lg text-gray-300 mb-8">Contact us today to discuss your inventory management needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">Get Free Trial</a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></a>
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phon>
              </Phone>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Inventory?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us today to discuss your inventory management needs.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">Get Free Trial</a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></a>
                <Phone className="w-5 h-5" />Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />,
    </div>);
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
=======

          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xll mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-emerald-400transition-colors">{feature.title}
                </h3>

            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20px-4bg-gray-900" />
        <div className="max-w-7xlmx-auto">

            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2xll p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-emerald-400/50 shadow-2xll shadow-emerald-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (

            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2xll p-8borderborder-white/20" />
                <div className="flex items-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <p className="text-gray-400text-sm">
              {testimonial.company}</p>
                  </div>
                <div className="flex items-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}
                </div>
                <p className="text-gray-300italic">
              "{testimonial.content}"</p>
              </div>

            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600via-cyan-600to-blue-600" />
        <div className="max-w-7xlmx-autotext-center">
          <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6" />
            Ready to Optimize Your
            <br / />
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300bg-clip-texttext-transparent">Inventory Management?
            </span>
          </h2>
          <p className="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto">
              Join thousands of businesses already reducing costs and improving efficiency with AI Inventory Manager. 
            Start your free trial today - no setup fees required.
          </p>
          <div className="flex flex-col sm:flex-rowgap-6justify-center">
            <Link to="/contact" className="group bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>

  )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
}
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function AiinventorymanagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Professional ai inventory manager services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Inventory Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai inventory manager services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
export default AIInventoryManagerPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
