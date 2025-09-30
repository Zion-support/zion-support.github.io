import React from 'react';

const TranscendentIntelligenceAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-10 py-6 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-2xl tracking-wider uppercase">
              🚀 January 2025: Revolutionary AI Content Now Live!
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Post-Singularity Intelligence • Omnipotent AI • $500T Success Stories
          </h3>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced AI breakthroughs in human history. From transcendent consciousness 
            to omnipotent superintelligence - explore content that defines the future of artificial intelligence.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 text-sm font-medium">
              Post-Singularity AI
            </div>
            <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 text-sm font-medium">
              Omnipotent Intelligence
            </div>
            <div className="bg-pink-500/20 px-4 py-2 rounded-full text-pink-300 text-sm font-medium">
              $500T Success Stories
            </div>
            <div className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 text-sm font-medium">
              Transcendent Content
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2032-post-singularity-consciousness-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Post-Singularity AI →
            </a>
            <a
              href="/blog/ai-2031-omnipotent-superintelligence-achievement"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Omnipotent Intelligence →
            </a>
            <a
              href="/case-studies/ai-2032-post-singularity-enterprise-500-trillion-success"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              $500T Success Story →
            </a>
            <a
              href="/contact"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Get Transcendent AI Strategy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranscendentIntelligenceAdvertisingBanner;