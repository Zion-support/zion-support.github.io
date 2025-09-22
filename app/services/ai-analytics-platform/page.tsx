import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Platform | Zion Tech Group',
  description: 'Comprehensive AI-powered analytics platform for enterprise data analysis and business intelligence.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Analytics Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise-grade AI analytics platform designed to transform your data into actionable business insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Models</h3>
            <p className="text-gray-300 mb-4">
              State-of-the-art machine learning models for comprehensive data analysis.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Deep Learning Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Modeling</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Data Integration</h3>
            <p className="text-gray-300 mb-4">
              Seamlessly integrate data from multiple sources for unified analytics.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• API Integrations</li>
              <li>• Database Connections</li>
              <li>• Cloud Storage</li>
              <li>• Real-time Streaming</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Built to handle enterprise-scale data processing and analytics workloads.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Cloud-native Architecture</li>
              <li>• Auto-scaling</li>
              <li>• High Availability</li>
              <li>• Security & Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
