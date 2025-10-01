import React from 'react';

const NewContent2027AdvertisingBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-900/50 via-teal-900/50 to-cyan-900/50 border-b border-emerald-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-4">
            <span className="text-emerald-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: January 2027 Content Now Live!
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Autonomous Cognitive Enterprise Revolution
          </h3>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Discover the latest breakthrough in enterprise AI: Self-evolving business intelligence that operates with complete autonomy, 
            delivering 99.9% autonomous operation and $500B+ enterprise value.
          </p>

          {/* Content Highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300">99.9% Autonomous Operation</span>
            <span className="bg-teal-500/20 px-4 py-2 rounded-full text-teal-300">$500B Enterprise Value</span>
            <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300">Self-Evolving Intelligence</span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300">Zero Human Intervention</span>
          </div>
        </div>

        {/* Content Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/blog/ai-2027-autonomous-cognitive-enterprise-revolution"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
          >
            🧠 Autonomous Cognitive Enterprise →
          </a>
          <a
            href="/case-studies/ai-2027-autonomous-cognitive-enterprise-500-billion-success"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
          >
            💰 $500B Success Story →
          </a>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
          >
            🚀 Get Free Consultation →
          </a>
        </div>

        {/* Additional Content Promotions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
            <h4 className="text-lg font-bold text-emerald-400 mb-2">🧠 Cognitive Intelligence</h4>
            <p className="text-gray-300 text-sm mb-3">
              Advanced neural architectures with consciousness simulation and autonomous decision-making capabilities.
            </p>
            <a href="/blog/ai-2027-autonomous-cognitive-enterprise-revolution" className="text-emerald-400 text-sm font-semibold hover:text-emerald-300">
              Read More →
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-teal-500/20">
            <h4 className="text-lg font-bold text-teal-400 mb-2">💰 Proven Results</h4>
            <p className="text-gray-300 text-sm mb-3">
              Fortune 100 technology conglomerate achieved $500B ROI with 99.9% autonomous operation across all business functions.
            </p>
            <a href="/case-studies/ai-2027-autonomous-cognitive-enterprise-500-billion-success" className="text-teal-400 text-sm font-semibold hover:text-teal-300">
              View Case Study →
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20">
            <h4 className="text-lg font-bold text-cyan-400 mb-2">🚀 Get Started</h4>
            <p className="text-gray-300 text-sm mb-3">
              Transform your enterprise with Autonomous Cognitive Enterprise technology. Get your free consultation today.
            </p>
            <a href="/contact" className="text-cyan-400 text-sm font-semibold hover:text-cyan-300">
              Schedule Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2027AdvertisingBanner;