import React from "react";

const October2025LatestContentHighlightBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-y border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-4">
              <span className="text-emerald-300 font-bold text-lg">
                ✨ October 2025 Latest Updates
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Production AI Excellence: New Resources Available
            </h2>
            <p className="text-lg text-gray-300">
              Practical, proven content from real-world implementations
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-emerald-500/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20 text-center">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">$4.2B</div>
              <div className="text-xs text-gray-400">Healthcare Success</div>
            </div>
            <div className="bg-teal-500/10 backdrop-blur-sm rounded-xl p-4 border border-teal-500/20 text-center">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">94.7%</div>
              <div className="text-xs text-gray-400">AI Accuracy Rate</div>
            </div>
            <div className="bg-cyan-500/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 text-center">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">89%</div>
              <div className="text-xs text-gray-400">Automation Rate</div>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 text-center">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">12.3x</div>
              <div className="text-xs text-gray-400">ROI Achieved</div>
            </div>
          </div>

          {/* Content Highlights */}
          <div className="space-y-6">
            {/* Technical Guide */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-3xl">
                    📘
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold">
                      TECHNICAL GUIDE
                    </span>
                    <span className="text-gray-400 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Production-Ready AI Agents: The Complete 2025 Implementation Guide
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Battle-tested patterns from 50+ Fortune 500 implementations. Includes code examples, architecture diagrams, testing strategies, and real-world success metrics showing $8.3M average ROI.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-emerald-400 text-xs">✓ Code Examples</span>
                    <span className="text-teal-400 text-xs">✓ Architecture Patterns</span>
                    <span className="text-cyan-400 text-xs">✓ Security Best Practices</span>
                    <span className="text-blue-400 text-xs">✓ Deployment Strategies</span>
                  </div>
                  <a 
                    href="/blog/ai-2025-oct-01-production-ready-ai-agents-guide"
                    className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    Read Technical Guide →
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-3xl">
                    💰
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold">
                      CASE STUDY
                    </span>
                    <span className="text-gray-400 text-sm">Healthcare • $4.2B Impact</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Healthcare Giant Achieves $4.2B Success with AI-Powered Diagnostics
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    850 hospitals, 94.7% diagnostic accuracy, 99.8% physician adoption. Complete breakdown of technology stack, implementation timeline, challenges overcome, and measurable business results.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-teal-400 text-xs">✓ 12.3x ROI in 18 months</span>
                    <span className="text-cyan-400 text-xs">✓ 2.3M more patients served</span>
                    <span className="text-blue-400 text-xs">✓ 42% faster diagnosis</span>
                  </div>
                  <a 
                    href="/case-studies/ai-2025-oct-healthcare-ai-diagnostics-breakthrough-42-billion-success"
                    className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              </div>
            </div>

            {/* Workshop */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-3xl">
                    🎓
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold">
                      TRAINING WORKSHOP
                    </span>
                    <span className="text-gray-400 text-sm">3 Days • In-Person or Virtual</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Production AI Agents Development Workshop
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Transform your team in 3 days. Build production-ready AI agents with expert guidance. Hands-on labs, real code, working prototypes. 4.8/5 rating from 847 past participants.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-cyan-400 text-xs">✓ Hands-On Coding</span>
                    <span className="text-blue-400 text-xs">✓ Expert Instructors</span>
                    <span className="text-indigo-400 text-xs">✓ Working Prototype</span>
                    <span className="text-purple-400 text-xs">✓ $5,800 Bonus Content</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="/services/ai-agent-development-workshop-oct-2025"
                      className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                    >
                      View Workshop Details →
                    </a>
                    <a 
                      href="/contact?service=workshop"
                      className="inline-block border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm mb-4">
              All content published October 1, 2025 • Based on real Fortune 500 implementations
            </p>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              Get Started with AI Agents Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025LatestContentHighlightBanner;
