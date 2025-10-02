import React from 'react';
import { Sparkles, Globe, Award, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

export default function October2025CognitiveAutomationMegaShowcase() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-bold">OCTOBER 2025 BREAKTHROUGH CONTENT</span>
            <Sparkles className="w-5 h-5 text-white ml-2" />
          </div>
          
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
            Revolutionary Cognitive Automation Suite
          </h2>
          <p className="text-2xl text-purple-200">
            Complete Resources for Enterprise-Scale AI Transformation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post Card */}
          <div className="group bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <Award className="w-12 h-12 text-purple-400" />
              <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200 text-sm font-semibold">
                BLOG POST
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Cognitive Automation Excellence Revolution
            </h3>
            
            <div className="space-y-3 mb-6 text-purple-200">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Complete implementation roadmap</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>96% automation rate methodology</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>$8.4B savings framework</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Technical architecture deep-dive</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Industry-specific use cases</span>
              </div>
            </div>

            <a
              href="/content/blog/ai-2025-oct-01-cognitive-automation-excellence-revolution.md"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full w-full justify-center group-hover:shadow-xl transition-all duration-300"
            >
              Read Full Article
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="mt-4 text-center text-purple-300 text-sm">
              18-minute read | October 1, 2025
            </div>
          </div>

          {/* Case Study Card */}
          <div className="group bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <Globe className="w-12 h-12 text-blue-400" />
              <span className="px-3 py-1 bg-blue-500/30 rounded-full text-blue-200 text-sm font-semibold">
                CASE STUDY
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Telecom: $8.4B Success Story
            </h3>
            
            <div className="space-y-3 mb-6 text-blue-200">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Fortune 50 transformation journey</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>47,000 processes automated</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>97-country deployment</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>29,900% ROI achieved</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>18-month implementation timeline</span>
              </div>
            </div>

            <a
              href="/content/case-studies/ai-2025-oct-01-global-telecom-cognitive-automation-8-4-billion-success.md"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full w-full justify-center group-hover:shadow-xl transition-all duration-300"
            >
              View Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="mt-4 text-center text-blue-300 text-sm">
              Detailed Analysis | October 1, 2025
            </div>
          </div>

          {/* Service Card */}
          <div className="group bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-lg rounded-3xl p-8 border-2 border-amber-400/30 hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <Briefcase className="w-12 h-12 text-amber-400" />
              <span className="px-3 py-1 bg-amber-500/30 rounded-full text-amber-200 text-sm font-semibold">
                SERVICE
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Cognitive Automation Excellence Platform
            </h3>
            
            <div className="space-y-3 mb-6 text-amber-200">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>12,400 pre-built cognitive bots</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Self-learning AI engine</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Enterprise orchestration layer</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>Real-time analytics dashboard</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span>99.99% platform availability</span>
              </div>
            </div>

            <a
              href="/content/services/cognitive-automation-excellence-platform-2025.md"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full w-full justify-center group-hover:shadow-xl transition-all duration-300"
            >
              Explore Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <div className="mt-4 text-center text-amber-300 text-sm">
              Enterprise Solution | October 1, 2025
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            🎯 Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-purple-200 mb-6">
            Schedule your FREE Cognitive Automation Readiness Assessment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cognitive-automation@ziontech.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+1-888-ZION-AI4"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white text-lg font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Call: +1-888-ZION-AI4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
