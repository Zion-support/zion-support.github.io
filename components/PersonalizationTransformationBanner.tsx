// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

export default function PersonalizationTransformationBanner() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white py-16 px-4 sm:px-6 lg:px-8 my-8 rounded-2xl shadow-2xl overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            FEATURED: AI Personalization Breakthrough
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
          $12.4B Revenue from AI Personalization
        </h2>
        
        <p className="text-xl md:text-2xl text-center text-pink-100 mb-8 max-w-4xl mx-auto">
          How a Fortune 100 retailer transformed <span className="font-bold text-white">500M customer experiences</span> with real-time AI personalization across all touchpoints
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-green-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">$12.4B</div>
            <div className="text-sm text-pink-100 text-center">Incremental Revenue</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">47%</div>
            <div className="text-sm text-pink-100 text-center">Conversion Rate Lift</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <ShoppingCart className="w-8 h-8 text-purple-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">40%</div>
            <div className="text-sm text-pink-100 text-center">Higher Order Value</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-pink-300" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">500M</div>
            <div className="text-sm text-pink-100 text-center">Customers Personalized</div>
          </div>
        </div>

        {/* Features highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-4xl mx-auto border border-white/20">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">&lt;50ms</div>
              <div className="text-sm text-pink-100">Personalization Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">99.98%</div>
              <div className="text-sm text-pink-100">System Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">8.7B</div>
              <div className="text-sm text-pink-100">Daily Predictions</div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/case-studies/ai-2025-oct-02-retail-personalization-12-4-billion-success"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-pink-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            Read Success Story
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link to="/blog/ai-2025-oct-02-real-time-personalization-engines"
            className="inline-flex items-center px-8 py-4 bg-purple-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-purple-700/50 transition-all duration-300"
          >
            Technical Deep Dive
          </Link>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-pink-100 text-sm">
            <span className="font-semibold">Channels:</span> Web • Mobile • Email • Push • SMS • In-Store
          </p>
          <p className="text-pink-100 text-sm mt-2">
            <span className="font-semibold">Timeline:</span> 18 months | <span className="font-semibold">ROI:</span> 14,153% over 18 months
          </p>
        </div>
      </div>
    </div>
  );
}

// Alternative compact version for later in the page
export function PersonalizationTransformationCompactBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-6 my-6 rounded-xl shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Retail Transformation</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Real-Time AI Personalization: $12.4B Impact
          </h3>
          <p className="text-pink-100">
            Fortune 100 retailer achieves 47% conversion lift with sub-50ms personalization
          </p>
        </div>
        
        <Link to="/case-studies/ai-2025-oct-02-retail-personalization-12-4-billion-success"
          className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-pink-50 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
        >
          View Case Study
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
