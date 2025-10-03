// import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const October2025EdgeComputingRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/30">
              <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-purple-200">
                🚀 BREAKING: October 1, 2025 - Revolutionary Launch
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Intelligent Edge Computing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Revolution
                </span>
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Process 2.8 billion events per second in real-time with sub-5ms latency. 
                The future of AI is at the edge.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-purple-300">95%</div>
                <div className="text-sm text-purple-100">Latency Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-pink-300">$18.7B</div>
                <div className="text-sm text-purple-100">Value Creation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">10,000x</div>
                <div className="text-sm text-purple-100">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-cyan-300">99.99%</div>
                <div className="text-sm text-purple-100">Uptime SLA</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/blog/ai-2025-oct-01-intelligent-edge-computing-revolution"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Read Full Article</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-2025-october-intelligent-edge-computing-services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/30 rounded-lg">
                    <Cpu className="w-8 h-8 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Edge AI Platform</h3>
                    <p className="text-purple-200">Real-Time Intelligence at the Network Edge</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Sub-5ms Inference Times</p>
                      <p className="text-sm text-purple-200">Real-time decision-making for critical applications</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">500,000+ Edge Devices Orchestrated</p>
                      <p className="text-sm text-purple-200">Distributed intelligence across your infrastructure</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Federated Learning Integration</p>
                      <p className="text-sm text-purple-200">Privacy-preserving AI at the edge</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">$18.4B Success Story</p>
                      <p className="text-sm text-purple-200">Fortune 50 manufacturing transformation</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/case-studies/ai-2025-oct-01-global-manufacturing-edge-computing-18-billion-success"
                  className="inline-flex items-center text-purple-300 hover:text-purple-100 font-semibold transition-colors duration-300"
                >
                  <TrendingUp className="mr-2 w-5 h-5" />
                  View $18.4B Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-300">2.8B</div>
              <div className="text-sm text-purple-100">Events/Second</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-300">847% ROI</div>
              <div className="text-sm text-purple-100">in 18 Months</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300">94%</div>
              <div className="text-sm text-purple-100">Defect Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-300">89%</div>
              <div className="text-sm text-purple-100">Downtime Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025EdgeComputingRevolutionBanner;
