import React from "react";
import Link from "next/link";
import {
  Package,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Zap,
  Sparkles,
  Cpu,
  AlertTriangle,
  ShoppingCart,
  Truck,
  Globe,
} from "lucide-react";

const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description:
        "Advanced machine learning algorithms predict demand patterns with 95% accuracy, reducing stockouts and overstock.",
      icon: <Cpu className="w-6 h-6" loading="lazy" />,
      benefits: [
        "95% forecast accuracy",
        "Seasonal pattern recognition",
        "Real-time adjustments",
      ],
    },
    {
      title: "Smart Reorder Point Optimization",
      description:
        "Automatically calculate optimal reorder points based on lead times, demand variability, and service level targets.",
      icon: <Target className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Automated reorder points",
        "Lead time optimization",
        "Service level targeting",
      ],
    },
    {
      title: "Multi-Location Inventory Management",
      description:
        "Centralized control of inventory across multiple warehouses, stores, and distribution centers.",
      icon: <Globe className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Centralized visibility",
        "Cross-location transfers",
        "Unified reporting",
      ],
    },
    {
      title: "Real-time Analytics & Insights",
      description:
        "Comprehensive dashboards with inventory turnover, carrying costs, and performance metrics.",
      icon: <BarChart3 className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Real-time dashboards",
        "Cost analysis",
        "Performance tracking",
      ],
    },
    {
      title: "Automated Purchase Orders",
      description:
        "AI generates and sends purchase orders automatically based on demand forecasts and supplier lead times.",
      icon: <Zap className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Automated PO generation",
        "Supplier integration",
        "Cost optimization",
      ],
    },
    {
      title: "Dead Stock Prevention",
      description:
        "Identify and prevent dead stock through AI analysis of sales velocity and product lifecycle patterns.",
      icon: <AlertTriangle className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Dead stock alerts",
        "Lifecycle analysis",
        "Liquidation recommendations",
      ],
    },
  ];

  const industries = [
    {
      name: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" loading="lazy" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Retail",
      icon: <Package className="w-6 h-6" loading="lazy" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Manufacturing",
      icon: <Cpu className="w-6 h-6" loading="lazy" />,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Wholesale",
      icon: <Truck className="w-6 h-6" loading="lazy" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Food & Beverage",
      icon: <Package className="w-6 h-6" loading="lazy" />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Pharmaceutical",
      icon: <Package className="w-6 h-6" loading="lazy" />,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses with basic inventory needs",
      features: [
        "Up to 1,000 SKUs",
        "Basic forecasting",
        "Single location",
        "Email support",
        "Standard reports",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description:
        "Ideal for growing businesses with complex inventory operations",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description:
        "For large organizations with enterprise-scale inventory management",
      features: [
        "Unlimited SKUs",
        "Enterprise AI features",
        "Unlimited locations",
        "Dedicated support",
        "Custom development",
        "White-label options",
        "Advanced security",
        "On-premise deployment",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "James Rodriguez",
      company: "RetailMax Inc.",
      role: "Operations Director",
      content:
        "Zion AI Inventory Optimizer Pro reduced our inventory costs by 30% and eliminated stockouts completely. The ROI was immediate!",
      rating: 5,
      avatar: "JR",
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Plus",
      role: "Supply Chain Manager",
      content:
        "The demand forecasting is incredibly accurate. We've reduced overstock by 45% while maintaining 99% service levels.",
      rating: 5,
      avatar: "LC",
    },
    {
      name: "Michael Thompson",
      company: "Manufacturing Corp",
      role: "Inventory Manager",
      content:
        "Managing inventory across 15 locations is now effortless. The AI recommendations have transformed our operations.",
      rating: 5,
      avatar: "MT",
    },
  ];

  return (
    <>

      <div className="min-h-screen pt-16" loading="lazy">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" loading="lazy">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" loading="lazy"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" loading="lazy"></div>

          <div className="max-w-7xl mx-auto relative z-10" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6" loading="lazy">
                <Sparkles className="w-4 h-4 text-green-400 mr-2" loading="lazy" />
                <span className="text-green-400 text-sm font-medium" loading="lazy">#1 AI Inventory Management Platform</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" loading="lazy">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400" loading="lazy">Zion AI Inventory Optimizer Pro</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" loading="lazy">Transform your inventory management with AI-powered demand</p>
                forecasting, smart reorder optimization, and automated purchase
                orders that reduce costs and eliminate stockouts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" loading="lazy">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group" loading="lazy"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" loading="lazy" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center" loading="lazy"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" loading="lazy" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" loading="lazy">
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2" loading="lazy">30%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Reduction in Inventory Costs</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" loading="lazy">95%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Forecast Accuracy</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" loading="lazy">45%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Reduction in Overstock</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2" loading="lazy">99%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Service Level Achievement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-12" loading="lazy">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" loading="lazy">Trusted Across Industries</h2>
              <p className="text-lg text-gray-300" loading="lazy">Optimize inventory for any business type</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" loading="lazy">{industries.map((industry, index) => (</div>
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 text-center" loading="lazy"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >{industry.icon}</div>
                  <div className="text-sm text-gray-300 group-hover:text-green-400 transition-colors" loading="lazy">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" loading="lazy">Powerful Features for Inventory Optimization</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" loading="lazy">Everything you need to optimize inventory levels, reduce costs,</p>
                and eliminate stockouts with AI intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10" loading="lazy"
                >
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors" loading="lazy">{feature.title}</h3>h3>
                  <p className="text-gray-300 mb-4 leading-relaxed" loading="lazy">{feature.description}</p>
                  <ul className="space-y-2" loading="lazy">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400" loading="lazy"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" loading="lazy" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Choose Your Inventory Management Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Flexible pricing options designed to scale with your inventory</p>
                needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">{pricingPlans.map((plan, index) => (</div>
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-green-500/50 shadow-2xl shadow-green-500/20"
                      : "border-white/10 hover:border-green-500/30"
                  }`}
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" loading="lazy">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center" loading="lazy">
                        <Star className="w-4 h-4 mr-1" loading="lazy" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8" loading="lazy">
                    <h3 className="text-2xl font-bold text-white mb-2" loading="lazy">{plan.name}</h3>h3>
                    <p className="text-gray-300 text-sm mb-4" loading="lazy">{plan.description}</p>
                    <div className="flex items-baseline justify-center" loading="lazy">
                      <span className="text-4xl font-bold text-green-400" loading="lazy">{plan.price}</span>
                      <span className="text-gray-400 ml-1" loading="lazy">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8" loading="lazy">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300" loading="lazy"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg hover:shadow-green-500/25"
                        : "border border-green-400 text-green-400 hover:bg-green-400/10"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Trusted by Inventory Professionals</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">See how businesses are optimizing their inventory with AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">{testimonials.map((testimonial, index) => (</div>
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10" loading="lazy"
                >
                  <div className="flex items-center mb-4" loading="lazy">{[...Array(testimonial.rating)].map((_, i) => (</div>
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current" loading="lazy"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed" loading="lazy">"{testimonial.content}"</p>
                  <div className="flex items-center" loading="lazy">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3" loading="lazy">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white" loading="lazy">{testimonial.name}</div>
                      <div className="text-sm text-gray-400" loading="lazy">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-12" loading="lazy">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" loading="lazy">Ready to Optimize Your Inventory?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" loading="lazy">Join thousands of businesses already using Zion AI Inventory</p>
                Optimizer Pro to reduce costs and eliminate stockouts. Start
                your free trial today and see the difference AI can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center group" loading="lazy"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" loading="lazy" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center" loading="lazy"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" loading="lazy" />
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400" loading="lazy">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel</p>
                  anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


