import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="AI-Powered Technology Services | Zion Tech Group"
        description="Comprehensive AI, cybersecurity, cloud, and digital transformation services. From enterprise automation to quantum computing solutions - transform your business with cutting-edge technology."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, enterprise automation, quantum computing, blockchain, IoT solutions"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions, from enterprise automation to quantum computing
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Service Portfolio
            </h2>
            
            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl p-8 mb-8 border border-purple-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">🤖 AI & Machine Learning</h3>
                  <p className="text-gray-300 mb-6">
                    Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">300%</div>
                      <div className="text-gray-300 text-sm">Productivity Increase</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400">$299</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">AI-Powered Business Process Automation</h4>
                    <p className="text-gray-300 text-sm">Reduce operational costs by 40-60% with intelligent automation</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Enterprise AI Content Generation</h4>
                    <p className="text-gray-300 text-sm">Save 80% on content creation time with AI-powered tools</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Customer Behavior Analytics</h4>
                    <p className="text-gray-300 text-sm">Increase customer retention by 35% with predictive insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl p-8 mb-8 border border-red-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">🔒 Cybersecurity</h3>
                  <p className="text-gray-300 mb-6">
                    Protect your organization with advanced security solutions, threat detection, and compliance frameworks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-red-400">90%</div>
                      <div className="text-gray-300 text-sm">Threat Reduction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400">$899</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Zero-Trust Security Architecture</h4>
                    <p className="text-gray-300 text-sm">Reduce security incidents by 90% with comprehensive protection</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">AI-Powered Threat Detection</h4>
                    <p className="text-gray-300 text-sm">Detect threats 10x faster with automated monitoring</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Compliance Management</h4>
                    <p className="text-gray-300 text-sm">Meet SOC 2, ISO 27001, GDPR, and HIPAA requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-8 mb-8 border border-cyan-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">☁️ Cloud & DevOps</h3>
                  <p className="text-gray-300 mb-6">
                    Optimize your cloud infrastructure and streamline development processes with automated CI/CD pipelines.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">40%</div>
                      <div className="text-gray-300 text-sm">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400">$399</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Multi-Cloud Management Platform</h4>
                    <p className="text-gray-300 text-sm">Reduce cloud costs by 30-40% with unified management</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Enterprise CI/CD Pipeline</h4>
                    <p className="text-gray-300 text-sm">Deploy 10x faster with automated quality gates</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Infrastructure Automation</h4>
                    <p className="text-gray-300 text-sm">Scale infrastructure automatically with demand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 mb-8 border border-indigo-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">⚛️ Quantum Computing</h3>
                  <p className="text-gray-300 mb-6">
                    Leverage quantum computing for complex optimization problems, cryptography, and scientific research.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-indigo-400">10x</div>
                      <div className="text-gray-300 text-sm">Speed Improvement</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">$3,999</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Quantum Algorithm Development</h4>
                    <p className="text-gray-300 text-sm">Custom quantum algorithms for optimization problems</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Quantum Cryptography</h4>
                    <p className="text-gray-300 text-sm">Unbreakable encryption for secure communications</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Quantum Machine Learning</h4>
                    <p className="text-gray-300 text-sm">Accelerate AI model training with quantum computing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain & Web3 */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 mb-8 border border-green-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">⛓️ Blockchain & Web3</h3>
                  <p className="text-gray-300 mb-6">
                    Build decentralized applications, implement smart contracts, and create secure blockchain solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">90%</div>
                      <div className="text-gray-300 text-sm">Security Improvement</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-emerald-400">$899</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">DeFi Platform Development</h4>
                    <p className="text-gray-300 text-sm">Custom decentralized finance platforms and protocols</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">NFT Marketplace Solutions</h4>
                    <p className="text-gray-300 text-sm">Complete NFT platforms with minting and trading</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Smart Contract Development</h4>
                    <p className="text-gray-300 text-sm">Secure, audited smart contracts for any use case</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT & Edge Computing */}
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl p-8 mb-8 border border-orange-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">📡 IoT & Edge Computing</h3>
                  <p className="text-gray-300 mb-6">
                    Connect devices, process data at the edge, and create intelligent IoT ecosystems for your business.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400">50%</div>
                      <div className="text-gray-300 text-sm">Downtime Reduction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">$799</div>
                      <div className="text-gray-300 text-sm">Starting Price/Month</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Enterprise IoT Platform</h4>
                    <p className="text-gray-300 text-sm">Monitor thousands of devices with real-time analytics</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Predictive Maintenance</h4>
                    <p className="text-gray-300 text-sm">Reduce unplanned downtime by 50% with AI predictions</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Edge Computing Solutions</h4>
                    <p className="text-gray-300 text-sm">Process data closer to source for faster insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  15+ years of experience delivering cutting-edge technology solutions to enterprises worldwide.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">Rapid Implementation</h3>
                <p className="text-gray-300">
                  Most services deploy in 2-8 weeks with our proven methodologies and expert support teams.
                </p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-white mb-3">Competitive Pricing</h3>
                <p className="text-gray-300">
                  Up to 70% cost savings compared to market alternatives with transparent, flexible pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific needs and discover how our technology solutions can drive your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/case-studies" 
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}