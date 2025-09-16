import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AdvancedAutomationSolutions2026PromotionBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🤖 AUTOMATION REVOLUTION
          </div>
          
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Advanced Automation Solutions 2026
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with our revolutionary automation solutions
            delivering intelligent process automation and autonomous systems for unprecedented efficiency.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Intelligent Process Automation</h3>
              <p className="text-gray-300 text-sm">10,000% ROI with 99.9% accuracy</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Decision Systems</h3>
              <p className="text-gray-300 text-sm">8,500% ROI in manufacturing operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📋⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Workflow Automation</h3>
              <p className="text-gray-300 text-sm">95% reduction in manual work</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/advanced-automation-solutions-2026"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}