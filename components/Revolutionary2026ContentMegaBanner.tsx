import React from 'react';
import Link from 'next/link';

const Revolutionary2026ContentMegaBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-indigo-900/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Revolutionary 2026 Content Now Live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Future of AI</span> is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI technologies, quantum computing breakthroughs, and enterprise transformations 
            that are reshaping industries worldwide. New exclusive content available now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-revolution-2026-next-frontier"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              Read AI Revolution 2026 →
            </Link>
            <Link
              href="/blog/quantum-ai-breakthrough-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
            >
              Explore Quantum AI →
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog/ai-revolution-2026-next-frontier" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    AI Revolution 2026
                  </h3>
                  <p className="text-blue-200 text-sm">Featured Article</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Discover the groundbreaking AI technologies revolutionizing enterprise operations with autonomous agents, 
                neural interfaces, and predictive intelligence achieving 300% productivity gains.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    Quantum AI Breakthrough
                  </h3>
                  <p className="text-blue-200 text-sm">Breakthrough Article</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Explore how quantum-enhanced AI is solving impossible optimization problems in seconds, delivering 
                500x faster results and revolutionizing computational capabilities across industries.
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/global-manufacturing-ai-transformation" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    Manufacturing Success
                  </h3>
                  <p className="text-blue-200 text-sm">Case Study</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements 
                through comprehensive AI transformation across 47 countries.
              </p>
              <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Impact Metrics</h2>
            <p className="text-blue-200 text-lg">Real results from our latest AI implementations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500x</div>
              <div className="text-white font-semibold">Faster Processing</div>
              <div className="text-blue-200 text-sm">Quantum AI speedup</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$50M</div>
              <div className="text-white font-semibold">Annual Savings</div>
              <div className="text-blue-200 text-sm">Manufacturing case study</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white font-semibold">Efficiency Gains</div>
              <div className="text-blue-200 text-sm">Process optimization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-white font-semibold">Productivity Boost</div>
              <div className="text-blue-200 text-sm">Neural interface systems</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Revolutionary AI?
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Join the AI revolution and discover how cutting-edge technologies can transform your operations, 
              reduce costs, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                Call +1 302 464 0950
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolutionary2026ContentMegaBanner;