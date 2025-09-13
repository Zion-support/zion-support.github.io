import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 New AI Innovation Showcase 2025
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Discover revolutionary AI breakthroughs and cutting-edge technologies that are transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/ai-innovation-showcase-2025"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Innovations
              </Link>
              <Link
                href="/comprehensive-services-showcase"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-1">300%</div>
              <div className="text-sm opacity-90">Guaranteed ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}