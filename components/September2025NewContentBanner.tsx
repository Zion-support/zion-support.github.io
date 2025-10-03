import React from 'react';
import { Sparkles, Shield, Brain, Activity, TrendingUp, ArrowRight } from 'lucide-react';

const September2025NewContentBanner = () => {
  const newContent = [
    {
      icon: Shield,
      title: "Enterprise AI Security
      description: "Comprehensive guide to securing AI systems with zero-trust architecture
      link: "/blog/ai-2025-enterprise-security-best-practices
      tag: "NEW GUIDE
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Brain,
      title: "Prompt Engineering Mastery
      description: "Advanced techniques to maximize LLM performance in production
      link: "/blog/ai-2025-prompt-engineering-enterprise-guide
      tag: "HOT
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Activity,
      title: "Healthcare AI Success
      description: "95% diagnostic accuracy & $180M savings case study
      link: "/case-studies/healthcare-ai-diagnostic-transformation-2025
      tag: "CASE STUDY
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "MLOps Best Practices
      description: "Production-ready AI deployment with proven MLOps strategies
      link: "/blog/ai-2025-mlops-production-best-practices
      tag: "FEATURED
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-wider">Just Released - September 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Latest AI Insights & 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"> Success Stories</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge guides, case studies, and best practices from the frontlines of enterprise AI implementation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {newContent.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
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
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-base mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all duration-300">
                <span>Read More</span>
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              Explore All Articles
            </a>
            <a
              href="/case-studies"
              className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border-2 border-purple-500/50 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:border-purple-400">
              View Case Studies
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">4</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">New Resources</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">95%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Proven Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">$180M</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Client Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-2">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Actionable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default September2025NewContentBanner;
