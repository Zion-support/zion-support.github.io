import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function SyntheticIntelligence2026Banner() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🧬 SYNTHETIC INTELLIGENCE 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synthetic Intelligence 2026
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the dawn of synthetic intelligence. Artificial consciousness, creative AI, 
            and synthetic beings that will revolutionize human-AI collaboration and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/synthetic-intelligence-2026"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Explore Synthetic AI
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all"
            >
              Join the Revolution
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}