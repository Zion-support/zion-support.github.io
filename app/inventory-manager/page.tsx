import React from 'react';
import SEOHead from '../components/SEOHead';

const InventoryManagerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Inventory Manager - Zion Tech Group"
        description="AI-powered inventory management system with real-time tracking, automated reordering, and predictive analytics."
        keywords="inventory management, stock tracking, supply chain, warehouse management, inventory optimization"
        canonicalUrl="https://ziontechgroup.com/inventory-manager"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Inventory Manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              AI-powered <span className="text-orange-400 font-semibold">inventory management system</span> 
              that optimizes your supply chain and reduces costs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-orange-400 text-orange-400 hover:border-orange-300 hover:text-orange-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="gradient-text">Inventory Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your inventory efficiently and profitably
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-Time Tracking",
                  description: "Track inventory levels across multiple locations in real-time",
                  icon: "📦",
                  features: ["Live inventory levels", "Multi-location tracking", "Barcode scanning", "Mobile app"]
                },
                {
                  title: "AI-Powered Forecasting",
                  description: "Predict demand and optimize stock levels with machine learning",
                  icon: "🔮",
                  features: ["Demand forecasting", "Seasonal analysis", "Trend detection", "Automated reordering"]
                },
                {
                  title: "Automated Reordering",
                  description: "Set up smart reorder points and automated purchase orders",
                  icon: "🔄",
                  features: ["Smart reorder points", "Auto PO generation", "Supplier integration", "Cost optimization"]
                },
                {
                  title: "Warehouse Management",
                  description: "Optimize warehouse operations with advanced WMS features",
                  icon: "🏭",
                  features: ["Pick & pack optimization", "Location management", "Cycle counting", "Quality control"]
                },
                {
                  title: "Analytics & Reporting",
                  description: "Comprehensive analytics to optimize inventory performance",
                  icon: "📊",
                  features: ["Inventory turnover", "ABC analysis", "Dead stock reports", "Cost analysis"]
                },
                {
                  title: "Integration Hub",
                  description: "Connect with your existing systems and suppliers",
                  icon: "🔗",
                  features: ["ERP integration", "E-commerce platforms", "Supplier APIs", "Accounting systems"]
                }
              ].map((feature, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Measurable <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the real impact on your inventory operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "30%", description: "Reduction in carrying costs", icon: "💰" },
                { metric: "95%", description: "Inventory accuracy", icon: "🎯" },
                { metric: "50%", description: "Faster order fulfillment", icon: "⚡" },
                { metric: "25%", description: "Reduction in stockouts", icon: "📈" }
              ].map((benefit, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your inventory needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  period: "/month",
                  description: "Perfect for small businesses",
                  features: [
                    "Up to 1,000 SKUs",
                    "2 warehouse locations",
                    "Basic reporting",
                    "Email support",
                    "Mobile app"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "/month",
                  description: "Ideal for growing businesses",
                  features: [
                    "Up to 10,000 SKUs",
                    "Unlimited locations",
                    "Advanced AI features",
                    "Priority support",
                    "API access",
                    "Custom integrations"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "Tailored for large organizations",
                  features: [
                    "Unlimited SKUs",
                    "Multi-warehouse management",
                    "Full AI suite",
                    "24/7 support",
                    "Custom development",
                    "Dedicated support"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`glass-dark rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-orange-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-5 h-5 bg-orange-400 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-orange-400 text-white hover:bg-orange-500' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and see how AI can transform your inventory management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryManagerPage;