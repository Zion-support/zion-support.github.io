import { Link } from 'react-router-dom';

export default function NewContent2027ShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-8 rounded-lg mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-lg font-bold">
            NEW 2027 CONTENT
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full text-lg font-semibold">
            🔥 HOT RELEASES
          </span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          🚀 Latest AI Breakthroughs & Success Stories
        </h2>
        
        <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
          Explore our newest content featuring <strong>quantum AI breakthroughs</strong>, 
          <strong> autonomous business intelligence</strong>, and <strong>$500M success stories</strong> 
          from leading Fortune 100 companies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold mb-2">Quantum AI 2027</h3>
            <p className="text-sm opacity-90 mb-4">1000x faster processing with quantum neural networks</p>
            <Link to="/blog/ai-2027-quantum-neural-networks"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article
            </Link>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Autonomous Intelligence</h3>
            <p className="text-sm opacity-90 mb-4">Self-optimizing AI systems delivering 300% ROI</p>
            <Link to="/blog/ai-2026-autonomous-business-intelligence"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide
            </Link>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">$500M Success Story</h3>
            <p className="text-sm opacity-90 mb-4">Fortune 100 quantum AI transformation results</p>
            <Link to="/case-studies/ai-2027-quantum-breakthrough-success"
              className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/content-hub"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            🎯 Explore All New Content
          </Link>
          
          <Link to="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            🚀 Get AI Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}