import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Services - Comprehensive Security Solutions | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.',
  keywords: 'cybersecurity, threat detection, compliance management, security audits, incident response, penetration testing',
};

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions including threat detection, compliance management, 
            security audits, and incident response. Protect your business from cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Threat Detection</h3>
            <p className="text-gray-300 mb-4">Advanced threat detection and response systems to identify and mitigate cyber attacks.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 24/7 monitoring</li>
              <li>• AI-powered detection</li>
              <li>• Real-time alerts</li>
              <li>• Incident response</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-white mb-3">Compliance Management</h3>
            <p className="text-gray-300 mb-4">Ensure compliance with industry standards and regulations.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• GDPR compliance</li>
              <li>• HIPAA compliance</li>
              <li>• SOC 2 certification</li>
              <li>• ISO 27001</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-3">Security Audits</h3>
            <p className="text-gray-300 mb-4">Comprehensive security assessments and vulnerability testing.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Penetration testing</li>
              <li>• Vulnerability assessment</li>
              <li>• Code review</li>
              <li>• Security architecture</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
            <p className="text-gray-300 mb-4">Rapid response and recovery from security incidents.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• 24/7 incident response</li>
              <li>• Forensic analysis</li>
              <li>• Recovery planning</li>
              <li>• Post-incident review</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold text-white mb-3">Identity & Access Management</h3>
            <p className="text-gray-300 mb-4">Secure identity management and access control solutions.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Multi-factor authentication</li>
              <li>• Single sign-on (SSO)</li>
              <li>• Privileged access management</li>
              <li>• Identity governance</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Security Analytics</h3>
            <p className="text-gray-300 mb-4">Advanced analytics and reporting for security insights.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Security dashboards</li>
              <li>• Threat intelligence</li>
              <li>• Risk assessment</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$2,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Basic threat monitoring</li>
                <li>Security assessments</li>
                <li>Email support</li>
                <li>Monthly reports</li>
                <li>Up to 50 users</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$4,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Advanced threat detection</li>
                <li>Penetration testing</li>
                <li>Priority support</li>
                <li>Real-time monitoring</li>
                <li>Up to 200 users</li>
                <li>Compliance management</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Most Popular
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$8,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>Full security suite</li>
                <li>24/7 incident response</li>
                <li>Dedicated security team</li>
                <li>Custom solutions</li>
                <li>Unlimited users</li>
                <li>White-label options</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your business from cyber threats with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Get Security Assessment
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}