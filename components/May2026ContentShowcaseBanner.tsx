import React from 'react';

export default function May2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🎯 May 2026 Content Showcase
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Success Stories
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our newest content featuring revolutionary AI technologies, real-world success stories, 
            and practical insights for enterprise transformation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm font-bold">FEATURED</span>
              <span className="text-gray-400 text-sm">May 1, 2026</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Meta-Cognitive Superintelligence: The Next Evolution of AI
            </h3>
            <p className="text-gray-300 mb-6">
              Discover the revolutionary AI breakthrough of May 2026 featuring meta-cognitive superintelligence, 
              quantum-neural fusion, and autonomous enterprise operations that deliver unprecedented business value.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Meta-Cognitive AI</span>
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm">Quantum-Neural Fusion</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Enterprise Automation</span>
            </div>
            <a 
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Read Full Article →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm font-bold">CASE STUDY</span>
              <span className="text-gray-400 text-sm">May 15, 2026</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              $5.2B Fortune 500 Transformation
            </h3>
            <p className="text-gray-300 mb-6">
              See how a Fortune 500 manufacturing giant achieved unprecedented business value using 
              our meta-cognitive superintelligence platform in just 90 days.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Value Generated</span>
                <span className="text-green-400 font-bold">$5.2B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Automation Rate</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payback Period</span>
                <span className="text-green-400 font-bold">1.2 months</span>
              </div>
            </div>
            <a 
              href="/case-studies/fortune-500-ai-2026-may-mega-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              View Case Study →
            </a>
          </div>

          {/* Technology Deep Dive */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm font-bold">TECHNOLOGY</span>
              <span className="text-gray-400 text-sm">May 8, 2026</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Quantum-Neural Fusion Explained
            </h3>
            <p className="text-gray-300 mb-6">
              Deep dive into the revolutionary fusion of quantum computing with neural networks, 
              delivering 1000x processing speed improvements.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Speed</span>
                <span className="text-blue-400 font-bold">1000x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy</span>
                <span className="text-blue-400 font-bold">99.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Efficiency</span>
                <span className="text-blue-400 font-bold">98%</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Learn More →
            </a>
          </div>

          {/* Implementation Guide */}
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm font-bold">GUIDE</span>
              <span className="text-gray-400 text-sm">May 12, 2026</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Enterprise Implementation Roadmap
            </h3>
            <p className="text-gray-300 mb-6">
              Step-by-step guide to implementing meta-cognitive superintelligence in your organization 
              for maximum ROI and minimal disruption.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-gray-300">Phase 1: Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-gray-300">Phase 2: Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                <span className="text-gray-300">Phase 3: Optimize</span>
              </div>
            </div>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Get Implementation Guide →
            </a>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-sm font-bold">CALCULATOR</span>
              <span className="text-gray-400 text-sm">Interactive</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              ROI Calculator
            </h3>
            <p className="text-gray-300 mb-6">
              Calculate your potential return on investment with our meta-cognitive superintelligence 
              platform based on your organization's size and requirements.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg. ROI</span>
                <span className="text-orange-400 font-bold">300%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payback</span>
                <span className="text-orange-400 font-bold">1.2 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Value</span>
                <span className="text-orange-400 font-bold">$5.2B+</span>
              </div>
            </div>
            <a 
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Calculate Your ROI →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future of AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already transforming with our revolutionary AI technologies. 
              Get started with a free consultation and discover your potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </a>
              <a 
                href="/blog/ai-2026-may-revolutionary-breakthrough" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Read Latest Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}