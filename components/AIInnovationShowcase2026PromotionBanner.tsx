import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';

const AIInnovationShowcase2026PromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-semibold text-lg">NEW IN 2026</span>
            <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Innovation Showcase
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the future of artificial intelligence with our cutting-edge innovations. 
            Discover breakthrough technologies that will transform your business in 2026.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-white">
              <Brain className="h-6 w-6 text-blue-300 mr-2" />
              <span className="font-semibold">Neural Interfaces</span>
            </div>
            <div className="flex items-center text-white">
              <Zap className="h-6 w-6 text-purple-300 mr-2" />
              <span className="font-semibold">Quantum AI</span>
            </div>
            <div className="flex items-center text-white">
              <ArrowRight className="h-6 w-6 text-green-300 mr-2" />
              <span className="font-semibold">300% ROI</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-innovation-showcase-2026" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Explore Innovations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-blue-200">
            <p className="text-sm">
              🚀 Limited Time: Free consultation for early adopters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationShowcase2026PromotionBanner;