import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateSuccessBanner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 NEW SUCCESS STORIES 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate Business Transformation Success Stories
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover how Fortune 500 companies achieved 800% ROI through AI transformation, 
            quantum computing breakthroughs, and neural interface implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">800% ROI Success Story</h3>
            <p className="text-lg opacity-90 mb-6">
              Fortune 500 company achieved unprecedented returns through comprehensive AI transformation in just 6 months.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="opacity-80">Cost Savings:</span>
                <span className="font-bold">$50M annually</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Efficiency Gain:</span>
                <span className="font-bold">340% increase</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Customer Satisfaction:</span>
                <span className="font-bold">85% improvement</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-ultimate-business-transformation-success-story"
              className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Story →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing Breakthrough</h3>
            <p className="text-lg opacity-90 mb-6">
              Revolutionary quantum computing applications delivering 1000x faster problem-solving for enterprise operations.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="opacity-80">Processing Speed:</span>
                <span className="font-bold">1000x faster</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Cost Reduction:</span>
                <span className="font-bold">50% savings</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Problem Solving:</span>
                <span className="font-bold">Previously impossible</span>
              </div>
            </div>
            <Link 
              href="/blog/quantum-computing-2025-business-breakthrough-ultimate-guide"
              className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interface Revolution</h3>
            <p className="text-lg opacity-90 mb-6">
              Tech company achieved 500% productivity increase through revolutionary neural interface implementation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="opacity-80">Productivity:</span>
                <span className="font-bold">500% increase</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Error Reduction:</span>
                <span className="font-bold">90% fewer errors</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Employee Satisfaction:</span>
                <span className="font-bold">95% satisfaction</span>
              </div>
            </div>
            <Link 
              href="/case-studies/neural-interface-enterprise-implementation-success"
              className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6">
            <span className="text-lg font-medium">💡 Ready to Transform Your Business?</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateSuccessBanner;