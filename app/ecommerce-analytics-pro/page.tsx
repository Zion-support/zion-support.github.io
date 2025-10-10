'use client';
import React from 'react';
import { BarChart3, TrendingUp, ShoppingCart, Users, DollarSign, Eye, MousePointer, Target } from 'lucide-react';

const EcommerceAnalyticsProPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            E-commerce Analytics Pro
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Advanced AI-powered analytics for e-commerce success
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your e-commerce business with comprehensive analytics, predictive insights, and automated optimization. 
            Increase revenue by up to 300% with our advanced AI-powered analytics platform.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Monitor sales, traffic, and conversions in real-time with advanced dashboards and automated reporting.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Predictive Insights</h3>
              <p className="text-gray-300">
                AI-powered forecasting for sales trends, inventory management, and customer behavior prediction.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <ShoppingCart className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cart Abandonment Analysis</h3>
              <p className="text-gray-300">
                Identify and recover abandoned carts with intelligent retargeting and personalized follow-up campaigns.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Customer Segmentation</h3>
              <p className="text-gray-300">
                Advanced customer profiling and segmentation for targeted marketing and personalized experiences.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <DollarSign className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Revenue Optimization</h3>
              <p className="text-gray-300">
                Maximize revenue with dynamic pricing, cross-sell recommendations, and conversion rate optimization.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">A/B Testing</h3>
              <p className="text-gray-300">
                Automated A/B testing for product pages, checkout flows, and marketing campaigns with statistical significance.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10,000 orders/month</li>
                <li>Basic analytics dashboard</li>
                <li>Email support</li>
                <li>Standard reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center border-2 border-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100,000 orders/month</li>
                <li>Advanced AI analytics</li>
                <li>Priority support</li>
                <li>Custom dashboards</li>
                <li>A/B testing tools</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited orders</li>
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
                <li>White-label options</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Boost Your E-commerce Revenue?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful e-commerce businesses using our analytics platform to increase sales and optimize performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Demo
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcommerceAnalyticsProPage;