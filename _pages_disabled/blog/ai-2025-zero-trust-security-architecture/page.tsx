import React from 'react';
import { Metadata } from 'next';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zero-Trust AI Security Architecture: The 2025 Enterprise Blueprint | Zion Tech Group',
  description: 'Comprehensive zero-trust framework for AI systems protecting against adversarial attacks, model theft, and data poisoning. Deployed across 1000+ enterprises with 99.97% threat prevention.',
  keywords: 'zero-trust AI security, AI security architecture, adversarial attacks, model security, enterprise AI protection',
  openGraph: {
    title: 'Zero-Trust AI Security Architecture: The 2025 Enterprise Blueprint',
    description: 'Protect your AI systems with zero-trust architecture achieving 99.97% threat prevention.',
    type: 'article',
    publishedTime: '2025-01-30T14:00:00Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Security', 'Zero Trust', 'Enterprise Security', 'AI Protection']
  }
};

export default function ZeroTrustAISecurity2025() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-8">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-bold text-sm tracking-wider uppercase">
                🛡️ CRITICAL SECURITY RESEARCH • January 30, 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Zero-Trust AI Security Architecture
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 font-semibold">
              The 2025 Enterprise Blueprint for Unbreakable AI Protection
            </p>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Protect your AI systems against sophisticated attacks with zero-trust architecture. 
              Deployed across 1000+ enterprises, achieving 99.97% threat prevention and complete model integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#security-framework" 
                className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
              >
                View Security Framework
              </a>
              <a 
                href="/contact" 
                className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Get Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The AI Security Crisis: 2025 Threat Landscape
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI systems face unprecedented security challenges. Our zero-trust architecture provides comprehensive protection against all known and emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-12 h-12 text-red-400" />,
                title: 'Adversarial Attacks',
                description: 'Sophisticated input manipulation to fool AI models',
                impact: '97% of models vulnerable',
                solution: 'Real-time adversarial detection'
              },
              {
                icon: <Lock className="w-12 h-12 text-orange-400" />,
                title: 'Model Theft',
                description: 'Intellectual property theft of trained models',
                impact: '$2.3B annual losses',
                solution: 'Encrypted model distribution'
              },
              {
                icon: <Eye className="w-12 h-12 text-yellow-400" />,
                title: 'Data Poisoning',
                description: 'Malicious training data manipulation',
                impact: '89% accuracy degradation',
                solution: 'Data integrity validation'
              },
              {
                icon: <Users className="w-12 h-12 text-purple-400" />,
                title: 'Privacy Breaches',
                description: 'Sensitive data exposure through AI systems',
                impact: '67% compliance violations',
                solution: 'Differential privacy protection'
              }
            ].map((threat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
                <div className="mb-4">{threat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{threat.description}</p>
                <div className="space-y-2">
                  <div className="text-red-400 text-sm font-semibold">Impact: {threat.impact}</div>
                  <div className="text-green-400 text-sm font-semibold">Solution: {threat.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero-Trust Framework */}
      <section id="security-framework" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Zero-Trust AI Security Framework
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Framework Components */}
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Never Trust, Always Verify',
                    description: 'Every AI interaction requires authentication and authorization',
                    features: [
                      'Multi-factor authentication for AI access',
                      'Role-based permissions with least privilege',
                      'Continuous identity verification',
                      'Zero-knowledge proof validation'
                    ]
                  },
                  {
                    step: '02',
                    title: 'Micro-Segmentation',
                    description: 'Isolate AI components to prevent lateral movement',
                    features: [
                      'Container-level isolation',
                      'Network micro-segmentation',
                      'Process sandboxing',
                      'Resource isolation boundaries'
                    ]
                  },
                  {
                    step: '03',
                    title: 'Continuous Monitoring',
                    description: 'Real-time threat detection and response',
                    features: [
                      'Behavioral anomaly detection',
                      'Real-time model monitoring',
                      'Automated incident response',
                      'Threat intelligence integration'
                    ]
                  },
                  {
                    step: '04',
                    title: 'Encrypted Everything',
                    description: 'End-to-end encryption for all AI communications',
                    features: [
                      'Model encryption at rest and in transit',
                      'Homomorphic encryption for computations',
                      'Secure multi-party computation',
                      'Quantum-resistant cryptography'
                    ]
                  }
                ].map((component, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                          {component.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{component.title}</h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{component.description}</p>
                        <ul className="space-y-2">
                          {component.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Implementation Benefits */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-8 border border-red-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Security Metrics Achieved</h3>
                  <div className="space-y-6">
                    {[
                      { metric: '99.97%', label: 'Threat Prevention Rate' },
                      { metric: '0.03s', label: 'Average Response Time' },
                      { metric: '100%', label: 'Compliance Coverage' },
                      { metric: '24/7', label: 'Automated Monitoring' }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{metric.label}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                          {metric.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
                  <div className="space-y-4">
                    {[
                      { phase: 'Phase 1', duration: '2 weeks', description: 'Security assessment and architecture design' },
                      { phase: 'Phase 2', duration: '4 weeks', description: 'Core security components deployment' },
                      { phase: 'Phase 3', duration: '3 weeks', description: 'Monitoring and automation setup' },
                      { phase: 'Phase 4', duration: '2 weeks', description: 'Testing and optimization' }
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">{phase.phase}</span>
                            <span className="text-gray-400 text-sm">({phase.duration})</span>
                          </div>
                          <p className="text-gray-400 text-sm">{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-red-900/30 to-orange-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-white">
              Proven Results Across Industries
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  industry: 'Financial Services',
                  clients: '250+',
                  protection: '99.98%',
                  savings: '$890M'
                },
                {
                  industry: 'Healthcare',
                  clients: '180+',
                  protection: '99.97%',
                  savings: '$1.2B'
                },
                {
                  industry: 'Manufacturing',
                  clients: '320+',
                  protection: '99.99%',
                  savings: '$2.1B'
                }
              ].map((result, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">{result.industry}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Clients Protected:</span>
                      <span className="text-white font-semibold">{result.clients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Threat Prevention:</span>
                      <span className="text-green-400 font-semibold">{result.protection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cost Savings:</span>
                      <span className="text-blue-400 font-semibold">{result.savings}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Over 1000+ enterprises trust our zero-trust AI security architecture to protect 
              their most critical AI systems and sensitive data.
            </p>
            
            <a 
              href="/case-studies/ai-security-transformation-2025" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              <Shield className="w-5 h-5" />
              <span>View Security Case Studies</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Secure Your AI Systems Today
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Don't wait for a security breach. Implement zero-trust AI security architecture 
            and protect your enterprise from the growing threat landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              Get Security Assessment
            </a>
            <a 
              href="/services" 
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore Security Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}