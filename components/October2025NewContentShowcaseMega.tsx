import { Sparkles, Rocket, TrendingUp, Award } from 'lucide-react';

const October2025NewContentShowcaseMega = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 px-6 rounded-2xl shadow-2xl mb-8 border-4 border-purple-400">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg mb-4 animate-pulse">
            ✨ Fresh Content - October 1, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
              Latest AI Innovations
            </span>
          </h2>
          <p className="text-xl text-purple-200">
            Discover cutting-edge AI solutions, proven success stories, and enterprise platforms
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Blog Post Card */}
          <div className="bg-gradient-to-br from-purple-800/50 to-blue-900/50 rounded-xl p-6 border-2 border-purple-400 transform hover:scale-105 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">BLOG</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-yellow-300">
              Generative AI Code Generation Revolution
            </h3>
            <p className="text-purple-200 text-sm mb-4">
              Discover how AI is transforming software development with 10x productivity gains and 85% faster delivery times.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-600 px-2 py-1 rounded text-xs">10.2x Productivity</span>
              <span className="bg-pink-600 px-2 py-1 rounded text-xs">92% Bug Reduction</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-xs">Enterprise Ready</span>
            </div>
            <a 
              href="/blog/ai-2025-oct-01-generative-ai-enterprise-code-generation-revolution"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-6 py-2 rounded-full font-bold text-sm transition-all"
            >
              Read Article →
            </a>
          </div>

          {/* Case Study Card */}
          <div className="bg-gradient-to-br from-pink-800/50 to-purple-900/50 rounded-xl p-6 border-2 border-pink-400 transform hover:scale-105 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-pink-300" />
              <span className="bg-pink-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">SUCCESS STORY</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-pink-300">
              Fortune 500: $47.3M Value Creation
            </h3>
            <p className="text-purple-200 text-sm mb-4">
              How a Fortune 500 technology company achieved 10.2x productivity increase with 2,400+ developers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-600 px-2 py-1 rounded text-xs">$47.3M Value</span>
              <span className="bg-pink-600 px-2 py-1 rounded text-xs">2,400 Developers</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-xs">98% Satisfaction</span>
            </div>
            <a 
              href="/case-studies/ai-2025-oct-01-global-tech-company-ai-code-generation-transformation-47-million-success"
              className="inline-block bg-pink-400 hover:bg-pink-300 text-purple-900 px-6 py-2 rounded-full font-bold text-sm transition-all"
            >
              View Case Study →
            </a>
          </div>

          {/* Service Card */}
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-900/50 rounded-xl p-6 border-2 border-blue-400 transform hover:scale-105 transition-all hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-blue-300" />
              <span className="bg-blue-400 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">PLATFORM</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">
              Enterprise AI Code Platform
            </h3>
            <p className="text-purple-200 text-sm mb-4">
              Transform your development with our enterprise-grade generative AI code generation platform.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-600 px-2 py-1 rounded text-xs">50+ Languages</span>
              <span className="bg-pink-600 px-2 py-1 rounded text-xs">96% Accuracy</span>
              <span className="bg-blue-600 px-2 py-1 rounded text-xs">24/7 Support</span>
            </div>
            <a 
              href="/services/ai-2025-october-generative-ai-code-generation-platform"
              className="inline-block bg-blue-400 hover:bg-blue-300 text-purple-900 px-6 py-2 rounded-full font-bold text-sm transition-all"
            >
              Explore Platform →
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-6 border-2 border-purple-400">
            <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Development?</h3>
            <p className="text-purple-200 mb-6">
              Join Fortune 500 companies achieving 10x productivity with AI code generation
            </p>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-300 hover:to-pink-300 text-purple-900 px-8 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentShowcaseMega;
