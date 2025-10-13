import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, TrendingUp, AlertCircle } from 'lucide-react';

export default function ZionAiInventoryManager() {
  const features = [
    {
      title: "Real-time Inventory Tracking",
      description: "Monitor your inventory levels in real-time with AI-powered insights",
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: "Predictive Analytics",
      description: "Predict demand and optimize stock levels using advanced AI algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Automated Alerts",
      description: "Get notified about low stock, overstock, and other inventory issues",
      icon: <AlertCircle className="w-8 h-8" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered inventory management solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Inventory Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize your inventory with AI-powered management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Coming Soon
          </h2>
          <p className="text-gray-600 text-center">
            We're developing the most advanced AI-powered inventory management system. 
            Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
}