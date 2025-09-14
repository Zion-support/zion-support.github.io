import React from 'react';
import Link from 'next/link';

const RevolutionaryTransformationSuccessBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/10 via-emerald-600/10 to-teal-600/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-500 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-teal-500 rounded-full opacity-25 animate-ping"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Success Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-6 py-2 mb-6 shadow-lg">
            <span className="text-sm font-bold">🏆 SUCCESS STORY 2025-2026</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary Transformation:
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> 2,500% ROI Success</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 100 company achieved unprecedented success through revolutionary AI transformation. 
            From <span className="font-semibold text-yellow-400">$45B to $157.5B revenue</span> in just 12 months.
          </p>
        </div>
        
        {/* Success Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2,500%</div>
            <div className="text-sm opacity-80">ROI Achievement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$157.5B</div>
            <div className="text-sm opacity-80">Annual Revenue</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.97%</div>
            <div className="text-sm opacity-80">System Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">340%</div>
            <div className="text-sm opacity-80">Productivity Increase</div>
          </div>
        </div>
        
        {/* Transformation Journey */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Before */}
          <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <div className="text-center">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Before Transformation</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• 40% AI accuracy rates</li>
                <li>• 70% manual processes</li>
                <li>• $2.3B annual losses</li>
                <li>• 68% customer satisfaction</li>
                <li>• 15% market share loss</li>
              </ul>
            </div>
          </div>
          
          {/* Transformation */}
          <div className="bg-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Revolutionary AI Implementation</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Quantum Neural Networks</li>
                <li>• Autonomous Systems</li>
                <li>• Neural Interfaces</li>
                <li>• Predictive Analytics</li>
                <li>• $65M investment</li>
              </ul>
            </div>
          </div>
          
          {/* After */}
          <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4 text-green-400">After Transformation</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• 99.7% AI accuracy</li>
                <li>• 85% automation</li>
                <li>• $2,500% ROI</li>
                <li>• 99.2% satisfaction</li>
                <li>• 42% market share</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Revolutionary Technologies Deployed</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-semibold mb-2">Quantum AI</h4>
              <p className="text-xs opacity-80">10,000x faster processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="font-semibold mb-2">Autonomous Systems</h4>
              <p className="text-xs opacity-80">99.97% uptime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-semibold mb-2">Neural Interfaces</h4>
              <p className="text-xs opacity-80">500% capability boost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold mb-2">Predictive Analytics</h4>
              <p className="text-xs opacity-80">99.7% accuracy</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Achieve Similar Breakthrough Results
            </h3>
            <p className="text-gray-800 mb-6">
              The same revolutionary technologies are now available for your business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies/ai-2025-2026-revolutionary-transformation-2500-roi-success"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Read Full Case Study
              </Link>
            </div>
          </div>
          
          {/* Industry Recognition */}
          <div className="text-center opacity-80">
            <p className="text-sm mb-2">Industry Recognition & Awards</p>
            <div className="flex justify-center items-center space-x-8 text-xs">
              <span>🏆 AI Innovation Award 2025</span>
              <span>🥇 Fortune 100 Technology Leader</span>
              <span>⭐ Global Manufacturing Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTransformationSuccessBanner;