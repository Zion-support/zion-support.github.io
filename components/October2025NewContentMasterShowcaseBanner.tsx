// import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Factory, Award, ArrowRight, Zap } from 'lucide-react';

const October2025NewContentMasterShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-8 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 shadow-2xl animate-pulse">
              <Sparkles className="w-6 h-6 mr-3" />
              🎉 OCTOBER 2025: REVOLUTIONARY NEW CONTENT JUST PUBLISHED! 🎉
            </span>
          </div>

          <h2 className="text-6xl font-extrabold mb-6">
            <span className="block text-white">Edge AI + 5G Revolution</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-3">
              Complete Intelligence Platform
            </span>
          </h2>

          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive coverage of the technology transforming global enterprises: from technical deep-dive to implementation services to real-world $18.4B success story.
          </p>
        </div>

        {/* Three Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Blog Post */}
          <div className="group bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-4 text-white">
              Technical Deep Dive
            </h3>

            <div className="text-center mb-6">
              <div className="inline-block bg-indigo-500/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-gray-200">📝 COMPREHENSIVE GUIDE</span>
              </div>
            </div>

            <p className="text-gray-200 mb-6 text-center leading-relaxed">
              Complete technical architecture, implementation framework, and ROI analysis for Edge AI + 5G integration.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>&lt;10ms latency architecture design</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>Three-tier edge infrastructure blueprint</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>5G network slicing strategies</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>Federated learning implementation</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>16-week implementation roadmap</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                <span>Industry-specific use cases</span>
              </li>
            </ul>

            <div className="text-center">
              <Link
                to="/blog/ai-2025-october-edge-ai-5g-integration-revolution"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/50"
              >
                Read Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Service Offering */}
          <div className="group bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-4 text-white">
              Implementation Services
            </h3>

            <div className="text-center mb-6">
              <div className="inline-block bg-cyan-500/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-gray-200">🚀 FULL-SERVICE PLATFORM</span>
              </div>
            </div>

            <p className="text-gray-200 mb-6 text-center leading-relaxed">
              End-to-end Edge AI + 5G platform implementation with proven 2,400% ROI and 99.99% uptime guarantee.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>Strategy & architecture design</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>Private 5G network deployment</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>Edge infrastructure installation</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>Custom AI model development</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>24/7 managed services & support</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                <span>Performance guarantees & SLAs</span>
              </li>
            </ul>

            <div className="text-center">
              <Link
                to="/services/edge-ai-5g-integration-platform-2025"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Case Study */}
          <div className="group bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Award className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-4 text-white">
              $18.4B Success Story
            </h3>

            <div className="text-center mb-6">
              <div className="inline-block bg-emerald-500/30 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-gray-200">🏆 FORTUNE 50 CLIENT</span>
              </div>
            </div>

            <p className="text-gray-200 mb-6 text-center leading-relaxed">
              Global automotive manufacturer's transformation: 127 factories, 47,000+ AI devices, 3,733% first-year ROI.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>$18.4B annual value creation</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>94% OEE (world-class operations)</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>99.96% first pass yield quality</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>99.97% system uptime achieved</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>9.5-day payback period (record)</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-4 h-4 mt-1 mr-2 text-emerald-400 flex-shrink-0" />
                <span>Verified by Deloitte audit</span>
              </li>
            </ul>

            <div className="text-center">
              <Link
                to="/case-studies/ai-2025-october-automotive-edge-ai-transformation-18-billion-success"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/50"
              >
                Read Case Study
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                $127B
              </div>
              <div className="text-sm text-gray-300 font-semibold">Market Size by 2026</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                2,400%
              </div>
              <div className="text-sm text-gray-300 font-semibold">Proven ROI Over 3 Years</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                &lt;10ms
              </div>
              <div className="text-sm text-gray-300 font-semibold">Real-Time Latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                99.99%
              </div>
              <div className="text-sm text-gray-300 font-semibold">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-200 mb-6">
            💎 <span className="font-bold text-white">Complete Edge AI + 5G Platform</span> | 
            <span className="font-bold text-white"> From Strategy to Success</span> | 
            <span className="font-bold text-white"> Proven at Global Scale</span> 💎
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105"
          >
            Schedule Executive Briefing
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentMasterShowcaseBanner;
