import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025NewBreakthroughContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-bold uppercase tracking-wider">
              🚀 Just Published - October 2025 Breakthrough Content 🚀
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl md:text-2xl mb-2 text-blue-100">
            $19.9B Combined Enterprise Value | 10,000x Performance | 99.9% Accuracy
          </p>
          <p className="text-lg text-blue-50">
            Latest innovations transforming quantum computing, edge AI, and data infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Quantum Reinforcement Learning */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-3">Quantum Reinforcement Learning</h3>
            <p className="mb-4 text-blue-50">
              10,000x faster training with 99.9% optimization accuracy. $4.7B enterprise value across
              150+ deployments in finance, logistics, and autonomous systems.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✓ Sub-millisecond policy updates</li>
              <li>✓ 95% energy efficiency improvement</li>
              <li>✓ 847% average ROI</li>
              <li>✓ 2-4 week deployment timeline</li>
            </ul>
            <Link
              to="/blog/ai-2025-quantum-reinforcement-learning-breakthrough"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Quantum RL →
            </Link>
          </div>

          {/* Neuromorphic Edge Computing */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3">Neuromorphic Edge Computing</h3>
            <p className="mb-4 text-blue-50">
              1,000x energy efficiency with sub-millisecond inference. $6.3B value across 2,500+
              installations in IoT, robotics, and smart infrastructure.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✓ &lt;2ms real-time processing</li>
              <li>✓ 99.8% accuracy on-device</li>
              <li>✓ Privacy-first architecture</li>
              <li>✓ 72+ hour battery life</li>
            </ul>
            <Link
              to="/blog/ai-2025-neuromorphic-edge-computing-revolution"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Discover Neuromorphic AI →
            </Link>
          </div>

          {/* Autonomous Database Optimization */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🗄️</div>
            <h3 className="text-2xl font-bold mb-3">Autonomous Database Optimization</h3>
            <p className="mb-4 text-blue-50">
              50x performance improvement with 85% cost reduction. $8.9B value across 3,700+
              deployments delivering 99.99% uptime and self-healing capabilities.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✓ Zero-downtime optimization</li>
              <li>✓ 90% management effort reduction</li>
              <li>✓ Real-time query optimization</li>
              <li>✓ Automated security & compliance</li>
            </ul>
            <Link
              to="/blog/ai-2025-autonomous-database-optimization-breakthrough"
              className="inline-block bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Learn About Autonomous DB →
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Combined Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">$19.9B</div>
                <div className="text-sm text-blue-100">Total Value Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold">6,350+</div>
                <div className="text-sm text-blue-100">Enterprise Deployments</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-blue-100">Average Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1,200%</div>
                <div className="text-sm text-blue-100">Average ROI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            View All Latest AI Insights →
          </Link>
        </div>
      </div>
    </div>
  );
}
