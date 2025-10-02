import React from 'react';

const January2025AIAutomationMasteryBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: AI AUTOMATION MASTERY GUIDE 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced AI Automation Mastery
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Master enterprise AI automation with our comprehensive guide featuring proven strategies, 
            implementation frameworks, and real-world success stories delivering <span className="text-yellow-400 font-bold">10x efficiency gains</span> and <span className="text-green-400 font-bold">95% cost reduction</span>.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">10x</div>
              <div className="text-sm text-blue-300 font-semibold">Efficiency Gains</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-purple-300 font-semibold">Cost Reduction</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$2.3B</div>
              <div className="text-sm text-green-300 font-semibold">Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">99.8%</div>
              <div className="text-sm text-orange-300 font-semibold">Accuracy Rate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">Complete Mastery Guide</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive enterprise AI automation guide with proven strategies, implementation frameworks, 
              and step-by-step instructions for achieving 10x efficiency gains.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Intelligent Process Automation (IPA)
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Cognitive Automation Framework
              </div>
              <div className="flex items-center gap-2 text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Autonomous Enterprise Operations
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-advanced-ai-automation-mastery-guide"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Read Mastery Guide →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-2xl font-bold text-white mb-4">$15B Success Story</h3>
            <p className="text-gray-300 mb-6">
              Global tech giant achieves unprecedented results with AI automation transformation: 
              $15 billion in value creation, 95% efficiency gains, and 2,400% ROI.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-yellow-300">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                614% increase in annual value
              </div>
              <div className="flex items-center gap-2 text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                493% increase in automation rate
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                240% increase in productivity
              </div>
            </div>
            <a 
              href="/case-studies/ai-2025-global-tech-ai-automation-15-billion-success"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              View Success Story →
            </a>
          </div>

          {/* Services */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Transformation Services</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive AI automation services delivering proven results: 2,400% average ROI, 
              95% efficiency gains, and billions in value creation across industries.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-blue-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Strategy & Assessment
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Implementation & Integration
              </div>
              <div className="flex items-center gap-2 text-sm text-green-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Change Management
              </div>
            </div>
            <a 
              href="/services/ai-automation-enterprise-transformation-2025"
              className="inline-block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
            <a 
              href="/tools/ai-automation-roi-calculator" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Calculate Your ROI
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Success Stories
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
            Join Fortune 500 companies that have transformed their operations with our proven AI automation framework. 
            Free consultation and ROI analysis included.
          </p>
        </div>
      </div>
    </section>
  );
};

export default January2025AIAutomationMasteryBanner;