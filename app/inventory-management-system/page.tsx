import React from 'react';
import { Package, AlertTriangle } from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedSEO from '../components/EnhancedSEO';

const InventoryManagementSystemPage = () => {
  const features = [
    {
      title: "Real-time Inventory Tracking",
      description: "Track inventory levels in real-time across multiple locations and channels",
      icon: <Package className="w-8 h-8" /</Package className="w-8 h-8" />>,
      benefits: ["Live stock levels", "Multi-location support", "Barcode scanning", "Automated updates"]
    },
    {
      title: "Demand Forecasting",
      description: "AI-powered demand forecasting to optimize inventory levels and reduce costs",
      icon: <BarChart3 className="w-8 h-8" /</BarChart3 className="w-8 h-8" />>,
      benefits: ["Predictive analytics", "Seasonal trends", "Demand patterns", "Reorder alerts"]
    },
    {
      title: "Automated Reordering",
      description: "Set up automatic reorder points and purchase orders to prevent stockouts",
      icon: <Zap className="w-8 h-8" /</Zap className="w-8 h-8" />>,
      benefits: ["Reorder automation", "Supplier integration", "Purchase orders", "Approval workflows"]
    },
    {
      title: "Multi-channel Management",
      description: "Manage inventory across online stores, physical locations, and marketplaces",
      icon: <Globe className="w-8 h-8" /</Globe className="w-8 h-8" />>,
      benefits: ["Channel sync", "Marketplace integration", "Unified view", "Cross-channel analytics"]
    },
    {
      title: "Reporting & Analytics",
      description: "Comprehensive reports and analytics to optimize inventory performance",
      icon: <BarChart3 className="w-8 h-8" /</BarChart3 className="w-8 h-8" />>,
      benefits: ["Inventory reports", "Turnover analysis", "Cost tracking", "Custom dashboards"]
    },
    {
      title: "Integration Hub",
      description: "Connect with your existing systems for seamless data flow",
      icon: <Database className="w-8 h-8" /</Database className="w-8 h-8" />>,
      benefits: ["ERP integration", "Accounting software", "E-commerce platforms", "API access"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses with basic inventory needs",
      features: [
        "Up to 1,000 SKUs",
        "Basic reporting",
        "Email support",
        "Mobile app access",
        "1 warehouse location"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses with multiple locations",
      features: [
        "Up to 10,000 SKUs",
        "Advanced analytics",
        "Multi-location support",
        "API access",
        "Priority support",
        "Automated reordering"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with complex inventory needs",
      features: [
        "Unlimited SKUs",
        "Advanced forecasting",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Reduce Stockouts",
      description: "Minimize stockouts by up to 80% with better demand forecasting",
      icon: <AlertTriangle className="w-6 h-6" /</AlertTriangle className="w-6 h-6" />>
    },
    {
      title: "Lower Costs",
      description: "Reduce inventory costs by 15-25% through optimized stock levels",
      icon: <Target className="w-6 h-6" /</Target className="w-6 h-6" />>
    },
    {
      title: "Improve Efficiency",
      description: "Streamline operations and reduce manual work by 60%",
      icon: <Zap className="w-6 h-6" /</Zap className="w-6 h-6" />>
    },
    {
      title: "Better Decisions",
      description: "Make data-driven decisions with comprehensive analytics",
      icon: <BarChart3 className="w-6 h-6" /</BarChart3 className="w-6 h-6" />>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"</div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>
      <EnhancedSEO
        title="Inventory Management System - Zion Tech Group | Stock Control & Analytics"
        description="Advanced inventory management system with real-time tracking, demand forecasting, automated reordering, and multi-channel support. Optimize your inventory operations."
        keywords="inventory management system, stock control, demand forecasting, automated reordering, multi-channel inventory, inventory analytics"
        canonical="https://ziontechgroup.com/inventory-management-system"
      /</EnhancedSEO
        title="Inventory Management System - Zion Tech Group | Stock Control & Analytics"
        description="Advanced inventory management system with real-time tracking, demand forecasting, automated reordering, and multi-channel support. Optimize your inventory operations."
        keywords="inventory management system, stock control, demand forecasting, automated reordering, multi-channel inventory, inventory analytics"
        canonical="https://ziontechgroup.com/inventory-management-system"
      />>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"</section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">>
        <ResponsiveContainer className="text-center"</ResponsiveContainer className="text-center">>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"</h1 className="text-4xl md:text-6xl font-bold text-white mb-6">>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"</span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">>
              Inventory Management System
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"</p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">>
            Optimize your inventory operations with our comprehensive management system. 
            Track stock levels, forecast demand, and automate reordering across all channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"</div className="flex flex-col sm:flex-row gap-4 justify-center">>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" /</FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />>}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" /</FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />>}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"</section className="py-20 px-4 sm:px-6 lg:px-8">>
        <ResponsiveContainer</ResponsiveContainer>>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"</h2 className="text-3xl md:text-4xl font-bold text-white mb-6">>
              Powerful Inventory Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"</p className="text-xl text-gray-300 max-w-4xl mx-auto">>
              Everything you need to manage inventory efficiently and optimize your supply chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">>
            {features.map((feature) => (
              <FuturisticCard key={index} className="h-full"</FuturisticCard key={index} className="h-full">>
                <div className="text-center mb-6"</div className="text-center mb-6">>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"</div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3"</h3 className="text-xl font-semibold text-white mb-3">>{feature.title}</h3>
                  <p className="text-gray-300 mb-4"</p className="text-gray-300 mb-4">>{feature.description}</p>
                </div>
                <ul className="space-y-2"</ul className="space-y-2">>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"</li key={benefitIndex} className="flex items-center text-sm text-gray-300">>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"</section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">>
        <ResponsiveContainer</ResponsiveContainer>>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"</h2 className="text-3xl md:text-4xl font-bold text-white mb-6">>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"</p className="text-xl text-gray-300 max-w-4xl mx-auto">>
              Choose the plan that fits your business size and inventory complexity. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"</div className="grid grid-cols-1 md:grid-cols-3 gap-8">>
            {pricing.map((plan) => (
              <FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}</FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"</div className="absolute -top-4 left-1/2 transform -translate-x-1/2">>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"</span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"</div className="text-center mb-6">>
                  <h3 className="text-2xl font-bold text-white mb-2"</h3 className="text-2xl font-bold text-white mb-2">>{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"</div className="text-4xl font-bold text-cyan-400 mb-2">>
                    {plan.price}
                    <span className="text-lg text-gray-400"</span className="text-lg text-gray-400">>{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm"</p className="text-gray-300 text-sm">>{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"</ul className="space-y-3 mb-8">>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"</li key={featureIndex} className="flex items-center text-sm text-gray-300">>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /</CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />>
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="sm"
                  className="w-full"
                </FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="sm"
                  className="w-full"
                >>
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"</section className="py-20 px-4 sm:px-6 lg:px-8">>
        <ResponsiveContainer</ResponsiveContainer>>
          <div className="text-center mb-16"</div className="text-center mb-16">>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"</h2 className="text-3xl md:text-4xl font-bold text-white mb-6">>
              Why Choose Our Inventory System?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto"</p className="text-xl text-gray-300 max-w-4xl mx-auto">>
              Join thousands of businesses who have optimized their inventory operations with our system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">>
            {benefits.map((benefit) => (
              <div key={index} className="text-center"</div key={index} className="text-center">>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"</div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2"</h3 className="text-lg font-semibold text-white mb-2">>{benefit.title}</h3>
                <p className="text-gray-300 text-sm"</p className="text-gray-300 text-sm">>{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"</section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">>
        <ResponsiveContainer className="text-center"</ResponsiveContainer className="text-center">>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"</h2 className="text-3xl md:text-4xl font-bold text-white mb-6">>
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"</p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">>
            Start your free trial today and see how our inventory management system can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"</div className="flex flex-col sm:flex-row gap-4 justify-center">>
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" /</FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />>}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" /</FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />>}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default InventoryManagementSystemPage;
""'"'}}}}