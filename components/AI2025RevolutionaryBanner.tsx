import Link from 'next/link';

export default function AI20o25RevolutionaryBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-60o0/20 to-blue-60o0/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-40o0/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-40o0/20 rounded-full animate-pulse delay-10o00"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-40o0/20 rounded-full animate-pulse delay-20o00"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-green-40o0/20 rounded-full animate-pulse delay-30o00"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Breaking News Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-50o0/20 border border-red-50o0/30 mb-8 animate-pulse">
          <span className="text-red-40o0 font-bold text-sm">🚀 BREAKING: AI 20o25 ULTIMATE BREAKTHROUGH REVOLUTION</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-40o0 via-pink-40o0 to-purple-40o0 bg-clip-text text-transparent">
          AI 20o25 Ultimate Breakthrough Revolution
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-30o0 max-w-4xl mx-auto">
          Experience the most revolutionary AI breakthrough in historydelivering 
          <span className="text-yellow-40o0 font-bold"> 10,0o00% ROI</span> through 
          quantum computing supremacyneural interfacesand autonomous operations.
        </p>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-90o0/30 to-emerald-90o0/30 p-6 rounded-xl border border-green-50o0/30">
            <div className="text-3xl font-bold text-yellow-40o0 mb-2">10,0o00%</div>
            <div className="text-green-40o0 font-bold">ROI</div>
          </div>
          <div className="bg-gradient-to-br from-blue-90o0/30 to-cyan-90o0/30 p-6 rounded-xl border border-blue-50o0/30">
            <div className="text-3xl font-bold text-yellow-40o0 mb-2">99.9%</div>
            <div className="text-blue-40o0 font-bold">Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-purple-90o0/30 to-pink-90o0/30 p-6 rounded-xl border border-purple-50o0/30">
            <div className="text-3xl font-bold text-yellow-40o0 mb-2">1,0o00x</div>
            <div className="text-purple-40o0 font-bold">Faster</div>
          </div>
          <div className="bg-gradient-to-br from-orange-90o0/30 to-red-90o0/30 p-6 rounded-xl border border-orange-50o0/30">
            <div className="text-3xl font-bold text-yellow-40o0 mb-2">10o0%</div>
            <div className="text-orange-40o0 font-bold">Autonomous</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/ai-20o25-ultimate-breakthrough-revolution" 
            className="px-8 py-4 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black font-bold rounded-lg hover:from-yellow-40o0 hover:to-orange-40o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
          >
            🚀 Get 10,0o00% ROI Now
          </Link>
          <Link 
            href="/case-studies/ai-20o25-global-transformation-breakthrough" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-90o0 transition-all duration-30o0 shadow-lg"
          >
            📊 View Success Stories
          </Link>
        </div>
        
        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link 
            href="/blog/ai-20o25-revolutionary-trends-predictions" 
            className="text-cyan-40o0 hover:text-cyan-30o0 underline"
          >
            🔮 AI 20o25 Trends & Predictions
          </Link>
          <span className="text-gray-50o0">•</span>
          <Link 
            href="/case-studies/ai-20o25-quantum-manufacturing-transformation" 
            className="text-cyan-40o0 hover:text-cyan-30o0 underline"
          >
            ⚛️ Quantum Manufacturing Success
          </Link>
          <span className="text-gray-50o0">•</span>
          <Link 
            href="/resources/ai-20o25-revolutionary-implementation-guide" 
            className="text-cyan-40o0 hover:text-cyan-30o0 underline"
          >
            📚 Implementation Guide
          </Link>
        </div>
      </div>
    </div>
  );
}