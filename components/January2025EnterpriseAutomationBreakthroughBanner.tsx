import React from 'react';

const January2025EnterpriseAutomationBreakthroughBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/30 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 mb-8 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: January 2025 Enterprise AI Automation Revolution
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            $2.3B Success Story: Enterprise AI Automation Mastery
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the revolutionary AI automation framework that delivered <span className="text-emerald-400 font-bold">$2.3 billion in cost savings</span> and <span className="text-cyan-400 font-bold">300% productivity gains</span> to Fortune 500 companies
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">$2.3B</div>
              <div className="text-xs text-emerald-300">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-3xl font-extrabold text-teal-400 mb-1">300%</div>
              <div className="text-xs text-teal-300">Productivity Gains</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">95%</div>
              <div className="text-xs text-cyan-300">Automation Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">90 Days</div>
              <div className="text-xs text-blue-300">Implementation</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/blog/ai-2025-january-advanced-ai-automation-mastery-guide" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              📚 Read the Complete Guide →
            </a>
            <a 
              href="/case-studies/ai-2025-january-global-enterprise-automation-2-3-billion-success" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              💰 View $2.3B Success Story →
            </a>
            <a 
              href="/services/ai-2025-january-enterprise-automation-transformation-service" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              🚀 Start Your Transformation
            </a>
          </div>
        </div>

        {/* Content Showcase Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Blog Post Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">Complete Mastery Guide</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive 15-minute guide covering advanced AI automation frameworks, implementation strategies, and proven ROI methodologies that delivered $2.3B in savings.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Advanced AI Automation Framework 2025
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-400">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Multi-Modal AI Orchestration
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Autonomous Decision-Making Systems
              </div>
            </div>
            <a 
              href="/blog/ai-2025-january-advanced-ai-automation-mastery-guide"
              className="inline-block w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Complete Guide →
            </a>
          </div>

          {/* Case Study Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$2.3B Success Story</h3>
            <p className="text-gray-300 mb-6">
              Detailed case study of Fortune 500 global enterprise achieving $2.3B in cost savings, 300% productivity gains, and zero operational disruptions across 47 countries.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-teal-400">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                Fortune 500 Global Enterprise
              </div>
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                47 Countries, 15 Business Units
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                511% ROI in 6 Months
              </div>
            </div>
            <a 
              href="/case-studies/ai-2025-january-global-enterprise-automation-2-3-billion-success"
              className="inline-block w-full text-center bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View Success Story →
            </a>
          </div>

          {/* Service Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Transformation Service</h3>
            <p className="text-gray-300 mb-6">
              Proven enterprise AI automation service with guaranteed results: $50M+ savings, 300% productivity gains, and 95% automation accuracy within 90 days.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                ROI Guarantee: 300%+ Within 6 Months
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Zero Downtime Implementation
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-400">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                90-Day Transformation Program
              </div>
            </div>
            <a 
              href="/services/ai-2025-january-enterprise-automation-transformation-service"
              className="inline-block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Start Transformation →
            </a>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Ready to Achieve $2.3B in Cost Savings?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies that have transformed their operations with our proven AI automation methodology. 
              Get your free consultation and personalized transformation roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                📞 Schedule Free Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                📊 View All Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025EnterpriseAutomationBreakthroughBanner;