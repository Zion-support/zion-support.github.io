import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const EmotionAIRevolutionBanner = () => {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white py-12 px-6 rounded-2xl shadow-2xl mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">🎉 NEW OCTOBER 2025 RELEASE 🎉</span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-5xl font-black mb-4 tracking-tight">
            💗 Emotion AI Revolution 💗
          </h2>
          <p className="text-2xl font-semibold mb-6 text-white/90">
            Transform Customer Experience with Affective Computing
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-8 h-8" />
                <span className="text-3xl font-bold">127%</span>
              </div>
              <p className="text-sm font-medium">CSAT Increase</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-8 h-8" />
                <span className="text-3xl font-bold">$4.2B</span>
              </div>
              <p className="text-sm font-medium">Client Success Story</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-8 h-8" />
                <span className="text-3xl font-bold">640%</span>
              </div>
              <p className="text-sm font-medium">ROI in 18 Months</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Blog Post - Emotion AI */}
          <Link 
            href="/blog/ai-2025-oct-01-emotion-ai-enterprise-revolution"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6" />
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">NEW BLOG</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Emotion AI Enterprise Revolution</h3>
            <p className="text-white/80 text-sm mb-4">
              Deep dive into affective computing, multi-modal emotion detection, and real-world implementations
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Case Study */}
          <Link 
            href="/case-studies/ai-2025-oct-01-global-telecom-emotion-ai-transformation-4-2-billion-success"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6" />
              <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">SUCCESS STORY</span>
            </div>
            <h3 className="text-xl font-bold mb-2">$4.2B Telecom Transformation</h3>
            <p className="text-white/80 text-sm mb-4">
              How a global telecom leader achieved 2,227% ROI with Emotion AI in just 18 months
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Service Offering */}
          <Link 
            href="/services/emotion-ai-enterprise-transformation-services"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6" />
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full text-xs font-bold">NEW SERVICE</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Emotion AI Services</h3>
            <p className="text-white/80 text-sm mb-4">
              Complete transformation services: strategy, implementation, optimization, and support
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services/emotion-ai-enterprise-transformation-services"
            className="inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Heart className="w-6 h-6" />
            <span>Get Started with Emotion AI</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmotionAIRevolutionBanner;
