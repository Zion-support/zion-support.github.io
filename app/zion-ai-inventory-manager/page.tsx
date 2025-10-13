import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Package, TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react';

export default function ZionAiInventoryManagerPage() {
  const features = [
    {
      title: "Smart Inventory Tracking",
      description: "AI-powered inventory tracking with predictive analytics",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Demand Forecasting",
      description: "Predict demand patterns and optimize stock levels",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Low Stock Alerts",
      description: "Automated alerts for low stock and reorder points",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for inventory optimization",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory management solution for optimized supply chain operations." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Inventory Manager
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimize your inventory management with AI-powered insights and automated processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
=======

export default function ZionAiInventoryManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory management solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Inventory Manager
          </h1>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Optimize your inventory with AI-powered demand forecasting, automated reordering, 
            and intelligent stock management.
          </p>
<<<<<<< HEAD
=======
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion AI Inventory Manager to optimize their supply chain. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
        </div>
      </div>
    </div>
  );
}