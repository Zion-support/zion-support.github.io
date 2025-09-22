import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Data Analysis | Zion Tech Group',
  description: 'AI-powered data analysis and insights platform.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Data Analysis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered data analysis and insights platform._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Automated Analysis</h3>
            <p className="text-gray-300 mb-4">
              Automatically analyze large datasets for patterns and insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Automated Analysis.1</li>
              <li>• Automated Analysis.2</li>
              <li>• Automated Analysis.3</li>
              <li>• Automated Analysis.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Visualization</h3>
            <p className="text-gray-300 mb-4">
              Create compelling visualizations of your data.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Visualization.1</li>
              <li>• Visualization.2</li>
              <li>• Visualization.3</li>
              <li>• Visualization.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Natural Language Queries</h3>
            <p className="text-gray-300 mb-4">
              Query your data using natural language.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Natural Language Queries.1</li>
              <li>• Natural Language Queries.2</li>
              <li>• Natural Language Queries.3</li>
              <li>• Natural Language Queries.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}