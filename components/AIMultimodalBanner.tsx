import React from 'react';
import Link from 'next/link';

export default function AIMultimodalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                🚀 New Article
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                Multimodal AI
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Multimodal Enterprise:
              <span className="block text-indigo-200">
                Vision, Voice & Data 2025
              </span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover how multimodal AI is transforming enterprise operations with vision, voice, and data integration. 
              Achieve 300% faster decision-making and 45% cost reduction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/blog/ai-multimodal-enterprise-2025"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read the Article
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Consultation
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-200">300%</div>
                <div className="text-sm opacity-90">Faster Decisions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-200">45%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-200">250%</div>
                <div className="text-sm opacity-90">Adoption Growth</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-200">95%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Multimodal AI Components</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">👁️</div>
                <div>
                  <h4 className="font-semibold mb-1">Computer Vision</h4>
                  <p className="text-sm opacity-90">Real-time visual analysis and object detection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎤</div>
                <div>
                  <h4 className="font-semibold mb-1">Voice Processing</h4>
                  <p className="text-sm opacity-90">Natural language understanding and generation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h4 className="font-semibold mb-1">Data Integration</h4>
                  <p className="text-sm opacity-90">Unified processing of structured and unstructured data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Processing</h4>
                  <p className="text-sm opacity-90">Sub-second response times for critical operations</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Link
                href="/services"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Explore AI Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}