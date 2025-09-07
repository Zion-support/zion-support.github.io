import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Meeting Assistant - Intelligent Meeting Solutions | Zion Tech Group',
  description: 'Transform every meeting into actionable insights with our AI-powered meeting assistant. Automated transcription, action items, and intelligent summaries.',
  keywords: 'AI meeting assistant, meeting transcription, action items, meeting summaries, virtual assistant, productivity tools',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Meeting Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform every meeting into actionable insights with our AI-powered
            meeting assistant. Automated transcription, action items, and intelligent summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Features
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎤</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-Time Transcription</h3>
                  <p className="text-gray-300">Accurate, real-time transcription with speaker identification and timestamps.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📝</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Action Items Extraction</h3>
                  <p className="text-gray-300">Automatically identify and extract action items, decisions, and key points.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Meeting Summaries</h3>
                  <p className="text-gray-300">Intelligent summaries with key insights, decisions, and next steps.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔍</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Search & Analytics</h3>
                  <p className="text-gray-300">Search through meeting history and analyze meeting patterns and insights.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Benefits
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">90% Time Savings</h3>
                <p className="text-gray-300">Automated note-taking and action item extraction saves hours of manual work.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Improved Follow-up</h3>
                <p className="text-gray-300">Never miss important action items or decisions with automated tracking.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Better Collaboration</h3>
                <p className="text-gray-300">Share meeting insights and action items with team members automatically.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Meeting Analytics</h3>
                <p className="text-gray-300">Track meeting effectiveness and identify areas for improvement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 10 hours/month</li>
                <li>Basic transcription</li>
                <li>Action item extraction</li>
                <li>Email summaries</li>
                <li>Standard support</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$399<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Up to 50 hours/month</li>
                <li>Advanced transcription</li>
                <li>AI-powered summaries</li>
                <li>Meeting analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$799<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Unlimited hours</li>
                <li>Premium transcription</li>
                <li>Advanced AI features</li>
                <li>Custom analytics</li>
                <li>24/7 dedicated support</li>
                <li>White-label solution</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Meetings?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust our AI Meeting Assistant to make every meeting more productive and actionable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}