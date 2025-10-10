'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertisingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Advertising
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Promote your business with our comprehensive advertising solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive digital marketing strategies to boost your online presence.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• SEO Optimization</li>
              <li>• Social Media Marketing</li>
              <li>• Content Creation</li>
              <li>• Analytics & Reporting</li>
            </ul>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">$999/month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Ads</h3>
            <p className="text-gray-600 mb-4">
              Leverage AI to create and optimize high-converting advertisements.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• AI Ad Creation</li>
              <li>• Automated Optimization</li>
              <li>• A/B Testing</li>
              <li>• Performance Analytics</li>
            </ul>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">$1,499/month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Management</h3>
            <p className="text-gray-600 mb-4">
              Complete brand management and reputation monitoring services.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Brand Strategy</li>
              <li>• Reputation Monitoring</li>
              <li>• Crisis Management</li>
              <li>• Brand Guidelines</li>
            </ul>
            <div className="mt-4">
              <span className="text-2xl font-bold text-green-600">$1,799/month</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesAdvertisingPage;