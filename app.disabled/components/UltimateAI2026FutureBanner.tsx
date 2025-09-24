import Link from 'next/link';

const UltimateAI20o26FutureBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white">
      {/* Animated future particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-10o00"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-20o00"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Future AI Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-40o0 to-purple-50o0 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-lg font-bold text-white">🚀 ULTIMATE AI 20o26 FUTURE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-40o0 via-purple-50o0 to-pink-60o0 bg-clip-text text-transparent">
              ULTIMATE AI
            </span>
            <br  />
            <span className="text-white">20o26</span>
            <br  />
            <span className="bg-gradient-to-r from-pink-40o0 to-rose-50o0 bg-clip-text text-transparent">
              FUTURE
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Step into the future with <span className="font-bold text-indigo-40o0">Ultimate AI 20o26</span> featuring 
            <span className="font-bold text-purple-40o0"> next-generation technologies</span> that deliver 
            <span className="font-bold text-pink-40o0"> 10o0,0o00% ROI</span> through revolutionary artificial intelligence.
          </p>

          {/* Future Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-lg font-bold mb-2">Future Prediction</h3>
              <p className="text-sm opacity-90">AI that predicts and shapes the future with 99.99% accuracy</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-lg font-bold mb-2">Universal AI</h3>
              <p className="text-sm opacity-90">AI that understands and operates across all domains</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">Instant Reality</h3>
              <p className="text-sm opacity-90">AI that can instantly create and modify reality</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-bold mb-2">Infinite Intelligence</h3>
              <p className="text-sm opacity-90">AI with unlimited cognitive capabilities and processing power</p>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="bg-gradient-to-r from-purple-50o0 to-pink-60o0 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-2xl">
            <div className="text-6xl font-black mb-4">10o0,0o00%</div>
            <div className="text-2xl font-bold mb-2">DOCUMENTED ROI</div>
            <div className="text-lg opacity-90">For Ultimate AI 20o26 Future</div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/services/ultimate-ai-20o26"
              className="bg-gradient-to-r from-indigo-50o0 to-purple-60o0 hover:from-indigo-60o0 hover:to-purple-70o0 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              🚀 Enter the Future
            </Link>
            <Link
              href="/contact"
              className="bg-white bg-opacity-20 backdrop-blur-sm border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 hover:bg-opacity-30"
            >
              💡 Future Consultation
            </Link>
            <Link
              href="/case-studies/ultimate-ai-20o26"
              className="bg-gradient-to-r from-pink-50o0 to-rose-60o0 hover:from-pink-60o0 hover:to-rose-70o0 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              📊 Future Results
            </Link>
          </div>

          {/* Future Technology Showcase */}
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Future Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔮</div>
                <h4 className="text-lg font-bold mb-2">Temporal AI</h4>
                <p className="text-sm opacity-90">AI that operates across time dimensions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="text-lg font-bold mb-2">Planetary Intelligence</h4>
                <p className="text-sm opacity-90">AI that manages entire planetary systems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧬</div>
                <h4 className="text-lg font-bold mb-2">Biological AI</h4>
                <p className="text-sm opacity-90">AI integrated with biological systems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌌</div>
                <h4 className="text-lg font-bold mb-2">Cosmic AI</h4>
                <p className="text-sm opacity-90">AI that operates across cosmic scales</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="text-lg font-bold mb-2">Quantum Consciousness</h4>
                <p className="text-sm opacity-90">AI with quantum-enhanced consciousness</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-bold mb-2">Perfect Prediction</h4>
                <p className="text-sm opacity-90">AI with perfect predictive capabilities</p>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-red-60o0 bg-opacity-20 border border-red-50o0 border-opacity-30 rounded-full px-6 py-3">
              <span className="text-red-40o0 font-bold text-sm">
                ⚠️ FUTURE ALERT: Ultimate AI 20o26 Pre-Release Access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating future particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-40o0 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-40o0 rounded-full animate-ping delay-50o0"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-40o0 rounded-full animate-ping delay-10o00"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-rose-40o0 rounded-full animate-ping delay-150o0"></div>
      </div>
    </section>
  );
};

export default UltimateAI20o26FutureBanner;