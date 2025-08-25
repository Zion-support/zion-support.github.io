import React from 'react';
import { Shield, Lock, Network, Globe, Cpu, Database, Zap, ArrowRight, CheckCircle, Brain, Eye, Target, Users, TrendingUp, Star, Layers, Server, Key, Fingerprint, ShieldCheck } from 'lucide-react';

export default function QuantumInternetSecurityPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Quantum Internet Security Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unhackable quantum-secured internet infrastructure powered by quantum cryptography. 
            Experience the future of cybersecurity with quantum-resistant protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Secure Your Network</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Security Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary quantum technologies that provide unbreakable security for the modern internet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quantum Key Distribution */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Key Distribution</h3>
              <p className="text-gray-400">
                Unhackable encryption keys generated using quantum entanglement principles
              </p>
            </div>

            {/* Post-Quantum Cryptography */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Post-Quantum Cryptography</h3>
              <p className="text-gray-400">
                Quantum-resistant algorithms that protect against future quantum attacks
              </p>
            </div>

            {/* Quantum Network Monitoring */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Network Monitoring</h3>
              <p className="text-gray-400">
                Real-time quantum state monitoring for instant threat detection
              </p>
            </div>

            {/* Quantum Authentication */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Authentication</h3>
              <p className="text-gray-400">
                Biometric and behavioral authentication using quantum algorithms
              </p>
            </div>

            {/* Quantum Firewall */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Firewall</h3>
              <p className="text-gray-400">
                Next-generation firewall with quantum threat intelligence
              </p>
            </div>

            {/* Quantum VPN */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum VPN</h3>
              <p className="text-gray-400">
                Virtual private networks secured with quantum encryption protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Architecture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multi-layered quantum security architecture designed for maximum protection and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Quantum Layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quantum Layer</h3>
              <p className="text-gray-400 text-sm">
                Quantum processors and quantum memory for cryptographic operations
              </p>
            </div>

            {/* Security Layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Security Layer</h3>
              <p className="text-gray-400 text-sm">
                Advanced security protocols and threat detection systems
              </p>
            </div>

            {/* Network Layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Network Layer</h3>
              <p className="text-gray-400 text-sm">
                High-speed quantum network infrastructure and routing
              </p>
            </div>

            {/* Application Layer */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Application Layer</h3>
              <p className="text-gray-400 text-sm">
                User interfaces and integration APIs for seamless deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Security Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum security solutions for critical infrastructure and sensitive communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Government & Defense</h3>
              <p className="text-gray-400 mb-6">
                Ultra-secure communications and data protection for government agencies and military operations
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Classified communications</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Critical infrastructure protection</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Secure data centers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Financial Services</h3>
              <p className="text-gray-400 mb-6">
                Unbreakable security for banking transactions, trading systems, and financial data
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Secure banking networks</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Trading system protection</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Customer data security</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Healthcare & Research</h3>
              <p className="text-gray-400 mb-6">
                Protected medical data and research communications for healthcare institutions
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Patient data protection</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Research collaboration</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Clinical trial security</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Enterprise Networks</h3>
              <p className="text-gray-400 mb-6">
                Corporate network security and data protection for large enterprises
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Corporate communications</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Intellectual property protection</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  <span>Supply chain security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quantum Technology Advantages</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Why quantum security is the future of cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Unhackable</h3>
              <p className="text-gray-400">
                Quantum encryption is theoretically unbreakable using current technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Future-Proof</h3>
              <p className="text-gray-400">
                Designed to withstand attacks from future quantum computers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
              <p className="text-gray-400">
                Quantum networks can scale to global infrastructure requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Network with Quantum Technology?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of cybersecurity with our quantum internet security platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
              Get Started Now
            </button>
            <button className="px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200">
              Schedule Security Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}