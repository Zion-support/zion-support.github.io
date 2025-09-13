import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

export default function NewContentPromotionBanner2026() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-2xl p-8 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-white font-semibold">NEW CONTENT 2026</span>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Revolutionary AI Content Just Released
        </h2>
        
        <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
          Discover the future of AI with our latest cutting-edge content covering enterprise transformation, 
          quantum AI fusion, and business automation breakthroughs.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/ai-automation-enterprise-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-6 w-6 text-yellow-300" />
              <h3 className="text-lg font-bold text-white">Enterprise AI</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Transform your business with 10,000% efficiency gains through intelligent automation.
            </p>
            <div className="flex items-center text-white group-hover:text-yellow-300 transition-colors">
              <span className="text-sm font-semibold">Explore Now</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            href="/quantum-ai-fusion-2030"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-6 w-6 text-purple-300" />
              <h3 className="text-lg font-bold text-white">Quantum AI</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Experience the fusion of quantum computing and AI for unlimited processing power.
            </p>
            <div className="flex items-center text-white group-hover:text-purple-300 transition-colors">
              <span className="text-sm font-semibold">Discover Future</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            href="/ai-powered-business-transformation-2026"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="h-6 w-6 text-green-300" />
              <h3 className="text-lg font-bold text-white">Business Transform</h3>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Achieve 50,000% ROI with revolutionary AI-powered business transformation.
            </p>
            <div className="flex items-center text-white group-hover:text-green-300 transition-colors">
              <span className="text-sm font-semibold">Transform Now</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}