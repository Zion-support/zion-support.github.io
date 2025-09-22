import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Campaign Manager | Zion Tech Group',
  description: 'Professional email campaign manager services for your business needs.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Email Campaign Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional email campaign manager services for your business needs._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 1.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 1.1</li>
              <li>• Feature 1.2</li>
              <li>• Feature 1.3</li>
              <li>• Feature 1.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 2.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 2.1</li>
              <li>• Feature 2.2</li>
              <li>• Feature 2.3</li>
              <li>• Feature 2.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 3.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 3.1</li>
              <li>• Feature 3.2</li>
              <li>• Feature 3.3</li>
              <li>• Feature 3.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}