import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server } from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text text-center">
            Security & Compliance
          </h1>
          
          <div className="cyber-card hologram-card p-8 mb-8">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-xl text-gray-300">
                Enterprise-grade security protecting your data and infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="cyber-card p-6 text-center">
                <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Data Encryption</h3>
                <p className="text-gray-300 text-sm">End-to-end encryption for all data in transit and at rest</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Monitoring</h3>
                <p className="text-gray-300 text-sm">Continuous security monitoring and threat detection</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Secure Infrastructure</h3>
                <p className="text-gray-300 text-sm">Bank-level security for all our systems and services</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                Security Measures
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Infrastructure Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Multi-layered firewall protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      DDoS protection and mitigation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Intrusion detection systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Regular security audits and penetration testing
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Data Protection</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      AES-256 encryption for data at rest
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      TLS 1.3 for data in transit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Secure key management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Regular automated backups
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Access Control</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Multi-factor authentication (MFA)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Role-based access control (RBAC)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Single sign-on (SSO) integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Regular access reviews and audits
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3" />
                Compliance & Certifications
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Industry Standards</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      ISO 27001 compliant
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      GDPR compliant
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      HIPAA ready infrastructure
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Security Monitoring</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      24/7 security operations center
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Real-time threat detection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Automated incident response
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Regular security assessments
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Incident Response</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Dedicated incident response team
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Rapid response procedures
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Customer notification protocols
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Post-incident analysis and improvements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8 mt-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              Security Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Security Team</h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <strong>Security Email:</strong><br/>
                    <a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                      security@ziontechgroup.com
                    </a>
                  </p>
                  <p>
                    <strong>Emergency Contact:</strong><br/>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                      +1 (302) 464-0950
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong><br/>
                    364 E Main St STE 1008<br/>
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Report Security Issues</h3>
                <p className="text-gray-300 mb-4">
                  If you discover a security vulnerability or have concerns about our security practices, 
                  please report it to our security team immediately.
                </p>
                <a 
                  href="mailto:security@ziontechgroup.com?subject=Security%20Issue%20Report"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Report Security Issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;
