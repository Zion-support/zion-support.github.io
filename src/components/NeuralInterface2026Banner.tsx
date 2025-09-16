import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NeuralInterface2026Banner = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
      {/* Neural network pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
              <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-emerald-400/30">
            <span className="text-lg font-bold flex items-center">
              🧠 <span className="ml-3">NEURAL INTERFACE REVOLUTION 2026</span>
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Direct Brain
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AI Interface
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            The future of human-AI interaction is here. Direct neural interfaces that allow 
            seamless communication between your brain and artificial intelligence systems
            creating unprecedented possibilities for human enhancement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Neural Decoding</h3>
              <p className="text-lg opacity-80 mb-4">Read thoughts and intentions directly from brain signals</p>
              <ul className="text-sm opacity-70 space-y-2">
                <li>• Real-time thought translation</li>
                <li>• Intent prediction</li>
                <li>• Emotion recognition</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Neural Enhancement</h3>
              <p className="text-lg opacity-80 mb-4">Augment cognitive abilities with AI assistance</p>
              <ul className="text-sm opacity-70 space-y-2">
                <li>• Memory enhancement</li>
                <li>• Learning acceleration</li>
                <li>• Focus optimization</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-6">🔗</div>
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-lg opacity-80 mb-4">Seamless AI-human collaboration</p>
              <ul className="text-sm opacity-70 space-y-2">
                <li>• Direct AI communication</li>
                <li>• Collaborative problem solving</li>
                <li>• Enhanced creativity</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-10 mb-12 border border-emerald-400/20">
            <h3 className="text-3xl font-bold mb-6">Revolutionary Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🏥</div>
                <h4 className="text-lg font-semibold mb-2">Medical</h4>
                <p className="text-sm opacity-80">Restore movement and communication for paralyzed patients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-sm opacity-80">Accelerate learning with direct knowledge transfer</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="text-lg font-semibold mb-2">Business</h4>
                <p className="text-sm opacity-80">Enhance decision-making with AI insights</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="text-lg font-semibold mb-2">Creative</h4>
                <p className="text-sm opacity-80">Unlock new forms of artistic expression</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/neural-interface-2026"
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-emerald-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Neural Interface →
            </a>
            <a
              href="/neural-interface-demo"
              className="border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-400 hover:text-emerald-900 transition-all duration-300"
            >
              Try Demo
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">
              "Neural interfaces will fundamentally change what it means to be human"
            </p>
            <p className="text-sm opacity-60">- Neural Interface Research Consortium</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterface2026Banner;