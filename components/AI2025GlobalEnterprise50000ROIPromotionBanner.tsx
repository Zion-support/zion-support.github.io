import React from 'react';
import Link from 'next/link';

const AI2025GlobalEnterprise50000ROIPromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 BREAKTHROUGH SUCCESS STORY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">50,000% ROI</span><br />
            Global Enterprise AI Transformation
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 100 company achieved unprecedented success through comprehensive AI transformation. 
            Real results, proven strategies, and actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">$53B</div>
            <div className="text-lg opacity-90">Additional Revenue</div>
            <div className="text-sm opacity-75 mt-2">Over 18 months</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">96%</div>
            <div className="text-lg opacity-90">Customer Satisfaction</div>
            <div className="text-sm opacity-75 mt-2">Up from 67%</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">34%</div>
            <div className="text-lg opacity-90">Market Share</div>
            <div className="text-sm opacity-75 mt-2">Up from 18%</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Transformation Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">0.3%</div>
              <div className="text-sm opacity-90">Defect Rate</div>
              <div className="text-xs opacity-75">Down from 12%</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-sm opacity-90">Production Speed</div>
              <div className="text-xs opacity-75">Increase</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Downtime Reduction</div>
              <div className="text-xs opacity-75">Unplanned downtime</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm opacity-90">Productivity Gain</div>
              <div className="text-xs opacity-75">Per employee</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/case-studies/ai-2025-global-enterprise-50000-roi-success-story"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 transform hover:scale-105"
            >
              📊 Read Full Case Study
            </Link>
            
            <Link
              href="/blog/ai-2025-enterprise-transformation-ultimate-guide"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              📖 Implementation Guide
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors duration-300 transform hover:scale-105"
            >
              🚀 Start Your Transformation
            </Link>
          </div>
          
          <div className="text-sm opacity-75">
            <p className="mb-2">🎯 <strong>Proven Results:</strong> Real Fortune 100 company success story</p>
            <p className="mb-2">⚡ <strong>Fast Implementation:</strong> 18-month transformation timeline</p>
            <p>🏆 <strong>Industry Leading:</strong> 50,000% ROI achievement</p>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      </div>
    </section>
  );
};

export default AI2025GlobalEnterprise50000ROIPromotionBanner;