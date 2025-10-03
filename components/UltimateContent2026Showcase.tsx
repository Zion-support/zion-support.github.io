import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Zap, Target, Award, Brain, Bot, Atom } from 'lucide-react';

export default function UltimateContent2026Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black text-sm font-bold mb-8">
            <Star className="w-4 h-4 mr-2" />
            ULTIMATE 2026 AI CONTENT SHOWCASE
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Most Advanced AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Ever Created
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover groundbreaking AI innovations, revolutionary case studies, and cutting-edge technologies that are reshaping the future of business and technology in 2026.
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Breakthrough Innovations */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Breakthrough Innovations</h3>
                <p className="text-purple-200 text-sm">Revolutionary AI Technologies</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <Link to="/blog/ai-cognitive-computing-breakthrough-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                    <span className="text-yellow-400 text-sm">95% Accuracy</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    AI Cognitive Computing Breakthrough
                  </h4>
                  <p className="text-purple-200 text-sm">
                    Revolutionary cognitive systems with $10M+ ROI and 95% accuracy for enterprise intelligence.
                  </p>
                </div>
              </Link>
              
              <Link to="/blog/ai-quantum-hybrid-computing-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                    <span className="text-yellow-400 text-sm">1000x Faster</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    AI Quantum Hybrid Computing
                  </h4>
                  <p className="text-purple-200 text-sm">
                    Revolutionary quantum AI processing with $50M+ ROI and 1000x faster computation.
                  </p>
                </div>
              </Link>
            </div>
            <Link to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore All Innovations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Autonomous Systems</h3>
                <p className="text-green-200 text-sm">Self-Managing Operations</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <Link to="/blog/ai-autonomous-business-systems-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                    <span className="text-yellow-400 text-sm">99% Automation</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    AI Autonomous Business Systems
                  </h4>
                  <p className="text-green-200 text-sm">
                    Complete enterprise automation with $15M+ ROI and zero-touch operations.
                  </p>
                </div>
              </Link>
              
              <Link to="/blog/ai-autonomous-enterprise-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                    <span className="text-yellow-400 text-sm">95% Automation</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    AI Autonomous Enterprise
                  </h4>
                  <p className="text-green-200 text-sm">
                    Enterprise-wide autonomous transformation with $12M+ ROI achievement.
                  </p>
                </div>
              </Link>
            </div>
            <Link to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore All Systems
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Success Stories</h3>
                <p className="text-orange-200 text-sm">Proven ROI Results</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <Link to="/case-studies/ai-autonomous-business-systems-success-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      CASE STUDY
                    </span>
                    <span className="text-yellow-400 text-sm">$15M ROI</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    Autonomous Systems Success
                  </h4>
                  <p className="text-orange-200 text-sm">
                    Fortune 500 company achieved 99% automation and $15M ROI in 12 months.
                  </p>
                </div>
              </Link>
              
              <Link to="/case-studies/ai-quantum-optimization-2026" className="group block">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      CASE STUDY
                    </span>
                    <span className="text-yellow-400 text-sm">1000x Faster</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                    Quantum Optimization Success
                  </h4>
                  <p className="text-orange-200 text-sm">
                    Financial services achieved 1000x optimization speed and $12M additional returns.
                  </p>
                </div>
              </Link>
            </div>
            <Link to="/case-studies"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Featured Stats */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-slate-500/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-slate-300">Real-world impact from our AI innovations and implementations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">$100M+</div>
              <div className="text-slate-300 text-sm">Total ROI Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-slate-300 text-sm">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-slate-300 text-sm">Average Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300 text-sm">Fortune 500 Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies that are already leveraging these breakthrough AI technologies to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
            <Link to="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Trusted by Fortune 500 companies worldwide • 24/7 expert support • Proven ROI guarantee
          </p>
        </div>
      </div>
    </section>
  );
}