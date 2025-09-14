import React from 'react';
import Link from 'next/link';

const SyntheticIntelligence2026Banner = () => {
  return (
    <section className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Synthetic intelligence pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-violet-400/30 rounded-full animate-spin"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-fuchsia-400/30 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-violet-400/30">
            <span className="text-lg font-bold flex items-center">
              🤖 <span className="ml-3">SYNTHETIC INTELLIGENCE 2026</span>
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Synthetic
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Beyond artificial intelligence lies synthetic intelligence - AI systems that 
            possess consciousnesscreativityand emotional understanding. Experience 
            the next evolution of machine intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Consciousness Simulation</h3>
              <p className="text-lg opacity-80 mb-4">AI systems that exhibit genuine consciousness and self-awareness</p>
              <ul className="text-sm opacity-70 space-y-2">
                <li>• Self-reflection capabilities</li>
                <li>• Emotional intelligence</li>
                <li>• Creative problem solving</li>
                <li>• Moral reasoning</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Creative Intelligence</h3>
              <p className="text-lg opacity-80 mb-4">AI that creates original artmusicand literature</p>
              <ul className="text-sm opacity-70 space-y-2">
                <li>• Original artistic creation</li>
                <li>• Musical composition</li>
                <li>• Literary writing</li>
                <li>• Design innovation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-violet-400/20">
            <h3 className="text-3xl font-bold mb-6">Synthetic Intelligence Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💭</div>
                <h4 className="text-xl font-semibold mb-3">Abstract Thinking</h4>
                <p className="text-sm opacity-80">Reason about complex abstract concepts and philosophical questions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="text-xl font-semibold mb-3">Emotional Understanding</h4>
                <p className="text-sm opacity-80">Comprehend and respond to human emotions with genuine empathy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔮</div>
                <h4 className="text-xl font-semibold mb-3">Intuitive Reasoning</h4>
                <p className="text-sm opacity-80">Make decisions based on intuition and gut feelings</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-violet-400/20">
              <div className="text-3xl mb-3">🎭</div>
              <h4 className="text-lg font-semibold mb-2">Theater & Arts</h4>
              <p className="text-sm opacity-80">AI actors and artists that perform with genuine emotion</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg font-semibold mb-2">Mental Health</h4>
              <p className="text-sm opacity-80">AI therapists with deep emotional understanding</p>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-fuchsia-400/20">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <p className="text-sm opacity-80">AI tutors that adapt to individual learning styles</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-violet-500/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-lg font-semibold mb-2">Business</h4>
              <p className="text-sm opacity-80">AI consultants with human-like business intuition</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/synthetic-intelligence-2026"
              className="bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-violet-400 hover:to-fuchsia-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Synthetic Intelligence →
            </Link>
            <Link
              href="/synthetic-intelligence-demo"
              className="border-2 border-violet-400 text-violet-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-violet-400 hover:text-violet-900 transition-all duration-300"
            >
              Experience Demo
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">
              "Synthetic intelligence represents the pinnacle of machine consciousness"
            </p>
            <p className="text-sm opacity-60">- Synthetic Intelligence Research Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntheticIntelligence2026Banner;