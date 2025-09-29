import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex: NextPage = () => {
  const featuredArticles = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt: "Explore how artificial intelligence is revolutionizing enterprise software development and what it means for your business.",
      category: "AI Development",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      href: "/blog/machine-learning-applications-in-enterprise-software-chat",
      featured: true
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Learn the essential best practices for building scalable, resilient cloud-native applications that can grow with your business.",
      category: "Cloud Architecture",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      href: "/blog/cloud-native-architecture-best-practices-chat",
      featured: true
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of the latest cybersecurity threats and trends that every business should be aware of in the coming year.",
      category: "Cybersecurity",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      href: "/blog/cybersecurity-trends-for-2024-and-beyond-chat",
      featured: true
    }
  ];

  const allArticles = [
    {
      title: "5G Technology and Its Impact on IoT",
      excerpt: "Discover how 5G networks are transforming IoT applications and enabling new possibilities for connected devices.",
      category: "IoT",
      readTime: "6 min read",
      date: "Dec 8, 2024",
      href: "/blog/5g-technology-and-its-impact-on-iot-chat"
    },
    {
      title: "API-First Development: Building Scalable Systems",
      excerpt: "Learn why API-first development is crucial for modern applications and how to implement it effectively.",
      category: "Development",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      href: "/blog/api-first-development-building-scalable-systems-chat"
    },
    {
      title: "Augmented Reality in Enterprise Applications",
      excerpt: "Explore how AR is being used in enterprise settings to improve productivity and user experiences.",
      category: "AR/VR",
      readTime: "7 min read",
      date: "Dec 3, 2024",
      href: "/blog/augmented-reality-in-enterprise-applications-chat"
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      excerpt: "Understand how blockchain technology is being integrated into business solutions beyond cryptocurrency.",
      category: "Blockchain",
      readTime: "11 min read",
      date: "Dec 1, 2024",
      href: "/blog/blockchain-technology-in-modern-business-solutions-chat"
    },
    {
      title: "Data Analytics in Digital Transformation",
      excerpt: "Learn how data analytics drives digital transformation and helps businesses make informed decisions.",
      category: "Data Analytics",
      readTime: "8 min read",
      date: "Nov 28, 2024",
      href: "/blog/data-analytics-in-digital-transformation-chat"
    },
    {
      title: "DevOps Automation Strategies for Modern Teams",
      excerpt: "Discover effective DevOps automation strategies that can streamline your development and deployment processes.",
      category: "DevOps",
      readTime: "10 min read",
      date: "Nov 25, 2024",
      href: "/blog/devops-automation-strategies-for-modern-teams-chat"
    },
    {
      title: "Digital Twins: Revolutionizing Industry 4.0",
      excerpt: "Explore how digital twins are transforming manufacturing and industrial processes in the Industry 4.0 era.",
      category: "Industry 4.0",
      readTime: "9 min read",
      date: "Nov 22, 2024",
      href: "/blog/digital-twins-revolutionizing-industry-4-0-chat"
    },
    {
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Understand the advantages and challenges of microservices architecture and when to use it.",
      category: "Architecture",
      readTime: "12 min read",
      date: "Nov 20, 2024",
      href: "/blog/microservices-architecture-benefits-and-challenges-chat"
    },
    {
      title: "Quantum Computing: Implications for Business",
      excerpt: "Learn about the potential impact of quantum computing on business operations and what to prepare for.",
      category: "Quantum Computing",
      readTime: "15 min read",
      date: "Nov 18, 2024",
      href: "/blog/quantum-computing-implications-for-business-chat"
    },
    {
      title: "Sustainable Technology: Green Computing Solutions",
      excerpt: "Discover how technology can be made more sustainable and environmentally friendly.",
      category: "Sustainability",
      readTime: "7 min read",
      date: "Nov 15, 2024",
      href: "/blog/sustainable-technology-green-computing-solutions-chat"
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Explore how edge computing is changing the landscape of IoT applications and data processing.",
      category: "Edge Computing",
      readTime: "8 min read",
      date: "Nov 12, 2024",
      href: "/blog/the-rise-of-edge-computing-in-iot-applications-chat"
    },
    {
      title: "AI-Powered Marketplaces: The Future of Digital Commerce",
      excerpt: "Learn how AI is transforming e-commerce and marketplace platforms to provide better user experiences.",
      category: "E-commerce",
      readTime: "9 min read",
      date: "Nov 10, 2024",
      href: "/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat"
    }
  ];

  const categories = [
    "All", "AI Development", "Cloud Architecture", "Cybersecurity", "IoT", 
    "Development", "AR/VR", "Blockchain", "Data Analytics", "DevOps", 
    "Industry 4.0", "Architecture", "Quantum Computing", "Sustainability", 
    "Edge Computing", "E-commerce"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Head>
        <title>Technology Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices from Zion Tech Solutions experts." />
      </Head>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Insights & Trends
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Stay ahead of the curve with expert insights, industry trends, and practical guides from our technology experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Subscribe to Updates
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Articles</h2>
            <p className="text-xl max-w-3xl mx-auto">Handpicked articles covering the most important technology trends and insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.date}</span>
                  <Link 
                    href={article.href} 
                    className="text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  category === "All" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-6">All Articles</h2>
            <p className="text-xl max-w-3xl mx-auto">Browse our complete collection of technology articles and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.date}</span>
                  <Link 
                    href={article.href} 
                    className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Latest Insights</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology trends, insights, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndex;