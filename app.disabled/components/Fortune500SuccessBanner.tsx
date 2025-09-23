import React from 'react';
import Link from 'next/link';

const Fortune500SuccessBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Success Badge */}
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🏆 ULTIMATE SUCCESS STORY</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Fortune 500 Company Achieves
            <span className="block text-yellow-300">600% ROI with AI</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Discover how a Fortune 500 manufacturing company transformed their operations with autonomous AI, 
            creating $2.8 billion in business value and achieving unprecedented success.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">600%</div>
              <div className="text-sm text-gray-200">ROI Achieved</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">$2.8B</div>
              <div className="text-sm text-gray-200">Business Value</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">18</div>
              <div className="text-sm text-gray-200">Months Timeline</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">99.7%</div>
              <div className="text-sm text-gray-200">System Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies/fortune-500-autonomous-ai-transformation-2025-ultimate-success"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>

        {/* Success Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Operational Excellence</h3>
            <p className="text-gray-200 text-sm">
              99.7% uptime achieved across all 150+ facilities worldwide, with 65% improvement in productivity.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Quality Transformation</h3>
            <p className="text-gray-200 text-sm">
              Defect rate reduced from 8.5% to 1.2%, with 85% reduction in customer returns and warranty claims.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Market Leadership</h3>
            <p className="text-gray-200 text-sm">
              Market share increased from 18% to 30%, becoming the #1 innovation leader in manufacturing.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-white/10 rounded-lg p-8 text-center">
          <blockquote className="text-xl italic text-gray-200 mb-4">
            "This transformation has been nothing short of revolutionary. Zion Tech Group helped us achieve 
            what we thought was impossible - 600% ROI and $2.8 billion in business value in just 18 months."
          </blockquote>
          <cite className="text-sm text-gray-300">
            — Fortune 500 Manufacturing CEO
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Fortune500SuccessBanner;