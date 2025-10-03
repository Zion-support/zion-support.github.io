import { Link } from 'react-router-dom';

export default function January2026CognitiveAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🤖 January 2026 Revolution
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Cognitive Automation Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous Business Operations • $25.3B+ Enterprise Value • Complete Process Transformation
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-green-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">$25.3B</div>
              <div className="text-sm text-emerald-300">Proven ROI</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">1000x</div>
              <div className="text-sm text-teal-300">Process Efficiency</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/blog/ai-2026-cognitive-automation-revolution" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Revolution →
            </Link>
            <Link to="/case-studies/ai-2026-cognitive-automation-25-billion-success" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              View $25.3B Success Story →
            </Link>
            <Link to="/contact" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Implementation Guide
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <p className="text-green-200 text-lg mb-4">
              <strong>Self-Aware AI Systems</strong> that understand, learn, and optimize business processes in real-time, delivering unprecedented levels of automation and value generation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">Self-Aware Process Intelligence</span>
              <span className="bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300">Autonomous Learning Engine</span>
              <span className="bg-teal-500/20 px-3 py-1 rounded-full text-teal-300">Quantum-Enhanced Cognition</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">Zero-Intervention Operation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}