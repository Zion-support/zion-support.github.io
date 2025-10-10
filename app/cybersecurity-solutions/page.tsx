import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." /></meta>
        <meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl font-bold text-white mb-6"></h1>
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Protect your organization with comprehensive cybersecurity solutions including 
              threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4"></p>
                Advanced threat detection systems to identify and respond to security threats in real-time.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Real-time monitoring</li>
                <li>• Behavioral analysis</li>
                <li>• Threat intelligence</li>
                <li>• Automated response</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive vulnerability scanning and assessment to identify security weaknesses.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Network scanning</li>
                <li>• Penetration testing</li>
                <li>• Code analysis</li>
                <li>• Risk prioritization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Monitoring</h3>
              <p className="text-gray-300 mb-4"></p>
                24/7 security operations center (SOC) monitoring and incident response.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• 24/7 monitoring</li>
                <li>• Incident response</li>
                <li>• Log analysis</li>
                <li>• Threat hunting</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4"></p>
                Ensure compliance with industry regulations and security standards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOX compliance</li>
                <li>• Audit preparation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4"></p>
                Advanced data protection and encryption solutions for sensitive information.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Data loss prevention</li>
                <li>• Backup solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Training</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive security awareness training for your employees.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Phishing simulation</li>
                <li>• Security awareness</li>
                <li>• Best practices</li>
                <li>• Incident reporting</li>
              </ul>
            </div>
          </div>

          <div className="text-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"></button>
              Secure Your Organization
            </button>
          </div>
        </div>
      </div>
    </>
  )
  };

export default CybersecuritySolutionsPage;