import React from 'react';
import Link from 'next/link';

const Fortune500SuccessStoryPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpolygon points="30,0 60,30 30,60 0,30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 ULTIMATE SUCCESS STORY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Fortune 500 AI Transformation
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              $2.3B Revenue Increase
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 500 company achieved unprecedented success through comprehensive AI transformation
            resulting in $2.3B revenue increase and 340% ROI in just 12 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">$2.3B Revenue Increase</h3>
            <p className="text-gray-200 mb-4">
              Massive revenue growth through AI-powered business transformation and optimization
            </p>
            <div className="text-2xl font-bold text-yellow-400">+15.1%</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">340% ROI Achievement</h3>
            <p className="text-gray-200 mb-4">
              Exceptional return on investment with full AI investment recovery in 8 months
            </p>
            <div className="text-2xl font-bold text-green-400">340%</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">60% Efficiency Improvement</h3>
            <p className="text-gray-200 mb-4">
              Dramatic operational efficiency gains through comprehensive AI implementation
            </p>
            <div className="text-2xl font-bold text-blue-400">60%</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$1.2B</div>
                <div className="text-gray-200 mb-2">Annual Cost Savings</div>
                <div className="text-sm text-gray-300">Operational optimization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-gray-200 mb-2">Customer Retention</div>
                <div className="text-sm text-gray-300">Enhanced experiences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">7 Months</div>
                <div className="text-gray-200 mb-2">Time-to-Market</div>
                <div className="text-sm text-gray-300">Down from 18 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12%</div>
                <div className="text-gray-200 mb-2">Market Share Recovery</div>
                <div className="text-sm text-gray-300">Competitive advantage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 mb-12">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Key Success Factors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="font-semibold">Executive Leadership</div>
                  <div className="text-sm text-gray-300">Strong CEO and board commitment</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="font-semibold">Technology Excellence</div>
                  <div className="text-sm text-gray-300">Cloud-nativescalable AI platform</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="font-semibold">Organizational Transformation</div>
                  <div className="text-sm text-gray-300">AI-first culture and training</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="font-semibold">Phased Implementation</div>
                  <div className="text-sm text-gray-300">Risk-reduced gradual rollout</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Case Study →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-900 transition-all duration-300"
            >
              Achieve Similar Success
            </Link>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>🚀 Ready to achieve similar AI transformation success? Let us help you get there.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fortune500SuccessStoryPromotionBanner;