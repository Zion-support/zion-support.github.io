import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sitemap - Zion Tech Group',
  description: 'Navigate Zion Tech Group\'s website with our comprehensive sitemap. Find all pages, services, and resources easily.',
  keywords: 'sitemap, website navigation, pages, services, resources',
};

export default function SitemapPage() {
  const sitemapData = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'All Services', href: '/services' },
      { name: 'AI Services', href: '/services/ai-services' },
      { name: 'Micro SaaS', href: '/services/micro-saas' },
      { name: 'IT Services', href: '/services/it-services' },
      { name: 'Cloud Migration', href: '/services/cloud-migration-service' },
      { name: 'Cybersecurity', href: '/services/cybersecurity-solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics-business-intelligence' },
      { name: 'AI Content Optimization', href: '/services/ai-content-optimization-platform' },
      { name: 'AI Lead Scoring API', href: '/services/micro-saas/ai-lead-scoring-api' },
      { name: 'AI Financial Forecasting', href: '/services/ai-financial-forecasting-suite' },
      { name: 'Smart Inventory Management', href: '/services/smart-inventory-management-saas' },
      { name: 'AI-Powered CRM Automation', href: '/services/ai-powered-crm-automation' },
      { name: 'Cloud-Native DevOps Platform', href: '/services/cloud-native-devops-platform' },
      { name: 'AI Cybersecurity Automation', href: '/services/ai-cybersecurity-automation-suite' },
      { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
      { name: 'Data Quality & Observability', href: '/services/data-quality-observability' },
      { name: 'FinOps Cost Optimizer', href: '/services/finops-cost-optimizer' },
      { name: 'Manufacturing AI Platform', href: '/services/manufacturing-ai-platform' },
      { name: 'Supply Chain Intelligence', href: '/services/supply-chain-intelligence' },
      { name: 'Autonomous Operations', href: '/services/ai-autonomous-operations' },
      { name: 'AI Content Optimization Suite', href: '/services/ai-content-optimization-suite' },
      { name: 'AI Workflow Automation Platform', href: '/services/ai-workflow-automation-platform' },
      { name: 'AI Observability Platform', href: '/services/it-services/ai-observability-platform' },
      { name: 'AI Governance, Risk & Compliance', href: '/services/ai-governance-risk-compliance' },
      { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform' },
      { name: 'AI Financial Analysis Platform', href: '/services/ai-financial-analysis-platform' },
      { name: 'Enterprise RAG & GenAI Platform', href: '/services/genai-rag-platform' },
      { name: 'AI Marketing Studio', href: '/services/ai-marketing-studio' },
      { name: 'Business Intelligence', href: '/services/ai-business-intelligence-2025' },
      { name: 'Cybersecurity Risk Assessment', href: '/services/cybersecurity-risk-assessment' },
      { name: 'AI Cybersecurity Solutions', href: '/services/ai-cybersecurity-2025' },
      { name: 'Quantum Computing', href: '/services/ai-quantum-computing-2026' },
      { name: 'AI Operations 2026', href: '/services/ai-autonomous-operations-2026' },
    ],
    solutions: [
      { name: 'All Solutions', href: '/solutions' },
      { name: 'Enterprise Solutions', href: '/enterprise' },
      { name: 'Innovative IT Solutions', href: '/innovative-it-solutions' },
      { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions' },
      { name: 'Comprehensive Services', href: '/comprehensive-services' },
      { name: 'Enhanced Services Catalog', href: '/enhanced-services-catalog' },
      { name: 'Additional Services', href: '/additional-services' },
    ],
    resources: [
      { name: 'All Resources', href: '/resources' },
      { name: 'Implementation Guides', href: '/guides' },
      { name: 'Content Hub', href: '/content-hub' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'API Documentation', href: '/api-documentation' },
      { name: 'Training', href: '/training' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Support', href: '/support' },
    ],
    company: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Partners', href: '/partners' },
      { name: 'Community', href: '/community' },
      { name: 'Security', href: '/security' },
      { name: 'Docs', href: '/docs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Navigate our website easily with this comprehensive sitemap. 
          Find all pages, services, and resources in one place.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Pages */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
          <ul className="space-y-3">
            {sitemapData.main.map((page, index) => (
              <li key={index}>
                <Link 
                  href={page.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Services */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services</h2>
          <ul className="space-y-2 max-h-96 overflow-y-auto">
            {sitemapData.services.map((service, index) => (
              <li key={index}>
                <Link 
                  href={service.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Solutions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h2>
          <ul className="space-y-3">
            {sitemapData.solutions.map((solution, index) => (
              <li key={index}>
                <Link 
                  href={solution.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Resources */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources</h2>
          <ul className="space-y-3">
            {sitemapData.resources.map((resource, index) => (
              <li key={index}>
                <Link 
                  href={resource.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {resource.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Company */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Company</h2>
          <ul className="space-y-3">
            {sitemapData.company.map((page, index) => (
              <li key={index}>
                <Link 
                  href={page.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Legal */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal</h2>
          <ul className="space-y-3">
            {sitemapData.legal.map((page, index) => (
              <li key={index}>
                <Link 
                  href={page.href}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Quick Search */}
      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 mb-6 text-center">
          Use our search or contact us directly for assistance.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="text"
            placeholder="Search our website..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
        <div className="text-center mt-4">
          <Link 
            href="/contact" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Or contact us for help →
          </Link>
        </div>
      </div>
    </div>
  );
}