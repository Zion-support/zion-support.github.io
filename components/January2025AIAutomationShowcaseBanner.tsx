// import React from 'react';

const January2025AIAutomationShowcaseBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🔥 NEW: AI AUTOMATION SHOWCASE 2025
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Automation Content
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest AI automation resources: comprehensive guides, success stories, 
            and transformation services that deliver measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Left Column - Featured Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Mastery Guide</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Complete enterprise AI automation guide with proven strategies and implementation frameworks.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span>• 10x Efficiency Gains</span>
                    <span>• 95% Cost Reduction</span>
                  </div>
                  <a 
                    href="/blog/ai-2025-january-advanced-ai-automation-mastery-guide"
                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Read Guide →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">$15B Success Story</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Global tech giant's AI automation transformation achieving unprecedented results.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span>• 2,400% ROI</span>
                    <span>• 95% Efficiency</span>
                  </div>
                  <a 
                    href="/case-studies/ai-2025-global-tech-ai-automation-15-billion-success"
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    View Case Study →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services & Tools */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Transformation Services</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Comprehensive AI automation services with proven ROI and industry expertise.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span>• Strategy & Assessment</span>
                    <span>• Implementation</span>
                  </div>
                  <a 
                    href="/services/ai-automation-enterprise-transformation-2025"
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Explore Services →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💰</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">ROI Calculator</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Calculate your potential ROI and value creation from AI automation implementation.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span>• Free Tool</span>
                    <span>• Instant Results</span>
                  </div>
                  <a 
                    href="/tools/ai-automation-roi-calculator"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Calculate ROI →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Results */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven Results Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">2,400%</div>
              <div className="text-xs text-blue-300">Technology ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">1,800%</div>
              <div className="text-xs text-purple-300">Manufacturing ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-green-400 mb-1">2,100%</div>
              <div className="text-xs text-green-300">Financial Services ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">1,650%</div>
              <div className="text-xs text-orange-300">Healthcare ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">1,950%</div>
              <div className="text-xs text-pink-300">Retail ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Ready to transform your enterprise with AI automation? Get started with a free consultation and ROI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              View All Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025AIAutomationShowcaseBanner;