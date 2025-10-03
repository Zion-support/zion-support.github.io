import { Link } from 'react-router-dom';

export default function UltimateContent2026MegaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-sm font-bold tracking-wide">🚀 ULTIMATE 2026 CONTENT REVOLUTION</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ULTIMATE CONTENT
            </span>
            <br />
            <span className="text-white">2026 MEGA SHOWCASE</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the most revolutionary AI content, breakthrough technologies, and 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">
              {' '}transformation success stories
            </span>{' '}
            that are reshaping industries worldwide
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/blog/ai-2026-autonomous-enterprise-systems"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                🧠 Explore Autonomous AI Systems
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link to="/case-studies/ai-2026-mega-transformation-success-story"
              className="group border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                💰 View $100M ROI Success Story
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Featured Content 1 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Autonomous Enterprise Systems</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary AI systems achieving 90% automation, 300% ROI, and complete business transformation
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">New Article</div>
              <Link to="/blog/ai-2026-autonomous-enterprise-systems"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform"
              >
                Read More →
              </Link>
            </div>
          </div>
          
          {/* Featured Content 2 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-white">$100M ROI Success Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              How a Fortune 500 company achieved $100M ROI with AI 2026 transformation in just 18 months
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Case Study</div>
              <Link to="/case-studies/ai-2026-mega-transformation-success-story"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform"
              >
                View Story →
              </Link>
            </div>
          </div>
          
          {/* Featured Content 3 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-white">AI 2026 Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Next-generation AI technologies transforming industries with unprecedented efficiency and innovation
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Featured</div>
              <Link to="/services/ai-2026-revolutionary-solutions"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-black text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300 font-semibold">Articles Published</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-black text-purple-400 mb-2">1M+</div>
            <div className="text-gray-300 font-semibold">Readers Engaged</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-black text-pink-400 mb-2">95%</div>
            <div className="text-gray-300 font-semibold">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300 font-semibold">Content Updates</div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals transforming their businesses with AI 2026 content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/25"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              ✉️ Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}