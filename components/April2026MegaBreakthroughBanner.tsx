import React from 'react';

export default function April2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            April 2026 Mega Breakthrough
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Revolutionary AI advancements that will transform your business
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}