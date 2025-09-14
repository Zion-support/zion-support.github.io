import React from 'react';
import Link from 'next/link';
import { 
  Brain
  Zap
  Globe
  Rocket
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

export default function AI2035FutureVisionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">NEW: AI 2035 Future Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore the
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI 2035 Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the revolutionary technologies that will transform our world by 2035. 
            From quantum consciousness to neural interfaceswitness the future of AI.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Consciousness</h3>
            <p className="text-gray-300 text-sm">
              AI systems achieving true consciousness through quantum computing and self-awareness.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Interfaces</h3>
            <p className="text-gray-300 text-sm">
              Direct brain-computer interfaces enabling seamless human-AI communication.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global AI Ecosystem</h3>
            <p className="text-gray-300 text-sm">
              Unified planetary-scale intelligence solving humanity's greatest challenges.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/ai-2035-future-vision"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Explore AI 2035 Future Vision
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-gray-400 text-sm mt-4">
            Join thousands exploring the future of artificial intelligence
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Trusted by 10,000+ professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Updated daily with latest insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm">Expert-curated content</span>
          </div>
        </div>
      </div>
    </div>
  );
}