import React from 'react';
import { Sparkles, Shield, Activity, Brain, DollarSign, ArrowRight } from 'lucide-react';

const October2025NewContentBanner = () => {
  const newContent = [
    {
      icon: Brain,
      title: "Enterprise RAG Implementation",
      description: "Production-ready RAG architecture achieving 98.7% accuracy with 200ms latency",
      link: "/blog/ai-2025-october-enterprise-rag-implementation",
      tag: "NEW GUIDE",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Activity,
      title: "Real-Time AI Operations",
      description: "99.99% uptime with automated monitoring and sub-second incident response",
      link: "/blog/ai-2025-october-real-time-ai-operations",
      tag: "HOT",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Shield,
      title: "AI Governance & Security",
      description: "Enterprise framework for trustworthy AI with zero-trust architecture",
      link: "/blog/ai-2025-october-agent-governance-security",
      tag: "COMPLIANCE",
      color: "from-indigo-600 to-violet-600"
    },
    {
      icon: DollarSign,
      title: "AI Cost Optimization",
      description: "Cut infrastructure costs by 68% with intelligent FinOps strategies",
      link: "/blog/ai-2025-october-cost-optimization-finops",
      tag: "FEATURED",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-indigo-600 text-white px-6 py-2 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">Just Released - October 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Production-Ready AI: 
            <span className="bg-gradient-to-r from-emerald-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text"> Enterprise Guides</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guides for deploying enterprise AI with proven architectures, security frameworks, and optimization strategies
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {newContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {item.tag}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-base mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Read Guide</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
            >
              Explore All Guides
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border-2 border-indigo-500/50 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:border-indigo-400"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-2">4</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">New Guides</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text mb-2">98.7%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">RAG Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">99.99%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">AI Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">68%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Cost Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentBanner;
