export const metadata = {
  title: 'AI Customer Support | Zion Tech Group',
  description: 'AI-powered customer support solutions for enhanced user experience.',
  keywords: 'ai-customer-support, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered customer support solutions for enhanced user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai-customer-support solutions designed for your specific business requirements.

import React from 'react';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react-refresh/only-export-components

export default function ServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Customer Support
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your customer support with AI-powered chatbots, intelligent ticket routing, 
          and automated responses. Reduce costs by 70% while improving customer satisfaction by 85%.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI Chatbots & Virtual Assistants"
          features={[
            'Natural language processing (NLP)',
            'Multi-language support',
            'Context-aware conversations',
            'Escalation to human agents',
            'Knowledge base integration',
            'Voice & text interactions',
          ]}
          icon="🤖"
        />
        <FeatureCard
          title="Ticket Management"
          features={[
            'Automated ticket routing',
            'Priority-based queuing',
            'SLA monitoring & alerts',
            'Ticket categorization',
            'Auto-resolution suggestions',
            'Performance analytics',
          ]}
          icon="🎫"
        />
        <FeatureCard
          title="Sentiment Analysis & Insights"
          features={[
            'Real-time sentiment tracking',
            'Customer satisfaction scoring',
            'Trend analysis & reporting',
            'Proactive issue detection',
            'Agent performance insights',
            'Customer journey mapping',
          ]}
          icon="😊"
        />
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Support Platform Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              80% Faster Resolution
            </h3>
            <p className="text-gray-600">
              AI-powered responses reduce resolution time
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              60% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Automated support reduces operational costs
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              95% Satisfaction
            </h3>
            <p className="text-gray-600">
              Consistent, high-quality customer service
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Availability
            </h3>
            <p className="text-gray-600">Round-the-clock customer support</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Intelligent Support Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai customer support solutions designed for your specific business requirements.

            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai-customer-support solutions run smoothly.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
  );
};