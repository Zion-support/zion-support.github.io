import React from 'react';

export default function October2025NewTechInsightsBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm border-y-2 border-indigo-400/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 border-2 border-indigo-400/60 mb-8 animate-pulse shadow-2xl shadow-indigo-500/30">
            <span className="text-3xl">🚀</span>
            <span className="text-indigo-200 font-extrabold text-2xl tracking-wider uppercase">
              LATEST TECH INSIGHTS - OCTOBER 2025
            </span>
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Transform Your Enterprise with AI-Powered Innovation
          </h2>
          <p className="text-2xl text-gray-100 max-w-5xl mx-auto mb-8 leading-relaxed">
            Discover how leading enterprises are leveraging AI for observability, cloud cost optimization, 
            and autonomous security—achieving unprecedented efficiency and savings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-3 bg-indigo-500/30 text-indigo-200 text-lg rounded-full border border-indigo-400/50 font-semibold">
              💰 $420M+ in Savings
            </span>
            <span className="px-6 py-3 bg-purple-500/30 text-purple-200 text-lg rounded-full border border-purple-400/50 font-semibold">
              ⚡ 94% Faster Operations
            </span>
            <span className="px-6 py-3 bg-pink-500/30 text-pink-200 text-lg rounded-full border border-pink-400/50 font-semibold">
              🔒 97% Threat Prevention
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* AI-Driven Observability */}
          <div className="group bg-gradient-to-br from-purple-500/15 to-indigo-500/15 backdrop-blur-xl rounded-3xl p-10 border-2 border-purple-400/50 hover:border-purple-400/90 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/40">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🔍</div>
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">AI-Driven Observability Platform 2026</h3>
            <p className="text-gray-200 text-base mb-6 leading-relaxed">
              Autonomous monitoring that predicts incidents before they occur. Reduce MTTR by 94% and 
              automate 89% of troubleshooting with intelligent AI agents.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-purple-500/30 text-purple-200 text-sm rounded-full font-semibold">94% MTTR Reduction</span>
              <span className="px-4 py-2 bg-indigo-500/30 text-indigo-200 text-sm rounded-full font-semibold">89% Auto-Resolution</span>
              <span className="px-4 py-2 bg-green-500/30 text-green-200 text-sm rounded-full font-semibold">$127M Savings</span>
            </div>
            <a 
              href="/blog/ai-driven-observability-platform-2026"
              className="inline-block w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-purple-500/60 text-lg transform hover:scale-105"
            >
              Explore Autonomous Monitoring →
            </a>
          </div>

          {/* Multi-Cloud Cost Optimization */}
          <div className="group bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-xl rounded-3xl p-10 border-2 border-emerald-400/50 hover:border-emerald-400/90 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/40">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💎</div>
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">Multi-Cloud Cost Optimization with AI</h3>
            <p className="text-gray-200 text-base mb-6 leading-relaxed">
              AI-powered FinOps platform that reduces cloud spend by 67%. Intelligent workload placement, 
              auto-scaling, and waste elimination across AWS, Azure, and GCP.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-emerald-500/30 text-emerald-200 text-sm rounded-full font-semibold">67% Cost Reduction</span>
              <span className="px-4 py-2 bg-teal-500/30 text-teal-200 text-sm rounded-full font-semibold">$293M Saved</span>
              <span className="px-4 py-2 bg-cyan-500/30 text-cyan-200 text-sm rounded-full font-semibold">47:1 ROI</span>
            </div>
            <a 
              href="/blog/multi-cloud-cost-optimization-ai-2025"
              className="inline-block w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-emerald-500/60 text-lg transform hover:scale-105"
            >
              Discover Cost Optimization →
            </a>
          </div>

          {/* Autonomous DevSecOps */}
          <div className="group bg-gradient-to-br from-red-500/15 to-orange-500/15 backdrop-blur-xl rounded-3xl p-10 border-2 border-red-400/50 hover:border-red-400/90 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-500/40">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">Autonomous DevSecOps Revolution 2025</h3>
            <p className="text-gray-200 text-base mb-6 leading-relaxed">
              AI agents that automatically detect vulnerabilities, generate security fixes, and prevent 
              97% of threats—while accelerating delivery by 10x.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-red-500/30 text-red-200 text-sm rounded-full font-semibold">97% Threat Prevention</span>
              <span className="px-4 py-2 bg-orange-500/30 text-orange-200 text-sm rounded-full font-semibold">91% Work Automated</span>
              <span className="px-4 py-2 bg-yellow-500/30 text-yellow-200 text-sm rounded-full font-semibold">10x Faster</span>
            </div>
            <a 
              href="/blog/autonomous-devsecops-revolution-2025"
              className="inline-block w-full bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-500 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-xl hover:shadow-red-500/60 text-lg transform hover:scale-105"
            >
              Learn Security Automation →
            </a>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-indigo-400/40 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join Fortune 500 companies achieving breakthrough results with AI-powered platforms. 
              Get your free consultation and customized roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-indigo-500/60 transform hover:-translate-y-1 text-lg"
              >
                Get Free Consultation
              </a>
              <a 
                href="/blog" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm text-lg"
              >
                View All Insights
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
