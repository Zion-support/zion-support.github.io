'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing plans for Zion Tech Group services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Basic AI Solutions
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Email Support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Standard Features
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-8 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Advanced AI Solutions
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Priority Support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Custom Integrations
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-blue-600 mb-6">Custom</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Full AI Suite
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                24/7 Support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated Team
              </li>
            </ul>
            <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}