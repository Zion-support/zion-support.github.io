import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The AI Revolution in 2024: How Businesses Are Transforming",
      excerpt: "Discover how AI is revolutionizing business operations in 2024. Learn about the latest AI trends, implementation strategies, and real-world success stories.",
      date: "January 15, 2024",
      category: "AI & Technology",
      readTime: "15 min read",
      image: "🤖",
      link: "/blog/ai-revolution-2024-chat"
    },
    {
      id: 2,
      title: "Cloud Computing Trends 2024: The Future of Scalable Infrastructure",
      excerpt: "Explore the latest cloud computing trends for 2024. Learn about serverless computing, edge computing, multi-cloud strategies, and how they're transforming business infrastructure.",
      date: "January 20, 2024",
      category: "Cloud Computing",
      readTime: "12 min read",
      image: "☁️",
      link: "/blog/cloud-computing-trends-2024-chat"
    },
    {
      id: 3,
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging cyber threats with our comprehensive guide to cybersecurity trends, best practices, and innovative security solutions for 2024.",
      date: "January 10, 2024",
      category: "Cybersecurity",
      readTime: "18 min read",
      image: "🛡️",
      link: "/blog/cybersecurity-trends-for-2024-and-beyond-chat"
    },
    {
      id: 4,
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Discover how machine learning is revolutionizing enterprise applications and business processes across various industries.",
      date: "January 5, 2024",
      category: "Machine Learning",
      readTime: "14 min read",
      image: "🧠",
      link: "/blog/machine-learning-applications-in-enterprise-software-chat"
    },
    {
      id: 5,
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Learn the essential principles for building scalable, resilient cloud applications that can adapt to changing business needs.",
      date: "December 28, 2023",
      category: "Cloud Architecture",
      readTime: "16 min read",
      image: "🏗️",
      link: "/blog/cloud-native-architecture-best-practices-chat"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Explore how edge computing is transforming IoT applications and enabling real-time processing at the network edge.",
      date: "December 20, 2023",
      category: "IoT & Edge Computing",
      readTime: "13 min read",
      image: "🌐",
      link: "/blog/the-rise-of-edge-computing-in-iot-applications-chat"
    }
  ];

  const categories = ["All", "AI & Technology", "Cloud Computing", "Cybersecurity", "Machine Learning", "Cloud Architecture", "IoT & Edge Computing"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Blog - Zion Tech Solutions | Technology Insights & Trends</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices. Read our expert articles on AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="technology blog, AI trends, cloud computing, cybersecurity, machine learning, tech insights" />
        <meta property="og:title" content="Blog - Zion Tech Solutions" />
        <meta property="og:description" content="Discover the latest technology trends and insights from our expert team." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Blog
          </h1>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with insights, trends, and best practices from our technology experts
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="flex items-center mb-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-4">Featured</span>
            <span className="text-blue-300 text-sm">{blogPosts[0].date}</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
          <p className="text-xl text-gray-200 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-300 mr-4">{blogPosts[0].readTime}</span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">{blogPosts[0].category}</span>
            </div>
            <Link 
              href={blogPosts[0].link}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-6xl mb-6 text-center">{post.image}</div>
              <div className="flex items-center mb-4">
                <span className="text-blue-300 text-sm mr-4">{post.date}</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">{post.readTime}</span>
                <Link 
                  href={post.link}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest technology insights, trends, and best practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let our technology experts help you implement the latest innovations and drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              View Our Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogIndex;