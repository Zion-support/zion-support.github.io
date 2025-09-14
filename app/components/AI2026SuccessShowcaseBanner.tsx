import React from 'react';
import Link from 'next/link';

const AI2026SuccessShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-12 left-12 w-28 h-28 bg-rose-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-36 right-16 w-22 h-22 bg-pink-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-18 h-18 bg-purple-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-36 right-1/3 w-20 h-20 bg-rose-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🏆 2026 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-purple-300 bg-clip-text text-transparent">
            AI 2026 Success Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the revolutionary success stories of enterprises achieving 
            <span className="font-bold text-yellow-300"> $25B+ ROI</span> and 
            <span className="font-bold text-green-300"> 99.9% outcomes</span> through AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Finance</h3>
              <div className="text-3xl font-bold text-yellow-300 mb-2">$25B</div>
              <div className="text-lg opacity-90">ROI in 12 months</div>
            </div>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• 99.9% accuracy in risk assessment</li>
              <li>• 340% improvement in customer satisfaction</li>
              <li>• Zero security breaches in 18 months</li>
              <li>• $12.3B additional revenue generated</li>
            </ul>
            <Link
              href="/case-studies/ai-2026-global-finance-transformation-ultimate-success"
              className="block mt-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Read Case Study →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare Revolution</h3>
              <div className="text-3xl font-bold text-green-300 mb-2">$18B</div>
              <div className="text-lg opacity-90">ROI + 99.9% outcomes</div>
            </div>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• 99.9% patient outcomes achieved</li>
              <li>• 89% reduction in medical errors</li>
              <li>• Zero preventable deaths in 18 months</li>
              <li>• 340% improvement in diagnostic accuracy</li>
            </ul>
            <Link
              href="/case-studies/ai-2026-healthcare-revolution-ultimate-success"
              className="block mt-4 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Read Case Study →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <div className="text-3xl font-bold text-purple-300 mb-2">$12.5B</div>
              <div className="text-lg opacity-90">ROI in 10 months</div>
            </div>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• 450% increase in operational efficiency</li>
              <li>• 89% reduction in production downtime</li>
              <li>• 340% improvement in quality metrics</li>
              <li>• 15x faster new product development</li>
            </ul>
            <Link
              href="/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story"
              className="block mt-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Read Case Study →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Why These Success Stories Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Proven ROI</h4>
                  <p className="text-sm opacity-90">Real results with measurable financial impact across industries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Scalable Solutions</h4>
                  <p className="text-sm opacity-90">Frameworks that work across different company sizes and industries</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rapid Implementation</h4>
                  <p className="text-sm opacity-90">Results achieved in 10-15 months with proper planning and execution</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Competitive Advantage</h4>
                  <p className="text-sm opacity-90">Sustainable market leadership through AI transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Case Studies →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-900 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join 2,000+ enterprises already transforming with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026SuccessShowcaseBanner;