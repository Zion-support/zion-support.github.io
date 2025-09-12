import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';

export default function AIPrivacyComplianceChecklist() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Privacy Compliance Checklist 2025: Ensure Your AI Systems Meet Privacy Regulations"
        description="Download our comprehensive AI privacy compliance checklist for 2025. Ensure your AI systems meet GDPR, CCPA, and other privacy regulations with our step-by-step guide."
        keywords="AI privacy compliance, GDPR checklist, CCPA compliance, AI data privacy, privacy by design, AI regulations"
        url="/resources/ai-privacy-compliance-checklist"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Free Download</span>
          </div>
          
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔒 ESSENTIAL</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Privacy Compliance Checklist 2025
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ensure your AI systems meet all privacy regulations with our comprehensive checklist. 
            Covering GDPR, CCPA, and emerging privacy laws, this guide helps you build 
            privacy-compliant AI systems from day one.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>📄 35 pages</span>
            <span>⏱️ 1.5 hours to complete</span>
            <span>👥 1.8k downloads</span>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Download Your Free Privacy Compliance Checklist
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get instant access to our comprehensive 35-page checklist with actionable steps, 
              templates, and compliance frameworks for AI systems.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Download Free Checklist
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included in This Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliance Framework</h3>
                  <p className="text-gray-600 text-sm">
                    Complete checklist for GDPR compliance including data subject rights, 
                    consent management, and privacy by design.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">CCPA & CPRA Requirements</h3>
                  <p className="text-gray-600 text-sm">
                    Step-by-step guide to California privacy laws including consumer rights 
                    and business obligations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy Impact Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Template and process for conducting comprehensive privacy impact 
                    assessments for AI systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Minimization Strategies</h3>
                  <p className="text-gray-600 text-sm">
                    Practical techniques for implementing data minimization and 
                    purpose limitation in AI systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consent Management</h3>
                  <p className="text-gray-600 text-sm">
                    Best practices for obtaining, managing, and documenting user consent 
                    for AI data processing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h3>
                  <p className="text-gray-600 text-sm">
                    Implementation guide for technical privacy safeguards including 
                    encryption, anonymization, and access controls.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">7</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audit & Monitoring</h3>
                  <p className="text-gray-600 text-sm">
                    Framework for ongoing privacy compliance monitoring and regular 
                    privacy audits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">8</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Incident Response</h3>
                  <p className="text-gray-600 text-sm">
                    Procedures for handling privacy breaches and data incidents 
                    in AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Areas Covered */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Regulations Covered</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">GDPR (General Data Protection Regulation)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">CCPA (California Consumer Privacy Act)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">CPRA (California Privacy Rights Act)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">PIPEDA (Personal Information Protection)</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">LGPD (Lei Geral de Proteção de Dados)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">PDPA (Personal Data Protection Act)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">Emerging State Privacy Laws</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="font-medium text-gray-900">Industry-Specific Regulations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-600 text-sm">
                Ensure your AI systems meet all applicable privacy regulations and avoid costly fines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
              <p className="text-gray-600 text-sm">
                Identify and address privacy risks before they become compliance issues.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Faster Implementation</h3>
              <p className="text-gray-600 text-sm">
                Streamline your privacy compliance process with our proven checklist approach.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ensure AI Privacy Compliance Today
          </h2>
          <p className="text-xl opacity-90 mb-6">
            Download our comprehensive privacy compliance checklist and protect your organization 
            from regulatory risks.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Free Checklist
            </button>
          </form>
          
          <p className="text-sm opacity-75 mt-4">
            Join 1,800+ professionals who have already downloaded this checklist
          </p>
        </div>

        {/* Related Resources */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Security Hardening Checklist
                </h4>
                <p className="text-gray-600 text-sm">
                  Essential security measures for AI systems
                </p>
              </div>
            </Link>
            
            <Link href="/resources/ai-governance-framework" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Governance Framework
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete framework for responsible AI governance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}