import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business Operations',
      excerpt: 'Exploring how artificial intelligence is transforming modern business processes and what it means for your organization.',
      date: '2024-01-15',
      category: 'AI & Technology'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud while minimizing risks and downtime.',
      date: '2024-01-10',
      category: 'Cloud & DevOps'
    },
    {
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of emerging threats with our analysis of the latest cybersecurity trends and protection strategies.',
      date: '2024-01-05',
      category: 'Security'
    },
    {
      title: 'Building Scalable Micro SaaS Solutions',
      excerpt: 'Learn how to create focused, scalable micro SaaS applications that solve specific business problems.',
      date: '2024-01-01',
      category: 'Development'
    }
  ];

  return (
    <Layout title="Blog - Zion Tech Group" description="Insights, trends, and best practices in technology, AI, and business solutions.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-gray-600 mb-10 max-w-3xl text-lg">
            Stay updated with the latest insights, trends, and best practices in technology, 
            AI, cloud computing, and business solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">More articles coming soon!</p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;