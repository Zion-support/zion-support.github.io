import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Ultimate Breakthrough Content
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover revolutionary case studies, cutting-edge technology insights, and 
            transformative business applications that will reshape your industry in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AI Automation Success Story */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Automation Success</h3>
            <p className="text-white/80 mb-4">
              Fortune 500 company achieves 500% ROI through intelligent automation, 
              reducing costs by 60% and boosting productivity by 340%.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold text-lg">500% ROI</span>
              <Link 
                href="/blog/ai-automation-success-story-2025" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Quantum Computing Applications */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-white/80 mb-4">
              Revolutionary business applications from portfolio optimization to 
              drug discovery, transforming industries with quantum advantage.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold text-lg">2025 Ready</span>
              <Link 
                href="/blog/quantum-computing-business-applications-2025" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                Explore →
              </Link>
            </div>
          </div>

          {/* Neural Interface Revolution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
            <p className="text-white/80 mb-4">
              Brain-computer interfaces transforming business operations with 
              enhanced productivity and accessibility solutions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-bold text-lg">Revolutionary</span>
              <Link 
                href="/case-studies/neural-interface-revolution-2025" 
                className="text-purple-300 hover:text-white transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              View Case Studies
            </Link>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            Join 10,000+ professionals discovering the future of technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughBanner;