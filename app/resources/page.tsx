import Link from 'next/link';
import React from 'react';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Resources - Zion Tech Group',
  description: 'Access our comprehensive library of AI guides, case studies, whitepapers, and technical resources.',
  keywords: ['resources', 'AI guides', 'case studies', 'whitepapers', 'technical resources', 'downloads'],
};

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Success Stories',
      items: [
        {
          title: 'Fortune 500 AI Transformation: 800% ROI Success Story',
          description: 'How a leading manufacturing company achieved unprecedented returns through AI transformation.',
          type: 'Case Study',
          link: '/blog/ai-2025-ultimate-business-transformation-success-story',
          featured: true
        },
        {
          title: 'Neural Interface Implementation: 500% Productivity Increase',
          description: 'Revolutionary neural interface technology delivering massive productivity gains.',
          type: 'Case Study',
          link: '/case-studies/neural-interface-enterprise-implementation-success',
          featured: true
        }
      ]
    },
    {
      category: 'Technology Guides',
      items: [
        {
          title: 'Quantum Computing 2025: Ultimate Business Breakthrough Guide',
          description: 'Comprehensive guide to quantum computing applications and business implementation.',
          type: 'Guide',
          link: '/blog/quantum-computing-2025-business-breakthrough-ultimate-guide',
          featured: true
        },
        {
          title: 'AI 2026 Enterprise Multimodal Agents Blueprint',
          description: 'Architecture, runbooks, SLAs, and governance for multimodal agent platforms.',
          type: 'Guide',
          link: '/resources/ai-2026-enterprise-multimodal-agents-blueprint',
          featured: true
        },
        {
          title: 'AI 2025-2026 Ultimate Business Intelligence Revolution',
          description: 'Complete guide to AI transformation and business intelligence implementation.',
          type: 'Guide',
          link: '/blog/ai-2025-2026-ultimate-business-intelligence-revolution',
          featured: false
        }
      ]
    },
    {
      category: 'Technical Resources',
      items: [
        {
          title: 'AI Implementation Framework 2025',
          description: 'Step-by-step framework for successful AI implementation in enterprise environments.',
          type: 'Framework',
          link: '/resources/ai-implementation-framework-2025',
          featured: false
        },
        {
          title: 'Quantum Computing Readiness Assessment',
          description: 'Comprehensive assessment tool to evaluate your organization\'s quantum computing readiness.',
          type: 'Tool',
          link: '/resources/quantum-computing-readiness-assessment',
          featured: false
        }
      ]
    },
    {
      category: 'Industry Reports',
      items: [
        {
          title: 'AI Trends 2025-2030: Future Predictions Report',
          description: 'Comprehensive analysis of AI trends and predictions for the next decade.',
          type: 'Report',
          link: '/resources/ai-trends-2025-2030-report',
          featured: false
        },
        {
          title: 'Neural Interface Technology Market Analysis',
          description: 'In-depth market analysis of neural interface technology and business applications.',
          type: 'Report',
          link: '/resources/neural-interface-market-analysis',
          featured: false
        }
      ]
    }
  ];

  return (
    <div>
      <SEO
        title="Resources - Zion Tech Group"
        description="Access our comprehensive library of AI guides, case studies, whitepapers, and technical resources."
        keywords="resources, AI guides, case studies, whitepapers, technical resources, downloads"
        url="/resources"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Access our comprehensive library of guides, case studies, 
              and technical resources to accelerate your transformation.
            </p>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.flatMap(cat => cat.items).filter(item => item.featured).map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.link}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Access Resource →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources by Category */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              All Resources
            </h2>
            <div className="space-y-16">
              {resources.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                            {resource.type}
                          </span>
                          {resource.featured && (
                            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {resource.description}
                        </p>
                        <Link
                          href={resource.link}
                          className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Latest Resources
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get access to our latest guides, case studies, and industry insights 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Custom Resources?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our experts can create custom guides, assessments, and frameworks 
              tailored to your specific business needs.
            </p>
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Request Custom Resources
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}