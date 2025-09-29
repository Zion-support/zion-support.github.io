import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      id: 'ai-marketplaces-2025',
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'Explore how artificial intelligence is revolutionizing e-commerce platforms and creating smarter, more efficient marketplaces.',
      date: '2025-01-20',
      category: 'AI & Machine Learning',
      readTime: '8 min read'
    },
    {
      id: 'cloud-native-architecture',
      title: 'Cloud-Native Architecture: Best Practices for Modern Applications',
      excerpt: 'Learn the essential principles and practices for building scalable, resilient cloud-native applications.',
      date: '2025-01-18',
      category: 'Cloud Computing',
      readTime: '10 min read'
    },
    {
      id: 'cybersecurity-trends-2025',
      title: 'Cybersecurity Trends for 2025 and Beyond',
      excerpt: 'Stay ahead of evolving cyber threats with insights into the latest security trends and protective measures.',
      date: '2025-01-15',
      category: 'Security',
      readTime: '6 min read'
    },
    {
      id: 'blockchain-business-solutions',
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Discover how blockchain is transforming industries and enabling new business models across various sectors.',
      date: '2025-01-12',
      category: 'Blockchain',
      readTime: '7 min read'
    },
    {
      id: 'quantum-computing-business',
      title: 'Quantum Computing: Implications for Business',
      excerpt: 'Understand the potential impact of quantum computing on business operations and future technological landscapes.',
      date: '2025-01-10',
      category: 'Emerging Tech',
      readTime: '9 min read'
    },
    {
      id: 'devops-automation-strategies',
      title: 'DevOps Automation Strategies for Modern Teams',
      excerpt: 'Streamline your development workflow with proven DevOps automation techniques and best practices.',
      date: '2025-01-08',
      category: 'DevOps',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Blog - Zion Tech Solutions | Latest Tech Insights & Trends</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Solutions. Expert articles on AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="technology blog, AI trends, cloud computing, cybersecurity, blockchain, quantum computing, DevOps" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Insights & Trends
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on the latest technology trends, 
            best practices, and innovative solutions from our team of industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
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
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Get the latest technology insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogIndex;