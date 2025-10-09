'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Comprehensive cybersecurity services including threat detection, incident response, and compliance. Starting at $1,999/month."
        keywords={['cybersecurity', 'threat detection', 'incident response', 'compliance', 'security audit', 'penetration testing']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity-solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Advanced Threat Protection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered 
              threat detection and response systems keep your data safe 24/7.
            </p>
          </section>

          {/* Threat Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">43%</div>
                <p className="text-gray-300">of cyber attacks target small businesses</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">$4.24M</div>
                <p className="text-gray-300">average cost of a data breach</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">287</div>
                <p className="text-gray-300">days average to identify a breach</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <p className="text-gray-300">threat detection accuracy</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered threat detection and monitoring with real-time alerts and automated response.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 24/7 threat monitoring</li>
                  <li>• AI-powered detection</li>
                  <li>• Real-time alerts</li>
                  <li>• Automated response</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-4">Penetration Testing</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security assessments to identify vulnerabilities before attackers do.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Network penetration testing</li>
                  <li>• Web application testing</li>
                  <li>• Social engineering tests</li>
                  <li>• Physical security audits</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-white mb-4">Incident Response</h3>
                <p className="text-gray-300 mb-4">
                  Rapid response to security incidents with expert forensic analysis and recovery.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 24/7 incident response</li>
                  <li>• Forensic analysis</li>
                  <li>• Data recovery</li>
                  <li>• Legal support</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• GDPR compliance</li>
                  <li>• HIPAA compliance</li>
                  <li>• SOX compliance</li>
                  <li>• PCI DSS compliance</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-white mb-4">Identity Management</h3>
                <p className="text-gray-300 mb-4">
                  Advanced identity and access management with multi-factor authentication.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Single sign-on (SSO)</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Privileged access management</li>
                  <li>• Identity governance</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Security Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Advanced security analytics and reporting with actionable insights.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Security dashboards</li>
                  <li>• Threat intelligence</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Security Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Endpoint Protection</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Advanced antivirus protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Behavioral analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Device encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Remote device management</span>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Network Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Next-generation firewalls</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Intrusion detection systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">VPN solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Network segmentation</span>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Cloud Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Cloud access security brokers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Data loss prevention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Cloud workload protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Secure cloud migration</span>
                  </div>
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Data Protection</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Data encryption at rest</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Data encryption in transit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Backup and recovery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">✓</div>
                    <span className="text-gray-300">Data classification</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$1,999<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Basic threat monitoring</li>
                  <li>• Monthly security reports</li>
                  <li>• Email support</li>
                  <li>• Basic compliance</li>
                  <li>• Up to 50 endpoints</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-red-400">
                <div className="text-sm text-red-400 mb-2 font-bold">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$3,999<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Advanced threat detection</li>
                  <li>• 24/7 monitoring</li>
                  <li>• Priority support</li>
                  <li>• Full compliance suite</li>
                  <li>• Up to 200 endpoints</li>
                  <li>• Incident response</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-red-400 mb-6">$7,999<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• AI-powered threat detection</li>
                  <li>• 24/7 SOC monitoring</li>
                  <li>• Dedicated security team</li>
                  <li>• Custom compliance</li>
                  <li>• Unlimited endpoints</li>
                  <li>• Penetration testing</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Our proactive cybersecurity solutions protect your business 
              from evolving threats with 99.9% detection accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Get Security Assessment
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CybersecuritySolutionsPage;