import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionSecurityShieldPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Security Shield - Advanced Cybersecurity & Threat Protection Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion Security Shield. Advanced AI-powered cybersecurity, real-time threat detection, automated incident response, and comprehensive security monitoring for enterprises." />
        <meta name="keywords" content="cybersecurity, threat protection, security monitoring, AI security, incident response, vulnerability scanning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-security-shield" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 quantum-field-bg">
        <div className="holographic-grid">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-cyberpunk">
                Zion Security Shield
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced AI-powered cybersecurity platform that provides comprehensive threat protection, 
                real-time monitoring, and automated incident response for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-quantum">
                  Start Free Trial
                </button>
                <button className="btn-holographic">
                  Security Assessment
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">AI Threat Detection</h3>
                <p className="text-gray-300">
                  Machine learning algorithms that detect and prevent advanced persistent threats, malware, and zero-day attacks.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🔍</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Real-Time Monitoring</h3>
                <p className="text-gray-300">
                  24/7 security monitoring with instant alerts and automated response to security incidents.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🔐</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Vulnerability Scanning</h3>
                <p className="text-gray-300">
                  Automated vulnerability assessment and penetration testing to identify security weaknesses.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Incident Response</h3>
                <p className="text-gray-300">
                  Automated incident response with playbooks, forensic analysis, and rapid threat containment.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">🌐</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Network Security</h3>
                <p className="text-gray-300">
                  Comprehensive network protection with firewall management, intrusion detection, and traffic analysis.
                </p>
              </div>

              <div className="holographic-card hover-quantum p-6">
                <div className="text-4xl mb-4 neon-glow-advanced">📊</div>
                <h3 className="text-xl font-bold mb-3 text-cyberpunk">Security Analytics</h3>
                <p className="text-gray-300">
                  Advanced security analytics and reporting with compliance dashboards and risk assessments.
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Security Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Basic</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$49<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Up to 10 devices</li>
                    <li>✓ Basic threat detection</li>
                    <li>✓ Email security</li>
                    <li>✓ Weekly vulnerability scans</li>
                    <li>✓ Email support</li>
                  </ul>
                  <button className="btn-quantum w-full">Get Started</button>
                </div>

                {/* Professional Plan */}
                <div className="holographic-card p-8 text-center border-2 border-red-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Professional</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$149<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Up to 50 devices</li>
                    <li>✓ Advanced AI threat detection</li>
                    <li>✓ Real-time monitoring</li>
                    <li>✓ Daily vulnerability scans</li>
                    <li>✓ Incident response</li>
                    <li>✓ Network security</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <button className="btn-holographic w-full">Get Started</button>
                </div>

                {/* Enterprise Plan */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Enterprise</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$399<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Unlimited devices</li>
                    <li>✓ Custom AI models</li>
                    <li>✓ 24/7 SOC monitoring</li>
                    <li>✓ Continuous vulnerability scanning</li>
                    <li>✓ Custom incident response</li>
                    <li>✓ Compliance reporting</li>
                    <li>✓ Dedicated security team</li>
                  </ul>
                  <button className="btn-quantum w-full">Contact Sales</button>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Security Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-bold mb-2">Encryption</h3>
                  <p className="text-sm text-gray-300">End-to-end encryption for all data and communications</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🚨</div>
                  <h3 className="font-bold mb-2">Alerts</h3>
                  <p className="text-sm text-gray-300">Instant notifications for security threats and incidents</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">📋</div>
                  <h3 className="font-bold mb-2">Compliance</h3>
                  <p className="text-sm text-gray-300">GDPR, HIPAA, SOC 2, and PCI DSS compliance</p>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-bold mb-2">Backup</h3>
                  <p className="text-sm text-gray-300">Automated backup and disaster recovery solutions</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center holographic-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-cyberpunk">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't wait for a security breach. Protect your business with Zion Security Shield's advanced AI-powered cybersecurity platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-holographic text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="btn-quantum text-lg px-8 py-4">
                  Security Assessment
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No setup fees • 30-day free trial • Cancel anytime
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center mt-16 text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionSecurityShieldPage;
