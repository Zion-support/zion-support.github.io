import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, Users, ShoppingCart, DollarSign, Target, CheckCircle, ArrowRight } from 'lucide-react'
const EcommerceAnalyticsProPage: React.FC = () => {
const features = [
{
icon: BarChart,
title: 'Real-time Analytics',
description: 'Track sales, conversions, and customer behavior in real-time with advanced analytics dashboards.'
},
{
icon: TrendingUp,
title: 'Revenue Optimization',
description: 'Identify trends and opportunities to maximize revenue and improve profit margins.'
},
{
icon: Users,
title: 'Customer Insights',
description: 'Understand customer segments, preferences, and purchasing patterns for targeted marketing.'
},
{
icon: ShoppingCart,
title: 'Inventory Management',
description: 'Optimize stock levels and predict demand with AI-powered inventory analytics.'
},
{
icon: DollarSign,
title: 'Pricing Intelligence',
description: 'Dynamic pricing recommendations based on market conditions and competitor analysis.'
},
{
icon: Target,
title: 'Conversion Tracking',
description: 'Monitor and optimize conversion funnels to increase sales and reduce cart abandonment.'
}
];
"use client";
import React from "react";

const Ecommerceanalyticspro = () => {
  const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional ecommerce analytics pro solutions"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick and efficient service delivery"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
      icon: "🔧",
      title: "Customizable",
      description: "Tailored solutions for your business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ecommerce Analytics Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ecommerce analytics pro solutions tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you implement this solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerceanalyticspro;

export default EcommerceAnalyticsPro;
