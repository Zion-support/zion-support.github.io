// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Cybersecurity Risk Assessment | Zion Tech Group - Comprehensive Security Evaluation',
  description: 'Professional cybersecurity risk assessment services with vulnerability scanning, compliance checks, and detailed security recommendations.',
  keywords: 'cybersecurity assessment, security audit, vulnerability scanning, compliance, risk management, IT security',
};

export default function CybersecurityRiskAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-6">
            <span className="text-3xl">🛡️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cybersecurity Risk Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Protect your business with our comprehensive cybersecurity risk assessment. Identify vulnerabilities, 
            ensure compliance, and implement robust security measures with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Assessment
            </Link>
            <Link to="#demo" 
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              View Sample Report
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Vulnerability Scanning</h3>
            <p className="text-gray-600">Comprehensive automated and manual vulnerability assessments across your entire IT infrastructure.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance Checks</h3>
            <p className="text-gray-600">Ensure adherence to GDPR, HIPAA, SOX, PCI-DSS, and other industry-specific compliance requirements.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Risk Reports</h3>
            <p className="text-gray-600">Detailed risk assessment reports with prioritized recommendations and implementation roadmaps.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
            <p className="text-gray-600">Simulated cyber attacks to identify real-world vulnerabilities and test your security defenses.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Security Training</h3>
            <p className="text-gray-600">Employee security awareness training and phishing simulation to strengthen your human firewall.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Ongoing Monitoring</h3>
            <p className="text-gray-600">Continuous security monitoring and regular reassessments to maintain your security posture.</p>
          </div>
        </div>

        {/* Assessment Types */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Assessment Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Basic Security Assessment</h3>
              <div className="text-2xl font-bold mb-4">$1,000 - $3,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automated vulnerability scan</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic compliance check</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Executive summary report</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Top 10 recommendations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 30-day follow-up</li>
              </ul>
              <Link to="/contact" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold text-center block hover:bg-gray-200 transition-colors">
                Get Quote
              </Link>
            </div>

            <div className="border-2 border-red-500 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Comprehensive Assessment</h3>
              <div className="text-2xl font-bold mb-4">$5,000 - $15,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full vulnerability assessment</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Penetration testing</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Compliance audit</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Detailed risk report</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Implementation roadmap</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Security training session</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 90-day follow-up</li>
              </ul>
              <Link to="/contact" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-red-600 transition-colors">
                Schedule Assessment
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Enterprise Security Program</h3>
            <div className="text-2xl font-bold mb-4">$25,000+</div>
            <p className="text-gray-600 mb-6">Custom enterprise security program with ongoing monitoring, incident response planning, and dedicated security consultant.</p>
            <Link to="/contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Security Assessment?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified Security Experts</h3>
                  <p className="text-gray-600">Our team includes CISSP, CISM, and CEH certified professionals with years of experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry-Specific Expertise</h3>
                  <p className="text-gray-600">We understand the unique security challenges of healthcare, finance, e-commerce, and other industries.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Actionable Recommendations</h3>
                  <p className="text-gray-600">Get practical, prioritized recommendations with clear implementation steps and timelines.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Protect Your Business Today</h3>
            <p className="mb-6">Don't wait for a security breach. Proactive assessment and remediation can save your business millions in potential damages.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Identify vulnerabilities before attackers</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Ensure regulatory compliance</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Reduce cyber insurance premiums</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Protect customer data and trust</span>
              </div>
            </div>
            <Link to="/contact" className="mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition-colors">
              Schedule Your Assessment
            </Link>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Compliance Standards We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <p className="text-sm font-medium">GDPR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <p className="text-sm font-medium">HIPAA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <p className="text-sm font-medium">PCI-DSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-sm font-medium">SOX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <p className="text-sm font-medium">SOC 2</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🔐</span>
              </div>
              <p className="text-sm font-medium">ISO 27001</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <p className="text-sm font-medium">NIST</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">⚖️</span>
              </div>
              <p className="text-sm font-medium">CCPA</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our cybersecurity experts to schedule your risk assessment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Call: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}