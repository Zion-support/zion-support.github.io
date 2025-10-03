import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentAdvertisingBanner() {
  return (
    <section className="py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-white font-bold text-lg md:text-xl">
            🚀 NEW: December 2026 Ultimate Breakthrough Content
          </div>
          <div className="flex flex-wrap gap-2">
            <Link 
              href="/blog/ai-2026-december-ultimate-breakthrough-announcement" 
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Ultimate Breakthrough
              <span>→</span>
            </Link>
            <Link 
              href="/case-studies/ai-2026-december-ultimate-breakthrough-100-billion-success" 
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              $100B Success Story
              <span>→</span>
            </Link>
            <Link 
              href="/blog/ai-2026-december-quantum-superintelligence-revolution" 
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Quantum AI Revolution
              <span>→</span>
            </Link>
            <Link 
              href="/services/ai-2026-december-quantum-superintelligence-consulting" 
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 px-3 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Quantum Consulting
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}