'use client';

import Link from 'next/link';

export default function EmailIntelligencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/10 to-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            🧠 985 Intelligent Engines
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Intelligence
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your email workflow with 180+ AI-powered services that analyze, prioritize, 
            automate, and optimize every email interaction.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Case-by-Case Analysis</h3>
            <p className="text-gray-400">
              Every email analyzed individually with intelligent action determination based on content, 
              context, and recipient patterns.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-4xl mb-4">📬</div>
            <h3 className="text-xl font-bold text-white mb-3">Strict Reply-All Enforcement</h3>
            <p className="text-gray-400">
              All 985 engines enforce reply-all for multi-recipient emails, ensuring every stakeholder 
              stays informed with zero communication gaps.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Intelligence</h3>
            <p className="text-gray-400">
              Real-time processing with sentiment analysis, intent detection, priority scoring, 
              and automated response generation.
            </p>
          </div>
        </div>

        {/* Engine Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Engine Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Analysis & Intelligence</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Sentiment Analysis</li>
                <li>• Intent Classification</li>
                <li>• Priority Scoring</li>
                <li>• Topic Extraction</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-emerald-400 mb-3">Automation & Workflow</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Auto-Responses</li>
                <li>• Meeting Minutes</li>
                <li>• Task Extraction</li>
                <li>• CRM Sync</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-400 mb-3">Security & Compliance</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Phishing Detection</li>
                <li>• GDPR Compliance</li>
                <li>• Data Protection</li>
                <li>• Legal Compliance</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-amber-400 mb-3">Optimization & Insights</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Campaign Optimization</li>
                <li>• Productivity Analytics</li>
                <li>• Context Memory</li>
                <li>• Performance Tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">985</div>
              <div className="text-sm text-gray-400">Intelligent Engines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4,781</div>
              <div className="text-sm text-gray-400">Services & Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">180</div>
              <div className="text-sm text-gray-400">AI Email Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">Reply-All Enforced</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Email Workflow?</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-8">
            <span>📞 +1 302 464 0950</span>
            <span>✉️ kleber@ziontechgroup.com</span>
            <span>📍 364 E Main St STE 1008, Middletown, DE 19709</span>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
