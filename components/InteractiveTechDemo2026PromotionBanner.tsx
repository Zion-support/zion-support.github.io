import React from 'react';
import Link from 'next/link';
ArrowRightPlayZapBrainTarget

const InteractiveTechDemo2026PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Play className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-semibold text-lg">INTERACTIVE DEMO</span>
            <Play className="h-8 w-8 text-yellow-400 ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Technology in Action
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Try our cutting-edge AI solutions hands-on. See how our technology works
            test different scenariosand experience the future of business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-white">
              <Brain className="h-6 w-6 text-green-300 mr-2" />
              <span className="font-semibold">AI Analysis</span>
            </div>
            <div className="flex items-center text-white">
              <Zap className="h-6 w-6 text-blue-300 mr-2" />
              <span className="font-semibold">Automation</span>
            </div>
            <div className="flex items-center text-white">
              <Target className="h-6 w-6 text-purple-300 mr-2" />
              <span className="font-semibold">Real Results</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/interactive-tech-demo-2026" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Interactive Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Personal Demo
            </Link>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              🎯 No registration required • Instant access • Real-time results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2026PromotionBanner;