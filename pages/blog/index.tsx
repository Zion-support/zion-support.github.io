import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how AI is transforming business processes and driving efficiency across industries.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Micro SaaS: The New Era of Software Solutions",
      excerpt: "Learn about the growing trend of micro SaaS applications and how they're changing the software landscape.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      category: "Technology",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Cloud Migration Best Practices",
      excerpt: "Essential strategies for successful cloud migration and infrastructure optimization.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      category: "Cloud",
      readTime: "6 min read"
    }
  ];

  const categories = ['All', 'Technology', 'AI', 'Development', 'Innovation', 'Blockchain', 'Cloud'];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-blue-100 text-xl">
            Stay updated with the latest insights, trends, and innovations in technology
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}