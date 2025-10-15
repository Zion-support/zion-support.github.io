import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const ZionAIInventoryOptimizerPage: React.FC = () => {
  const features = [
    'AI-powered demand forecasting',
    'Automated reorder point optimization',
    'Real-time inventory tracking',
    'Supplier performance analytics',
    'Dead stock identification',
    'Seasonal trend analysis',
    'Multi-location inventory management',
    'Integration with ERP systems',
    'Custom reporting dashboards',
    'Mobile inventory management'
  ];

  const benefits = [
    'Reduce inventory costs by 25%',
    'Increase stock turnover by 40%',
    'Eliminate stockouts by 90%',
    'Minimize dead stock by 60%',
    'Improve cash flow by 35%',
    'Optimize warehouse space by 30%'
  ];

  const pricing = {
    starter: { price: 149, features: ['Up to 1K SKUs', 'Basic forecasting', 'Email support'] },
    professional: { price: 399, features: ['Up to 10K SKUs', 'Advanced AI analytics', 'Priority support', 'API access'] },
    enterprise: { price: 999, features: ['Unlimited SKUs', 'Full AI suite', 'Dedicated support', 'Custom integrations'] }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Inventory Optimizer - Smart Inventory Management Platform"
        description="Optimize your inventory with AI-powered forecasting and management. Reduce costs, eliminate stockouts, and maximize efficiency with intelligent inventory optimization."
        keywords="inventory management, AI forecasting, supply chain optimization, stock management, demand planning, warehouse optimization"
        canonicalUrl="https://ziontechgroup.com/zion-ai-inventory-optimizer"
      />
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animated-icon">📦</div>
              <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-6">
                Zion AI Inventory Optimizer
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your inventory management with AI-powered optimization. Predict demand, 
                reduce costs, and eliminate stockouts with intelligent forecasting and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a href="#demo" className="neon-button text-lg px-10 py-4">
                  View Demo
                </a>
                <a href="#pricing" className="neon-button-purple text-lg px-10 py-4">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Smart Inventory Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Advanced AI algorithms optimize your inventory for maximum efficiency and profitability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card glow-effect p-6 group">
                  <div className="text-3xl mb-4 animated-icon">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Machine learning algorithms continuously optimize your inventory levels and ordering patterns.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">Proven Business Impact</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="futuristic-card glow-effect p-8 text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-4">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Real-Time Analytics Dashboard</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Monitor your inventory performance with comprehensive AI-powered analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="futuristic-card glow-effect p-6 text-center">
                <div className="text-3xl font-bold neon-text mb-2">$2.4M</div>
                <div className="text-white text-sm">Inventory Value</div>
                <div className="text-neon-green text-xs">+12% vs last month</div>
              </div>
              
              <div className="futuristic-card glow-effect p-6 text-center">
                <div className="text-3xl font-bold neon-text-purple mb-2">94%</div>
                <div className="text-white text-sm">Stock Accuracy</div>
                <div className="text-neon-green text-xs">+5% vs last month</div>
              </div>
              
              <div className="futuristic-card glow-effect p-6 text-center">
                <div className="text-3xl font-bold neon-text-pink mb-2">2.3x</div>
                <div className="text-white text-sm">Turnover Rate</div>
                <div className="text-neon-green text-xs">+18% vs last month</div>
              </div>
              
              <div className="futuristic-card glow-effect p-6 text-center">
                <div className="text-3xl font-bold neon-text mb-2">$156K</div>
                <div className="text-white text-sm">Cost Savings</div>
                <div className="text-neon-green text-xs">This month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Optimization Plans</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Choose the inventory optimization plan that scales with your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <div key={plan} className={`futuristic-card glow-effect p-8 ${
                  plan === 'professional' ? 'ring-2 ring-neon-cyan' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold neon-text mb-2">${details.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-neon-cyan mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan === 'professional' 
                        ? 'neon-button' 
                        : 'neon-button-purple'
                    }`}
                  >
                    Optimize Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Optimize Your Inventory Today
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join leading businesses using Zion AI Inventory Optimizer to reduce costs and maximize efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="/contact" className="neon-button text-lg px-10 py-4">
                  Start Free Trial
                </a>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIInventoryOptimizerPage;