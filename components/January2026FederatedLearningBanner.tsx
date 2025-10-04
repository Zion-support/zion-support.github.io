import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026FederatedLearningBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase animate-pulse">
              🔒 January 2026: Federated Learning Breakthrough
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Privacy-First AI at Scale
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how federated learning delivers <span className="text-emerald-400 font-bold">1000x faster training</span>, 
            <span className="text-teal-400 font-bold"> 99.9% privacy preservation</span>, and 
            <span className="text-cyan-400 font-bold"> $3.8 billion in measurable value</span> across enterprise implementations.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">1000x</div>
              <div className="text-xs text-emerald-300">Faster Training</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">99.9%</div>
              <div className="text-xs text-teal-300">Privacy Preserved</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$3.8B</div>
              <div className="text-xs text-cyan-300">Total Value</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">95%</div>
              <div className="text-xs text-green-300">Data Utilization</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Privacy-First Learning</h3>
            <p className="text-gray-300 mb-6">
              Train AI models across distributed data sources while maintaining complete privacy 
              and achieving superior performance with zero data sharing.
            </p>
            <Link to="/blog/ai-2026-federated-learning-enterprise-breakthrough"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Article →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🏥</div>
            <h3 className="text-2xl font-bold text-white mb-4">Healthcare Success</h3>
            <p className="text-gray-300 mb-6">
              See how a global healthcare consortium achieved 99.9% privacy preservation 
              while training models across 2.3M patient records.
            </p>
            <Link to="/case-studies/healthcare-federated-learning-mega-success"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum-Enhanced Privacy</h3>
            <p className="text-gray-300 mb-6">
              Leverage quantum cryptography for unbreakable privacy guarantees and 
              future-proof security in federated learning systems.
            </p>
            <Link to="/services/ai-2026-federated-learning-solutions"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Solutions →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve Privacy-First AI with Federated Learning?
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the enterprises achieving 1000x faster training while maintaining complete data privacy. 
              Get your free consultation and discover how federated learning can deliver $3.8B+ in value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link to="/blog/ai-2026-federated-learning-enterprise-breakthrough" 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
              >
                Read Full Article →
              </Link>
              <Link to="/case-studies/healthcare-federated-learning-mega-success" 
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}