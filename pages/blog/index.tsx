import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      slug: "ai-powered-marketplaces-the-future-of-digital-commerce-chat",
      excerpt: "Explore how AI is revolutionizing digital marketplaces with personalized experiences, intelligent recommendations, and automated operations.",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "E-commerce", "Digital Transformation"],
      featured: true
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      slug: "blockchain-technology-in-modern-business-solutions-chat",
      excerpt: "Discover how blockchain technology is transforming modern business operations with secure transactions, smart contracts, and decentralized solutions.",
      date: "December 14, 2024",
      readTime: "10 min read",
      tags: ["Blockchain", "Business Solutions", "Digital Innovation"]
    },
    {
      title: "5G Technology and Its Impact on IoT",
      slug: "5g-technology-and-its-impact-on-iot-chat",
      excerpt: "Understanding how 5G networks are revolutionizing IoT applications and enabling new possibilities for connected devices.",
      date: "December 13, 2024",
      readTime: "7 min read",
      tags: ["5G", "IoT", "Connectivity"]
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      slug: "cybersecurity-trends-for-2024-and-beyond-chat",
      excerpt: "Stay ahead of emerging cybersecurity threats and learn about the latest trends and technologies protecting digital assets.",
      date: "December 12, 2024",
      readTime: "9 min read",
      tags: ["Cybersecurity", "Security", "Technology Trends"]
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      slug: "cloud-native-architecture-best-practices-chat",
      excerpt: "Learn the essential best practices for building scalable, resilient cloud-native applications that can adapt to changing demands.",
      date: "December 11, 2024",
      readTime: "6 min read",
      tags: ["Cloud Computing", "Architecture", "Best Practices"]
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      slug: "machine-learning-applications-in-enterprise-software-chat",
      excerpt: "Discover how machine learning is being integrated into enterprise software to drive efficiency and innovation.",
      date: "December 10, 2024",
      readTime: "8 min read",
      tags: ["Machine Learning", "Enterprise", "Software Development"]
    }
  ];

  return (
    <UltraFuturisticBackground intensity="medium">
      <Head>
        <title>Technology Blog | Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, blockchain, cloud computing, cybersecurity, and emerging technologies from Zion Tech Solutions experts." />
        <meta name="keywords" content="technology blog, AI insights, blockchain, cloud computing, cybersecurity, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Technology Insights & Industry News
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on the latest technologies, 
            industry trends, and innovative solutions shaping the future of business.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
          <div className="bg-black/40 border border-gray-700/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">AI Revolution</h3>
                    <p className="text-blue-100">Transforming Digital Commerce</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-black/40 border border-gray-700/50 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-colors backdrop-blur-sm">
                <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h4 className="text-lg font-semibold mb-1">Tech Insights</h4>
                    <p className="text-gray-300 text-sm">Industry Expertise</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-cyan-400 hover:text-white font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
            Get the latest technology insights, industry trends, and expert analysis delivered 
            directly to your inbox. Join thousands of professionals who trust our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-cyan-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
};

export default BlogIndex;
