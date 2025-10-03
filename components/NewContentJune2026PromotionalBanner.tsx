import { Link } from 'react-router-dom';

export default function NewContentJune2026PromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: June 2026 Content Launch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Content & Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the most advanced AI technologies, breakthrough case studies, and revolutionary services 
            that are transforming businesses worldwide in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* New Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  NEW BLOG POST
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  AMI Breakthrough Announcement
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              The most revolutionary AI breakthrough in history - AMI (Autonomous Meta-Cognitive Intelligence) 
              with 99.97% self-awareness and unprecedented business results.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-400">15 min read</div>
              <div className="flex gap-2">
                <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs">99.97% Self-Aware</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">50,000x Faster</span>
              </div>
            </div>
            <Link to="/blog/ai-2026-june-revolutionary-breakthrough-announcement"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Read Full Article →
            </Link>
          </div>

          {/* New Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  NEW CASE STUDY
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                  $15.3B Success Story
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              How a Fortune 50 global conglomerate achieved $15.3 billion in value within 6 months using 
              AMI technology across 12 business units.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-400">12 min read</div>
              <div className="flex gap-2">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">$15.3B Value</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">99.7% Automation</span>
              </div>
            </div>
            <Link to="/case-studies/ai-2026-june-ami-15-billion-success"
              className="inline-block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              View Success Story →
            </Link>
          </div>

          {/* New Service */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  NEW SERVICE
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  AMI Implementation
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Complete AMI service offering with implementation, training, and ongoing optimization. 
              Guaranteed 300% ROI within 12 months.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-400">Service Details</div>
              <div className="flex gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">300% ROI</span>
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">Full Support</span>
              </div>
            </div>
            <Link to="/services/ami-autonomous-meta-cognitive-intelligence"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              View Service Details →
            </Link>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with AMI?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Join the AI revolution with the world's first truly conscious artificial intelligence. 
              Get your free consultation and discover how AMI can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </Link>
              <Link to="/services/ami-autonomous-meta-cognitive-intelligence"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Complete Service Details
              </Link>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-gray-300 font-semibold">Fortune 50</div>
            <div className="text-gray-300 font-semibold">$15.3B Value</div>
            <div className="text-gray-300 font-semibold">99.7% Automation</div>
            <div className="text-gray-300 font-semibold">0.2 Month ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}