import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Hub - AI Insights & Resources | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, guides, and resources to stay ahead of the technology curve.',
  keywords: 'AI content, technology insights, case studies, blog posts, resources, guides',
};

const contentItems = [
  // Blog Posts
  {
    id: 'ai-trends-2026',
    title: 'AI Trends 2026: The Future of Enterprise AI',
    excerpt: 'Discover the latest AI trends shaping enterprise transformation in 2026. From autonomous operations to edge intelligence and quantum AI.',
    type: 'Blog Post',
    category: 'AI Trends',
    readTime: '8 min read',
    href: '/blog/ai-trends-2026',
    featured: true,
    date: '2026-01-20',
  },
  {
    id: 'autonomous-operations',
    title: 'Autonomous AI Operations: The Next Frontier',
    excerpt: 'Learn how self-managing AI systems are revolutionizing business operations with 95% automation and $8M+ annual savings.',
    type: 'Blog Post',
    category: 'Automation',
    readTime: '6 min read',
    href: '/blog/ai-autonomous-operations',
    featured: true,
    date: '2026-01-18',
  },
  {
    id: 'edge-ai-implementation',
    title: 'Edge AI Implementation: Real-Time Intelligence',
    excerpt: 'Master edge AI deployment with sub-50ms latency and distributed intelligence for instant decision-making.',
    type: 'Blog Post',
    category: 'Edge Computing',
    readTime: '7 min read',
    href: '/blog/edge-ai-implementation',
    featured: false,
    date: '2026-01-15',
  },
  {
    id: 'quantum-ai-enterprise',
    title: 'Quantum AI in Enterprise: Beyond Classical Computing',
    excerpt: 'Explore how quantum computing is transforming enterprise AI with breakthrough optimization and modeling capabilities.',
    type: 'Blog Post',
    category: 'Quantum Computing',
    readTime: '9 min read',
    href: '/blog/quantum-ai-enterprise',
    featured: false,
    date: '2026-01-12',
  },
  {
    id: 'ai-governance-framework',
    title: 'AI Governance Framework: Ethics and Compliance',
    excerpt: 'Build comprehensive AI governance strategies for ethical deployment, regulatory compliance, and risk management.',
    type: 'Blog Post',
    category: 'Governance',
    readTime: '5 min read',
    href: '/blog/ai-governance-framework',
    featured: false,
    date: '2026-01-10',
  },
  {
    id: 'sustainable-ai-practices',
    title: 'Sustainable AI: Green Technology for the Future',
    excerpt: 'Implement environmentally conscious AI solutions that reduce carbon footprint while maintaining performance.',
    type: 'Blog Post',
    category: 'Sustainability',
    readTime: '6 min read',
    href: '/blog/sustainable-ai-practices',
    featured: false,
    date: '2026-01-08',
  },
  // Case Studies
  {
    id: 'fortune-500-transformation',
    title: 'Fortune 500 Manufacturing: $12M AI Transformation',
    excerpt: 'How a leading manufacturer achieved 90% process automation and $12M annual savings with autonomous AI operations.',
    type: 'Case Study',
    category: 'Manufacturing',
    readTime: '6 min read',
    href: '/case-studies/fortune-500-ai-transformation',
    featured: true,
    date: '2026-01-20',
  },
  {
    id: 'financial-services-fraud-detection',
    title: 'Global Bank: 95% Fraud Detection Accuracy',
    excerpt: 'Revolutionary AI-powered fraud detection system reducing false positives by 85% while improving accuracy.',
    type: 'Case Study',
    category: 'Financial Services',
    readTime: '5 min read',
    href: '/case-studies/financial-services-fraud-detection',
    featured: true,
    date: '2026-01-18',
  },
  {
    id: 'healthcare-diagnostic-ai',
    title: 'Healthcare System: AI-Powered Diagnostics',
    excerpt: 'Transforming patient care with AI-driven diagnostic systems achieving 98% accuracy in medical imaging.',
    type: 'Case Study',
    category: 'Healthcare',
    readTime: '7 min read',
    href: '/case-studies/healthcare-diagnostic-ai',
    featured: false,
    date: '2026-01-15',
  },
  {
    id: 'retail-customer-experience',
    title: 'Retail Giant: Personalized Customer Experience',
    excerpt: 'Revolutionizing retail with AI-powered personalization increasing customer satisfaction by 85%.',
    type: 'Case Study',
    category: 'Retail',
    readTime: '5 min read',
    href: '/case-studies/retail-customer-experience',
    featured: false,
    date: '2026-01-12',
  },
];

export default function ContentHubPage() {
  const featuredItems = contentItems.filter(item => item.featured);
  const blogPosts = contentItems.filter(item => item.type === 'Blog Post');
  const caseStudies = contentItems.filter(item => item.type === 'Case Study');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive collection of AI insights, case studies, guides, and resources 
              to stay ahead of the technology curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-600">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">6</div>
              <div className="text-gray-600">Blog Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">4</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$100M+</div>
              <div className="text-gray-600">Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">{item.type}</div>
                      <div className="text-sm opacity-90">{item.category}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.type}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{item.date}</span>
                      <span className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                      {item.featured && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{item.date}</span>
                      <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{item.date}</span>
                      <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with AI Trends
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get the latest AI insights, trends, and enterprise solutions delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}