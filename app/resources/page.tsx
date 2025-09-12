import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Resources & Guides - Zion Tech Group',
  description: 'Download our comprehensive AI implementation guides, templates, and resources. Free tools to accelerate your AI transformation journey.',
  keywords: 'AI resources, free guides, AI templates, implementation guides, AI tools, business resources',
};

const resources = [
  {
    id: 'ai-implementation-master-guide-2025',
    title: 'AI Implementation Master Guide 2025',
    description: 'Complete 200+ page guide covering AI strategy, implementation, and best practices for enterprise organizations.',
    type: 'PDF Guide',
    pages: '200+',
    downloads: '15,000+',
    category: 'Implementation',
    emoji: '📚',
    featured: true,
    href: '/resources/ai-implementation-master-guide-2025',
  },
  {
    id: 'ai-transformation-playbook-2026',
    title: 'AI Transformation Playbook 2026',
    description: 'Step-by-step playbook for successful AI transformation with templates, checklists, and real-world examples.',
    type: 'PDF Playbook',
    pages: '150+',
    downloads: '12,000+',
    category: 'Transformation',
    emoji: '🎯',
    featured: true,
    href: '/resources/ai-transformation-playbook-2026',
  },
  {
    id: 'ai-productivity-automation-templates',
    title: 'AI Productivity Automation Templates',
    description: 'Ready-to-use templates for automating common business processes with AI tools and workflows.',
    type: 'Templates',
    pages: '50+',
    downloads: '8,500+',
    category: 'Productivity',
    emoji: '⚡',
    featured: true,
    href: '/resources/ai-productivity-automation-templates',
  },
  {
    id: 'ai-cybersecurity-checklist',
    title: 'AI Cybersecurity Checklist 2025',
    description: 'Comprehensive security checklist to protect your organization from AI-powered cyber threats.',
    type: 'Checklist',
    pages: '25',
    downloads: '6,200+',
    category: 'Security',
    emoji: '🛡️',
    featured: false,
    href: '/resources/ai-cybersecurity-checklist',
  },
  {
    id: 'ai-roi-calculator',
    title: 'AI ROI Calculator & Template',
    description: 'Interactive calculator and template to measure and project AI implementation ROI.',
    type: 'Calculator',
    pages: '15',
    downloads: '4,800+',
    category: 'Business',
    emoji: '💰',
    featured: false,
    href: '/resources/ai-roi-calculator',
  },
  {
    id: 'ai-vendor-evaluation-framework',
    title: 'AI Vendor Evaluation Framework',
    description: 'Comprehensive framework for evaluating and selecting AI vendors and solutions.',
    type: 'Framework',
    pages: '40',
    downloads: '3,900+',
    category: 'Vendor Selection',
    emoji: '🔍',
    featured: false,
    href: '/resources/ai-vendor-evaluation-framework',
  },
  {
    id: 'ai-ethics-guidelines',
    title: 'AI Ethics Guidelines & Framework',
    description: 'Ethical AI implementation guidelines and framework for responsible AI development.',
    type: 'Guidelines',
    pages: '60',
    downloads: '2,700+',
    category: 'Ethics',
    emoji: '⚖️',
    featured: false,
    href: '/resources/ai-ethics-guidelines',
  },
  {
    id: 'ai-data-governance-template',
    title: 'AI Data Governance Template',
    description: 'Complete template for implementing AI data governance policies and procedures.',
    type: 'Template',
    pages: '30',
    downloads: '2,100+',
    category: 'Data Governance',
    emoji: '📊',
    featured: false,
    href: '/resources/ai-data-governance-template',
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Implementation':
      return 'bg-blue-100 text-blue-800';
    case 'Transformation':
      return 'bg-purple-100 text-purple-800';
    case 'Productivity':
      return 'bg-green-100 text-green-800';
    case 'Security':
      return 'bg-red-100 text-red-800';
    case 'Business':
      return 'bg-yellow-100 text-yellow-800';
    case 'Vendor Selection':
      return 'bg-indigo-100 text-indigo-800';
    case 'Ethics':
      return 'bg-pink-100 text-pink-800';
    case 'Data Governance':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ResourcesPage() {
  const featuredResources = resources.filter(resource => resource.featured);
  const otherResources = resources.filter(resource => !resource.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">📚 FREE RESOURCES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Resources & Guides
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Download our comprehensive AI implementation guides, templates, and tools. 
              Everything you need to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Custom Consultation
              </Link>
              <Link 
                href="/blog" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read Latest Articles
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Organizations
            </h2>
            <p className="text-lg text-gray-600">
              Our resources have been downloaded and used by organizations worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">55,000+</div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Templates & Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">⭐ FEATURED RESOURCES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Most Popular Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most downloaded and highly-rated resources for AI implementation and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Link key={resource.id} href={resource.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-8xl">{resource.emoji}</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-sm">{resource.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.pages} pages</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:underline">
                      Download Resource →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete collection of our AI resources, guides, and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherResources.map((resource) => (
              <Link key={resource.id} href={resource.href} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{resource.emoji}</span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.pages} pages</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:underline text-sm">
                      Download →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with New Resources
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Get notified when we release new AI resources, guides, and tools. 
              Join thousands of professionals staying ahead of the AI curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Popular Downloads */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Most Popular Downloads</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI ROI Calculator 2025</h3>
                  <p className="text-sm text-gray-600 mb-4">Interactive Excel tool to calculate AI project ROI and financial projections</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">Excel</span>
                      <span>2.3k downloads</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📋</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Implementation Checklist</h3>
                  <p className="text-sm text-gray-600 mb-4">Comprehensive checklist covering all aspects of AI project implementation</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>1.8k downloads</span>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔧</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Selection Matrix</h3>
                  <p className="text-sm text-gray-600 mb-4">Compare AI platforms and tools with detailed evaluation criteria</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">XLSX</span>
                      <span>1.5k downloads</span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories Collection</h3>
                  <p className="text-sm text-gray-600 mb-4">Compilation of 20+ real-world AI implementation success stories</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>1.2k downloads</span>
                    </div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📚</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Readiness Assessment</h3>
                  <p className="text-sm text-gray-600 mb-4">Self-assessment tool to evaluate your organization's AI readiness</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded mr-2">PDF</span>
                      <span>980 downloads</span>
                    </div>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Strategy Template</h3>
                  <p className="text-sm text-gray-600 mb-4">Complete template for developing your AI strategy and roadmap</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded mr-2">DOCX</span>
                      <span>850 downloads</span>
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get New Resources Delivered Weekly
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 15,000+ AI professionals who receive our latest resources, guides, 
            and insights delivered straight to their inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}