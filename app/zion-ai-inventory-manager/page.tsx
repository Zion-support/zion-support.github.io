import React from 'react';
import { Link , ArrowRight, CheckCircle, Star, Zap, TrendingUp  } from "react-router-dom"; origin/cursor/analyze-improve-and-deploy-application-0ff3;
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
const ZionAIInventoryManager = () => {
import { BarChart3, Package, TrendingUp, AlertTriangle, Users, Clock, Shield, Zap, ArrowRight, CheckCircle, Star, DollarSign, Smartphone, Globe, Database, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with 95% accuracy using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Reduce stockouts by 60%"
    },
    {
      title: "Real-Time Inventory Tracking",
      description: "Monitor stock levels across multiple locations with live updates", origin/cursor/analyze-improve-and-deploy-application-1091;
      icon: <Package className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast demand and optimize stock levels using AI algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Reordering",
      description: "Set up automatic reorder points and supplier management",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-location Support",
      description: "Manage inventory across multiple warehouses and locations",
      icon: <Globe className="w-6 h-6" />,
    "30% reduction in stockouts",
    "25% lower inventory costs",
    "Real-time visibility",
    "Automated reordering",
    "Multi-location support",
    "Advanced analytics"
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" /><Helmet /><title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai inventory manager solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16" /><div className="text-center" /><h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Inventory Manager</h1>
          </h1>
<p className="text-xl text-gray-600 mb-8">
            Intelligent inventory management with AI optimization.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Start Free Trial</button>
            </button>
            <button className="border border-gray-300 text-gray-300 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Learn More</button>
            </button>
 origin/cursor/analyze-improve-and-deploy-application-0ff3;
          </div>
        </div>
<div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI-Driven Features</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to optimize your inventory management ;
              and reduce costs while improving customer satisfaction.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              </div><div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               /><div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}</h3>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}</p>
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-medium" /><CheckCircle className="w-4 h-4 mr-2" />
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features ;
              and come with a 30-day free trial.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              </div><div;
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ;
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' 
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" /><span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Start Free Trial</Link>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their inventory management with our AI-powered solution.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              </div><div;
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               /><div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between" /><div /><div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-cyan-400 text-sm font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {testimonial.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Inventory Management?</h2>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using Zion AI Inventory Manager to optimize their supply chain. 
            Start your free trial today and see the difference AI can make.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Free Trial;
              </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo</Link>
            </Link>
          </div>
        </div> origin/cursor/analyze-improve-and-deploy-application-1091
;