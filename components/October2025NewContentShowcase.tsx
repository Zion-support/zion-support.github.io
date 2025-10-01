import React from 'react';

export default function October2025NewContentShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-y border-blue-500/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: October 1, 2025 — Latest Enterprise AI Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Practical AI Strategies for Enterprise Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest best practices for workflow automation, observability, and cost optimization 
            that are driving real results in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Article 1: Agentic Workflows */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              AI Agentic Workflow Orchestration
            </h3>
            <p className="text-gray-300 mb-6">
              Design intelligent workflow systems that enable autonomous agents to collaborate and execute 
              complex business processes with minimal human intervention.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-cyan-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-cyan-400">73%</div>
                <div className="text-xs text-cyan-300">Process Automation</div>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-blue-400">12.5x</div>
                <div className="text-xs text-blue-300">Productivity Gain</div>
              </div>
              <div className="bg-indigo-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-indigo-400">89%</div>
                <div className="text-xs text-indigo-300">Accuracy Rate</div>
              </div>
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-purple-400">$2.4M</div>
                <div className="text-xs text-purple-300">Annual Savings</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-xs">Automation</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs">Multi-Agent</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs">Enterprise</span>
            </div>
            <a 
              href="/blog/ai-2025-october-agentic-workflow-orchestration"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
            >
              Read Full Article →
            </a>
          </div>

          {/* Article 2: AIOps Monitoring */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Real-Time AIOps & Observability
            </h3>
            <p className="text-gray-300 mb-6">
              Build intelligent observability platforms that leverage AI to detect anomalies, predict failures, 
              and automate incident response across your entire stack.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-emerald-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-emerald-400">98.2%</div>
                <div className="text-xs text-emerald-300">Anomaly Detection</div>
              </div>
              <div className="bg-green-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-green-400">45sec</div>
                <div className="text-xs text-green-300">Mean Time To Detect</div>
              </div>
              <div className="bg-teal-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-teal-400">3.2min</div>
                <div className="text-xs text-teal-300">Mean Time To Resolve</div>
              </div>
              <div className="bg-cyan-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-cyan-400">76%</div>
                <div className="text-xs text-cyan-300">Auto Remediation</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300 text-xs">AIOps</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-xs">Monitoring</span>
              <span className="bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-xs">Real-Time</span>
            </div>
            <a 
              href="/blog/ai-2025-october-real-time-aiops-monitoring"
              className="inline-block w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
            >
              Read Full Article →
            </a>
          </div>

          {/* Article 3: FinOps */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Enterprise FinOps Optimization
            </h3>
            <p className="text-gray-300 mb-6">
              Master cloud cost optimization with AI-driven FinOps practices that reduce waste and improve 
              forecasting—achieving 40-60% cost savings.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-amber-400">54%</div>
                <div className="text-xs text-amber-300">Cost Reduction</div>
              </div>
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-orange-400">$8.7M</div>
                <div className="text-xs text-orange-300">Annual Savings</div>
              </div>
              <div className="bg-red-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-red-400">92%</div>
                <div className="text-xs text-red-300">Utilization</div>
              </div>
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <div className="text-xl font-bold text-yellow-400">95%</div>
                <div className="text-xs text-yellow-300">Forecast Accuracy</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-amber-500/20 px-3 py-1 rounded-full text-amber-300 text-xs">FinOps</span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-xs">Cost Optimization</span>
              <span className="bg-red-500/20 px-3 py-1 rounded-full text-red-300 text-xs">Cloud</span>
            </div>
            <a 
              href="/blog/ai-2025-october-enterprise-finops-optimization"
              className="inline-block w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
            >
              Read Full Article →
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Ready to implement these strategies in your organization?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Schedule Consultation
            </a>
            <a 
              href="/blog"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Insights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
