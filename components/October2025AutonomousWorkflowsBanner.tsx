import React from "react";
import { GitBranch, Zap, CheckCircle } from "lucide-react";

export default function October2025AutonomousWorkflowsBanner() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-500/20 border border-pink-500/40 rounded-full">
            <Zap className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-semibold text-sm">
              BREAKTHROUGH: Autonomous Workflow Intelligence
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Self-Organizing Workflows
            </span>
            <br />
            <span className="text-3xl text-purple-200">
              Zero Configuration Required
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Revolutionary AI-powered workflows that automatically optimize, heal, and scale 
            based on real-time business needs - delivering{" "}
            <span className="font-bold text-yellow-300">87% faster deployment</span> and{" "}
            <span className="font-bold text-green-300">$2.3B cost reduction</span>.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all">
              <GitBranch className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-Orchestration</h3>
              <p className="text-purple-300">
                Workflows self-organize based on priority, resources, and business impact
              </p>
              <div className="mt-4 text-2xl font-bold text-pink-400">94% Efficient</div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Self-Healing</h3>
              <p className="text-purple-300">
                Automatic error detection, resolution, and optimization without human intervention
              </p>
              <div className="mt-4 text-2xl font-bold text-purple-400">99.7% Uptime</div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all">
              <CheckCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Adaptive Scaling</h3>
              <p className="text-purple-300">
                Intelligent resource allocation adjusts in real-time for optimal performance
              </p>
              <div className="mt-4 text-2xl font-bold text-indigo-400">10x Scale</div>
            </div>
          </div>

          {/* Success Metric */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-8 max-w-4xl mx-auto mt-8">
            <div className="text-sm font-bold text-pink-300 uppercase tracking-wider mb-3">
              Fortune 100 Success Story
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <span className="text-green-400">$2.3B</span>
              <span className="text-2xl text-purple-300 ml-4">Annual Savings</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-6 text-lg">
              <div>
                <span className="text-pink-400 font-bold">2,847%</span>
                <span className="text-purple-300"> ROI</span>
              </div>
              <div className="border-l border-white/20 pl-8">
                <span className="text-purple-400 font-bold">87%</span>
                <span className="text-purple-300"> Faster Deployment</span>
              </div>
              <div className="border-l border-white/20 pl-8">
                <span className="text-indigo-400 font-bold">99.7%</span>
                <span className="text-purple-300"> Automation Rate</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-bold text-xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
              Schedule Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
