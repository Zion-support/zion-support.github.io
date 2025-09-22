import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'AI-powered customer insights and analytics platform.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Customer Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered customer insights and analytics platform._LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Behavior Analysis</h3>
            <p className="text-gray-300 mb-4">
              Analyze customer behavior patterns and trends.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Behavior Analysis.1</li>
              <li>• Behavior Analysis.2</li>
              <li>• Behavior Analysis.3</li>
              <li>• Behavior Analysis.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Sentiment Analysis</h3>
            <p className="text-gray-300 mb-4">
              Understand customer sentiment and feedback.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Sentiment Analysis.1</li>
              <li>• Sentiment Analysis.2</li>
              <li>• Sentiment Analysis.3</li>
              <li>• Sentiment Analysis.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Personalization</h3>
            <p className="text-gray-300 mb-4">
              Create personalized experiences for customers.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Personalization.1</li>
              <li>• Personalization.2</li>
              <li>• Personalization.3</li>
              <li>• Personalization.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}