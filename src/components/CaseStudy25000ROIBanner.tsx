import React from 'react';
import Link from 'next/link';

export default function CaseStudy25000ROIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold mb-8 animate-pulse">
            🏆 CASE STUDY - 25,000% ROI ACHIEVED
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Fortune 500 Success Story
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how a Fortune 500 company achieved unprecedented 25,000% ROI with our AI 2025 breakthrough technology
            transforming their entire business ecosystem in just 90 days.
          </p>
          
          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">25,000%</div>
              <div className="text-lg text-gray-300">Total ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">90</div>
              <div className="text-lg text-gray-300">Days to Transform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$2.5B</div>
              <div className="text-lg text-gray-300">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Efficiency Gain</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/case-studies/ai-2025-global-transformation-25000-roi" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read the Full Story
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Real results from real companies - join the transformation revolution</p>
          </div>
        </div>
      </div>
    </div>
  );
}