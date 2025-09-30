import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, TrendingUp, DollarSign } from 'lucide-react';

export default function NewFoundationModelsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white opacity-10 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 NEW 2026
                </span>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FOUNDATION MODELS
                </span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Master AI Foundation Models:
                <span className="block text-yellow-300">Complete Enterprise Guide</span>
              </h2>
              
              <p className="text-xl mb-8 opacity-90">
                Discover how to implement foundation models with 90% cost reduction, 300% performance improvement, 
                and enterprise-grade reliability. Real-world case study with $8M ROI achieved.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-300">90%</div>
                  <div className="text-sm opacity-90">Cost Reduction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">$8M</div>
                  <div className="text-sm opacity-90">ROI Achieved</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-foundation-models-2026"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Read Complete Guide
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies/ai-foundation-models-success-2026"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View $8M Case Study
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Model Optimization</h3>
              </div>
              <p className="text-white/90 mb-4">
                Advanced quantization and compression techniques reduce model size by 70% while maintaining accuracy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Performance Gain:</span>
                <span className="font-bold text-green-300">300%</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cost Optimization</h3>
              </div>
              <p className="text-white/90 mb-4">
                Smart caching and resource management reduce infrastructure costs while improving performance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Cost Reduction:</span>
                <span className="font-bold text-yellow-300">90%</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Deployment</h3>
              </div>
              <p className="text-white/90 mb-4">
                Production-ready infrastructure with 99.9% uptime and enterprise-grade security and monitoring.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Uptime:</span>
                <span className="font-bold text-green-300">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}