// import React from 'react';

export default function AIInnovationAdvertisingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800/20 to-purple-800/20 backdrop-blur-lg border border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">
                    🔥 AI Innovation Spotlight
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Next-Generation AI Solutions
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Experience the future of artificial intelligence with our cutting-edge solutions. 
                  From autonomous decision-making to predictive analytics, our AI technologies 
                  are transforming how enterprises operate and compete.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                    <div className="text-sm text-gray-400">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">$2B+</div>
                    <div className="text-sm text-gray-400">Cost Savings Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">AI Support</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/services" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                  >
                    Explore AI Services
                  </a>
                  <a 
                    href="/case-studies" 
                    className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    View Success Stories
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
                    <p className="text-sm text-gray-400">Advanced algorithms for predictive insights</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 mt-4">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-lg font-bold text-white mb-2">Automation</h3>
                    <p className="text-sm text-gray-400">Intelligent process automation at scale</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
                    <p className="text-sm text-gray-400">Real-time data insights and visualization</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 mt-4">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                    <p className="text-sm text-gray-400">AI-powered threat detection and response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}