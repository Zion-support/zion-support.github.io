// @ts-nocheck
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, ShoppingCart, DollarSign, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Retail Transformation 2025: 300% Revenue Growth Case Study',
  description: 'How a global retailer achieved 300% revenue growth and 40% cost reduction using AI-driven personalization, inventory optimization, and automation.',
  keywords: 'retail AI case study, personalization, demand forecasting, inventory optimization, 2025 AI',
  openGraph: {
    title: 'AI Retail Transformation 2025',
    description: '300% revenue growth and 40% cost reduction with AI',
    type: 'article',
    authors: ['Zion Tech Group'],
  },
};

export default function AIRetailTransformation2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            Retail Case Study
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Retail Transformation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A top-10 global retailer implemented AI across the customer journey, achieving 300% revenue growth, 18% margin expansion,
            and 40% cost reduction in logistics within 12 months.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 300% Revenue Growth</div>
            <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> 18% Margin Lift</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> 40% Cost Reduction</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-2">👤</div>
            <div className="text-sm text-gray-600">Personalization Uplift</div>
            <div className="text-3xl font-bold text-pink-600">+42%</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-sm text-gray-600">Stockouts Reduced</div>
            <div className="text-3xl font-bold text-purple-600">-68%</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-sm text-gray-600">Fulfillment Time</div>
            <div className="text-3xl font-bold text-indigo-600">-55%</div>
          </div>
        </div>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">What We Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Customer Experience</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Real-time personalization across web, app, and store kiosks</li>
                <li>• Vision-powered product discovery and styling suggestions</li>
                <li>• Conversational shopping assistants with multimodal inputs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Operations</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Demand forecasting and inventory optimization</li>
                <li>• Dynamic pricing and promotion optimization</li>
                <li>• Automated picking, packing, and routing</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Bring AI to Your Retail Journey</h2>
          <p className="text-lg opacity-90 mb-6">Get a tailored roadmap and ROI model for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/resources/ai-implementation-playbook-2025" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Get the Playbook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

