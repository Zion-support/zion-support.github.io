import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Cpu, TrendingUp, FileText, ArrowRight, Award } from 'lucide-react';

const October2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px] animate-[drift_20s_linear_infinite]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="font-bold text-lg">
              🎉 NEW CONTENT ALERT - October 1, 2025
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Latest AI Breakthroughs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mt-2">
              Just Published Today!
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover our newest blog posts, case studies, and service offerings featuring cutting-edge 
            intelligent edge computing solutions
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Blog Post Card */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/30 rounded-lg group-hover:bg-purple-500/50 transition-colors duration-300">
                <FileText className="w-6 h-6 text-purple-300" />
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-semibold rounded-full border border-green-400/30">
                NEW BLOG
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">
              Intelligent Edge Computing Revolution
            </h3>

            <p className="text-purple-200 text-sm mb-4 line-clamp-3">
              Discover how edge AI is transforming real-time processing with 95% latency reduction, 
              10,000x faster processing, and $18.7B in value creation.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-purple-300">
                <span className="font-semibold mr-2">⚡</span>
                <span>95% Latency Reduction</span>
              </div>
              <div className="flex items-center text-sm text-purple-300">
                <span className="font-semibold mr-2">🚀</span>
                <span>2.8B Events/Second</span>
              </div>
              <div className="flex items-center text-sm text-purple-300">
                <span className="font-semibold mr-2">💰</span>
                <span>Sub-5ms Inference Times</span>
              </div>
            </div>

            <Link
              to="/blog/ai-2025-oct-01-intelligent-edge-computing-revolution"
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors duration-300"
            >
              Read Article
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Case Study Card */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-500/30 rounded-lg group-hover:bg-pink-500/50 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-pink-300" />
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30">
                CASE STUDY
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-300 transition-colors duration-300">
              $18.4B Manufacturing Success
            </h3>

            <p className="text-purple-200 text-sm mb-4 line-clamp-3">
              How a Fortune 50 manufacturer deployed edge AI across 847 facilities, achieving 
              847% ROI and processing 2.8 billion IoT events per second.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-pink-300">
                <span className="font-semibold mr-2">💎</span>
                <span>$18.4B Value Creation</span>
              </div>
              <div className="flex items-center text-sm text-pink-300">
                <span className="font-semibold mr-2">📈</span>
                <span>847% ROI in 18 Months</span>
              </div>
              <div className="flex items-center text-sm text-pink-300">
                <span className="font-semibold mr-2">🏭</span>
                <span>847 Facilities Transformed</span>
              </div>
            </div>

            <Link
              to="/case-studies/ai-2025-oct-01-global-manufacturing-edge-computing-18-billion-success"
              className="inline-flex items-center text-pink-300 hover:text-white font-semibold transition-colors duration-300"
            >
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Service Card */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/30 rounded-lg group-hover:bg-blue-500/50 transition-colors duration-300">
                <Cpu className="w-6 h-6 text-blue-300" />
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-400/30">
                SERVICE
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
              Edge Computing Services
            </h3>

            <p className="text-purple-200 text-sm mb-4 line-clamp-3">
              Deploy AI at the network edge for real-time decision-making with sub-5ms latency, 
              95% cost reduction, and 99.99% uptime.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-blue-300">
                <span className="font-semibold mr-2">⚙️</span>
                <span>Edge AI Architecture Design</span>
              </div>
              <div className="flex items-center text-sm text-blue-300">
                <span className="font-semibold mr-2">🔧</span>
                <span>Federated Learning Services</span>
              </div>
              <div className="flex items-center text-sm text-blue-300">
                <span className="font-semibold mr-2">🛡️</span>
                <span>Zero-Trust Edge Security</span>
              </div>
            </div>

            <Link
              to="/services/ai-2025-october-intelligent-edge-computing-services"
              className="inline-flex items-center text-blue-300 hover:text-white font-semibold transition-colors duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-300 mb-1">95%</div>
              <div className="text-sm text-purple-100">Latency Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-300 mb-1">$18.4B</div>
              <div className="text-sm text-purple-100">Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-1">2.8B</div>
              <div className="text-sm text-purple-100">Events/Second</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-300 mb-1">847%</div>
              <div className="text-sm text-purple-100">ROI Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-1">99.99%</div>
              <div className="text-sm text-purple-100">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-purple-100">
              Ready to Transform Your Operations with Edge AI?
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-300 border border-white/30"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drift {
          from { transform: translateX(0); }
          to { transform: translateX(60px); }
        }
      `}</style>
    </div>
  );
};

export default October2025NewContentShowcaseBanner;
