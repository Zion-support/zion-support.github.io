import { Link } from 'react-router-dom';

export default function New2027ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 BREAKTHROUGH 2027
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              NEW CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI 2027 Content
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest breakthroughs in quantum computing, autonomous enterprise operations, 
            and mega transformation success stories that are reshaping the future of business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/blog/ai-2027-quantum-breakthrough"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                QUANTUM AI
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
              Quantum Computing Revolution
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Explore how quantum computing breakthroughs are revolutionizing enterprise AI operations 
              with unprecedented computational power and optimization capabilities.
            </p>
            <div className="flex items-center text-yellow-300 text-sm font-semibold">
              Read More →
            </div>
          </Link>

          <Link to="/blog/ai-2027-autonomous-enterprise"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                AUTONOMOUS
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                ENTERPRISE
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
              Fully Autonomous Operations
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Discover how AI-driven autonomous enterprise systems are transforming business operations 
              with unprecedented efficiency and decision-making capabilities.
            </p>
            <div className="flex items-center text-yellow-300 text-sm font-semibold">
              Read More →
            </div>
          </Link>

          <Link to="/case-studies/ai-2027-mega-transformation-success"
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $150M ROI
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                SUCCESS
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
              Mega Transformation Success
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Learn how a Fortune 500 company achieved $150M in ROI through comprehensive AI 2027 transformation, 
              revolutionizing their operations and market position.
            </p>
            <div className="flex items-center text-yellow-300 text-sm font-semibold">
              Read More →
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Articles
            </Link>
            <Link to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">$150M</div>
              <div className="text-sm text-blue-100">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-green-300">95%</div>
              <div className="text-sm text-blue-100">Autonomy Level</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">10,000x</div>
              <div className="text-sm text-blue-100">Speed Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-300">99.5%</div>
              <div className="text-sm text-blue-100">AI Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}