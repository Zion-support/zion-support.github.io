import * as React from 'react';

const January2026LatestInnovationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: January 2026 Latest Innovation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI-Powered Business Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthrough in autonomous enterprise systems, featuring quantum-enhanced decision making, 
            real-time adaptive intelligence, and unprecedented operational efficiency gains of up to 300%.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-3">Quantum Neural Networks</h3>
            <p className="text-gray-300 mb-4">
              Next-generation AI systems that process information at quantum speeds, delivering 10,000x faster decision making 
              and 99.9% accuracy in complex business scenarios.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300 text-sm">10,000x Speed</span>
              <span className="bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-sm">99.9% Accuracy</span>
            </div>
            <a 
              href="/blog/quantum-neural-networks-enterprise-2026"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Read Article →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Autonomous Operations</h3>
            <p className="text-gray-300 mb-4">
              Self-managing enterprise systems that adapt in real-time, reducing operational costs by 85% while 
              increasing productivity by 300% through intelligent automation.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-sm">85% Cost Reduction</span>
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">300% Productivity</span>
            </div>
            <a 
              href="/case-studies/autonomous-operations-success-story-2026"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              View Case Study →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-3">Predictive Intelligence</h3>
            <p className="text-gray-300 mb-4">
              Advanced forecasting systems that predict market trends, customer behavior, and operational needs 
              with 98% accuracy, enabling proactive business strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">98% Accuracy</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Proactive Strategy</span>
            </div>
            <a 
              href="/services/predictive-intelligence-platform"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
            >
              Explore Service →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 font-bold text-lg">💰 Proven Results</span>
            <span className="text-gray-400">|</span>
            <span className="text-teal-400 font-bold text-lg">$2.4B Value Created</span>
            <span className="text-gray-400">|</span>
            <span className="text-cyan-400 font-bold text-lg">500+ Enterprises</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Get Your Free Consultation
            </a>
            <a 
              href="/demo"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Schedule Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026LatestInnovationBanner;