import React from 'react';
import Link from 'next/link';

export default function CustomerServiceAIBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🎯 Customer Success
              </span>
              <span className="text-blue-200 text-sm">Service Excellence</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI-Powered Customer Service Revolution
            </h2>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Transform customer interactions with AI-powered solutions. Achieve 80% faster response times, 90% cost reduction, and 95% customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-customer-service-2025"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Article
              </Link>
              <Link
                href="/services/ai-customer-service"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Enhance Your Customer Service
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Customer Service Improvements</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>80% faster response times</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>90% cost reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">😊</span>
                <span>95% customer satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>24/7 intelligent support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}