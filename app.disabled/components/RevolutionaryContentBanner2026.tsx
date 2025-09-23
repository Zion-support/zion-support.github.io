import Link from 'next/link';

const RevolutionaryContentBanner2026 = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-600/90"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold text-white">🚀 REVOLUTIONARY CONTENT 2026</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Business is 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Here Today
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking insights on autonomous AI operations, quantum computing applications, 
            and the next generation of business technology that's transforming industries worldwide.
          </p>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">Autonomous AI</h3>
              <p className="text-white/80 text-sm">
                Self-managing business operations that adapt and optimize in real-time
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-white/80 text-sm">
                Revolutionary computing power solving previously impossible business problems
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural Interfaces</h3>
              <p className="text-white/80 text-sm">
                Next-generation human-AI collaboration through direct neural connection
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Revolutionary Content
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">340%</div>
              <div className="text-white/80 text-sm">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$85M</div>
              <div className="text-white/80 text-sm">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-white/80 text-sm">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Autonomous Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2026;