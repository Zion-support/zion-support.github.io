import { Link } from "react-router-dom";

export default function October2025EdgeAIQuantumCryptoBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 border-y border-cyan-500/30 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">

            <span className="text-lg md:text-xl font-bold text-cyan-400 uppercase tracking-wider">
              🚀 JUST RELEASED OCTOBER 1, 2025: Revolutionary Technology Guides
            </span>

          </div>

          {/* Main Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Edge AI + 5G Networks & Quantum-Safe Cryptography
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6">
              ⚡ Master ultra-low latency AI at the edge with 5G networks (sub-10ms response, 80% bandwidth savings) 
              and protect your enterprise from quantum threats with NIST-approved post-quantum cryptography (PQC). 
              Build the future-proof infrastructure your organization needs today!
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Edge AI + 5G Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg">

                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">AI at the Edge with 5G</h3>
                  <p className="text-cyan-300 text-sm">Ultra-Low Latency Real-Time Intelligence</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Deploy intelligent edge computing systems with 5G networks achieving sub-10ms latency, 
                80% bandwidth reduction, and 99.999% availability for mission-critical operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-xs font-medium">Sub-10ms Latency</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-xs font-medium">5G Networks</span>
                <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs font-medium">Edge AI</span>
                <span className="bg-violet-500/20 px-3 py-1 rounded-full text-violet-300 text-xs font-medium">IoT Intelligence</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>✓ Autonomous vehicles & smart manufacturing</li>
                <li>✓ Healthcare IoT & remote patient monitoring</li>
                <li>✓ Smart cities & public safety analytics</li>
                <li>✓ 80% bandwidth cost reduction</li>
              </ul>
              <Link
                to="/blog/ai-edge-computing-5g-networks-2025"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                Read Edge AI Guide

              </Link>
            </div>

            {/* Quantum-Safe Cryptography Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">

                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">Quantum-Safe Cryptography</h3>
                  <p className="text-purple-300 text-sm">Protect Against Q-Day with PQC</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Implement NIST-approved post-quantum cryptography to secure your enterprise against quantum 
                computing threats. Complete 18-month migration roadmap to achieve 100% quantum resistance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-xs font-medium">NIST PQC</span>
                <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-xs font-medium">CRYSTALS-Kyber</span>
                <span className="bg-rose-500/20 px-3 py-1 rounded-full text-rose-300 text-xs font-medium">Quantum Security</span>
                <span className="bg-fuchsia-500/20 px-3 py-1 rounded-full text-fuchsia-300 text-xs font-medium">Zero Trust</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>✓ NIST-approved algorithms (FIPS 203-205)</li>
                <li>✓ Hybrid classical + PQC implementation</li>
                <li>✓ Protect harvest-now-decrypt-later attacks</li>
                <li>✓ 18-month migration roadmap included</li>
              </ul>
              <Link
                to="/blog/quantum-safe-cryptography-implementation-2025"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                Read Quantum Security Guide

              </Link>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-cyan-500/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">&lt;10ms</div>
              <div className="text-cyan-300 text-sm">Edge AI Latency</div>
            </div>
            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">80%</div>
              <div className="text-blue-300 text-sm">Bandwidth Savings</div>
            </div>
            <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 text-center">
              
              <div className="text-purple-300 text-sm">Est. Q-Day Arrival</div>
            </div>
            <div className="bg-pink-500/10 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30 text-center">
              <div className="text-3xl font-extrabold text-pink-400 mb-1">100%</div>
              <div className="text-pink-300 text-sm">Quantum Resistance</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >

              Explore All Guides
            </Link>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >

              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
