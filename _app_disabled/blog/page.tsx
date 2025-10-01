import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Latest insights, trends, and updates from the world of AI, technology, and business innovation.',
  keywords: 'blog, technology, AI, business, innovation, insights',
};

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: "Explore the latest trends in artificial intelligence and how they're transforming enterprise operations.",
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    image: '/blog/ai-trends-2024.jpg',
  },
  {
    id: 2,
    title: 'Cloud Migration Best Practices: A Complete Guide',
    excerpt: 'Learn the essential steps and strategies for successful cloud migration in your organization.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Cloud Computing',
    image: '/blog/cloud-migration-guide.jpg',
  },
  {
    id: 3,
    title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
    excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: '/blog/ai-cybersecurity.jpg',
  },
  {
    id: 4,
    title: 'Building Scalable Micro SaaS Applications',
    excerpt: 'A comprehensive guide to developing and scaling micro SaaS products for modern businesses.',
    author: 'Emily Johnson',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Software Development',
    image: '/blog/micro-saas-guide.jpg',
  },
  {
    id: 5,
    title: 'Data Analytics: Turning Information into Insights',
    excerpt: 'How to leverage data analytics to drive business decisions and improve operational efficiency.',
    author: 'David Kim',
    date: '2023-12-28',
    readTime: '4 min read',
    category: 'Data Analytics',
    image: '/blog/data-analytics-insights.jpg',
  },
  {
    id: 6,
    title: 'The Rise of Quantum Computing in Business Applications',
    excerpt: 'Exploring the potential of quantum computing and its practical applications in business.',
    author: 'Dr. Lisa Wang',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Emerging Technologies',
    image: '/blog/quantum-computing.jpg',
  },
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud Computing',
  'Cybersecurity',
  'Software Development',
  'Data Analytics',
  'Emerging Technologies',
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Latest insights, trends, and updates from the world of AI, technology, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-4xl text-gray-400">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates from the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
