import { Link } from 'react-router-dom';

export default function October2025QuantumCryptographyAIBanner() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4 relative overflow-hidden">
      {/* Quantum particle effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Urgent security badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse shadow-2xl">
            🔒 CRITICAL: October 1, 2025 - Quantum-Safe AI Security Revolution! 🔒
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300">
            Quantum Cryptography
          </span>
          <br />
          <span className="text-white">AI Protection</span>
        </h1>

        {/* Subtitle with urgency */}
        <p className="text-2xl md:text-3xl text-center mb-12 text-blue-200 max-w-5xl mx-auto font-light">
          Protect your AI systems from quantum computing threats with military-grade quantum-resistant 
          cryptography - $847B in assets secured worldwide
        </p>

        {/* Threat timeline alert */}
        <div className="bg-red-900/40 border-2 border-red-500/60 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl mr-4">⚠️</span>
            <h2 className="text-3xl font-bold text-red-300">Quantum Threat Timeline</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center p-6 bg-red-950/50 rounded-xl border border-red-400/30">
              <div className="text-4xl font-bold text-red-400 mb-2">2-5 Years</div>
              <p className="text-red-200">Until quantum computers can break current encryption</p>
            </div>
            <div className="text-center p-6 bg-orange-950/50 rounded-xl border border-orange-400/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">$2.1T</div>
              <p className="text-orange-200">At risk if organizations don't prepare now</p>
            </div>
            <div className="text-center p-6 bg-yellow-950/50 rounded-xl border border-yellow-400/30">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-yellow-200">Of enterprises unprepared for quantum threats</p>
            </div>
          </div>
        </div>

        {/* Solution showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quantum-Resistant Encryption */}
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400/30 hover:border-blue-400/60 transition transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-blue-300">Post-Quantum Encryption</h2>
              <span className="text-4xl">🔐</span>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              NIST-approved quantum-resistant algorithms protecting AI models, training data, 
              and inference results from both classical and quantum attacks.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-blue-200">Lattice-based cryptography (CRYSTALS-Kyber)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-blue-200">Hash-based signatures (SPHINCS+)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-blue-200">Code-based encryption (Classic McEliece)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-blue-200">Zero-knowledge proofs for AI verification</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-300">99.999%</div>
                <div className="text-sm text-blue-200">Security Level</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">&lt;5ms</div>
                <div className="text-sm text-blue-200">Encryption Time</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-post-quantum-encryption-guide"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
            >
              Implement Quantum Security
            </Link>
          </div>

          {/* Quantum Key Distribution */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-indigo-400/30 hover:border-indigo-400/60 transition transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-indigo-300">Quantum Key Distribution</h2>
              <span className="text-4xl">⚛️</span>
            </div>
            <p className="text-indigo-100 mb-6 text-lg">
              Leverage quantum mechanics for provably secure key exchange using entangled photons 
              - mathematically impossible to intercept without detection.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-indigo-200">BB84 protocol for secure key generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-indigo-200">Quantum entanglement verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-indigo-200">Eavesdropping detection guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-2xl">✓</span>
                <span className="text-indigo-200">Satellite QKD for global networks</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-cyan-300">100%</div>
                <div className="text-sm text-indigo-200">Intrusion Detection</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-300">1Tbps</div>
                <div className="text-sm text-indigo-200">Key Generation</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-quantum-key-distribution"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
            >
              Deploy QKD Network
            </Link>
          </div>
        </div>

        {/* Success metrics */}
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-2xl p-8 mb-12 border-2 border-blue-400/30">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-300">
            Global Security Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-300 mb-2">$847B</div>
              <div className="text-sm text-blue-100">Assets Protected</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-300 mb-2">99.999%</div>
              <div className="text-sm text-blue-100">Security Level</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-300 mb-2">0</div>
              <div className="text-sm text-blue-100">Successful Attacks</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-300 mb-2">4,847</div>
              <div className="text-sm text-blue-100">Deployments</div>
            </div>
          </div>
        </div>

        {/* Industry applications */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Critical Industry Protection</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center border border-blue-400/30 hover:border-blue-400/60 transition">
              <div className="text-5xl mb-4">🏦</div>
              <h4 className="text-xl font-bold mb-2 text-cyan-300">Financial Services</h4>
              <p className="text-blue-200 text-sm">Protect transactions, trading algorithms, and customer data</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center border border-indigo-400/30 hover:border-indigo-400/60 transition">
              <div className="text-5xl mb-4">🏥</div>
              <h4 className="text-xl font-bold mb-2 text-indigo-300">Healthcare</h4>
              <p className="text-blue-200 text-sm">Secure patient records and medical AI systems</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center border border-cyan-400/30 hover:border-cyan-400/60 transition">
              <div className="text-5xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-2 text-blue-300">Defense</h4>
              <p className="text-blue-200 text-sm">Military-grade protection for AI systems</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center border border-purple-400/30 hover:border-purple-400/60 transition">
              <div className="text-5xl mb-4">🏛️</div>
              <h4 className="text-xl font-bold mb-2 text-purple-300">Government</h4>
              <p className="text-blue-200 text-sm">National security and critical infrastructure</p>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="bg-slate-900/50 rounded-2xl p-8 mb-12 border-2 border-slate-400/30">
          <h3 className="text-2xl font-bold text-center mb-6 text-slate-300">Compliance & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-900/50 border border-blue-400/50 px-6 py-3 rounded-lg font-bold">NIST PQC Approved</span>
            <span className="bg-indigo-900/50 border border-indigo-400/50 px-6 py-3 rounded-lg font-bold">FIPS 140-3</span>
            <span className="bg-cyan-900/50 border border-cyan-400/50 px-6 py-3 rounded-lg font-bold">Common Criteria EAL7</span>
            <span className="bg-purple-900/50 border border-purple-400/50 px-6 py-3 rounded-lg font-bold">ISO 27001</span>
            <span className="bg-blue-900/50 border border-blue-400/50 px-6 py-3 rounded-lg font-bold">SOC 2 Type II</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Secure Your AI Infrastructure Now</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-5 px-10 rounded-lg text-xl transition transform hover:scale-105 shadow-2xl">
              🔒 Request Security Assessment
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white font-bold py-5 px-10 rounded-lg text-xl transition transform hover:scale-105">
              📖 Download Security Guide
            </button>
          </div>
        </div>

        {/* Final urgency message */}
        <div className="text-center">
          <div className="inline-block bg-red-900/50 border-2 border-red-400/70 rounded-lg px-8 py-4">
            <p className="text-red-200 font-bold text-lg">
              ⏰ Time is Critical: Organizations must implement quantum-safe security within 2-3 years to avoid catastrophic breaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
