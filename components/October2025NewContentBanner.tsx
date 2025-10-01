import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function October2025NewContentBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="h-8 w-8" />
          <h2 className="text-3xl md:text-4xl font-bold">
            NEW October 2025 Content: Real-World AI Success Stories
          </h2>
          <Sparkles className="h-8 w-8" />
        </div>
        
        <p className="text-center text-xl mb-8 text-blue-50">
          Discover how leading organizations are achieving massive ROI with Edge AI and LLM automation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Edge AI Healthcare */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
            <div className="flex items-start gap-4">
              <Award className="h-12 w-12 text-yellow-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Edge AI in Healthcare Revolution</h3>
                <p className="text-blue-50 mb-3">
                  Real-time patient monitoring and point-of-care diagnostics delivering unprecedented outcomes
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-green-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    $42M ROI
                  </span>
                  <span className="bg-blue-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    52% fewer adverse events
                  </span>
                  <span className="bg-purple-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    67% faster diagnostics
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/blog/ai-2025-oct-01-edge-ai-healthcare-revolution"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Read Technical Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-studies/ai-2025-oct-01-healthcare-edge-ai-transformation-42-million-success"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    View Case Study
                    <TrendingUp className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Financial Services LLM */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
            <div className="flex items-start gap-4">
              <Award className="h-12 w-12 text-yellow-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Services LLM Automation</h3>
                <p className="text-blue-50 mb-3">
                  Transforming banking operations with intelligent automation and compliance
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-green-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    $87M savings
                  </span>
                  <span className="bg-blue-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    89% efficiency gain
                  </span>
                  <span className="bg-purple-500/90 px-3 py-1 rounded-full text-sm font-semibold">
                    602% ROI
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/blog/ai-2025-oct-01-financial-services-llm-automation"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Read Technical Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-studies/ai-2025-oct-01-financial-services-llm-automation-87-million-success"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    View Case Study
                    <TrendingUp className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Service */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-6 border-2 border-white/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">🚀 New Service: Edge AI Enterprise Transformation</h3>
              <p className="text-lg text-blue-50 mb-3">
                Deploy real-time intelligence at the edge. Healthcare, Manufacturing, Retail, and Finance solutions.
              </p>
              <p className="text-blue-50">
                Average <span className="font-bold text-yellow-300">450% first-year ROI</span> • 
                <span className="font-bold text-yellow-300"> 50+ successful deployments</span> • 
                <span className="font-bold text-yellow-300"> $500M+ in client value</span>
              </p>
            </div>
            <Link
              href="/services/october-2025-edge-ai-enterprise-transformation-services"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Explore Edge AI Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
