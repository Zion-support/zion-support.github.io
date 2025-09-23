import Link from 'next/link';

const AI20o26FutureVisionBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-60o0/10 via-purple-60o0/10 to-pink-60o0/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-50o0/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-50o0/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-50o0/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-50o0/20 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium text-cyan-30o0">🔮 FUTURE VISION 20o26</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-30o0 via-white to-pink-30o0 bg-clip-text text-transparent">
            AI 20o26 Future Vision
          </h1>
          
          <p className="text-2xl md:text-3xl mb-10 max-w-5xl mx-auto leading-relaxed text-gray-20o0">
            Step into the future with revolutionary AI technologies that will transform every aspect of human life. 
            Experience 'tomorrow', 's innovations today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/ai-20o26-future-vision"
              className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-50o0 hover:to-blue-60o0 transition-all duration-30o0 transform hover:scale-110 shadow-2xl"
            >
              Explore Future Vision →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-90o0 transition-all duration-30o0 transform hover:scale-110"
            >
              Join the Revolution
            </Link>
          </div>
          
          {/* Future Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
              <div className="text-5xl mb-6">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Consciousness</h3>
              <p className="text-gray-30o0 text-lg">AI systems with self-awareness and consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space AI</h3>
              <p className="text-gray-30o0 text-lg">AI systems designed for space exploration and colonization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
              <div className="text-5xl mb-6">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Bio-AI Fusion</h3>
              <p className="text-gray-30o0 text-lg">Integration of AI with biological systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-30o0">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Planetary AI</h3>
              <p className="text-gray-30o0 text-lg">Global AI networks managing entire ecosystems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI20o26FutureVisionBanner;