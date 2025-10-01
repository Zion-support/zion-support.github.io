import React from "react";

const October2025FreshContentLaunchBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-y border-blue-500/30">
      <div className="container mx-auto px-6">
        {/* Announcement Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 animate-pulse">
            <span className="text-blue-300 font-bold text-xl tracking-wider uppercase">
              🚀 Just Published: October 1, 2025 - Fresh Enterprise AI Content!
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Latest Production AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, proven case studies, and hands-on workshops from real-world Fortune 500 implementations
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Blog Post Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">📘</div>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold mb-1">
                  NEW GUIDE
                </span>
                <h3 className="text-sm text-gray-400">Technical Deep Dive</h3>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              Production-Ready AI Agents
            </h4>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              The complete 2025 implementation guide with code examples, architecture patterns, and battle-tested strategies from 50+ Fortune 500 deployments.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs">Code Examples</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs">Architecture</span>
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs">Best Practices</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-6 text-center">
              <div className="bg-blue-500/10 rounded-lg p-2">
                <div className="text-blue-400 font-bold text-lg">89%</div>
                <div className="text-gray-400 text-xs">Automation</div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-2">
                <div className="text-purple-400 font-bold text-lg">$8.3M</div>
                <div className="text-gray-400 text-xs">Avg ROI</div>
              </div>
              <div className="bg-indigo-500/10 rounded-lg p-2">
                <div className="text-indigo-400 font-bold text-lg">94%</div>
                <div className="text-gray-400 text-xs">Accuracy</div>
              </div>
            </div>
            
            <a 
              href="/blog/ai-2025-oct-01-production-ready-ai-agents-guide"
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              Read Complete Guide →
            </a>
          </div>

          {/* Case Study Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">💰</div>
              <div>
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold mb-1">
                  SUCCESS STORY
                </span>
                <h3 className="text-sm text-gray-400">Healthcare Transformation</h3>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              $4.2B Healthcare AI Success
            </h4>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Global Healthcare Network achieves 94.7% diagnostic accuracy and 12.3x ROI with AI-powered diagnostic platform across 850 hospitals.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs">Healthcare</span>
              <span className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full text-xs">AI Diagnostics</span>
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs">Enterprise Scale</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-6 text-center">
              <div className="bg-purple-500/10 rounded-lg p-2">
                <div className="text-purple-400 font-bold text-lg">12.3x</div>
                <div className="text-gray-400 text-xs">ROI</div>
              </div>
              <div className="bg-pink-500/10 rounded-lg p-2">
                <div className="text-pink-400 font-bold text-lg">94.7%</div>
                <div className="text-gray-400 text-xs">Accuracy</div>
              </div>
              <div className="bg-indigo-500/10 rounded-lg p-2">
                <div className="text-indigo-400 font-bold text-lg">99.8%</div>
                <div className="text-gray-400 text-xs">Adoption</div>
              </div>
            </div>
            
            <a 
              href="/case-studies/ai-2025-oct-healthcare-ai-diagnostics-breakthrough-42-billion-success"
              className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              View Full Case Study →
            </a>
          </div>

          {/* Workshop Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🎓</div>
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold mb-1">
                  HANDS-ON TRAINING
                </span>
                <h3 className="text-sm text-gray-400">3-Day Workshop</h3>
              </div>
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-4">
              AI Agents Workshop
            </h4>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transform your team into AI agent experts. Build production-ready agents in 3 days with hands-on guidance from Fortune 500 implementation leaders.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs">Hands-On</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs">Code Labs</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs">Expert-Led</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-6 text-center">
              <div className="bg-indigo-500/10 rounded-lg p-2">
                <div className="text-indigo-400 font-bold text-lg">3 Days</div>
                <div className="text-gray-400 text-xs">Duration</div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-2">
                <div className="text-blue-400 font-bold text-lg">4.8/5</div>
                <div className="text-gray-400 text-xs">Rating</div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-2">
                <div className="text-purple-400 font-bold text-lg">847</div>
                <div className="text-gray-400 text-xs">Grads</div>
              </div>
            </div>
            
            <a 
              href="/services/ai-agent-development-workshop-oct-2025"
              className="block w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-indigo-500/50"
            >
              Enroll Your Team →
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Join 847 professionals who have already transformed their AI capabilities this quarter
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Schedule Consultation
            </a>
            <a 
              href="/blog"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025FreshContentLaunchBanner;
