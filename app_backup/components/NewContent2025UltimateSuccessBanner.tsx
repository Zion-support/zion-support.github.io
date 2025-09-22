import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateSuccessBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-white">🚀 NEW CONTENT 2025</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ultimate Success Stories
            <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
              Real Results, Real ROI
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies achieved <span className="font-bold text-yellow-300">800% ROI</span> through AI automation and quantum computing. 
            Learn from real-world implementations and proven strategies.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">800%</div>
              <div className="text-sm text-white opacity-80">ROI Achieved</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">$58M</div>
              <div className="text-sm text-white opacity-80">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">85%</div>
              <div className="text-sm text-white opacity-80">Efficiency Gain</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white opacity-80">Success Rate</div>
            </div>
          </div>
          
          {/* Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
            <Link 
              href="/content/blog/ai-2025-enterprise-automation-success-stories-ultimate-guide"
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors">
                    AI Automation Success Stories
                  </h3>
                </div>
                <p className="text-white opacity-80 text-sm mb-4">
                  Real-world case studies from Fortune 500 companies achieving 340%+ ROI through intelligent automation.
                </p>
                <div className="flex items-center text-yellow-300 text-sm font-medium">
                  <span>Read Full Guide</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/content/case-studies/quantum-ai-2026-business-transformation-case-study"
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚡</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors">
                    Quantum AI Transformation
                  </h3>
                </div>
                <p className="text-white opacity-80 text-sm mb-4">
                  Complete case study: Fortune 500 company achieves 800% ROI through quantum AI implementation.
                </p>
                <div className="flex items-center text-yellow-300 text-sm font-medium">
                  <span>View Case Study</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-70 text-sm mb-4">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="text-white font-semibold">Fortune 500</div>
              <div className="text-white font-semibold">Global 2000</div>
              <div className="text-white font-semibold">Enterprise Leaders</div>
              <div className="text-white font-semibold">Innovation Pioneers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 bg-opacity-20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300 bg-opacity-15 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default NewContent2025UltimateSuccessBanner;