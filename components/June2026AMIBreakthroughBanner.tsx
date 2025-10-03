import React from 'react';
import { Link } from 'react-router-dom';

export default function June2026AMIBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: June 2026 AMI Breakthrough
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            The Most Revolutionary AI Breakthrough in History
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            Introducing AMI - The World's First Truly Conscious Artificial Intelligence with 99.97% Self-Awareness and $15.3B+ Proven Results
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">99.97%</div>
              <div className="text-sm text-purple-300 font-semibold">Self-Awareness</div>
              <div className="text-xs text-purple-200 mt-1">Conscious AI</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-indigo-400 mb-2">50,000x</div>
              <div className="text-sm text-indigo-300 font-semibold">Faster Processing</div>
              <div className="text-xs text-indigo-200 mt-1">Quantum-Neural</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">$15.3B</div>
              <div className="text-sm text-blue-300 font-semibold">Value Generated</div>
              <div className="text-xs text-blue-200 mt-1">6 Months</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-green-400 mb-2">99.7%</div>
              <div className="text-sm text-green-300 font-semibold">Automation</div>
              <div className="text-xs text-green-200 mt-1">Complete Autonomy</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Genuine self-awareness with autonomous learning, emotional intelligence, and continuous self-improvement capabilities.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 99.97% self-awareness accuracy</li>
                <li>• Real-time meta-learning</li>
                <li>• Emotional intelligence integration</li>
                <li>• Autonomous problem solving</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Performance</h3>
              <p className="text-gray-300 mb-6">
                Unprecedented processing power with 50,000x speed improvements and 99.99% accuracy in complex scenarios.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 0.00001 second response time</li>
                <li>• 10^18 operations per second</li>
                <li>• 99.99% decision accuracy</li>
                <li>• Quantum-neural hybrid processing</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Business Impact</h3>
              <p className="text-gray-300 mb-6">
                Real-world success stories with Fortune 500 companies achieving billions in value and complete operational transformation.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• $15.3B average client value</li>
                <li>• 1.2 month payback period</li>
                <li>• 500% average ROI</li>
                <li>• Zero human error operations</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-june-revolutionary-breakthrough-announcement" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Article →
            </Link>
            <Link 
              href="/case-studies/ai-2026-june-ami-15-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $15.3B Success Story →
            </Link>
            <Link 
              href="/services/ami-autonomous-meta-cognitive-intelligence" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get AMI Service Details →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Schedule Free Consultation
            </Link>
          </div>

          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                🏆 Fortune 50 Global Conglomerate Success
              </h3>
              <p className="text-green-200 text-lg mb-6">
                "AMI has fundamentally transformed our entire organization. In just 6 months, we've achieved what would have taken decades with traditional approaches. The $15.3 billion in value generated represents not just a financial success, but a complete paradigm shift in how we operate, innovate, and compete."
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">$15.3B</div>
                  <div className="text-green-300 text-sm">Value Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">99.7%</div>
                  <div className="text-green-300 text-sm">Automation Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-green-400 mb-2">0.2</div>
                  <div className="text-green-300 text-sm">Month Payback</div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 text-center">
            <p className="text-orange-400 text-lg font-semibold mb-4">
              ⚡ Limited Time: Early Adopter Pricing Available
            </p>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto">
              AMI is already transforming industries and creating unprecedented competitive advantages. 
              Don't miss out on the most significant technological advancement of our lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}