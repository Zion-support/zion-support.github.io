import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends',
      excerpt: 'Explore how artificial intelligence is transforming business operations and what to expect in 2024.',
      date: '2024-01-15',
      author: 'Zion Tech Team',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-business-trends.jpg'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn best practices for creating high-performance web applications using Next.js and modern development tools.',
      date: '2024-01-10',
      author: 'Development Team',
      category: 'Web Development',
      readTime: '8 min read',
      image: '/blog/nextjs-scalability.jpg'
    },
    {
      id: 3,
      title: 'Cloud Security: Protecting Your Digital Assets',
      excerpt: 'Essential security measures every business should implement when migrating to cloud infrastructure.',
      date: '2024-01-05',
      author: 'Security Team',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/blog/cloud-security.jpg'
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why It Matters in 2024',
      excerpt: 'Understanding the importance of mobile-first design and how it impacts user experience and business success.',
      date: '2024-01-01',
      author: 'Design Team',
      category: 'UI/UX Design',
      readTime: '4 min read',
      image: '/blog/mobile-first-design.jpg'
    }
  ];

  return (
    <Layout 
      title="Blog - Zion Tech Group" 
      description="Stay updated with the latest insights on technology, AI, web development, and digital transformation from our expert team."
    >
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights on technology, AI, web development, 
              and digital transformation from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl text-blue-200">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">ZT</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog/archive"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}