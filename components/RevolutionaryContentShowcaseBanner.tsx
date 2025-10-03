import React from 'react';
import { Link } from 'react-router-dom';

export default function RevolutionaryContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-cyan-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <span className="text-2xl">🚀</span>
            REVOLUTIONARY AI BREAKTHROUGHS NOW LIVE
            <span className="text-2xl">✨</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
              Next-Gen AI Solutions
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the AI innovations that are revolutionizing Fortune 500 companies and delivering unprecedented results
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all hover:scale-105 shadow-2xl"
            >
              Explore Breakthrough Articles →
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-all hover:scale-105"
            >
              View Success Stories →
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Autonomous Business Processes */}
          <Link href="/blog/ai-2026-autonomous-business-processes" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🆕 JUST PUBLISHED
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                Autonomous Business Processes
              </h3>
              <p className="text-gray-300 mb-4">
                Achieve 95% process automation with next-generation AI orchestration platforms
              </p>
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div>
                  <div className="text-xl font-bold text-purple-400">95%</div>
                  <div className="text-xs text-gray-400">Automation</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-pink-400">80%</div>
                  <div className="text-xs text-gray-400">Cost Cut</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-400">300%</div>
                  <div className="text-xs text-gray-400">Productivity</div>
                </div>
              </div>
              <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Customer Intelligence */}
          <Link href="/blog/ai-2026-next-generation-customer-intelligence" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🆕 JUST PUBLISHED
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                Customer Intelligence 2026
              </h3>
              <p className="text-gray-300 mb-4">
                Revolutionary AI platforms achieving 99% predictive accuracy in customer behavior
              </p>
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div>
                  <div className="text-xl font-bold text-green-400">99%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-teal-400">85%</div>
                  <div className="text-xs text-gray-400">CLV ↑</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-400">70%</div>
                  <div className="text-xs text-gray-400">Churn ↓</div>
                </div>
              </div>
              <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                Read Full Article →
              </div>
            </div>
          </Link>

          {/* Fortune 500 Case Study */}
          <Link href="/case-studies/fortune-500-autonomous-operations-transformation-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🆕 JUST PUBLISHED
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                $200M ROI Success Story
              </h3>
              <p className="text-gray-300 mb-4">
                Fortune 500 autonomous operations transformation achieving $200M ROI in 12 months
              </p>
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div>
                  <div className="text-xl font-bold text-orange-400">$200M</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-red-400">95%</div>
                  <div className="text-xs text-gray-400">Automation</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
              <div className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                Read Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-12 text-black">
          <h2 className="text-4xl font-bold mb-4">Don't Miss These Game-Changing Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Essential reading for CTOs, CIOs, and technology leaders planning their 2026 AI transformation strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-purple-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all hover:scale-105 shadow-lg"
            >
              View All Articles & Insights →
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}