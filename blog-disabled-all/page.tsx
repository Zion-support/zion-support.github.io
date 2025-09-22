import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Latest Insights & Breakthroughs | Zion Tech Group',
  description: 'Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. Expert analysis, case studies, and breakthrough technologies.',
  keywords: [
    'AI blog', 'technology insights', 'quantum computing', 'neural interfaces', 
    'enterprise AI', 'business transformation', 'AI trends', 'technology news'
  ],
};

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "AI 2026: Enterprise AI Governance Blueprint",
      description: "A practical blueprint to implement policy-as-code, model risk tiers, and real-time monitoring to scale AI safely and compliantly.",
      slug: "ai-2026-enterprise-ai-governance-blueprint",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-governance-2026.jpg"
    },
    {
      title: "AI 2025: Multimodal AI Agents – Practical Enterprise Guide",
      description: "A hands-on 2025 playbook to design, deploy, and govern multimodal AI agents that drive measurable outcomes.",
      slug: "ai-2025-multimodal-agents-practical-guide",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    },
    {
      title: "Quantum AI 2026: Business Transformation Ultimate Guide",
      description: "The complete guide to quantum AI integration, business applications, and transformation strategies for 2026.",
      slug: "quantum-ai-2026-business-transformation-ultimate-guide",
      category: "Quantum Computing",
      date: "2025-09-15",
      featured: true,
      image: "/images/quantum-ai-2026.jpg"
    }
  ];

  const categories = [
    "Enterprise AI",
    "Quantum Computing", 
    "Neural Interfaces",
    "AI Governance",
    "Business Transformation",
    "Technology Trends"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI & Technology Blog - Latest Insights & Breakthroughs"
        description="Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation."
        keywords="AI blog, technology insights, quantum computing, neural interfaces, enterprise AI"
        url="/blog"
      />

      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & Technology Blog</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Expert insights, breakthrough technologies, and practical guides for enterprise AI transformation.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-purple-100 hover:text-purple-700 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights delivered to your inbox. Join thousands of enterprise leaders 
            staying ahead of AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;