import React from 'react';
import Link from 'next/link';

export default function UltimateContent2025ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI and technology content for 2025. 
            Revolutionary guidesbreakthrough insightsand transformative strategies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Revolution</h3>
            <p className="text-gray-300 mb-4">
              Explore the revolutionary intersection of AI and quantum computing with 1000x processing power.
            </p>
            <Link href="/ai-2026-future-predictions-revolutionary-breakthrough-ultimate-guide" className="text-blue-400 hover:text-blue-300">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Business Systems</h3>
            <p className="text-gray-300 mb-4">
              Discover Level 5 business autonomy with self-optimizing operations and predictive maintenance.
            </p>
            <Link href="/quantum-ai-2026-business-transformation-ultimate-guide" className="text-blue-400 hover:text-blue-300">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">1000% ROI Revolution</h3>
            <p className="text-gray-300 mb-4">
              Achieve unprecedented returns with 90% operational efficiency gains and 300% revenue growth.
            </p>
            <Link href="/services" className="text-blue-400 hover:text-blue-300">
              Get Started →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Transform Your Business Today</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already transforming with Zion Tech Group's cutting-edge AI solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">340%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}