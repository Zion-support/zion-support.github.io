// import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026EdgeNativeAgentsBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              ⚡ REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              SUB-MILLISECOND
            </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              $500M ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI 2026: Edge-Native Agents Revolution
          </h2>
          <p className="text-xl text-orange-200 max-w-4xl mx-auto mb-6">
            Revolutionary edge-native AI agents that operate at the edge of networks, delivering real-time intelligence 
            and decision-making capabilities with unprecedented performance and autonomy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">Sub-ms</div>
              <div className="text-sm text-orange-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.99%</div>
              <div className="text-sm text-orange-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">$500M</div>
              <div className="text-sm text-orange-200">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">1000x</div>
              <div className="text-sm text-orange-200">Faster than Cloud</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
            <h3 className="text-xl font-bold mb-4 text-orange-200">Revolutionary Capabilities</h3>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Autonomous operation without cloud dependency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Sub-millisecond response times
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Real-time learning and adaptation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Self-healing and fault tolerance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Edge-to-edge communication
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
            <h3 className="text-xl font-bold mb-4 text-red-200">Industry Applications</h3>
            <ul className="space-y-3 text-red-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Autonomous vehicles with instant decisions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Industrial IoT with predictive maintenance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Healthcare with real-time monitoring
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Smart cities with traffic optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Financial services with fraud detection
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/blog/ai-2026-edge-native-agents-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discover Edge-Native AI
              <span className="text-xl">→</span>
            </Link>
            <Link to="/case-studies"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Success Stories
              <span className="text-xl">→</span>
            </Link>
          </div>
          <p className="text-orange-300 text-sm">
            Join leading companies achieving $500M+ ROI with edge-native AI agents
          </p>
        </div>
      </div>
    </section>
  );
}