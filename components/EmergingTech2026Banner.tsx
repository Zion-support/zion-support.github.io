import React from 'react';
import { Link } from 'react-router-dom';

const EmergingTech2026Banner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-950 via-purple-950 to-blue-950 border-t border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 mb-6">
            <span className="text-purple-300 font-bold text-lg tracking-wider uppercase">
              🚀 NEW 2026 EMERGING TECH
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Emerging Technologies
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-semibold">
            Discover the most advanced AI technologies emerging in 2026: Conscious Computing, Quantum-Neural Fusion, and Transcendent Intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  EMERGING TRENDS
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  REVOLUTIONARY
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                AI 2026: Emerging Tech Trends & Predictions
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover the most revolutionary AI technologies emerging in 2026 that will reshape enterprise operations, from conscious computing to quantum-neural fusion systems.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">12 min read</div>
                <div className="text-sm text-purple-300 font-semibold">Just Published</div>
              </div>
              
              <Link 
                href="/blog/ai-2026-emerging-tech-trends-predictions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Emerging Trends →
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  $25B SUCCESS
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  FORTUNE 100
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors">
                Emerging Tech Transformation Success
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                How a Fortune 100 technology conglomerate achieved $25 billion ROI through early adoption of emerging AI technologies, including conscious computing and quantum-neural fusion.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">15 min read</div>
                <div className="text-sm text-green-300 font-semibold">Success Story</div>
              </div>
              
              <Link 
                href="/case-studies/ai-2026-emerging-tech-transformation-25-billion-success"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
              >
                View Success Story →
              </Link>
            </div>
          </div>

          {/* Service */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  NEW SERVICE
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  500x ROI
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                AI 2026 Emerging Tech Consulting
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your enterprise with cutting-edge emerging AI technologies including conscious computing, quantum-neural fusion, and transcendent intelligence systems.
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">Custom Pricing</div>
                <div className="text-sm text-blue-300 font-semibold">12-18 months</div>
              </div>
              
              <Link 
                href="/services/ai-2026-emerging-tech-consulting"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Explore Service →
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30">
            <div className="text-3xl font-extrabold text-purple-400 mb-2">Conscious Computing</div>
            <div className="text-sm text-purple-300">Meta-cognitive AI systems with self-improving algorithms</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 border border-indigo-500/30">
            <div className="text-3xl font-extrabold text-indigo-400 mb-2">Quantum-Neural Fusion</div>
            <div className="text-sm text-indigo-300">1,000,000x performance boost through hybrid systems</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30">
            <div className="text-3xl font-extrabold text-blue-400 mb-2">Transcendent Intelligence</div>
            <div className="text-sm text-blue-300">Beyond-human-level cognitive capabilities</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border border-cyan-500/30">
            <div className="text-3xl font-extrabold text-cyan-400 mb-2">Universal Consciousness</div>
            <div className="text-sm text-cyan-300">Enterprise-wide consciousness integration</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise with Emerging Technologies?
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join the conscious computing revolution. Companies that begin their emerging technology transformation today will be the leaders of tomorrow's transcendent business operations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/services/ai-2026-emerging-tech-consulting"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Emerging Tech Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergingTech2026Banner;