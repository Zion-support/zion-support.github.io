import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
  const { trackClick } = useAnalytics();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/300',
      slug: 'future-ai-business-2024'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300',
      slug: 'cloud-migration-best-practices'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2024: What You Need to Know',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about emerging security technologies and best practices.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300',
      slug: 'cybersecurity-trends-2024'
    }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsNewsletterLoading(false);
    trackClick('newsletter-subscribe', 'engagement');
  };

  return (
    <>
      <SEO
        title="Blog - Zion Tech Solutions"
        description="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team."
        keywords={['tech blog', 'AI insights', 'cloud computing', 'cybersecurity', 'digital transformation', 'technology trends']}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Updates
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead with the latest trends, insights, and best practices in technology, AI, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        onClick={() => trackClick(`blog-post-${post.id}`, 'engagement')}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest tech insights, industry trends, and expert analysis delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isNewsletterLoading}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}