"use client";

import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Revolutionary AI Content</h2>
          <p className="text-lg md:text-xl opacity-90 mt-4 max-w-3xl mx-auto">
            Explore cutting-edge AI insights and enterprise solutions shaping 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">Data Analytics</h3>
            <p className="text-gray-200 mb-4">Turn data into intelligence with AI analytics.</p>
            <Link href="/blog/ai-2025-data-analytics-revolution-enterprise-intelligence" className="text-white underline">
              Read Guide →
            </Link>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">Blockchain</h3>
            <p className="text-gray-200 mb-4">Intelligent decentralized systems for enterprises.</p>
            <Link href="/blog/ai-2025-blockchain-integration-revolution-enterprise-solutions" className="text-white underline">
              Explore →
            </Link>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">IoT</h3>
            <p className="text-gray-200 mb-4">Smart systems and predictive maintenance.</p>
            <Link href="/blog/ai-2025-iot-integration-revolution-smart-enterprise-systems" className="text-white underline">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;