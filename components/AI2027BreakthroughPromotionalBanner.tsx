import { Link } from 'react-router-dom';

export default function AI2027BreakthroughPromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/30 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🚀 BREAKTHROUGH 2027</span>
            <span className="text-purple-300 text-sm">•</span>
            <span className="text-purple-300 text-sm font-semibold">REVOLUTIONARY AI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI 2027 Breakthrough Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              The Future is Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies transforming enterprise operations in 2027. 
            From neural quantum computing to autonomous decision systems, achieve 500% ROI with breakthrough innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Blog Post */}
          <Link to="/blog/ai-2027-breakthrough-technologies" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    AI 2027 Breakthrough Technologies
                  </h3>
                  <p className="text-purple-300 text-sm">Revolutionary Innovation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Explore neural quantum computing, autonomous decision systems, and predictive intelligence networks 
                that deliver 1000x faster processing and 500% ROI.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">Published Jan 20, 2027</div>
                <div className="text-purple-300 font-semibold group-hover:text-purple-200 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link to="/case-studies/fortune-500-ai-transformation-2027" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    Fortune 500 Success Story
                  </h3>
                  <p className="text-green-300 text-sm">$200M Savings & 400% ROI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                See how a Fortune 500 manufacturing company achieved $200M annual savings and 400% ROI 
                through comprehensive AI transformation using breakthrough 2027 technologies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">Fortune 500 Case Study</div>
                <div className="text-green-300 font-semibold group-hover:text-green-200 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">1000x</div>
            <div className="text-gray-300 text-sm">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">500%</div>
            <div className="text-gray-300 text-sm">ROI Achievement</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">$200M+</div>
            <div className="text-gray-300 text-sm">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">8</div>
            <div className="text-gray-300 text-sm">Months to ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/services/ai-2027-breakthrough-solutions"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore AI 2027 Solutions
            </Link>
            <Link to="/blog/ai-2027-breakthrough-technologies"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Read Breakthrough Article
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Join the AI revolution • Transform your enterprise • Achieve breakthrough results
          </p>
        </div>
      </div>
    </section>
  );
}