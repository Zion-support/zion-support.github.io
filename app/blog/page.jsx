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
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    },
    {
      title: "AI 2025: Ultimate Breakthrough Trends",
      description: "Discover the revolutionary AI trends of 2025 that are transforming industries and reshaping the future.",
      slug: "ai-2025-ultimate-breakthrough-trends",
      category: "AI Trends",
      date: "2025-09-15",
      featured: true,
      image: "/images/ai-trends-2025.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI & Technology Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guides, and breakthrough trends in AI, enterprise technology, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
            <p className="text-blue-100 mb-6">
              Get the latest AI trends, enterprise guides, and breakthrough insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;