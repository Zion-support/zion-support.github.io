// import React from 'react';
import { Sparkles, Brain, Eye, Rocket } from 'lucide-react';

const October2025NewAIContentMegaBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-purple-900 to-indigo-900 border-y-4 border-pink-500">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-24"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse top-24 right-24 animation-delay-1000"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse -bottom-48 -right-24 animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full px-8 py-3">
            <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
            <span className="text-pink-300 font-bold text-lg tracking-wider">
              🚀 MEGA LAUNCH: OCTOBER 1, 2025 - NEW AI CONTENT REVOLUTION 🚀
            </span>
            <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Two Revolutionary AI Guides
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Just Published Today!
            </span>
          </h1>
          <p className="text-2xl text-purple-200 font-medium max-w-4xl mx-auto">
            Master advanced AI techniques with our comprehensive production-ready guides
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Reinforcement Learning Card */}
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/30 rounded-xl">
                <Brain className="w-8 h-8 text-purple-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Advanced Reinforcement Learning</h2>
            </div>
            
            <p className="text-purple-200 mb-6 text-lg">
              Master production-ready RL systems for enterprise applications
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-300">$2.8B</div>
                <div className="text-sm text-purple-200">Value Created</div>
              </div>
              <div className="bg-indigo-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-indigo-300">89%</div>
                <div className="text-sm text-indigo-200">Efficiency</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-300">94%</div>
                <div className="text-sm text-purple-200">Accuracy</div>
              </div>
              <div className="bg-indigo-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-indigo-300">340%</div>
                <div className="text-sm text-indigo-200">ROI</div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-purple-100">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>PPO, SAC, MARL algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Supply chain & manufacturing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Financial trading systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span>
                <span>12-month implementation plan</span>
              </li>
            </ul>

            <a
              href="/blog/ai-2025-oct-advanced-reinforcement-learning-enterprise"
              className="inline-flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-500/50 group"
            >
              <Brain className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Read RL Guide
            </a>
          </div>

          {/* Computer Vision Card */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/30 rounded-xl">
                <Eye className="w-8 h-8 text-cyan-300" />
              </div>
              <h2 className="text-3xl font-bold text-white">Advanced Computer Vision</h2>
            </div>
            
            <p className="text-cyan-200 mb-6 text-lg">
              Deploy enterprise-scale vision AI with proven 97% accuracy
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-cyan-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-cyan-300">$4.2B</div>
                <div className="text-sm text-cyan-200">Annual Value</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-300">97%</div>
                <div className="text-sm text-blue-200">Accuracy</div>
              </div>
              <div className="bg-cyan-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-cyan-300">92%</div>
                <div className="text-sm text-cyan-200">Labor Cut</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-300">850%</div>
                <div className="text-sm text-blue-200">ROI</div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-cyan-100">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>YOLOv8, SAM, Vision Transformers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Manufacturing & retail solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Edge AI deployment guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>$4.2B Fortune 100 case study</span>
              </li>
            </ul>

            <a
              href="/blog/ai-2025-oct-advanced-computer-vision-enterprise"
              className="inline-flex items-center justify-center gap-2 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 group"
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Read Vision Guide
            </a>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              Combined Value: $7B+ in Proven Enterprise Success
            </h3>
            <p className="text-xl text-purple-200">
              Two comprehensive guides with production-ready code, architecture patterns, and real-world success stories
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-1">$7B+</div>
              <div className="text-sm text-pink-200">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-1">97%</div>
              <div className="text-sm text-purple-200">Avg. Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-300 mb-1">90%</div>
              <div className="text-sm text-indigo-200">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-300 mb-1">595%</div>
              <div className="text-sm text-cyan-200">Avg. ROI</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-pink-500/50 group"
            >
              <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Get Expert Consultation
            </a>
            <a
              href="/case-studies/ai-2025-oct-global-retail-computer-vision-4-2-billion-success"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 group"
            >
              View $4.2B Case Study
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 text-pink-200 text-sm">
            <span className="animate-pulse">✨</span>
            <span className="font-semibold">
              JUST PUBLISHED: Advanced RL ($2.8B value) • Computer Vision ($4.2B value) • Production-ready code • Fortune 500 success stories
            </span>
            <span className="animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewAIContentMegaBanner;
