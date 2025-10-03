import React from 'react';
import { Zap, Cpu, Factory, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const September30CognitiveAutomationBanner = () => {
  const newContent = [
    {
      icon: Cpu,
      title: "Cognitive Automation Platform Revolution
      description: "Breaking news: Revolutionary AI platform with 97% accuracy, 500x performance, and unprecedented ROI
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution
      tag: "🚀 BREAKING NEWS
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: Factory,
      title: "$18B Manufacturing Success Story
      description: "Fortune 50 company achieves 2,400% ROI and transforms global operations in 6 months
      link: "/case-studies/ai-2025-september-30-global-manufacturing-cognitive-automation-18-billion-success
      tag: "💰 CASE STUDY
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "500x Performance Improvement
      description: "Discover how cognitive automation delivers unprecedented speed and accuracy at scale
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution#performance-metrics
      tag: "⚡ TECH DEEP DIVE
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: DollarSign,
      title: "ROI Calculator & Implementation
      description: "Calculate your potential returns and see the 90-day transformation roadmap
      link: "/blog/ai-2025-september-30-cognitive-automation-platform-revolution#investment-roi
      tag: "📊 TOOLS
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 py-24 px-6 overflow-hidden border-y border-cyan-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full mb-8 animate-bounce shadow-lg shadow-cyan-500/50">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-base uppercase tracking-wider">Breaking: September 30, 2025 - Major AI Breakthrough</span>
            <Zap className="w-6 h-6" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Cognitive Automation Platform:
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              The AI Revolution You've Been Waiting For
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-cyan-400">$18 Billion in value creation.</strong> <strong className="text-blue-400">97% accuracy.</strong> <strong className="text-purple-400">500x performance.</strong>
            <br />
            Discover the most significant advancement in enterprise AI since machine learning itself.
          </p>
        </div>

        {/* Featured Stats Banner */}
        <div className="bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">$18B</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">97%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Decision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">500x</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">2,400%</div>
              <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">ROI Achieved</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              {/* Tag */}
              <div className="absolute top-6 right-6">
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg`}>
                  {item.tag}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all duration-300">
                <span>Explore Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <a
              href="/blog/ai-2025-september-30-cognitive-automation-platform-revolution"
              className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 shadow-lg"
            >
              Read Full Breakthrough Article →
            </a>
            <a
              href="/case-studies/ai-2025-september-30-global-manufacturing-cognitive-automation-18-billion-success"
              className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-2xl hover:from-green-500 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 shadow-lg"
            >
              View $18B Success Story →
            </a>
            <a
              href="/contact"
              className="px-10 py-5 bg-slate-800 text-white font-bold text-lg rounded-2xl border-2 border-cyan-500/50 hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Your Free Demo
            </a>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-4">
              <span className="text-cyan-400 font-bold">Limited Time Offer:</span> First 50 enterprise clients receive premium onboarding services at no additional cost 
              <span className="text-green-400 font-bold"> (valued at $500K)</span>
            </p>
            <p className="text-sm text-gray-500">
              Published: September 30, 2025 | Implementation Partner: Zion Tech Group | Verified Results by Independent Third Party
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September30CognitiveAutomationBanner;
