import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, BarChart3, AlertTriangle, Zap, Shield, Cloud, Settings, TrendingUp, Users } from 'lucide-react';

const InventoryManagementSystemPage = () => {
  const features = [
    {
      title: "Real-time Inventory Tracking",
      description: "Monitor stock levels, movements, and availability across all locations",
      icon: <Package className="w-8 h-8" />,
      benefits: ["Live stock updates", "Multi-location support", "Barcode scanning", "Automated alerts"]
    },
    {
      title: "Demand Forecasting",
      description: "AI-powered predictions to optimize inventory levels and reduce costs",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Predictive analytics", "Seasonal adjustments", "Trend analysis", "Reorder optimization"]
    },
    {
      title: "Automated Reordering",
      description: "Set up automatic reorder points and supplier management",
      icon: <AlertTriangle className="w-8 h-8" />,
      benefits: ["Smart reorder points", "Supplier integration", "Purchase orders", "Cost optimization"]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive insights into inventory performance and trends",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance metrics", "Cost analysis", "Custom reports", "Data visualization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Inventory Management System - Zion Tech Group | Stock Control & Analytics</title>
        <meta name="description" content="Advanced inventory management system with real-time tracking, demand forecasting, and automated reordering. Optimize your stock levels and reduce costs." />
        <meta name="keywords" content="inventory management, stock control, demand forecasting, warehouse management, supply chain" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Inventory Management System
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Optimize your inventory with real-time tracking, demand forecasting, and automated reordering. 
            Reduce costs and improve efficiency with our comprehensive inventory management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Inventory Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your inventory efficiently and cost-effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how our inventory management system can help you reduce costs and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryManagementSystemPage;