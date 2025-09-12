import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AICybersecurityChecklist2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Cybersecurity Checklist 2025 - Free Download"
        description="Download our comprehensive AI cybersecurity checklist. 200+ security measures to protect your AI systems from threats and ensure compliance in 2025."
        keywords="AI cybersecurity checklist, AI security, cybersecurity checklist, AI compliance, security best practices, AI threat protection"
        url="/resources/ai-cybersecurity-checklist-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              Free Resource
            </span>
            <span className="text-gray-500 text-sm">200+ items</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">PDF Download</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Cybersecurity Checklist 2025
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Download our comprehensive AI cybersecurity checklist with 200+ security measures to protect 
            your AI systems from threats and ensure compliance in 2025.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">ZT</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Zion Tech Group</div>
              <div className="text-sm text-gray-600">AI & Technology Solutions</div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Download Your Free Checklist</h2>
            <p className="text-xl opacity-90 mb-6">
              Get instant access to our comprehensive AI cybersecurity checklist. 
              Protect your AI systems with proven security measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                🛡️ Download PDF (3.1 MB)
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg">
                📋 View Online Version
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              ✓ 200+ security measures • ✓ Compliance guidelines • ✓ Threat protection • ✓ Free forever
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included in This Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🔒 Data Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Data encryption at rest and in transit</li>
                  <li>• Access controls and authentication</li>
                  <li>• Data anonymization and pseudonymization</li>
                  <li>• Secure data storage and backup</li>
                  <li>• Data retention and deletion policies</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🤖 AI Model Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Model integrity verification</li>
                  <li>• Adversarial attack prevention</li>
                  <li>• Model versioning and tracking</li>
                  <li>• Secure model deployment</li>
                  <li>• Model monitoring and alerting</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🌐 Infrastructure Security</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Network security and segmentation</li>
                  <li>• Cloud security configuration</li>
                  <li>• Container and orchestration security</li>
                  <li>• API security and rate limiting</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📋 Compliance & Governance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• GDPR and privacy compliance</li>
                  <li>• AI ethics and bias monitoring</li>
                  <li>• Security audit and assessment</li>
                  <li>• Documentation and reporting</li>
                  <li>• Staff training and awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Items */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Checklist Items</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Protection (Sample Items)</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 rounded" />
                <div>
                  <p className="font-medium text-gray-900">Implement end-to-end encryption for all AI data</p>
                  <p className="text-sm text-gray-600">Use AES-256 encryption for data at rest and TLS 1.3 for data in transit</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 rounded" />
                <div>
                  <p className="font-medium text-gray-900">Establish role-based access controls (RBAC)</p>
                  <p className="text-sm text-gray-600">Define clear roles and permissions for AI system access</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 rounded" />
                <div>
                  <p className="font-medium text-gray-900">Implement data anonymization techniques</p>
                  <p className="text-sm text-gray-600">Remove or mask personally identifiable information (PII)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 rounded" />
                <div>
                  <p className="font-medium text-gray-900">Set up automated data backup and recovery</p>
                  <p className="text-sm text-gray-600">Ensure data availability and business continuity</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">This is just a sample - the full checklist contains 200+ items</p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Download Full Checklist
              </button>
            </div>
          </div>
        </div>

        {/* Security Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Categories Covered</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h3>
              <p className="text-gray-600">
                50+ measures for protecting sensitive data and ensuring privacy compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Model Security</h3>
              <p className="text-gray-600">
                40+ measures for securing AI models against attacks and ensuring integrity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure Security</h3>
              <p className="text-gray-600">
                60+ measures for securing the underlying infrastructure and networks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance & Governance</h3>
              <p className="text-gray-600">
                30+ measures for ensuring regulatory compliance and proper governance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response</h3>
              <p className="text-gray-600">
                20+ measures for detecting, responding to, and recovering from security incidents.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Human Factors</h3>
              <p className="text-gray-600">
                20+ measures for training staff and managing human-related security risks.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 1-2: Assessment & Planning</h3>
                <p className="text-gray-600">Complete the security assessment checklist items to identify current gaps and priorities.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 3-6: Critical Security Implementation</h3>
                <p className="text-gray-600">Implement high-priority security measures to address immediate threats and vulnerabilities.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 7-12: Comprehensive Security Deployment</h3>
                <p className="text-gray-600">Deploy remaining security measures and establish monitoring and response procedures.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing: Monitoring & Maintenance</h3>
                <p className="text-gray-600">Continuously monitor security posture and update measures as threats evolve.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/ai-cybersecurity-threat-detection-2025" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  AI Cybersecurity Threat Detection
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about advanced AI cybersecurity strategies and threat detection techniques.
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  Read Article →
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  AI Security Hardening Checklist
                </h3>
                <p className="text-gray-600 mb-4">
                  Additional security hardening measures for AI systems and infrastructure.
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  Download Resource →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your AI Systems Today</h2>
          <p className="text-xl opacity-90 mb-6">
            Download our comprehensive cybersecurity checklist and join 1,000+ organizations 
            that have secured their AI systems using our proven framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              🛡️ Download Free Checklist
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg"
            >
              Get Security Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}