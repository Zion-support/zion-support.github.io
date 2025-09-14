import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary Content 2025
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Revolutionary content solutions for 2025 and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;