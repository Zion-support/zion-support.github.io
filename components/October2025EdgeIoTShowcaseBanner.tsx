import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function October2025EdgeIoTShowcaseBanner() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 border-y border-indigo-500/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-bold text-indigo-300 uppercase tracking-wide">
              Complete Content Suite
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-3">
            Edge IoT Cognitive AI
          </h3>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            Comprehensive guide, platform services, and proven $4.2B success story
          </p>
        </div>

        {/* Three Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Technical Guide Card */}
          <Link 
            to="/content/blog/ai-2025-oct-01-edge-iot-cognitive-revolution"
            className="group bg-gradient-to-br from-indigo-900/40 to-indigo-950/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl">
                <BookOpen className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wide">
                  Technical Guide
                </div>
                <div className="text-sm text-indigo-300 font-medium">
                  12 min read
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              Edge IoT Cognitive AI Revolution
            </h4>

            <p className="text-sm text-indigo-200 mb-4 line-clamp-3">
              Complete implementation guide covering architecture design, model optimization, 
              deployment strategies, and production best practices for edge AI at scale.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-indigo-300">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                Real-time inference architecture
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-300">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                Federated learning implementation
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-300">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                Edge AI observability & monitoring
              </div>
            </div>

            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Read Technical Guide
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Platform Services Card */}
          <Link 
            to="/content/services/edge-iot-cognitive-ai-platform"
            className="group bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <div className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
                  Platform Services
                </div>
                <div className="text-sm text-purple-300 font-medium">
                  90-180 days
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Edge AI Platform Services
            </h4>

            <p className="text-sm text-purple-200 mb-4 line-clamp-3">
              Enterprise-grade platform for deploying cognitive AI at the edge. Includes runtime 
              environment, decision engine, model optimization, and 24/7 support.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-purple-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Complete platform deployment
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Custom AI model development
              </div>
              <div className="flex items-center gap-2 text-xs text-purple-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Training & knowledge transfer
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-purple-300">
                <div className="text-2xl font-black">$895K+</div>
                <div className="text-xs">Starting investment</div>
              </div>
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                View Platform
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Case Study Card */}
          <Link 
            to="/content/case-studies/ai-2025-oct-global-manufacturing-edge-iot-4-2-billion-success"
            className="group bg-gradient-to-br from-pink-900/40 to-pink-950/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-pink-500/20 rounded-xl">
                <Award className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-pink-400 font-semibold uppercase tracking-wide">
                  Success Story
                </div>
                <div className="text-sm text-pink-300 font-medium">
                  Fortune 500
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
              $4.2B Manufacturing Success
            </h4>

            <p className="text-sm text-pink-200 mb-4 line-clamp-3">
              How a Fortune 500 manufacturer achieved 99.97% uptime and $4.2B in value creation 
              by deploying cognitive AI across 50,000+ edge devices in 450 facilities.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-pink-500/10 rounded-lg p-2">
                <div className="text-lg font-black text-pink-300">99.97%</div>
                <div className="text-xs text-pink-400">Uptime</div>
              </div>
              <div className="bg-pink-500/10 rounded-lg p-2">
                <div className="text-lg font-black text-pink-300">2,840%</div>
                <div className="text-xs text-pink-400">ROI</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Read Success Story
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6 border-t border-indigo-500/30">
          <p className="text-sm text-indigo-300 mb-4">
            Ready to transform your IoT operations with cognitive edge AI?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
