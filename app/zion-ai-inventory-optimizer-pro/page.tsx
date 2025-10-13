import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import {
  BarChart3,
  CheckCircle,
  Cpu,
  Zap
} from 'lucide-react';

const ZionAIInventoryOptimizerProPage: React.FC = () => {
  const features = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future demand with 95% accuracy using advanced machine learning algorithms and historical data analysis.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["95% accuracy", "Real-time predictions", "Seasonal adjustments"]
    },
    {
      title: "Automated Reordering",
      description: "Intelligent reorder points and quantities to prevent stockouts while minimizing carrying costs.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Smart reorder points", "Cost optimization", "Supplier integration"]
    },
    {
      title: "Inventory Analytics",
      description: "Comprehensive analytics and insights to optimize inventory levels and reduce waste.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Performance metrics", "Cost analysis", "Trend identification"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Inventory Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered inventory optimization solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Inventory Optimizer Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimize your inventory with AI-powered forecasting, automated reordering, and intelligent analytics. 
            Reduce costs by up to 30% while improving stock availability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Inventory?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start optimizing your inventory with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
=======

export default function ZionAiInventoryOptimizerPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Inventory Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Optimize your inventory with AI-powered demand forecasting." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Inventory Optimizer Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize your inventory with AI-powered demand forecasting.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Demand Forecasting</h3>
              <p className="text-gray-600">
                Predict future demand with machine learning algorithms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stock Optimization</h3>
              <p className="text-gray-600">
                Maintain optimal stock levels to reduce costs and prevent stockouts.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Monitor inventory levels and get alerts for reorder points.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default ZionAIInventoryOptimizerProPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6246
