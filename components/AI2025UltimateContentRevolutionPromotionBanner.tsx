import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, Zap, Target } from 'lucide-react';

export default function AI2025UltimateContentRevolutionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            NEW: Ultimate Content Revolution
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2025 Ultimate Content Revolution
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI insights, breakthroughs, and revolutionary content that will transform your understanding of artificial intelligence.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">500+ Articles</h3>
            <p className="text-gray-300">Comprehensive AI insights and breakthrough content</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">200+ Case Studies</h3>
            <p className="text-gray-300">Real-world AI transformation success stories</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">95% Success Rate</h3>
            <p className="text-gray-300">Proven methodologies and implementation strategies</p>
          </div>
        </div>

        {/* Content Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured Content Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  {category.icon}
                </div>
                <h4 className="text-white font-semibold mb-1">{category.title}</h4>
                <p className="text-gray-300 text-sm">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/ai-2025-ultimate-content-revolution" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Explore Ultimate Content Revolution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/blog" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Browse Latest Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Join 50,000+ professionals already leveraging our comprehensive AI content library
          </p>
        </div>
      </div>
    </div>
  );
}

const contentCategories = [
  { icon: <Brain className="h-6 w-6 text-white" />, title: "Neural Architecture", count: "85" },
  { icon: <Zap className="h-6 w-6 text-white" />, title: "Quantum AI", count: "72" },
  { icon: <Target className="h-6 w-6 text-white" />, title: "Enterprise Automation", count: "156" },
  { icon: <Brain className="h-6 w-6 text-white" />, title: "Future Predictions", count: "98" }
];