import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to AI Transformation: How to Successfully Implement AI in Your Business",
      excerpt: "Learn how to successfully transform your business with AI technology. Expert insights on AI implementation, strategy, and best practices.",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      date: "December 2024",
      slug: "ai-transformation-guide",
      featured: true
    },
    {
      title: "Blockchain Solutions for Modern Businesses: A Comprehensive Overview",
      excerpt: "Discover how blockchain technology can transform your business operations and create new opportunities in the decentralized economy.",
      category: "Blockchain",
      readTime: "6 min read",
      date: "December 2024",
      slug: "blockchain-solutions",
      featured: false
    },
    {
      title: "IoT Platforms: Connecting Your Digital World",
      excerpt: "Learn about IoT solutions that can revolutionize your business processes and customer experiences with smart connected devices.",
      category: "IoT",
      readTime: "5 min read",
      date: "December 2024",
      slug: "iot-platforms",
      featured: false
    },
    {
      title: "Cloud Architecture Best Practices for Scalable Applications",
      excerpt: "Expert guidance on designing and implementing cloud architectures that can scale with your business growth and demands.",
      category: "Cloud Computing",
      readTime: "7 min read",
      date: "December 2024",
      slug: "cloud-architecture-guide",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Blog - Zion Tech Solutions | Technology Insights & Industry News</title>
        <meta name="description" content="Stay updated with the latest technology insights, industry news, and expert guidance from Zion Tech Solutions." />
        <meta name="keywords" content="technology blog, AI insights, blockchain news, IoT solutions, cloud computing, tech trends" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and practical guidance on the latest technologies transforming businesses today.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                      Featured
                    </span>
                    <span className="text-blue-300 text-sm">{post.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-300 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-white/80 text-lg mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/70 text-sm">
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-medium mr-2">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-300 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/70 text-xs">
                      <span>{post.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-300 hover:text-blue-200 text-sm font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest technology insights, industry trends, and expert guidance delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["AI & Machine Learning", "Blockchain", "IoT", "Cloud Computing", "Cybersecurity", "Data Analytics", "Web Development", "Mobile Apps"].map((category, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-white font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;