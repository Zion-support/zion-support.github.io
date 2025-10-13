'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Basic Plan
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$999/month</p>
              <p className="text-blue-700 mb-4">
                Perfect for small businesses getting started with AI.
              </p>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• AI Consulting</li>
                <li>• Basic Automation</li>
                <li>• Email Support</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Professional Plan
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-4">$2,499/month</p>
              <p className="text-green-700 mb-4">
                Ideal for growing businesses with advanced needs.
              </p>
              <ul className="text-sm text-green-600 space-y-2">
                <li>• Everything in Basic</li>
                <li>• Custom AI Solutions</li>
                <li>• Priority Support</li>
                <li>• Cloud Migration</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Enterprise Plan
              </h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$4,999/month</p>
              <p className="text-purple-700 mb-4">
                Complete solution for large enterprises.
              </p>
              <ul className="text-sm text-purple-600 space-y-2">
                <li>• Everything in Professional</li>
                <li>• Dedicated Team</li>
                <li>• 24/7 Support</li>
                <li>• Custom Development</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}