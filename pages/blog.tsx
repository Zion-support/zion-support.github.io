import React from 'react';
import Layout from '../components/Layout';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Opportunities',
      excerpt: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/images/blog/ai-future.jpg'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and best practices for successfully migrating your infrastructure to the cloud.',
      date: '2024-01-10',
      category: 'Cloud & Infrastructure',
      readTime: '8 min read',
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      title: 'Cybersecurity in 2024: Emerging Threats and Solutions',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn about the most effective protection strategies.',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Discover how to create high-performance, scalable web applications using modern React and Next.js technologies.',
      date: '2024-01-01',
      category: 'Web Development',
      readTime: '7 min read',
      image: '/images/blog/nextjs.jpg'
    },
    {
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      date: '2023-12-28',
      category: 'Data & Analytics',
      readTime: '4 min read',
      image: '/images/blog/data-analytics.jpg'
    },
    {
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Explore the diverse applications of blockchain technology in various industries and business sectors.',
      date: '2023-12-25',
      category: 'Blockchain',
      readTime: '6 min read',
      image: '/images/blog/blockchain.jpg'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'Cybersecurity', 'Web Development', 'Data & Analytics', 'Blockchain'];

  return (
    <Layout 
      title="Blog - Zion Tech Group" 
      description="Stay updated with the latest insights, trends, and best practices in technology from the Zion Tech Group team."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technology Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights, trends, and best practices in technology. Our expert team shares knowledge to help you navigate the digital landscape.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;