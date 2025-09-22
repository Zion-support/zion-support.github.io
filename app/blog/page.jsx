import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "AI 2025: Enterprise AI Security Blueprint",
      description: "Layered controls for model, data, runtime, and supply chain risk in enterprise AI systems.",
      slug: "ai-2025-enterprise-ai-security-blueprint",
      category: "Security",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-security-2025.jpg"
    },
    {
      title: "AI 2025: Multimodal Agents in the Enterprise",
      description: "Design and deploy agents that see, hear, and act to deliver measurable outcomes across the enterprise.",
      slug: "ai-2025-multimodal-agents-in-the-enterprise",
      category: "AI Agents",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    }
  ];

  const allPosts = [
    ...featuredPosts,
    {
      title: "AI 2025: Ultimate Breakthrough Trends That Will Reshape Everything",
      description: "Discover the revolutionary AI trends that will transform 2025",
      slug: "ai-2025-ultimate-breakthrough-trends",
      category: "AI Trends",
      date: "2025-01-01",
      featured: false,
      image: "/images/ai-trends-2025.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI & Technology Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and practical guides for AI implementation, enterprise automation, and digital transformation.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-purple-600 font-semibold">{post.category}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-purple-600 font-semibold">{post.category}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 text-sm"
                  >
                    Read More
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;