import React from "react";
import SEOHead from "../components/SEOHead";

const InventoryManagerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Inventory Manager - Zion Tech Group"
        description="Smart inventory management system with AI-powered forecasting and automated reordering."
        keywords="inventory management, stock tracking, supply chain, AI forecasting, automated reordering"
        canonicalUrl="https://ziontechgroup.com/inventory-manager"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Inventory Manager Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart inventory management system with AI-powered forecasting and
              automated reordering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      AI Forecasting
                    </h3>
                    <p className="text-gray-400">
                      Predict demand patterns and optimize inventory levels
                      using machine learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Automated Reordering
                    </h3>
                    <p className="text-gray-400">
                      Set up automatic reorder points and supplier integration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Real-time Tracking
                    </h3>
                    <p className="text-gray-400">
                      Monitor stock levels, movements, and costs in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Multi-location Support
                    </h3>
                    <p className="text-gray-400">
                      Manage inventory across multiple warehouses and locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  $149/mo
                </div>
                <div className="text-gray-400 line-through">$199/mo</div>
                <div className="text-sm text-orange-400">
                  Limited Time Offer
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Products</span>
                  <span className="text-orange-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Forecasting</span>
                  <span className="text-orange-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Automated Reordering</span>
                  <span className="text-orange-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Multi-location</span>
                  <span className="text-orange-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">API Integration</span>
                  <span className="text-orange-400">✓</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagerPage;
