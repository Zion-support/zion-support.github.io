import { Link } from 'react-router-dom';

export default function ContentShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Content Library
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover comprehensive guides, case studies, and insights across AI, automation, and business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <div className="text-white font-bold">AI Breakthroughs</div>
                <div className="text-purple-300 text-sm">Latest Research</div>
              </div>
            </div>
            <div className="text-gray-300 mb-4">
              Cutting-edge AI technologies and implementations that are transforming industries.
            </div>
            <Link to="/blog"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Explore AI Content
              <span>→</span>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CS</span>
              </div>
              <div>
                <div className="text-white font-bold">Case Studies</div>
                <div className="text-emerald-300 text-sm">Success Stories</div>
              </div>
            </div>
            <div className="text-gray-300 mb-4">
              Real-world implementations and the measurable results achieved by our clients.
            </div>
            <Link to="/case-studies"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              View Case Studies
              <span>→</span>
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <div className="text-white font-bold">Guides & Playbooks</div>
                <div className="text-blue-300 text-sm">Implementation</div>
              </div>
            </div>
            <div className="text-gray-300 mb-4">
              Step-by-step guides and playbooks for implementing AI and automation solutions.
            </div>
            <Link to="/guides"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Browse Guides
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/content"
            className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore All Content
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}