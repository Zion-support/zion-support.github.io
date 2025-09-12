import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  const blogPosts = [
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      excerpt: "Discover how artificial intelligence is revolutionizing e-commerce platforms and creating more personalized shopping experiences.",
      category: "AI & Machine Learning",
      date: "December 15, 2024",
      slug: "ai-powered-marketplaces-the-future-of-digital-commerce",
      readTime: "8 min read"
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Learn the essential strategies for building scalable, resilient cloud applications that can handle modern workloads.",
      category: "Cloud Computing",
      date: "December 12, 2024",
      slug: "cloud-native-architecture-best-practices",
      readTime: "12 min read"
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging threats with the latest cybersecurity trends and solutions for modern businesses.",
      category: "Cybersecurity",
      date: "December 10, 2024",
      slug: "cybersecurity-trends-for-2024-and-beyond",
      readTime: "10 min read"
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Explore how edge computing is transforming IoT applications and enabling real-time data processing at the source.",
      category: "IoT & Edge Computing",
      date: "December 8, 2024",
      slug: "the-rise-of-edge-computing-in-iot-applications",
      readTime: "9 min read"
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      excerpt: "Understand how blockchain technology is being integrated into business processes to enhance security and transparency.",
      category: "Blockchain",
      date: "December 5, 2024",
      slug: "blockchain-technology-in-modern-business-solutions",
      readTime: "11 min read"
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Discover practical applications of machine learning in enterprise software and how it's driving business value.",
      category: "AI & Machine Learning",
      date: "December 3, 2024",
      slug: "machine-learning-applications-in-enterprise-software",
      readTime: "7 min read"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "IoT & Edge Computing",
    "Blockchain",
    "Digital Transformation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from Zion Tech Solutions experts." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, blockchain, IoT, digital transformation" />
        <meta property="og:title" content="Blog - Zion Tech Solutions" />
        <meta property="og:description" content="Expert insights on cutting-edge technology trends and solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Insights
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and the latest technology trends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                category === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-sm text-blue-400 mb-2">Featured Article</div>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Marketplaces: The Future of Digital Commerce</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Discover how artificial intelligence is revolutionizing e-commerce platforms and creating more personalized shopping experiences that drive conversion and customer satisfaction.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>December 15, 2024</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <Link 
                  href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🤖</div>
              <div className="text-2xl font-bold mb-2">AI & Machine Learning</div>
              <div className="text-sm opacity-90">Latest insights</div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-blue-400 font-semibold">{post.category}</span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{post.date}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights on technology trends and innovations.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-semibold mb-2">AI & ML</h3>
              <p className="text-sm text-gray-300">15 articles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="font-semibold mb-2">Cloud Computing</h3>
              <p className="text-sm text-gray-300">12 articles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-300">8 articles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔗</div>
              <h3 className="font-semibold mb-2">Blockchain</h3>
              <p className="text-sm text-gray-300">6 articles</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;