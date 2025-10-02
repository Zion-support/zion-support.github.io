import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap - Zion Tech Group',
  description: 'Complete sitemap of Zion Tech Group website. Find all our AI services, micro SaaS solutions, IT services, and resources.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  const currentYear = new Date().getFullYear();
  
  const mainPages = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About Us' },
    { url: '/contact', title: 'Contact' },
    { url: '/services', title: 'All Services' },
    { url: '/solutions', title: 'Solutions' },
    { url: '/enterprise', title: 'Enterprise Solutions' },
    { url: '/pricing', title: 'Pricing' },
    { url: '/support', title: 'Support' },
    { url: '/privacy', title: 'Privacy Policy' },
    { url: '/terms', title: 'Terms of Service' },
    { url: '/security', title: 'Security' },
  ];

  const serviceCategories = [
    {
      category: 'AI Services',
      url: '/services/ai-services',
      services: [
        { url: '/services/ai-content-optimization-platform', title: 'AI Content Optimization Platform' },
        { url: '/services/ai-financial-forecasting-suite', title: 'AI Financial Forecasting Suite' },
        { url: '/services/ai-customer-insights-platform', title: 'AI Customer Insights Platform' },
        { url: '/services/ai-financial-analysis-platform', title: 'AI Financial Analysis Platform' },
        { url: '/services/ai-marketing-studio', title: 'AI Marketing Studio' },
        { url: '/services/ai-workflow-automation-platform', title: 'AI Workflow Automation Platform' },
        { url: '/services/ai-cybersecurity-automation-suite', title: 'AI Cybersecurity Automation Suite' },
        { url: '/services/ai-sales-copilot', title: 'AI Sales Copilot' },
      ]
    },
    {
      category: 'Micro SaaS',
      url: '/services/micro-saas',
      services: [
        { url: '/services/micro-saas/ai-lead-scoring-api', title: 'AI Lead Scoring API' },
        { url: '/services/micro-saas/ai-predictive-maintenance', title: 'AI Predictive Maintenance' },
        { url: '/services/micro-saas/ai-sales-copilot', title: 'AI Sales Copilot' },
        { url: '/services/micro-saas/ai-customer-support', title: 'AI Customer Support' },
        { url: '/services/micro-saas/ai-fraud-detection', title: 'AI Fraud Detection' },
        { url: '/services/micro-saas/ai-appointment-scheduler', title: 'AI Appointment Scheduler' },
        { url: '/services/micro-saas/ai-code-reviewer', title: 'AI Code Reviewer' },
        { url: '/services/micro-saas/ai-contract-summarizer', title: 'AI Contract Summarizer' },
      ]
    },
    {
      category: 'IT Services',
      url: '/services/it-services',
      services: [
        { url: '/services/it-services/ai-observability-platform', title: 'AI Observability Platform' },
        { url: '/services/it-services/finops-managed-service', title: 'FinOps Managed Service' },
        { url: '/services/it-services/observability-platform', title: 'Observability Platform' },
        { url: '/services/it-services/soc2-readiness', title: 'SOC2 Readiness' },
        { url: '/services/it-services/data-platform-modernization', title: 'Data Platform Modernization' },
        { url: '/services/it-services/managed-kubernetes', title: 'Managed Kubernetes' },
        { url: '/services/it-services/cloud-migration', title: 'Cloud Migration' },
      ]
    },
    {
      category: 'Specialized Solutions',
      url: '/services',
      services: [
        { url: '/services/manufacturing-ai-platform', title: 'Manufacturing AI Platform' },
        { url: '/services/supply-chain-intelligence', title: 'Supply Chain Intelligence' },
        { url: '/services/blockchain-solutions', title: 'Blockchain Solutions' },
        { url: '/services/quantum-computing-solutions', title: 'Quantum Computing Solutions' },
        { url: '/services/ai-quantum-computing-2026', title: 'AI Quantum Computing 2026' },
        { url: '/services/ai-autonomous-operations-2026', title: 'AI Autonomous Operations 2026' },
        { url: '/services/cybersecurity-risk-assessment', title: 'Cybersecurity Risk Assessment' },
        { url: '/services/ai-cybersecurity-2025', title: 'AI Cybersecurity Solutions 2025' },
      ]
    }
  ];

  const resources = [
    { url: '/blog', title: 'Blog & Insights' },
    { url: '/case-studies', title: 'Case Studies' },
    { url: '/guides', title: 'Implementation Guides' },
    { url: '/content-hub', title: 'Content Hub' },
  ];

  const recentBlogPosts = [
    { url: '/blog/ai-2026-november-quantum-superintelligence-breakthrough', title: 'November 2026 Quantum AI Breakthrough' },
    { url: '/blog/ai-2026-august-quantum-consciousness-revolution', title: 'August 2026 Quantum Consciousness Revolution' },
    { url: '/blog/ai-2026-july-mega-breakthrough-revolution', title: 'July 2026 Mega Breakthrough Revolution' },
    { url: '/blog/ai-2026-february-quantum-consciousness-enterprise-breakthrough', title: 'February 2026 Quantum Consciousness Enterprise Breakthrough' },
    { url: '/blog/ai-2026-march-autonomous-enterprise-singularity', title: 'March 2026 Autonomous Enterprise Singularity' },
    { url: '/blog/ai-2026-april-quantum-neural-superintelligence', title: 'April 2026 Quantum Neural Superintelligence' },
  ];

  const caseStudies = [
    { url: '/case-studies/fortune-500-quantum-ai-transformation-success-story', title: 'Fortune 500 Quantum AI Transformation Success Story' },
    { url: '/case-studies/fortune-500-ai-2026-transformation', title: 'Fortune 500 AI 2026 Transformation' },
    { url: '/case-studies/fortune-500-ai-2026-breakthrough-mega-success', title: 'Fortune 500 AI 2026 Breakthrough Mega Success' },
    { url: '/case-studies/ai-supply-chain-optimization-2025', title: 'AI Supply Chain Optimization 2025' },
    { url: '/case-studies/ai-2026-mega-transformation-success-story', title: 'AI 2026 Mega Transformation Success Story' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Site Map
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Navigate through all our AI services, micro SaaS solutions, IT services, 
          and resources. Find exactly what you're looking for.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Pages */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
          <div className="space-y-3">
            {mainPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="block text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <div key={category.category}>
                <Link
                  href={category.url}
                  className="block font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors"
                >
                  {category.category}
                </Link>
                <div className="ml-4 space-y-2">
                  {category.services.slice(0, 4).map((service) => (
                    <Link
                      key={service.url}
                      href={service.url}
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                  {category.services.length > 4 && (
                    <Link
                      href={category.url}
                      className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all {category.category.toLowerCase()} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resource Categories</h3>
              <div className="space-y-2">
                {resources.map((resource) => (
                  <Link
                    key={resource.url}
                    href={resource.url}
                    className="block text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    {resource.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Recent Blog Posts</h3>
              <div className="space-y-2">
                {recentBlogPosts.slice(0, 4).map((post) => (
                  <Link
                    key={post.url}
                    href={post.url}
                    className="block text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                  >
                    {post.title}
                  </Link>
                ))}
                <Link
                  href="/blog"
                  className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all blog posts →
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Case Studies</h3>
              <div className="space-y-2">
                {caseStudies.slice(0, 3).map((study) => (
                  <Link
                    key={study.url}
                    href={study.url}
                    className="block text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors"
                  >
                    {study.title}
                  </Link>
                ))}
                <Link
                  href="/case-studies"
                  className="block text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all case studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* XML Sitemap Link */}
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">XML Sitemap</h3>
          <p className="text-gray-600 mb-4">
            For search engines and developers, access our complete XML sitemap:
          </p>
          <Link
            href="/sitemap.xml"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View XML Sitemap
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>
          Last updated: {new Date().toLocaleDateString()} | 
          Total pages: {mainPages.length + serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0) + resources.length + recentBlogPosts.length + caseStudies.length}
        </p>
      </div>
    </div>
  );
}