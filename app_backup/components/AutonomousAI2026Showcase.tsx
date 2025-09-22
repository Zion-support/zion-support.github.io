import React from 'react';
import Link from 'next/link';

const AutonomousAI2026Showcase: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            🤖 NEW: Autonomous AI Agents 2026
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Self-Managing Business Operations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              That Run Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how autonomous AI agents are revolutionizing enterprise operations with 
            500% productivity increases and 90% cost reductions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Strategic Planning Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Strategic Planning Agents</h3>
            <p className="text-gray-300 mb-4">
              Autonomous agents that analyze markets, predict trends, and make strategic decisions 
              with 99.9% accuracy.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 1000x faster decision-making<br/>
              • 99.9% accuracy rate<br/>
              • 24/7 autonomous operation
            </div>
          </div>

          {/* Operational Management Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3">Operational Management</h3>
            <p className="text-gray-300 mb-4">
              Self-optimizing agents that manage processes, allocate resources, and ensure 
              peak operational efficiency.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 90% cost reduction<br/>
              • 500% productivity increase<br/>
              • 99.5% error reduction
            </div>
          </div>

          {/* Financial Management Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Financial Management</h3>
            <p className="text-gray-300 mb-4">
              Intelligent agents that manage portfolios, assess risks, and optimize financial 
              performance autonomously.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 40% portfolio improvement<br/>
              • 80% risk reduction<br/>
              • Real-time optimization
            </div>
          </div>

          {/* Customer Experience Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3">Customer Experience</h3>
            <p className="text-gray-300 mb-4">
              Autonomous agents that provide personalized customer service and optimize 
              customer journeys continuously.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 95% satisfaction improvement<br/>
              • 85% faster response times<br/>
              • Personalized experiences
            </div>
          </div>

          {/* Innovation Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">Innovation Agents</h3>
            <p className="text-gray-300 mb-4">
              Creative agents that drive innovation, identify opportunities, and develop 
              new solutions autonomously.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 500% faster innovation<br/>
              • 15 breakthrough solutions<br/>
              • Continuous improvement
            </div>
          </div>

          {/* Quality Control Agents */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Quality Control</h3>
            <p className="text-gray-300 mb-4">
              Precision agents that monitor quality, detect issues, and ensure consistent 
              excellence across all operations.
            </p>
            <div className="text-sm text-green-400 font-semibold">
              • 99.7% quality accuracy<br/>
              • 90% faster inspection<br/>
              • Predictive maintenance
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.5%</div>
              <div className="text-sm text-gray-300">Error Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-autonomous-ai-agents-enterprise-revolution"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn About Autonomous AI →
            </Link>
            <Link
              href="/case-studies/autonomous-ai-transformation-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <Link href="/services/autonomous-ai" className="hover:text-green-400 transition-colors">
              Autonomous AI Services
            </Link>
            <Link href="/tools/autonomous-ai-readiness-assessment" className="hover:text-green-400 transition-colors">
              Readiness Assessment
            </Link>
            <Link href="/resources/autonomous-ai-implementation-guide" className="hover:text-green-400 transition-colors">
              Implementation Guide
            </Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousAI2026Showcase;