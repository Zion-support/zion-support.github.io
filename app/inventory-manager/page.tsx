'use client'"";"'";'"
import React from 'react'";"'";'"
import SEOHead from '../components/SEOHead'";"'";'"
import { 
  CircleStackIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,;
  ChartBarIcon,;
  TruckIcon;
} from '@heroicons/react/24/outline'";"'"'"

const InventoryManagerPage: React.FC = () => {
  const features  = ['Real-time Inventory Tracking',"'Automated Reorder Points',"'Barcode Scanning',"'Multi-location Management',"'Supplier Integration',"'Advanced Analytics',"'Mobile App Access',"'API Integration'";"'"'"
  ];

  const pricingPlans  = [
    {name: 'Starter',";"'"'"
      price: '$39',";"'"'"
      period: '/month',";"'"'"
      description: 'Perfect for small businesses',";"'"'"
      features: [
        'Up to 1,000 products',"'Basic inventory tracking',"'Barcode scanning',"'Email support',"'Mobile app'";"'"'"
      ],
      popular: false

      name: 'Professional',";"'"'"
      price: '$99',";"'"'"
      period: '/month',";"'"'"
      description: 'Ideal for growing companies',";"'"'"
      features: [
        'Up to 10,000 products',"'Advanced analytics',"'Multi-location support',"'Supplier integration',"'API access',"'Priority support'";"'"'"
      ],
      popular: true

      name: 'Enterprise',";"'"'"
      price: '$299',";"'"'"
      period: '/month',";"'"'"
      description: 'For large organizations',";"'"'"
      features: [
        'Unlimited products',"'Custom integrations',"'Advanced reporting',"'White-label solution',"'Dedicated support',"'SLA guarantee'";"'"'"
      ],
      popular: false

  ]
  return ()
      />
      
      <div: className ="min-h-screen bg-slate-900 text-white">";"""
        {/* Hero Section */}
        <section: className ="relative overflow-hidden py-20 lg:py-32">";"""
          <div: className ="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>";"""
          <div: className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";"""
            <div: className ="text-center">";"""
              <h1: className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";"""
                <span: className ="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">";"""
                  Inventory Manager
                </span>
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";"""
                Streamline your inventory management with our comprehensive solution. 
                Real-time tracking, automated reorder points, and advanced analytics.
              </p>
              <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";"""
                <button: className ="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">";"""
                  Start Free Trial
                </button>
                <button: className ="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">";"""
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section: className ="py-16 bg-slate-800/30">";"""
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";"""
            <div: className ="text-center mb-12">";"""
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";"""
                Complete Inventory Solution
              </h2>
              <p: className ="text-lg text-gray-300 max-w-2xl mx-auto">";"""
                Everything you need to manage your inventory efficiently and effectively.
              </p>
            </div>
            
              {features.map((feature, index) => ()
                <div: key ={index}>
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105";"""
                  <CircleStackIcon className="w-8 h-8 text-indigo-400 mb-4" />";"""
                  <h3: className ="text-lg font-semibold mb-2">{feature}</h3>";"""
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section: className ="py-16">";"""
          <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";"""
            <div: className ="text-center mb-12">";"""
              <h2: className ="text-3xl sm:text-4xl font-bold mb-4">";"""
                Choose Your Plan
              </h2>
              <p: className ="text-lg text-gray-300">";"""
                Flexible pricing options to fit your inventory management needs.
              </p>
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";"""
              {pricingPlans.map((plan, index) => ()
                <div  key ={index}>
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20' ": 'border-slate-700 hover:border-indigo-500'";"'"'"
                  }`}
                  {plan.popular && ()
                    <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2">";"""
                      <span: className ="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">";"""
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                    </div>
                  </div>
                  
                  <ul: className ="space-y-3 mb-8">";"""
                    {plan.features.map((feature, featureIndex) => ()
                      <li: key ={featureIndex} className="flex items-center">";"""
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";"""
                        <span: className ="text-gray-300">{feature}</span>";"""
                      </li>
                    ))}
                  </ul>
                  
                  <button  className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${>
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'": 'bg-slate-700 text-white hover:bg-slate-600'";"'"'"
                  }`}>
                    Get Started
                  </button>
                </div>
              Ready to Optimize Your Inventory?
            </h2>
            <p: className ="text-lg text-gray-300 mb-8">";"""
              Start your free trial today and see how our inventory manager can streamline your operations.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";"""
              <button: className ="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">";"""
                Start Free Trial
              </button>
              <button: className ="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">";"""
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>



}}}