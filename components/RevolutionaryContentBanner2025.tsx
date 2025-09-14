import React from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2025 = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary content that's transforming how businesses operate, 
            compete, and succeed in the AI-powered future. Get exclusive access to insights 
            that are reshaping entire industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🚀</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">AI Enterprise Revolution</h3>
                <p className="text-purple-200">340% ROI Achieved</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Learn how leading enterprises are achieving unprecedented transformation 
              with AI technologies that deliver measurable results and competitive advantages.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-enterprise-transformation" 
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
              >
                Read Full Article →
              </Link>
              <span className="text-sm text-gray-400">5 min read</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">⚛️</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Quantum Computing Breakthrough</h3>
                <p className="text-purple-200">10^15x Processing Power</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore how quantum computing is solving previously impossible business 
              problems and creating new opportunities for innovation and growth.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/quantum-computing-business-applications-2025" 
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
              >
                Explore Quantum Future →
              </Link>
              <span className="text-sm text-gray-400">7 min read</span>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl mr-4">🏭</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Manufacturing Success Story</h3>
                <p className="text-purple-200 text-lg">340% Efficiency Increase Achieved</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              See how a global manufacturing company transformed their operations with AI automation, 
              achieving remarkable efficiency gains and cost savings that exceeded all expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/case-studies/ai-automation-manufacturing-success"
                className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-pink-300 transition-all duration-300"
              >
                View Complete Case Study
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                All Case Studies
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Join the Revolution</h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Don't get left behind. Access our exclusive content library and start 
              implementing the strategies that are transforming businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Access Content Library
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2025;