import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { Zap, Globe, Target, BarChart3, Settings, Package, DollarSign, Clock, ArrowRight, CheckCircle } from 'lucide-react';
export default function ZionInventorySmart() {
  const features = [
    // ... features
  ];

  const testimonials = [
  ];
  return (
    <>
      <Helmet>
        <title>Zion Inventory Smart - AI-Powered Inventory Management Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize your inventory with Zion Inventory Smart - the ultimate AI-powered inventory management platform. Smart tracking, automated reordering, and multi-location management. Starting at $29/month."
        />
        <meta
          name="keywords"
          content="inventory management, inventory tracking, automated reordering, multi-location inventory, barcode scanning, inventory analytics, Zion Inventory Smart"
        />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 animate-pulse"></div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_50%)]"></div>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto text-center">
            
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 mb-6">
              <Package className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">#1 Inventory Management Platform 2024</span>
            </div>
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 animate-pulse">
                Zion Inventory Smart
              </span>
              
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered inventory management platform that helps you optimize stock levels, 
              reduce costs, and eliminate stockouts. Smart tracking, automated reordering, and multi-location management.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {inventoryStats.map((stat, index) => (
                <div key={index} className="text-center">
                  
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                  </div>
                  
        <div className="text-3xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  
        <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Advanced Inventory Features
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your inventory efficiently
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden"
                >
                  
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
        <div className="relative z-10">
                    
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    </h3>
                    
          <p className="text-gray-300 leading-relaxed">
                    </p>
                    
        <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-amber-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Inventory Management Pricing
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your inventory needs
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/10' 
                      : 'border-white/20 hover:border-amber-500/30'
                  }`}
                >
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
          <p className="text-gray-300 mb-4">{plan.description}</p>
                    
        <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-amber-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 shadow-lg hover:shadow-amber-500/25'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Inventory Managers
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion Inventory Smart
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden"
                >
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Package key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
          <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  
        <div className="flex items-center">
                    
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-white font-semibold mr-3">
                    </div>
                    <div>
                      
        <div className="font-semibold text-white">{testimonial.name}</div>
                      
        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-amber-900/30 to-yellow-900/30">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Managing Your Inventory Smart
            </h2>
            
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses who use Zion Inventory Smart to optimize their inventory. 
              Start your free trial today - no credit card required.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
        <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
}
);