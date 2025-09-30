import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-indigo-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-full text-xl font-bold mb-8 animate-pulse">
            <span className="text-3xl">🎯</span>
            ULTIMATE 2026 AI TRANSFORMATION GUIDE
            <span className="text-3xl">🚀</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            The Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              AI Revolution
            </span>
            <span className="block text-4xl md:text-5xl text-gray-300 mt-4">
              Starts Here
            </span>
          </h1>
          
          <p className="text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Master the AI technologies that are transforming Fortune 500 companies and delivering unprecedented competitive advantages
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Companies Transformed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.5B+</div>
              <div className="text-lg text-gray-300">Total ROI Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Ultimate Content Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Featured Articles */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                🚀 Breakthrough Articles
              </h2>
              <p className="text-xl text-gray-300">
                Essential guides for enterprise AI transformation
              </p>
            </div>

            <div className="space-y-6">
              {/* Autonomous Business Processes */}
              <Link href="/blog/ai-2026-autonomous-business-processes" className="group block">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🆕 BREAKTHROUGH
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    Autonomous Business Process Orchestration
                  </h3>
                  <p className="text-lg text-white/90 mb-4">
                    Achieve 95% business process automation with next-generation AI orchestration platforms
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300">95%</div>
                      <div className="text-sm text-white/80">Automation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">80%</div>
                      <div className="text-sm text-white/80">Cost Cut</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-300">300%</div>
                      <div className="text-sm text-white/80">Productivity</div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Customer Intelligence */}
              <Link href="/blog/ai-2026-next-generation-customer-intelligence" className="group block">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🆕 BREAKTHROUGH
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    Next-Generation Customer Intelligence
                  </h3>
                  <p className="text-lg text-white/90 mb-4">
                    Revolutionary AI platforms achieving 99% predictive accuracy in customer behavior
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300">99%</div>
                      <div className="text-sm text-white/80">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">85%</div>
                      <div className="text-sm text-white/80">CLV ↑</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-300">70%</div>
                      <div className="text-sm text-white/80">Churn ↓</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                🏆 Success Stories
              </h2>
              <p className="text-xl text-gray-300">
                Real-world transformations with proven results
              </p>
            </div>

            <div className="space-y-6">
              {/* Fortune 500 Case Study */}
              <Link href="/case-studies/fortune-500-autonomous-operations-transformation-2026" className="group block">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🆕 SUCCESS STORY
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    $200M ROI: Fortune 500 Autonomous Operations
                  </h3>
                  <p className="text-lg text-white/90 mb-4">
                    Complete autonomous operations transformation achieving $200M ROI in 12 months
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300">$200M</div>
                      <div className="text-sm text-white/80">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">95%</div>
                      <div className="text-sm text-white/80">Automation</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-300">99.9%</div>
                      <div className="text-sm text-white/80">Uptime</div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Additional Success Story */}
              <Link href="/case-studies/ai-2026-mega-transformation-success-story" className="group block">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">💎</span>
                    </div>
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      🆕 SUCCESS STORY
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    $100M Success: Fortune 500 Mega Breakthrough
                  </h3>
                  <p className="text-lg text-white/90 mb-4">
                    How a Fortune 500 manufacturing giant achieved 95% efficiency gains and $100M ROI
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-300">$100M</div>
                      <div className="text-sm text-white/80">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-300">95%</div>
                      <div className="text-sm text-white/80">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-300">90%</div>
                      <div className="text-sm text-white/80">Cost Cut</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Ultimate Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-16 text-black relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">Ready to Join the AI Revolution?</h2>
            <p className="text-2xl mb-10 opacity-90">
              Transform your business with the same AI technologies powering Fortune 500 success stories
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/blog" 
                className="bg-purple-900 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-purple-800 transition-all hover:scale-105 shadow-2xl"
              >
                Explore All Articles →
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-black text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all hover:scale-105 shadow-2xl"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-black text-black px-12 py-6 rounded-2xl font-bold text-xl hover:bg-black hover:text-white transition-all hover:scale-105"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}