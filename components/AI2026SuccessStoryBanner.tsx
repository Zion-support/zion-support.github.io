import React from 'react';
import Link from 'next/link';

export default function AI2026SuccessStoryBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 -translate-x-48"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏆 Success Story
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Fortune 500
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              $50M Savings & 300% ROI
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              See how a Fortune 500 manufacturing company achieved unprecedented results through 
              comprehensive AI transformation using cutting-edge 2026 technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">$50M</div>
                <div className="text-sm opacity-80">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">300%</div>
                <div className="text-sm opacity-80">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">85%</div>
                <div className="text-sm opacity-80">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">6mo</div>
                <div className="text-sm opacity-80">Deployment</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-2026-mega-transformation-success"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Read Case Study
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Get Similar Results
              </a>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <div className="font-semibold">Financial Impact</div>
                    <div className="text-sm opacity-80">$50M annual savings achieved</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold">Efficiency Gains</div>
                    <div className="text-sm opacity-80">200% process efficiency increase</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold">Speed Improvements</div>
                    <div className="text-sm opacity-80">500% faster decision making</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold">Quality Enhancement</div>
                    <div className="text-sm opacity-80">150% quality improvement</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-2">Client Testimonial</div>
                  <div className="text-sm italic">
                    "The AI transformation has been nothing short of revolutionary. 
                    We've achieved $50M in annual savings and a 300% ROI."
                  </div>
                  <div className="text-xs opacity-60 mt-2">- John Davidson, CTO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}