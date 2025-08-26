import React from 'react';
import Head from 'next/head';

export default function QuantumTechnologyPage() {
  return (
    <>
      <Head>
        <title>Quantum Technology | Zion Tech Group</title>
        <meta name="description" content="Explore the future with Zion Tech Group's quantum technology solutions. Quantum computing, quantum cryptography, and quantum-safe systems." />
        <meta property="og:title" content="Quantum Technology | Zion Tech Group" />
        <meta property="og:description" content="Explore the future with Zion Tech Group's quantum technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-technology" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Quantum Technology
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Step into the quantum realm with cutting-edge technology that will revolutionize computing, security, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Explore Quantum Solutions
              </a>
              <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                View All Services
              </a>
            </div>
          </section>

          {/* Quantum Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quantum Technology Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Computing */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Computing</h3>
                <p className="text-white/70 mb-4">Harness the power of quantum bits for unprecedented computational capabilities.</p>
                <a href="/services/quantum-computing" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
              </div>

              {/* Quantum Cryptography */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Cryptography</h3>
                <p className="text-white/70 mb-4">Unbreakable encryption using quantum mechanical principles for ultimate security.</p>
                <a href="/services/quantum-cryptography" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">Learn More →</a>
              </div>

              {/* Quantum Networks */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Networks</h3>
                <p className="text-white/70 mb-4">Secure quantum communication networks for ultra-fast data transmission.</p>
                <a href="/services/quantum-networks" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
              </div>

              {/* Quantum Sensors */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Sensors</h3>
                <p className="text-white/70 mb-4">Ultra-sensitive detection systems for medical, environmental, and industrial applications.</p>
                <a href="/services/quantum-sensors" className="text-orange-400 hover:text-orange-300 transition-colors">Learn More →</a>
              </div>

              {/* Quantum Machine Learning */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum ML</h3>
                <p className="text-white/70 mb-4">Machine learning algorithms enhanced by quantum computing capabilities.</p>
                <a href="/services/quantum-ml" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
              </div>

              {/* Quantum Consulting */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quantum Consulting</h3>
                <p className="text-white/70 mb-4">Strategic guidance for quantum technology adoption and implementation.</p>
                <a href="/services/quantum-consulting" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Quantum Applications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quantum Technology Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Financial Services</h3>
                  <p className="text-white/70">Quantum algorithms for portfolio optimization, risk assessment, and fraud detection in real-time.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Healthcare & Medicine</h3>
                  <p className="text-white/70">Drug discovery, protein folding, and personalized medicine through quantum simulations.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Cybersecurity</h3>
                  <p className="text-white/70">Post-quantum cryptography and quantum-resistant security protocols for future-proof protection.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">Logistics & Supply Chain</h3>
                  <p className="text-white/70">Quantum optimization for complex routing, scheduling, and resource allocation problems.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Climate Research</h3>
                  <p className="text-white/70">Advanced climate modeling and environmental simulations using quantum computing power.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Artificial Intelligence</h3>
                  <p className="text-white/70">Enhanced AI capabilities through quantum machine learning and neural network optimization.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Quantum Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Quantum Technology?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Exponential Speed</h3>
                <p className="text-white/70">Solve complex problems in seconds that would take classical computers thousands of years.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Unbreakable Security</h3>
                <p className="text-white/70">Quantum cryptography provides theoretically unbreakable encryption for sensitive data.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Edge</h3>
                <p className="text-white/70">Stay ahead of the competition with cutting-edge quantum technology solutions.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-2xl p-12 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4">Ready to Embrace the Quantum Future?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how quantum technology can transform your business and give you a competitive advantage in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                  Schedule a Quantum Consultation
                </a>
                <a href="/case-studies" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  View Quantum Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}