import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, TrendingUp, Zap, AlertTriangle, CheckCircle, ArrowRight, Lock } from 'lucide-react';

export const metadata = {
  title: 'AI-Powered Security Operations Center (SOC) 2026 | Zion Tech Group',
  description: 'Transform cybersecurity with AI-powered SOC achieving 99.9% threat detection, 95% faster response times, and autonomous security operations.',
  keywords: 'AI SOC, security operations center, AI cybersecurity, threat detection, autonomous security, AI security monitoring',
  openGraph: {
    title: 'AI-Powered Security Operations Center (SOC) 2026',
    description: 'Next-generation SOC with 99.9% threat detection and autonomous security operations.',
    type: 'article',
  },
};

export default function AISecurityOperationsCenter2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-6 justify-center flex-wrap">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold">
              🛡️ CYBERSECURITY • 2026
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 text-white text-sm font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              MISSION CRITICAL
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight">
            AI-Powered Security<br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Operations Center 2026
            </span>
          </h1>
          
          <p className="text-2xl text-gray-200 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            Next-generation SOC with <span className="text-red-400 font-bold">99.9% threat detection</span>, 
            <span className="text-orange-400 font-bold"> 95% faster response</span>, and 
            <span className="text-yellow-400 font-bold"> autonomous security operations</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Secure Your Enterprise</span>
            </Link>
            <Link
              href="#capabilities"
              className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Threat Landscape Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">The Evolving Threat Landscape</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-extrabold text-red-600 mb-2">$10.5T</div>
                <div className="text-gray-700 font-semibold">Annual Cybercrime Cost (2025)</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-extrabold text-orange-600 mb-2">2,200+</div>
                <div className="text-gray-700 font-semibold">Cyber Attacks Per Day</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-extrabold text-yellow-600 mb-2">287</div>
                <div className="text-gray-700 font-semibold">Days to Detect Breach (Avg)</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-extrabold text-red-600 mb-2">68%</div>
                <div className="text-gray-700 font-semibold">Increase in Ransomware</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            AI SOC Core Capabilities
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive security operations powered by advanced AI and machine learning
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Autonomous Threat Detection</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                AI-powered analysis of network traffic, user behavior, and system logs to identify threats in real-time with 99.9% accuracy.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Behavioral Analytics</p>
                    <p className="text-sm text-gray-600">Detect anomalies based on user and entity behavior patterns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Threat Intelligence Integration</p>
                    <p className="text-sm text-gray-600">Real-time correlation with global threat databases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Zero-Day Detection</p>
                    <p className="text-sm text-gray-600">Identify unknown threats using ML pattern recognition</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Automated Response & Remediation</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Instant, intelligent response to security incidents with automated containment, investigation, and remediation workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Automated Playbooks</p>
                    <p className="text-sm text-gray-600">Pre-configured response workflows for common threats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Intelligent Containment</p>
                    <p className="text-sm text-gray-600">Isolate affected systems while maintaining operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Self-Healing Infrastructure</p>
                    <p className="text-sm text-gray-600">Automatic system recovery and patch deployment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Predictive Security Analytics</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Forecast potential security risks and vulnerabilities before they can be exploited by attackers.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Vulnerability Prediction</p>
                    <p className="text-sm text-gray-600">Identify exploitable weaknesses before attackers do</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Attack Path Analysis</p>
                    <p className="text-sm text-gray-600">Map potential attack vectors and entry points</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Risk Scoring</p>
                    <p className="text-sm text-gray-600">Prioritize remediation based on threat likelihood</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Continuous Compliance Monitoring</h3>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Automated compliance verification and reporting for SOC 2, ISO 27001, GDPR, HIPAA, and industry regulations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Real-Time Auditing</p>
                    <p className="text-sm text-gray-600">Continuous monitoring of compliance controls</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Automated Reporting</p>
                    <p className="text-sm text-gray-600">Generate compliance reports on-demand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Policy Enforcement</p>
                    <p className="text-sm text-gray-600">Automatic enforcement of security policies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Measurable Security Improvements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-5xl font-extrabold text-red-600 mb-2">99.9%</div>
                <div className="text-gray-700 font-semibold">Threat Detection Accuracy</div>
              </div>
              <p className="text-gray-700 text-center">
                AI-powered detection identifies threats with unprecedented accuracy, virtually eliminating false negatives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-5xl font-extrabold text-orange-600 mb-2">95%</div>
                <div className="text-gray-700 font-semibold">Faster Response Time</div>
              </div>
              <p className="text-gray-700 text-center">
                Automated response workflows reduce mean time to respond (MTTR) from hours to minutes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="text-5xl font-extrabold text-yellow-600 mb-2">85%</div>
                <div className="text-gray-700 font-semibold">Operational Cost Reduction</div>
              </div>
              <p className="text-gray-700 text-center">
                Automation reduces manual investigation and response efforts, lowering SOC operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            AI SOC delivering critical security outcomes across industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Financial Services</h3>
              <p className="text-gray-700 text-sm">
                Protect transactions, prevent fraud, and maintain regulatory compliance with real-time threat detection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare</h3>
              <p className="text-gray-700 text-sm">
                Secure patient data, maintain HIPAA compliance, and protect medical devices from cyber threats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Manufacturing</h3>
              <p className="text-gray-700 text-sm">
                Defend operational technology, prevent ransomware, and secure industrial control systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">E-Commerce</h3>
              <p className="text-gray-700 text-sm">
                Protect customer data, prevent payment fraud, and maintain PCI DSS compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Rapid Deployment Timeline
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            From assessment to full operational AI SOC in 90 days
          </p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  30
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Days 1-30: Assessment & Setup</h3>
                <p className="text-gray-700">
                  Security posture evaluation, infrastructure integration, and AI model configuration.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  60
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Days 31-60: Pilot & Tuning</h3>
                <p className="text-gray-700">
                  Monitored pilot deployment, model training, and response playbook development.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  90
                </div>
              </div>
              <div className="flex-1 pl-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Days 61-90: Full Production</h3>
                <p className="text-gray-700">
                  Enterprise-wide deployment with 24/7 autonomous threat detection and response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto mb-4 text-red-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Your Enterprise with AI
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Deploy a next-generation SOC with 99.9% threat detection in 90 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Request Security Assessment</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>View Security Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-300">
            📞 +1 302 464 0950 | 📧 kleber@ziontechgroup.com
          </p>
        </div>
      </section>
    </div>
  );
}