// import React from 'react';

const January2025NewContentAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-y border-emerald-500/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🆕 JUST PUBLISHED: January 2025 New Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI Solutions Now Available
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in AI technology with our comprehensive collection of new content, 
            case studies, and implementation guides. Transform your business with proven strategies and real-world success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-lg font-bold text-white mb-3">Innovation Breakthrough</h3>
            <p className="text-gray-300 text-sm mb-4">
              Latest AI innovations transforming enterprise operations with unprecedented efficiency.
            </p>
            <div className="text-emerald-400 font-bold text-sm mb-4">95% Accuracy • 78% Cost Reduction</div>
            <a 
              href="/components/January2025LatestInnovationBanner"
              className="inline-block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Explore Innovation →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
            <h3 className="text-lg font-bold text-white mb-3">Enterprise Solutions</h3>
            <p className="text-gray-300 text-sm mb-4">
              Comprehensive AI solutions designed for modern enterprises seeking scalability and growth.
            </p>
            <div className="text-teal-400 font-bold text-sm mb-4">500+ Deployments • 8.5x ROI</div>
            <a 
              href="/components/January2025EnterpriseSolutionsBanner"
              className="inline-block w-full text-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              View Solutions →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-lg font-bold text-white mb-3">Content Showcase</h3>
            <p className="text-gray-300 text-sm mb-4">
              Extensive collection of AI insights, case studies, and implementation guides for all skill levels.
            </p>
            <div className="text-cyan-400 font-bold text-sm mb-4">6 Categories • 100+ Articles</div>
            <a 
              href="/components/January2025ContentShowcase"
              className="inline-block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Browse Content →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💡</div>
            <h3 className="text-lg font-bold text-white mb-3">Expert Insights</h3>
            <p className="text-gray-300 text-sm mb-4">
              Exclusive insights from industry leaders and successful enterprise AI implementations.
            </p>
            <div className="text-blue-400 font-bold text-sm mb-4">24/7 Support • 99.9% Uptime</div>
            <a 
              href="/services/ai-expert-insights"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Get Insights →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Limited Time: Early Access Benefits</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be among the first to access our latest AI solutions and get exclusive early-bird pricing, 
              priority support, and direct access to our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-500/30">
                <div className="text-emerald-400 font-bold text-lg">30% OFF</div>
                <div className="text-emerald-300 text-sm">Early Bird Pricing</div>
              </div>
              <div className="bg-teal-500/20 rounded-lg p-4 border border-teal-500/30">
                <div className="text-teal-400 font-bold text-lg">Priority</div>
                <div className="text-teal-300 text-sm">Expert Support</div>
              </div>
              <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-500/30">
                <div className="text-cyan-400 font-bold text-lg">Free</div>
                <div className="text-cyan-300 text-sm">Consultation</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                Claim Early Access
              </a>
              <a 
                href="/demo"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentAdvertisingBanner;