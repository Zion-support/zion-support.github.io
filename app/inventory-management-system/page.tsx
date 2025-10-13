import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Package, 
  BarChart3, 
  AlertTriangle, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  FileText,
  MessageSquare,
  Settings
} from 'lucide-react';

const InventoryManagementSystemPage = () => {
  return (
    <>
      <Helmet>
        <title>Inventory Management System - Zion Tech Group</title>
        <meta name="description" content="Comprehensive inventory management system for tracking stock, managing suppliers, and optimizing warehouse operations. Streamline your inventory control." />
        <meta name="keywords" content="inventory management, stock tracking, warehouse management, supply chain, inventory control" />
        <meta property="og:title" content="Inventory Management System - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive inventory management system for tracking stock, managing suppliers, and optimizing warehouse operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/inventory-management-system" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Inventory Management System
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Streamline your inventory operations with our comprehensive management system. 
                Track stock levels, manage suppliers, and optimize warehouse efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Inventory Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your inventory efficiently and cost-effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Stock Tracking */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Stock Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Real-time inventory tracking with barcode scanning and automated updates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Barcode scanning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Multi-location tracking</span>
                  </li>
                </ul>
              </div>

              {/* Low Stock Alerts */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Low Stock Alerts</h3>
                <p className="text-gray-300 mb-6">
                  Never run out of stock with intelligent alerts and reorder suggestions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Reorder suggestions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom thresholds</span>
                  </li>
                </ul>
              </div>

              {/* Supplier Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Supplier Management</h3>
                <p className="text-gray-300 mb-6">
                  Manage supplier relationships and streamline procurement processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Supplier database</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Purchase orders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>

              {/* Analytics & Reporting */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
                <p className="text-gray-300 mb-6">
                  Get insights into inventory performance with detailed reports and analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Inventory reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Trend analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cost tracking</span>
                  </li>
                </ul>
              </div>

              {/* Warehouse Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Warehouse Management</h3>
                <p className="text-gray-300 mb-6">
                  Optimize warehouse operations with location tracking and picking optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Location tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Picking optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cycle counting</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Integration</h3>
                <p className="text-gray-300 mb-6">
                  Connect with your existing systems for seamless data flow.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>ERP integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>E-commerce platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Inventory?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of efficient inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryManagementSystemPage;