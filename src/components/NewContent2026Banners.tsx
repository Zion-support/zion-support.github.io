import React from 'react';
import { Link } from 'react-router-dom';

// Latest Content 2026 Banner
export function LatestContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="text-sm opacity-90">Latest AI Content</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link
                to="/blog/ai-autonomous-cloud-operations-2026"
                className="hover:text-yellow-200 transition-colors"
              >
                AI Autonomous Cloud Operations
              </Link>
              <span className="text-white/50">•</span>
              <Link
                to="/blog/quantum-ai-hybrid-systems-2026"
                className="hover:text-yellow-200 transition-colors"
              >
                Quantum AI Hybrid Systems
              </Link>
            </div>
          </div>
          <Link
            to="/blog"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </div>
  );
}

// New Services 2026 Banner
export function NewServices2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW SERVICES
              </span>
              <span className="text-sm opacity-90">Revolutionary AI Solutions</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link
                to="/services/autonomous-ai-operations"
                className="hover:text-yellow-200 transition-colors"
              >
                Autonomous AI Operations
              </Link>
              <span className="text-white/50">•</span>
              <Link
                to="/services/quantum-computing-ai"
                className="hover:text-yellow-200 transition-colors"
              >
                Quantum Computing AI
              </Link>
            </div>
          </div>
          <Link
            to="/services"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}

// Breakthrough Technology 2026 Banner
export function BreakthroughTechnology2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
              <span className="text-sm opacity-90">Revolutionary Technology</span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <Link
                to="/technology/meta-cognitive-ai"
                className="hover:text-yellow-200 transition-colors"
              >
                Meta-Cognitive AI
              </Link>
              <span className="text-white/50">•</span>
              <Link
                to="/technology/neural-edge-computing"
                className="hover:text-yellow-200 transition-colors"
              >
                Neural Edge Computing
              </Link>
            </div>
          </div>
          <Link
            to="/technology"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Explore Technology
          </Link>
        </div>
      </div>
    </div>
  );
}

// Default export with all banners
export default function NewContent2026Banners() {
  return (
    <div className="space-y-0">
      <LatestContent2026Banner />
      <NewServices2026Banner />
      <BreakthroughTechnology2026Banner />
    </div>
  );
}