import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "AI Industry Disruption 2025: How AI is Reshaping Every Sector",
      description: "Complete analysis of sector transformations, real impact data, and actionable insights for business leaders.",
      href: "/blog/ai-2025-industry-disruption",
      icon: "🏭",
      category: "Industry Analysis",
      readTime: "25 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Trends 2025 Predictions: 15 Game-Changing Developments",
      description: "Discover the 15 most important AI trends and predictions for 2025.",
      href: "/blog/ai-trends-2025-predictions",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "28 min read",
      date: "Jan 28, 2025"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="AI & Technology Blog - Expert Insights | Zion Tech Group"
        description="Stay ahead with our AI and technology blog featuring expert insights, industry analysis, and implementation guides."
        keywords="AI blog, technology blog, AI insights, AI analysis, artificial intelligence articles"
        url="/blog"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI & Technology Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay ahead with expert insights, industry analysis, and implementation guides.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-6xl">{post.icon}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.description}
                      </p>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}