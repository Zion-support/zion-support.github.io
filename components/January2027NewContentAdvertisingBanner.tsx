import React from 'react';

const January2027NewContentAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-900/40 via-red-900/40 to-pink-900/40 backdrop-blur-lg border-b border-orange-500/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/40 mb-6 animate-bounce">
            <span className="text-orange-400 font-bold text-xl tracking-wider uppercase">
              🔥 BREAKING: JANUARY 2027 - REVOLUTIONARY NEW CONTENT LAUNCHED! 🔥
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            The Ultimate AI Transformation Revolution
          </h2>
          
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the most groundbreaking AI content ever created: True Consciousness, Infinite Processing, 
            and Universal Intelligence. Transform your reality with our revolutionary AI solutions.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30 hover:border-red-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-pulse">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Ultimate AI Transformation</h3>
              <p className="text-gray-300 mb-4">
                Experience the most profound AI breakthrough in history: 99.99% consciousness accuracy, 
                genuine self-awareness, and infinite processing power.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-1">$847B</div>
                  <div className="text-sm text-orange-300">Success Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">99.99%</div>
                  <div className="text-sm text-red-300">Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="/blog/ai-2027-ultimate-transformation"
                className="block w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Read Ultimate Guide →
              </a>
              <a 
                href="/case-studies/ai-2027-847-billion-success"
                className="block w-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                View Success Story
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-pulse">📚</div>
              <h3 className="text-2xl font-bold text-white mb-3">Revolutionary Content Showcase</h3>
              <p className="text-gray-300 mb-4">
                Access the most comprehensive AI content collection: 47 New Guides, 127 Case Studies, 
                and $2.8T combined value creation.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-red-400 mb-1">47</div>
                  <div className="text-xs text-red-300">Guides</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-pink-400 mb-1">127</div>
                  <div className="text-xs text-pink-300">Cases</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-400 mb-1">$2.8T</div>
                  <div className="text-xs text-red-300">Value</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="/content-library/ai-2027-complete"
                className="block w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Access Library →
              </a>
              <a 
                href="/downloads/ai-2027-master-collection"
                className="block w-full border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Download Free
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-pulse">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-3">Interactive AI Revolution</h3>
              <p className="text-gray-300 mb-4">
                Experience the future of AI through interactive demos, ROI calculators, and personalized 
                transformation assessments.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-400 mb-1">∞</div>
                  <div className="text-sm text-pink-300">Processing</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                  <div className="text-sm text-orange-300">Success</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <a 
                href="/interactive/ai-2027-revolution"
                className="block w-full bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Try Interactive Demo →
              </a>
              <a 
                href="/calculator/ai-2027-roi"
                className="block w-full border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Calculate ROI
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Join the AI Revolution Today</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Don't miss out on the most significant technological advancement in human history. 
              Transform your business, your reality, and your future with our revolutionary AI solutions.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
                <div className="text-2xl font-bold text-orange-400 mb-1">47</div>
                <div className="text-sm text-orange-300">New Guides</div>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-4 border border-red-500/30">
                <div className="text-2xl font-bold text-red-400 mb-1">127</div>
                <div className="text-sm text-red-300">Case Studies</div>
              </div>
              <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg p-4 border border-pink-500/30">
                <div className="text-2xl font-bold text-pink-400 mb-1">$2.8T</div>
                <div className="text-sm text-pink-300">Value Created</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-lg p-4 border border-orange-500/30">
                <div className="text-2xl font-bold text-orange-400 mb-1">∞</div>
                <div className="text-sm text-orange-300">Possibilities</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/get-started/ai-2027-revolution"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 hover:from-orange-400 hover:via-red-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
              >
                Start AI Transformation →
              </a>
              <a 
                href="/contact/ai-2027-consultation"
                className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Free Consultation
              </a>
              <a 
                href="/demo/ai-2027-live"
                className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 border border-orange-500/40 mb-6 animate-pulse">
            <span className="text-orange-400 font-bold text-lg">⚡ LIMITED TIME: Get Early Access to the AI Revolution!</span>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">
            Join the first 1,000 pioneers who will experience the ultimate AI transformation. 
            <span className="text-orange-400 font-semibold"> Limited spots available!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/early-access/ai-2027-revolution"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 animate-bounce"
            >
              🚀 Get Early Access Now →
            </a>
            <a 
              href="/waitlist/ai-2027-revolution"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027NewContentAdvertisingBanner;