import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Cybersecurity Automation Suite - Zion Tech Group',
  description: 'Advanced AI-powered cybersecurity automation platform. Detect threats, automate responses, and protect your infrastructure with machine learning security solutions.',
  keywords: 'AI cybersecurity, threat detection, security automation, cybersecurity AI, threat response automation',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AICybersecurityAutomationSuite() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Cybersecurity Automation Suite</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your organization with AI-powered cybersecurity automation. Detect threats in real-time, 
          automate incident response, and strengthen your security posture with advanced machine learning.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security-First Pricing</h2>
          <p className="text-lg text-gray-600">Enterprise-grade security for every organization</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">$399/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 100 endpoints</li>
              <li>✓ Basic threat detection</li>
              <li>✓ Automated alerts</li>
              <li>✓ Email support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">$999/month</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Up to 1,000 endpoints</li>
              <li>✓ Advanced AI detection</li>
              <li>✓ Automated response</li>
              <li>✓ Compliance reporting</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">Custom</div>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Unlimited endpoints</li>
              <li>✓ Custom AI models</li>
              <li>✓ On-premise deployment</li>
              <li>✓ Dedicated security team</li>
              <li>✓ 24/7 SOC support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Threat Detection</h3>
          <p className="text-gray-600 mb-4">
            Advanced machine learning algorithms detect sophisticated threats and 
            zero-day attacks with 99.5% accuracy and minimal false positives.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 99.5% threat detection accuracy</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Response</h3>
          <p className="text-gray-600 mb-4">
            Intelligent incident response automation that isolates threats, 
            blocks malicious activities, and initiates recovery procedures.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 90% faster incident response</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Analytics</h3>
          <p className="text-gray-600 mb-4">
            AI-powered user and entity behavior analytics (UEBA) to detect 
            insider threats and anomalous activities across your network.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 95% insider threat detection</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Vulnerability Management</h3>
          <p className="text-gray-600 mb-4">
            Automated vulnerability scanning, risk assessment, and patch management 
            with prioritized remediation recommendations.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 80% faster patch deployment</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Automation</h3>
          <p className="text-gray-600 mb-4">
            Automated compliance monitoring and reporting for SOC 2, GDPR, HIPAA, 
            and other regulatory requirements with audit trails.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 100% compliance coverage</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Orchestration</h3>
          <p className="text-gray-600 mb-4">
            Unified security operations center (SOC) with integrated SIEM, 
            SOAR, and threat intelligence for comprehensive security management.
          </p>
          <div className="text-sm text-green-600 font-medium">✓ 70% reduction in alert fatigue</div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Security Teams Choose Our AI Suite</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Security Results</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                99.5% threat detection accuracy
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                90% faster incident response
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                95% insider threat detection
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                70% reduction in alert fatigue
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Advanced AI threat detection
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Automated incident response
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Behavioral analytics and UEBA
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✓</span>
                Compliance automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprises</h3>
            <p className="text-gray-600 text-sm">Comprehensive security automation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
            <p className="text-gray-600 text-sm">Regulatory compliance and fraud detection</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-gray-600 text-sm">HIPAA compliance and patient data protection</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Government</h3>
            <p className="text-gray-600 text-sm">National security and critical infrastructure</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-red-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Strengthen Your Security?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join 100+ organizations using our AI Cybersecurity Automation Suite to protect their critical assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Schedule Security Assessment
          </Link>
          <Link 
            href="tel:+13024640950" 
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold border border-red-600 hover:bg-red-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Email: <a href="mailto:kleber@ziontechgroup.com" className="text-red-600 hover:underline">kleber@ziontechgroup.com</a>
        </p>
      </div>
    </div>
  );
}