import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends and Predictions",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate, from autonomous systems to advanced analytics.",
      date: "2025-01-15",
      author: "Zion Tech Team",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Micro SaaS: Building Scalable Solutions for Modern Businesses",
      excerpt: "Learn how micro SaaS applications are revolutionizing the software industry with focused, efficient solutions.",
      date: "2025-01-12",
      author: "Zion Tech Team",
      category: "Business Strategy",
      readTime: "6 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Enterprise Organizations",
      excerpt: "Essential cybersecurity strategies to protect your organization from evolving threats in the digital landscape.",
      date: "2025-01-10",
      author: "Zion Tech Team",
      category: "Security",
      readTime: "10 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understanding quantum computing and its potential impact on various industries and applications.",
      date: "2025-01-08",
      author: "Zion Tech Team",
      category: "Innovation",
      readTime: "12 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Cloud Migration Strategies: A Complete Guide",
      excerpt: "Comprehensive guide to migrating your infrastructure to the cloud with minimal disruption and maximum benefits.",
      date: "2025-01-05",
      author: "Zion Tech Team",
      category: "Cloud Computing",
      readTime: "15 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "The Rise of Autonomous Business Operations",
      excerpt: "How AI-powered autonomous systems are transforming business operations and decision-making processes.",
      date: "2025-01-03",
      author: "Zion Tech Team",
      category: "AI & Automation",
      readTime: "9 min read",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = ["All", "AI & Technology", "Business Strategy", "Security", "Innovation", "Cloud Computing", "AI & Automation"];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead with the latest insights on AI, technology, and business innovation. 
                Discover trends, strategies, and solutions that drive success.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white/80 text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-gray-800 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}