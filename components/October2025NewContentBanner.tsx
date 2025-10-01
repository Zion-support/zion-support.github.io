import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Brain, TrendingUp, ArrowRight, Zap } from 'lucide-react';

const October2025NewContentBanner = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 px-6 rounded-2xl shadow-2xl mb-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-7 h-7" />
            <span className="font-black text-2xl">🎉 OCTOBER 2025 NEW RELEASES 🎉</span>
            <Sparkles className="w-7 h-7" />
          </div>
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            Latest AI Innovations & Insights
          </h1>
          <p className="text-2xl font-semibold text-white/90 mb-8">
            Cutting-edge content on Emotion AI, Self-Evolving Architectures, and Enterprise Success Stories
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm px-8 py-5 rounded-2xl transform hover:scale-105 transition-transform">
              <div className="text-4xl font-black mb-2">4</div>
              <p className="text-sm font-bold">New Content Pieces</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-5 rounded-2xl transform hover:scale-105 transition-transform">
              <div className="text-4xl font-black mb-2">$4.2B</div>
              <p className="text-sm font-bold">Featured Client Success</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-5 rounded-2xl transform hover:scale-105 transition-transform">
              <div className="text-4xl font-black mb-2">2,227%</div>
              <p className="text-sm font-bold">Maximum ROI Achieved</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Blog: Emotion AI */}
          <Link 
            href="/blog/ai-2025-oct-01-emotion-ai-enterprise-revolution"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Heart className="w-10 h-10 text-pink-300" />
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">BLOG</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-200 transition-colors">
              Emotion AI Revolution
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Transform customer experience through affective computing and multi-modal emotion detection
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-pink-200">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Blog: Self-Evolving AI */}
          <Link 
            href="/blog/ai-2025-oct-01-self-evolving-ai-architectures-breakthrough"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-10 h-10 text-purple-300" />
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">BLOG</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
              Self-Evolving AI Architectures
            </h3>
            <p className="text-white/80 text-sm mb-4">
              AI systems that autonomously redesign and optimize themselves using NAS and meta-learning
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-200">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Case Study */}
          <Link 
            href="/case-studies/ai-2025-oct-01-global-telecom-emotion-ai-transformation-4-2-billion-success"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30 group"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-10 h-10 text-green-300" />
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-200 transition-colors">
              $4.2B Telecom Success Story
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Global telecom achieves 2,227% ROI with Emotion AI in 18 months - complete transformation story
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-green-200">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Service */}
          <Link 
            href="/services/emotion-ai-enterprise-transformation-services"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border-2 border-white/30 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-10 h-10 text-yellow-300" />
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">SERVICE</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
              Emotion AI Services
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Complete transformation services: strategy, implementation, optimization - 640% ROI potential
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-yellow-200">
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Featured Topics */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 border-2 border-white/30">
          <h2 className="text-3xl font-black mb-6 text-center">🎯 What You'll Discover</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Emotion AI Technology</h3>
              <p className="text-white/80 text-sm">
                Multi-modal emotion detection, real-time processing, and enterprise applications
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Self-Evolving Systems</h3>
              <p className="text-white/80 text-sm">
                Neural architecture search, meta-learning, and continuous improvement frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Proven Results</h3>
              <p className="text-white/80 text-sm">
                Real-world success stories with quantified ROI and implementation roadmaps
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
          <p className="text-white/90 mb-6 text-lg">
            Explore our services or schedule a consultation with our AI experts
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Sparkles className="w-6 h-6" />
              <span>View All Services</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white"
            >
              <Zap className="w-6 h-6" />
              <span>Schedule Consultation</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentBanner;
