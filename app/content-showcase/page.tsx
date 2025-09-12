import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Articles, Case Studies & Resources"
        description="Explore our comprehensive collection of AI content including articles, case studies, resources, and services."
        keywords="AI content, articles, case studies, resources, AI insights"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI content, from breakthrough articles and real-world 
            case studies to implementation guides and expert services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI 2025 Quantum Computing Breakthrough
              </h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum AI applications achieving unprecedented results in drug discovery, finance, and climate modeling.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Article →</div>
            </div>
          </Link>

          <Link href="/blog/ai-workforce-transformation-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI Workforce Transformation 2025
              </h3>
              <p className="text-gray-600 mb-4">
                Complete reskilling guide with proven strategies for thriving in the AI-powered economy.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Guide →</div>
            </div>
          </Link>

          <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI Manufacturing Success: $200M Savings
              </h3>
              <p className="text-gray-600 mb-4">
                Fortune 500 case study showing how autonomous AI systems achieved 60% faster processing.
              </p>
              <div className="text-sm text-blue-600 font-medium">View Case Study →</div>
            </div>
          </Link>

          <Link href="/resources/ai-implementation-master-guide-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI Implementation Master Guide 2026
              </h3>
              <p className="text-gray-600 mb-4">
                200+ page comprehensive resource with frameworks, templates, and step-by-step instructions.
              </p>
              <div className="text-sm text-blue-600 font-medium">Download Free →</div>
            </div>
          </Link>

          <Link href="/services/ai-automation" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI Enterprise Automation Services
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your business with cutting-edge AI automation. 90% faster processing, 60% cost reduction.
              </p>
              <div className="text-sm text-blue-600 font-medium">Get Started →</div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                AI 2025 Breakthrough Innovations
              </h3>
              <p className="text-gray-600 mb-4">
                Revolutionary AI technologies reshaping industries and creating new opportunities.
              </p>
              <div className="text-sm text-blue-600 font-medium">Read Article →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}