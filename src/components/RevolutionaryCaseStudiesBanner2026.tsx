import React from 'react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-500/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • JANUARY 2026
          </div>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Case Studies
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Real-world success stories showcasing how our revolutionary technologies 
            are transforming businesses and lives across the globe
          </p>
          
          {/* Case Study Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-bold mb-2">Fortune 500 Transformation</h3>
              <p className="text-emerald-200 text-sm mb-3">+300% efficiency gain with autonomous AI agents</p>
              <div className="text-emerald-400 font-semibold text-sm">$2M+ Cost Savings</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-2">Global Blockchain Implementation</h3>
              <p className="text-teal-200 text-sm mb-3">Streamlined supply chain operations worldwide</p>
              <div className="text-teal-400 font-semibold text-sm">99.9% Uptime</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="text-lg font-bold mb-2">Cloud Migration Success</h3>
              <p className="text-cyan-200 text-sm mb-3">60% faster performance with 99.9% uptime</p>
              <div className="text-cyan-400 font-semibold text-sm">$5M+ Savings</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryCaseStudies2026" 
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              View All Case Studies →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="border border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg hover:scale-105 transform"
            >
              Start Your Success Story
            </a>
            <a 
              href="/pages/NextGenInnovationHub2025" 
              className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Innovation Hub →
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>500+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>50M+ Lives Impacted</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>99.9% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Infinite Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;