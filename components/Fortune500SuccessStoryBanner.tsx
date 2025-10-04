import React from 'react';
import { Link } from 'react-router-dom';

export default function Fortune500SuccessStoryBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-900/30 to-blue-900/30 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              🏆 SUCCESS STORY: Fortune 500 Breakthrough
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            $2.5B ROI Through Superintelligent Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how a leading Fortune 500 company achieved <span className="text-green-400 font-bold">$2.5B ROI</span>, 
            <span className="text-blue-400 font-bold"> 99.9% automation</span>, and 
            <span className="text-purple-400 font-bold"> complete enterprise transformation</span>
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '$2.5B', label: 'Total ROI Achieved', icon: '💰', color: 'from-green-500 to-green-600' },
            { value: '99.9%', label: 'Automation Rate', icon: '🤖', color: 'from-blue-500 to-blue-600' },
            { value: '18mo', label: 'Payback Period', icon: '⏱️', color: 'from-purple-500 to-purple-600' },
            { value: '300%', label: 'Efficiency Gain', icon: '📈', color: 'from-cyan-500 to-cyan-600' }
          ].map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:border-green-500/50 transition-all duration-300">
              <div className="text-5xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🚨</div>
            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• 70% manual processes</li>
              <li>• $500M+ annual operational costs</li>
              <li>• 40% efficiency gaps</li>
              <li>• Limited scalability</li>
              <li>• Competitive disadvantage</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Superintelligent automation platform</li>
              <li>• Meta-cognitive reasoning systems</li>
              <li>• Quantum neural networks</li>
              <li>• Autonomous enterprise orchestration</li>
              <li>• Self-healing infrastructure</li>
            </ul>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">📅 Implementation Timeline</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg mx-auto mb-4">1</div>
              <h4 className="text-lg font-bold mb-2 text-white">Phase 1: Foundation</h4>
              <p className="text-gray-300 text-sm mb-2">Months 1-6</p>
              <p className="text-gray-400 text-sm">Enterprise assessment, platform deployment, pilot automation achieving 40% automation rate</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg mx-auto mb-4">2</div>
              <h4 className="text-lg font-bold mb-2 text-white">Phase 2: Scale</h4>
              <p className="text-gray-300 text-sm mb-2">Months 7-12</p>
              <p className="text-gray-400 text-sm">Enterprise-wide rollout, advanced features, system integration achieving 80% automation rate</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg mx-auto mb-4">3</div>
              <h4 className="text-lg font-bold mb-2 text-white">Phase 3: Optimization</h4>
              <p className="text-gray-300 text-sm mb-2">Months 13-18</p>
              <p className="text-gray-400 text-sm">Continuous optimization, advanced AI capabilities, performance maximization achieving 99.9% automation</p>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-400">💰 Financial Impact</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• $2.5B total ROI achieved</li>
              <li>• $1.2B annual cost savings</li>
              <li>• $800M revenue generation</li>
              <li>• $500M operational cost reduction</li>
              <li>• 18-month payback period</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-400">⚡ Operational Excellence</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• 99.9% automation rate achieved</li>
              <li>• 300% operational efficiency improvement</li>
              <li>• 24/7 autonomous operations</li>
              <li>• Zero-downtime infrastructure</li>
              <li>• 1000x faster decision making</li>
            </ul>
          </div>
        </div>

        {/* Business Transformation Results */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">🚀 Business Transformation Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold mb-2 text-white">Revenue Growth</h4>
                <p className="text-gray-300 text-sm">$800M additional revenue through optimized operations and new AI-powered capabilities</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold mb-2 text-white">Market Leadership</h4>
                <p className="text-gray-300 text-sm">Became industry leader with 40% market share increase and competitive advantage</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold mb-2 text-white">Innovation Acceleration</h4>
                <p className="text-gray-300 text-sm">300% increase in R&D productivity and innovation output through AI assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Transform your enterprise with our revolutionary superintelligent automation systems. 
            Join leading Fortune 500 companies achieving breakthrough results and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/case-studies/fortune-500-superintelligent-automation-success" 
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Success Story →
            </Link>
            <Link to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Free Assessment
            </Link>
            <Link to="/blog/ai-2026-superintelligent-automation-breakthrough" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Learn About Technology
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Join 500+ leading organizations achieving breakthrough results with our revolutionary AI technologies. 
            Transform your business operations and achieve unprecedented competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
}