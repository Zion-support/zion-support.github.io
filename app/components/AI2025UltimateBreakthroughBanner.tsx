import React from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            🚀 NEW: AI 2025 Ultimate Breakthrough
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary Autonomous Systems
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              That Transform Everything
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Discover the groundbreaking AI 2025 autonomous systems delivering 
            <span className="font-bold text-yellow-400"> $2.8B+ in business value</span> and 
            <span className="font-bold text-yellow-400"> 850% ROI</span> to enterprise clients worldwide.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">$2.8B+</div>
              <div className="text-sm opacity-80">Total Value Created</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">850%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">99.7%</div>
              <div className="text-sm opacity-80">System Uptime</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">85%</div>
              <div className="text-sm opacity-80">Efficiency Gain</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-breakthrough-revolutionary-autonomous-systems"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read the Full Guide →
            </Link>
            <Link
              href="/case-studies/global-enterprise-ai-2025-autonomous-transformation-ultimate-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Success Story
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <Link href="/services/ai-automation" className="hover:text-yellow-400 transition-colors">
              AI Automation Services
            </Link>
            <Link href="/tools/ai-transformation-roi-calculator-2025" className="hover:text-yellow-400 transition-colors">
              ROI Calculator
            </Link>
            <Link href="/resources/ai-implementation-roadmap-2025-complete-guide" className="hover:text-yellow-400 transition-colors">
              Implementation Guide
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-400 bg-opacity-20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-5 w-8 h-8 bg-purple-400 bg-opacity-20 rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughBanner;