import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, AlertTriangle, Users, Database, CheckCircle } from 'lucide-react';
export default function CybersecuritySolutions() {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment",
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month",
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month",
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month",
    }
  ];

              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const CybersecuritySolutionsPage: React.FC = () => {,
  return(<>)
      <Helmet />
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />
        <meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Solutions;</h1>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Protect your organization with comprehensive cybersecurity solutions including;</p>
              threat detection, vulnerability assessment, and 24/7 security monitoring.
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4">Advanced threat detection systems to identify and respond to security threats in real-time.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time monitoring</li>
                <li>• Behavioral analysis</li>
                <li>• Threat intelligence</li>
                <li>• Automated response</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-300 mb-4">Comprehensive vulnerability scanning and assessment to identify security weaknesses.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Network scanning</li>
                <li>• Penetration testing</li>
                <li>• Code analysis</li>
                <li>• Risk prioritization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Monitoring</h3>
              <p className="text-gray-300 mb-4">24/7 security operations center (SOC) monitoring and incident response.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 24/7 monitoring</li>
                <li>• Incident response</li>
                <li>• Log analysis</li>
                <li>• Threat hunting</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4">Ensure compliance with industry regulations and security standards.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOX compliance</li>
                <li>• Audit preparation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">Advanced data protection and encryption solutions for sensitive information.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Data loss prevention</li>
                <li>• Backup solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Security Training</h3>
              <p className="text-gray-300 mb-4">Comprehensive security awareness training for your employees.</p>
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Phishing simulation</li>
                <li>• Security awareness</li>
                <li>• Best practices</li>
                <li>• Incident reporting</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>
              Secure Your Organization;
            </button>
          </div>
        </div>
      </div>
    </>
  );};
