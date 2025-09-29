import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✨ BRAND NEW 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Just Published
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in neural interfaces, space AI technology, and privacy-preserving machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Neural Interfaces */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Neural Interfaces 2026
              </h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Revolutionary brain-computer integration enabling 95% accuracy in neural signal interpretation 
                and 300% productivity gains in cognitive tasks.
              </p>
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">95%</div>
                  <div className="text-xs opacity-75">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">300%</div>
                  <div className="text-xs opacity-75">Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">$2.5B</div>
                  <div className="text-xs opacity-75">Market</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Space AI Technology */}
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Space Technology 2026
              </h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Autonomous spacecraft operations with 99.7% autonomy, intelligent satellite networks, 
                and revolutionary space exploration capabilities.
              </p>
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">99.7%</div>
                  <div className="text-xs opacity-75">Autonomous</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">500%</div>
                  <div className="text-xs opacity-75">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">$15B</div>
                  <div className="text-xs opacity-75">Market</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Synthetic Data */}
          <Link href="/blog/ai-synthetic-data-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Synthetic Data 2026
              </h3>
              <p className="opacity-90 mb-6 leading-relaxed">
                Privacy-preserving machine learning with 100% privacy protection, 95% data utility, 
                and zero compliance risks for enterprise AI applications.
              </p>
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-xs opacity-75">Privacy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">95%</div>
                  <div className="text-xs opacity-75">Utility</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">$8B</div>
                  <div className="text-xs opacity-75">Market</div>
                </div>
              </div>
              <div className="flex items-center text-yellow-300 font-semibold group-hover:text-white transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              🚀 Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              📈 View Success Stories
            </Link>
          </div>
          <p className="mt-4 text-sm opacity-75">
            Join 50,000+ professionals staying ahead with the latest AI innovations
          </p>
        </div>
      </div>
    </section>
  );
}