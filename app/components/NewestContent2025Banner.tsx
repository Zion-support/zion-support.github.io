import React from 'react';
import { Link } from 'react-router-dom';

const NewestContent2025Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse bottom-10 right-10 animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
              🎯 Latest 2025 AI Innovations
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Breakthrough AI Solutions
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforming Business in 2025
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover the latest innovations in AI, quantum computing, and autonomous systems 
            that are reshaping the future of enterprise technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-cyan-400 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              AI-Powered Automation
            </h3>
            <p className="text-gray-300 mb-4">
              Advanced machine learning solutions that automate complex business processes 
              and drive unprecedented efficiency gains.
            </p>
            <Link 
              href="/blog/ai-edge-computing-real-time-intelligence-2025"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Quantum Computing
            </h3>
            <p className="text-gray-300 mb-4">
              Next-generation quantum computing solutions revolutionizing data processing 
              and complex problem-solving capabilities.
            </p>
            <Link 
              href="/blog/quantum-enhanced-neural-networks-2025"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Explore →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-blue-400 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Secure Infrastructure
            </h3>
            <p className="text-gray-300 mb-4">
              Enterprise-grade security with quantum-enhanced encryption protecting 
              your most critical business data and operations.
            </p>
            <Link 
              href="/blog/quantum-secure-ai-infrastructure-2025"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Discover →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-center">
            Join thousands of forward-thinking organizations already leveraging these breakthrough 
            AI technologies to achieve unprecedented competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/ai-services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
            >
              Explore AI Services
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300 text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
            <p className="text-gray-300 text-sm">Latest breakthroughs in artificial intelligence and machine learning technologies.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Autonomous Systems</h3>
            <p className="text-gray-300">Intelligent automation driving enterprise efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;