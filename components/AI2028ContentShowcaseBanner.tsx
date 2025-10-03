import { Link } from 'react-router-dom';

export default function AI2028ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            🌟 AI 2028 CONTENT SHOWCASE
          </h2>
          <p className="text-2xl opacity-90 mb-6">
            Revolutionary Breakthrough Content & Success Stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/blog/ai-2028-neuromorphic-superintelligence"
            className="group bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-6 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">Neuromorphic Superintelligence</h3>
              <p className="text-sm opacity-90 mb-3">Brain-inspired computing breakthrough</p>
              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $75B VALUE
              </div>
            </div>
          </Link>
          
          <Link to="/blog/ai-2028-next-generation-autonomous-enterprise"
            className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg p-6 hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-bold text-lg mb-2">Autonomous Enterprise</h3>
              <p className="text-sm opacity-90 mb-3">99.9% operational autonomy</p>
              <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                $100B VALUE
              </div>
            </div>
          </Link>
          
          <Link to="/case-studies/ai-2028-neuromorphic-superintelligence-success"
            className="group bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-6 hover:from-green-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">$75B Success Story</h3>
              <p className="text-sm opacity-90 mb-3">Neuromorphic transformation</p>
              <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </div>
            </div>
          </Link>
          
          <Link to="/case-studies/ai-2028-autonomous-enterprise-mega-success"
            className="group bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 hover:from-orange-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">$100B Mega Success</h3>
              <p className="text-sm opacity-90 mb-3">Complete enterprise autonomy</p>
              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                REVOLUTIONARY
              </div>
            </div>
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-center mb-4">
            🎯 Why AI 2028 is Revolutionary
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2">1,000x Energy Efficiency</h4>
              <p className="text-sm opacity-90">Neuromorphic computing breakthrough</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="font-bold mb-2">Human-Level Intelligence</h4>
              <p className="text-sm opacity-90">Cognitive abilities achieved</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-bold mb-2">99.9% Autonomy</h4>
              <p className="text-sm opacity-90">Complete operational independence</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            🚀 Explore AI 2028 Breakthroughs
          </Link>
        </div>
      </div>
    </div>
  );
}