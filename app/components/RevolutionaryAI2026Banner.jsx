import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2026Banner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-white/30">
            <span className="text-lg font-semibold">🚀 REVOLUTIONARY AI 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            The Future of AI is Here
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the next generation of artificial intelligence that's transforming industries, 
            revolutionizing human-AI collaboration, and creating unprecedented business opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/blog"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Revolutionary Content
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Transform Your Business
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              AI that demonstrates genuine self-awareness and emotional intelligence
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">Quantum-Neural Fusion</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Revolutionary computing that combines quantum processing with neural interfaces
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Business</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Self-managing organizations that operate independently and drive growth
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Future Predictions</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              AI systems that can predict and influence future events across time
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300">Client Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">340%</div>
            <div className="text-gray-300">Average ROI Increase</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Lead the AI Revolution?
            </h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join the organizations that are already leveraging revolutionary AI technologies 
              to transform their business and create unprecedented value.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Your AI Transformation
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default RevolutionaryAI2026Banner;