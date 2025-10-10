import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Zap,
  BarChart3
} from 'lucide-react';

const QuantumSecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quantum-Safe Security Implementation - Zion Tech Group</title>
        <meta name="description" content="Future-proof security solutions with quantum-safe cryptography, post-quantum encryption, and advanced threat protection for enterprise systems." />
        <meta name="keywords" content="quantum security, post-quantum cryptography, quantum-safe encryption, future-proof security, enterprise security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Quantum-Safe Security</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Future-Proof Security
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Protect your organization with quantum-safe cryptography and post-quantum encryption. 
                Stay ahead of quantum computing threats with our advanced security implementations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  Security Assessment
                </button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">256-bit</div>
                <div className="text-gray-300">Quantum-Safe Encryption</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Future-Proof</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">Zero</div>
                <div className="text-gray-300">Downtime Migration</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum-Safe Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum-safe security solutions designed to protect your data 
                against current and future quantum computing threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Post-Quantum Cryptography</h3>
                <p className="text-gray-300 mb-4">
                  Implement NIST-approved post-quantum cryptographic algorithms for maximum security.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    CRYSTALS-Kyber
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    CRYSTALS-Dilithium
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    FALCON signatures
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Key className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Quantum Key Distribution</h3>
                <p className="text-gray-300 mb-4">
                  Secure key exchange using quantum mechanics principles for unbreakable encryption.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    BB84 protocol
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    E91 protocol
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Continuous monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-8 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI-powered threat detection and quantum attack prevention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Quantum attack detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Automated response
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Protection</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive data encryption and protection across all storage systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data at rest protection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Secure key management
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Network Security</h3>
                <p className="text-gray-300 mb-4">
                  Quantum-safe network protocols and secure communication channels.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    TLS 1.3 with PQ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    VPN with quantum crypto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Secure messaging
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compliance & Audit</h3>
                <p className="text-gray-300 mb-4">
                  Full compliance with quantum-safe security standards and regulations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    NIST compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Security audits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Certification support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for quantum computers to become a threat. Implement quantum-safe security 
              now to protect your organization's most valuable assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Schedule Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Download Security Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumSecurityPage;