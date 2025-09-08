import React from 'react';

export const metadata = {
  title: 'AI Email Optimizer | Zion Tech Group',
  description: 'Professional AI email optimization services to improve your email marketing campaigns.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Email Optimizer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Boost your email marketing performance with AI-powered optimization that 
            increases open rates, click-through rates, and conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Smart Email Optimization
            </h2>
            <p className="text-gray-300 mb-6">
              Our AI analyzes your email content, subject lines, and send times to 
              optimize every aspect of your email campaigns for maximum engagement.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                AI-powered subject line optimization
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Content personalization and A/B testing
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Optimal send time recommendations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Spam score reduction and deliverability
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Optimization Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Subject Line AI</h4>
                <p className="text-gray-300">Generate compelling subject lines that increase open rates</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Content Analysis</h4>
                <p className="text-gray-300">Optimize email content for better engagement</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Send Time Optimization</h4>
                <p className="text-gray-300">Find the best times to send emails to each recipient</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}