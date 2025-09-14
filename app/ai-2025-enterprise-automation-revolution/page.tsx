import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';

export const metadata = {
  title: 'AI 2025 Enterprise Automation Revolution: Complete Implementation Guide',
  description: 'Discover how AI-powered automation is transforming enterprise operations in 2025. Learn implementation strategies, best practices, and real-world success stories.',
  keywords: ['AI automation', 'enterprise automation', 'digital transformation', '2025', 'implementation guide', 'business automation'],
};

export default function AI2025EnterpriseAutomationPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI 2025 Enterprise Automation Revolution: Complete Implementation Guide"
        description="Discover how AI-powered automation is transforming enterprise operations in 2025. Learn implementation strategies, best practices, and real-world success stories."
        keywords="AI automation, enterprise automation, digital transformation, 2025, implementation guide, business automation"
        url="/ai-2025-enterprise-automation-revolution"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🤖 AI ENTERPRISE AUTOMATION</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI 2025 Enterprise Automation Revolution
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Complete Implementation Guide for Transforming Your Business Operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#implementation"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Implementation
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Expert Help
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                <div className="text-gray-600">Operational Efficiency Gain</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Phases */}
        <section id="implementation" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 1: Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of current processes, data quality, and automation potential.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Process mapping and analysis</li>
                  <li>• Data audit and quality assessment</li>
                  <li>• Technology stack evaluation</li>
                  <li>• Change management readiness</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 2: Pilot</h3>
                <p className="text-gray-600 mb-4">
                  Start with high-impact, low-risk processes to demonstrate value and build confidence.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quick wins selection</li>
                  <li>• Technology platform evaluation</li>
                  <li>• Proof of concept development</li>
                  <li>• Performance measurement</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phase 3: Scale</h3>
                <p className="text-gray-600 mb-4">
                  Full-scale deployment across the organization with continuous optimization.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Infrastructure deployment</li>
                  <li>• Process automation rollout</li>
                  <li>• Training and change management</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real-World Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered quality control reduced inspection time by 85% and achieved 92% accuracy in defect detection.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Results:</strong> $2.3M annual savings, 40% customer satisfaction improvement
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent document processing reduced loan processing time by 70% with 95% accuracy.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Results:</strong> 60% error reduction, 50% capacity increase
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered scheduling improved resource utilization by 35% and reduced wait times by 25%.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Results:</strong> 45% patient satisfaction increase, $1.8M annual savings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of organizations already leveraging AI automation to drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}