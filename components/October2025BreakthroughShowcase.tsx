// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025BreakthroughShowcase() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest AI & Technology Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cutting-edge innovations delivering unprecedented results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Quantum RL Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
              <div className="text-4xl mb-2">⚛️</div>
              <h3 className="text-2xl font-bold">Quantum Reinforcement Learning</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Revolutionary quantum-enhanced adaptive intelligence achieving 10,000x training acceleration
                and 99.9% optimization accuracy for complex decision systems.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Performance Gain:</span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">10,000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Enterprise Value:</span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">$4.7B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Deployments:</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">150+</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-quantum-reinforcement-learning-breakthrough"
                className="block w-full text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
              >
                Read Full Article
              </Link>
            </div>
          </div>

          {/* Neuromorphic Edge Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-6 text-white">
              <div className="text-4xl mb-2">🧠</div>
              <h3 className="text-2xl font-bold">Neuromorphic Edge AI</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Brain-inspired processors delivering 1,000x energy efficiency and sub-millisecond inference
                for real-time edge intelligence applications.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Energy Efficiency:</span>
                  <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">1,000x Better</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Enterprise Value:</span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">$6.3B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Installations:</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">2,500+</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-neuromorphic-edge-computing-revolution"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all"
              >
                Read Full Article
              </Link>
            </div>
          </div>

          {/* Autonomous DB Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
              <div className="text-4xl mb-2">🗄️</div>
              <h3 className="text-2xl font-bold">Autonomous Databases</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Self-healing, self-tuning database infrastructure achieving 50x performance improvement
                with 85% cost reduction and 99.99% uptime.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Performance Gain:</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">50x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Enterprise Value:</span>
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">$8.9B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Deployments:</span>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">3,700+</span>
                </div>
              </div>
              <Link
                to="/blog/ai-2025-autonomous-database-optimization-breakthrough"
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your Enterprise?
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$19.9B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Value Generated</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">6,350+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Successful Deployments</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Accuracy</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1,200%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average ROI</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
