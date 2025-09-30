import React from 'react';
import Link from 'next/link';

export default function NeuralSuperintelligenceSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Mega Success Story
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            $2.1B Savings & 1000x Performance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300">
              Neural Superintelligence Success
            </span>
          </h2>
          
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            See how a Fortune 500 manufacturing giant achieved unprecedented results with our 
            revolutionary Neural Superintelligence AI system in just 6 months.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Key Metrics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-2">$2.1B</div>
            <div className="text-lg font-semibold mb-2">Total Savings</div>
            <div className="text-sm opacity-80">Achieved in 6 months</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">1000x</div>
            <div className="text-lg font-semibold mb-2">Performance Gain</div>
            <div className="text-sm opacity-80">Processing speed improvement</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-pink-300 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-sm opacity-80">Across all operations</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Success Highlights */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Revolutionary Achievements</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-semibold">Zero Unplanned Downtime</div>
                  <div className="text-sm opacity-80">6 consecutive months across 47 facilities</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-semibold">100% Inventory Accuracy</div>
                  <div className="text-sm opacity-80">Zero stockouts across all product lines</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-semibold">99.99% Defect-Free Production</div>
                  <div className="text-sm opacity-80">Zero warranty claims in first quarter</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-semibold">300% Efficiency Increase</div>
                  <div className="text-sm opacity-80">Complete operational transformation</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/neural-superintelligence-mega-success-2026"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Read Full Case Study
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                Get Similar Results
              </Link>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                JS
              </div>
              <div className="font-semibold text-lg">Jennifer Smith</div>
              <div className="text-sm opacity-80">CEO, Global Manufacturing Corp</div>
            </div>
            
            <blockquote className="text-lg italic mb-6">
              "The Neural Superintelligence system has been nothing short of revolutionary. 
              In just 6 months, we've achieved what we thought would take 5 years. The $2.1B 
              in savings and 1000x performance improvement have transformed our entire industry position."
            </blockquote>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300">⭐⭐⭐⭐⭐</div>
              <div className="text-sm opacity-80 mt-2">5.0/5.0 Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}