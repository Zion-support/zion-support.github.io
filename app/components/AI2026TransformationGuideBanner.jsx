import React from 'react';
import Link from 'next/link';

const AI2026TransformationGuideBanner = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1 mb-3">
              <span className="text-sm font-medium">🚀 NEW ULTIMATE GUIDE</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2026: Ultimate Business Transformation Guide
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Complete roadmap to AI transformation in 2026. Learn how leading companies are achieving 
              $2.8T market value, 450% ROI increases, and 85% process automation.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-sm">
                <span className="font-semibold">$2.8T Market Value</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold">450% ROI Increase</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold">85% Automation</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col gap-3">
            <Link 
              href="/blog/ai-2026-ultimate-business-transformation"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Ultimate Guide →
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Start AI Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026TransformationGuideBanner;