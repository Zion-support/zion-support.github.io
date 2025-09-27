import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO from '../src/components/EnhancedSEO';
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
      title: 'Building Scalable Web Applications with Modern Architecture',
      excerpt: 'Discover the architectural patterns and technologies that enable web applications to scale efficiently and reliably.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Web Development',
      image: '/api/placeholder/600/300',
      slug: 'scalable-web-applications-architecture'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Web Development', 'Digital Transformation', 'Cybersecurity', 'Edge Computing'];

  const filteredPosts = blogPosts.filter(post => 
    categories.includes('All') || post.category === categories.find(cat => cat !== 'All')
  );

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsNewsletterLoading(false);
    trackClick('newsletter-subscribe', 'engagement');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <>
      <EnhancedSEO />
      <Head>
        <title>Blog - Zion App</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, web development and digital transformation from our expert team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on technology innovation and digital transformation.
            </p>
          </header>

          <main>
            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                    }`}
                    onClick={() => trackClick(`blog-category-${category}`, 'navigation')}
                  >
                    {category === 'All' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      onClick={() => trackClick(`blog-post-${post.slug}`, 'engagement')}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </section>

            {/* Newsletter Sign Up */}
            <section className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-6 text-blue-100">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isNewsletterLoading}
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                  >
                    {isNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}