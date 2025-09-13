import React from 'react';
import Link from 'next/link';

const RevolutionaryContentPromotionBanner2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH ANNOUNCEMENT
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              AI 2025 Ultimate Content Revolution
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the most comprehensive collection of breakthrough AI content, revolutionary case studies, and transformative tools reshaping business in 2025.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2B+</div>
              <div className="text-lg font-semibold">Total Client ROI</div>
              <div className="text-sm opacity-80">Across 500+ implementations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold">Success Rate</div>
              <div className="text-sm opacity-80">Client satisfaction achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-lg font-semibold">Performance Boost</div>
              <div className="text-sm opacity-80">Processing speed improvement</div>
            </div>
          </div>

          {/* Featured Content Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-2xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Breakthrough</h3>
              <p className="text-sm opacity-80 mb-4">
                Revolutionary quantum-enhanced processing with 99.9% accuracy and 2,500% average ROI.
              </p>
              <Link 
                href="/blog/ai-2025-ultimate-breakthrough-revolution"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">$2B ROI Success Story</h3>
              <p className="text-sm opacity-80 mb-4">
                Most successful AI transformation in corporate history with Fortune 100 breakthrough results.
              </p>
              <Link 
                href="/case-studies/global-enterprise-ai-transformation-2025-ultimate-success-2-billion-roi"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-2xl mb-3">🧮</div>
              <h3 className="text-lg font-bold mb-2">AI ROI Calculator</h3>
              <p className="text-sm opacity-80 mb-4">
                Advanced calculator with real-world success metrics from 500+ projects and custom projections.
              </p>
              <Link 
                href="/tools/ai-2025-roi-calculator"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Try Now →
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/revolutionary-content-showcase-2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              🚀 Explore Revolutionary Content
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              📞 Get Expert Consultation
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-sm opacity-80">
            <p>Join 500+ companies already transforming with AI. Don't miss the revolution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentPromotionBanner2025;