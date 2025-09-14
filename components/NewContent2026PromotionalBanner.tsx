import React from 'react';
import Link from 'next/link';
import { 
  Rocket
  Brain
  Atom
  Bot
  Zap
  ArrowRight
  Star,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';

const NewContent2026PromotionalBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mr-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  NEW 2026 Content
                </div>
                <div className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs font-medium">
                  <Star className="h-3 w-3 mr-1" />
                  Revolutionary
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Discover Revolutionary
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  AI 2026 Breakthroughs
                </span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Explore cutting-edge AI technologiesquantum computing solutionsand advanced automation systems that are transforming businesses worldwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-sm">
                  <Brain className="h-5 w-5 text-yellow-300 mr-2" />
                  <span>AI Breakthroughs</span>
                </div>
                <div className="flex items-center text-sm">
                  <Atom className="h-5 w-5 text-cyan-300 mr-2" />
                  <span>Quantum Solutions</span>
                </div>
                <div className="flex items-center text-sm">
                  <Bot className="h-5 w-5 text-green-300 mr-2" />
                  <span>Smart Automation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2026-breakthrough-showcase"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Explore AI 2026
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link 
                  href="/quantum-computing-solutions-2026"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Atom className="h-5 w-5 mr-2" />
                  Quantum Computing
                </Link>
                <Link 
                  href="/advanced-automation-solutions-2026"
                  className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Bot className="h-5 w-5 mr-2" />
                  Automation Solutions
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* AI Breakthroughs Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">AI Breakthroughs</h3>
                      <p className="text-white/70 text-sm">2026 Technologies</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-white/80">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Quantum Neural Networks
                    </div>
                    <div className="flex items-center text-xs text-white/80">
                      <Zap className="h-3 w-3 mr-1" />
                      10,000x Speed Increase
                    </div>
                  </div>
                </div>

                {/* Quantum Computing Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3">
                      <Atom className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Quantum Computing</h3>
                      <p className="text-white/70 text-sm">Revolutionary Solutions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-white/80">
                      <Award className="h-3 w-3 mr-1" />
                      Error-Corrected Quantum
                    </div>
                    <div className="flex items-center text-xs text-white/80">
                      <Star className="h-3 w-3 mr-1" />
                      Unbreakable Security
                    </div>
                  </div>
                </div>

                {/* Automation Solutions Card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mr-3">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Advanced Automation</h3>
                      <p className="text-white/70 text-sm">Intelligent Business Systems</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-white/80">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        95% Efficiency
                      </div>
                      <div className="flex items-center text-xs text-white/80">
                        <Zap className="h-3 w-3 mr-1" />
                        Autonomous Systems
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-white/80">
                        <Award className="h-3 w-3 mr-1" />
                        99.9% Accuracy
                      </div>
                      <div className="flex items-center text-xs text-white/80">
                        <Star className="h-3 w-3 mr-1" />
                        Self-Learning AI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2026PromotionalBanner;