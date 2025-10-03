import { Link } from 'react-router-dom';

export default function AINeuromorphicRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white rounded-xl p-8 mb-8 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                ⚡ REVOLUTIONARY
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Neuromorphic Enterprise Computing Revolution
            </h2>
            
            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              Brain-inspired AI computing delivering 1000x energy efficiency and real-time processing capabilities. Transform your enterprise with the future of computing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">1000x</div>
                <div className="text-sm text-white/80">Energy Efficient</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100x</div>
                <div className="text-sm text-white/80">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">&lt;1ms</div>
                <div className="text-sm text-white/80">Ultra Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">99.9%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-neuromorphic-enterprise-computing-2026"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center"
              >
                Explore Technology
              </Link>
              <Link to="/case-studies/ai-neuromorphic-transformation-mega-success-2026"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-center"
              >
                See $200M ROI Case Study
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧬</div>
                <div className="text-sm font-semibold text-white/90">
                  Brain-Inspired Computing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}