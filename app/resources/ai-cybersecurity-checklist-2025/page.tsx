import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AICybersecurityChecklist2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Cybersecurity Checklist 2025: Complete Security Assessment Guide"
        description="Download our comprehensive AI cybersecurity checklist for 2025. Assess your organization's AI security posture with 150+ actionable items covering threats, defenses, and best practices."
        keywords="AI cybersecurity checklist, AI security assessment, cybersecurity 2025, AI threats, security checklist, AI defense"
        url="/resources/ai-cybersecurity-checklist-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span>→</span>
            <span>Security & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Cybersecurity Checklist 2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete Security Assessment Guide for AI-Powered Organizations
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Security</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Checklist</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Free Download</span>
          </div>
        </div>

        <div className="aspect-video bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl mb-12 flex items-center justify-center">
          <div className="text-8xl">🛡️</div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            As AI becomes more integral to business operations, protecting against AI-powered threats 
            has become critical. This comprehensive checklist provides 150+ actionable items to assess 
            and improve your organization's AI security posture.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Use this checklist to identify vulnerabilities, implement best practices, and ensure your 
            AI systems are protected against the latest intelligent threats.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">What's Included in This Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Security Assessment Areas</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• AI Model Security (25 items)</li>
                <li>• Data Protection & Privacy (30 items)</li>
                <li>• Infrastructure Security (20 items)</li>
                <li>• Threat Detection & Response (25 items)</li>
                <li>• Governance & Compliance (20 items)</li>
                <li>• Incident Response Planning (15 items)</li>
                <li>• Staff Training & Awareness (15 items)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Features</h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Priority-based scoring system</li>
                <li>• Implementation timelines</li>
                <li>• Resource requirements</li>
                <li>• Compliance mapping</li>
                <li>• Action item templates</li>
                <li>• Progress tracking sheets</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Model Security</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Implement model versioning and change tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Deploy adversarial testing for all AI models</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Establish model monitoring and alerting systems</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Implement secure model deployment pipelines</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Regular security audits of AI model performance</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Protection & Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Implement data encryption at rest and in transit</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Establish data anonymization and pseudonymization</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Deploy privacy-preserving AI techniques</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Regular data access audits and monitoring</span>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Implement data retention and deletion policies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Download the Complete Checklist</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Get the full 150+ item AI cybersecurity checklist with detailed implementation guides, 
            compliance mappings, and progress tracking templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download PDF Checklist
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Get Excel Template
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Week 1-2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immediate Actions (Critical Items)</h4>
                <p className="text-gray-600 text-sm">Implement basic security controls and threat detection systems</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Week 3-8</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Short-term Improvements</h4>
                <p className="text-gray-600 text-sm">Deploy advanced monitoring, staff training, and governance frameworks</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Month 3-6</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Long-term Strategy</h4>
                <p className="text-gray-600 text-sm">Establish comprehensive AI security program and continuous improvement processes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-12 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Cybersecurity Threats 2025
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive guide to understanding and defending against AI-powered cyberattacks.
                </p>
              </div>
            </Link>
            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Security Hardening Checklist
                </h4>
                <p className="text-gray-600 text-sm">
                  Technical checklist for hardening AI systems and infrastructure.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}