import React from 'react';
import Link from 'next/link';

export default function AISustainabilityBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                🌱 New Content
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                Sustainability
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI for Sustainability:
              <span className="block text-green-200">
                Green Tech Solutions 2025
              </span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover how AI is driving sustainability initiatives and green technology solutions. 
              Achieve 50% carbon reduction and $3M annual savings with AI-powered environmental solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/blog/ai-sustainability-green-tech-2025"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read the Guide
              </Link>
              <Link
                href="/case-studies/ai-sustainability-manufacturing-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View Case Study
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-200">50%</div>
                <div className="text-sm opacity-90">Carbon Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-200">$3M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-200">35%</div>
                <div className="text-sm opacity-90">Energy Efficiency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-200">95%</div>
                <div className="text-sm opacity-90">Waste Reduction</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Featured Content</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🌱</div>
                <div>
                  <h4 className="font-semibold mb-1">AI Sustainability Guide</h4>
                  <p className="text-sm opacity-90">Green tech solutions and environmental impact strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🏭</div>
                <div>
                  <h4 className="font-semibold mb-1">Manufacturing Case Study</h4>
                  <p className="text-sm opacity-90">50% carbon reduction and $3M savings achieved</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Energy Optimization</h4>
                  <p className="text-sm opacity-90">AI-powered smart grids and renewable integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">♻️</div>
                <div>
                  <h4 className="font-semibold mb-1">Waste Management</h4>
                  <p className="text-sm opacity-90">Intelligent sorting and circular economy solutions</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Link
                href="/blog"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Explore All Content →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}