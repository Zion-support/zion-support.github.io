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
    excerpt: "Explore the latest trends in artificial intelligence and how they're transforming enterprise operations.
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
    <div className="text-left">
      {/* Hero Section */}
      <section className="text-left">
        <div className="text-left">
          <div className="text-left">
            <h1 className="text-left">Our Blog</h1>
            <p className="text-left">
              Latest insights, trends, and updates from the world of AI, technology, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="text-left">
        <div className="text-left">
          <div className="text-left">
            {/* Categories Filter */}
            <div className="text-left">
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
            <div className="text-left">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="text-left"
                >
                  <div className="text-left">
                    <div className="text-left">📝</div>
                  </div>
                  <div className="text-left">
                    <div className="text-left">
                      <span className="text-left">
                        {post.category}
                      <
                    </div>
                    <h2 className="text-left">{post.title}</h2>
                    <p className="text-left">{post.excerpt}</p>
                    <div className="text-left">
                      <div className="text-left">
                        <User className="text-left" />
                        <span>{post.author}<
                      </div>
                      <div className="text-left">
                        <Calendar className="text-left" />
                        <span>{new Date(post.date).toLocaleDateString()}<
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-left">{post.readTime}<
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-left"
                      >
                        Read More
                        <ArrowRight className="text-left" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-left">
              <button className="text-left">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-left">
        <div className="text-left">
          <div className="text-left">
            <h2 className="text-left">Stay Updated</h2>
            <p className="text-left">
              Subscribe to our newsletter for the latest insights and updates from the world of technology.
            </p>
            <div className="text-left">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-left"
              />
              <button className="text-left">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
