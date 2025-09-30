import React from 'react';
import Link from 'next/link';

export function MultimodalAIIntegrationBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                🔮 Next-Gen AI
              </span>
              <span className="text-purple-200 text-sm">Multimodal Integration</span>
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Multimodal AI Integration: The Future is Here
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience the power of unified AI that processes text, images, voice, and video simultaneously. Achieve 300% efficiency gains with our revolutionary multimodal platform.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-purple-200">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-purple-200">Accuracy Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-multimodal-integration-2025"
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
              >
                Read Full Guide →
              </Link>
              <Link
                href="/demo/multimodal-ai"
                className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-purple-900 transition-colors inline-flex items-center justify-center"
              >
                Live Demo
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Multimodal Capabilities:</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📝</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Text Processing</h4>
                  <p className="text-purple-200">Advanced NLP with context understanding</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🖼️</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Image Analysis</h4>
                  <p className="text-purple-200">Computer vision with object recognition</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎤</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Voice Processing</h4>
                  <p className="text-purple-200">Speech recognition and synthesis</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎥</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Video Analysis</h4>
                  <p className="text-purple-200">Real-time video understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MultimodalAICustomerServiceBanner() {
  return (
    <section className="bg-gradient-to-r from-green-900 to-teal-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
              🎯 Success Story
            </span>
            <span className="text-green-200 text-sm">Customer Service AI</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Multimodal AI Customer Service: 80% Faster Response Times
          </h2>
          <p className="text-2xl text-green-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with our multimodal AI customer service platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Response Time</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
            <p className="text-green-200 text-sm">Faster responses</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Accuracy Rate</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
            <p className="text-green-200 text-sm">Query resolution</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
            <p className="text-green-200 text-sm">Support costs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
            <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
            <p className="text-green-200 text-sm">Satisfaction rate</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-green-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Case Study: E-commerce Giant</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>80% faster customer response times</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>95% accuracy in query resolution</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>60% reduction in support costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span>98% customer satisfaction rate</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/case-studies/multimodal-ai-customer-service-transformation"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                View Full Case Study →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/services/multimodal-ai-customer-service"
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-green-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Transform Your Customer Service →
          </Link>
        </div>
      </div>
    </section>
  );
}