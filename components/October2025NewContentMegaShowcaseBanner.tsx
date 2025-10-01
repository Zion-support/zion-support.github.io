import React from 'react';
import { Rocket, TrendingUp, Award, Sparkles, BookOpen, Building2 } from 'lucide-react';

const October2025NewContentMegaShowcaseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-fuchsia-900 text-white py-20 px-6 rounded-2xl shadow-2xl mb-8 border-4 border-rose-500 animate-pulse-slow">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 text-rose-900 px-8 py-3 rounded-full font-black text-lg uppercase tracking-wide shadow-lg animate-bounce">
            🎉 NEW CONTENT JUST RELEASED! 🎉
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-transparent bg-clip-text">
            Revolutionary Content
          </span>
          <br />
          <span className="text-white">Just Published!</span>
        </h1>

        {/* Subheadline */}
        <p className="text-3xl md:text-4xl text-center mb-10 text-rose-200 font-bold">
          Breakthrough Multi-Agent Orchestration • $27.9B Total Value
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-3 border-yellow-400 transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-black text-yellow-300 mb-3 text-center">
              New Blog Post
            </h3>
            <h4 className="text-lg font-bold text-white mb-4 text-center">
              Multi-Agent Orchestration Revolution
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">99.8% Automation Rate</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">$24.7B Proven Value</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Award className="w-4 h-4" />
                <span className="text-sm">47 Fortune 500 Deployments</span>
              </div>
            </div>
            <a
              href="/blog/ai-2025-oct-01-breakthrough-multiagent-orchestration-revolution"
              className="block w-full bg-yellow-400 text-rose-900 py-3 rounded-xl font-bold text-center hover:bg-yellow-300 transition-all"
            >
              Read Article →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-3 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <Award className="w-16 h-16 text-pink-300" />
            </div>
            <h3 className="text-2xl font-black text-pink-300 mb-3 text-center">
              New Case Study
            </h3>
            <h4 className="text-lg font-bold text-white mb-4 text-center">
              Fortune 50 Insurance: $3.2B Success
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">6,780% ROI Achieved</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">27,400 AI Agents</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Award className="w-4 h-4" />
                <span className="text-sm">147 Countries Transformed</span>
              </div>
            </div>
            <a
              href="/case-studies/ai-2025-oct-01-global-insurance-multi-agent-transformation-3-2-billion-success"
              className="block w-full bg-pink-400 text-rose-900 py-3 rounded-xl font-bold text-center hover:bg-pink-300 transition-all"
            >
              View Case Study →
            </a>
          </div>

          {/* Service Offering */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-3 border-purple-400 transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-4">
              <Building2 className="w-16 h-16 text-purple-300" />
            </div>
            <h3 className="text-2xl font-black text-purple-300 mb-3 text-center">
              New Service
            </h3>
            <h4 className="text-lg font-bold text-white mb-4 text-center">
              Multi-Agent Platform Services
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Enterprise AI Platform</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">4.7x Average ROI</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-rose-200">
                <Award className="w-4 h-4" />
                <span className="text-sm">847+ Integrations</span>
              </div>
            </div>
            <a
              href="/services/ai-2025-october-multi-agent-orchestration-platform-services"
              className="block w-full bg-purple-400 text-rose-900 py-3 rounded-xl font-bold text-center hover:bg-purple-300 transition-all"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Total Value Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-pink-500 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <p className="text-rose-900 text-2xl font-bold mb-2">COMBINED VALUE CREATION</p>
            <p className="text-6xl font-black text-white mb-2">$27.9 BILLION</p>
            <p className="text-rose-900 text-xl font-semibold">
              Proven Results Across 47 Fortune 500 Companies
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-2xl font-bold text-rose-200 mb-6">
            🚀 Discover How Multi-Agent AI Can Transform Your Enterprise 🚀
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="/blog"
              className="bg-white text-rose-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <BookOpen className="w-6 h-6" />
              Explore All Blog Posts
            </a>
            <a
              href="/case-studies"
              className="bg-rose-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-400 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Award className="w-6 h-6" />
              View All Case Studies
            </a>
            <a
              href="/services"
              className="bg-fuchsia-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-fuchsia-400 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <Rocket className="w-6 h-6" />
              See All Services
            </a>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 text-center">
          <p className="text-rose-200 text-xl">
            <span className="font-bold text-yellow-300">✨ Just Published Today</span> • 
            <span className="font-bold text-pink-300"> 100% Fresh Content</span> • 
            <span className="font-bold text-purple-300"> Proven Business Value</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentMegaShowcaseBanner;
