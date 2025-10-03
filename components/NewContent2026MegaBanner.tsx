import { Link } from 'react-router-dom';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
            🚀 New Content Drop - January 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Revolutionary AI Content Just Dropped
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest insights on AI trends, enterprise transformation, and breakthrough technologies that are reshaping the future of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm font-semibold text-blue-200 mb-3">📈 Featured Article</div>
            <h3 className="text-xl font-bold mb-3">
              AI Trends 2026: The Future of Enterprise Technology
            </h3>
            <p className="text-blue-100 mb-4 text-sm">
              Discover the revolutionary AI trends shaping 2026. From autonomous systems to quantum-enhanced AI, explore the breakthroughs that matter.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-200">15 min read</span>
              <Link to="/blog/ai-trends-2026-future-enterprise" 
                className="text-white font-semibold hover:text-blue-200 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm font-semibold text-green-200 mb-3">💰 Success Story</div>
            <h3 className="text-xl font-bold mb-3">
              Enterprise AI Transformation: $150M ROI Success Story
            </h3>
            <p className="text-blue-100 mb-4 text-sm">
              How a Fortune 500 company achieved unprecedented results through comprehensive AI transformation, including autonomous systems and quantum computing.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-200">12 min read</span>
              <Link to="/case-studies/enterprise-ai-transformation-mega-success-2026" 
                className="text-white font-semibold hover:text-green-200 transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-sm font-semibold text-purple-200 mb-3">🧮 Interactive Tool</div>
            <h3 className="text-xl font-bold mb-3">
              AI ROI Calculator 2026
            </h3>
            <p className="text-blue-100 mb-4 text-sm">
              Calculate your potential ROI from AI transformation. See how autonomous systems and quantum computing can impact your bottom line.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-200">Interactive</span>
              <Link to="/tools/ai-roi-calculator" 
                className="text-white font-semibold hover:text-purple-200 transition-colors"
              >
                Calculate ROI →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of forward-thinking organizations that are already implementing these breakthrough AI technologies. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link to="/blog" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}