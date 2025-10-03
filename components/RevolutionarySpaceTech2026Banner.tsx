import { Link } from 'react-router-dom';

export default function RevolutionarySpaceTech2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-bold">
                🚀 REVOLUTIONARY 2026
              </span>
              <span className="text-indigo-200 text-sm">Space Technology</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI Space Technology 2026:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {' '}Autonomous Space Operations
              </span>
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Discover how AI is revolutionizing space technology with autonomous satellites, 
              intelligent mission planning, and 99.9% mission success rates. See how leading 
              space organizations achieved $50M ROI with AI-powered operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/blog/ai-space-tech-2026"
                className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl"
              >
                Read Space AI Guide →
              </Link>
              <Link to="/case-studies/ai-space-tech-success-2026"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-indigo-900 transition-colors"
              >
                View $50M ROI Case Study
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                <div className="text-sm text-indigo-200">Mission Success</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">$50M</div>
                <div className="text-sm text-indigo-200">ROI Achieved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">80%</div>
                <div className="text-sm text-indigo-200">Cost Reduction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Space AI Revolution</h3>
                <p className="text-indigo-200">Autonomous space operations with AI</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-indigo-100">Autonomous satellite management</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-indigo-100">Intelligent mission planning</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-indigo-100">Real-time space weather response</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-indigo-100">Advanced debris avoidance</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-indigo-100">Predictive maintenance systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}