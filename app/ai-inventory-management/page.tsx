'use client';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIInventoryManagementPage() {
  return (
    <>
      <Helmet>
        <title>AI Inventory Management Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered inventory management with predictive analytics, automated reordering, and real-time optimization. Starting at $149/month." />
        <meta name="keywords" content="AI inventory management, inventory optimization, supply chain management, predictive analytics, automated reordering" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-inventory-management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              AI Inventory Management
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent inventory optimization powered by AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your inventory management with AI that predicts demand, optimizes stock levels, and automates reordering to reduce costs by 40% while eliminating stockouts.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Demand Forecasting</h3>
                <p className="text-gray-300 text-center">
                  AI predicts future demand with 95% accuracy using historical data, seasonality, and market trends.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📦</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Automated Reordering</h3>
                <p className="text-gray-300 text-center">
                  Automatically reorder products when stock levels reach optimal thresholds to prevent stockouts.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Real-time Analytics</h3>
                <p className="text-gray-300 text-center">
                  Get instant insights into inventory performance, turnover rates, and optimization opportunities.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Stock Optimization</h3>
                <p className="text-gray-300 text-center">
                  AI optimizes stock levels to minimize carrying costs while maintaining service levels.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🚨</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Alert System</h3>
                <p className="text-gray-300 text-center">
                  Get notified about low stock, overstock, slow-moving items, and other critical inventory issues.
                </p>
              </div>
              
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📱</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Mobile Access</h3>
                <p className="text-gray-300 text-center">
                  Manage inventory on-the-go with our mobile app for barcode scanning and real-time updates.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 1,000 SKUs</li>
                  <li>Basic forecasting</li>
                  <li>Email alerts</li>
                  <li>Standard reporting</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center border-2 border-cyan-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$399<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Up to 10,000 SKUs</li>
                  <li>Advanced forecasting</li>
                  <li>Automated reordering</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                  <li>Mobile app</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>Unlimited SKUs</li>
                  <li>Full AI suite</li>
                  <li>Custom integrations</li>
                  <li>White-label solution</li>
                  <li>24/7 dedicated support</li>
                  <li>Custom AI training</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">40%</div>
                <h3 className="text-xl font-bold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">40% reduction in inventory costs</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-4">95%</div>
                <h3 className="text-xl font-bold text-white mb-2">Forecast Accuracy</h3>
                <p className="text-gray-300">95% accuracy in demand forecasting</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">80%</div>
                <h3 className="text-xl font-bold text-white mb-2">Stockout Reduction</h3>
                <p className="text-gray-300">80% reduction in stockouts</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-4">60%</div>
                <h3 className="text-xl font-bold text-white mb-2">Time Saved</h3>
                <p className="text-gray-300">60% reduction in inventory management time</p>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
                <p className="text-gray-300">Optimize inventory for online retail with demand forecasting and automated reordering.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300">Manage raw materials and finished goods with AI-powered optimization.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-bold text-white mb-4">Retail</h3>
                <p className="text-gray-300">Optimize store inventory levels and reduce carrying costs with intelligent forecasting.</p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-white mb-4">Distribution</h3>
                <p className="text-gray-300">Streamline distribution center operations with AI-powered inventory management.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Optimize Your Inventory Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 3,000+ businesses using our AI inventory management system to reduce costs and eliminate stockouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Free Demo
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}